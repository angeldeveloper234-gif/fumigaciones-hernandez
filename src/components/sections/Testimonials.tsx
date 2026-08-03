import { Quote, Star } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { HERNANDEZ_HOME } from '@/lib/translations'

const copy = HERNANDEZ_HOME.es.testimonials

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

export function Testimonials() {
  return (
    <section className="bg-[#F5F8FC] py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.035em] text-[#212121]">
              {copy.title}
            </h2>
          </div>
          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-sm">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#4285F4] font-black text-white">
              G
            </span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3 fill-[#F07070] text-[#F07070]"
                  />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-extrabold text-[#404A42]">
                {copy.badge}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {copy.items.map((review, index) => (
            <FadeUp key={review.name} delay={index * 0.08}>
              <article className="relative flex h-full flex-col rounded-[1.5rem] border border-black/7 bg-white p-6 shadow-[0_14px_40px_rgba(28,50,102,0.06)] sm:p-7">
                <Quote className="absolute right-6 top-6 size-10 text-[#FFDF00]/14" />
                <div
                  className="flex gap-1"
                  aria-label="Reseña de cinco estrellas"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className="size-4 fill-[#F07070] text-[#F07070]"
                    />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 text-[0.95rem] leading-7 text-[#4F5663]">
                  “{review.text}”
                </blockquote>
                <div className="mt-7 flex items-center gap-3 border-t border-black/7 pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#FFDF00] text-sm font-black text-[#1C3266]">
                    {initials(review.name)}
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#212121]">
                      {review.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#6A7280]">
                      {review.role}
                    </p>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
