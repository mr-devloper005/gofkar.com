'use client'

import { Bookmark, Building2, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

function getLanes(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return [
      { icon: Building2, title: 'Business onboarding', body: 'Add listings, shape category coverage, and prepare polished directory pages.' },
      { icon: Phone, title: 'Partnership support', body: 'Talk through campaigns, publishing workflows, and category expansion.' },
      { icon: MapPin, title: 'Coverage requests', body: 'Need a new region or topic lane? We can route it clearly from here.' },
    ]
  }
  if (kind === 'visual') {
    return [
      { icon: Sparkles, title: 'Creator collaborations', body: 'Discuss visual features, curated drops, and presentation-focused partnerships.' },
      { icon: Mail, title: 'Licensing and usage', body: 'Reach out about use cases, placement, and project-specific questions.' },
      { icon: Bookmark, title: 'Collection support', body: 'Need help organizing image-led collections or featured boards?' },
    ]
  }
  return [
    { icon: Bookmark, title: 'Resource submissions', body: 'Share useful links, source pages, and references worth adding to the collection.' },
    { icon: Mail, title: 'Editorial partnerships', body: 'Coordinate sponsored features, contributor opportunities, and curation ideas.' },
    { icon: Sparkles, title: 'Publishing support', body: 'Get help with submissions, page quality, or shaping a better discovery flow.' },
  ]
}

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const lanes = getLanes(productKind)

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="rounded-[2.4rem] bg-white p-7 shadow-[0_24px_80px_rgba(40,9,5,0.09)] lg:p-10">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--slot4-soft-muted-text)]">{pagesContent.contact.description}</p>
              <div className="mt-8 grid gap-4">
                {lanes.map((lane, index) => (
                  <div key={lane.title} className={`rounded-[1.8rem] p-5 ${index === 1 ? 'bg-[var(--slot4-dark-bg)] text-white' : 'bg-[#fff8f4]'}`}>
                    <lane.icon className="h-5 w-5" />
                    <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                    <p className={`mt-2 text-sm leading-7 ${index === 1 ? 'text-white/74' : 'text-[var(--slot4-soft-muted-text)]'}`}>{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.4rem] bg-white p-7 shadow-[0_24px_80px_rgba(40,9,5,0.09)] lg:p-10">
              <h2 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.contact.formTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">Tell us what you are working on and we will route it to the right lane.</p>
              <div className="mt-6">
                <EditableContactLeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
