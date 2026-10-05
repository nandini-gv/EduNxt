import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Accordion } from '@/components/Accordion'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { useAnchorNav } from '@/components/AnchorLink'
import { faqCategories, faqData, type FaqCategoryKey } from '@/data/faq'
import { cn, ease } from '@/lib/utils'
import heroPortrait from '@/assets/img/hero-portrait.jpg'

export function HomeFaq() {
  const [cat, setCat] = useState<FaqCategoryKey>('Job Seekers')
  const anchor = useAnchorNav()

  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F1F6FF] to-white py-16 sm:py-24" aria-labelledby="faq-h">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <div className="relative isolate grid overflow-hidden rounded-[32px] bg-white p-6 shadow-soft ring-1 ring-hair sm:p-10 lg:grid-cols-[0.8fr_0.85fr_1.35fr] lg:gap-8 lg:p-12">
          {/* Ambient background glow */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 -z-10 h-80 w-80 rounded-full bg-electric/10 blur-[100px]" />

          {/* Column 1: Info & Portrait */}
          <div className="relative flex flex-col justify-between pb-4">
            <div>
              <Reveal>
                <span className="inline-block rounded-full bg-electric/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-electric">
                  FAQS
                </span>
              </Reveal>
              <Reveal as="h2" delay={0.06} className="display-md mt-3 !text-[2rem] sm:!text-[2.5rem]">
                <span id="faq-h">Answers to Your Questions</span>
              </Reveal>
              <Reveal delay={0.12} className="mt-3 max-w-[18rem] text-[15px] leading-relaxed text-ink-700/85">
                Find quick answers based on your needs. Select a category to explore relevant FAQs.
              </Reveal>
              <Reveal delay={0.18} className="relative z-10 mt-6">
                <Button href="#connect" onClick={anchor('connect')} arrow>
                  View All FAQs
                </Button>
              </Reveal>
            </div>

            <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-0 hidden h-[60%] w-[70%] overflow-hidden rounded-[24px] lg:block">
              <img src={heroPortrait} alt="" className="h-full w-full object-cover object-top opacity-90" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            </div>
          </div>

          {/* Column 2: Category Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 pt-6 lg:flex-col lg:overflow-visible lg:pt-0" role="tablist" aria-label="FAQ categories">
            {faqCategories.map((c) => {
              const active = c.key === cat
              return (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCat(c.key)}
                  className={cn(
                    'flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-[14.5px] font-semibold transition-all duration-300 ease-apple lg:w-full',
                    active
                      ? 'border-electric bg-electric text-white shadow-glow'
                      : 'border-hair bg-mist/60 text-ink hover:border-electric/30 hover:bg-white',
                  )}
                >
                  <c.icon className={cn('h-5 w-5 shrink-0', active ? 'text-white' : 'text-electric')} aria-hidden="true" />
                  <span className="whitespace-nowrap lg:whitespace-normal">{c.key}</span>
                </button>
              )
            })}
          </div>

          {/* Column 3: Accordion Content */}
          <div className="relative mt-6 lg:mt-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                <Accordion items={faqData[cat]} initial={0} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
