import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn, ease } from '@/lib/utils'

export function Accordion({
  items,
  initial = 0,
  light = false,
}: {
  items: { q: string; a: string }[]
  initial?: number | null
  light?: boolean
}) {
  const [open, setOpen] = useState<number | null>(initial)

  return (
    <div
      className={cn(
        'divide-y overflow-hidden rounded-3xl border shadow-xl backdrop-blur-xl transition-all duration-300',
        light
          ? 'divide-hair border-hair bg-white'
          : 'divide-white/[0.08] border-[rgba(120,160,210,0.18)] bg-gradient-to-b from-[#0A1930] to-[#071426]'
      )}
    >
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q} className={cn('transition-colors duration-300', isOpen ? (light ? 'bg-mist/60' : 'bg-white/[0.04]') : '')}>
            <h3>
              <button
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  'flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-[1.05rem] font-semibold tracking-tight transition-all duration-300 sm:px-7',
                  light ? 'text-[#071A3A] hover:bg-mist' : 'text-white hover:bg-[#10233F]/70'
                )}
              >
                <span>{it.q}</span>
                <span
                  className={cn(
                    'grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300',
                    isOpen
                      ? 'rotate-45 border-electric bg-gradient-to-br from-electric to-electric-400 text-white shadow-glow'
                      : light
                        ? 'border-hair text-ink-700/70 hover:border-electric'
                        : 'border-[rgba(150,180,220,0.25)] text-white/70 hover:border-white/40'
                  )}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      'px-6 pb-6 text-[15.5px] leading-relaxed sm:px-7',
                      light ? 'text-ink-700/85' : 'text-[#E8EEF7]/85'
                    )}
                  >
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
