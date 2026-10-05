"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    type: "certificate",
    title: "Microsoft Power BI Workshop",
    issuer: "Chetan Business School",
    year: "2026",
    description: "Completed an intensive Power BI workshop covering data visualization, analytics dashboards, and business intelligence reporting.",
    tags: ["Power BI", "Data Science", "Analytics"],
    color: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30",
    icon: <Star size={18} className="text-[#f59e0b]" />,
    link: "https://www.linkedin.com/posts/sahana-marigoudra-359648354_powerbi-datascience-analytics-activity-7445401151706968064-FpwH",
    image: "/certificates/power-bi.jpg",
  },
  {
    type: "certificate",
    title: "Microsoft Azure 25-Hour Course",
    issuer: "Microsoft Learn & FICE",
    year: "2026",
    description: "Successfully completed a comprehensive 25-hour course on Microsoft Azure cloud computing platform.",
    tags: ["Azure", "Cloud Computing"],
    color: "bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/30",
    icon: <Star size={18} className="text-[#3b82f6]" />,
    link: "/certificates/microsoft-azure.pdf",
    image: "/certificates/microsoft-azure.png",
  },
  {
    type: "certificate",
    title: "Full Stack Development Program",
    issuer: "Metvy",
    year: "2026",
    description: "Recognized for proficiency and competence in web development, programming, and software engineering. Equipped to build scalable web applications.",
    tags: ["Full Stack", "Web Dev", "Software Engineering"],
    color: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30",
    icon: <Star size={18} className="text-[#10b981]" />,
    link: "/certificates/metvy-full-stack.pdf",
    image: "/certificates/metvy.png",
  },
  {
    type: "certificate",
    title: "Advanced Python",
    issuer: "Hope Foundation & Bajaj Finserv",
    year: "2024",
    description: "Successfully completed the Advanced Python course, demonstrating advanced programming skills.",
    tags: ["Python", "Programming"],
    color: "bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/30",
    icon: <Star size={18} className="text-[#8b5cf6]" />,
    link: "/certificates/advanced-python.pdf",
    image: "/certificates/advanced-python.png",
  },
];

const milestones = [
  {
    year: "2026",
    title: "HackLite Winner",
    organization: "Chetan Business School (CodeCrafters Club)",
    description: "Secured the Winner position in HackLite-2026, in recognition of outstanding problem-solving ability, technical excellence, and full-stack web development skills.",
    icon: <Trophy size={18} className="text-[#f59e0b]" />,
    color: "bg-[#f59e0b]/10 border-[#f59e0b]/30",
    link: "/certificates/hacklite.pdf",
    image: "/certificates/hacklite.png",
  },
  {
    year: "2026",
    title: "Fresh Guard Box",
    organization: "Spark Tank / Web Wave / Tech Connect",
    description: "Presented a startup idea at the Spark Tank event organized through the Web Wave / Tech Connect activity.",
    icon: <Award size={18} className="text-[#8b5cf6]" />,
    color: "bg-[#8b5cf6]/10 border-[#8b5cf6]/30",
    link: "https://www.linkedin.com/posts/sahana-marigoudra-359648354_freshguardbox-sparktank-techconnect-activity-7469762520610824192-y0Bq?utm_source=share&utm_medium=member_android&rcm=ACoAAFhfQ_UBpQ0VYHe4WeU23R1LZfh-tXmKY0E",
    image: "/certificates/fresh-guard-box.jpg",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" as const },
  }),
};

export function Milestones() {
  return (
    <section id="achievements" className="container mx-auto px-6 md:px-12 py-24 relative">
      {/* Heading */}
      <div className="mb-16">
        <span className="text-[13px] md:text-[15px] tracking-[0.2em] uppercase text-[#A8B5D0] font-[600] mb-4 block">
          ACHIEVEMENTS
        </span>
        <h2 className="text-[32px] md:text-[42px] font-[700] leading-[1.2] tracking-tight mb-6 text-foreground">
          Certifications & Key Milestones
        </h2>
        <p className="text-[#A8B5D0] text-[16px] md:text-[18px] font-[400] leading-[1.6] max-w-xl">
          Verified technical credentials, milestones, and competitive hackathon achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Certificates & Milestones combined in one grid for visual consistency with screenshot */}
        {[...certificates, ...milestones].map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariant}
            className="glow-card bg-card border border-border rounded-2xl flex flex-col hover:border-accent/40 hover:shadow-md transition-all shadow-sm overflow-hidden"
          >
            {/* Image Placeholder / Link Area */}
            <a 
              href={item.link || "#"} 
              target={item.link ? "_blank" : "_self"} 
              className="relative w-full h-48 bg-muted/20 flex items-center justify-center border-b border-border group overflow-hidden"
            >
               {'image' in item && item.image ? (
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill 
                   className="object-cover object-top transition-transform duration-200 group-hover:scale-105"
                 />
               ) : (
                 <>
                   <div className={`absolute inset-0 opacity-20 ${'color' in item ? item.color.split(' ')[0] : 'bg-accent/10'}`}></div>
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center border bg-card shadow-sm z-10 transition-transform group-hover:scale-110 ${'color' in item ? item.color : 'text-accent'}`}>
                      {item.icon}
                   </div>
                 </>
               )}
               
               {item.link && (
                 <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border text-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                   <ExternalLink size={16} />
                 </div>
               )}
            </a>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[14px] md:text-[15px] font-semibold px-3 py-1 rounded-full bg-muted/10 border border-border text-[#A8B5D0]">
                  {'issuer' in item ? item.issuer : item.organization}
                </span>
                <span className="text-[14px] md:text-[15px] font-mono font-medium text-accent bg-accent/10 px-2 py-1 rounded-md">
                  {item.year}
                </span>
              </div>
              
              <h3 className="text-[22px] md:text-[26px] font-[600] text-foreground mb-2 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-[15px] md:text-[17px] text-[#A8B5D0] font-[400] leading-[1.6] leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Tags */}
              {'tags' in item && item.tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-background border border-border text-[#A8B5D0] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
