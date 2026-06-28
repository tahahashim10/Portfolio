import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  blur?: string;
};

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = '6px',
}: BlurFadeProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
        }}
        transition={{ delay: 0.04 + delay, duration, ease: 'easeOut' }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

