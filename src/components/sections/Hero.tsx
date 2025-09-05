import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Hero Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Reveal effect="fade-up" duration={800}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 hero-text">
            Taha Hashim
          </h1>

          <Reveal effect="fade-up" delay={80}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-muted-foreground max-w-4xl mx-auto">
              crafting software with purpose and precision
            </p>
          </Reveal>

          <Reveal effect="fade-up" delay={160}>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Full-stack engineer building scalable web applications and cloud infrastructure
            </p>
          </Reveal>

          <Reveal effect="fade-up" delay={240}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-card transition-all group"
              >
                More about me
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
              >
                View projects
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                size="lg"
                className="hover:bg-secondary/20 transition-all"
              >
                Get in touch
              </Button>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
