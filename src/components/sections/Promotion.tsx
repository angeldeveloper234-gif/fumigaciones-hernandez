import { Check, MessageCircle, Tag } from 'lucide-react'
import { FUMCON_HOME } from '@/lib/translations'
import { whatsappUrl } from '@/lib/site'

const copy = FUMCON_HOME.es.promotion

export function Promotion() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#19D42B] px-6 py-10 text-[#102414] shadow-[0_24px_70px_rgba(16,36,20,0.16)] sm:px-10 md:rounded-[2.75rem] lg:px-16 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 size-[28rem] rounded-full border-[4.5rem] border-white/16"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/3 h-40 w-40 translate-y-1/2 rounded-full bg-[#FBC02D]/80 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FBC02D] px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-[#212121] shadow-sm">
                <Tag className="size-4" />
                {copy.badge}
              </div>
              <h2 className="mt-7 max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-[0.9] tracking-[-0.055em]">
                {copy.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-[#15351A]/75 sm:text-lg">
                {copy.description}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {copy.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm font-bold"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#102414] text-white">
                      <Check className="size-3" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-[#102414] p-6 text-center text-white shadow-2xl sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-white/55">
                {copy.priceLabel}
              </p>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="text-6xl font-black tracking-[-0.06em] text-[#FBC02D] sm:text-7xl">
                  {copy.price}
                </span>
                <span className="text-sm font-bold text-white/55">
                  {copy.currency}
                </span>
              </div>
              <div className="mx-auto my-6 h-px max-w-64 bg-white/12" />
              <a
                href={whatsappUrl(
                  'Hola, quiero aprovechar la promoción de 3 sesiones al precio de 2 desde $750 MXN.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#FBC02D] px-5 text-sm font-black text-[#212121] transition hover:-translate-y-0.5 hover:bg-[#FFD24F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle className="size-5" />
                {copy.cta}
              </a>
              <p className="mt-4 text-[0.7rem] leading-5 text-white/45">
                Aplican condiciones según inspección y tipo de plaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
