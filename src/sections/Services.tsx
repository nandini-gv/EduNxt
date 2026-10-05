import { ArrowRight } from 'lucide-react'
import { AnchorLink } from '@/components/AnchorLink'
import { SectionReveal, StaggerContainer, StaggerItem, MacImageReveal } from '@/components/Reveal'
import { services } from '@/data/site'

export function Services() {
  return (
    <SectionReveal className="relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#071426] to-[#0A1930] py-16 sm:py-24" aria-label="Core services">
      {/* Ambient background lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-electric/15 blur-[130px]" />
      
      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <AnchorLink
                id={s.id}
                className="group relative isolate flex aspect-[4/3] overflow-hidden rounded-[30px] border border-[rgba(150,180,220,0.25)] bg-gradient-to-br from-[#10233F] to-[#071426] shadow-2xl backdrop-blur-xl transition-all duration-500 ease-apple hover:-translate-y-1.5 hover:border-electric/50 sm:aspect-[16/10]"
              >
                <MacImageReveal className="absolute inset-0 -z-20 h-full w-full">
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover opacity-100 transition-transform duration-700 ease-apple group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                </MacImageReveal>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] -z-10 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(3,7,18,0.8) 0%, rgba(3,7,18,0.25) 40%, transparent 70%)',
                  }}
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-0 ring-1 ring-inset ring-electric/60 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative flex w-full flex-col justify-end p-6 sm:p-9 lg:p-10">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition-all duration-500 ease-apple group-hover:bg-electric group-hover:ring-electric/60 group-hover:shadow-glow">
                    <s.icon className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[1.5rem] font-bold leading-tight tracking-tight text-white sm:text-[1.85rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-[28rem] text-[15.5px] leading-relaxed text-[#E8EEF7]/85">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-white">
                    <span>{s.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-2 text-electric-300" aria-hidden="true" />
                  </span>
                </div>
              </AnchorLink>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  )
}
