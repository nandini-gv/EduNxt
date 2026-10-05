import { useCallback, useEffect, useRef, useState } from 'react'

/** Scroll-snap rail with mouse-drag, arrow controls and progress. Touch uses native momentum. */
export function useDragRail() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [canPrev, setPrev] = useState(false)
  const [canNext, setNext] = useState(true)
  const drag = useRef({ down: false, x: 0, left: 0, moved: false })

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
    setPrev(el.scrollLeft > 4)
    setNext(el.scrollLeft < max - 4)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [update])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    drag.current = { down: true, x: e.clientX, left: ref.current.scrollLeft, moved: false }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d.down || !ref.current) return
    const dx = e.clientX - d.x
    if (Math.abs(dx) > 4) d.moved = true
    ref.current.style.scrollSnapType = 'none'
    ref.current.scrollLeft = d.left - dx
  }
  const end = () => {
    if (!drag.current.down || !ref.current) return
    drag.current.down = false
    ref.current.style.scrollSnapType = ''
  }
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false }
  }
  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = (card?.offsetWidth ?? 320) + 20
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }
  return {
    ref, progress, canPrev, canNext, scrollBy,
    bind: { onPointerDown, onPointerMove, onPointerUp: end, onPointerLeave: end, onClickCapture },
  }
}
