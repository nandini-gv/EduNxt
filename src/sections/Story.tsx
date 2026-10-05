import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { AnchorLink } from '@/components/AnchorLink'
import { Reveal } from '@/components/Reveal'
import { useDragRail } from '@/hooks/useDragRail'
import { storySlides } from '@/data/slider'
import { cn } from '@/lib/utils'

export function Story() {
  const { ref, scrollBy, canPrev, canNext, bind } = useDragRail()

  return (
    <section id="story" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F1F6FF] to-white py-16 sm:py-24 lg:py-28" aria-labelledby="story-h">
      {/* Background atmospheric ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-electric">
                <Sparkles className="h-3 w-3" /> EXPLORE WHAT’S POSSIBLE
              </span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="display-md mt-3 !text-[2.2rem] sm:!text-[3rem]">
              <span id="story-h">Real Opportunities. Real Growth.</span>
            </Reveal>
            <Reveal delay={0.12} className="mt-3 text-[16px] leading-relaxed text-ink-700/85 sm:text-[17px]">
              From learning new skills to finding your next opportunity, discover experiences designed around people, skills and progress.
            </Reveal>
          </div>

          <Reveal delay={0.16} className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Previous story"
              className="grid h-12 w-12 place-items-center rounded-full border border-hair bg-white text-ink shadow-soft transition-all hover:border-electric hover:bg-electric hover:text-white disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Next story"
              className="grid h-12 w-12 place-items-center rounded-full border border-hair bg-white text-ink shadow-soft transition-all hover:border-electric hover:bg-electric hover:text-white disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Apple-Style Horizontal Storytelling Carousel with WIDER FIRST CARD */}
      <div
        ref={ref}
        {...bind}
        tabIndex={0}
        role="region"
        aria-label="Storytelling carousel"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') scrollBy(1)
          if (e.key === 'ArrowLeft') scrollBy(-1)
        }}
        className="no-scrollbar mt-10 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 py-4 active:cursor-grabbing sm:px-8 lg:px-[max(2rem,calc((100vw-1560px)/2+3rem))]"
      >
        {storySlides.map((s, i) => {
          const isFirst = i === 0
          return (
            <Reveal
              key={s.id}
              delay={i * 0.08}
              y={26}
              as="div"
              className={cn(
                'shrink-0 snap-start transition-all duration-500',
                isFirst
                  ? 'w-[90%] sm:w-[75%] lg:w-[62%]' // CRITICAL: FIRST CARD IS 60-70% WIDE
                  : 'w-[75%] sm:w-[48%] lg:w-[32%]'  // REMAINING CARDS 30-40% WIDE
              )}
            >
              <div data-card className="h-full">
                <AnchorLink id={s.anchor} className="group flex h-full flex-col">
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-[30px] shadow-soft transition-all duration-500 ease-apple group-hover:shadow-lift',
                      isFirst ? 'aspect-[16/9] sm:aspect-[16/10]' : 'aspect-[4/3]'
                    )}
                  >
                    <img
                      src={s.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[1000ms] ease-apple group-hover:scale-[1.06]"
                      loading="lazy"
                      draggable={false}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                    {isFirst && (
                      <div className="absolute left-6 top-6 rounded-full bg-electric px-3.5 py-1 text-xs font-bold text-white shadow-glow">
                        FEATURED
                      </div>
                    )}
                    <div aria-hidden="true" className="absolute inset-0 opacity-0 ring-2 ring-inset ring-electric/50 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="mt-5 flex flex-1 flex-col justify-between px-1">
                    <div>
                      <h3
                        className={cn(
                          'font-display font-extrabold tracking-tight text-ink group-hover:text-electric transition-colors',
                          isFirst ? 'text-[1.5rem] sm:text-[1.8rem]' : 'text-[1.25rem]'
                        )}
                      >
                        {s.heading}
                      </h3>
                      <p
                        className={cn(
                          'mt-2 leading-relaxed text-ink-700/80',
                          isFirst ? 'max-w-[34rem] text-[15.5px] sm:text-[16.5px]' : 'max-w-[26rem] text-[14.5px]'
                        )}
                      >
                        {s.text}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-electric">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </AnchorLink>
              </div>
            </Reveal>
          )
        })}
        <div aria-hidden="true" className="w-4 shrink-0" />
      </div>
    </section>
  )
}
