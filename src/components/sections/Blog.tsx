import Link from 'next/link'
import { ArrowRight, BookOpen, Clock3 } from 'lucide-react'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { getAllPosts } from '@/lib/blog'

const copy = HERNANDEZ_HOME.es.blog
const featuredPosts = getAllPosts().slice(0, 3)

export function Blog() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-[#1C3266] text-white">
      <SectionBackground id="sec-blog" />
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="t-kicker text-[#FFE95C]">{copy.eyebrow}</p>
            <h2 className="t-h2 mt-3">{copy.title}</h2>
            {/* Ver nota en PestGrid: sobre imagen, el gris claro no llega a AA. */}
            <p className="t-body mt-4 text-white/90">{copy.description}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-white/30 px-5 text-sm font-extrabold text-white transition hover:border-[#FFDF00] hover:bg-[#FFDF00] hover:text-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00]"
          >
            {copy.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredPosts.map((article) => (
            <article
              key={article.slug}
              className="group flex min-h-72 flex-col rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] p-6 transition hover:-translate-y-1 hover:border-[#FFDF00]/60 hover:shadow-[0_18px_42px_rgba(28,50,102,0.09)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#F07070] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#212121]">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6A7280]">
                  <Clock3 className="size-3.5" />
                  {article.readingTime}
                </span>
              </div>
              <BookOpen className="mt-7 size-8 text-[#B41B1E]" />
              <h3 className="t-h3 mt-4 text-[#212121]">{article.title}</h3>
              <p className="t-body-sm mt-3 text-[#5A6070]">
                {article.summary}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                aria-label={`Leer más sobre ${article.title}`}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#B41B1E] focus-visible:outline-2 focus-visible:outline-[#FFDF00]"
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
