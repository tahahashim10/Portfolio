import { GlassNavbar } from '@/components/GlassNavbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="portfolio-site-grain pointer-events-none absolute inset-0 z-0" />
      <div className="portfolio-site-grid pointer-events-none absolute inset-0 z-0" />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      <GlassNavbar />
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-muted-foreground border-t border-primary/10">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            © 2026 Taha Hashim. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
