import { SITE, absoluteUrl } from './site'
import type { BlogPost } from './blog'
import type { PestService } from './services'
import type { CoverageArea } from './locations'

/** Negocio local de control de plagas — para la home. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    areaServed: SITE.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    openingHours: SITE.openingHours,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
    },
    priceRange: '$$',
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
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.summary,
    image: absoluteUrl(post.image),
    articleSection: post.category,
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
    image: service.image,
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

/** Servicio local de Fumcon en una zona de cobertura. */
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
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: {
        '@type': 'State',
        name: area.state,
      },
    },
    provider: { '@id': `${SITE.url}/#business` },
  }
}
