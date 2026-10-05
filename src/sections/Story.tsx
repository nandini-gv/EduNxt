import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { AnchorLink } from '@/components/AnchorLink'
import {
  SectionReveal,
  SectionLabelReveal,
  TextReveal,
  BodyReveal,
  MacImageReveal,
  Reveal,
} from '@/components/Reveal'
import { useDragRail } from '@/hooks/useDragRail'
import { storySlides } from '@/data/slider'
import { cn } from '@/lib/utils'

export function Story() {
  const { ref, scrollBy, canPrev, canNext, bind } = useDragRail()

  return (
    <SectionReveal id="story" className="relative overflow-hidden bg-gradient-to-b from-[#071426] via-[#0A1930] to-[#050A14] py-16 sm:py-24 lg:py-28 text-white" aria-labelledby="story-h">
      {/* Background ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric/15 blur-[130px]" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabelReveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-electric-300 border border-electric/30">
                <Sparkles className="h-3 w-3" /> EXPLORE WHAT’S POSSIBLE
              </span>
            </SectionLabelReveal>
            <TextReveal delay={0.06} className="display-md mt-4 !text-[2.2rem] sm:!text-[3rem] !text-white">
              <span id="story-h">Real Opportunities. Real Growth.</span>
            </TextReveal>
            <BodyReveal delay={0.12} className="mt-3 text-[16.5px] leading-relaxed text-white/80 sm:text-[17.5px]">
              From learning new skills to finding your next opportunity, discover experiences designed around people, skills and progress.
            </BodyReveal>
          </div>

          <Reveal delay={0.16} className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Previous story"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-electric hover:bg-electric hover:shadow-glow disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Next story"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-electric hover:bg-electric hover:shadow-glow disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Apple-Style Storytelling Carousel: Natural Bright Image Presentation & Localized Gradient */}
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
        className="no-scrollbar mt-12 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 py-4 active:cursor-grabbing sm:px-8 lg:px-[max(2rem,calc((100vw-1560px)/2+3rem))]"
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
                'shrink-0 snap-start transition-all duration-500 flex flex-col',
                isFirst
                  ? 'w-[90%] sm:w-[75%] lg:w-[65%]' // 65% FIRST CARD WIDTH
                  : 'w-[75%] sm:w-[48%] lg:w-[32%]'  // REMAINING CARDS SHARE REMAINING WIDTH
              )}
            >
              <div data-card className="h-full flex flex-col">
                <AnchorLink id={s.anchor} className="group relative flex h-[440px] sm:h-[480px] w-full flex-col justify-end overflow-hidden rounded-[32px] border border-white/15 bg-[#071426] p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-apple hover:-translate-y-1.5 hover:border-electric/50">
                  {/* Bright Natural Image (Apple MacBook product storytelling treatment) */}
                  <MacImageReveal className="absolute inset-0 -z-20 h-full w-full">
                    <img
                      src={s.image}
                      alt=""
                      className="h-full w-full object-cover opacity-100 transition-transform duration-700 ease-apple group-hover:scale-[1.025]"
                      loading="lazy"
                      draggable={false}
                    />
                  </MacImageReveal>

                  {/* Subtle Localized Bottom Dark Gradient (Only covers lower portion for text legibility, transparent over top 65%) */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] -z-10 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to top, rgba(3,7,18,0.75) 0%, rgba(3,7,18,0.25) 35%, transparent 65%)',
                    }}
                  />

                  {isFirst && (
                    <div className="absolute left-7 top-7 rounded-full bg-electric/90 backdrop-blur-md px-4 py-1 text-xs font-bold text-white shadow-glow tracking-wider">
                      FEATURED
                    </div>
                  )}

                  <div aria-hidden="true" className="absolute inset-0 opacity-0 ring-2 ring-inset ring-electric/50 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content over localized bottom gradient: IMAGE -> TITLE -> DESCRIPTION -> CTA */}
                  <div className="relative z-10">
                    <h3
                      className={cn(
                        'font-display font-extrabold tracking-tight text-white transition-colors group-hover:text-electric-300',
                        isFirst ? 'text-[1.7rem] sm:text-[2.1rem]' : 'text-[1.35rem]'
                      )}
                    >
                      {s.heading}
                    </h3>
                    <p
                      className={cn(
                        'mt-2.5 leading-relaxed text-white/90 font-medium',
                        isFirst ? 'max-w-[36rem] text-[16px] sm:text-[17px]' : 'max-w-[26rem] text-[14.5px]'
                      )}
                    >
                      {s.text}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric-300">
                      <span>Explore feature</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </AnchorLink>
              </div>
            </Reveal>
          )
        })}
        <div aria-hidden="true" className="w-4 shrink-0" />
      </div>
    </SectionReveal>
  )
}
