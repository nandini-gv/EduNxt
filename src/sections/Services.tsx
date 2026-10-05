import { ArrowRight } from 'lucide-react'
import { AnchorLink } from '@/components/AnchorLink'
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/site'

export function Services() {
  return (
    <section className="relative bg-white pb-16 pt-10 sm:pb-24 sm:pt-16" aria-label="Core services">
      {/* Background glow transition */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050A14]/5 to-transparent" />
      
      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} y={30} className="h-full">
              <AnchorLink id={s.id} className="group relative isolate flex aspect-[4/3] overflow-hidden rounded-[28px] border border-hair bg-white shadow-soft transition-all duration-500 ease-apple hover:-translate-y-1.5 hover:shadow-lift sm:aspect-[16/10]">
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1100ms] ease-apple group-hover:scale-[1.07]"
                  loading="lazy"
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050A14]/90 via-[#050A14]/40 to-[#050A14]/10 transition-opacity duration-500 group-hover:from-[#050A14]/95" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-0 ring-1 ring-inset ring-electric/60 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative flex w-full flex-col justify-end p-6 sm:p-9 lg:p-10">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition-all duration-500 ease-apple group-hover:bg-electric group-hover:ring-electric/60 group-hover:shadow-glow">
                    <s.icon className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[1.6rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.9rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[28rem] text-[15.5px] leading-relaxed text-white/80">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-white">
                    <span>{s.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-2 text-electric-300" aria-hidden="true" />
                  </span>
                </div>
              </AnchorLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
