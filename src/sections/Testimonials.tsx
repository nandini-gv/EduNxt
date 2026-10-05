import { SectionHeading } from '@/components/SectionHeading'
import { TestimonialSlider } from '@/components/TestimonialSlider'
import type { Testimonial } from '@/data/site'
import type { ReactNode } from 'react'

export function Testimonials({ items, title = <>Real People.<br />Real Growth.</>, sub }: { items: Testimonial[]; title?: ReactNode; sub?: ReactNode }) {
  return (
    <section className="section-y overflow-hidden" aria-label="Testimonials">
      <div className="container-x"><SectionHeading size="md" title={title} sub={sub} /></div>
      <div className="mt-6"><TestimonialSlider items={items} /></div>
    </section>
  )
}
