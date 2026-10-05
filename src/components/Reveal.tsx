import type { ReactNode, ElementType } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export const appleEase = [0.22, 1, 0.36, 1] as const

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  scale?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'p' | 'h1' | 'h2' | 'h3' | 'span'
  amount?: number
  duration?: number
}

/** Apple MacBook-style Section Container Transition (scale 0.97 -> 1, opacity 0.75 -> 1) */
export function SectionReveal({
  children,
  className,
  delay = 0,
  id,
  'aria-labelledby': ariaLabelledby,
}: {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  'aria-labelledby'?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      initial={reduce ? false : { opacity: 0.75, scale: 0.97, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 0.95, delay, ease: appleEase }}
    >
      {children}
    </motion.section>
  )
}

/** Mac-Style Image Reveal (scale: 1.04 -> 1, opacity: 0.85 -> 1, y: 8 -> 0) */
export function MacImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { scale: 1.04, opacity: 0.85, y: 8, filter: 'blur(0px)' }}
      whileInView={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: appleEase }}
    >
      {children}
    </motion.div>
  )
}

/** Text Scroll Reveal for Headings (y: 28 -> 0, blur: 8px -> 0, opacity 0 -> 1) */
export function TextReveal({
  children,
  className,
  delay = 0,
  as = 'h2',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'p'
}) {
  const reduce = useReducedMotion()
  const M = (motion as unknown as Record<string, ElementType>)[as]
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, delay, ease: appleEase }}
    >
      {children}
    </M>
  )
}

/** Small Section Label Reveal (fades/slides up before main heading) */
export function SectionLabelReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: appleEase }}
    >
      {children}
    </motion.div>
  )
}

/** Body Text Reveal (paragraph appears 80-120ms after heading with 14px movement) */
export function BodyReveal({
  children,
  className,
  delay = 0.1,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.p
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: appleEase }}
    >
      {children}
    </motion.p>
  )
}

/** Card Reveal (opacity: 0 -> 1, translateY: 30px -> 0, scale: 0.98 -> 1) */
export function CardReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: appleEase }}
    >
      {children}
    </motion.div>
  )
}

/** Standard Reveal component */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  scale = 0.98,
  className,
  as = 'div',
  amount = 0.15,
  duration = 0.85,
}: Props) {
  const reduce = useReducedMotion()
  const M = (motion as unknown as Record<string, ElementType>)[as]
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y, x, scale, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount, margin: '0px 0px -5% 0px' }}
      transition={{ duration, delay, ease: appleEase }}
    >
      {children}
    </M>
  )
}

/** Apple-style Staggered Grid Container */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Apple-style Staggered Grid Item */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, y: 30, scale: 0.98, filter: 'blur(4px)' },
        show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.85, ease: appleEase } },
      }}
    >
      {children}
    </motion.div>
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
      transition={{ duration: 1.1, delay, ease: appleEase }}
    >
      {children}
    </motion.div>
  )
}
