import Link from 'next/link'
import { ArrowRight, BookOpen, Clock3 } from 'lucide-react'
import { FUMCON_HOME } from '@/lib/translations'

const copy = FUMCON_HOME.es.blog

export function Blog() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#118F1D]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.035em] text-[#212121]">
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5A6070]">
              {copy.description}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-black/12 px-5 text-sm font-extrabold text-[#212121] transition hover:border-[#19D42B] hover:bg-[#E9FBEA] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#19D42B]"
          >
            {copy.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {copy.articles.map((article) => (
            <article
              key={article.title}
              className="group flex min-h-72 flex-col rounded-[1.5rem] border border-black/8 bg-[#F7F9F7] p-6 transition hover:-translate-y-1 hover:border-[#19D42B]/60 hover:shadow-[0_18px_42px_rgba(16,36,20,0.09)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#FBC02D] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#212121]">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6A746C]">
                  <Clock3 className="size-3.5" />5 min
                </span>
              </div>
              <BookOpen className="mt-8 size-8 text-[#118F1D]" />
              <h3 className="mt-5 text-xl font-black leading-6 tracking-[-0.02em] text-[#212121]">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                {article.summary}
              </p>
              <Link
                href="/blog"
                aria-label={`Leer más sobre ${article.title}`}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#118F1D] focus-visible:outline-2 focus-visible:outline-[#19D42B]"
              >
                Leer guía
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
