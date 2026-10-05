import type { SVGProps } from 'react'
const base = { viewBox: '0 0 24 24', 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
type P = SVGProps<SVGSVGElement>
export const LinkedinIcon = (p: P) => (<svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.4-2.6s2.1 1 2.1 2.5V16" /></svg>)
export const InstagramIcon = (p: P) => (<svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>)
export const YoutubeIcon = (p: P) => (<svg {...base} {...p}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" /></svg>)
export const XIcon = (p: P) => (<svg {...base} {...p}><path d="M4 4l16 16M20 4L4 20" /></svg>)
export const GoogleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.2z" />
    <path fill="#34A853" d="M12 22c2.7 0 4.9-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
    <path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" />
    <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z" />
  </svg>
)
