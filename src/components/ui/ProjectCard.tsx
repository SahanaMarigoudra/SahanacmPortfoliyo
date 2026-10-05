"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const MagicRings = dynamic(() => import("@/components/ui/MagicRings"), { ssr: false });

// ── GitHub SVG icon ───────────────────────────────────────────────────────────
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

// ── College Event Carousel ────────────────────────────────────────────────────
const COLLEGE_EVENT_SLIDES = [
  "/projects/college-event/slide1.png",
  "/projects/college-event/slide2.png",
  "/projects/college-event/slide3.png",
  "/projects/college-event/slide4.png",
  "/projects/college-event/slide5.png",
];

function CollegeEventCarousel() {
  const [current, setCurrent] = useState(0);
  const total = COLLEGE_EVENT_SLIDES.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#050B1D" }}>
      {COLLEGE_EVENT_SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-200 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={src}
            alt={`College Event Management System - screen ${i + 1}`}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      ))}
      {/* Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all"
        style={{ background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.5)" }}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all"
        style={{ background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.5)" }}
      >
        <ChevronRight size={16} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {COLLEGE_EVENT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="transition-all rounded-full"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              background: i === current
                ? "linear-gradient(90deg,#a855f7,#06b6d4)"
                : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Medical Inventory Carousel ────────────────────────────────────────────────
const MEDICAL_SLIDES = [
  { src: "/projects/medical-inventory/01-dashboard.png", alt: "Dashboard Overview" },
  { src: "/projects/medical-inventory/02-medicine.png", alt: "Medicine Management" },
  { src: "/projects/medical-inventory/03-inventory.png", alt: "Inventory Tracking" },
  { src: "/projects/medical-inventory/04-billing.png", alt: "Billing Transaction" },
  { src: "/projects/medical-inventory/05-reports.png", alt: "Reports & Analytics" },
  { src: "/projects/medical-inventory/06-invoice.png", alt: "Tax Invoice" },
];
const MEDICAL_LABELS = [
  "Dashboard Overview",
  "Medicine Management",
  "Inventory Tracking",
  "Billing Transaction",
  "Reports & Analytics",
  "Tax Invoice"
];

function MedicalInventoryCarousel() {
  const [current, setCurrent] = useState(0);
  const total = MEDICAL_SLIDES.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: "#f8fafc" }}>
      {/* Label bar */}
      <div
        className="shrink-0 flex items-center gap-2 px-4 py-1.5"
        style={{
          background: "linear-gradient(90deg,rgba(6,182,212,0.10),rgba(168,85,247,0.06))",
          borderBottom: "1px solid rgba(6,182,212,0.18)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
        <span className="text-[clamp(11px,1.5vw,13px)] font-[600] tracking-widest uppercase" style={{ color: "#4B6FA0" }}>
          {MEDICAL_LABELS[current]}
        </span>
      </div>

      {/* Slides */}
      <div className="relative flex-1 overflow-hidden">
        {MEDICAL_SLIDES.map(({ src, alt }, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-200 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all shadow-md"
          style={{ background: "rgba(6,182,212,0.80)", border: "1px solid rgba(6,182,212,1)" }}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all shadow-md"
          style={{ background: "rgba(6,182,212,0.80)", border: "1px solid rgba(6,182,212,1)" }}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div
        className="shrink-0 flex items-center justify-center gap-2 py-2"
        style={{ borderTop: "1px solid rgba(6,182,212,0.15)", background: "rgba(6,182,212,0.04)" }}
      >
        {MEDICAL_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="transition-all rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "linear-gradient(90deg,#06b6d4,#a855f7)" : "rgba(6,182,212,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── IPL Prediction Carousel ───────────────────────────────────────────────────
const IPL_SLIDES = [
  { src: "/projects/ipl-prediction/01-dashboard.jpg", alt: "IPL Auction Intelligence Dashboard" },
  { src: "/projects/ipl-prediction/02-upload.jpg", alt: "Data Ingestion Pipeline" },
  { src: "/projects/ipl-prediction/03-heatmap.jpg", alt: "Feature Correlations Heatmap" },
  { src: "/projects/ipl-prediction/04-diagnostics.jpg", alt: "Model Diagnostics & Algorithm Comparison" },
  { src: "/projects/ipl-prediction/05-predictions.jpg", alt: "Prediction Output & Valuations" },
];
const IPL_LABELS = [
  "Dashboard",
  "Data Ingestion",
  "Correlations",
  "Diagnostics",
  "Predictions"
];

function IplPredictionCarousel() {
  const [current, setCurrent] = useState(0);
  const total = IPL_SLIDES.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: "#0a0a1a" }}>
      {/* Label bar */}
      <div
        className="shrink-0 flex items-center gap-2 px-4 py-1.5"
        style={{
          background: "linear-gradient(90deg,rgba(245,158,11,0.15),rgba(239,68,68,0.1))",
          borderBottom: "1px solid rgba(245,158,11,0.2)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
        <span className="text-[clamp(11px,1.5vw,13px)] font-[600] tracking-widest uppercase" style={{ color: "#FBBF24" }}>
          {IPL_LABELS[current]}
        </span>
      </div>

      {/* Slides */}
      <div className="relative flex-1 overflow-hidden">
        {IPL_SLIDES.map(({ src, alt }, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-200 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all shadow-md"
          style={{ background: "rgba(245,158,11,0.5)", border: "1px solid rgba(245,158,11,0.8)" }}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all shadow-md"
          style={{ background: "rgba(245,158,11,0.5)", border: "1px solid rgba(245,158,11,0.8)" }}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div
        className="shrink-0 flex items-center justify-center gap-2 py-2"
        style={{ borderTop: "1px solid rgba(245,158,11,0.15)", background: "rgba(245,158,11,0.05)" }}
      >
        {IPL_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="transition-all rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "linear-gradient(90deg,#f59e0b,#ef4444)" : "rgba(245,158,11,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const PAW_CONNECT_SLIDES = [
  { src: "/projects/paw-connect/01-home.jpg", alt: "Paw Connect Home Page" },
  { src: "/projects/paw-connect/02-register.jpg", alt: "Create Account Page" },
  { src: "/projects/paw-connect/03-browse.jpg", alt: "Browse Pets and Filter" },
  { src: "/projects/paw-connect/04-details.jpg", alt: "Pet Detail View" },
  { src: "/projects/paw-connect/05-cart.jpg", alt: "Shopping Cart" },
  { src: "/projects/paw-connect/06-dashboard.jpg", alt: "Admin Dashboard" },
  { src: "/projects/paw-connect/07-success.jpg", alt: "Payment Success" },
  { src: "/projects/paw-connect/08-dashboard2.jpg", alt: "Revenue Overview Dashboard" },
  { src: "/projects/paw-connect/09-manage-pets.jpg", alt: "Admin Manage Pets" },
  { src: "/projects/paw-connect/10-manage-orders.jpg", alt: "Admin Manage Orders" },
];

const PAW_CONNECT_LABELS = [
  "Home Page",
  "User Registration",
  "Browse Pets",
  "Pet Details",
  "Shopping Cart",
  "Admin Dashboard",
  "Payment Success",
  "Revenue Overview",
  "Manage Pets",
  "Manage Orders",
];

function PawConnectCarousel() {
  const [current, setCurrent] = useState(0);
  const total = PAW_CONNECT_SLIDES.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: "#f8fafc" }}>
      {/* Label bar */}
      <div
        className="shrink-0 flex items-center gap-2 px-4 py-1.5"
        style={{
          background: "linear-gradient(90deg,rgba(6,182,212,0.10),rgba(168,85,247,0.06))",
          borderBottom: "1px solid rgba(6,182,212,0.18)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
        <span className="text-[clamp(11px,1.5vw,13px)] font-[600] tracking-widest uppercase" style={{ color: "#4B6FA0" }}>
          {PAW_CONNECT_LABELS[current]}
        </span>
      </div>

      {/* Slides */}
      <div className="relative flex-1 overflow-hidden">
        {PAW_CONNECT_SLIDES.map(({ src, alt }, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-200 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background: "rgba(99,102,241,0.5)", border: "1px solid rgba(99,102,241,0.8)" }}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background: "rgba(99,102,241,0.5)", border: "1px solid rgba(99,102,241,0.8)" }}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div
        className="shrink-0 flex items-center justify-center gap-2 py-2"
        style={{ borderTop: "1px solid rgba(6,182,212,0.15)", background: "rgba(6,182,212,0.05)" }}
      >
        {PAW_CONNECT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="transition-all rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "linear-gradient(90deg,#a855f7,#06b6d4)" : "rgba(6,182,212,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function AbstractVisual({ type }: { type: string }) {
  const configs: Record<string, { from: string; to: string; label: string; icon: string }> = {
    "medical-inventory": {
      from: "#3b82f6", to: "#06b6d4",
      label: "Inventory Management",
      icon: "💊",
    },
    "ipl-prediction": {
      from: "#f59e0b", to: "#ef4444",
      label: "ML Prediction Model",
      icon: "🏏",
    },
  };

  const c = configs[type] ?? { from: "#6366f1", to: "#06b6d4", label: "Project", icon: "💻" };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-6 relative overflow-hidden"
      style={{ background: "#050B1D" }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full"
          style={{ background: `radial-gradient(circle, ${c.from}30 0%, transparent 70%)`, filter: "blur(30px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full"
          style={{ background: `radial-gradient(circle, ${c.to}25 0%, transparent 70%)`, filter: "blur(25px)" }} />
      </div>

      {/* Mock browser content */}
      <div
        className="relative z-10 w-[85%] rounded-xl overflow-hidden"
        style={{
          background: "rgba(10,22,40,0.9)",
          border: `1px solid ${c.from}40`,
          boxShadow: `0 0 30px ${c.from}20`,
        }}
      >
        {/* Fake sidebar + content */}
        <div className="flex h-48">
          {/* Sidebar */}
          <div className="w-16 flex flex-col gap-2 p-3 border-r" style={{ borderColor: `${c.from}20`, background: "rgba(10,22,40,0.8)" }}>
            <div className="w-8 h-8 rounded-lg text-xl flex items-center justify-center">{c.icon}</div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2.5 rounded-full" style={{ background: `${c.from}30`, width: `${50 + i * 8}%` }} />
            ))}
          </div>
          {/* Main area */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="h-3 rounded-full w-1/2" style={{ background: `linear-gradient(90deg,${c.from}60,${c.to}60)` }} />
            <div className="grid grid-cols-3 gap-2 mt-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 rounded-lg" style={{ background: `${c.from}18`, border: `1px solid ${c.from}25` }} />
              ))}
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-2 rounded-full" style={{ background: "rgba(168,181,208,0.15)", width: `${80 - i * 12}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="text-xs font-bold tracking-widest uppercase z-10" style={{ color: "#A8B5D0", opacity: 0.7 }}>
        {c.label}
      </span>
    </div>
  );
}

// ── Project interface ─────────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  imageType: string;
}

// ── Gradient title: last word gets the gradient ───────────────────────────────
function GradientTitle({ title }: { title: string }) {
  const words = title.split(" ");
  // Highlight the last 1–2 words with gradient
  const splitAt = words.length > 3 ? words.length - 2 : words.length - 1;
  const plain = words.slice(0, splitAt).join(" ");
  const grad  = words.slice(splitAt).join(" ");
  return (
    <h3 className="text-[clamp(28px,3vw,38px)] font-[700] tracking-tight mb-5 leading-[1.15]">
      {plain && <span style={{ color: "#F5F7FF" }}>{plain} </span>}
      <span
        style={{
          background: "linear-gradient(90deg,#a855f7 0%,#6366f1 50%,#06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {grad}
      </span>
    </h3>
  );
}

// ── Main exported card ────────────────────────────────────────────────────────
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  const getVisual = (type: string) => {
    if (type === "college-event") return <CollegeEventCarousel />;
    if (type === "medical-inventory") return <MedicalInventoryCarousel />;
    if (type === "ipl-prediction") return <IplPredictionCarousel />;
    if (type === "paw-connect") return <PawConnectCarousel />;
    return <AbstractVisual type={type} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative mb-24 max-w-[1300px] mx-auto"
    >
      {/* Card background glow */}
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          background: isEven
            ? "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(168,85,247,0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="glow-card group relative flex flex-col lg:flex-row gap-8 items-stretch rounded-[24px] p-6 md:p-8 lg:p-10 overflow-hidden"
        style={{
          background: "rgba(10,22,40,0.7)",
          border: "1px solid rgba(6,182,212,0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 40px rgba(6,182,212,0.08), 0 1px 0 rgba(255,255,255,0.05) inset",
        }}
      >
        {/* MagicRings background — behind all card content */}
        <MagicRings
          color="#42fcff"
          colorTwo="#9b5cff"
          ringCount={2}
          speed={0.45}
          attenuation={14}
          lineThickness={1.2}
          baseRadius={0.30}
          radiusStep={0.10}
          scaleRate={0.04}
          opacity={0.15}
          blur={0}
          noiseAmount={0}
          followMouse={false}
          hoverScale={1}
          parallax={0}
          clickBurst={false}
        />
        {/* Subtle top-edge gradient line */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg,transparent,rgba(168,85,247,0.5),rgba(6,182,212,0.5),transparent)" }}
        />

        {/* ── Screenshot / Visual Side ── */}
        <div className="w-full lg:w-[58%] flex-shrink-0 relative flex items-center justify-center">
          {/* Inner container with glow and rounded corners */}
          <div
            className="relative w-full h-[350px] md:h-[450px] lg:h-[530px] rounded-[20px] overflow-hidden transition-all duration-200 group-hover:scale-[1.01]"
            style={{
              boxShadow: "0 0 0 1px rgba(99,102,241,0.2), 0 0 30px rgba(99,102,241,0.1), 0 0 60px rgba(6,182,212,0.05)",
              background: "transparent",
            }}
          >
            {/* Screenshot body */}
            <div className="relative w-full h-full overflow-hidden rounded-[20px]">
              {getVisual(project.imageType)}
            </div>
          </div>
        </div>

        {/* ── Content Side ── */}
        <div className="w-full lg:w-[42%] flex flex-col justify-center py-2 lg:py-6">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span
              className="flex items-center gap-1.5 text-[clamp(11px,1.5vw,13px)] font-[600] tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#A8B5D0",
              }}
            >
              <span style={{ color: "#6366f1" }}>&lt;/&gt;</span>
              {project.subtitle}
            </span>
            {project.imageType === "college-event" && (
              <span
                className="flex items-center gap-1 text-[clamp(11px,1.5vw,13px)] font-[600] tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  color: "#f59e0b",
                }}
              >
                🏆 Featured
              </span>
            )}
          </div>

          {/* Title with gradient on last word(s) */}
          <GradientTitle title={project.title} />

          {/* Description */}
          <p className="text-[clamp(15px,2vw,17px)] font-[400] leading-[1.6] mb-6" style={{ color: "#A8B5D0" }}>
            {project.description}
          </p>

          {/* Features — glowing cyan check */}
          <div className="flex flex-col gap-3 mb-6">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: "rgba(6,182,212,0.15)",
                    border: "1px solid rgba(6,182,212,0.4)",
                    boxShadow: "0 0 8px rgba(6,182,212,0.3)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[clamp(15px,1.5vw,16px)] font-[500] leading-[1.7]" style={{ color: "#C4CFE4" }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[14px] md:text-[15px] font-[500] px-3.5 py-1.5 rounded-full transition-all"
                style={{
                  background: "rgba(10,22,40,0.8)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "#C4CFE4",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            {project.github && (
              <Link
                href={project.github}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[clamp(14px,1.5vw,15px)] font-[600] transition-all duration-200"
                style={{
                  background: "rgba(10,22,40,0.8)",
                  border: "1px solid rgba(99,102,241,0.4)",
                  color: "#C4CFE4",
                  boxShadow: "0 0 16px rgba(99,102,241,0.1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(168,85,247,0.7)";
                  el.style.boxShadow = "0 0 20px rgba(168,85,247,0.25)";
                  el.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(99,102,241,0.4)";
                  el.style.boxShadow = "0 0 16px rgba(99,102,241,0.1)";
                  el.style.color = "#C4CFE4";
                }}
              >
                <GithubIcon size={17} />
                GitHub Repository
              </Link>
            )}

            {project.liveDemo && (
              <Link
                href={project.liveDemo}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(90deg,#a855f7 0%,#6366f1 50%,#06b6d4 100%)",
                  boxShadow: "0 0 20px rgba(168,85,247,0.35), 0 0 8px rgba(6,182,212,0.2)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(168,85,247,0.5), 0 0 14px rgba(6,182,212,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(168,85,247,0.35), 0 0 8px rgba(6,182,212,0.2)";
                }}
              >
                <ExternalLink size={15} />
                Live Demonstration
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
