import Link from 'next/link'
import { ArrowRight, Bookmark, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { CompactIndexCard, EditorialFeatureCard, RailPostCard, getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SmallEditorialCard({ post, href, variant }: { post: SitePost; href: string; variant: number }) {
  if (variant % 2 === 0) {
    return (
      <Link href={href} className="group overflow-hidden rounded-[1.4rem] border border-[color:rgba(40,9,5,0.12)] bg-white shadow-[0_18px_48px_rgba(40,9,5,0.08)] transition duration-300 hover:-translate-y-1">
        <div className="relative aspect-[16/11] overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <span className="inline-flex bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">
            {getEditableCategory(post)}
          </span>
          <h3 className="mt-4 line-clamp-3 text-[1.8rem] font-black leading-[1] tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, 120)}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group rounded-[1.4rem] border border-[color:rgba(40,9,5,0.12)] bg-[#fff5ef] p-5 shadow-[0_18px_48px_rgba(40,9,5,0.06)] transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-[var(--slot4-accent-fill)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
          {getEditableCategory(post)}
        </span>
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Spotlight</span>
      </div>
      <h3 className="mt-10 line-clamp-4 text-[1.9rem] font-black leading-[1] tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, 125)}</p>
    </Link>
  )
}

function HorizontalStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 overflow-hidden rounded-[1.6rem] border border-[color:rgba(40,9,5,0.12)] bg-white p-3 shadow-[0_18px_48px_rgba(40,9,5,0.06)] transition duration-300 hover:-translate-y-1 sm:grid-cols-[180px_minmax(0,1fr)]">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.1rem] bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 py-2 pr-2">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Editor's lane {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-3 line-clamp-2 text-[1.7rem] font-black leading-[1.02] tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, 145)}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPosts = posts.slice(0, 5)
  const leadPost = heroPosts[0]
  const sidePosts = heroPosts.slice(1, 5)
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[#1e1fcb]" />
      <div className="pointer-events-none absolute -left-[8%] top-[18%] h-[720px] w-[520px] rounded-[45%] border-[90px] border-[#ffba14] opacity-95 [transform:rotate(22deg)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-[var(--slot4-page-text)] sm:text-6xl lg:text-[4.3rem]">
            {heroTitle}
          </h1>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.62fr_0.62fr]">
          {leadPost ? <EditorialFeatureCard post={leadPost} href={postHref(primaryTask, leadPost, primaryRoute)} label="Featured cover" /> : null}
          <div className="grid gap-5">
            {sidePosts.slice(0, 2).map((post, index) => (
              <SmallEditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} variant={index} />
            ))}
          </div>
          <div className="grid gap-5">
            {sidePosts.slice(2, 4).map((post, index) => (
              <SmallEditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} variant={index + 10} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(5, 13)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">From our top picks</p>
            <h2 className={dc.type.sectionTitle}>Fast access to the links people keep opening</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-sm font-black uppercase tracking-[0.12em] text-[var(--slot4-page-text)] hover:text-[var(--slot4-accent-fill)] sm:inline-flex">
            View all
          </Link>
        </div>
        <div className={`${dc.layout.rail} mt-8`}>
          {railPosts.map((post, index) => (
            <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).filter(Boolean)
  const featured = sectionPosts.length ? sectionPosts.slice(0, 6) : posts.slice(8, 14)
  const feature = featured[0]
  const list = featured.slice(1, 4)
  const compact = featured.slice(4, 6)
  if (!feature) return null

  return (
    <section className="bg-[var(--slot4-gray)]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_22px_60px_rgba(40,9,5,0.08)]">
            <div className="inline-flex h-44 w-44 items-center justify-center rounded-full bg-[#1e1fcb] text-center text-[#ffba14] shadow-[0_24px_60px_rgba(30,31,203,0.24)]">
              <div>
                <Bookmark className="mx-auto h-10 w-10" />
                <p className="mt-3 text-2xl font-black tracking-[-0.05em]">Editors' Choice</p>
                <p className="mt-2 px-8 text-xs font-black uppercase tracking-[0.16em] text-white/72">Handpicked pages worth your next click</p>
              </div>
            </div>
            <h2 className="mt-8 text-4xl font-black leading-[1] tracking-[-0.05em] text-[var(--slot4-page-text)]">We really like these discoveries.</h2>
            <p className="mt-4 text-base leading-8 text-[var(--slot4-soft-muted-text)]">
              A premium editorial lane for standout stories, useful links, and memorable resources across {taskLabel(primaryTask).toLowerCase()}.
            </p>
            <div className="mt-8 grid gap-4">
              {compact.map((post, index) => (
                <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <HorizontalStoryCard post={feature} href={postHref(primaryTask, feature, primaryRoute)} index={0} />
            <div className="grid gap-5 md:grid-cols-3">
              {list.map((post, index) => (
                <SmallEditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} variant={index + 20} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const grouped = timeSections.filter((section) => section.posts.length)
  const fallback = posts.slice(12, 21)
  const showcase = grouped[0]?.posts?.[0] || fallback[0]
  const listPosts = grouped[0]?.posts?.slice(1, 5) || fallback.slice(1, 5)
  const libraryPosts = grouped[1]?.posts?.slice(0, 6) || fallback.slice(4, 10)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">Discover smarter</p>
            <h2 className={dc.type.sectionTitle}>Search first, then fall into the good stuff</h2>
            <p className={`mt-4 max-w-xl text-base leading-8 ${pal.mutedText}`}>
              GOFKAR gives social bookmarkers a cleaner way to move from search to story, then from story to related collections without dead ends.
            </p>
            <form action="/search" className="mt-8 rounded-[1.8rem] border border-[color:rgba(40,9,5,0.12)] bg-[#fff8f4] p-3 shadow-[0_18px_48px_rgba(40,9,5,0.05)]">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex min-w-0 flex-1 items-center rounded-full bg-white px-4 py-3">
                  <Search className="h-4 w-4 opacity-55" />
                  <input name="q" placeholder="Search bookmarks, stories, and sources" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-bold outline-none" />
                </label>
                <button className="inline-flex items-center justify-center rounded-full bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white">
                  Search
                </button>
              </div>
            </form>

            {showcase ? (
              <Link href={postHref(primaryTask, showcase, primaryRoute)} className="group mt-8 block overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] text-white shadow-[0_26px_70px_rgba(40,9,5,0.18)]">
                <div className="relative min-h-[430px] p-6 sm:p-8">
                  <img src={getEditablePostImage(showcase)} alt={showcase.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,9,5,0.08),rgba(40,9,5,0.86))]" />
                  <div className="relative z-10 flex min-h-[380px] flex-col justify-end">
                    <span className="rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">
                      Featured stream
                    </span>
                    <h3 className="mt-5 max-w-2xl text-4xl font-black leading-[0.96] tracking-[-0.06em] sm:text-5xl">{showcase.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-8 text-white/78">{getEditableExcerpt(showcase, 170)}</p>
                  </div>
                </div>
              </Link>
            ) : null}
          </div>

          <div>
            <div className="grid gap-4">
              {listPosts.map((post, index) => (
                <HorizontalStoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} />
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">Browse the library</p>
                  <h3 className="text-3xl font-black tracking-[-0.05em] text-[var(--slot4-page-text)]">Collections that stay easy to scan</h3>
                </div>
                <Link href={primaryRoute} className="hidden text-sm font-black uppercase tracking-[0.12em] text-[var(--slot4-page-text)] sm:inline-flex">
                  See more
                </Link>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {libraryPosts.map((post, index) => (
                  <SmallEditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} variant={index + 30} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#fff4ec]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 rounded-[2.4rem] bg-[var(--slot4-dark-bg)] px-6 py-8 text-white shadow-[0_30px_90px_rgba(40,9,5,0.18)] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f3a17d]">{pagesContent.home.cta.badge}</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.06em] sm:text-5xl">{pagesContent.home.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">{pagesContent.home.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href="/login" className={dc.button.accent}>
              Post a resource <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/14 px-8 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
