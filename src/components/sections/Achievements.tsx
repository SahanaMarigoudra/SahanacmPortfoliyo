"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, Zap, Terminal } from "lucide-react";

export function Achievements() {
  const getIcon = (index: number) => {
    switch(index % 3) {
      case 0: return <Zap size={20} className="text-accent" />;
      case 1: return <Terminal size={20} className="text-accent" />;
      case 2: return <Award size={20} className="text-accent" />;
      default: return <Award size={20} className="text-accent" />;
    }
  };

  return (
    <section id="achievements" className="container mx-auto px-6 md:px-12 py-24">
      <SectionHeading number="04" title="Achievements" />

      <div className="max-w-4xl mx-auto">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative pl-12 pb-16 border-l border-border last:border-l-0 last:pb-0"
          >
            {/* Timeline Dot/Icon */}
            <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
              {getIcon(index)}
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <span className="text-accent font-mono text-sm tracking-wider">
                {achievement.year}
              </span>
              <h3 className="text-2xl font-light uppercase tracking-wide group-hover:text-accent transition-colors">
                {achievement.title}
              </h3>
            </div>
            
            <p className="text-muted uppercase text-xs tracking-widest font-mono mb-4">
              {achievement.organization}
            </p>
            
            <p className="text-muted/80 text-lg font-light leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
