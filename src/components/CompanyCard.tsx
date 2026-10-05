import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, MapPin, Users2 } from 'lucide-react'
import type { Company } from '@/data/companies'
import { cn } from '@/lib/utils'

export function CompanyCard({ c }: { c: Company }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-hair bg-white p-6 shadow-soft transition-all duration-500 ease-apple hover:-translate-y-1.5 hover:border-electric/30 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <span className={cn('grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br font-display text-lg font-extrabold text-ink transition-transform duration-500 ease-apple group-hover:scale-105', c.tone)}>{c.initial}</span>
        {c.hiringNow && <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-50 px-3 py-1 text-xs font-semibold text-electric"><span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />Hiring Now</span>}
      </div>
      <h3 className="mt-4 font-display text-[1.15rem] font-bold tracking-tight text-ink">{c.name}</h3>
      <p className="mt-1.5 line-clamp-2 text-[14.5px] leading-relaxed text-ink-700/80">{c.description}</p>
      <dl className="mt-4 space-y-1.5 text-[13.5px] text-ink-700/80">
        <div className="flex items-center gap-2"><Briefcase className="h-[15px] w-[15px] text-ink-700/50" aria-hidden="true" /><dt className="sr-only">Industry</dt><dd>{c.industry} · {c.employeesLabel}</dd></div>
        <div className="flex items-center gap-2"><MapPin className="h-[15px] w-[15px] text-ink-700/50" aria-hidden="true" /><dt className="sr-only">Location</dt><dd>{c.location}</dd></div>
        <div className="flex items-center gap-2"><Users2 className="h-[15px] w-[15px] text-ink-700/50" aria-hidden="true" /><dt className="sr-only">Open jobs</dt><dd className="font-semibold text-ink">{c.openJobs} Open Jobs</dd></div>
      </dl>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {c.tags.slice(0, 3).map((t) => <li key={t} className="rounded-full border border-hair bg-mist px-2.5 py-1 text-[11.5px] font-medium text-ink-700">{t}</li>)}
      </ul>
      <div className="mt-auto flex items-center gap-4 pt-5">
        <Link to={`/marketplace/${c.slug}`} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-electric">View Company<ArrowRight className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-1" aria-hidden="true" /></Link>
        <Link to={`/marketplace/${c.slug}#opportunities`} className="link-u text-[13.5px] font-medium text-ink-700/80 hover:text-ink">View Open Jobs</Link>
      </div>
    </article>
  )
}
