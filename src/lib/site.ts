/**
 * Fuente única de verdad para la identidad, contacto y SEO base de Fumigaciones Hernández.
 * SITE_URL permite usar previews sin cambiar el dominio canónico de producción.
 *
 * ⚠️ IMPORTANTE — este proyecto es para la **Fumigaciones Hernández de Tampico /
 * Ciudad Madero, Tamaulipas**, no para la homónima de Ecatepec/CDMX que hoy ocupa el
 * dominio `fumigacioneshernandez.com`. Son dos negocios distintos con el mismo nombre.
 * Ver `hernandez_historial.md` §3.
 *
 * Datos verificados contra los snapshots de Wayback 2017-2019 (`_archivo-original/wayback/`)
 * y el logo aportado por el cliente.
 */
export const SITE = {
  name: 'Fumigaciones Hernández',
  shortName: 'Fumigaciones Hernández',
  // TODO(cliente): confirmar razón social. Ninguna fuente pública la declara.
  legalName: 'Fumigaciones Hernández',
  url: (process.env.SITE_URL || 'https://fumigacioneshernandez.mx').replace(/\/$/, ''),
  locale: 'es_MX',
  lang: 'es',
  // 155 caracteres: es lo que Google muestra antes de truncar.
  description:
    'Fumigación y control de plagas en Tampico, Ciudad Madero y Altamira. Expertos en exterminio de moscos, cucarachas, termitas, ratas y más. Atención 24 h.',
  /** Versión larga para OG y para la página Nosotros, donde no hay límite de truncado. */
  longDescription:
    'Fumigaciones Hernández atiende Tampico, Ciudad Madero y Altamira desde su oficina en la Col. Obrera. Control de moscos, cucarachas, termitas, ratas, hormigas, pulgas, alacranes y arañas en casas, comercios e industrias. Revisión y presupuesto sin costo, guardia las 24 horas.',
  slogan: 'Expertos en fumigación',
  tagline: 'Eliminamos todas las plagas',
  logo: '/hernandez-logo.png',
  favicon: '/hernandez-fav.png',
  // El anterior era byte a byte el mismo archivo que el OG de fumcon: cada vez
  // que se compartia este sitio, la tarjeta que aparecia era la de FUMCON.
  ogImage: '/images/og/hernandez-og.jpg',

  // --- Contacto -----------------------------------------------------------
  // Principal: el número del logo vigente que aportó el cliente.
  phone: '833 383 7323',
  phoneHref: 'tel:+528333837323',
  // TODO(cliente): ¿sigue activo? Es el que usó el sitio entre 2017 y 2019.
  phoneAlt: '833 189 7935',
  phoneAltHref: 'tel:+528331897935',
  whatsapp: '833 383 7323',
  whatsappHref: 'https://wa.me/528333837323',
  email: 'fumigacioneshdz@hotmail.com',
  franchiseEmail: 'fumigacioneshdz@hotmail.com',

  // --- Domicilio ----------------------------------------------------------
  // Verificado en el sitio de 2018 (`_archivo-original/wayback/internas/2018-contacto.html`).
  address: {
    streetAddress: 'Centenario 503',
    addressLocality: 'Ciudad Madero',
    addressRegion: 'Tamaulipas',
    postalCode: '89490',
    addressCountry: 'MX',
    neighborhood: 'Col. Obrera',
  },
  /**
   * Coordenadas exactas del domicilio, recuperadas del widget de mapa de su propio
   * sitio de 2018 (`_archivo-original/wayback/internas/2018-contacto.html`).
   */
  geo: { latitude: 22.2413786, longitude: -97.8449788 },

  // --- Operación ----------------------------------------------------------
  // El sitio de 2019 declaraba "Te atendemos 24 Horas".
  // El FIXME que había acá era una falsa alarma mía: este string no lo usaba
  // nadie. El `openingHoursSpecification` del JSON-LD ya declaraba lunes a
  // sábado de 8 a 17, que es lo correcto según CLAUDE.md §3. Se elimina el
  // campo en vez de arrastrar un dato muerto que contradice al resto.
  /** Horario de atención en oficina (CLAUDE.md §3). */
  officeHoursLabel: 'Lunes a sábado, 8:00 a 17:00',
  /** Guardia fuera del horario de oficina. */
  openingHoursLabel: 'Atención 24 horas',
  urgencyNote: 'Atendemos urgencias el mismo día',
  emergencyLabel: 'Atención 24 h',
  // TODO(cliente): el sitio nunca declaró antigüedad concreta, solo "personal con años
  // de experiencia". El dominio existe desde 2017; el negocio puede ser mucho anterior.
  yearsOfExperience: null as number | null,
  foundedYear: null as number | null,

  // --- Confianza ----------------------------------------------------------
  // TODO(cliente): pedir licencia sanitaria y certificaciones. El sitio histórico no
  // declaraba ninguna, pero en este sector son un diferenciador fuerte frente a la
  // competencia local (Del Golfo, FumiPlus y ProHigiene sí las publican).
  license: '',
  certifications: [] as string[],
  // `guarantees` y `productClaims` se eliminaron: no los usaba nadie y
  // guardaban superlativos que el negocio no puede sostener ("los mejores
  // precios de la zona", "el mejor equipo y productos del mercado",
  // "satisfacción completa garantizada"). Ver CLAUDE.md §5.
  // {{PENDIENTE: garantía de servicio real — qué cubre y por cuánto tiempo}}
  // Recuperado del sitio de 2019.
  paymentAccepted: [
    'Efectivo',
    'Cheque',
    'Visa',
    'MasterCard',
    'American Express',
    'Tarjetas de débito',
    'Transferencia electrónica',
    'Depósito bancario',
  ],

  // --- Cobertura ----------------------------------------------------------
  areaServed: [
    'Tampico',
    'Ciudad Madero',
    'Altamira',
    'Pueblo Viejo',
    'Pánuco',
    'Aldama',
  ],

  formAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
  franchiseAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_FRANCHISE || '',
  // TODO(cliente): pedir Facebook. El sitio de 2017 enlazaba uno que no se archivó.
  socials: [] as string[],
  keywords: [
    'fumigaciones Tampico',
    'control de plagas Tampico',
    'fumigaciones Ciudad Madero',
    'fumigaciones Altamira',
    'fumigadora zona conurbada Tamaulipas',
    'exterminio de plagas Tampico',
    'fumigación de cucarachas Tampico',
    'fumigación de termitas Tampico',
    'control de moscos Tampico',
    'desratización Tampico',
    'fumigación de casas Tampico',
    'Fumigaciones Hernández',
  ],
} as const

