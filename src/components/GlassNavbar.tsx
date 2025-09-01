import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Home,
  User,
  Briefcase,
  Code,
  MessageSquare,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export function GlassNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pretty labels for page title
  const sectionToTitle: Record<string, string> = {
    hero: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  };

  // Dynamically update <title>
  useEffect(() => {
    const label = sectionToTitle[activeSection] ?? 'Home';
    document.title = `${label} | Taha Hashim`;
  }, [activeSection]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If were near the bottom of the page always show contact
      if (scrollPos + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }
      
      let currentSection = 'hero';
      
      // Check each section to see which one is most visible
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the upper half of the viewport its active
          if (rect.top <= windowHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
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
    { icon: Mail, href: 'mailto:tahahashim10@gmail.com', label: 'Email' },
    { icon: FileDown, href: '/Taha_Resume.pdf', label: 'Resume' },
  ];

  return (
    <>
      {/* Desktop / Tablet (md+) – Bottom glass bar */}
      <nav className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass rounded-full px-6 py-3 shadow-glass backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10">
          <div className="flex items-center space-x-2">
            {/* Navigation Items */}
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group flex flex-col items-center">
                <Button
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
                <span className="absolute -top-7 text-xs bg-black/70 text-white px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </span>
              </div>
            ))}

            <div className="w-px h-6 bg-border mx-2" />

            {/* External Links */}
            {externalItems.map((item, index) => (
              <div key={index} className="relative group flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(item.href, '_blank')}
                  className="w-10 h-10 rounded-full transition-all hover:shadow-glow hover:bg-secondary/20"
                  aria-label={item.label}
                >
                  <item.icon className="h-4 w-4" />
                </Button>
                <span className="absolute -top-7 text-xs bg-black/70 text-white px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </span>
              </div>
            ))}

            <div className="w-px h-6 bg-border mx-2" />

            {/* Theme toggle with label */}
            <div className="relative group flex flex-col items-center">
              <ThemeToggle />
              <span className="absolute -top-7 text-xs bg-black/70 text-white px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition">
                Theme
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile (sm) – Top-right glass hamburger + dropdown */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          className={`rounded-full shadow-glow backdrop-blur-xl border border-white/20 dark:border-white/10 transition-all
            ${isMobileMenuOpen ? 'bg-primary text-primary-foreground' : 'glass bg-white/10 dark:bg-black/20'}
            w-12 h-12 flex items-center justify-center`}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Dropdown Glass Menu */}
        <div
          className={`absolute right-0 mt-3 w-60 rounded-2xl p-4
            backdrop-blur-2xl bg-white/12 dark:bg-black/30 border border-white/20 dark:border-white/10
            shadow-xl transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
        >
          <div className="flex flex-col space-y-3">
            {/* Sections */}
            {navigationItems.map((item) => {
              const Active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all border ${
                    Active
                      ? 'bg-primary text-primary-foreground border-transparent shadow-glow'
                      : 'glass border-white/10 hover:bg-white/10'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}

            <div className="h-px w-full bg-white/20 my-2" />

            {/* External links */}
            {externalItems.map((item, i) => (
              <button
                key={i}
                onClick={() => window.open(item.href, '_blank')}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg glass hover:bg-white/10 border border-white/10 transition-all"
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}

            <div className="h-px w-full bg-white/20 my-2" />

            {/* Theme toggle row */}
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg glass border border-white/10">
              <ThemeToggle />
              <span className="text-sm">Theme</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
