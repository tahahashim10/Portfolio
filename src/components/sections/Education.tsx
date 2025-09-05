import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Education
            </h2>
          </Reveal>
          
          <Reveal effect="fade-up" delay={100}>
          <Card className="p-8 gradient-card border-primary/10 card-hover">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-xl text-primary mb-3">
                  University of Toronto
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Expected 2026
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Toronto, ON
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                Focused on software engineering and web technologies. Strong foundation in algorithms, data structures, database design, testing, and information security.
                </p>
              </div>
            </div>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
