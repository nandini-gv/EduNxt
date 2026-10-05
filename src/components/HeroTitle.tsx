import { motion, useReducedMotion } from 'framer-motion'
import { ease, cn } from '@/lib/utils'

/** Masked line-by-line headline reveal. `accent` is rendered in the brand gradient. */
export function HeroTitle({ lines, accent, className = 'display-hero-sm' }: { lines: string[]; accent?: string; className?: string }) {
  const reduce = useReducedMotion()
  const label = lines.join(' ')
  return (
    <h1 className={cn(className)} aria-label={label}>
      {lines.map((line, i) => {
        const parts = accent && line.includes(accent) ? line.split(accent) : [line]
        return (
          <span key={i} className="mask-line" aria-hidden="true">
            <motion.span
              className="block"
              initial={reduce ? false : { y: '112%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.15 + i * 0.1, ease }}
            >
              {parts.length === 2 ? (<>{parts[0]}<span className="grad-text">{accent}</span>{parts[1]}</>) : line}
            </motion.span>
          </span>
        )
      })}
    </h1>
  )
}
