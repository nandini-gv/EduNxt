import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({ title, sub, align = 'left', className, size = 'lg', children }: {
  title: ReactNode; sub?: ReactNode; align?: 'left' | 'center'; className?: string; size?: 'lg' | 'md'; children?: ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      <Reveal as="h2" className={cn(size === 'lg' ? 'display-lg' : 'display-md', align === 'center' && 'max-w-3xl')}>{title}</Reveal>
      {sub && <Reveal delay={0.08} className={cn('lead max-w-xl', align === 'center' && 'mx-auto')}>{sub}</Reveal>}
      {children}
    </div>
  )
}
