import {
  PEST_SERVICES,
  getPestService,
  getServiceOgImage,
  type PestService,
  type ServiceSlug,
} from './services'

/**
 * Zonas de cobertura de Fumigaciones Hernández (Tampico, Tamaulipas).
 *
 * La zona conurbada del sur de Tamaulipas —Tampico, Ciudad Madero y Altamira— es un
 * mercado continuo: la gente cruza de un municipio a otro a diario y busca indistintamente
 * "fumigaciones Tampico" viva donde viva. Las tres son cabeza de estrategia.
 *
 * La base física está en Ciudad Madero (Centenario 503, Col. Obrera), lo que da ventaja
 * de proximidad real frente a competidores que solo cubren Tampico centro.
 *
 * Cada zona necesita contenido genuinamente distinto. Una página por municipio que solo
 * cambia el nombre es doorway spam y Google la trata como tal.
 */
export type CoverageSlug =
  | 'tampico'
  | 'ciudad-madero'
  | 'altamira'
  | 'pueblo-viejo'
  | 'panuco'
  | 'aldama'

export interface CoverageArea {
  slug: CoverageSlug
  name: string
  state: 'Tamaulipas' | 'Veracruz'
  h1: string
  metaTitle: string
  metaDescription: string
  shortDescription: string
  localContext: readonly string[]
  propertyTypes: readonly string[]
  commonPestSlugs: readonly ServiceSlug[]
  response: string
  relatedSlugs: readonly CoverageSlug[]
  /** Colonias y zonas concretas: dan señal local real y capturan búsquedas de cola larga. */
  neighborhoods: readonly string[]
  /** 1 = cabeza de estrategia, 2 = conurbado, 3 = cola larga regional. */
  seoPriority: 1 | 2 | 3
}

