import { ArrowRight, MapPin } from 'lucide-react'
import { Skyline } from './Art'
import { cn } from '@/lib/utils'

/** Stylised map. The link opens the real Google Maps search for the (demo) office city. */
export function MapCard({ className }: { className?: string }) {
  return (
    <div className={cn('relative isolate aspect-[4/3] overflow-hidden rounded-[28px] border border-hair bg-[#E8F1FC] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[280px]', className)}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
        <rect width="400" height="300" fill="#E8F1FC" />
        <path d="M-10 240C60 210 100 260 180 250C260 240 300 280 420 250V310H-10Z" fill="#CFE2FA" />
        <rect x="230" y="30" width="86" height="56" rx="14" fill="#D9EBE0" /><rect x="300" y="170" width="90" height="70" rx="14" fill="#D9EBE0" />
        <g stroke="#fff" strokeWidth="9" strokeLinecap="round" fill="none"><path d="M-10 130H410" /><path d="M170 -10V310" /><path d="M-10 60L410 210" /><path d="M300 -10L250 310" /></g>
        <g stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".9"><path d="M60 -10V310M350 -10V310M-10 200H410M-10 20H410" /></g>
      </svg>
      <div className="absolute inset-y-0 left-0 w-[46%]" aria-hidden="true"><Skyline bare className="h-full w-full" /></div>
      <div className="absolute left-[56%] top-[36%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulseRing rounded-full bg-electric/40" />
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-electric text-white shadow-glow ring-4 ring-white"><MapPin className="h-5 w-5" /></span>
      </div>
      <div className="glass absolute bottom-4 right-4 flex max-w-[86%] items-start gap-3 rounded-2xl p-4 shadow-soft sm:max-w-[290px]">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-electric text-white"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
        <div className="min-w-0">
          <p className="text-[15px] font-bold text-ink">Our Office</p>
          <p className="text-[13px] leading-snug text-ink-700/80">ABC Global Capability Center, Bengaluru, India</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+India" target="_blank" rel="noopener noreferrer" className="mt-2.5 inline-flex h-9 items-center gap-1.5 rounded-full border border-hair bg-white px-3.5 text-[13px] font-semibold text-electric transition hover:border-electric/40 hover:shadow-soft">View on Google Maps<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  )
}
