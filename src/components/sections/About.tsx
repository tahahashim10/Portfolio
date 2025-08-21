import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import headshotImage from '@/assets/headshot.jpg';
import { TechStack } from '@/components/TechStack';

export function About() {
  const handleResumeDownload = () => {
    // TODOResume download logic
    console.log('Download resume');
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
            <div className="md:col-span-1 text-center">
              <div className="relative inline-block mb-6">
                <img
                  src={headshotImage}
                  alt="Taha Hashim"
                  className="w-48 h-48 rounded-full object-cover shadow-glow mx-auto"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20" />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At praesentium nobis quasi. Blanditiis ut cupiditate maiores nemo beatae sit a est libero saepe, soluta illo. Nostrum in fugiat esse? Maxime!
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta labore, minus deserunt quia aut tenetur tempore aliquam rem nostrum, veniam molestiae! Beatae autem corporis laboriosam earum temporibus laborum impedit!
              </p>
              
              <Button
                onClick={handleResumeDownload}
                className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-card transition-all group"
              >
                <FileDown className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <TechStack />
        </div>
      </div>
    </section>
  );
}
