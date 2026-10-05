"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const GithubIcon = ({size=24}: {size?:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.75-1.5-3.75.15-.35.75-1.75-.15-3.75 0 0-1.25-.4-3.85 1.4-1.2-.3-2.45-.4-3.7-.4s-2.5.1-3.7.4C4.25 1.5 3 1.9 3 1.9c-.9 2-.3 3.4-.15 3.75-1 1-1.5 2.25-1.5 3.75 0 5.2 3 6.4 6 6.75A4.8 4.8 0 0 0 7 18v4"/><path d="M4 19a5 5 0 0 1-4-2"/></svg>;
const LinkedinIcon = ({size=24}: {size?:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Milestones", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-200 ease-in-out left-1/2 -translate-x-1/2 ${
        scrolled
          ? "top-4 w-[95%] max-w-6xl rounded-full border shadow-2xl py-1.5 px-6 md:px-8 backdrop-blur-md"
          : "top-6 w-[95%] max-w-7xl rounded-full border py-2 px-6 md:px-10 bg-transparent"
      }`}
      style={{
        background: scrolled ? "rgba(10,22,40,0.85)" : "rgba(10,22,40,0.4)",
        borderColor: scrolled ? "rgba(6,182,212,0.3)" : "rgba(99,102,241,0.15)",
        boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(6,182,212,0.1) inset" : "none",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          href="#"
          className="font-bold tracking-tight whitespace-nowrap text-[14px] md:text-[15px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          <span style={{ color: "#D0D8EE" }}>{"{\""} </span>
          <span
            style={{
              background: "linear-gradient(90deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SAHANA MARIGOUDRA
          </span>
          <span style={{ color: "#D0D8EE" }}>  {"\"}"}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center text-[13px] font-medium" style={{ color: "#A8B5D0" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative hover:text-foreground transition-colors group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#06b6d4] group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
            style={{
              background: "rgba(10,22,40,0.7)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#A8B5D0",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.6)";
              (e.currentTarget as HTMLElement).style.color = "#06b6d4";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(6,182,212,0.25)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#A8B5D0";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            <LinkedinIcon size={16} />
          </Link>
          <Link
            href={portfolioData.personalInfo.github}
            target="_blank"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
            style={{
              background: "rgba(10,22,40,0.7)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#A8B5D0",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.6)";
              (e.currentTarget as HTMLElement).style.color = "#a855f7";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(168,85,247,0.25)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#A8B5D0";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            <GithubIcon size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full h-screen flex flex-col items-center pt-20 gap-8 md:hidden"
            style={{ background: "rgba(5,11,29,0.97)", borderTop: "1px solid rgba(26,39,68,0.8)", backdropFilter: "blur(16px)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              className="mt-8 px-8 py-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

