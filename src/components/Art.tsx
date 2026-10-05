import { useId, useMemo, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  People                                                             */
/* ------------------------------------------------------------------ */
type HairStyle = 'short' | 'long' | 'bun' | 'curly' | 'beard'
type Person = { skin: string; shade: string; hair: string; style: HairStyle; top: string; inner: string; suit: boolean; tie?: string }

export const people: Person[] = [
  { skin: '#DDA987', shade: '#C98F6B', hair: '#141A2B', style: 'short', top: '#0B1F3A', inner: '#F4F7FB', suit: true, tie: '#1769FF' },
  { skin: '#C78F6C', shade: '#B17858', hair: '#1A1420', style: 'long', top: '#1769FF', inner: '#fff', suit: false },
  { skin: '#B98062', shade: '#A16A4E', hair: '#161B26', style: 'beard', top: '#26364A', inner: '#EAF1FB', suit: true },
  { skin: '#E6B698', shade: '#D19E7E', hair: '#2A1A14', style: 'bun', top: '#0B1F3A', inner: '#fff', suit: true },
  { skin: '#A8735A', shade: '#915F47', hair: '#120F14', style: 'curly', top: '#5AA7FF', inner: '#fff', suit: false },
  { skin: '#EBC3A6', shade: '#D8AC8C', hair: '#3A2418', style: 'long', top: '#071A3A', inner: '#EAF1FB', suit: true, tie: '#5AA7FF' },
]

export function Bust({ i = 0, className, style }: { i?: number; className?: string; style?: CSSProperties }) {
  const id = useId().replace(/:/g, '')
  const p = people[i % people.length]
  const back = p.style === 'long'
  return (
    <svg viewBox="0 0 200 240" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={`f${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".22" />
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id={`t${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".12" />
          <stop offset="1" stopColor="#000" stopOpacity=".18" />
        </linearGradient>
      </defs>
      {back && <path d="M56 92C44 132 48 178 64 204L136 204C152 178 156 132 144 92Z" fill={p.hair} />}
      {p.style === 'bun' && <circle cx="100" cy="30" r="17" fill={p.hair} />}
      {/* torso */}
      <path d="M4 240C6 200 34 178 74 168L126 168C166 178 194 200 196 240Z" fill={p.top} />
      <path d="M4 240C6 200 34 178 74 168L126 168C166 178 194 200 196 240Z" fill={`url(#t${id})`} />
      {p.suit ? (
        <>
          <path d="M74 165L100 232L126 165Z" fill={p.inner} />
          <path d="M72 168L98 228L82 240L44 240Z" fill="#fff" fillOpacity=".07" />
          <path d="M128 168L102 228L118 240L156 240Z" fill="#fff" fillOpacity=".07" />
          {p.tie && <path d="M95 192L105 192L108 228L100 240L92 228Z" fill={p.tie} />}
        </>
      ) : (
        <path d="M68 168C76 194 124 194 132 168Z" fill={p.top} />
      )}
      {/* neck */}
      <path d="M83 128L117 128L117 172C110 186 90 186 83 172Z" fill={p.shade} />
      {!p.suit && <path d="M70 168C78 194 122 194 130 168C122 176 78 176 70 168Z" fill={p.top} />}
      {/* ears + head */}
      <circle cx="63" cy="104" r="7" fill={p.shade} />
      <circle cx="137" cy="104" r="7" fill={p.shade} />
      <ellipse cx="100" cy="98" rx="37" ry="45" fill={p.skin} />
      <ellipse cx="100" cy="98" rx="37" ry="45" fill={`url(#f${id})`} />
      {p.style === 'beard' && <path d="M63 106C65 140 84 154 100 154C116 154 135 140 137 106C130 126 118 134 100 134C82 134 70 126 63 106Z" fill={p.hair} />}
      {/* face */}
      <g fill="none" strokeLinecap="round">
        <path d="M80 89Q86 85.500 92 88.500M108 88.500Q114 85.500 120 89" stroke={p.hair} strokeWidth="2.400" strokeOpacity=".75" />
        <path d="M100 103Q96 111 101 112.500" stroke={p.shade} strokeWidth="2" />
        <path d="M89.500 122Q100 130 110.500 122" stroke={p.style === 'beard' ? '#F4D9CB' : '#7A3B2E'} strokeWidth="2.400" />
      </g>
      <ellipse cx="86" cy="99" rx="2.700" ry="3.300" fill="#1B1420" />
      <ellipse cx="114" cy="99" rx="2.700" ry="3.300" fill="#1B1420" />
      <circle cx="78" cy="110" r="6" fill="#E8836E" fillOpacity=".16" />
      <circle cx="122" cy="110" r="6" fill="#E8836E" fillOpacity=".16" />
      {/* hair */}
      {p.style === 'curly' ? (
        <g fill={p.hair}>
          {[[66, 86], [62, 68], [72, 52], [88, 44], [106, 42], [124, 46], [136, 58], [140, 74], [138, 90]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="15" />)}
          <ellipse cx="100" cy="66" rx="36" ry="24" />
        </g>
      ) : (
        <path d="M60 98C53 52 80 38 102 38C130 38 150 58 140 100C136 80 126 68 104 66C84 66 68 78 60 98Z" fill={p.hair} />
      )}
      <path d="M78 66C90 60 110 60 122 68" stroke="#fff" strokeOpacity=".12" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

const tones = {
  sky: 'from-[#D6E7FF] via-[#E9F2FF] to-[#F7FAFF]',
  ice: 'from-[#EAF3FF] via-[#F3F8FF] to-white',
  blue: 'from-[#9CC4FF] via-[#5AA7FF] to-[#1769FF]',
  ink: 'from-[#0B2A66] via-[#0B1F3A] to-[#071A3A]',
  warm: 'from-[#FFE9D6] via-[#FFF3E8] to-[#FFF9F3]',
}
export type Tone = keyof typeof tones

type Placed = { p: number; x: number; s?: number; y?: number }
export function PersonPanel({
  tone = 'sky', people: list, className, children, rounded = 'rounded-[28px]',
}: { tone?: Tone; people: Placed[]; className?: string; children?: ReactNode; rounded?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-gradient-to-br', tones[tone], rounded, className)}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="300" cy="120" r="150" fill="#fff" fillOpacity={tone === 'ink' || tone === 'blue' ? 0.08 : 0.55} />
        <circle cx="90" cy="340" r="120" fill="#1769FF" fillOpacity={tone === 'ink' ? 0.25 : 0.07} />
        <path d="M-20 300C80 250 160 330 260 290C330 262 380 270 430 300L430 430L-20 430Z" fill="#fff" fillOpacity={tone === 'ink' ? 0.05 : 0.5} />
      </svg>
      {list.map((pl, k) => (
        <Bust
          key={k}
          i={pl.p}
          className="absolute bottom-0 h-auto"
          style={{ left: `${pl.x}%`, width: `${pl.s ?? 62}%`, transform: `translate(-50%, ${pl.y ?? 0}%)` }}
        />
      ))}
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Landscape                                                          */
/* ------------------------------------------------------------------ */
export function MountainScene({ className, hiker = true, dusk = false, align = 'xMidYMax' }: { className?: string; hiker?: boolean; dusk?: boolean; align?: 'xMidYMax' | 'xMaxYMax' }) {
  const id = useId().replace(/:/g, '')
  const sky = dusk ? ['#1769FF', '#5AA7FF', '#CFE4FF'] : ['#A9CDFF', '#D8E9FF', '#F4F8FF']
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio={`${align} slice`} className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} /><stop offset=".6" stopColor={sky[1]} /><stop offset="1" stopColor={sky[2]} />
        </linearGradient>
        <radialGradient id={`g${id}`} cx=".72" cy=".42" r=".5">
          <stop offset="0" stopColor="#fff" stopOpacity={dusk ? 0.9 : 0.95} /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`m1${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={dusk ? '#8DBBFA' : '#B5D2FA'} /><stop offset="1" stopColor={dusk ? '#B9D6FC' : '#D7E7FC'} /></linearGradient>
        <linearGradient id={`m2${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={dusk ? '#4F92F5' : '#7FADEE'} /><stop offset="1" stopColor={dusk ? '#7DB2F8' : '#A9C8F5'} /></linearGradient>
        <linearGradient id={`m3${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={dusk ? '#2A6FE6' : '#4A82DE'} /><stop offset="1" stopColor={dusk ? '#1B54C4' : '#2C5FC6'} /></linearGradient>
        <linearGradient id={`m4${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={dusk ? '#1A4DB8' : '#123E93'} /><stop offset="1" stopColor={dusk ? '#0B2A66' : '#071A3A'} /></linearGradient>
      </defs>
      <rect width="1200" height="600" fill={`url(#s${id})`} />
      <rect width="1200" height="600" fill={`url(#g${id})`} />
      <g fill="#fff" fillOpacity={dusk ? 0.35 : 0.75}>
        <ellipse cx="220" cy="150" rx="130" ry="20" /><ellipse cx="300" cy="135" rx="80" ry="16" />
        <ellipse cx="900" cy="110" rx="150" ry="18" /><ellipse cx="1010" cy="128" rx="90" ry="14" />
      </g>
      <path d="M0 400L120 330L210 380L340 270L470 390L560 340L700 250L820 360L940 300L1080 380L1200 320V600H0Z" fill={`url(#m1${id})`} />
      <path d="M0 460L150 380L260 440L420 320L560 450L690 370L860 300L1000 420L1120 360L1200 400V600H0Z" fill={`url(#m2${id})`} />
      <path d="M860 300L892 336L870 332L862 352L840 330Z" fill="#fff" fillOpacity=".75" />
      <path d="M420 320L448 352L430 348L420 368L402 346Z" fill="#fff" fillOpacity=".65" />
      <path d="M0 520L180 440L320 500L520 400L640 470L820 420L1000 500L1200 430V600H0Z" fill={`url(#m3${id})`} />
      <path d="M0 580L200 520L420 560L680 500L900 550L1200 505V600H0Z" fill={`url(#m4${id})`} />
      {hiker && (
        <g transform="translate(838 236) scale(1.6)" fill="#071A3A">
          <circle cx="10" cy="6" r="6" />
          <path d="M3 14C0 22 0 34 2 46L7 46L9 34L12 46L18 46C19 34 19 22 16 14Z" />
          <path d="M-2 16C-8 20-8 32-3 38L1 34C-1 28-1 24 2 20Z" fill="#123E93" />
          <path d="M24 10L26 50" stroke="#071A3A" strokeWidth="2" />
        </g>
      )}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Globe / network                                                    */
/* ------------------------------------------------------------------ */
export function Globe({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const dots = useMemo(() => {
    const out: { x: number; y: number; o: number; r: number }[] = []
    const R = 168, rot = 0.55
    for (let lat = -80; lat <= 80; lat += 5) {
      const step = 5 / Math.max(Math.cos((lat * Math.PI) / 180), 0.2)
      for (let lon = -180; lon < 180; lon += step) {
        const la = (lat * Math.PI) / 180, lo = (lon * Math.PI) / 180 + rot
        const land = Math.sin(lon * 0.045 + lat * 0.06) + Math.cos(lat * 0.09 - lon * 0.03) + Math.sin(lon * 0.11) * 0.4
        const x = Math.cos(la) * Math.sin(lo), y = Math.sin(la), z = Math.cos(la) * Math.cos(lo)
        if (z < 0.02) continue
        const isLand = land > 0.15
        out.push({ x: 200 + R * x, y: 200 - R * y, o: isLand ? 0.35 + z * 0.6 : 0.1 + z * 0.14, r: isLand ? 2.1 : 1.2 })
      }
    }
    return out
  }, [])
  const nodes: [number, number][] = [[128, 150], [250, 118], [300, 232], [180, 270], [222, 190]]
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`o${id}`} cx=".38" cy=".32" r=".8"><stop offset="0" stopColor="#fff" /><stop offset=".55" stopColor="#DCEAFF" /><stop offset="1" stopColor="#9FC4FF" /></radialGradient>
        <radialGradient id={`h${id}`} cx=".5" cy=".5" r=".5"><stop offset=".7" stopColor="#1769FF" stopOpacity="0" /><stop offset="1" stopColor="#1769FF" stopOpacity=".28" /></radialGradient>
      </defs>
      <circle cx="200" cy="200" r="196" fill={`url(#h${id})`} />
      <circle cx="200" cy="200" r="170" fill={`url(#o${id})`} />
      {dots.map((d, k) => <circle key={k} cx={d.x} cy={d.y} r={d.r} fill="#1769FF" fillOpacity={d.o} />)}
      <g fill="none" stroke="#1769FF" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="3 5">
        <path d="M128 150Q190 70 250 118" /><path d="M250 118Q310 160 300 232" /><path d="M128 150Q140 250 180 270" /><path d="M180 270Q250 290 300 232" /><path d="M222 190L250 118M222 190L128 150M222 190L300 232M222 190L180 270" />
      </g>
      {nodes.map(([x, y], k) => (
        <g key={k}>
          <circle cx={x} cy={y} r="5" fill="#fff" stroke="#1769FF" strokeWidth="2.5" />
          <circle cx={x} cy={y} r="8" fill="#1769FF" fillOpacity=".25" className="origin-center animate-pulseRing" style={{ transformBox: 'fill-box', animationDelay: `${k * 0.5}s` }} />
        </g>
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Lab tiles                                                          */
/* ------------------------------------------------------------------ */
export function LabArt({ kind, className }: { kind: 'cloud' | 'ai' | 'data' | 'devops'; className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#123E93" /><stop offset=".55" stopColor="#0B2A66" /><stop offset="1" stopColor="#071A3A" /></linearGradient>
        <radialGradient id={`w${id}`} cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#5AA7FF" stopOpacity=".65" /><stop offset="1" stopColor="#5AA7FF" stopOpacity="0" /></radialGradient>
        <pattern id={`p${id}`} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#5AA7FF" strokeOpacity=".12" /></pattern>
      </defs>
      <rect width="320" height="240" fill={`url(#b${id})`} />
      <rect width="320" height="240" fill={`url(#p${id})`} />
      <circle cx="160" cy="120" r="110" fill={`url(#w${id})`} />
      {kind === 'cloud' && (
        <g>
          <path d="M96 156a30 30 0 0 1 6-59 44 44 0 0 1 84-8 34 34 0 0 1 36 67Z" fill="#1769FF" fillOpacity=".22" stroke="#8CC0FF" strokeWidth="2.5" strokeLinejoin="round" />
          <g stroke="#8CC0FF" strokeWidth="2" strokeOpacity=".8"><path d="M130 170v22M160 170v34M190 170v22" /></g>
          {[[130, 196], [160, 208], [190, 196]].map(([x, y], k) => <rect key={k} x={x - 8} y={y} width="16" height="10" rx="3" fill="#fff" fillOpacity=".9" />)}
        </g>
      )}
      {kind === 'ai' && (
        <g>
          {[[70, 60], [70, 120], [70, 180]].map(([x, y], a) => [[160, 40], [160, 100], [160, 150], [160, 200]].map(([x2, y2], b) => <line key={`${a}${b}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#8CC0FF" strokeOpacity=".4" />))}
          {[[160, 40], [160, 100], [160, 150], [160, 200]].map(([x, y], a) => [[250, 90], [250, 150]].map(([x2, y2], b) => <line key={`b${a}${b}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#8CC0FF" strokeOpacity=".4" />))}
          {[[70, 60], [70, 120], [70, 180], [160, 40], [160, 100], [160, 150], [160, 200], [250, 90], [250, 150]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r={k > 6 ? 11 : 8} fill={k > 6 ? '#fff' : '#1769FF'} stroke="#8CC0FF" strokeWidth="2" />)}
        </g>
      )}
      {kind === 'data' && (
        <g>
          {[46, 78, 58, 104, 88, 128].map((h, k) => <rect key={k} x={62 + k * 34} y={190 - h} width="20" height={h} rx="5" fill={k === 5 ? '#fff' : '#3F86FF'} fillOpacity={k === 5 ? 0.95 : 0.75} />)}
          <path d="M62 150L96 120L130 134L164 92L198 106L232 62" fill="none" stroke="#8CC0FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="232" cy="62" r="6" fill="#fff" stroke="#1769FF" strokeWidth="3" />
        </g>
      )}
      {kind === 'devops' && (
        <g fill="none" stroke="#8CC0FF" strokeWidth="3" strokeLinecap="round">
          <path d="M160 120C130 70 70 70 70 120C70 170 130 170 160 120C190 70 250 70 250 120C250 170 190 170 160 120Z" strokeOpacity=".9" />
          {[[70, 120], [160, 120], [250, 120]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="10" fill="#1769FF" stroke="#fff" strokeWidth="2.5" />)}
          <path d="M206 178l14 0M100 62l14 0" stroke="#fff" />
        </g>
      )}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Project thumbnails                                                 */
/* ------------------------------------------------------------------ */
export function ProjectThumb({ kind, className }: { kind: 'web' | 'design' | 'chart'; className?: string }) {
  return (
    <svg viewBox="0 0 160 110" className={className} aria-hidden="true">
      <rect width="160" height="110" rx="14" fill="#EAF2FF" />
      <rect x="14" y="14" width="132" height="86" rx="9" fill="#fff" stroke="#071A3A" strokeOpacity=".08" />
      <circle cx="24" cy="24" r="2.5" fill="#FF6B6B" /><circle cx="32" cy="24" r="2.5" fill="#FFC94D" /><circle cx="40" cy="24" r="2.5" fill="#4ADE80" />
      {kind === 'web' && (<g><rect x="24" y="38" width="60" height="6" rx="3" fill="#071A3A" /><rect x="24" y="50" width="44" height="4" rx="2" fill="#071A3A" fillOpacity=".25" /><rect x="24" y="62" width="30" height="10" rx="5" fill="#1769FF" /><rect x="96" y="38" width="40" height="50" rx="7" fill="#DCEAFF" /><rect x="104" y="48" width="24" height="24" rx="12" fill="#1769FF" fillOpacity=".8" /></g>)}
      {kind === 'design' && (<g><rect x="24" y="38" width="34" height="52" rx="6" fill="#DCEAFF" /><rect x="64" y="38" width="34" height="24" rx="6" fill="#1769FF" fillOpacity=".85" /><rect x="64" y="66" width="34" height="24" rx="6" fill="#EEF4FA" stroke="#1769FF" strokeDasharray="3 3" /><rect x="104" y="38" width="32" height="52" rx="6" fill="#DCEAFF" /><path d="M118 70l14 6-6 3-3 6z" fill="#071A3A" /></g>)}
      {kind === 'chart' && (<g><rect x="24" y="38" width="28" height="14" rx="4" fill="#DCEAFF" /><rect x="56" y="38" width="28" height="14" rx="4" fill="#DCEAFF" /><circle cx="118" cy="52" r="15" fill="none" stroke="#DCEAFF" strokeWidth="8" /><circle cx="118" cy="52" r="15" fill="none" stroke="#1769FF" strokeWidth="8" strokeDasharray="60 100" transform="rotate(-90 118 52)" /><path d="M24 88L44 74L62 80L84 62L100 68" fill="none" stroke="#1769FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></g>)}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Skyline for contact hero                                           */
/* ------------------------------------------------------------------ */
export function Skyline({ className, bare = false }: { className?: string; bare?: boolean }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#BBD7FF" /><stop offset="1" stopColor="#F1F7FF" /></linearGradient>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8CC0FF" /><stop offset=".5" stopColor="#3F86FF" /><stop offset="1" stopColor="#123E93" /></linearGradient>
        <pattern id={`w${id}`} width="18" height="16" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="14" height="12" rx="1.5" fill="#fff" fillOpacity=".22" /></pattern>
      </defs>
      {!bare && <rect width="600" height="420" fill={`url(#s${id})`} />}
      {!bare && <g fill="#fff" fillOpacity=".8"><ellipse cx="120" cy="90" rx="90" ry="14" /><ellipse cx="480" cy="70" rx="110" ry="12" /></g>}
      <path d="M40 420V250L110 226V420Z" fill="#9CC4FF" fillOpacity=".7" />
      <path d="M470 420V210L560 240V420Z" fill="#9CC4FF" fillOpacity=".7" />
      <path d="M170 420V96L400 40V420Z" fill={`url(#g${id})`} />
      <path d="M170 420V96L400 40V420Z" fill={`url(#w${id})`} />
      <path d="M400 40L450 70V420H400Z" fill="#0B2A66" fillOpacity=".55" />
      <path d="M170 96L400 40L450 70L220 130Z" fill="#fff" fillOpacity=".3" />
      {!bare && <rect x="0" y="392" width="600" height="28" fill="#0B2A66" fillOpacity=".12" />}
    </svg>
  )
}
