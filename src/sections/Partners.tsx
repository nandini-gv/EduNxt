import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { partners } from '@/data/site'
import { useDragRail } from '@/hooks/useDragRail'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { CompanyLogo } from '@/components/CompanyLogos'

export function Partners() {
  const reduce = useReducedMotion()
  const { ref, scrollBy, canPrev, canNext, bind } = useDragRail()
  const [hold, setHold] = useState(false)

  useEffect(() => {
    if (hold || reduce) return
    const t = setInterval(() => {
      const el = ref.current
      if (!el) return
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollBy(1)
      }
    }, 3200)
    return () => clearInterval(t)
  }, [hold, reduce, ref, scrollBy])

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20" aria-labelledby="partners">
      {/* Background glow lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hair to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-hair to-transparent" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal as="h2" className="display-md !text-[1.75rem] sm:!text-[2.2rem]">
              <span id="partners">Trusted by Innovation Partners</span>
            </Reveal>
            <Reveal delay={0.08} className="mt-2 text-[15.5px] text-ink-700/80">
              Working together to create opportunities and build a skilled future.
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <Button to="/marketplace" variant="secondary" size="sm" arrow>
              View All Partners
            </Button>
          </Reveal>
        </div>

        {/* Colorful Partner Logos Carousel */}
        <Reveal delay={0.1} className="mt-8 flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Previous partners"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hair text-ink transition hover:bg-electric/10 hover:text-electric disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={ref}
            {...bind}
            tabIndex={0}
            role="region"
            aria-label="Partner logos"
            onMouseEnter={() => setHold(true)}
            onMouseLeave={() => setHold(false)}
            onFocus={() => setHold(true)}
            onBlur={() => setHold(false)}
            onTouchStart={() => setHold(true)}
            className="no-scrollbar flex flex-1 snap-x snap-mandatory items-center gap-6 overflow-x-auto scroll-smooth py-2 [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] sm:gap-8"
          >
            {partners.map((p) => (
              <div
                key={p}
                data-card
                className="flex h-20 w-[45%] shrink-0 snap-start items-center justify-center rounded-2xl border border-hair/60 bg-mist/60 px-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/40 hover:bg-white hover:shadow-soft sm:w-[28%] lg:w-[20%] xl:w-[15%]"
              >
                <CompanyLogo name={p} className="h-7 w-auto" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Next partners"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hair text-ink transition hover:bg-electric/10 hover:text-electric disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
