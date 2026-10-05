import { Children, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useDragRail } from '@/hooks/useDragRail'
import { cn } from '@/lib/utils'

/** Horizontal snap rail: native touch momentum, mouse drag, arrows, progress bar. */
export function Rail({ children, itemClass = 'w-[78%] sm:w-[44%] lg:w-[31%]', label }: { children: ReactNode; itemClass?: string; label: string }) {
  const { ref, progress, canPrev, canNext, scrollBy, bind } = useDragRail()
  const pad = 'px-5 sm:px-8 lg:px-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))]'
  return (
    <div>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'ArrowRight') scrollBy(1); if (e.key === 'ArrowLeft') scrollBy(-1) }}
        {...bind}
        className={cn('no-scrollbar flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-6 active:cursor-grabbing', pad, '[scroll-padding-inline:1.25rem] sm:[scroll-padding-inline:2rem] lg:[scroll-padding-inline:max(2.5rem,calc((100vw-1240px)/2+2.5rem))]')}
      >
        {Children.map(children, (c) => (
          <div data-card className={cn('shrink-0 snap-start', itemClass)}>{c}</div>
        ))}
        <div aria-hidden="true" className="w-1 shrink-0 sm:w-4" />
      </div>
      <div className="container-x mt-2 flex items-center gap-6">
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
          <div className="h-full rounded-full bg-electric transition-[width] duration-200" style={{ width: `${18 + progress * 82}%` }} />
        </div>
        <div className="flex gap-2">
          {[{ d: -1 as const, I: ArrowLeft, l: 'Previous', on: canPrev }, { d: 1 as const, I: ArrowRight, l: 'Next', on: canNext }].map(({ d, I, l, on }) => (
            <button key={l} onClick={() => scrollBy(d)} disabled={!on} aria-label={l}
              className="grid h-11 w-11 place-items-center rounded-full border border-hair bg-white text-ink transition-all duration-300 hover:border-electric/40 hover:text-electric hover:shadow-soft disabled:opacity-35 disabled:hover:border-hair disabled:hover:text-ink disabled:hover:shadow-none">
              <I className="h-[18px] w-[18px]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
