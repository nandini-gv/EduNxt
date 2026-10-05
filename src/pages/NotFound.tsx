import { Button } from '@/components/Button'
import { Aurora } from '@/components/Aurora'
import { useSeo } from '@/lib/seo'

export default function NotFound({ title = 'This page doesn’t exist.', body = 'The link may be broken or the page may have moved.', to = '/', label = 'Back to home' }: { title?: string; body?: string; to?: string; label?: string }) {
  useSeo('Page not found', 'This page could not be found.')
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden px-5 text-center">
      <Aurora />
      <div>
        <p className="font-display text-[clamp(5rem,20vw,11rem)] font-extrabold leading-none tracking-[-0.06em] grad-text">404</p>
        <h1 className="display-md mt-2">{title}</h1>
        <p className="lead mx-auto mt-3 max-w-sm">{body}</p>
        <div className="mt-8"><Button to={to} size="lg" arrow>{label}</Button></div>
      </div>
    </section>
  )
}
