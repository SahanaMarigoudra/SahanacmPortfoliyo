"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Star, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import dynamic from "next/dynamic";
const MagicRings = dynamic(() => import("@/components/ui/MagicRings"), { ssr: false });

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" as const },
  }),
};

export function Education() {
  const edu = portfolioData.education;

  return (
    <section id="education" className="container mx-auto px-6 md:px-12 py-24 relative">
      {/* Decorative background element */}
      <div className="absolute right-8 top-20 text-[14rem] font-bold text-foreground/5 select-none pointer-events-none hidden lg:block">
        {"</>"}
      </div>

      {/* Heading */}
      <div className="mb-16">
        <span className="text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-[#A8B5D0] font-[600] mb-4 block">
          ACADEMICS
        </span>
        <h2 className="text-[32px] md:text-[42px] font-[700] leading-[1.2] tracking-tight mb-6 text-foreground">
          Academic Background
        </h2>
        <p className="text-[#A8B5D0] text-[16px] md:text-[18px] font-[400] leading-[1.6] max-w-xl">
          My educational timeline, highlights, and academic scores.
        </p>
      </div>

      {/* Card Grid — 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {edu.map((item, i) => (
          <motion.div
            key={item.degree}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariant}
            className="glow-card relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/40 hover:shadow-md transition-all shadow-sm overflow-hidden"
          >
            {/* MagicRings — soft background for academics card */}
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
            {/* Top row: icon + degree short + date */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground text-base leading-tight">
                      {item.short}
                    </h3>
                    {item.label && (
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                        {item.label}
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] md:text-[16px] text-accent font-medium mt-0.5">{item.institution}</p>
                </div>
              </div>

              {/* Year badge */}
              <div className="flex items-center gap-1 text-[#A8B5D0] text-[13px] md:text-[14px] flex-shrink-0">
                <Calendar size={12} />
                <span>{item.dates.split("–")[1] ?? item.dates}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Bottom row: location + score */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-[#A8B5D0] text-[15px] md:text-[16px]">
                <MapPin size={13} className="flex-shrink-0" />
                <span>{item.location}</span>
              </div>
              {item.percentage && (
                <div className="flex items-center gap-1.5 text-[13px] md:text-[14px] font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                  <Star size={11} />
                  {item.percentage}
                </div>
              )}
              {item.status === "Current" && !item.percentage && (
                <div className="flex items-center gap-1.5 text-[13px] md:text-[14px] font-semibold text-[#A8B5D0] bg-muted/10 border border-border px-3 py-1 rounded-full">
                  <Calendar size={11} />
                  Current
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
