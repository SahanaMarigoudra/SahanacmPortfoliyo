"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

import { SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiNodedotjs, SiMysql, SiGit, SiGithub, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import dynamic from "next/dynamic";
const MagicRings = dynamic(() => import("@/components/ui/MagicRings"), { ssr: false });

const techs = [
  { name: "Python",     color: "#3776AB", Icon: SiPython },
  { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { name: "HTML5",      color: "#E34F26", Icon: SiHtml5 },
  { name: "CSS3",       color: "#1572B6", Icon: SiCss },
  { name: "React",      color: "#61DAFB", Icon: SiReact },
  { name: "Node.js",    color: "#339933", Icon: SiNodedotjs },
  { name: "MySQL",      color: "#4479A1", Icon: SiMysql },
  { name: "Git",        color: "#F05032", Icon: SiGit },
  { name: "GitHub",     color: "#c0cde0", Icon: SiGithub },
  { name: "VS Code",    color: "#007ACC", Icon: VscVscode },
  { name: "MongoDB",    color: "#47A248", Icon: SiMongodb },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-12 pt-32 pb-16">

      {/* ── Deep Navy Background Layer ── */}
      <div className="absolute inset-0 -z-20" style={{ background: "linear-gradient(135deg, #050B1D 0%, #07132A 60%, #06101F 100%)" }} />

      {/* Atmospheric glow blobs */}
      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
        {/* Top-left purple glow */}
        <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[55%] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Right-side blue/cyan glow behind illustration */}
        <div className="absolute top-[5%] right-[-10%] w-[55%] h-[80%] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, rgba(99,102,241,0.10) 50%, transparent 80%)", filter: "blur(80px)" }} />
        {/* Bottom-center purple glow */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />
        {/* Subtle abstract curved shape top-right */}
        <svg className="absolute top-0 right-0 w-[45%] h-auto opacity-[0.06]" viewBox="0 0 600 600" fill="none">
          <ellipse cx="400" cy="150" rx="300" ry="200" stroke="url(#g1)" strokeWidth="1.5" />
          <ellipse cx="500" cy="300" rx="200" ry="150" stroke="url(#g1)" strokeWidth="1" />
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        {/* Subtle dot-grid texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #a8b5d0 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>
      <div 
        className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 rounded-[2rem] md:rounded-[3rem] border p-8 md:p-12 lg:p-16 mt-12 md:mt-16 overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #0b1121 0%, #030712 100%)",
          borderColor: "rgba(255,255,255,0.06)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
        }}
      >
        <div className="flex-1 flex flex-col items-start text-left">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border"
            style={{
              background: "rgba(10,22,40,0.7)",
              borderColor: "rgba(99,102,241,0.35)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 18px rgba(99,102,241,0.12)"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#A8B5D0" }}>
              Tech Enthusiast
            </span>
          </motion.div>

          {/* Main Heading — "Hi, I'm Sahana Marigoudra" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="font-extrabold tracking-tight leading-[1.1] mb-3"
            style={{ fontSize: "clamp(36px, 6vw, 60px)" }}
          >
            <span style={{ color: "#F5F7FF" }}>Hi, I&apos;m </span>
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7 0%, #6366f1 45%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sahana Marigoudra
            </span>
          </motion.h1>

          {/* Secondary Headline — "Turning Ideas Into Digital Solutions" */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="font-[700] tracking-tight leading-[1.2] mb-6"
            style={{ fontSize: "clamp(30px, 4vw, 42px)" }}
          >
            <span style={{ color: "#F5F7FF" }}>Turning Ideas Into</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7 0%, #6366f1 45%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Solutions
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="max-w-xl leading-relaxed mb-10"
            style={{ color: "#A8B5D0", fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 400, lineHeight: "1.6" }}
          >
            I&apos;m a passionate software developer focused on building practical, user-friendly applications.
            I enjoy transforming ideas and real-world problems into efficient solutions using modern technologies.
          </motion.p>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.055 }}
            className="mb-10 w-full"
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[clamp(11px,1.5vw,13px)] font-semibold tracking-widest uppercase" style={{ color: "#A8B5D0" }}>
                Technologies I Work With
              </span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.4) 0%, rgba(6,182,212,0.1) 100%)" }} />
            </div>

            <div className="flex flex-wrap gap-3">
              {techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.055 + i * 0.03 }}
                  className="glow-card flex flex-col items-center justify-center rounded-2xl transition-all duration-200 group hover:-translate-y-1 cursor-default"
                  style={{
                    width: "88px",
                    height: "88px",
                    padding: "10px 6px",
                    background: "rgba(10,22,40,0.75)",
                    border: "1px solid rgba(99,102,241,0.22)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 2px 16px rgba(6,182,212,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.55)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.22)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(6,182,212,0.06), inset 0 1px 0 rgba(255,255,255,0.04)";
                  }}
                >
                  <div className="flex items-center justify-center mb-1.5 transition-transform duration-200 group-hover:scale-110" style={{ color: tech.color }}>
                    <tech.Icon size={34} />
                  </div>
                  <span className="text-[10.5px] font-semibold text-center leading-tight" style={{ color: "#A8B5D0" }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary — gradient */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)",
                boxShadow: "0 0 24px rgba(168,85,247,0.4), 0 0 8px rgba(6,182,212,0.2)",
                fontSize: "15px",
              }}
            >
              <Mail size={17} />
              Let&apos;s Connect →
            </a>

            {/* Secondary — outlined glass */}
            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all duration-200 hover:opacity-90"
              style={{
                background: "rgba(10,22,40,0.65)",
                border: "2px solid rgba(99,102,241,0.45)",
                color: "#c4cfe8",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 16px rgba(99,102,241,0.12)",
                fontSize: "15px",
              }}
            >
              <ArrowDown size={17} className="animate-bounce" style={{ color: "#06b6d4" }} />
              Explore Projects
            </a>
          </motion.div>
        </div>

        {/* ── Right — Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex-shrink-0 w-56 h-56 md:w-[380px] md:h-[380px] lg:-mt-24"
        >

          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full z-10 overflow-hidden"
            style={{
              border: "1px solid rgba(99,102,241,0.3)",
              padding: "12px",
              background: "rgba(10,22,40,0.45)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 80px rgba(6,182,212,0.25), 0 0 40px rgba(168,85,247,0.2)",
            }}
          >
            {/* MagicRings — behind photo */}
            <MagicRings
              color="#42fcff"
              colorTwo="#fc42ff"
              ringCount={3}
              speed={0.7}
              attenuation={12}
              lineThickness={1.5}
              baseRadius={0.32}
              radiusStep={0.09}
              scaleRate={0.06}
              opacity={0.75}
              blur={0}
              noiseAmount={0}
              followMouse={true}
              mouseInfluence={0.12}
              hoverScale={1.08}
              parallax={0.03}
              clickBurst={false}
            />
            <div
              className="w-full h-full rounded-full overflow-hidden relative"
              style={{ border: "3px solid rgba(99,102,241,0.4)", zIndex: 1, position: "relative" }}
            >
              <Image
                src="/profile.jpg"
                alt="Sahana Marigoudra"
                fill
                className="object-cover object-center opacity-0 transition-opacity duration-200"
                onLoad={(e) => (e.target as HTMLImageElement).classList.remove("opacity-0")}
              />
            </div>
          </div>

          {/* Glowing orbital dots */}
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full z-20 animate-pulse"
            style={{ background: "#a855f7", boxShadow: "0 0 20px #a855f7, 0 0 40px rgba(168,85,247,0.5)" }} />
          <div className="absolute bottom-20 right-5 w-3 h-3 rounded-full z-20 animate-ping"
            style={{ background: "#06b6d4", boxShadow: "0 0 15px #06b6d4" }} />
          <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-full z-20"
            style={{ background: "rgba(168,85,247,0.3)", filter: "blur(18px)" }} />

          {/* Thin orbital rings */}
          <div className="absolute inset-[-30px] rounded-full border-2 border-dashed z-0 animate-[spin_60s_linear_infinite]"
            style={{ borderColor: "rgba(6,182,212,0.3)" }} />
          <div className="absolute inset-[-60px] rounded-full border z-0 animate-[spin_40s_linear_infinite_reverse]"
            style={{ borderColor: "rgba(168,85,247,0.2)" }} />
        </motion.div>
      </div>
    </section>
  );
}
