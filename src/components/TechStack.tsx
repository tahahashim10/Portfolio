import { Reveal } from '@/components/Reveal';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const techStacks = [
  {
    label: 'Front-end',
    technologies: [
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertOnDark: true },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    label: 'Back-end',
    technologies: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertOnDark: true },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    ],
  },
  {
    label: 'Tools',
    technologies: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertOnDark: true },
      { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
    ],
  },
];

export function TechStack() {
  return (
    <div className="space-y-8">
      <Reveal effect="fade-up">
        <h3 className="text-center text-2xl font-semibold">
          Tools & Technologies I use
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {techStacks.map((group, groupIndex) => (
          <Reveal key={group.label} effect="fade-up" delay={groupIndex * 70}>
            <div className="group/tech-stack-field w-fit">
              <div className="mb-3 flex w-fit items-center overflow-hidden leading-3">
                <span className="mr-3 inline-block h-6 w-0.5 rounded bg-gradient-to-b from-primary/90 to-primary/45 transition duration-300 group-hover/tech-stack-field:shadow-[2px_0_8px_0_hsl(var(--primary)/0.55)]" />
                <h4 className="inline-block text-base font-medium">{group.label}</h4>
              </div>

              <div className="flex flex-wrap gap-3 overflow-visible pb-1">
                {group.technologies.map((tech, index) => (
                  <Reveal key={tech.name} effect="fade-up" delay={groupIndex * 70 + index * 28}>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <span
                          aria-label={tech.name}
                          tabIndex={0}
                          className="flex size-[50px] items-center justify-center rounded-lg border border-border/80 bg-white/90 p-3 outline-none transition-colors duration-300 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25 dark:bg-zinc-900/85"
                        >
                          <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className={`size-6 object-contain ${
                              tech.invertOnDark ? 'dark:invert' : ''
                            }`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.textContent = tech.name.charAt(0);
                                parent.classList.add('text-sm', 'font-semibold', 'text-primary');
                              }
                            }}
                          />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent
                        sideOffset={8}
                        className="z-[80] border-border bg-white text-foreground shadow-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                      >
                        {tech.name}
                      </TooltipContent>
                    </Tooltip>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
