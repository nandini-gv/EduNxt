import { useEffect } from 'react'

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets a unique <title>, description and Open Graph tags for each route. */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    const full = title.includes('ABC') ? title : `${title} — ABC`
    document.title = full
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'ABC')
    setMeta('name', 'twitter:card', 'summary_large_image')
  }, [title, description])
}
