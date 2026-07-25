'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock3, Globe2, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
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
  'Hola, necesito una inspección sin costo para control de plagas.',
)

export function Header() {
  const { language, setLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenu = () => setMobileOpen(false)
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  return (
    <>
      <div className="bg-[#18321D] text-white">
        <div className="container flex min-h-10 items-center justify-between gap-4 text-xs font-semibold">
          <p className="hidden items-center gap-2 text-white/75 md:flex">
            <span className="size-1.5 rounded-full bg-[#19D42B]" />
            Calle 44 572A, Los Pinos, Mérida, Yucatán
          </p>
          <p className="flex items-center gap-2 text-white/85 md:hidden">
            <Clock3 className="size-3.5 text-[#FBC02D]" />
            Abierto 24/7
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-white/75 sm:flex">
              <Clock3 className="size-3.5 text-[#FBC02D]" />
              Atención 24/7
            </span>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#FBC02D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC02D]"
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
            aria-label="Fumcon del Sureste, inicio"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B]"
          >
            <Image
              src={SITE.logo}
              alt="Fumcon Servicios Integrales"
              width={1408}
              height={293}
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
                className="rounded-sm text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-[#212121] transition-colors hover:text-[#118F1D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                language === 'es'
                  ? 'Cambiar idioma a inglés'
                  : 'Cambiar idioma a español'
              }
              className="inline-flex size-10 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-[#E9FBEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19D42B]"
            >
              <Globe2 className="size-4" />
              <span className="sr-only">{language}</span>
            </button>

            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-[#19D42B] px-5 text-sm font-extrabold text-[#102414] shadow-[0_10px_24px_rgba(25,212,43,0.22)] transition hover:-translate-y-0.5 hover:bg-[#22E437] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#118F1D] sm:inline-flex"
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
              className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 text-[#212121] transition-colors hover:border-[#19D42B] hover:bg-[#E9FBEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19D42B] lg:hidden"
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
                  width={1408}
                  height={293}
                  className="h-10 w-auto"
                />
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Cerrar menú"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-[#F4F7F4] focus-visible:outline-2 focus-visible:outline-[#19D42B]"
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
                    className="border-b border-black/7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#212121] hover:text-[#118F1D] focus-visible:outline-2 focus-visible:outline-[#19D42B]"
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
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#19D42B] px-5 font-extrabold text-[#102414] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#118F1D]"
                >
                  <MessageCircle className="size-5" />
                  Cotizar por WhatsApp
                </a>
                <a
                  href={SITE.phoneHref}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/12 px-5 font-bold text-[#212121] focus-visible:outline-2 focus-visible:outline-[#19D42B]"
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
