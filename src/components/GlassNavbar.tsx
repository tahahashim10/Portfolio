import { useEffect, useMemo, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
import {
  Briefcase,
  Code,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Moon,
  Sun,
  User,
  X,
  Menu,
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

type NavItem = {
  id: string;
  icon: ElementType;
  label: string;
};

type ExternalItem = {
  icon: ElementType;
  href: string;
  label: string;
};

type DockButtonProps = {
  icon?: ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
  mouseX: MotionValue<number>;
  magnification?: number;
  distance?: number;
  defaultWidth?: number;
  children?: ReactNode;
};

function DockButton({
  icon: Icon,
  label,
  active = false,
  onClick,
  mouseX,
  magnification = 50,
  distance = 120,
  defaultWidth = 32,
  children,
}: DockButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const distanceFromCenter = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: defaultWidth };
    return value - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distanceFromCenter, [-distance, 0, distance], [defaultWidth, magnification, defaultWidth]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="dock-nav-item group relative flex aspect-square cursor-pointer items-center justify-center rounded-full"
    >
      <button
        type="button"
        onClick={onClick}
        className={`dock-nav-button group focus:outline-none ${
          active ? 'dock-nav-button-active text-primary' : 'text-foreground/75 hover:text-foreground'
        }`}
        aria-label={label}
        aria-current={active ? 'page' : undefined}
      >
        <span className="dock-nav-icon">
          {children ?? (Icon ? <Icon className="size-full" strokeWidth={2.15} /> : null)}
        </span>
      </button>
      <span className="dock-nav-tooltip pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-950/85 px-2 py-1 text-xs text-white opacity-0 shadow-lg backdrop-blur transition duration-150 group-hover:opacity-100">
        {label}
      </span>
    </motion.div>
  );
}

export function GlassNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const { theme, setTheme } = useTheme();

  const navigationItems = useMemo<NavItem[]>(
    () => [
      { id: 'about', icon: User, label: 'About' },
      { id: 'experience', icon: Briefcase, label: 'Experience' },
      { id: 'projects', icon: Code, label: 'Projects' },
      { id: 'contact', icon: MessageSquare, label: 'Contact' },
    ],
    [],
  );

  const externalItems = useMemo<ExternalItem[]>(
    () => [
      { icon: Github, href: 'https://github.com/tahahashim10', label: 'GitHub' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/tahahashim10/', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:tahahashim10@gmail.com', label: 'Email' },
    ],
    [],
  );

  useEffect(() => {
    const sectionToTitle: Record<string, string> = {
      hero: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    };

    document.title = `${sectionToTitle[activeSection] ?? 'Home'} | Taha Hashim`;
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPos + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      let currentSection = 'hero';
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= windowHeight / 2) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const openExternal = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 hidden h-full max-h-[50px] origin-bottom sm:flex">
        <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background/85 backdrop-blur-lg [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div
          onMouseMove={(event) => mouseX.set(event.pageX)}
          onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
          className="dock-nav-shell pointer-events-auto z-50 mx-auto flex min-h-full w-max items-end gap-2 rounded-full border px-2 py-2 backdrop-blur-md"
        >
          <DockButton label="Home" active={activeSection === 'hero'} onClick={() => scrollToSection('hero')} mouseX={mouseX}>
            <span className="text-[13px] font-bold leading-none tracking-normal">T</span>
          </DockButton>

          {navigationItems.map((item) => (
            <DockButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
              mouseX={mouseX}
            />
          ))}

          <div className="mx-1 h-full w-px shrink-0 bg-border" />

          {externalItems.map((item) => (
            <DockButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={() => openExternal(item.href)}
              mouseX={mouseX}
            />
          ))}

          <div className="mx-1 h-full w-px shrink-0 bg-border" />

          <DockButton
            label="Toggle theme"
            onClick={toggleTheme}
            mouseX={mouseX}
          >
            <Sun className="size-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </DockButton>
        </div>
      </nav>

      <nav className="fixed right-4 top-4 z-50 sm:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          className={`dock-mobile-trigger ${isMobileMenuOpen ? 'bg-primary/90 text-primary-foreground' : 'text-foreground'}`}
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div className={`dock-mobile-panel ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}>
          <div className="grid gap-2">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className={`dock-mobile-row ${activeSection === 'hero' ? 'dock-mobile-row-active' : ''}`}
            >
              <span className="flex size-5 items-center justify-center text-xs font-bold">T</span>
              <span>Home</span>
            </button>

            {navigationItems.map((item) => {
              const ActiveIcon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`dock-mobile-row ${isActive ? 'dock-mobile-row-active' : ''}`}
                >
                  <ActiveIcon className="size-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="my-1 h-px bg-border" />

            {externalItems.map((item) => {
              const ExternalIcon = item.icon;

              return (
                <button key={item.label} type="button" onClick={() => openExternal(item.href)} className="dock-mobile-row">
                  <ExternalIcon className="size-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="my-1 h-px bg-border" />

            <button type="button" onClick={toggleTheme} className="dock-mobile-row">
              <span className="relative flex size-5 items-center justify-center">
                <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </span>
              <span>Theme</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
