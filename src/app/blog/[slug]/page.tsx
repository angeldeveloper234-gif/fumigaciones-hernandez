import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'
import {
  getAllPosts,
  getPostBySlug,
  getPostOgImage,
  getRelatedPosts,
} from '@/lib/blog'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { whatsappUrl } from '@/lib/site'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return generatePageMetadata({
      title: 'Artículo no encontrado',
      description: '',
      path: `/blog/${slug}`,
      noIndex: true,
    })
  }

  return generatePageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    image: getPostOgImage(post),
    type: 'article',
    publishedTime: post.datePublished,
    keywords: [
      post.title,
      `${post.category} en el sureste`,
      'prevención de plagas',
      'Fumcon del Sureste',
    ],
  })
}

const dateFormatter = new Intl.DateTimeFormat('es-MX', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const related = getRelatedPosts(post)
  const quoteUrl = whatsappUrl(
    `Hola, leí la guía sobre ${post.category.toLowerCase()} y necesito una inspección.`,
  )

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="bg-white">
        <header className="relative isolate overflow-hidden bg-[#102414] text-white">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[#102414]/82" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102414] via-[#102414]/78 to-[#102414]/42" />

          <div className="container py-12 md:py-18">
            <nav
              aria-label="Migas de pan"
              className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55"
            >
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <ArrowRight className="size-3" />
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <ArrowRight className="size-3" />
              <span className="text-[#78ED84]">{post.category}</span>
            </nav>

            <div className="mt-10 max-w-5xl">
              <span className="inline-flex rounded-full bg-[#FBC02D] px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-[#212121]">
                {post.category}
              </span>
              <h1 className="mt-6 max-w-5xl text-[clamp(2.35rem,6vw,4.75rem)] font-black leading-[0.96] tracking-[-0.045em]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl border-l-2 border-[#19D42B] pl-5 text-base leading-7 text-white/75 md:text-lg">
                {post.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-bold text-white/68">
                <span className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-[#78ED84]" />
                  <time dateTime={post.datePublished}>
                    {dateFormatter.format(
                      new Date(`${post.datePublished}T00:00:00Z`),
                    )}
                  </time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 className="size-4 text-[#78ED84]" />
                  {post.readingTime} de lectura
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#78ED84]" />
                  Guía de Fumcon
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container py-18 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="max-w-[48rem]">
              <div
                data-article-body
                className="space-y-12 text-base leading-8 text-[#4F5663] md:text-[1.0625rem]"
              >
                {post.sections.map((section, index) => (
                  <section key={section.heading} id={`seccion-${index + 1}`}>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#118F1D]">
                      Punto {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.55rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#212121]">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 space-y-3 rounded-[1.5rem] border border-black/8 bg-[#F4F8F4] p-6">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm leading-6 text-[#4F5663]"
                          >
                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#19D42B]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-14 rounded-[2rem] bg-[#FBC02D] p-7 text-[#212121] md:p-9">
                <p className="text-xs font-black uppercase tracking-[0.16em]">
                  Siguiente paso
                </p>
                <h2 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                  Confirma la actividad antes de aplicar
                </h2>
                <p className="mt-4 text-sm leading-6 text-[#4B421F]">
                  Un técnico puede revisar las señales y recomendar el método
                  adecuado para tu propiedad.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={post.serviceHref}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#102414] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#102414]"
                  >
                    <ShieldCheck className="size-5" />
                    {post.serviceLabel}
                  </Link>
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#102414]/25 px-6 text-sm font-black transition hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#102414]"
                  >
                    <MessageCircle className="size-5" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <aside className="self-start lg:sticky lg:top-28">
              <div className="rounded-[1.75rem] border border-black/8 bg-[#F7F9F7] p-6">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#118F1D]">
                  En esta guía
                </p>
                <ol className="mt-5 space-y-4">
                  {post.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#seccion-${index + 1}`}
                        className="group flex items-start gap-3 text-sm font-bold leading-5 text-[#545C55] hover:text-[#118F1D]"
                      >
                        <span className="font-black text-[#19D42B]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 rounded-[1.75rem] bg-[#102414] p-6 text-white">
                <MessageCircle className="size-7 text-[#78ED84]" />
                <p className="mt-4 text-lg font-black leading-6">
                  Atención profesional 24/7
                </p>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  Cuéntanos qué observaste y en qué zona estás.
                </p>
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#19D42B] px-5 text-sm font-black text-[#102414]"
                >
                  Escribir ahora
                </a>
              </div>
            </aside>
          </div>
        </div>

        <section className="border-t border-black/8 bg-[#F4F8F4] py-18 md:py-24">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#118F1D]">
                  Sigue aprendiendo
                </p>
                <h2 className="mt-3 text-[clamp(2rem,5vw,3.2rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                  Guías relacionadas
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-black text-[#118F1D] hover:text-[#102414]"
              >
                Ver todo el blog
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] border border-black/8 bg-white transition hover:-translate-y-1 hover:border-[#19D42B]/60 hover:shadow-[0_18px_42px_rgba(16,36,20,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#E9FBEA]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#118F1D]">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-lg font-black leading-6 text-[#212121] transition group-hover:text-[#118F1D]">
                      {item.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#118F1D]">
                      Leer guía
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-9 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#545C55] hover:text-[#118F1D]"
            >
              <ArrowLeft className="size-4" />
              Volver al blog
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
