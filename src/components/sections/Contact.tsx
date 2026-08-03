import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { SITE, whatsappUrl } from '@/lib/site'

const copy = HERNANDEZ_HOME.es.contact

export function Contact() {
  return (
    <section id="contacto" className="bg-[#F5F8FC] py-20 md:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_70px_rgba(28,50,102,0.1)] md:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bg-[#FFDF00] p-7 text-[#1C3266] sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.18em]">
                {copy.eyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl text-[clamp(2.2rem,5vw,4rem)] font-black leading-[0.98] tracking-[-0.045em]">
                {copy.title}
              </h2>
              <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-[#15351A]/75">
                {copy.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl(
                    'Hola, necesito ayuda con una plaga. Quiero coordinar una inspección.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#1C3266] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#212121] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <MessageCircle className="size-5" />
                  {copy.whatsappCta}
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#1C3266]/25 px-6 text-sm font-black transition hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C3266]"
                >
                  <Phone className="size-4" />
                  {copy.phoneCta}
                </a>
              </div>
            </div>

            <div className="grid content-center gap-6 p-7 sm:p-10 lg:p-14">
              <ContactItem
                icon={Phone}
                label="Teléfono y WhatsApp"
                value={SITE.phone}
                href={SITE.phoneHref}
              />
              <ContactItem
                icon={Mail}
                label="Correo electrónico"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactItem
                icon={Clock3}
                label="Horario"
                value="Lun a Sáb 8:00-17:00 · Atención 24 horas"
              />
              <ContactItem
                icon={MapPin}
                label="Base operativa"
                value="Calle Malinalli M-5 LT-11, Cd. Cuauhtémoc, Tampico, Tamaulipas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactItemProps {
  icon: typeof Phone
  label: string
  value: string
  href?: string
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8DC] text-[#B41B1E]">
        <Icon className="size-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#78817A]">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-extrabold leading-6 text-[#212121]">
          {value}
        </span>
      </span>
      {href && (
        <ArrowRight className="ml-auto size-4 shrink-0 text-[#B41B1E]" />
      )}
    </>
  )

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  )
}
