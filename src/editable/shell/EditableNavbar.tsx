'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, Menu, PlusCircle, Search, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { getVisualPreset, visualSystem } from '@/editable/theme/visual-system'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const preset = getVisualPreset(visualSystem.recommendedPreset as any)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = {
    '--editable-nav-bg': '#fffdfa',
    '--editable-nav-text': preset.colors.foreground,
    '--editable-nav-active': '#280905',
    '--editable-nav-active-text': '#fff6f0',
    '--editable-cta-bg': '#0d0d0d',
    '--editable-cta-text': '#fffdfa',
    '--editable-search-bg': '#ffffff',
    '--editable-border': 'rgba(40,9,5,0.12)',
    '--editable-container': '1440px',
  } as CSSProperties
  const navItems = useMemo(
    () =>
      SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({
        label: task.label,
        href: task.route,
      })),
    []
  )

  const utilityLinks = globalContent.nav.utilityLinks || []

  return (
    <header
      style={navVars}
      className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 text-[var(--editable-nav-text)] backdrop-blur-xl"
    >
      <div className="border-b border-[var(--editable-border)]">
        <div className="mx-auto hidden max-w-[var(--editable-container)] items-center justify-end gap-8 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] sm:flex sm:px-6 lg:px-8">
          {utilityLinks.map((item) => (
            <Link key={item.href} href={item.href} className="opacity-70 hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <nav className="mx-auto flex min-h-[88px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-10 w-10 object-contain transition duration-300 group-hover:scale-105" />
          <span className="hidden min-w-0 sm:block">
            <span className="block text-[2rem] font-black leading-none tracking-[-0.06em] text-[#1e1fcb]">{SITE_CONFIG.name}</span>
            <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">
              {globalContent.nav?.tagline || SITE_CONFIG.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-8 lg:flex">
          {navItems.slice(0, 5).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-black transition ${
                  active
                    ? 'text-[var(--slot4-accent-fill)]'
                    : 'text-[var(--editable-nav-text)] hover:text-[var(--slot4-accent-fill)]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Link
            href="/search"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--editable-border)] bg-white shadow-sm md:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>
          {session ? (
            <>
              <Link
                href="/create"
                className="hidden items-center gap-2 rounded-full bg-[#0d0d0d] px-5 py-3 text-sm font-black text-white shadow-sm sm:inline-flex"
              >
                <PlusCircle className="h-4 w-4" />
                Post
              </Link>
              <button type="button" onClick={logout} className="hidden text-sm font-black opacity-70 hover:opacity-100 sm:inline-flex">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-sm font-black opacity-70 hover:opacity-100 sm:inline-flex">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
              <Link
                href="/signup"
                className="hidden items-center gap-2 rounded-full bg-[#1e1fcb] px-5 py-3 text-sm font-black text-white shadow-sm sm:inline-flex"
              >
                <UserPlus className="h-4 w-4" />
                Join
              </Link>
            </>
          )}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-[var(--editable-border)] bg-white p-2.5 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-[1.4rem] border border-[var(--editable-border)] bg-white px-3 py-3 shadow-sm">
            <Search className="mt-0.5 h-4 w-4 opacity-50" />
            <input name="q" type="search" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-bold outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[1.4rem] border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black"
              >
                {item.label}
              </Link>
            ))}
            {session ? (
              <>
                <Link href="/create" onClick={() => setOpen(false)} className="rounded-[1.4rem] bg-[#0d0d0d] px-4 py-3 text-sm font-black text-white">
                  Post a resource
                </Link>
                <button type="button" onClick={logout} className="rounded-[1.4rem] border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-black">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-[1.4rem] border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                  Login
                </Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="rounded-[1.4rem] bg-[#1e1fcb] px-4 py-3 text-sm font-black text-white">
                  Join
                </Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
