import type { ReactNode, ElementType } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ease } from '@/lib/utils'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  scale?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'p' | 'h1' | 'h2' | 'h3'
  amount?: number
  duration?: number
}

/** Fade + slide reveal, triggered once when scrolled into view. */
export function Reveal({ children, delay = 0, y = 22, x = 0, scale = 1, className, as = 'div', amount = 0.2, duration = 0.8 }: Props) {
  const reduce = useReducedMotion()
  const M = (motion as unknown as Record<string, ElementType>)[as]
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </M>
  )
}

/** Clip-path wipe reveal for imagery. */
export function ClipReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: 'inset(0 0 100% 0 round 28px)', opacity: 0.4 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0 round 28px)', opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
