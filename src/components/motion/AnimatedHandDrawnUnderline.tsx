import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type AnimatedHandDrawnUnderlineProps = {
  className?: string;
  pathLengthDelay?: number;
  opacityDelay?: number;
  pathLengthDuration?: number;
  opacityDuration?: number;
};

export function AnimatedHandDrawnUnderline({
  className,
  pathLengthDelay = 0,
  opacityDelay = 0,
  pathLengthDuration = 0.5,
  opacityDuration = 0.5,
}: AnimatedHandDrawnUnderlineProps) {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -6 200 60"
      aria-hidden="true"
      role="img"
      aria-label="Decorative underline"
    >
      <motion.path
        fill="currentColor"
        d="M 21 11 C 83 -2 139 3 178 13 C 111 5 60 6 18 18 C 15 19 15 22 19 21 C 78 11 107 10 189 19"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        exit={{ pathLength: 0, opacity: 0 }}
        style={{ fill: 'inherit' }}
        transition={{
          pathLength: { duration: pathLengthDuration, delay: pathLengthDelay, ease: 'easeInOut' },
          opacity: { duration: opacityDuration, delay: opacityDelay },
          default: { ease: 'easeInOut' },
        }}
      />
    </svg>
  );
}

