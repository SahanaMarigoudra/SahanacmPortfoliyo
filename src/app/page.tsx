import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Milestones } from "@/components/sections/Milestones";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { LanguageBubbles } from "@/components/ui/LanguageBubbles";
import { BubbleBackground } from "@/components/ui/BubbleBackground";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-foreground relative">
      <BubbleBackground />
      <LanguageBubbles />
      <Navbar />

      <div className="flex flex-col gap-12 md:gap-24 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Milestones />
        <Education />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
