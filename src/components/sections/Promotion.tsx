import { Check, MessageCircle, Tag } from 'lucide-react'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { whatsappUrl } from '@/lib/site'

const copy = HERNANDEZ_HOME.es.promotion

export function Promotion() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-white">
      <SectionBackground id="promotion" />
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#FFDF00] px-6 py-10 text-[#1C3266] shadow-[0_24px_70px_rgba(28,50,102,0.16)] sm:px-10 md:rounded-[2.75rem] lg:px-16 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 size-[28rem] rounded-full border-[4.5rem] border-white/16"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/3 h-40 w-40 translate-y-1/2 rounded-full bg-[#F07070]/80 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="t-kicker inline-flex items-center gap-2 rounded-full bg-[#F07070] px-4 py-2 text-[#212121] shadow-sm">
                <Tag className="size-4" />
                {copy.badge}
              </div>
              <h2 className="t-h2 mt-5 max-w-3xl">{copy.title}</h2>
              <p className="t-body mt-5 font-semibold text-[#15351A]/80">
                {copy.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {copy.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm font-bold"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#1C3266] text-white">
                      <Check className="size-3" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-[#1C3266] p-6 text-center text-white shadow-2xl sm:p-8">
              <p className="t-kicker text-white/70">{copy.priceLabel}</p>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-black tracking-[-0.05em] text-[#F07070] sm:text-6xl">
                  {copy.price}
                </span>
                <span className="text-sm font-bold text-white/70">
                  {copy.currency}
                </span>
              </div>
              <div className="mx-auto my-6 h-px max-w-64 bg-white/12" />
              <a
                href={whatsappUrl(
                  'Buen día. Quiero pedir la revisión sin costo y que me pasen el presupuesto.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#F07070] px-5 text-sm font-black text-[#212121] transition hover:-translate-y-0.5 hover:bg-[#FFD24F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle className="size-5" />
                {copy.cta}
              </a>
              <p className="mt-4 text-xs leading-5 text-white/70">
                Aplican condiciones según inspección y tipo de plaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
