import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f7efe8',
  '--slot4-page-text': '#280905',
  '--slot4-panel-bg': '#fff8f3',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#73514a',
  '--slot4-soft-muted-text': '#8d6b63',
  '--slot4-accent': '#740A03',
  '--slot4-accent-fill': '#C3110C',
  '--slot4-accent-soft': '#fbe0d2',
  '--slot4-accent-glow': '#E6501B',
  '--slot4-dark-bg': '#280905',
  '--slot4-dark-text': '#fff6f0',
  '--slot4-media-bg': '#ead9d3',
  '--slot4-cream': '#fff9f5',
  '--slot4-warm': '#fff1e8',
  '--slot4-tint': '#f8d3c4',
  '--slot4-gray': '#f3ece8',
  '--slot4-body-gradient':
    'radial-gradient(circle at top right, rgba(230,80,27,0.12), transparent 26%), linear-gradient(180deg, #fffdfb 0%, #f7efe8 38%, #f3ece8 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-glow)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-tint)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[color:rgba(40,9,5,0.12)]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_20px_55px_rgba(40,9,5,0.09)]',
  shadowStrong: 'shadow-[0_28px_80px_rgba(40,9,5,0.16)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(40,9,5,0.04),rgba(40,9,5,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[190px] shrink-0 snap-start sm:w-[220px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.28em]',
    heroTitle: 'text-4xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[4.25rem]',
    sectionTitle: 'text-3xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-[1.8rem] border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-[1.8rem] border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-[1.8rem] ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary:
      'inline-flex items-center justify-center rounded-full bg-[var(--slot4-dark-bg)] px-8 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-[var(--slot4-dark-text)] transition hover:-translate-y-0.5',
    secondary:
      'inline-flex items-center justify-center rounded-full border border-[color:rgba(40,9,5,0.12)] bg-white px-8 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-[var(--slot4-page-text)] transition hover:-translate-y-0.5',
    accent:
      'inline-flex items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] px-8 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5',
  },
  media: {
    frame: `relative overflow-hidden rounded-[1.25rem] ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/5]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(40,9,5,0.16)]',
    fade: 'transition duration-300 hover:opacity-90',
  },
} as const

export const aiLayoutRules = [
  'Keep all redesign work inside src/editable so app logic and routing stay untouched.',
  'Use the GOFKAR palette variables first; every major section should derive from editableRootStyle.',
  'Mix featured, compact, horizontal, editorial list, and image-first card styles across the experience.',
  'Keep dynamic post fetching intact and always render safe fallbacks for missing summary, image, and category.',
  'Use postHref() for post links so task routes keep working without rewiring.',
  'Favor dramatic section rhythm, premium spacing, and asymmetric layouts over generic card grids.',
] as const
