import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Contact } from '@/components/sections/Contact'
import { generatePageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata = generatePageMetadata({
  title: 'Contacto — Atención de Plagas 24/7',
  description:
    'Contacta a Fumcon del Sureste para una inspección de plagas en Yucatán y Quintana Roo. Atención por teléfono y WhatsApp las 24 horas.',
  path: '/contacto',
  keywords: [
    'contacto Fumcon',
    'fumigación 24 horas',
    'inspección de plagas',
    'fumigadora Yucatán Quintana Roo',
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
      <section className="relative overflow-hidden bg-[#102414] py-18 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-96 rounded-full bg-[#19D42B]/12 blur-3xl"
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
            <span className="text-[#78ED84]">Contacto</span>
          </nav>
          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#19D42B]/35 bg-[#19D42B]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#78ED84]">
              <Clock3 className="size-4 text-[#FBC02D]" />
              Atención disponible 24/7
            </div>
            <h1 className="mt-6 text-[clamp(2.7rem,7vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
              Cuéntanos qué plaga viste y dónde estás
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Te orientamos, coordinamos la inspección y definimos el
              tratamiento adecuado para tu hogar o negocio.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
