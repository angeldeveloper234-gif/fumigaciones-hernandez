import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  MessageCircle,
} from 'lucide-react'
import { getAllPosts } from '@/lib/blog'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { whatsappUrl } from '@/lib/site'

export const metadata = generatePageMetadata({
  title: 'Blog de Control de Plagas y Prevención',
  description:
    'Guías prácticas sobre alacranes, cucarachas, mosquitos, termitas y fumigación preventiva para hogares y negocios del sureste.',
  path: '/blog',
  image: '/fumcon-logo.png',
  keywords: [
    'blog control de plagas',
    'prevención de plagas Yucatán',
    'consejos fumigación Quintana Roo',
    'Fumcon blog',
  ],
})

const dateFormatter = new Intl.DateTimeFormat('es-MX', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const quoteUrl = whatsappUrl(
  'Hola, leí una guía de Fumcon y quiero solicitar una inspección.',
)

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      <div>
        <section className="relative isolate overflow-hidden bg-[#102414] py-18 text-white md:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:42px_42px]"
          />
          <div className="container">
            <nav
              aria-label="Migas de pan"
              className="flex items-center gap-2 text-xs font-bold text-white/55"
            >
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <ArrowRight className="size-3" />
              <span className="text-[#78ED84]">Blog</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#78ED84]">
                  Guías para el sureste
                </p>
                <h1 className="mt-4 max-w-5xl text-[clamp(2.7rem,7vw,5.25rem)] font-black leading-[0.95] tracking-[-0.05em]">
                  Prevención de plagas, explicada sin rodeos
                </h1>
              </div>
              <p className="text-base leading-7 text-white/68">
                Aprende a reconocer señales, reducir riesgos y decidir cuándo
                una inspección profesional puede evitar que el problema crezca.
              </p>
            </div>
          </div>
        </section>

        {featured && (
          <section className="bg-[#F4F8F4] py-18 md:py-24">
            <div className="container">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_65px_rgba(16,36,20,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_75px_rgba(16,36,20,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B] lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="relative min-h-[22rem] overflow-hidden bg-[#E9FBEA] lg:min-h-[31rem]">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 52vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102414]/55 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#FBC02D] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.13em] text-[#212121]">
                    Artículo destacado
                  </span>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#6B746C]">
                    <span className="rounded-full bg-[#E9FBEA] px-3 py-1.5 font-black uppercase tracking-[0.11em] text-[#118F1D]">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-4" />
                      {dateFormatter.format(
                        new Date(`${featured.datePublished}T00:00:00Z`),
                      )}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="size-4" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.02] tracking-[-0.04em] text-[#212121]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-[#5A6070]">
                    {featured.summary}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#118F1D]">
                    Leer guía completa
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="bg-white py-18 md:py-24">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#118F1D]">
                  Biblioteca Fumcon
                </p>
                <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                  Todas las guías
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#5A6070]">
                Contenido útil para propietarios, responsables de mantenimiento
                y equipos de operación.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#F7F9F7] transition hover:-translate-y-1 hover:border-[#19D42B]/60 hover:shadow-[0_18px_42px_rgba(16,36,20,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E9FBEA]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#FBC02D] px-3 py-1.5 text-[0.64rem] font-black uppercase tracking-[0.12em] text-[#212121]">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-bold text-[#747C75]">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" />
                        {dateFormatter.format(
                          new Date(`${post.datePublished}T00:00:00Z`),
                        )}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="size-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-black leading-6 tracking-[-0.02em] text-[#212121] transition group-hover:text-[#118F1D]">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                      {post.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-[0.12em] text-[#118F1D]">
                      Leer artículo
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FBC02D] py-14 text-[#212121]">
          <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">
                <BookOpen className="size-4" />
                ¿Reconociste alguna señal?
              </p>
              <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.035em]">
                Confirma el problema con una inspección
              </h2>
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#102414] px-7 text-sm font-black text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#102414]"
            >
              <MessageCircle className="size-5" />
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
