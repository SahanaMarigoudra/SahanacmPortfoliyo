"use client";

import { useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// MagicRings — canvas-based animated concentric rings background
// Props match the React Bits MagicRings spec exactly.
// Uses pure Canvas2D (no Three.js dependency) for lightweight rendering.
// ─────────────────────────────────────────────────────────────────────────────

interface MagicRingsProps {
  /** Primary ring color (hex or CSS color) */
  color?: string;
  /** Secondary ring color for gradient blending */
  colorTwo?: string;
  /** Number of concentric rings */
  ringCount?: number;
  /** Animation speed multiplier */
  speed?: number;
  /** Brightness attenuation (higher = softer glow) */
  attenuation?: number;
  /** Ring stroke thickness in px */
  lineThickness?: number;
  /** Base radius as fraction of container (0–1) */
  baseRadius?: number;
  /** Radius increment between rings as fraction */
  radiusStep?: number;
  /** Pulsing scale rate */
  scaleRate?: number;
  /** Overall canvas opacity (0–1) */
  opacity?: number;
  /** CSS filter blur in px */
  blur?: number;
  /** Organic noise amount (0–1) */
  noiseAmount?: number;
  /** Whether rings follow mouse position */
  followMouse?: boolean;
  /** How strongly rings pull toward mouse (0–1) */
  mouseInfluence?: number;
  /** Scale multiplier on hover */
  hoverScale?: number;
  /** Parallax shift amount */
  parallax?: number;
  /** Click burst effect */
  clickBurst?: boolean;
  /** Additional className on the canvas wrapper */
  className?: string;
}

function hexToRgb(hex: string): [number, number, number] {
  // Support named CSS colors by painting to an offscreen canvas
  const ctx = typeof document !== "undefined"
    ? document.createElement("canvas").getContext("2d")
    : null;
  if (ctx) {
    ctx.fillStyle = hex;
    const parsed = ctx.fillStyle; // resolves named colors → hex
    const m = parsed.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (m) return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  }
  const m = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (m) return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  return [66, 252, 255]; // fallback cyan
}

/** Simple pseudo-random noise function */
function noise(x: number, y: number, t: number): number {
  return Math.sin(x * 3.1 + t) * Math.cos(y * 2.7 - t * 0.7) * 0.5 +
         Math.sin(x * 1.3 - t * 0.4) * Math.cos(y * 4.1 + t * 0.3) * 0.5;
}

export default function MagicRings({
  color = "#42fcff",
  colorTwo = "#fc42ff",
  ringCount = 5,
  speed = 0.5,
  attenuation = 12,
  lineThickness = 1.4,
  baseRadius = 0.30,
  radiusStep = 0.09,
  scaleRate = 0.05,
  opacity = 0.5,
  blur = 1,
  noiseAmount = 0.03,
  followMouse = false,
  mouseInfluence = 0.12,
  hoverScale = 1,
  parallax = 0,
  clickBurst = false,
  className = "",
}: MagicRingsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const hoveredRef = useRef(false);
  const burstRef = useRef(0);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  const rgb1 = hexToRgb(color);
  const rgb2 = hexToRgb(colorTwo);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const minDim = Math.min(W, H);

    // Smooth mouse follow
    const mx = mouseRef.current;
    const tx = targetMouseRef.current;
    mx.x += (tx.x - mx.x) * 0.06;
    mx.y += (tx.y - mx.y) * 0.06;

    ctx.clearRect(0, 0, W, H);

    const t = timeRef.current;
    const currentScale = (hoveredRef.current ? hoverScale : 1) +
      Math.sin(t * speed * 1.8) * scaleRate;
    const burst = burstRef.current > 0 ? 1 + burstRef.current * 0.3 : 1;
    if (burstRef.current > 0) burstRef.current -= 0.05;

    // Mouse offset for followMouse / parallax
    const offsetX = followMouse
      ? (mx.x - 0.5) * mouseInfluence * minDim
      : (mx.x - 0.5) * parallax * minDim;
    const offsetY = followMouse
      ? (mx.y - 0.5) * mouseInfluence * minDim
      : (mx.y - 0.5) * parallax * minDim;

    for (let i = 0; i < ringCount; i++) {
      // Blend color between rgb1 and rgb2 per ring
      const blend = ringCount > 1 ? i / (ringCount - 1) : 0;
      const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * blend);
      const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * blend);
      const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * blend);

      // Ring radius with noise distortion
      const baseR = (baseRadius + radiusStep * i) * minDim * currentScale * burst;
      const noisyR = baseR * (1 + noiseAmount * noise(i * 0.5, i * 0.3, t * speed));

      // Opacity attenuation per ring (inner rings brighter)
      const ringOpacity = opacity * (1 - (i / ringCount) * (attenuation / 20));

      // Ring center (mouse follow)
      const rcx = cx + offsetX;
      const rcy = cy + offsetY;

      // Draw ring as a series of small arc segments with slight warping
      const segments = 120;
      ctx.beginPath();
      for (let s = 0; s <= segments; s++) {
        const angle = (s / segments) * Math.PI * 2;
        // Noise-warped radius per segment
        const warp = 1 + noiseAmount * 1.5 * noise(
          Math.cos(angle) * (i + 1),
          Math.sin(angle) * (i + 1),
          t * speed * 0.7
        );
        const pr = noisyR * warp;
        const px = rcx + Math.cos(angle) * pr;
        const py = rcy + Math.sin(angle) * pr;
        if (s === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();

      ctx.strokeStyle = `rgba(${r},${g},${b},${Math.max(0, ringOpacity)})`;
      ctx.lineWidth = lineThickness;
      ctx.stroke();
    }

    timeRef.current += 0.016;
    rafRef.current = requestAnimationFrame(draw);
  }, [
    ringCount, speed, attenuation, lineThickness, baseRadius, radiusStep,
    scaleRate, opacity, blur, noiseAmount, followMouse, mouseInfluence,
    hoverScale, parallax, rgb1, rgb2,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    const onEnter = () => { hoveredRef.current = true; };
    const onLeave = () => {
      hoveredRef.current = false;
      targetMouseRef.current = { x: 0.5, y: 0.5 };
    };
    const onClick = () => {
      if (clickBurst) burstRef.current = 1;
    };

    const parent = canvas.parentElement;
    if (followMouse || parallax || hoverScale !== 1) {
      parent?.addEventListener("mousemove", onMove);
      parent?.addEventListener("mouseenter", onEnter);
      parent?.addEventListener("mouseleave", onLeave);
    }
    if (clickBurst) parent?.addEventListener("click", onClick);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      parent?.removeEventListener("mousemove", onMove);
      parent?.removeEventListener("mouseenter", onEnter);
      parent?.removeEventListener("mouseleave", onLeave);
      parent?.removeEventListener("click", onClick);
    };
  }, [draw, followMouse, parallax, hoverScale, clickBurst]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
        zIndex: 0,
      }}
    />
  );
}
