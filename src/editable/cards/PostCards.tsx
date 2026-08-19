import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((url): url is string => typeof url === 'string' && Boolean(url))
  const logo = typeof content.logo === 'string' ? content.logo : ''
  return mediaUrl || contentImage || logo || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const raw = (typeof content.description === 'string' && content.description) || (typeof content.summary === 'string' && content.summary) || post?.summary || ''
  const clean = raw.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Featured'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Featured read' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className={`group block min-w-0 overflow-hidden ${dc.surface.card} ${dc.motion.lift}`}>
      <div className="relative min-h-[500px] p-4 sm:p-5 lg:min-h-[620px]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,12,0.08),rgba(40,9,5,0.88))]" />
        <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">
          {label}
        </div>
        <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-end rounded-[1.4rem] p-5 text-white lg:min-h-[560px] lg:p-8">
          <h3 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">{getEditableExcerpt(post, 190)}</p>
          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1e1fcb] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white">
            Open story <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden rounded-[1.5rem] border ${pal.border} bg-white ${dc.motion.lift}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(40,9,5,0.82)_100%)]" />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="absolute bottom-4 left-4 right-4 line-clamp-3 text-xl font-black leading-tight tracking-[-0.04em] text-white">{post.title}</h3>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group block min-w-0 overflow-hidden ${dc.surface.soft} p-5 ${dc.motion.lift}`}>
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--slot4-dark-bg)] text-xs font-black text-white">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <p className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] ${pal.accentText}`}>
            <Clock3 className="h-3.5 w-3.5" /> {getEditableCategory(post)}
          </p>
          <h3 className={`mt-3 line-clamp-2 text-xl font-black leading-tight tracking-[-0.04em] ${pal.panelText}`}>{post.title}</h3>
          <p className={`mt-2 line-clamp-2 text-sm leading-7 ${pal.softMutedText}`}>{getEditableExcerpt(post, 105)}</p>
        </div>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group grid min-w-0 gap-5 overflow-hidden rounded-[1.8rem] border ${pal.border} bg-white p-4 ${dc.motion.lift} sm:grid-cols-[250px_minmax(0,1fr)]`}>
      <div className="relative aspect-[16/12] overflow-hidden rounded-[1.2rem] bg-[var(--slot4-media-bg)] sm:min-h-[210px] sm:aspect-auto">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">
          {getEditableCategory(post)}
        </span>
      </div>
      <div className="min-w-0 p-2 sm:py-4 sm:pr-5">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Story {String(index + 1).padStart(2, '0')}</p>
        <h2 className={`mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] ${pal.panelText} sm:text-3xl`}>{post.title}</h2>
        <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.softMutedText}`}>{getEditableExcerpt(post, 180)}</p>
        <span className={`mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] ${pal.panelText}`}>
          Open article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
