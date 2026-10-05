"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { FileBadge } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="container mx-auto px-6 md:px-12 py-24 bg-card/30">
      <SectionHeading number="05" title="Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group p-8 border border-border bg-background relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          >
            {/* Abstract visual background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-200"></div>
            
            <div>
              <FileBadge size={32} className="text-muted mb-8 group-hover:text-accent transition-colors duration-200" />
              <div className="text-accent font-mono text-xs tracking-widest mb-4">
                {cert.year}
              </div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-2">
                {cert.title}
              </h3>
              <p className="text-muted uppercase text-xs tracking-widest font-mono mb-6">
                {cert.organization}
              </p>
            </div>

            <p className="text-muted/80 text-sm font-light leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
