import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

// Real LinkedIn App Icon (Blue badge #0A66C2 with white 'in')
export const LinkedinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <rect width="24" height="24" rx="5" fill="#0A66C2" />
    <path
      fill="#FFFFFF"
      d="M5.5 8.5h3v10h-3v-10zm1.5-4.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm4.5 4.5h2.8v1.4h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.54h-3v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58v4.99h-3v-10z"
    />
  </svg>
)

// Real Instagram App Icon (Vibrant brand gradient square + white camera)
export const InstagramIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F56040" />
        <stop offset="50%" stopColor="#F77737" />
        <stop offset="75%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <path
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
    <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
  </svg>
)

// Real YouTube App Icon (Red #FF0000 rounded box + white play icon)
export const YoutubeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <rect width="24" height="24" rx="5" fill="#FF0000" />
    <path fill="#FFFFFF" d="M10 8.5v7l6-3.5-6-3.5z" />
  </svg>
)

// Real X (Twitter) App Icon (Sleek dark badge + white X mark)
export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <rect width="24" height="24" rx="5" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    <path
      fill="#FFFFFF"
      d="M14.25 10.15L18.8 5h-1.08l-3.95 4.45L10.6 5H7l4.77 6.74L7 17h1.08l4.17-4.7 3.32 4.7H19l-4.75-6.85zm-1.48 1.67l-.48-.67-3.83-5.32H10l3.15 4.38.48.67 4.02 5.58h-1.6l-3.28-4.64z"
    />
  </svg>
)

// Real Facebook App Icon (Blue circle #1877F2 + white 'f')
export const FacebookIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      fill="#FFFFFF"
      d="M14 12.5h-2v7h-3v-7H7.5v-2.5H9V8.5C9 7 10 5.5 12.5 5.5h2v2.5h-1.3c-.6 0-.7.3-.7.7V10h2l-.5 2.5z"
    />
  </svg>
)

// Real GitHub App Icon (Dark circle #181717 + white octocat silhouette)
export const GithubIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <circle cx="12" cy="12" r="12" fill="#24292E" />
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.35c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0112 8.7c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0012 4z"
    />
  </svg>
)

export const GoogleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...p}>
    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.2z" />
    <path fill="#34A853" d="M12 22c2.7 0 4.9-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
    <path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" />
    <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z" />
  </svg>
)
