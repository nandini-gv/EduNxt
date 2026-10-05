import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '@/data/site'
import { Bust } from './Art'
import { cn } from '@/lib/utils'

export function Avatar({ i, className }: { i: number; className?: string }) {
  return (
    <span className={cn('relative block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#D6E7FF] to-[#9CC4FF] ring-2 ring-white', className)}>
      <Bust i={i} className="absolute -top-[5%] left-1/2 w-[118%] -translate-x-1/2" />
    </span>
  )
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-[28px] border border-hair bg-white p-7 shadow-soft transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-lift sm:p-8">
      <div>
        <div className="flex items-center justify-between">
          <Quote className="h-8 w-8 fill-electric/10 text-electric" aria-hidden="true" strokeWidth={1.5} />
          <div className="flex gap-0.5" role="img" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className={cn('h-4 w-4', k < t.rating ? 'fill-electric text-electric' : 'text-ink/15')} aria-hidden="true" />
            ))}
          </div>
        </div>
        <blockquote className="mt-5 font-display text-[1.2rem] font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[1.3rem]">
          “{t.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3.5">
        <Avatar i={t.person} />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[15px] font-semibold text-ink">{t.name}</div>
          <div className="truncate text-sm text-ink-700/70">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}
