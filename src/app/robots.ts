import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Rutas sin valor de búsqueda: evitan gastar presupuesto de rastreo y
        // que se indexen variantes con parámetros de campaña.
        disallow: ['/api/', '/*?*utm_', '/*?*fbclid'],
      },
      // Los rastreadores de IA generativa ya son una fuente real de descubrimiento
      // para consultas del tipo "¿a quién llamo por fumigación en Tampico?".
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
