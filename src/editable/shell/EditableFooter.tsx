'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = {
    '--editable-footer-bg': '#280905',
    '--editable-footer-text': '#fff6f0',
  } as CSSProperties
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="relative overflow-hidden bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#740A03]/45 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#E6501B]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.85fr_0.85fr_0.85fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-8 w-8 object-contain" />
            <span className="text-2xl font-black tracking-[-0.06em]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{globalContent.footer.description}</p>
          <div className="mt-6 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#f9b28d]">
            {globalContent.footer.tagline}
          </div>
        </div>

        {globalContent.footer.columns.map((column, columnIndex) => (
          <div key={column.title || `footer-column-${columnIndex}`}>
            <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-white/45">{column.title}</h3>
            <div className="mt-4 grid gap-3">
              {column.links.map((link, linkIndex) => (
                <Link
                  key={link.href || `${column.title || 'footer'}-${linkIndex}`}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/78 hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-white/45">Account</h3>
          <div className="mt-4 grid gap-3">
            {session ? (
              <>
                <Link href="/create" className="text-sm font-bold text-white/78 hover:text-white">
                  Post a resource
                </Link>
                <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/78 hover:text-white">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-bold text-white/78 hover:text-white">
                  Login
                </Link>
                <Link href="/signup" className="text-sm font-bold text-white/78 hover:text-white">
                  Join
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs font-bold tracking-[0.12em] text-white/48">
        © {year} {SITE_CONFIG.name}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
