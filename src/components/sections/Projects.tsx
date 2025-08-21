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

const MAX_TECH_CHIPS = 4;

const projects = [
  {
    title: 'FlyNext',
    description:
      'Travel booking app with hotel/flight reservations, secure auth, and role-based access control.',
    image: flyNextImage,
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://flynext-deploy-v4st-tahahashim10s-projects.vercel.app/',
    githubUrl: 'https://github.com/tahahashim10/FlyNext',
    featured: true
  },
  {
    title: 'SMILE Program Management App',
    description:
      'Full-stack platform digitizing SMILE workflows for 700+ users, cutting weekly admin work by 10+ hours.',
    image: smileImage,
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://project-18-s-m-i-l-e.vercel.app/',
    githubUrl: 'https://github.com/devshah21/smile-repo',
    videoUrl: 'https://drive.google.com/file/d/1h5RkMd7voaG7836mg2hofmVYc7-TeRZa/view',
    featured: true
  },
  {
    title: 'Grocery Commerce App',
    description:
      'E-commerce grocery platform with admin dashboards and a customer storefront for 500+ products.',
    image: groceryImage,
    technologies: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/tahahashim10/OnlineGrocerystore',
    featured: false
  },
  {
    title: 'Unix Shell',
    description: 'Custom shell in C supporting commands, pipes, and process management.',
    image: unixImage,
    technologies: ['C', 'Unix', 'Shell Scripting'],
    liveUrl: 'https://www.youtube.com/watch?v=YmtNM6eN8c0',
    featured: false
  },
  {
    title: 'Escape Room Game',
    description: 'Java-based puzzle game using design patterns with an accessible JavaFX UI.',
    image: escapeImage,
    technologies: ['Java', 'JavaFX', 'JUnit'],
    liveUrl: 'https://drive.google.com/file/d/1tOTcNVIE64tHyf8PMrol9KLD1u4F0jur/view',
    githubUrl: 'https://github.com/tahahashim10/EscapeRoomGame',
    featured: false
  },
  {
    title: 'Convo AI',
    description: 'Chat app with conversational UI and session management.',
    image: convoImage,
    technologies: ['React', 'Vite', 'TypeScript', 'Express.js', 'MongoDB', 'OpenAI API'],
    githubUrl: 'https://github.com/tahahashim10/Convo-AI',
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
            A showcase of projects highlighting my work in building useful and reliable software.
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {/* Featured Projects - Larger Cards (FlyNext, SMILE) */}
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
                      {project.technologies.slice(0, MAX_TECH_CHIPS).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > MAX_TECH_CHIPS && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                          +{project.technologies.length - MAX_TECH_CHIPS}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-card transition-all group/btn"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Live Demo
                        </Button>
                      )}
                      {project.videoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.videoUrl, '_blank')}
                          className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Video
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Other Projects - Smaller Cards (Grocery, Unix Shell, Escape Room, Convo AI) */}
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
                      {project.technologies.slice(0, MAX_TECH_CHIPS).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > MAX_TECH_CHIPS && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                          +{project.technologies.length - MAX_TECH_CHIPS}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Demo
                        </Button>
                      )}
                      {project.videoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.videoUrl, '_blank')}
                          className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Video
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all"
                        >
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </Button>
                      )}
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
