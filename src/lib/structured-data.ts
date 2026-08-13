import { SITE, absoluteUrl } from './site'
import type { BlogPost } from './blog'
import { PEST_SERVICES, type PestService } from './services'
import type { CoverageArea } from './locations'

/**
 * Negocio local de control de plagas — para la home.
 *
 * `PestControlService` es un subtipo de LocalBusiness, así que es elegible para el
 * paquete local y el panel de conocimiento. Cuanto más completo y consistente sea con
 * el Google Business Profile, mejor. Deliberadamente NO se emite `aggregateRating`:
 * marcar reseñas que no existen es motivo de acción manual.
 */
export function localBusinessSchema() {
  const { address, geo } = SITE

  return {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.shortName,
    legalName: SITE.legalName,
    url: SITE.url,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    slogan: SITE.slogan,
    // `foundedYear` es null hasta que el cliente confirme la antigüedad, y
    // `String(null)` emitía literalmente "foundingDate":"null" en el JSON-LD,
    // que no es una fecha válida. Se omite la propiedad hasta tener el dato.
    ...(SITE.foundedYear ? { foundingDate: String(SITE.foundedYear) } : {}),
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.streetAddress}, ${address.neighborhood}`,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: SITE.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    paymentAccepted: SITE.paymentAccepted.join(', '),
    currenciesAccepted: 'MXN',
    priceRange: '$$',
    knowsAbout: [
      'Control y exterminio de plagas',
      'Fumigación de casas',
      'Fumigación de comercios',
      'Fumigación de industrias',
      'Control de moscos',
      'Control de termitas',
      'Desratización',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de control de plagas',
      itemListElement: PEST_SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Control de ${service.name.toLowerCase()}`,
          url: absoluteUrl(`/servicios/${service.slug}`),
        },
      })),
    },
    ...(SITE.socials.length ? { sameAs: SITE.socials } : {}),
  }
}

/** Organización — respalda al negocio local y consolida la marca. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.logo),
      width: 692,
      height: 577,
    },
    // `foundedYear` es null hasta que el cliente confirme la antigüedad, y
    // `String(null)` emitía literalmente "foundingDate":"null" en el JSON-LD,
    // que no es una fecha válida. Se omite la propiedad hasta tener el dato.
    ...(SITE.foundedYear ? { foundingDate: String(SITE.foundedYear) } : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'customer service',
        areaServed: 'MX',
        availableLanguage: ['Spanish'],
      },
    ],
    ...(SITE.socials.length ? { sameAs: SITE.socials } : {}),
  }
}

/** Sitio web con acción de búsqueda potencial. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.url}/#business` },
  }
}

/** Artículo de blog. */
export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`)
  const image = post.image.startsWith('http')
    ? post.image
    : absoluteUrl(post.image)
  const wordCount = [
    post.summary,
    ...post.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
  ]
    .join(' ')
    .trim()
    .split(/\s+/).length

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.summary,
    image,
    articleSection: post.category,
    wordCount,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: SITE.lang,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo) },
    },
  }
}

/** Miga de pan. items: [{name, path}] */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Servicio individual de control de plagas. */
export function serviceSchema(service: PestService) {
  const url = absoluteUrl(`/servicios/${service.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.h1,
    description: service.metaDescription,
    url,
    image: absoluteUrl(service.image),
    serviceType: `Control profesional de ${service.name.toLowerCase()}`,
    areaServed: SITE.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    provider: { '@id': `${SITE.url}/#business` },
  }
}

/** Preguntas frecuentes visibles en una página. */
export function faqSchema(
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/** Servicio local de Fumigaciones Hernández en una zona de cobertura. */
export function areaServiceSchema(area: CoverageArea) {
  const url = absoluteUrl(`/cobertura/${area.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: area.h1,
    description: area.metaDescription,
    url,
    serviceType: 'Fumigación y control profesional de plagas',
    areaServed: [
      {
        '@type': 'City',
        name: area.name,
        containedInPlace: {
          '@type': 'State',
          name: area.state,
        },
      },
      // Las colonias dan señal local granular y capturan búsquedas de cola larga
      // del tipo "fumigación en <colonia>".
      ...area.neighborhoods.map((name) => ({
        '@type': 'Place' as const,
        name,
        containedInPlace: { '@type': 'City' as const, name: area.name },
      })),
    ],
    provider: { '@id': `${SITE.url}/#business` },
  }
}
