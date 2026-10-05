import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1.8, className }: { value: number; suffix?: string; prefix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!inView || !ref.current) return
    if (reduce) { ref.current.textContent = `${prefix}${value}${suffix}`; return }
    const c = animate(0, value, {
      duration, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}` },
    })
    return () => c.stop()
  }, [inView, value, suffix, prefix, duration, reduce])
  return <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>{prefix}0{suffix}</span>
}
