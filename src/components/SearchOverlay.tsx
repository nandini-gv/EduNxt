import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { mobileNav } from '@/data/site'
import { companies } from '@/data/companies'
import { industries } from '@/data/industries'
import { scrollToId } from './AnchorLink'
import { useLenis } from '@/hooks/useSmoothScroll'
import { ease } from '@/lib/utils'

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const go = useNavigate()
  const { pathname } = useLocation()
  const lenis = useLenis()
  useEffect(() => {
    if (!open) return
    setQ('')
    const t = setTimeout(() => ref.current?.focus(), 80)
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { clearTimeout(t); window.removeEventListener('keydown', k) }
  }, [open, onClose])

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    const sections = mobileNav.filter((n) => !s || n.label.toLowerCase().includes(s)).map((n) => ({ label: n.label, hint: 'Section', action: n }))
    const cos = s ? companies.filter((c) => `${c.name} ${c.industry} ${c.tags.join(' ')} ${c.location}`.toLowerCase().includes(s)).slice(0, 5).map((c) => ({ label: c.name, hint: `${c.industry} · Company`, action: { kind: 'company' as const, slug: c.slug } })) : []
    const inds = s ? industries.filter((i) => i.key.toLowerCase().includes(s)).map((i) => ({ label: i.key, hint: 'Industry', action: { kind: 'industry' as const, key: i.key } })) : []
    return [...cos, ...inds, ...sections]
  }, [q])

  const choose = (r: (typeof results)[number]) => {
    const a = r.action as { kind?: string; to?: string; slug?: string; key?: string }
    if (a.kind === 'company') go(`/marketplace/${a.slug}`)
    else if (a.kind === 'industry') go(`/marketplace?industry=${encodeURIComponent(a.key ?? '')}`)
    else if (a.to) {
      if (pathname === '/') scrollToId(a.to, lenis)
      else { sessionStorage.setItem('abc:scrollTo', a.to); go('/') }
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Search">
          <button aria-label="Close search" tabIndex={-1} onClick={onClose} className="absolute inset-0 cursor-default bg-ink/30 backdrop-blur-md" />
          <motion.div initial={{ y: -16, scale: 0.97, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ duration: 0.45, ease }} className="glass relative w-full max-w-xl overflow-hidden rounded-3xl bg-white/85 shadow-[0_40px_100px_-20px_rgba(7,26,58,.45)]">
            <div className="flex items-center gap-3 border-b border-hair px-5">
              <Search className="h-5 w-5 text-ink-700/60" aria-hidden="true" />
              <input ref={ref} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search companies, industries or sections" aria-label="Search companies, industries or sections" className="h-16 flex-1 bg-transparent text-[17px] text-ink outline-none placeholder:text-ink-700/40" />
              <button onClick={onClose} aria-label="Close search" className="grid h-8 w-8 place-items-center rounded-full text-ink-700 hover:bg-ink/5"><X className="h-4 w-4" /></button>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 && <li className="px-4 py-8 text-center text-sm text-ink-700/70">No matches for “{q}”. Try a company like “Microsoft” or an industry like “Finance”.</li>}
              {results.map((r, i) => (
                <li key={r.label + i}>
                  <button onClick={() => choose(r)} className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-electric-50">
                    <span><span className="block text-[15px] font-semibold text-ink">{r.label}</span><span className="text-xs text-ink-700/60">{r.hint}</span></span>
                    <ArrowUpRight className="h-4 w-4 text-ink-700/40 transition group-hover:text-electric" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
