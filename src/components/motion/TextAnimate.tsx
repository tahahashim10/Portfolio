import { AnimatePresence, motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';

type TextAnimation = 'fadeIn' | 'blurIn' | 'blurInUp' | 'slideUp';
type TextSegment = 'word' | 'character' | 'line' | 'text';

const segmentStagger = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const animations: Record<TextAnimation, { container: Variants; item: Variants }> = {
  fadeIn: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.3 } },
      exit: { opacity: 0, filter: 'blur(10px)', transition: { duration: 0.3 } },
    },
  },
  blurInUp: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
      show: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        filter: 'blur(10px)',
        y: 20,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  slideUp: {
    container: defaultContainer,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
};

type TextAnimateProps = {
  children: string;
  animation?: TextAnimation;
  by?: TextSegment;
  delay?: number;
  duration?: number;
  className?: string;
  segmentClassName?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2';
  startOnView?: boolean;
  once?: boolean;
};

export function TextAnimate({
  children,
  animation = 'fadeIn',
  by = 'word',
  delay = 0,
  duration = 0.3,
  className,
  segmentClassName,
  as = 'p',
  startOnView = false,
  once = false,
}: TextAnimateProps) {
  const Component = {
    p: motion.p,
    span: motion.span,
    div: motion.div,
    h1: motion.h1,
    h2: motion.h2,
  }[as];
  const segments =
    by === 'word'
      ? children.split(/(\s+)/)
      : by === 'character'
        ? children.split('')
        : by === 'line'
          ? children.split('\n')
          : [children];

  const selected = animations[animation];
  const variants = {
    container: {
      ...selected.container,
      show: {
        ...selected.container.show,
        transition: {
          delayChildren: delay,
          staggerChildren: duration / segments.length,
        },
      },
      exit: {
        ...selected.container.exit,
        transition: {
          staggerChildren: duration / segments.length,
          staggerDirection: -1,
        },
      },
    },
    item: selected.item,
  };

  return (
    <AnimatePresence mode="popLayout">
      <Component
        variants={variants.container}
        initial="hidden"
        whileInView={startOnView ? 'show' : undefined}
        animate={startOnView ? undefined : 'show'}
        exit="exit"
        className={cn('whitespace-pre-wrap', className)}
        viewport={{ once }}
      >
        {segments.map((segment, index) => (
          <motion.span
            key={`${by}-${segment}-${index}`}
            variants={variants.item}
            custom={index * segmentStagger[by]}
            className={cn(by === 'line' ? 'block' : 'inline-block whitespace-pre', segmentClassName)}
          >
            {segment}
          </motion.span>
        ))}
      </Component>
    </AnimatePresence>
  );
}
