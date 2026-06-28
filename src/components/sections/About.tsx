import { TechStack } from '@/components/TechStack';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="about-section-grid pointer-events-none absolute inset-0 z-0" />
      <div className="about-section-grain-field pointer-events-none absolute left-1/2 top-[34%] z-0 h-[38rem] w-[min(96vw,70rem)] -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              About Me
            </h2>
          </Reveal>
          
          <div className="mb-16 text-center">
            <div className="relative isolate mx-auto max-w-2xl space-y-6">
              <Reveal effect="fade-up" cascade cascadeDelay={58} className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m Taha Hashim, a Software Development Engineer at AWS with a Computer Science & Math background from the University of Toronto.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I started my full-time SDE role at AWS in June 2026 after previously contributing to large-scale monitoring systems there as an intern. At Acadia University, I developed a platform that streamlined workflows for hundreds of users.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m driven by building reliable systems and creating simple, effective user experiences.
                </p>
              </Reveal>

              {/* Resume download removed as requested */}
            </div>
          </div>

          <Reveal effect="fade-up" delay={60}>
            <TechStack />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
