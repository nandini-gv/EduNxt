import { AnimatedCounter } from './AnimatedCounter'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

export function Stats({ items, className, glass }: { items: { value: number; suffix: string; label: string }[]; className?: string; glass?: boolean }) {
  return (
    <dl className={cn('grid grid-cols-2 gap-y-8 lg:grid-cols-4', glass && 'glass rounded-3xl p-6 shadow-soft sm:p-8', className)}>
      {items.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={cn('px-2 sm:px-6', i > 0 && 'lg:border-l lg:border-hair', i % 2 === 1 && 'border-l border-hair')}>
          <dd className="font-display text-[2.2rem] font-extrabold leading-none tracking-[-0.04em] text-ink sm:text-5xl">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </dd>
          <dt className="mt-2 text-sm text-ink-700/75">{s.label}</dt>
        </Reveal>
      ))}
    </dl>
  )
}
