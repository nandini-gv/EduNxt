import { ArrowRight, MapPin } from 'lucide-react'
import { Skyline } from './Art'
import { cn } from '@/lib/utils'

/** Stylised dark map card. The link opens the real Google Maps search for the office city. */
export function MapCard({ className }: { className?: string }) {
  return (
    <div className={cn('relative isolate aspect-[4/3] overflow-hidden rounded-[32px] border border-white/15 bg-[#071426] shadow-2xl sm:aspect-[16/10] lg:aspect-auto lg:min-h-[300px]', className)}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 -z-10 h-full w-full" aria-hidden="true">
        <rect width="400" height="300" fill="#071426" />
        <path d="M-10 240C60 210 100 260 180 250C260 240 300 280 420 250V310H-10Z" fill="#0A1930" />
        <rect x="230" y="30" width="86" height="56" rx="14" fill="#0E2445" />
        <rect x="300" y="170" width="90" height="70" rx="14" fill="#0E2445" />
        <g stroke="#1677FF" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.3"><path d="M-10 130H410" /><path d="M170 -10V310" /><path d="M-10 60L410 210" /><path d="M300 -10L250 310" /></g>
        <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.15"><path d="M60 -10V310M350 -10V310M-10 200H410M-10 20H410" /></g>
      </svg>
      <div className="absolute inset-y-0 left-0 w-[46%] opacity-20" aria-hidden="true"><Skyline bare className="h-full w-full text-white" /></div>
      <div className="absolute left-[56%] top-[36%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulseRing rounded-full bg-electric/50" />
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-electric text-white shadow-glow ring-4 ring-white/20"><MapPin className="h-5 w-5" /></span>
      </div>
      <div className="absolute bottom-4 right-4 flex max-w-[88%] items-start gap-3 rounded-2xl border border-white/15 bg-[#030712]/85 p-4 shadow-2xl backdrop-blur-xl sm:max-w-[300px]">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-electric text-white shadow-glow"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
        <div className="min-w-0">
          <p className="text-[15px] font-bold text-white">Our Office</p>
          <p className="text-[13px] leading-snug text-white/75">ABC Global Capability Center, Bengaluru, India</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+India" target="_blank" rel="noopener noreferrer" className="mt-2.5 inline-flex h-9 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 text-[13px] font-semibold text-electric-300 transition hover:bg-white/20 hover:text-white">View on Google Maps<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  )
}
