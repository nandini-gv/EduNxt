import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Accordion } from '@/components/Accordion'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { useAnchorNav } from '@/components/AnchorLink'
import { faqCategories, faqData, type FaqCategoryKey } from '@/data/faq'
import { cn, ease } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

export function HomeFaq() {
  const [cat, setCat] = useState<FaqCategoryKey>('Job Seekers')
  const anchor = useAnchorNav()

  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-[#EAF2FA] to-[#F4F8FF] py-16 sm:py-24 text-ink" aria-labelledby="faq-h">
      {/* Soft blue background lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[130px]" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        {/* Desktop Grid Layout: LEFT 38-40%, RIGHT 60-62%, top-aligned (items-start), gap 48-72px */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(320px,0.75fr)_minmax(500px,1.25fr)] lg:gap-16">
          {/* LEFT: Top-aligned Heading, Description & Category Navigation */}
          <div className="flex flex-col justify-start">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-electric">
                <Sparkles className="h-3 w-3" /> FAQS
              </span>
            </Reveal>

            {/* Single line restrained heading */}
            <Reveal as="h2" delay={0.06} className="mt-3 text-[1.5rem] font-semibold leading-tight tracking-tight text-[#071A3A] sm:text-[1.85rem] lg:text-[2rem] whitespace-nowrap">
              <span id="faq-h">Answers to Your Questions</span>
            </Reveal>

            <Reveal delay={0.12} className="mt-3.5 max-w-[24rem] text-[16px] leading-relaxed text-ink-700/85">
              Find quick answers based on your needs. Select a category below to explore relevant topics.
            </Reveal>

            {/* Category Tabs Stack */}
            <div className="mt-8 flex flex-col gap-2.5" role="tablist" aria-label="FAQ categories">
              {faqCategories.map((c) => {
                const active = c.key === cat
                return (
                  <button
                    key={c.key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCat(c.key)}
                    className={cn(
                      'flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left text-[14.5px] font-semibold transition-all duration-300 ease-apple w-full',
                      active
                        ? 'border-electric bg-gradient-to-r from-electric to-electric-400 text-white shadow-glow'
                        : 'border-hair bg-white/80 text-ink-700 hover:border-electric/40 hover:bg-white hover:text-ink',
                    )}
                  >
                    <c.icon className={cn('h-5 w-5 shrink-0', active ? 'text-white' : 'text-electric')} aria-hidden="true" />
                    <span>{c.key}</span>
                  </button>
                )
              })}
            </div>

            <Reveal delay={0.2} className="mt-8">
              <Button href="#connect" onClick={anchor('connect')} arrow>
                View All FAQs
              </Button>
            </Reveal>
          </div>

          {/* RIGHT: Top-aligned Accordion Content */}
          <div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                <Accordion items={faqData[cat]} initial={0} light={true} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
