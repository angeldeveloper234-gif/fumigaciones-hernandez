import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Contact } from '@/components/sections/Contact'
import { generatePageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = generatePageMetadata({
  title: 'Contacto y Cotización',
  description:
    'Contacta a Fumigaciones Hernández para una inspección sin costo en Tampico, Madero y Altamira. Atención por teléfono y WhatsApp, atención las 24 horas.',
  path: '/contacto',
  keywords: [
    'contacto Fumigaciones Hernández',
    'fumigación urgente a domicilio',
    'inspección de plagas',
    'fumigadora Tampico',
    'fumigación urgente a domicilio',
  ],
})

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Contacto', path: '/contacto' },
        ])}
      />
      <section className="relative overflow-hidden bg-[#1C3266] py-18 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-96 rounded-full bg-[#FFDF00]/12 blur-3xl"
        />
        <div className="container relative">
          <nav
            aria-label="Migas de pan"
            className="flex items-center gap-2 text-xs font-bold text-white/55"
          >
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <ArrowRight className="size-3" />
            <span className="text-[#FFE95C]">Contacto</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFDF00]/35 bg-[#FFDF00]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#FFE95C]">
              <Clock3 className="size-4 text-[#F07070]" />
              Atención 24 horas
            </div>
            <h1 className="mt-6 text-[clamp(2.7rem,7vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
              Cuéntenos qué plaga vio y dónde está
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Lo orientamos, coordinamos la revisión y definimos el
              tratamiento adecuado para su casa o su negocio.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