/**
 * Paleta de marca, muestreada píxel a píxel del logo oficial (`public/logo.png`).
 *
 * Coincide con el CSS de su sitio 2017-2019 (`_archivo-original/wayback/`), donde el rojo
 * era `#B41B1E` y el amarillo `#FFDF00`: la marca ha sido coherente durante casi diez años.
 * Se usan los valores del logo por ser los vigentes.
 */
export const BRAND = {
  /** Rojo del banner del teléfono. 248 muestras en el logo. */
  red: '#B41B1E',
  /** Amarillo del wordmark y del número de teléfono. 144 muestras. */
  yellow: '#FFDF00',
  /** Azul del disco y del uniforme del personaje. 233 muestras. */
  blue: '#3154A5',
  /** Azul profundo derivado, para fondos oscuros (hero, footer). */
  blueDark: '#1C3266',
  /** Rojo claro legible sobre fondo oscuro. */
  redLight: '#F07070',
  /** Amarillo suave para texto de acento sobre oscuro. */
  yellowLight: '#FFE95C',
  white: '#FFFFFF',
  black: '#000000',
} as const

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`

export const whatsappUrl = (
  message = 'Hola, necesito una cotización para fumigación.',
) => `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`

/** Domicilio en una línea, para footer y fichas de contacto. */
export const formattedAddress = () =>
  `${SITE.address.streetAddress}, ${SITE.address.neighborhood}, ${SITE.address.postalCode} ${SITE.address.addressLocality}, ${SITE.address.addressRegion}`
