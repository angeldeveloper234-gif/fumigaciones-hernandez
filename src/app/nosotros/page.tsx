import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { About } from '@/components/sections/About'
import { Methods } from '@/components/sections/Methods'
import { Contact } from '@/components/sections/Contact'
import { whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Nosotros — Control Profesional de Plagas',
  description:
    'Conoce a Fumcon del Sureste, su licencia sanitaria, métodos de aplicación y cobertura profesional en Yucatán y Quintana Roo.',
  alternates: { canonical: '/nosotros' },
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#102414] py-18 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px]"
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
            <span className="text-[#78ED84]">Nosotros</span>
          </nav>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#78ED84]">
                FUMCON del Sureste S.A. de C.V.
              </p>
              <h1 className="mt-4 max-w-4xl text-[clamp(2.7rem,7vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
                Oficio, método y responsabilidad en cada servicio
              </h1>
            </div>
            <div>
              <p className="text-base leading-7 text-white/65">
                Controlamos plagas en hogares y negocios con inspección,
                aplicación precisa y seguimiento profesional.
              </p>
              <a
                href={whatsappUrl(
                  'Hola, quiero conocer el tratamiento recomendado para mi propiedad.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#19D42B] px-6 text-sm font-black text-[#102414] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
