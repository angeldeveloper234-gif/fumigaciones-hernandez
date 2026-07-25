import {
  PEST_SERVICES,
  getPestService,
  type PestService,
  type ServiceSlug,
} from './services'

export type CoverageSlug =
  | 'merida'
  | 'cancun'
  | 'playa-del-carmen'
  | 'tulum'
  | 'chetumal'
  | 'bacalar'
  | 'jose-maria-morelos'
  | 'felipe-carrillo-puerto'

export interface CoverageArea {
  slug: CoverageSlug
  name: string
  state: 'Yucatán' | 'Quintana Roo'
  h1: string
  metaTitle: string
  metaDescription: string
  shortDescription: string
  localContext: readonly string[]
  propertyTypes: readonly string[]
  commonPestSlugs: readonly ServiceSlug[]
  response: string
  relatedSlugs: readonly CoverageSlug[]
}

export const COVERAGE_AREAS: readonly CoverageArea[] = [
  {
    slug: 'merida',
    name: 'Mérida',
    state: 'Yucatán',
    h1: 'Fumigación y Control de Plagas en Mérida',
    metaTitle: 'Fumigación en Mérida — Servicio 24h | Fumcon del Sureste',
    metaDescription:
      'Fumigación profesional 24/7 en Mérida para cucarachas, alacranes, termitas y otras plagas. Inspección y cotización sin costo.',
    shortDescription:
      'Nuestra sede operativa: respuesta para hogares y negocios de la capital yucateca.',
    localContext: [
      'Mérida es la sede de Fumcon y el punto desde el que coordinamos servicios para hogares, oficinas y comercios de la capital yucateca. El clima cálido durante gran parte del año permite que distintas plagas encuentren alimento, humedad y refugio dentro de las propiedades.',
      'Las consultas más frecuentes están relacionadas con cucarachas en cocinas y drenajes, alacranes que ingresan desde patios y termitas que afectan madera o mobiliario. La inspección permite distinguir la actividad real y seleccionar un tratamiento preciso para cada inmueble.',
    ],
    propertyTypes: ['Casas y departamentos', 'Oficinas y comercios', 'Restaurantes y locales'],
    commonPestSlugs: ['cucarachas', 'alacranes', 'termitas'],
    response:
      'Al operar desde Mérida podemos organizar atención programada y solicitudes urgentes las 24 horas. Antes de aplicar, confirmamos la plaga, revisamos accesos y explicamos preparación, reingreso y seguimiento.',
    relatedSlugs: ['cancun', 'chetumal', 'jose-maria-morelos'],
  },
  {
    slug: 'cancun',
    name: 'Cancún',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en Cancún',
    metaTitle: 'Fumigación en Cancún — Servicio 24h | Fumcon',
    metaDescription:
      'Control de plagas y fumigación 24/7 en Cancún para casas, hoteles, restaurantes y comercios. Atención en Quintana Roo.',
    shortDescription:
      'Control para zonas residenciales, hoteleras y comerciales expuestas a humedad constante.',
    localContext: [
      'Cancún combina áreas residenciales, comercios y una operación turística intensa. La humedad, las lluvias y el movimiento continuo de alimentos, equipaje y mercancías facilitan la entrada o dispersión de plagas en cocinas, bodegas, habitaciones y áreas exteriores.',
      'Mosquitos en jardines y zonas con agua, cucarachas cerca de drenajes y roedores en áreas de almacenamiento son problemas que requieren respuesta organizada. En propiedades con atención al público, actuar pronto también ayuda a mantener limpieza, continuidad operativa y confianza.',
    ],
    propertyTypes: ['Casas y condominios', 'Hoteles y alojamientos', 'Restaurantes y comercios'],
    commonPestSlugs: ['mosquitos', 'cucarachas', 'roedores'],
    response:
      'Fumcon adapta la inspección a la actividad del inmueble para intervenir sin aplicar producto de más. Coordinamos horarios, preparación y seguimiento con responsables de vivienda, mantenimiento u operación.',
    relatedSlugs: ['playa-del-carmen', 'tulum', 'bacalar'],
  },
  {
    slug: 'playa-del-carmen',
    name: 'Playa del Carmen',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en Playa del Carmen',
    metaTitle: 'Fumigación en Playa del Carmen — Servicio 24h | Fumcon',
    metaDescription:
      'Fumigación 24/7 en Playa del Carmen para casas, condominios, restaurantes y alojamientos. Control profesional de ocho plagas.',
    shortDescription:
      'Tratamientos para casas, condominios, restaurantes y propiedades de alta rotación.',
    localContext: [
      'Playa del Carmen tiene una alta concentración de viviendas, condominios, restaurantes y alojamientos con rotación frecuente de personas y suministros. Ese movimiento, junto con el clima costero, crea múltiples rutas para que una plaga llegue y encuentre refugio.',
      'Cucarachas en áreas de preparación, roedores en almacenes y mosquitos en patios son consultas habituales. En edificios compartidos, la inspección debe considerar ductos, drenajes, cuartos de servicio y zonas comunes para no limitarse al punto donde aparece la señal.',
    ],
    propertyTypes: ['Casas y departamentos', 'Condominios y alojamientos', 'Restaurantes y cocinas'],
    commonPestSlugs: ['cucarachas', 'roedores', 'mosquitos'],
    response:
      'Organizamos el servicio según los horarios de residentes, huéspedes o personal. El técnico identifica las áreas críticas, aplica el método correspondiente y deja recomendaciones que el equipo de mantenimiento puede sostener.',
    relatedSlugs: ['cancun', 'tulum', 'bacalar'],
  },
  {
    slug: 'tulum',
    name: 'Tulum',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en Tulum',
    metaTitle: 'Fumigación en Tulum — Servicio 24h | Fumcon',
    metaDescription:
      'Control de alacranes, arañas, mosquitos y otras plagas en Tulum. Servicio de fumigación 24/7 para casas y hospedajes.',
    shortDescription:
      'Protección para casas y hospedajes cercanos a vegetación y áreas de selva.',
    localContext: [
      'La cercanía de Tulum con vegetación abundante hace que casas, desarrollos y hospedajes mantengan contacto constante con fauna exterior. Patios, materiales naturales, techos y accesos abiertos pueden convertirse en refugios o rutas de entrada.',
      'Alacranes ocultos en grietas, arañas en zonas altas y mosquitos en jardines son algunas de las consultas más comunes. La solución empieza con reconocer el perímetro y las condiciones del terreno, no solamente con tratar el ejemplar encontrado dentro.',
    ],
    propertyTypes: ['Casas y villas', 'Hoteles y hospedajes', 'Restaurantes y áreas exteriores'],
    commonPestSlugs: ['alacranes', 'aranas', 'mosquitos'],
    response:
      'Fumcon combina inspección interior y exterior, barreras en puntos de ingreso y tratamientos focalizados. Coordinamos preparación y reingreso para reducir interrupciones en propiedades habitadas o con huéspedes.',
    relatedSlugs: ['playa-del-carmen', 'cancun', 'felipe-carrillo-puerto'],
  },
  {
    slug: 'chetumal',
    name: 'Chetumal',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en Chetumal',
    metaTitle: 'Fumigación en Chetumal — Servicio 24h | Fumcon',
    metaDescription:
      'Fumigación profesional en Chetumal con atención 24/7 para roedores, mosquitos, cucarachas y otras plagas.',
    shortDescription:
      'Atención para viviendas y negocios de la capital de Quintana Roo.',
    localContext: [
      'Chetumal reúne zonas residenciales, oficinas, comercios y bodegas rodeadas por vegetación propia del sur de Quintana Roo. El calor, la humedad y los periodos de lluvia sostienen actividad de insectos y favorecen refugios para roedores.',
      'Ruidos o excrementos de ratas y ratones, mosquitos en exteriores y cucarachas en áreas húmedas son señales que conviene revisar desde el inicio. Cada caso requiere reconocer accesos, alimento disponible y condiciones de almacenamiento antes de decidir el método.',
    ],
    propertyTypes: ['Viviendas', 'Oficinas y comercios', 'Bodegas y locales'],
    commonPestSlugs: ['roedores', 'mosquitos', 'cucarachas'],
    response:
      'Atendemos Chetumal con inspección, aplicación profesional y seguimiento. Para negocios podemos coordinar la visita con responsables de operación y dejar medidas preventivas claras para el personal.',
    relatedSlugs: ['bacalar', 'jose-maria-morelos', 'felipe-carrillo-puerto'],
  },
  {
    slug: 'bacalar',
    name: 'Bacalar',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en Bacalar',
    metaTitle: 'Fumigación en Bacalar — Servicio 24h | Fumcon',
    metaDescription:
      'Control de mosquitos y plagas de humedad en Bacalar. Fumigación 24/7 para casas, alojamientos, restaurantes y jardines.',
    shortDescription:
      'Control de mosquitos y plagas asociadas con humedad en la zona lacustre.',
    localContext: [
      'La zona lacustre de Bacalar mantiene condiciones de humedad y vegetación que favorecen mosquitos y otros insectos. Casas, alojamientos y restaurantes suelen integrar jardines, terrazas y espacios abiertos que necesitan revisión tanto interior como exterior.',
      'La presencia al atardecer, los recipientes con agua y la actividad cerca de drenajes o cocinas ayudan a ubicar el origen. Una fumigación efectiva debe acompañarse con control de criaderos, limpieza y correcciones que reduzcan nuevos refugios.',
    ],
    propertyTypes: ['Casas y cabañas', 'Hoteles y alojamientos', 'Restaurantes y jardines'],
    commonPestSlugs: ['mosquitos', 'cucarachas', 'hormigas'],
    response:
      'Seleccionamos nebulización, aspersión, gel u otro método después de inspeccionar. El técnico explica cómo preparar áreas exteriores, proteger objetos y mantener las recomendaciones tras el servicio.',
    relatedSlugs: ['chetumal', 'felipe-carrillo-puerto', 'tulum'],
  },
  {
    slug: 'jose-maria-morelos',
    name: 'José María Morelos',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en José María Morelos',
    metaTitle: 'Fumigación en José María Morelos — Servicio 24h | Fumcon',
    metaDescription:
      'Fumigación 24/7 en José María Morelos para alacranes, roedores y otras plagas en propiedades rurales y semiurbanas.',
    shortDescription:
      'Respuesta para propiedades rurales y semiurbanas con actividad de alacranes y roedores.',
    localContext: [
      'En José María Morelos conviven áreas urbanas con propiedades cercanas a terrenos, vegetación y espacios de almacenamiento. Esa transición facilita que alacranes y roedores encuentren refugio en materiales, patios, bodegas o pasos de instalaciones.',
      'Los avistamientos nocturnos, ruidos en techos, marcas de roído y grietas abiertas son señales útiles para una inspección. El tratamiento debe considerar el interior, el perímetro y el orden del entorno para reducir la actividad actual y nuevas entradas.',
    ],
    propertyTypes: ['Casas y patios', 'Comercios locales', 'Bodegas y propiedades rurales'],
    commonPestSlugs: ['alacranes', 'roedores', 'garrapatas'],
    response:
      'Fumcon define barreras, estaciones, sellado o tratamiento exterior según lo encontrado. También dejamos acciones sencillas para ordenar materiales, proteger alimentos y vigilar los puntos críticos.',
    relatedSlugs: ['felipe-carrillo-puerto', 'chetumal', 'merida'],
  },
  {
    slug: 'felipe-carrillo-puerto',
    name: 'Felipe Carrillo Puerto',
    state: 'Quintana Roo',
    h1: 'Fumigación y Control de Plagas en Felipe Carrillo Puerto',
    metaTitle: 'Fumigación en Felipe Carrillo Puerto — Servicio 24h | Fumcon',
    metaDescription:
      'Control de alacranes, arañas y garrapatas en Felipe Carrillo Puerto. Fumigación profesional 24/7 para hogares y negocios.',
    shortDescription:
      'Tratamientos para propiedades del interior de Quintana Roo rodeadas de vegetación.',
    localContext: [
      'Felipe Carrillo Puerto está rodeado por vegetación y mantiene una relación cercana entre áreas habitadas y entorno natural. Alacranes, arañas y garrapatas pueden desplazarse hacia patios, bodegas, zonas de mascotas y habitaciones.',
      'Una barrera perimetral ayuda, pero debe apoyarse en la revisión de grietas, materiales acumulados, pasto y accesos. El técnico identifica dónde se concentra la actividad para intervenir puntos concretos y no aplicar producto de forma innecesaria.',
    ],
    propertyTypes: ['Hogares y patios', 'Negocios y bodegas', 'Zonas de mascotas'],
    commonPestSlugs: ['alacranes', 'aranas', 'garrapatas'],
    response:
      'Coordinamos atención interior y exterior con indicaciones claras para personas y mascotas. El seguimiento se define según la plaga, la extensión del terreno y las condiciones observadas.',
    relatedSlugs: ['jose-maria-morelos', 'chetumal', 'tulum'],
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

export function getRelatedAreas(area: CoverageArea) {
  return area.relatedSlugs
    .map((slug) => getCoverageArea(slug))
    .filter((related): related is CoverageArea => Boolean(related))
}

export const ALL_AREA_SERVICES = PEST_SERVICES
