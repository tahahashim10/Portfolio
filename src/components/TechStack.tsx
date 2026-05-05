import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const techStacks = {
  frontend: [
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  backend: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  ],  
  tools: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
  ]
};

type TechCategory = keyof typeof techStacks;

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('frontend');
  const activeTechnologies = techStacks[activeCategory];
  const gridColumns = activeTechnologies.length > 6 ? 'lg:grid-cols-7 max-w-5xl' : 'lg:grid-cols-6 max-w-4xl';

  const categories = [
    { id: 'frontend' as TechCategory, label: 'Frontend', count: techStacks.frontend.length },
    { id: 'backend' as TechCategory, label: 'Backend', count: techStacks.backend.length },
    { id: 'tools' as TechCategory, label: 'Tools', count: techStacks.tools.length }
  ];

  return (
    <div className="space-y-8">
      <Reveal effect="fade-up">
        <h3 className="text-2xl font-semibold text-center">
          Technologies I Use
        </h3>
      </Reveal>
      
      <div className="flex justify-center">
        <Reveal effect="fade-up" delay={60}>
          <div className="glass rounded-full p-1 inline-flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground hover:text-primary-foreground shadow-glow' 
                  : 'text-foreground hover:bg-secondary/20 hover:text-foreground'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs bg-primary/20 px-1.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
          </div>
        </Reveal>
      </div>


      <div className={`grid grid-cols-2 md:grid-cols-3 ${gridColumns} gap-4 mx-auto`}>
        {activeTechnologies.map((tech, index) => (
          <Reveal key={tech.name} effect="fade-up" delay={index * 60}>
          <Card
            className="p-4 gradient-card border-primary/10 card-hover tech-badge group cursor-pointer text-center"
          >
            <div className="flex flex-col items-center space-y-3 w-full">
              <div className="w-12 h-12 relative">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'brightness(0.9)' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">${tech.name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <span className="block w-full truncate text-sm font-medium text-center leading-tight">
                {tech.name}
              </span>
            </div>
          </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
