import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react'
import { PestGrid } from '@/components/sections/PestGrid'
import { Methods } from '@/components/sections/Methods'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/seo'
import { whatsappUrl } from '@/lib/site'

export const metadata = generatePageMetadata({
  title: 'Servicios de Control de Plagas',
  description:
    'Tratamientos para moscos, cucarachas, termitas, ratas, hormigas, alacranes, pulgas y arañas en Tampico, Ciudad Madero y Altamira.',
  path: '/servicios',
  keywords: [
    'servicios de fumigación Tampico',
    'control de plagas Tamaulipas',
    'fumigación Ciudad Madero',
    'eliminar chinches de cama',
    'desratización',
    'Fumigaciones Hernández servicios',
  ],
})

const quoteUrl = whatsappUrl(
  'Buen día. No sé bien qué plaga es y quiero que la revisen.',
)

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
        ])}
      />

      <div>
        <section className="relative isolate overflow-hidden bg-[#1C3266] py-18 text-white md:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:42px_42px]"
          />
          <div className="container">
            <nav
              aria-label="Migas de pan"
              className="flex items-center gap-2 text-xs font-bold text-white/55"
            >
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <ArrowRight className="size-3" />
              <span className="text-[#FFE95C]">Servicios</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.58fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFE95C]">
                  Soluciones para hogares y negocios
                </p>
                <h1 className="mt-4 max-w-4xl text-[clamp(2.7rem,7vw,5.25rem)] font-black leading-[0.95] tracking-[-0.05em]">
                  Servicios de control de plagas en Tampico y la zona conurbada
                </h1>
              </div>
              <div>
                <p className="text-base leading-7 text-white/70">
                  Inspeccionamos el origen, elegimos el método adecuado y damos
                  seguimiento al resultado en la zona conurbada.
                </p>
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FFDF00] px-6 text-sm font-black text-[#1C3266] transition hover:-translate-y-0.5 hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <MessageCircle className="size-5" />
                  Solicitar inspección sin costo
                </a>
              </div>
            </div>
          </div>
        </section>

        <PestGrid />

        <section className="bg-[#F5F8FC] py-18 md:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                Diagnóstico antes de aplicar
              </p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                ¿No sabes qué plaga está entrando?
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5A6070]">
                Cuéntanos qué observaste. Un técnico puede orientar la
                inspección y definir si se necesita tratamiento interior,
                exterior o ambos.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: SearchCheck,
                  title: 'Inspección',
                  text: 'Ubicamos señales, refugios y rutas de ingreso.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Tratamiento',
                  text: 'Aplicamos solo el método que corresponde.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Seguimiento',
                  text: 'Revisamos el resultado y damos recomendaciones.',
                },
              ].map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(28,50,102,0.06)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#FFF8DC] text-[#B41B1E]">
                    <step.icon className="size-5" />
                  </span>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-[#B41B1E]">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-[#212121]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Methods />

        <section className="bg-[#F07070] py-14 text-[#212121]">
          <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Atención 24 horas
              </p>
              <h2 className="mt-2 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.035em]">
                Revise su propiedad antes de que la actividad aumente
              </h2>
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1C3266] px-7 text-sm font-black text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C3266]"
            >
              Cotizar por WhatsApp
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
