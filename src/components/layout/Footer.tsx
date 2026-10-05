import { portfolioData } from "@/data/portfolioData";
import { Code } from "lucide-react";
import Link from "next/link";

const GithubIcon = ({size=24}: {size?:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.75-1.5-3.75.15-.35.75-1.75-.15-3.75 0 0-1.25-.4-3.85 1.4-1.2-.3-2.45-.4-3.7-.4s-2.5.1-3.7.4C4.25 1.5 3 1.9 3 1.9c-.9 2-.3 3.4-.15 3.75-1 1-1.5 2.25-1.5 3.75 0 5.2 3 6.4 6 6.75A4.8 4.8 0 0 0 7 18v4"/><path d="M4 19a5 5 0 0 1-4-2"/></svg>;
const LinkedinIcon = ({size=24}: {size?:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl tracking-wider mb-1 uppercase">{portfolioData.personalInfo.name}</p>
          <p className="text-muted text-sm">{portfolioData.personalInfo.role}</p>
        </div>
        
        <div className="flex gap-6">
          <Link href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <GithubIcon size={20} />
          </Link>
          <Link href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <LinkedinIcon size={20} />
          </Link>
          {portfolioData.personalInfo.leetcode && (
            <Link href={portfolioData.personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              <Code size={20} />
            </Link>
          )}
        </div>

        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}
        </div>
      </div>
    </footer>
  );
}
