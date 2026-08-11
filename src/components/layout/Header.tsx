'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock3, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { SITE, whatsappUrl } from '@/lib/site'

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Cobertura', href: '/cobertura' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
] as const

const quoteUrl = whatsappUrl(
  'Buen día. Quiero pedir la revisión sin costo.',
)

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <div className="bg-[#1C3266] text-white">
        <div className="container flex min-h-10 items-center justify-between gap-4 text-xs font-semibold">
          <p className="hidden items-center gap-2 text-white/75 md:flex">
            <span className="size-1.5 rounded-full bg-[#FFDF00]" />
            {SITE.address.neighborhood}, {SITE.address.addressLocality},{' '}
            {SITE.address.addressRegion}
          </p>
          <p className="flex items-center gap-2 text-white/85 md:hidden">
            <Clock3 className="size-3.5 text-[#F07070]" />
            {SITE.openingHoursLabel}
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-white/75 sm:flex">
              <Clock3 className="size-3.5 text-[#F07070]" />
              Atención 24 horas
            </span>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#F07070] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F07070]"
            >
              <Phone className="size-3.5" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/8 bg-white/96 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl">
        <div className="container flex min-h-[5.25rem] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Fumigaciones Hernández, inicio"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
          >
            <Image
              src={SITE.logo}
              alt="Fumigaciones Hernández"
              width={640}
              height={640}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navegación principal"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-[#212121] transition-colors hover:text-[#B41B1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-[#FFDF00] px-5 text-sm font-extrabold text-[#1C3266] shadow-[0_10px_24px_rgba(255,223,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B41B1E] sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              Cotizar ahora
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 text-[#212121] transition-colors hover:border-[#FFDF00] hover:bg-[#FFF8DC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDF00] lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/45 lg:hidden"
            />
            <motion.aside
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,23rem)] flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-black/8 pb-5">
                <Image
                  src={SITE.logo}
                  alt=""
                  width={640}
                  height={640}
                  className="h-10 w-auto"
                />
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Cerrar menú"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-[#F5F8FC] focus-visible:outline-2 focus-visible:outline-[#FFDF00]"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col py-6" aria-label="Menú móvil">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="border-b border-black/7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#212121] hover:text-[#B41B1E] focus-visible:outline-2 focus-visible:outline-[#FFDF00]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="space-y-3 border-t border-black/8 pt-5">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFDF00] px-5 font-extrabold text-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B41B1E]"
                >
                  <MessageCircle className="size-5" />
                  Cotizar por WhatsApp
                </a>
                <a
                  href={SITE.phoneHref}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/12 px-5 font-bold text-[#212121] focus-visible:outline-2 focus-visible:outline-[#FFDF00]"
                >
                  <Phone className="size-4" />
                  {SITE.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
