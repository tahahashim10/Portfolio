import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

import convoImage from '@/assets/convo-ai.jpg';
import escapeImage from '@/assets/escape-room.jpg';
import flyNextImage from '@/assets/fly-next.jpg';
import groceryImage from '@/assets/grocery-commerce.jpg';
import smileImage from '@/assets/smile-manager.jpg';
import unixImage from '@/assets/unix-shell.jpg';

const projects = [
  {
    title: 'SMILE Program Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    image: smileImage,
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    title: 'Grocery Commerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    image: groceryImage,
    technologies: ['ASP.NET', 'SQL Server', 'C#', 'Entity Framework'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    title: 'FlyNext',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    image: flyNextImage,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    title: 'Unix Shell',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    image: unixImage,
    technologies: ['C', 'Unix', 'Shell'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    title: 'Escape Room',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    image: escapeImage,
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    title: 'Convo AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    image: convoImage,
    technologies: ['Next.js', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            A showcase of full-stack applications and systems I've built, from cloud infrastructure to user-facing web apps.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Featured Projects - Larger Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <Card key={project.title} className="overflow-hidden gradient-card border-primary/10 card-hover group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-card transition-all group/btn"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Other Projects - Smaller Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <Card key={project.title} className="overflow-hidden gradient-card border-primary/10 card-hover group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
