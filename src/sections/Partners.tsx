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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050A14] via-[#071426] to-[#0A1930] pt-12 text-white" aria-labelledby="partners">
      {/* Subtle top divider line */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12 relative z-10 pb-8 sm:pb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Reveal as="h2" className="display-md !text-[1.65rem] sm:!text-[2rem] !text-white font-semibold">
              <span id="partners">Trusted by Innovation Partners</span>
            </Reveal>
            <Reveal delay={0.08} className="mt-1 text-[14.5px] text-[#E8EEF7]/80">
              Working together to create opportunities and build a skilled future.
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <Button to="/marketplace" variant="glass" size="sm" arrow className="!py-2 !px-4 text-xs">
              View All Partners
            </Button>
          </Reveal>
        </div>

        {/* Sleek Logo Rail with 16 continuous partner company logotypes */}
        <Reveal delay={0.1} className="mt-8 flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Previous partners"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
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
            className="no-scrollbar flex flex-1 snap-x snap-mandatory items-center gap-10 overflow-x-auto scroll-smooth py-2 [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] sm:gap-14 lg:gap-16"
          >
            {partners.map((p) => (
              <div
                key={p}
                data-card
                className="flex h-12 shrink-0 snap-start items-center justify-center opacity-95 transition-all duration-300 hover:scale-110 hover:opacity-100"
              >
                <CompanyLogo name={p} className="h-7 w-auto text-white" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Next partners"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>

      {/* Large Organic Asymmetric Wave Divider: Seamlessly transitions dark Partners into light FAQ (#F0F5FF) */}
      <div className="relative w-full overflow-hidden leading-none z-20 -mb-px">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block h-12 w-full text-[#F0F5FF] sm:h-16 lg:h-20 pointer-events-none"
        >
          <path
            d="M0 45 C 360 85, 760 10, 1150 70 L 1440 30 L 1440 90 L 0 90 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
