import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'SDE Intern',
    company: 'Amazon Web Services',
    location: 'Vancouver, BC',
    period: 'May 2025 – Aug 2025',
    description: 'Built a monitoring system for S3 connectivity across 30+ regions, processing 400M+ metrics daily and enabling faster incident response through automated dashboards.',
    technologies: ['AWS', 'Lambda', 'React', 'CloudWatch']
  },
  {
    title: 'Software Developer',
    company: 'Acadia University',
    location: 'Nova Scotia',
    period: 'Jan 2025 – Apr 2025',
    description: 'Created a full-stack web app for the SMILE program, digitizing volunteer workflows for 700+ users and cutting weekly admin time by 10+ hours.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript']
  },
  {
    title: 'Integration Engineer Co-op',
    company: 'Ericsson',
    location: 'Toronto, ON',
    period: 'May 2024 – Aug 2024',
    description: 'Automated SD-WAN provisioning and network validations, reducing manual work by 400+ hours and accelerating integration cycles.',
    technologies: ['Python', 'Jenkins', 'REST APIs', 'Network Automation']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Akhny Solutions',
    location: 'Toronto, ON',
    period: 'May 2023 – Aug 2023',
    description: 'Built a grocery e-commerce app managing 500+ products, streamlining orders, and reducing load times by 30%.',
    technologies: ['ASP.NET', 'SQL Server', 'C#', 'Entity Framework']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Experience
          </h2>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={`${exp.company}-${exp.period}`} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow z-10" />
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${
                    index % 2 === 0 
                      ? 'md:pr-8 md:text-right' 
                      : 'md:pl-8 md:ml-1/2'
                  }`}>
                    <Card className="p-6 gradient-card border-primary/10 card-hover max-w-lg">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} w-full`}>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                              <h3 className="text-xl font-semibold text-primary">
                                {exp.title}
                              </h3>
                              <p className="text-lg font-medium">{exp.company}</p>
                            </div>
                            <div className={`text-left sm:text-right ${index % 2 === 0 ? 'md:order-1 md:text-left' : 'md:text-right'}`}>
                              <p className="text-sm text-muted-foreground">{exp.period}</p>
                              <p className="text-sm text-muted-foreground">{exp.location}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
