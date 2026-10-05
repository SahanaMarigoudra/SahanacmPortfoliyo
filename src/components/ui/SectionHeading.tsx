"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-16 md:mb-24 mt-24">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-accent text-[clamp(14px,2vw,16px)] font-[600] tracking-widest"
      >
        {number}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="text-[clamp(30px,5vw,40px)] font-[700] leading-[1.2] uppercase tracking-wider"
      >
        — {title}
      </motion.h2>
    </div>
  );
}
