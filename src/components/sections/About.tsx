"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { BookOpen, Code, Database, Lightbulb, Settings, GraduationCap } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "MCA Student",
      icon: <BookOpen className="text-[#10b981]" size={24} />,
      desc: "Pursuing Post-Graduation in Computer Applications, blending advanced theory with practical application.",
      bg: "bg-[#10b981]/10"
    },
    {
      title: "Software Developer",
      icon: <Code className="text-[#8b5cf6]" size={24} />,
      desc: "Developing applications with Java, Python, HTML/CSS, and Javascript.",
      bg: "bg-[#8b5cf6]/10"
    },
    {
      title: "Database Management",
      icon: <Database className="text-[#3b82f6]" size={24} />,
      desc: "Designing and managing efficient relational databases using MySQL and JDBC.",
      bg: "bg-[#3b82f6]/10"
    },
    {
      title: "Problem Solver",
      icon: <Lightbulb className="text-[#f59e0b]" size={24} />,
      desc: "Analyzing workflows and writing efficient code to solve real-world problems.",
      bg: "bg-[#f59e0b]/10"
    }
  ];

  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-24 min-h-screen relative">
      {/* Decorative background element */}
      <div className="absolute right-10 top-40 text-[20rem] font-bold text-foreground/5 dark:text-[#A8B5D0]/5 select-none pointer-events-none">
        {"</>"}
      </div>

      <div className="mb-16">
        <span className="text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-[#A8B5D0] font-[600] mb-4 block">
          ABOUT ME
        </span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[42px] font-[700] leading-[1.2] tracking-tight mb-6 text-foreground"
        >
          A Developer Focused on Practical Code & Automation
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-[#A8B5D0] text-[16px] md:text-[18px] font-[400] leading-[1.6] max-w-2xl"
        >
          {portfolioData.personalInfo.statement}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-10"
        >
          <div className="pl-6 border-l-4 border-[#10b981]">
            <h3 className="text-[24px] md:text-[32px] font-[700] leading-[1.3] mb-4 text-foreground">
              Bridging academic knowledge with real-world builds
            </h3>
            <p className="text-[#A8B5D0] text-[16px] md:text-[18px] font-[400] leading-[1.6]">
              {portfolioData.personalInfo.about}
            </p>
          </div>

          <div>
            <span className="text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-[#A8B5D0] font-[600] mb-6 block">
              ENGINEERING PHILOSOPHY
            </span>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Settings size={18} className="text-[#8b5cf6]" />
                </div>
                <div>
                  <h4 className="font-[600] text-[22px] md:text-[26px] text-foreground mb-1">Practical Solutions</h4>
                  <p className="text-[15px] md:text-[17px] text-[#A8B5D0] font-[400] leading-[1.6]">Building software that solves real business bottlenecks with efficient, clean code.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <GraduationCap size={18} className="text-[#10b981]" />
                </div>
                <div>
                  <h4 className="font-[600] text-[22px] md:text-[26px] text-foreground mb-1">Continuous Learning</h4>
                  <p className="text-[15px] md:text-[17px] text-[#A8B5D0] font-[400] leading-[1.6]">Constantly exploring emerging technologies to stay ahead and build modern systems.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {cards.map((card, idx) => (
            <div key={idx} className="glow-card bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bg}`}>
                {card.icon}
              </div>
              <div>
                <h4 className="font-[600] text-[22px] md:text-[26px] text-foreground mb-2">{card.title}</h4>
                <p className="text-[15px] md:text-[17px] text-[#A8B5D0] font-[400] leading-[1.6] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
