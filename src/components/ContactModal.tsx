import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { Button } from './Button'
import { useLenis } from '@/hooks/useSmoothScroll'
import { ease } from '@/lib/utils'

type Values = { name: string; email: string; phone: string; company: string; message: string }
const empty: Values = { name: '', email: '', phone: '', company: '', message: '' }

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-[#C62F3B]">{error}</p>}
    </div>
  )
}

/** Frontend-only contact form in a modal. Nothing is sent anywhere; this is a demo. */
export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [v, setV] = useState<Values>(empty)
  const [errors, setErrors] = useState<Partial<Values>>({})
  const [sent, setSent] = useState(false)
  const lenis = useLenis()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    lenis.current?.stop()
    closeRef.current?.focus()
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); lenis.current?.start() }
  }, [open, onClose, lenis])

  useEffect(() => {
    if (!open) { setTimeout(() => { setV(empty); setErrors({}); setSent(false) }, 400) }
  }, [open])

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV((s) => ({ ...s, [k]: e.target.value }))
  const aria = (k: keyof Values) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: Partial<Values> = {}
    if (!v.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Enter a valid email address.'
    if (v.message.trim().length < 10) er.message = 'Tell us a little more (at least 10 characters).'
    setErrors(er)
    if (Object.keys(er).length === 0) setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} role="dialog" aria-modal="true" aria-label="Contact ABC">
          <button aria-label="Close" onClick={onClose} tabIndex={-1} className="absolute inset-0 cursor-default bg-ink/55 backdrop-blur-md" />
          <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.97, y: 10, opacity: 0 }} transition={{ duration: 0.5, ease }}
            className="relative w-full max-w-lg overflow-hidden rounded-[28px] bg-white shadow-[0_40px_100px_-20px_rgba(7,26,58,.6)]">
            <div className="flex items-center justify-between border-b border-hair px-6 py-5 sm:px-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">Let’s Talk</h2>
              <button ref={closeRef} onClick={onClose} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full text-ink-700 transition hover:bg-ink/5"><X className="h-5 w-5" /></button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }} className="flex min-h-[260px] flex-col items-center justify-center text-center" role="status">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-electric-50 text-electric"><CheckCircle2 className="h-8 w-8" aria-hidden="true" /></span>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight">Message sent</h3>
                    <p className="mt-2 max-w-sm text-ink-700/80">Thanks, {v.name.split(' ')[0]}. This is a demo form, so nothing was actually sent, but a real team would reply within one business day.</p>
                    <Button variant="secondary" className="mt-6" onClick={onClose}>Close</Button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2"><Field id="cm-name" label="Name" error={errors.name}><input id="cm-name" className="field" autoComplete="name" placeholder="Your name" value={v.name} onChange={set('name')} {...aria('name')} /></Field></div>
                    <Field id="cm-email" label="Email" error={errors.email}><input id="cm-email" type="email" className="field" autoComplete="email" placeholder="you@company.com" value={v.email} onChange={set('email')} {...aria('email')} /></Field>
                    <Field id="cm-phone" label="Phone"><input id="cm-phone" type="tel" className="field" autoComplete="tel" placeholder="+91 00000 00000" value={v.phone} onChange={set('phone')} /></Field>
                    <div className="sm:col-span-2"><Field id="cm-company" label="Company"><input id="cm-company" className="field" autoComplete="organization" placeholder="Company (optional)" value={v.company} onChange={set('company')} /></Field></div>
                    <div className="sm:col-span-2"><Field id="cm-message" label="Message" error={errors.message}><textarea id="cm-message" rows={4} className="field resize-none" placeholder="Tell us what you're working on" value={v.message} onChange={set('message')} {...aria('message')} /></Field></div>
                    <div className="flex gap-3 sm:col-span-2">
                      <Button type="submit" arrow className="flex-1 sm:flex-none">Send Message</Button>
                      <Button type="button" variant="secondary" onClick={onClose}>Close</Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
