import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { SITE, whatsappUrl } from '@/lib/site'
import { PEST_SERVICES } from '@/lib/services'

const serviceLinks = PEST_SERVICES.slice(0, 4)

export function Footer() {
  return (
    <footer className="bg-[#102414] text-white">
      <div className="container py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.25fr]">
          <div>
            <Image
              src={SITE.logo}
              alt={SITE.legalName}
              width={1408}
              height={293}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/68">
              Desinfección y control profesional de plagas para hogares y
              negocios en Yucatán y Quintana Roo.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#19D42B]/35 bg-[#19D42B]/10 px-3 py-1.5 text-xs font-bold text-[#78ED84]">
              Licencia sanitaria {SITE.license}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#FBC02D]">
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
                    prefetch={
                      href === '/cobertura' ? false : undefined
                    }
                    className="text-white/68 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#19D42B]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#FBC02D]">
              Plagas
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((pest) => (
                <li key={pest.slug}>
                  <Link
                    href={`/servicios/${pest.slug}`}
                    className="text-white/68 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#19D42B]"
                  >
                    {pest.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicios"
                  className="font-bold text-[#78ED84] transition-colors hover:text-[#A1F6A9]"
                >
                  Ver los 8 servicios →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.13em] text-[#FBC02D]">
              Contacto
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/68">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#19D42B]" />
                <a href={SITE.phoneHref} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#19D42B]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-[#19D42B]" />
                Atención 24/7
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#19D42B]" />
                <span>
                  Calle 44 572A x 29 y 29A, Los Pinos, 97138 Mérida, Yucatán
                </span>
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
