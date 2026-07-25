/**
 * Fuente única de verdad para la identidad, contacto y SEO base de Fumcon.
 * SITE_URL permite usar previews sin cambiar el dominio canónico de producción.
 */
export const SITE = {
  name: 'Fumcon',
  legalName: 'FUMCON del Sureste S.A. de C.V.',
  url: (process.env.SITE_URL || 'https://fumcon.com.mx').replace(/\/$/, ''),
  locale: 'es_MX',
  lang: 'es',
  description:
    'Fumigación y control profesional de plagas 24/7 en Yucatán y Quintana Roo. Tratamientos para hogares y negocios con productos certificados por COFEPRIS y EPA.',
  slogan: 'Desinfección y control de plagas en el sureste',
  logo: '/fumcon-logo.png',
  favicon: '/fumcon-fav.png',
  ogImage: '/fumcon-logo.png',
  phone: '+52 999 737 9510',
  phoneHref: 'tel:+529997379510',
  whatsappHref: 'https://wa.me/529997379510',
  email: 'Fumcondelsureste@gmail.com',
  franchiseEmail: 'Fumcondelsureste@gmail.com',
  address: {
    streetAddress: 'Calle 44 572A x 29 y 29A',
    addressLocality: 'Mérida',
    addressRegion: 'Yucatán',
    postalCode: '97138',
    addressCountry: 'MX',
    neighborhood: 'Los Pinos',
  },
  license: 'AP050271',
  openingHours: 'Mo-Su 00:00-23:59',
  openingHoursLabel: 'Atención 24/7',
  rating: {
    value: 5,
    count: 19,
  },
  certifications: ['COFEPRIS', 'EPA'],
  productClaims: ['No tóxicos', 'Biodegradables'],
  areaServed: [
    'Mérida',
    'Cancún',
    'Playa del Carmen',
    'Tulum',
    'Chetumal',
    'Bacalar',
    'José María Morelos',
    'Felipe Carrillo Puerto',
  ],
  formAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
  franchiseAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_FRANCHISE || '',
  socials: [] as string[],
  keywords: [
    'fumigación Mérida',
    'control de plagas Mérida',
    'fumigación Yucatán',
    'control de plagas Yucatán',
    'fumigación Quintana Roo',
    'fumigadora en Mérida',
    'control de cucarachas',
    'control de termitas',
    'control de roedores',
    'Fumcon del Sureste',
  ],
} as const

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`

export const whatsappUrl = (
  message = 'Hola, necesito una cotización para control de plagas.',
) => `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`
