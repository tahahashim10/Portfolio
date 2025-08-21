import { GlassNavbar } from '@/components/GlassNavbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      <GlassNavbar />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-primary/10">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            © 2024 Taha Hashim. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
