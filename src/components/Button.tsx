import type { ReactNode, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Magnetic } from './Magnetic'

const variants = {
  primary: 'bg-electric text-white hover:bg-electric-400 hover:shadow-glow',
  secondary: 'bg-white text-ink border border-hair hover:border-electric/40 hover:shadow-soft',
  dark: 'bg-ink text-white hover:bg-ink-800 hover:shadow-[0_10px_30px_-8px_rgba(7,26,58,.55)]',
  light: 'bg-white text-ink hover:shadow-[0_10px_34px_-8px_rgba(255,255,255,.55)]',
  glass: 'bg-white/15 text-white border border-white/35 backdrop-blur-md hover:bg-white/25',
  ghost: 'text-ink hover:bg-ink/5',
}
const sizes = { md: 'h-11 px-5 text-[15px]', lg: 'h-[52px] px-7 text-base', sm: 'h-9 px-4 text-sm' }

type Props = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  arrow?: boolean
  magnetic?: boolean
  to?: string
  href?: string
  icon?: ReactNode
  className?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
  type?: 'button' | 'submit'
  disabled?: boolean
  full?: boolean
  mfull?: boolean
}

export function Button({ variant = 'primary', size = 'md', arrow, magnetic, to, href, icon, className, children, onClick, type = 'button', disabled, full, mfull }: Props) {
  const mobileFull = mfull ?? size === 'lg'
  const cls = cn(
    'group relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight',
    'transition-all duration-300 ease-apple active:scale-[.98] disabled:opacity-60 disabled:pointer-events-none',
    variants[variant], sizes[size], full && 'w-full', mobileFull && 'max-sm:w-full', className,
  )
  const inner = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )
  const el = to ? (
    <Link to={to} className={cls} onClick={onClick}>{inner}</Link>
  ) : href ? (
    <a href={href} className={cls} onClick={onClick}>{inner}</a>
  ) : (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>{inner}</button>
  )
  return magnetic ? <Magnetic className={full ? 'block w-full' : mobileFull ? 'inline-block max-sm:block max-sm:w-full' : 'inline-block'}>{el}</Magnetic> : el
}
