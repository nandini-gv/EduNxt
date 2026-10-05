import type { ReactNode, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

export function GlassCard({ children, className, float, style }: { children: ReactNode; className?: string; float?: boolean; style?: CSSProperties }) {
  return (
    <div style={style} className={cn('glass rounded-2xl shadow-[0_18px_50px_-18px_rgba(7,26,58,.35)]', float && 'animate-drift', className)}>
      {children}
    </div>
  )
}
