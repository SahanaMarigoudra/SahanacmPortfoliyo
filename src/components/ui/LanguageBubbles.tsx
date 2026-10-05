"use client";

import { motion } from "framer-motion";

const techBadges = [
  { label: "Java",       color: "#f89820", bg: "rgba(248,152,32,0.1)" },
  { label: "Python",     color: "#3b7bbf", bg: "rgba(59,123,191,0.1)" },
  { label: "JavaScript", color: "#f7df1e", bg: "rgba(247,223,30,0.1)" },
  { label: "MySQL",      color: "#4479a1", bg: "rgba(68,121,161,0.1)" },
  { label: "React",      color: "#61dafb", bg: "rgba(97,218,251,0.1)" },
  { label: "HTML5",      color: "#e34f26", bg: "rgba(227,79,38,0.1)" },
  { label: "CSS3",       color: "#264de4", bg: "rgba(38,77,228,0.1)" },
  { label: "Git",        color: "#f05032", bg: "rgba(240,80,50,0.1)" },
];

// Fixed positions to avoid hydration mismatch
const positions = [
  { left: "5%",  top: "15%" },
  { left: "82%", top: "10%" },
  { left: "15%", top: "75%" },
  { left: "75%", top: "70%" },
  { left: "50%", top: "5%"  },
  { left: "3%",  top: "50%" },
  { left: "88%", top: "40%" },
  { left: "45%", top: "88%" },
];

// Fixed animation targets to avoid hydration mismatch
const animations = [
  { x: [0,  30, -20,  0], y: [0, -40,  20,  0] },
  { x: [0, -40,  15,  0], y: [0,  30, -25,  0] },
  { x: [0,  20, -30,  0], y: [0, -20,  40,  0] },
  { x: [0, -25,  35,  0], y: [0,  40, -15,  0] },
  { x: [0,  35, -10,  0], y: [0, -30,  20,  0] },
  { x: [0, -15,  40,  0], y: [0,  25, -35,  0] },
  { x: [0,  40, -20,  0], y: [0, -15,  30,  0] },
  { x: [0, -30,  10,  0], y: [0,  35, -20,  0] },
];

const durations = [18, 22, 16, 24, 20, 14, 26, 19];

export function LanguageBubbles() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {techBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border select-none"
          style={{
            left: positions[i].left,
            top: positions[i].top,
            color: badge.color,
            background: badge.bg,
            borderColor: `${badge.color}40`,
            fontSize: "0.78rem",
            fontWeight: 600,
          }}
          animate={{
            x: animations[i].x,
            y: animations[i].y,
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: durations[i],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span style={{ color: badge.color }}>{"<>"}</span>
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}
