import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileDown, Home, User, Briefcase, Code, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export function GlassNavbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' },
  ];

  const externalItems = [
    { icon: Github, href: 'https://github.com/tahahashim10', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tahahashim10/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:taha.hashim@mail.utoronto.ca', label: 'Email' },
    { icon: FileDown, href: '#', label: 'Resume', action: () => {
      console.log('Download resume');
    }},
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass rounded-full px-6 py-3 shadow-glass">
        <div className="flex items-center space-x-2">
          {/* Navigation Items */}
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`w-10 h-10 rounded-full transition-all hover:shadow-glow ${
                activeSection === item.id ? 'bg-primary text-primary-foreground shadow-glow' : ''
              }`}
              aria-label={item.label}
            >
              <item.icon className="h-4 w-4" />
            </Button>
          ))}
          
          <div className="w-px h-6 bg-border mx-2" />
          
          {/* External Links */}
          {externalItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={item.action || (() => window.open(item.href, '_blank'))}
              className="w-10 h-10 rounded-full transition-all hover:shadow-glow hover:bg-secondary/20"
              aria-label={item.label}
            >
              <item.icon className="h-4 w-4" />
            </Button>
          ))}
          
          <div className="w-px h-6 bg-border mx-2" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
