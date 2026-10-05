import { useRef, type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Card with a soft cursor-following spotlight. Also works on touch (no spotlight). */
export function FeatureCard({ icon: Icon, title, desc, className, children, compact, metric }: {
  icon: LucideIcon; title: string; desc?: string; className?: string; children?: ReactNode; compact?: boolean; metric?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
      className={cn(
        'group relative h-full overflow-hidden rounded-3xl border border-hair bg-white p-6 shadow-soft',
        'transition-all duration-500 ease-apple hover:-translate-y-1.5 hover:border-electric/30 hover:shadow-lift',
        compact ? 'sm:p-6' : 'sm:p-7',
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(260px circle at var(--mx,50%) var(--my,0%), rgba(23,105,255,.09), transparent 70%)' }} />
      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric-50 text-electric ring-1 ring-electric/10 transition-all duration-500 ease-apple group-hover:scale-105 group-hover:bg-electric group-hover:text-white group-hover:shadow-glow">
            <Icon className="h-[22px] w-[22px] transition-transform duration-500 ease-apple group-hover:-rotate-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          {metric && <span className="font-display text-2xl font-extrabold tracking-tight text-electric">{metric}</span>}
        </div>
        <h3 className="font-display text-[1.125rem] font-bold tracking-tight text-ink">{title}</h3>
        {desc && <p className="mt-2 text-[15px] leading-relaxed text-ink-700/80">{desc}</p>}
        {children}
      </div>
    </div>
  )
}
