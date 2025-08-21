import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const techStacks = {
  frontend: [
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    { 
      name: 'Next.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000'
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6'
    },
    { 
      name: 'Tailwind CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      color: '#06B6D4'
    },
    { 
      name: 'HTML5', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26'
    }
  ],
  backend: [
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB'
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#336791'
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248'
    },
    { 
      name: 'Express.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000'
    },
    { 
      name: 'Prisma', 
      logo: 'https://www.prisma.io/images/favicon-32x32.png',
      color: '#2D3748'
    }
  ],
  tools: [
    { 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032'
    },
    { 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED'
    },
    { 
      name: 'AWS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      color: '#FF9900'
    },
    { 
      name: 'Jenkins', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      color: '#D24939'
    },
    { 
      name: 'VS Code', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: '#007ACC'
    },
    { 
      name: 'Jest', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      color: '#C21325'
    }
  ]
};

type TechCategory = keyof typeof techStacks;

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('frontend');

  const categories = [
    { id: 'frontend' as TechCategory, label: 'Frontend', count: techStacks.frontend.length },
    { id: 'backend' as TechCategory, label: 'Backend', count: techStacks.backend.length },
    { id: 'tools' as TechCategory, label: 'Tools', count: techStacks.tools.length }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-center">
        Tools & Technologies
      </h3>
      
      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="glass rounded-full p-1 inline-flex space-x-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'hover:bg-secondary/20'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs bg-primary/20 px-1.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {techStacks[activeCategory].map((tech, index) => (
          <Card
            key={tech.name}
            className="p-4 gradient-card border-primary/10 card-hover tech-badge group cursor-pointer text-center"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 relative">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    filter: 'brightness(0.9)',
                  }}
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">${tech.name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <span className="text-sm font-medium text-center leading-tight">
                {tech.name}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Category Description */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-muted-foreground">
          {activeCategory === 'frontend' && 
            "Building responsive and interactive user interfaces with modern frameworks and libraries."
          }
          {activeCategory === 'backend' && 
            "Developing robust server-side applications, APIs, and database solutions."
          }
          {activeCategory === 'tools' && 
            "Essential development tools for version control, deployment, and productivity."
          }
        </p>
      </div>
    </div>
  );
}
