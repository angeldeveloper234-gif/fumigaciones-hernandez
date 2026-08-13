import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Clock3,
  Home,
  MapPinned,
  MessageCircle,
  Store,
} from 'lucide-react'
import { Locations } from '@/components/sections/Locations'
import { PestGrid } from '@/components/sections/PestGrid'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/seo'
import { COVERAGE_AREAS } from '@/lib/locations'
import { whatsappUrl } from '@/lib/site'

export const metadata = generatePageMetadata({
  title: 'Cobertura: Zona Conurbada',
  description:
    'Fumigamos en Tampico, Ciudad Madero, Altamira, Pueblo Viejo, Pánuco y Aldama. Base en la Col. Obrera, Cd. Madero. Atención 24 horas.',
  path: '/cobertura',
  keywords: [
    'fumigación Tampico',
    'control de plagas Tamaulipas',
    'fumigación Ciudad Madero',
    'cobertura control de plagas',
    'fumigación urgente a domicilio',
  ],
})

const quoteUrl = whatsappUrl(
  'Buen día. Quiero confirmar si llegan a mi colonia.',
)

const propertyTypes = [
  {
    icon: Home,
    title: 'Hogares',
    description: 'Casas, departamentos, condominios y patios.',
  },
  {
    icon: Store,
    title: 'Comercios',
    description: 'Restaurantes, locales, oficinas y gimnasios.',
  },
  {
    icon: Building2,
    title: 'Operación',
    description: 'Hoteles, hospitales, bodegas y alojamientos.',
  },
] as const

export default function CoveragePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Cobertura', path: '/cobertura' },
        ])}
      />

      <div>
        <section className="relative isolate overflow-hidden bg-[#F5F8FC] py-18 md:py-24">
          <div
            aria-hidden="true"
            className="absolute right-[-8rem] top-[-12rem] -z-10 size-[34rem] rounded-full bg-[#FFDF00]/12 blur-3xl"
          />
          <div className="container">
            <nav
              aria-label="Migas de pan"
              className="flex items-center gap-2 text-xs font-bold text-[#727A73]"
            >
              <Link href="/" className="hover:text-[#B41B1E]">
                Inicio
              </Link>
              <ArrowRight className="size-3" />
              <span className="text-[#B41B1E]">Cobertura</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                  la zona conurbada
                </p>
                <h1 className="mt-4 max-w-5xl text-[clamp(2.7rem,7vw,5.25rem)] font-black leading-[0.95] tracking-[-0.05em] text-[#212121]">
                  Control de plagas cerca de su propiedad
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#5A6070]">
                  Coordinamos inspección, tratamiento y seguimiento para
                  hogares y negocios en las seis zonas que cubrimos de la zona
                  conurbada del sur de Tamaulipas.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#1C3266] p-7 text-white shadow-[0_24px_60px_rgba(28,50,102,0.16)]">
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#FFDF00] text-[#1C3266]">
                    <MapPinned className="size-6" />
                  </span>
                  <span className="text-5xl font-black text-[#F07070]">
                    {COVERAGE_AREAS.length}
                  </span>
                </div>
                <p className="mt-7 text-xs font-black uppercase tracking-[0.15em] text-[#FFE95C]">
                  Zonas con página local
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Información, plagas frecuentes y contacto directo para cada
                  ciudad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Locations />

        <section className="bg-white py-18 md:py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                  Atención adaptable
                </p>
                <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                  Un servicio para cada tipo de espacio
                </h2>
              </div>
              <p className="text-base leading-7 text-[#5A6070]">
                La preparación, el método y el horario se definen según la
                actividad de la propiedad. Atendemos espacios habitados y
                operaciones que necesitan reducir interrupciones.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {propertyTypes.map((type) => (
                <article
                  key={type.title}
                  className="rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#FFF8DC] text-[#B41B1E]">
                    <type.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#212121]">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                    {type.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PestGrid />

        <section className="bg-[#F07070] py-14 text-[#212121]">
          <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">
                <Clock3 className="size-4" />
                Atención 24 horas
              </p>
              <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.035em]">
                Confirme la disponibilidad para su ubicación
              </h2>
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1C3266] px-7 text-sm font-black text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C3266]"
            >
              <MessageCircle className="size-5" />
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
