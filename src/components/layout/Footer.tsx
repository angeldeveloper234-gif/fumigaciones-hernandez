import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { SITE, formattedAddress, whatsappUrl } from '@/lib/site'
import { PEST_SERVICES } from '@/lib/services'

const serviceLinks = PEST_SERVICES.slice(0, 4)

export function Footer() {
  return (
    <footer className="bg-[#1C3266] text-white">
      <div className="container py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.25fr]">
          <div>
            <Image
              src={SITE.logo}
              alt={SITE.legalName}
              width={640}
              height={640}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/68">
              Somos una empresa mexicana originaria de Tampico, Tamaulipas,
              dedicada al control y exterminio de plagas. Personal con años de
              experiencia nos respalda para brindarle el mejor servicio y su
              completa satisfacción.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#FFDF00]/35 bg-[#FFDF00]/10 px-3 py-1.5 text-xs font-bold text-[#FFE95C]">
              {SITE.license
                ? `Licencia sanitaria ${SITE.license}`
                : SITE.openingHoursLabel}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#F07070]">
              Navegación
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ['Inicio', '/'],
                ['Nosotros', '/nosotros'],
                ['Servicios', '/servicios'],
                ['Cobertura', '/cobertura'],
                ['Blog', '/blog'],
                ['Contacto', '/contacto'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/68 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#F07070]">
              Plagas
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((pest) => (
                <li key={pest.slug}>
                  <Link
                    href={`/servicios/${pest.slug}`}
                    className="text-white/68 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00]"
                  >
                    {pest.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicios"
                  className="font-bold text-[#FFE95C] transition-colors hover:text-[#FFF0A0]"
                >
                  Ver las {PEST_SERVICES.length} plagas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#F07070]">
              Contacto
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/68">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#FFDF00]" />
                <a href={SITE.phoneHref} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#FFDF00]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-[#FFDF00]" />
                {SITE.openingHoursLabel}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#FFDF00]" />
                <span>{formattedAddress()}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos
            reservados.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white/70 hover:text-white"
          >
            Atención inmediata por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
