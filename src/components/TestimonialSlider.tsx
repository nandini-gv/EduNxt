import type { Testimonial } from '@/data/site'
import { Rail } from './Rail'
import { Reveal } from './Reveal'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  return (
    <Reveal scale={0.97} y={16}>
      <Rail label="Testimonials" itemClass="w-[86%] sm:w-[62%] md:w-[46%] lg:w-[34%]">
        {items.map((t) => <TestimonialCard key={t.name} t={t} />)}
      </Rail>
    </Reveal>
  )
}
