import { MetadataRoute } from 'next'
import { SITE, absoluteUrl } from '@/lib/site'
import { getAllPosts, getPostOgImage } from '@/lib/blog'
import { PEST_SERVICES, getServiceOgImage } from '@/lib/services'
import {
  COVERAGE_AREAS,
  getCoverageOgImage,
} from '@/lib/locations'
import { publishedIntersections } from '@/data/intersections'
import { intersectionPath } from '@/data/matrix'

/**
 * Sitemap generado desde los mismos datos que alimentan las rutas.
 *
 * Ninguna URL está escrita a mano: si mañana se agrega una plaga a
 * `PEST_SERVICES` o una combinación a la matriz de intersecciones, aparece
 * acá sola. Es la única forma de que el sitemap no se desincronice del sitio,
 * que es el defecto habitual de los sitemaps mantenidos a mano.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      images: [absoluteUrl(SITE.ogImage)],
    },
    {
      url: `${SITE.url}/nosotros`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/servicios`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/cobertura`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/contacto`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [absoluteUrl(getPostOgImage(post))],
  }))

  // La prioridad refleja la estrategia real, no un valor plano: las plagas y zonas
  // cabeza de campaña van por delante de la cola larga. Ver `hernandez_seo.md` §4.
  const priorityByRank = { 1: 0.9, 2: 0.8, 3: 0.7 } as const

  const serviceRoutes: MetadataRoute.Sitemap = PEST_SERVICES.map(
    (service) => ({
      url: `${SITE.url}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: priorityByRank[service.seoPriority],
      images: [absoluteUrl(getServiceOgImage(service.slug))],
    }),
  )

  const coverageRoutes: MetadataRoute.Sitemap = COVERAGE_AREAS.map((area) => ({
    url: `${SITE.url}/cobertura/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: priorityByRank[area.seoPriority],
    images: [absoluteUrl(getCoverageOgImage(area))],
  }))

  /**
   * Intersecciones zona × plaga. Salen de `publishedIntersections()`, que es
   * la misma fuente que usa `generateStaticParams`: una combinación declarada
   * pero sin contenido no genera página y tampoco entra al sitemap, así que es
   * imposible listar una URL que devuelva 404.
   *
   * Prioridad 0.85: por debajo del índice de servicios y de las zonas núcleo,
   * por encima de la cola larga. Son páginas de intención comercial alta pero
   * dependen de sus padres para tener contexto.
   */
  const intersectionRoutes: MetadataRoute.Sitemap = publishedIntersections().map(
    ({ zone, pest }) => ({
      url: `${SITE.url}${intersectionPath(zone, pest)}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [absoluteUrl(`/images/og/pests/${pest}.jpg`)],
    }),
  )

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...coverageRoutes,
    ...intersectionRoutes,
    ...blogRoutes,
  ]
}
