import { slot4BrandConfig } from './brand.config'

export type Slot4VisualPreset =
  | 'editorial-paper'
  | 'luxury-atelier'
  | 'brutalist-index'
  | 'organic-journal'
  | 'tech-directory'
  | 'retro-bulletin'
  | 'visual-gallery'

export const visualPresets = {
  'editorial-paper': {
    label: 'Editorial Paper',
    mood: 'calm magazine authority',
    fontDirection: 'serif-inspired display with clean body copy',
    colors: {
      background: '#fff9f5',
      foreground: '#280905',
      muted: '#8d6b63',
      primary: '#740A03',
      accent: '#C3110C',
      surface: '#ffffff',
    },
    shape: 'soft editorial cards with hairline borders',
  },
  'luxury-atelier': {
    label: 'Luxury Atelier',
    mood: 'premium, dramatic, confident',
    fontDirection: 'high-contrast display headlines with dense sans UI',
    colors: {
      background: '#f7efe8',
      foreground: '#280905',
      muted: '#73514a',
      primary: '#740A03',
      accent: '#E6501B',
      surface: '#fff8f3',
    },
    shape: 'large sculpted panels, warm highlights, deep editorial contrast',
  },
  'brutalist-index': {
    label: 'Brutalist Index',
    mood: 'bold, raw, memorable',
    fontDirection: 'condensed headings, hard labels, sharp rhythm',
    colors: {
      background: '#f2efe9',
      foreground: '#1d0906',
      muted: '#6c5751',
      primary: '#280905',
      accent: '#C3110C',
      surface: '#ffffff',
    },
    shape: 'hard cards, offsets, strong strokes',
  },
  'organic-journal': {
    label: 'Organic Journal',
    mood: 'warm, tactile, trustworthy',
    fontDirection: 'humanist sans with generous spacing',
    colors: {
      background: '#f8f1ea',
      foreground: '#2e120e',
      muted: '#7b6159',
      primary: '#6f1f17',
      accent: '#d8642c',
      surface: '#fffaf4',
    },
    shape: 'rounded cards with warm paper tones',
  },
  'tech-directory': {
    label: 'Tech Directory',
    mood: 'useful, sharp, structured',
    fontDirection: 'clean sans with strong utility labels',
    colors: {
      background: '#f7f1ec',
      foreground: '#2b0d08',
      muted: '#6d5c58',
      primary: '#740A03',
      accent: '#E6501B',
      surface: '#ffffff',
    },
    shape: 'clean grids, outlined filters, crisp data rhythm',
  },
  'retro-bulletin': {
    label: 'Retro Bulletin',
    mood: 'lively, punchy, collectible',
    fontDirection: 'chunky display with strong labels',
    colors: {
      background: '#fff0e6',
      foreground: '#280905',
      muted: '#7f5a48',
      primary: '#740A03',
      accent: '#E6501B',
      surface: '#fff9f3',
    },
    shape: 'tabs, badges, framed modules, poster energy',
  },
  'visual-gallery': {
    label: 'Visual Gallery',
    mood: 'cinematic, image-led, immersive',
    fontDirection: 'minimal sans with oversized display moments',
    colors: {
      background: '#180705',
      foreground: '#fff6f0',
      muted: '#d9bbb1',
      primary: '#E6501B',
      accent: '#C3110C',
      surface: '#2a0d08',
    },
    shape: 'dark cards, large media, glowing overlays',
  },
} as const

export const visualSystem = {
  productKind: slot4BrandConfig.productKind,
  recommendedPreset: 'luxury-atelier',
  radius: {
    sm: '0.85rem',
    md: '1.35rem',
    lg: '2rem',
    xl: '2.8rem',
  },
  motion: {
    pageLoad: 'animate-in fade-in slide-in-from-bottom-4 duration-700',
    cardHover: 'transition duration-300 hover:-translate-y-1 hover:shadow-xl',
    softHover: 'transition duration-300 hover:opacity-90',
    reduceMotionSafe: 'motion-reduce:transform-none motion-reduce:transition-none',
  },
  typography: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.28em]',
    heroTitle: 'text-5xl font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl',
    sectionTitle: 'text-3xl font-black tracking-[-0.05em] sm:text-4xl',
    body: 'text-base leading-8',
    caption: 'text-xs font-black uppercase tracking-[0.18em]',
  },
  surfaces: {
    glass: 'border border-white/15 bg-white/10 backdrop-blur-xl',
    paper: 'border border-black/10 bg-white shadow-[0_24px_70px_rgba(40,9,5,0.08)]',
    quiet: 'border border-black/10 bg-black/[0.03]',
    dark: 'border border-white/10 bg-[#280905] shadow-[0_24px_70px_rgba(40,9,5,0.28)]',
  },
  layout: {
    page: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
    cardGrid: 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
  },
} as const

export function getVisualPreset(name: Slot4VisualPreset = visualSystem.recommendedPreset as Slot4VisualPreset) {
  return visualPresets[name]
}