export const COVERAGE_AREAS: readonly CoverageArea[] = [
  {
    slug: 'tampico',
    name: 'Tampico',
    state: 'Tamaulipas',
    h1: 'Fumigación y Control de Plagas en Tampico',
    metaTitle: 'Fumigaciones en Tampico | Atención 24 Horas',
    metaDescription:
      'Fumigación y control de plagas en Tampico: moscos, cucarachas, termitas y ratas. Centro, locales y vivienda antigua. Revisión sin costo y guardia 24 h.',
    shortDescription:
      'La ciudad con más servicios que atendemos: vivienda, comercio y centro histórico.',
    localContext: [
      'Tampico concentra la mayor parte de los servicios que realizamos. El clima cálido y húmedo del Golfo permite que moscos, cucarachas americanas y termitas mantengan actividad prácticamente todo el año, sin la pausa invernal que sí existe en el altiplano.',
      'El centro histórico tiene una particularidad que condiciona el trabajo: mucha construcción antigua con estructura y detalles de madera, en un ambiente de humedad constante. Es el escenario ideal para termitas, y el daño suele descubrirse cuando ya es estructural.',
      'La cercanía de la Laguna del Carpintero y del río Pánuco añade presión de moscos durante toda la temporada de lluvias. En esas zonas el control sostenido depende tanto de la nebulización como de eliminar los criaderos de agua estancada alrededor de la propiedad.',
    ],
    propertyTypes: [
      'Casas y departamentos',
      'Comercios y restaurantes',
      'Oficinas',
      'Edificios del centro histórico',
    ],
    commonPestSlugs: ['moscos', 'cucarachas', 'termitas'],
    response:
      'Atendemos Tampico con servicio programado y urgencias las 24 horas. Antes de aplicar confirmamos la plaga, revisamos accesos y explicamos la preparación, el tiempo de reingreso y el seguimiento.',
    relatedSlugs: ['ciudad-madero', 'altamira', 'pueblo-viejo'],
    neighborhoods: [
      'Zona Centro',
      'Colonia Águila',
      'Smith',
      'Del Pueblo',
      'Altavista',
      'Laguna del Carpintero',
      'Guadalupe',
      'Tancol',
    ],
    seoPriority: 1,
  },
  {
    slug: 'ciudad-madero',
    name: 'Ciudad Madero',
    state: 'Tamaulipas',
    h1: 'Fumigación y Control de Plagas en Ciudad Madero',
    metaTitle: 'Fumigaciones en Ciudad Madero | Servicio Local 24 h',
    metaDescription:
      'Fumigación en Ciudad Madero desde la oficina de la Col. Obrera. Moscos, cucarachas, termitas y ratas en casa y patio. Revisión sin costo, guardia 24 h.',
    shortDescription:
      'Nuestra base: estamos en la Col. Obrera, así que aquí llegamos más rápido que nadie.',
    localContext: [
      'Ciudad Madero es nuestra casa. Operamos desde Centenario 503, en la Col. Obrera, lo que nos permite atender urgencias en cualquier punto del municipio sin cargos por desplazamiento y en tiempos que ningún competidor de fuera puede igualar.',
      'La franja cercana a Playa Miramar y a la laguna suma humedad constante y vegetación, una combinación que favorece moscos y alacranes en patios, cocheras y jardines. En vivienda con patio es donde más trabajo de control perimetral hacemos.',
      'La actividad de la refinería y su zona de influencia genera además demanda de servicio en comercios, comedores y bodegas que necesitan mantener condiciones sanitarias verificables.',
    ],
    propertyTypes: [
      'Casas con patio y jardín',
      'Departamentos',
      'Comercios y comedores',
      'Bodegas',
    ],
    commonPestSlugs: ['moscos', 'cucarachas', 'alacranes'],
    response:
      'Al estar basados en Ciudad Madero somos la opción más rápida del municipio. Atendemos urgencias las 24 horas y coordinamos servicio programado con la frecuencia que requiera cada propiedad.',
    relatedSlugs: ['tampico', 'altamira', 'pueblo-viejo'],
    neighborhoods: [
      'Col. Obrera',
      'Primero de Mayo',
      'Ampliación Unidad Nacional',
      'Playa Miramar',
      'Las Américas',
      'Monte Alto',
      'Talleres',
    ],
    seoPriority: 1,
  },
  {
    slug: 'altamira',
    name: 'Altamira',
    state: 'Tamaulipas',
    h1: 'Fumigación y Control de Plagas en Altamira',
    metaTitle: 'Fumigaciones en Altamira | Industrial y Residencial',
    metaDescription:
      'Control de plagas en Altamira para industria, bodegas y vivienda. Fumigación de ratas, cucarachas y moscos en el puerto industrial y la zona urbana.',
    shortDescription:
      'El puerto industrial y su zona residencial: control para naves, bodegas y hogares.',
    localContext: [
      'Altamira tiene dos caras que requieren enfoques distintos. Por un lado el Puerto Industrial, uno de los complejos petroquímicos y logísticos más grandes del país, donde el control de plagas no es una fumigación puntual sino un programa continuo con monitoreo y registro documentado.',
      'En naves, bodegas y patios de maniobras la prioridad son los roedores: la entrada y salida constante de mercancía, los contenedores y la cercanía al agua mantienen una presión que solo se contiene combinando estaciones de cebo, monitoreo y sellado de accesos.',
      'Por otro lado, la zona urbana y los fraccionamientos de Altamira presentan el cuadro residencial típico de la región: moscos en temporada de lluvias, cucarachas y alacranes en viviendas con patio o cercanas a terreno sin construir.',
    ],
    propertyTypes: [
      'Naves y bodegas industriales',
      'Patios de maniobras',
      'Fraccionamientos',
      'Comercios',
    ],
    commonPestSlugs: ['ratas', 'cucarachas', 'moscos'],
    response:
      'Para industria diseñamos el programa a partir de un levantamiento inicial: puntos críticos, ubicación de estaciones, frecuencia de visita y formato de reporte. En vivienda atendemos con servicio programado y urgencias.',
    relatedSlugs: ['ciudad-madero', 'tampico', 'aldama'],
    neighborhoods: [
      'Puerto Industrial',
      'Altamira Centro',
      'Miramapolis',
      'Villas de Altamira',
      'Esfuerzo Nacional',
      'Arenal',
    ],
    seoPriority: 1,
  },
  {
    slug: 'pueblo-viejo',
    name: 'Pueblo Viejo',
    state: 'Veracruz',
    h1: 'Fumigación y Control de Plagas en Pueblo Viejo',
    metaTitle: 'Fumigaciones en Pueblo Viejo, Veracruz | Zona Conurbada',
    metaDescription:
      'Fumigación en Pueblo Viejo y Villa Cuauhtémoc: control de moscos, cucarachas y ratas en viviendas y comercios de la zona conurbada del Pánuco.',
    shortDescription:
      'Al otro lado del Pánuco: cobertura en Villa Cuauhtémoc y alrededores.',
    localContext: [
      'Pueblo Viejo forma parte de la misma zona conurbada aunque pertenezca a Veracruz. Cruzando el Pánuco, la dinámica de plagas es prácticamente idéntica a la de Tampico: humedad alta, vegetación y cercanía al agua todo el año.',
      'La proximidad al río y a los esteros hace que los moscos sean la consulta dominante, sobre todo entre junio y noviembre. En viviendas cercanas a zonas de agua detenida el control requiere combinar nebulización con la eliminación física de criaderos.',
      'En la parte comercial y de vivienda de Villa Cuauhtémoc atendemos el cuadro habitual de cucarachas y roedores, con la particularidad de que muchas construcciones tienen patios amplios y vegetación abundante.',
    ],
    propertyTypes: [
      'Casas con patio',
      'Comercios locales',
      'Bodegas pequeñas',
      'Zonas cercanas al río',
    ],
    commonPestSlugs: ['moscos', 'cucarachas', 'ratas'],
    response:
      'Cubrimos Pueblo Viejo y Villa Cuauhtémoc desde Ciudad Madero con servicio programado y urgencias sujetas a agenda. En zonas cercanas al agua la inspección se centra en localizar criaderos.',
    relatedSlugs: ['tampico', 'panuco', 'ciudad-madero'],
    neighborhoods: [
      'Villa Cuauhtémoc',
      'Pueblo Viejo Centro',
      'La Puntilla',
      'Anáhuac',
    ],
    seoPriority: 2,
  },
  {
    slug: 'panuco',
    name: 'Pánuco',
    state: 'Veracruz',
    h1: 'Fumigación y Control de Plagas en Pánuco',
    metaTitle: 'Fumigaciones en Pánuco, Veracruz | Casas y Ranchos',
    metaDescription:
      'Control de plagas en Pánuco: moscos, alacranes, garrapatas y roedores en viviendas, ranchos y comercios de la región del río Pánuco.',
    shortDescription:
      'Región agrícola y ganadera: control en viviendas, ranchos y comercios.',
    localContext: [
      'Pánuco es una región agrícola y ganadera, y eso cambia el perfil de plagas respecto a la zona urbana. Aquí las garrapatas son una consulta constante por la presencia de ganado y animales de trabajo, y aparecen tanto en corrales como dentro de las viviendas.',
      'Los alacranes son el otro motivo frecuente de llamada. La cercanía entre casa, monte y áreas de cultivo facilita que se refugien en grietas, bardas, leña y material apilado contra la construcción.',
      'En temporada de lluvias los moscos se disparan por la crecida del río y las áreas de agua detenida en terrenos y potreros.',
    ],
    propertyTypes: [
      'Viviendas rurales',
      'Ranchos y corrales',
      'Comercios',
      'Bodegas de grano',
    ],
    commonPestSlugs: ['garrapatas', 'alacranes', 'moscos'],
    response:
      'Atendemos Pánuco con servicio programado. En propiedades con ganado coordinamos el tratamiento del inmueble y las áreas de descanso de los animales, y damos indicaciones claras de reingreso.',
    relatedSlugs: ['pueblo-viejo', 'tampico', 'aldama'],
    neighborhoods: [
      'Pánuco Centro',
      'Ciudad Cuauhtémoc',
      'La Camelia',
      'Zona rural',
    ],
    seoPriority: 3,
  },
  {
    slug: 'aldama',
    name: 'Aldama',
    state: 'Tamaulipas',
    h1: 'Fumigación y Control de Plagas en Aldama',
    metaTitle: 'Fumigaciones en Aldama, Tamaulipas | Control de Plagas',
    metaDescription:
      'Fumigación en Aldama: control de alacranes, arañas, moscos y roedores en viviendas, ranchos y comercios del norte de la zona conurbada.',
    shortDescription:
      'Al norte de la conurbación: viviendas, ranchos y comercios de Aldama.',
    localContext: [
      'Aldama queda al norte de la zona conurbada, con un entorno donde la vivienda convive de cerca con monte, terreno sin construir y actividad ganadera. Esa frontera es la que explica la presencia de alacranes y arañas dentro de las casas.',
      'Los alacranes se refugian en grietas de muro, huecos de losa, leña y material apilado contra la construcción, y entran buscando humedad e insectos. El control efectivo combina tratamiento de refugios con sellado de accesos, no solo aplicación perimetral.',
      'En viviendas con patio y mascotas, pulgas y garrapatas completan el cuadro de consultas más habituales.',
    ],
    propertyTypes: [
      'Viviendas con patio',
      'Ranchos',
      'Comercios locales',
      'Bodegas',
    ],
    commonPestSlugs: ['alacranes', 'aranas', 'pulgas'],
    response:
      'Cubrimos Aldama con servicio programado desde la zona conurbada. En vivienda cercana a monte o terreno baldío el trabajo se concentra en grietas, perímetro y sellado de accesos.',
    relatedSlugs: ['altamira', 'tampico', 'panuco'],
    neighborhoods: [
      'Aldama Centro',
      'Barra del Tordo',
      'Zona rural',
    ],
    seoPriority: 3,
  },
] as const

export function getCoverageArea(slug: string) {
  return COVERAGE_AREAS.find((area) => area.slug === slug)
}

export function getAreaCommonPests(area: CoverageArea) {
  return area.commonPestSlugs
    .map((slug) => getPestService(slug))
    .filter((service): service is PestService => Boolean(service))
}

export function getCoverageOgImage(area: CoverageArea) {
  return getServiceOgImage(area.commonPestSlugs[0])
}

export function getRelatedAreas(area: CoverageArea) {
  return area.relatedSlugs
    .map((slug) => getCoverageArea(slug))
    .filter((related): related is CoverageArea => Boolean(related))
}

/** Zonas ordenadas por prioridad SEO — la conurbación primero. */
export function getAreasByPriority() {
  return [...COVERAGE_AREAS].sort((a, b) => a.seoPriority - b.seoPriority)
}

export const ALL_AREA_SERVICES = PEST_SERVICES
