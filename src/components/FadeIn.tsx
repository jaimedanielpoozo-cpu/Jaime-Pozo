import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  amount?: number;
  /** Suma un leve blur de entrada (efecto cinematográfico). Pensado para
   * títulos/elementos puntuales, no para grillas con muchos ítems a la vez. */
  blur?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 30,
  amount = 0,
  blur = false,
  className,
  style,
  as = 'div',
}: FadeInProps) {
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '50px', amount }}
      transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
