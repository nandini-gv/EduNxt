import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn, ease } from '@/lib/utils'

export function Accordion({ items, initial = 0 }: { items: { q: string; a: string }[]; initial?: number | null }) {
  const [open, setOpen] = useState<number | null>(initial)
  return (
    <div className="divide-y divide-hair overflow-hidden rounded-3xl border border-hair bg-white">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q}>
            <h3>
              <button
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-[1.02rem] font-semibold tracking-tight text-ink transition-colors hover:bg-mist sm:px-7"
              >
                {it.q}
                <span className={cn('grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hair transition-all duration-300', isOpen && 'rotate-45 border-electric bg-electric text-white')}>
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }} className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-700/85 sm:px-7">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
