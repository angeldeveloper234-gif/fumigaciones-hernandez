import Link from 'next/link'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { About } from '@/components/sections/About'
import { Methods } from '@/components/sections/Methods'
import { Contact } from '@/components/sections/Contact'
import { generatePageMetadata } from '@/lib/seo'
import { whatsappUrl } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = generatePageMetadata({
  // {{PENDIENTE: confirmar antigüedad con el cliente}} — el título decía
  // "+30 Años en Plagas", un dato que ninguna fuente respalda (CLAUDE.md §5.3).
  title: 'Nosotros — Fumigadora de la zona conurbada',
  description:
    'Conoce a Fumigaciones Hernández: expertos en fumigación originarios de Tampico, con servicio en toda la zona conurbada de Tamaulipas.',
  path: '/nosotros',
  keywords: [
    'Fumigaciones Hernández',
    'empresa de fumigación',
    'control profesional de plagas',
    'licencia sanitaria fumigación',
  ],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Nosotros', path: '/nosotros' },
        ])}
      />
      <section className="relative isolate overflow-hidden bg-[#1C3266] py-14 text-white md:py-20">
        <SectionBackground id="hero-nosotros" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div className="container relative">
          <nav
            aria-label="Migas de pan"
            className="flex items-center gap-2 text-xs font-bold text-white/75"
          >
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <ArrowRight className="size-3" />
            <span className="text-[#FFE95C]">Nosotros</span>
          </nav>
          {/* Reparto medido: deja la columna de texto por encima de los 800px
              que el H1 necesita para entrar en dos renglones a 1280px. */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFE95C]">
                Fumigaciones Hernández
              </p>
              <h1 className="t-h1 mt-4 max-w-5xl">
                Oficio, método y responsabilidad en cada servicio
              </h1>
            </div>
            <div>
              <p className="text-base leading-7 text-white/80">
                Controlamos plagas en hogares y negocios con inspección,
                aplicación precisa y seguimiento profesional.
              </p>
              <a
                href={whatsappUrl(
                  'Buen día. Quiero contarles qué estoy viendo en mi propiedad.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FFDF00] px-6 text-sm font-black text-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle className="size-5" />
                Consultar a un especialista
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Methods />
      <Contact />
    </>
  )
}
