import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { className?: string }

// 1. Microsoft Logo (Colorful 4-quadrant square + Microsoft wordmark or standalone icon)
export function MicrosoftLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight text-white ${className}`}>
      <svg viewBox="0 0 21 21" className="h-5 w-5 shrink-0" aria-hidden="true" {...props}>
        <rect x="1" y="1" width="9" height="9" fill="#F25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
        <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
        <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
      </svg>
      <span className="text-[1.1rem]">Microsoft</span>
    </div>
  )
}

// 2. Google Logo (Colorful 4-color Google G + wordmark)
export function GoogleLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-2 font-display font-medium tracking-tight text-white ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true" {...props}>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
      </svg>
      <span className="text-[1.1rem]">Google</span>
    </div>
  )
}

// 3. Amazon Logo (Iconic logo with orange smile arrow)
export function AmazonLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-extrabold tracking-tight text-white ${className}`}>
      <span className="text-[1.15rem] font-bold tracking-tight text-white">amazon</span>
      <svg viewBox="0 0 40 16" className="h-3.5 w-7 text-[#FF9900]" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M2 5C12 14 26 15 36 6C36.8 5.3 38 6.5 37.2 7.2C26.5 17 11.5 16 1.2 7.2C0.5 6.6 1.2 5.5 2 5Z" />
        <path d="M34 2.5L38.5 7L33 10.5C32.3 11 31.5 10 32.2 9.4L35.5 7L33 4.2C32.3 3.5 33.2 2 34 2.5Z" />
      </svg>
    </div>
  )
}

// 4. IBM Logo (8-bar bold blue IBM)
export function IbmLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center font-display font-black tracking-widest text-[#052FAD] ${className}`}>
      <svg viewBox="0 0 60 20" className="h-5 w-auto" fill="#052FAD" aria-hidden="true" {...props}>
        {/* I */}
        <rect x="0" y="0" width="10" height="2.2" />
        <rect x="0" y="3" width="10" height="2.2" />
        <rect x="3.8" y="6" width="2.4" height="2.2" />
        <rect x="3.8" y="9" width="2.4" height="2.2" />
        <rect x="3.8" y="12" width="2.4" height="2.2" />
        <rect x="3.8" y="15" width="2.4" height="2.2" />
        <rect x="0" y="17.8" width="10" height="2.2" />
        
        {/* B */}
        <path d="M14 0h9.5c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14V0zm0 6h10c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14V6zm0 6h10.5c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14v-4.4zm0 6h10.5c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14v-4.4z" />
        
        {/* M */}
        <path d="M31 0h3l4 8 4-8h3v20h-3v-14l-4 8h-2l-4-8v14h-3V0z" />
      </svg>
    </div>
  )
}

// 5. TCS Logo (Tata Consultancy Services colorful logo)
export function TcsLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-black text-white ${className}`}>
      <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-tr from-[#003366] via-[#006699] to-[#E6007E] text-[10px] font-black text-white shadow-sm">
        tcs
      </span>
      <span className="text-[1.1rem] font-black tracking-tight text-[#006699] dark:text-[#0088CC]">tcs</span>
    </div>
  )
}

// 6. Infosys Logo (Vibrant blue Infosys brand logo)
export function InfosysLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center font-display font-bold tracking-tight text-[#007CC3] ${className}`}>
      <span className="text-[1.15rem] italic text-[#007CC3]">Infosys</span>
    </div>
  )
}

// 7. Accenture Logo (Purple arrow Accenture brand logo)
export function AccentureLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-0.5 font-display font-bold tracking-tight text-white ${className}`}>
      <span className="text-[1.1rem] text-white">accenture</span>
      <span className="text-[1.2rem] font-extrabold text-[#A100FF]">&gt;</span>
    </div>
  )
}

// 8. Capgemini Logo (Spade cyan Capgemini brand logo)
export function CapgeminiLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-semibold tracking-tight text-white ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0070AD]" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
      <span className="text-[1.05rem] text-[#0070AD]">Capgemini</span>
    </div>
  )
}

// Helper to render company logo by name in vibrant colors
export function CompanyLogo({ name, className = '' }: { name: string; className?: string }) {
  switch (name) {
    case 'Microsoft':
      return <MicrosoftLogo className={className} />
    case 'Google':
      return <GoogleLogo className={className} />
    case 'Amazon':
      return <AmazonLogo className={className} />
    case 'IBM':
      return <IbmLogo className={className} />
    case 'TCS':
      return <TcsLogo className={className} />
    case 'Infosys':
      return <InfosysLogo className={className} />
    case 'Accenture':
      return <AccentureLogo className={className} />
    case 'Capgemini':
      return <CapgeminiLogo className={className} />
    default:
      return <span className={`font-display font-bold text-ink ${className}`}>{name}</span>
  }
}
