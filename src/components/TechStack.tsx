import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const techStacks = {
  frontend: [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
  ],
  backend: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#A8B9CC' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#239120' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' },
    { name: 'ASP.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', color: '#512BD4' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' }, 
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'MS SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-line.svg', color: '#CC2927'},
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
    { name: 'RESTful API Design', logo: 'https://cdn-icons-png.flaticon.com/512/103/103093.png', color: '#2D3748' },
  ],  
  tools: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
    { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', color: '#FCA121' }, 
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
    { name: 'PyCharm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg', color: '#000000' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#FF6C37' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', color: '#000000' },
    { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', color: '#3ECF8E' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
    { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', color: '#43B02A' },
  ]
};

type TechCategory = keyof typeof techStacks;

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('frontend');

  const categories = [
    { id: 'frontend' as TechCategory, label: 'Frontend', count: techStacks.frontend.length },
    { id: 'backend' as TechCategory, label: 'Backend', count: techStacks.backend.length },
    { id: 'tools' as TechCategory, label: 'Tools & Technologies', count: techStacks.tools.length }
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
        </Reveal>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {techStacks[activeCategory].map((tech, index) => (
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

      <div className="text-center max-w-2xl mx-auto">
        <Reveal effect="fade-up" delay={80}>
          <p className="text-muted-foreground">
          {activeCategory === 'frontend' &&
            "Building responsive and interactive user interfaces with modern frameworks and styling tools."
          }
          {activeCategory === 'backend' &&
            "Developing robust server-side systems, APIs, databases, and cloud services."
          }
          {activeCategory === 'tools' &&
            "Utilizing essential development, deployment, and collaboration tools."
          }
          </p>
        </Reveal>
      </div>
    </div>
  );
}
