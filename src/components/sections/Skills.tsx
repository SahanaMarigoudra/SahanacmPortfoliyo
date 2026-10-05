"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiMysql, SiGit, SiGithub, SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import dynamic from "next/dynamic";
const MagicRings = dynamic(() => import("@/components/ui/MagicRings"), { ssr: false });

// ── Icon data for the scroll row ─────────────────────────────────────────────
const toolIcons = [
  { name: "React",    color: "#61DAFB", Icon: SiReact },
  { name: "Node.js",  color: "#339933", Icon: SiNodedotjs },
  { name: "MySQL",    color: "#4479A1", Icon: SiMysql },
  { name: "Git",      color: "#F05032", Icon: SiGit },
  { name: "GitHub",   color: "#c0cde0", Icon: SiGithub },
  { name: "VS Code",  color: "#007ACC", Icon: VscVscode },
  { name: "MongoDB",  color: "#47A248", Icon: SiMongodb },
];

// ── Single icon card ──────────────────────────────────────────────────────────
function IconCard({ name, color, Icon }: { name: string; color: string; Icon: React.ElementType }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 flex-shrink-0 cursor-default select-none
                 transition-transform duration-200 hover:scale-110"
      style={{ width: "96px", height: "96px" }}
    >
      <div
        className="glow-card flex flex-col items-center justify-center rounded-2xl w-full h-full"
        style={{
          background: "rgba(10,22,40,0.75)",
          border: "1px solid rgba(99,102,241,0.22)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 16px rgba(6,182,212,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
          padding: "10px 6px",
        }}
      >
        <div style={{ color, marginBottom: "6px" }}>
          <Icon size={34} />
        </div>
        <span
          className="text-[10.5px] font-semibold text-center leading-tight"
          style={{ color: "#A8B5D0" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

// ── Infinite marquee row ──────────────────────────────────────────────────────
// Technique: duplicate the array so the track is 2× wide.
// Animate translateX(0 → -50%) → seamless loop with no jump.
function MarqueeRow({
  icons,
  duration,
  label,
}: {
  icons: typeof toolIcons;
  duration: number;   // seconds for one full loop
  label: string;
}) {
  // Duplicate for seamless loop
  const doubled = [...icons, ...icons, ...icons, ...icons];

  return (
    <div>
      {/* Row label */}
      <div className="flex items-center gap-4 mb-4">
        <span
          className="text-[13px] md:text-[15px] font-[600] tracking-[0.22em] uppercase"
          style={{ color: "#A8B5D0" }}
        >
          {label}
        </span>
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(168,85,247,0.4) 0%, rgba(6,182,212,0.1) 100%)",
          }}
        />
      </div>

      {/* Scroll viewport — clips overflow, pauses on hover */}
      <div
        className="marquee-viewport overflow-hidden relative"
        style={{
          /* Fade edges with a mask so icons gracefully appear/disappear */
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* The moving track */}
        <div
          className="marquee-track flex gap-4"
          style={{
            /* width is auto — will be 4× the original set because we duplicated 4× */
            animationDuration: `${duration}s`,
            width: "max-content",
          }}
        >
          {doubled.map((item, i) => (
            <IconCard key={`${item.name}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Existing skill category cards ─────────────────────────────────────────────
const skillCategories = [
  {
    icon: "💻",
    iconBg: "bg-blue-500/10 text-blue-400",
    title: "Languages",
    description: "Core languages I use to write algorithms, web applications, and data solutions.",
    skills: [
      { name: "Java",       icon: "☕", color: "text-orange-400 bg-orange-400/10" },
      { name: "Python",     icon: "🐍", color: "text-blue-400 bg-blue-400/10" },
      { name: "JavaScript", icon: "𝐉𝐒", color: "text-yellow-400 bg-yellow-400/10" },
    ],
  },
  {
    icon: "🎨",
    iconBg: "bg-purple-500/10 text-purple-400",
    title: "Frontend Development",
    description: "Crafting responsive user interfaces and accessible web layouts.",
    skills: [
      { name: "HTML5",    icon: "🔶", color: "text-orange-500 bg-orange-500/10" },
      { name: "CSS3",     icon: "🔷", color: "text-blue-500 bg-blue-500/10" },
      { name: "JSP",      icon: "📄", color: "text-green-400 bg-green-400/10" },
      { name: "Servlets", icon: "⚙️", color: "text-gray-400 bg-gray-400/10" },
    ],
  },
  {
    icon: "🗄️",
    iconBg: "bg-teal-500/10 text-teal-400",
    title: "Database Systems",
    description: "Structuring schemas, writing queries, and managing relational data.",
    skills: [
      { name: "MySQL", icon: "🐬", color: "text-blue-400 bg-blue-400/10" },
      { name: "JDBC",  icon: "🔗", color: "text-green-400 bg-green-400/10" },
    ],
  },
  {
    icon: "🛠️",
    iconBg: "bg-amber-500/10 text-amber-400",
    title: "Developer Tools",
    description: "Version control, IDEs, and server tools for efficient development.",
    skills: [
      { name: "Git",           icon: "🔀", color: "text-orange-500 bg-orange-500/10" },
      { name: "GitHub",        icon: "⚫", color: "text-gray-300 bg-gray-300/10" },
      { name: "VS Code",       icon: "🔵", color: "text-blue-400 bg-blue-400/10" },
      { name: "NetBeans",      icon: "🟤", color: "text-amber-400 bg-amber-400/10" },
      { name: "Apache Tomcat", icon: "🐈", color: "text-yellow-500 bg-yellow-500/10" },
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" as const },
  }),
};

// ── Main Section ──────────────────────────────────────────────────────────────
export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 md:px-12 py-24">

      {/* Section Heading */}
      <div className="mb-16">
        <span className="text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-[#A8B5D0] font-[600] mb-4 block">
          SKILLS
        </span>
        <h2 className="text-[32px] md:text-[42px] font-[700] leading-[1.2] tracking-tight mb-6 text-foreground">
          Technologies &amp; Tools
        </h2>
        <p className="text-[#A8B5D0] text-[16px] md:text-[18px] font-[400] leading-[1.6] max-w-2xl">
          A curated set of skills I&apos;ve built through coursework, projects, and self-study.
        </p>
      </div>

      {/* ── Marquee Scroll Row — Technologies & Tools ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3 }}
        className="mb-16"
      >
        <MarqueeRow icons={toolIcons} duration={26} label="Technologies & Tools" />
      </motion.div>

      {/* ── Existing Category Cards Grid (unchanged) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariant}
            className="glow-card bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 hover:border-accent/40 transition-colors shadow-sm hover:shadow-md relative overflow-hidden"
          >
            {/* MagicRings subtle background */}
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
              opacity={0.25}
              blur={0}
              noiseAmount={0}
              followMouse={false}
              hoverScale={1}
              parallax={0}
              clickBurst={false}
            />
            {/* Card header */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${cat.iconBg}`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-foreground text-base">{cat.title}</h3>
            </div>

            {/* Description */}
            <p className="text-[15px] md:text-[17px] text-[#A8B5D0] font-[400] leading-[1.6] leading-relaxed">{cat.description}</p>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] md:text-[15px] font-[600] border border-border ${skill.color}`}
                >
                  <span className="text-sm leading-none">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
