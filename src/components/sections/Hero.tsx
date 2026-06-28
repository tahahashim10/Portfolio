import { Mail, PencilRuler, SquareUserRound } from 'lucide-react';
import { AnimatedHandDrawnUnderline } from '@/components/motion/AnimatedHandDrawnUnderline';
import { BlurFade } from '@/components/motion/BlurFade';
import { TextAnimate } from '@/components/motion/TextAnimate';
import headshotImage from '@/assets/headshot.jpg';

const heroActions = [
  { label: 'More about me', sectionId: 'about', icon: SquareUserRound },
  { label: "What I've built", sectionId: 'projects', icon: PencilRuler },
  { label: 'Get in touch', sectionId: 'contact', icon: Mail },
];

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden px-6">
      {/* Hero Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="hero-section-grain-field pointer-events-none absolute left-1/2 top-[55%] z-0 h-[46rem] w-[min(96vw,72rem)] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 mx-auto w-full max-w-screen-lg pt-2 lg:-mt-8">
        <div className="relative isolate flex flex-col items-center justify-start space-y-4 text-center">
          <BlurFade delay={0.5}>
            <div className="relative">
              <span className="relative flex size-24 shrink-0 overflow-hidden rounded-full border border-primary/20 bg-muted shadow-glow sm:size-36 md:size-40 2xl:size-48">
                <img
                  src={headshotImage}
                  alt="Taha Hashim"
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="hero-avatar-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 rounded-full" />
            </div>
          </BlurFade>

          <TextAnimate
            segmentClassName="text-lg md:text-2xl 2xl:text-3xl font-medium text-center text-muted-foreground"
            className="overflow-hidden"
            delay={1}
            animation="slideUp"
            by="word"
            duration={0.35}
          >
            Hi, I'm Taha Hashim 👋
          </TextAnimate>

          <h1 className="text-center text-2xl font-bold leading-[1.16] text-foreground sm:text-3xl md:text-5xl md:leading-[1.14] 2xl:text-7xl 2xl:leading-[1.12]">
            <BlurFade delay={1.6} yOffset={4} className="pb-2 md:pb-3 2xl:pb-4">
              <span className="block leading-[1.18] gradient-text">software engineer</span>
            </BlurFade>

            <TextAnimate animation="blurInUp" by="word" delay={1.8} duration={0.6}>
              who loves building things
            </TextAnimate>

            <TextAnimate animation="slideUp" by="word" delay={2.6} duration={0.3} className="inline-block">
              for the
            </TextAnimate>{' '}

            <span className="relative inline-block">
              <BlurFade delay={3.05} className="inline">
                <span className="gradient-text">cloud.</span>
              </BlurFade>
              <AnimatedHandDrawnUnderline
                className="-z-20 absolute -bottom-2 right-0 w-[4rem] fill-none text-primary opacity-30 sm:-bottom-2.5 sm:right-1 sm:w-[4.5rem] md:-bottom-4 md:w-[7.7rem] lg:-bottom-4 xl:-bottom-5 2xl:-bottom-7 2xl:w-[11.5rem]"
                opacityDelay={3.25}
                pathLengthDelay={3.2}
                pathLengthDuration={1.5}
                opacityDuration={0.2}
              />
            </span>
          </h1>

          <div className="!mt-12 flex flex-wrap items-center justify-center gap-4 px-4 sm:px-0 lg:gap-8 lg:text-2xl">
            {heroActions.map((action, index) => {
              const ActionIcon = action.icon;

              return (
                <BlurFade key={action.sectionId} delay={3.5 + index * 0.2}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(action.sectionId)}
                    className="group relative inline-flex w-fit cursor-pointer items-center bg-inherit font-caveat text-2xl text-foreground outline-none transition-colors hover:text-primary focus-visible:text-primary md:text-3xl"
                  >
                    <span>{action.label}</span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-[30%] bg-foreground/30 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-white/30" />
                    <ActionIcon className="absolute right-0 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition duration-300 group-hover:-translate-x-0 group-hover:-translate-y-3/4 group-hover:rotate-12 group-hover:scale-100 group-hover:opacity-5 group-focus-visible:-translate-x-0 group-focus-visible:-translate-y-3/4 group-focus-visible:rotate-12 group-focus-visible:scale-100 group-focus-visible:opacity-10 dark:group-hover:opacity-10" />
                  </button>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
