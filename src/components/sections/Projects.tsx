"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">

      {/* ── Section-level atmospheric background glows ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Top-left purple blob */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Center-right cyan blob */}
        <div
          className="absolute top-1/3 -right-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Bottom-left indigo blob */}
        <div
          className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Decorative gradient curves (SVG) */}
        <svg
          className="absolute top-10 right-0 w-[45%] h-auto opacity-[0.05]"
          viewBox="0 0 700 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="500" cy="200" rx="350" ry="220" stroke="url(#pg1)" strokeWidth="1.5" />
          <ellipse cx="580" cy="320" rx="250" ry="160" stroke="url(#pg1)" strokeWidth="1" />
          <defs>
            <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #a8b5d0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Section container ── */}
      <div className="container mx-auto px-6 md:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase mb-4 block"
            style={{ color: "#a855f7" }}
          >
            03 — SELECTED WORK
          </span>
          <h2
            className="text-[32px] md:text-[42px] font-[700] leading-[1.2] tracking-tight mb-6 text-foreground"
          >
            Featured Projects
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "#A8B5D0" }}>
            A curated collection of projects built with modern technologies and a focus on real-world problem solving.
          </p>
        </motion.div>

        {/* Divider line */}
        <div
          className="h-px w-full mb-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(168,85,247,0.4) 0%, rgba(6,182,212,0.3) 50%, transparent 100%)",
          }}
        />

        {/* ── Project cards ── */}
        <div className="flex flex-col">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
