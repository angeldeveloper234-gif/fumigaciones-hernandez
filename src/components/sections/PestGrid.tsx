import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { FUMCON_HOME } from '@/lib/translations'

const copy = FUMCON_HOME.es.pests

export function PestGrid() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#118F1D]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.035em] text-[#212121]">
            {copy.title}
          </h2>
          <p className="mx-auto mt-5 text-base leading-7 text-[#5A6070]">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((pest, index) => (
            <FadeUp key={pest.slug} delay={Math.min(index * 0.04, 0.2)}>
              <Link
                href={`/servicios/${pest.slug}`}
                prefetch={false}
                className="group block h-full overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#F7F9F7] shadow-[0_12px_32px_rgba(16,36,20,0.06)] transition hover:-translate-y-1 hover:border-[#19D42B]/60 hover:shadow-[0_18px_42px_rgba(16,36,20,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E9FBEA]">
                  <Image
                    src={pest.image}
                    alt={`${pest.name}: servicio profesional de control de plagas en el sureste`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FBC02D] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#212121]">
                    Solución garantizada
                  </span>
                </div>
                <div className="flex min-h-36 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black tracking-[-0.02em] text-[#212121]">
                      {pest.name}
                    </h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E9FBEA] text-[#118F1D] transition group-hover:bg-[#19D42B] group-hover:text-[#102414]">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                    {pest.description}
                  </p>
                  <span className="mt-auto pt-4 text-xs font-black uppercase tracking-[0.12em] text-[#118F1D]">
                    {copy.cta}
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
