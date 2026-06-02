import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-14 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2.4rem] bg-white p-8 shadow-[0_24px_80px_rgba(40,9,5,0.09)] lg:p-12">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl">About {SITE_CONFIG.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-soft-muted-text)]">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 text-[var(--slot4-soft-muted-text)]">
              {pagesContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="grid gap-4 self-start">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className={`rounded-[1.8rem] p-6 shadow-[0_18px_48px_rgba(40,9,5,0.06)] ${index === 1 ? 'bg-[var(--slot4-dark-bg)] text-white' : 'bg-white'}`}>
                <h2 className="text-xl font-black tracking-[-0.04em]">{value.title}</h2>
                <p className={`mt-3 text-sm leading-7 ${index === 1 ? 'text-white/74' : 'text-[var(--slot4-soft-muted-text)]'}`}>{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
