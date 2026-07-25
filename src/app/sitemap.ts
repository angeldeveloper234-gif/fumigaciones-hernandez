import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'
import { PEST_SERVICES } from '@/lib/services'
import { COVERAGE_AREAS } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
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
  }))

  const serviceRoutes: MetadataRoute.Sitemap = PEST_SERVICES.map(
    (service) => ({
      url: `${SITE.url}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    }),
  )

  const coverageRoutes: MetadataRoute.Sitemap = COVERAGE_AREAS.map((area) => ({
    url: `${SITE.url}/cobertura/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...coverageRoutes,
    ...blogRoutes,
  ]
}
