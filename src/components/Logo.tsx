import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Logo({ dark = false, className, tagline = false }: { dark?: boolean; className?: string; tagline?: boolean }) {
  return (
    <Link to="/" aria-label="ABC home" className={cn('group inline-flex flex-col leading-none', className)}>
      <span className={cn('font-display text-[26px] font-extrabold tracking-[-0.06em] transition-transform duration-500 ease-apple group-hover:scale-[1.04]', dark ? 'text-white' : 'text-ink')}>ABC</span>
      {tagline && <span className={cn('mt-1 text-[10px] font-medium tracking-[0.04em]', dark ? 'text-white/55' : 'text-ink-700/60')}>People. Skills. Progress.</span>}
    </Link>
  )
}
