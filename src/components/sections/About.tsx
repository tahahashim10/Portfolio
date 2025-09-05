import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import headshotImage from '@/assets/headshot.jpg';
import { TechStack } from '@/components/TechStack';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              About Me
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
            <div className="md:col-span-1 text-center">
              <Reveal effect="zoom">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 -z-10" />
                  <img
                    src={headshotImage}
                    alt="Taha Hashim"
                    className="w-48 h-48 rounded-full object-cover shadow-glow mx-auto relative z-10"
                  />
                </div>
              </Reveal>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <Reveal effect="fade-up" cascade cascadeDelay={100}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m Taha Hashim, a Computer Science & Math student at the University of Toronto focused on software engineering.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At AWS, I contributed to large-scale monitoring systems that impacted millions of customers, and at Acadia University I developed a platform that streamlined workflows for hundreds of users.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m driven by building reliable systems and creating simple, effective user experiences.
                </p>
              </Reveal>

              <Reveal effect="fade-up" delay={200}>
                <a
                  href="/Taha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-card transition-all group">
                    <FileDown className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </Button>
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal effect="fade-up" delay={80}>
            <TechStack />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
