import Link from 'next/link'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import type { SitePost, SiteFeedPagination } from '@/lib/site-connector'
import { CATEGORY_OPTIONS } from '@/lib/categories'
import { taskPageVoices } from '@/editable/content/task-pages.content'
import { pagesContent } from '@/editable/content/pages.content'
import { ArticleListCard, postHref } from '@/editable/cards/PostCards'

export function EditableArticleArchive({ posts, pagination, category = 'all', basePath = '/article' }: { posts: SitePost[]; pagination: SiteFeedPagination; category?: string; basePath?: string }) {
  const voice = taskPageVoices.article
  const page = pagination.page || 1
  const pageHref = (nextPage: number) => `${basePath}?${new URLSearchParams({ ...(category && category !== 'all' ? { category } : {}), page: String(nextPage) }).toString()}`
  return (
    <main className="min-h-screen bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
      <section className="mx-auto max-w-[1440px] px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-[2.4rem] bg-white p-7 shadow-[0_24px_80px_rgba(40,9,5,0.09)] sm:p-10 lg:p-14">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{voice.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.07em] sm:text-6xl">{voice.headline}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--slot4-soft-muted-text)]">{voice.description}</p>
          <form action={basePath} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <select name="category" defaultValue={category || 'all'} className="min-w-0 flex-1 rounded-full border border-[color:rgba(40,9,5,0.12)] bg-[#fff8f4] px-5 py-3 text-sm font-bold outline-none">
              <option value="all">All categories</option>
              {CATEGORY_OPTIONS.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
            <button className="rounded-full bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--slot4-dark-text)]">Filter</button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {posts.length ? (
          <div className="grid gap-5">
            {posts.map((post, index) => (
              <ArticleListCard key={post.id} post={post} href={postHref('article', post, basePath)} index={index + (page - 1) * pagination.limit} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_48px_rgba(40,9,5,0.06)]">
            <h2 className="text-3xl font-black tracking-[-0.05em]">No articles found</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">Try another category or return to all articles.</p>
          </div>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pagination.hasPrevPage ? <Link href={pageHref(page - 1)} className="rounded-full border border-[color:rgba(40,9,5,0.12)] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em]">Previous</Link> : null}
          <span className="rounded-full bg-[var(--slot4-dark-bg)] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--slot4-dark-text)]">Page {page} of {pagination.totalPages || 1}</span>
          {pagination.hasNextPage ? <Link href={pageHref(page + 1)} className="rounded-full border border-[color:rgba(40,9,5,0.12)] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em]">Next</Link> : null}
        </div>
      </section>
    </main>
  )
}

export function EditableArticleDetailShell({ slug, post }: { slug: string; post: SitePost | null }) {
  const voice = taskPageVoices.article
  return (
    <main className="min-h-screen bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
      <section className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-6 rounded-[2.4rem] bg-white p-6 shadow-[0_24px_80px_rgba(40,9,5,0.09)] lg:grid-cols-[minmax(0,1fr)_320px] lg:p-10">
          <div className="min-w-0">
            <Link href="/article" className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(40,9,5,0.12)] px-4 py-2 text-sm font-black uppercase tracking-[0.12em]">
              <ChevronLeft className="h-4 w-4" /> Articles
            </Link>
            <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{voice.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-5xl lg:text-7xl">
              {post?.title || pagesContent.detailPages.article.fallbackTitle}
            </h1>
          </div>
          <aside className="min-w-0 rounded-[1.8rem] bg-[var(--slot4-dark-bg)] p-6 text-white">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f8ae86]">Reading note</p>
            <p className="mt-4 text-sm leading-7 text-white/72">{voice.secondaryNote}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--slot4-page-text)]">
              Contact <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
      <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_48px_rgba(40,9,5,0.06)] sm:p-8 lg:p-10">
          <p className="text-sm leading-8 text-[var(--slot4-soft-muted-text)]">{post?.summary || `Article detail content for ${slug} will render through the editable detail page.`}</p>
        </div>
      </section>
    </main>
  )
}
