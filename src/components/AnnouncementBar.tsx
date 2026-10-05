import { ArrowRight, Sparkles } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

export function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="relative z-[70] w-full bg-gradient-to-r from-[#030712] via-[#071426] to-[#030712] text-white border-b border-white/10">
      <div className="mx-auto flex h-[38px] max-w-[1560px] items-center justify-between px-4 sm:px-8 text-[13px] font-medium">
        {/* Mobile View */}
        <div className="flex w-full items-center justify-center sm:hidden">
          <RouterLink
            to="/marketplace"
            className="group flex items-center justify-center gap-2 text-white/90 transition hover:text-white"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-electric/25 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-electric-300">
              <Sparkles className="h-3 w-3" /> New
            </span>
            <span className="text-center">50+ companies are hiring now</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-electric-300" aria-hidden="true" />
          </RouterLink>
        </div>

        {/* Desktop View Center-Aligned Left/Main Content */}
        <div className="hidden items-center justify-center gap-3 sm:flex mx-auto">
          <span className="inline-flex items-center gap-1 rounded-full bg-electric/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-electric-300 ring-1 ring-electric/40">
            <Sparkles className="h-3 w-3" /> New
          </span>
          <RouterLink
            to="/marketplace"
            className="group inline-flex items-center justify-center gap-1.5 text-white/90 transition hover:text-white"
          >
            <span className="text-center">50+ leading companies are hiring now. <span className="font-semibold text-white underline underline-offset-4 decoration-electric/60 group-hover:decoration-electric">Explore opportunities</span></span>
            <ArrowRight className="h-3.5 w-3.5 text-electric-300 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </RouterLink>
        </div>

        {/* Desktop View Right */}
        <div className="hidden items-center gap-2 sm:flex shrink-0">
          <span className="text-white/60">For recruiters</span>
          <a
            href="#connect"
            className="group inline-flex items-center gap-1 font-semibold text-electric-300 transition hover:text-white"
          >
            <span>Post a job</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  )
}
