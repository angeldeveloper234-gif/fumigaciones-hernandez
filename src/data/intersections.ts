import type { FaqItem } from '@/components/ui/Faq'
import type { MatrixCombo, MatrixPest, MatrixZone } from './matrix'

/**
 * Contenido de las páginas de intersección zona × plaga.
 *
 * La matriz declara qué combinaciones existen; este archivo declara qué dice
 * cada una. Están separados a propósito: una combinación sin contenido no
 * genera página, así que es imposible publicar una intersección vacía por
 * olvido.
 *
 * ── La regla que decide si una página va ──────────────────────────────────
 * La misma plaga tiene que leerse distinto en las tres ciudades porque el
 * inmueble y el entorno son distintos. Termitas en Madero es humedad salina y
 * madera en casa costera; en Altamira es obra nueva y suelo removido; en
 * Tampico es edificación antigua del centro. Si no se puede escribir esa
 * diferencia, la página no va.
 *
 * Mínimo 60% del cuerpo específico de la combinación. Si un párrafo sobrevive
 * cambiando el nombre de la ciudad, está mal escrito.
 *
 * Estado: sólo la piloto (fase 3A). Las otras 23 se escriben en la fase 3B,
 * en tres tandas de 8, una por zona.
 */

export interface IntersectionContent {
  zone: MatrixZone
  pest: MatrixPest
  /** Único. No la misma fórmula en las 24. */
  h1: string
  /** ≤60 caracteres. */
  metaTitle: string
  /** ≤155 caracteres. */
  metaDescription: string
  /** 2–3 párrafos. Arranca por la situación local concreta. */
  intro: readonly string[]
  localContext: {
    heading: string
    paragraphs: readonly string[]
  }
  signs: {
    heading: string
    intro: string
    items: readonly string[]
  }
  howWeWork: {
    heading: string
    paragraphs: readonly string[]
    checks: readonly string[]
  }
  /** 5 preguntas propias de esta combinación. */
  faqs: readonly FaqItem[]
  /** 2 intersecciones relacionadas, para el enlazado lateral. */
  related: readonly MatrixCombo[]
}

const tampicoCucarachas: IntersectionContent = {
  zone: 'tampico',
  pest: 'cucarachas',
  h1: 'Fumigación de cucarachas en Tampico',
  metaTitle: 'Fumigación de cucarachas en Tampico | Centro y locales',
  metaDescription:
    'Control de cucarachas en Tampico: drenaje del centro, locales de comida y vivienda antigua. Revisión y presupuesto sin costo, guardia 24 horas.',
  intro: [
    'En Tampico la cucaracha casi nunca es un problema de cocina. Es un problema de drenaje. La red del centro y de las colonias que lo rodean tiene décadas encima, corre a pocos metros del nivel freático y desemboca en un sistema que el Pánuco mantiene húmedo todo el año. Ahí abajo vive la cucaracha americana —la grande, la que vuela— y de ahí sube.',
    'Por eso el reclamo que más escuchamos en el centro no es "tengo la casa sucia" sino "no entiendo, si limpio todos los días". Y es cierto: se puede tener el local impecable y encontrarse una en la tarja a la medianoche, porque el animal no vive adentro. Entra por la coladera, por el registro del patio o por el paso de una tubería vieja que quedó sin sellar.',
    'El otro frente es distinto y convive con el primero: la cucaracha alemana, chica y de color claro, que sí vive adentro y que llega en la mercadería. En la zona de restaurantes, en los mercados y en la hotelería de Tampico esa es la que genera las clausuras y las quejas de huésped, y se trata de otra manera.',
  ],
  localContext: {
    heading: 'Por qué en Tampico el problema empieza abajo',
    paragraphs: [
      'El centro histórico de Tampico está construido sobre una traza antigua, con edificaciones de ladrillo y madera de más de un siglo y sótanos que en muchos casos se inundan. Un edificio así tiene decenas de pasos de instalación sin sellar: caños que atraviesan muros de casi medio metro, registros ciegos, ductos que se dejaron de usar y nunca se taparon. Cada uno es una autopista entre el drenaje y el interior.',
      'A eso se suma la temporada de lluvias, de junio a octubre. Cuando el sistema se satura, las cucarachas que viven en él buscan salida hacia arriba y aparecen de golpe en plantas bajas. No es que "llegaron" con la lluvia: siempre estuvieron, y el agua las empujó.',
      'El perfil de inmueble manda el resto. Tampico concentra comercio, hotelería y restaurantes, y ahí el problema cambia de escala: una cocina de servicio trabaja con calor, humedad y materia orgánica quince horas al día, y recibe mercadería en cajas y tarimas varias veces por semana. En vivienda antigua del centro el foco es el drenaje; en un local de comida el foco es el drenaje más lo que entró en una caja de cartón.',
      'La cercanía de la Laguna del Carpintero y de la ribera del Pánuco agrega humedad permanente en las colonias que las bordean. En esas zonas el ciclo no baja en invierno y el tratamiento tiene que asumir presión continua desde el exterior, no un pico estacional.',
    ],
  },
  signs: {
    heading: 'Cómo saber qué tan avanzado está',
    intro:
      'Ver una cucaracha de noche en la cocina es normal en el centro. Estas otras señales indican que ya hay población establecida adentro y no un ejemplar de paso:',
    items: [
      'Ejemplares a plena luz del día: la cucaracha es nocturna, y si sale de día suele ser porque el refugio ya está saturado.',
      'Manchas oscuras, como puntos de tinta, en las esquinas de alacenas, detrás de bisagras y en el canto de los estantes.',
      'Olor dulzón y rancio en un mueble cerrado o en el hueco bajo la tarja. Es el olor de la colonia, y aparece cuando ya son muchas.',
      'Ootecas: cápsulas marrones del tamaño de un grano de arroz, pegadas en juntas, detrás de cuadros o bajo el filo de una mesada.',
      'Actividad concentrada alrededor del motor del refrigerador, la cafetera o la máquina de hielo. El calor del equipo es lo que buscan.',
      'En locales de comida, ejemplares chicos y claros dentro de cajas de mercadería recién recibida.',
    ],
  },
  howWeWork: {
    heading: 'Qué revisa el técnico cuando llega a un inmueble de Tampico',
    paragraphs: [
      'La visita empieza por el drenaje, no por la cocina. Se levantan coladeras, se revisan registros y se busca el punto exacto por donde suben, que casi siempre es uno o dos y no todos. Sin eso, cualquier aplicación es temporal: se mata lo que está adentro y a la semana vuelve a subir la misma cantidad.',
      'Después se identifica la especie, porque cambia el método. Para la americana del drenaje trabajamos el perímetro y los puntos de subida con polvos residuales en grietas y registros, más sellado de los pasos de instalación. Para la alemana, que vive adentro, va gel en cebo: la colonia lo transporta a su nido y llega a los ejemplares que nunca salen. Nebulizar una cocina con alemana instalada sirve de poco y además las dispersa.',
      'En vivienda antigua del centro el trabajo grueso suele ser el sellado. En un restaurante o un hotel se suma un recorrido por recepción de mercadería, cámara y cuarto de basura, y se acuerda un horario que no cruce el servicio: normalmente entre el cierre y la apertura.',
    ],
    checks: [
      'Coladeras, registros y el paso de las tuberías en muros de carga.',
      'Hueco bajo tarja, zócalo de la cocina y trasfondo de muebles fijos.',
      'Motores y respiraderos de refrigerador, cafetera y máquina de hielo.',
      'Recepción de mercadería, tarimas y cartón acumulado.',
      'Cuarto de basura, trampa de grasa y su cierre.',
      'Sótano o entrepiso, si el edificio lo tiene.',
    ],
  },
  faqs: [
    {
      question:
        '¿Por qué en el centro de Tampico salen aunque el local esté limpio?',
      answer:
        'Porque la que sube del drenaje no depende de la limpieza del local: vive en la red, no adentro. Mientras haya una coladera sin sifón o un paso de tubería sin sellar, va a seguir entrando por más impecable que esté la cocina. La limpieza sí importa para la cucaracha alemana, que sí vive adentro, pero es otra especie y otro tratamiento.',
    },
    {
      question:
        '¿Se puede tratar un restaurante de la zona sin cerrar el servicio?',
      answer:
        'Sí. En cocina comercial trabajamos con gel en cebo y polvos en grietas, que se aplican en puntos localizados y no requieren desalojar el local. Lo habitual es entrar después del cierre y dejar el lugar operativo para la apertura. Lo que sí pedimos es retirar alimento expuesto y utensilios de las áreas que se van a tratar.',
    },
    {
      question:
        '¿Por qué aparecen de golpe cuando llueve fuerte en Tampico?',
      answer:
        'Cuando la red se satura, las cucarachas que viven en el drenaje buscan salida hacia arriba. Por eso muchos locales del centro notan el pico justo en los días siguientes a una tormenta. No llegaron con la lluvia: ya estaban abajo y el agua las empujó a las plantas bajas.',
    },
    {
      question:
        'Vivo en una casa antigua del centro. ¿Sirve de algo sellar por mi cuenta?',
      answer:
        'Sirve, y bastante, si se sella lo correcto. El punto no es tapar cualquier grieta sino cerrar el paso de las tuberías que atraviesan los muros y poner tapa a los registros que quedaron ciegos. En construcción de un siglo esos huecos suelen ser varios y profundos, así que conviene que se identifiquen en la inspección antes de comprar material.',
    },
    {
      question: '¿Cuánto tiempo pasa hasta que se nota el resultado?',
      answer:
        'Con gel en cebo la caída fuerte se ve entre el tercer y el séptimo día, porque el efecto viaja por la colonia y no es instantáneo. En el caso de la que sube del drenaje, el resultado depende de que el sellado esté hecho: tratado el punto de subida y cerrado el acceso, la reaparición se corta; sin sellar, vuelve.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'ratas' },
    { zone: 'ciudad-madero', pest: 'cucarachas' },
  ],
}

/** Contenido publicado, indexado por `zona/plaga`. */
export const INTERSECTIONS: Readonly<Record<string, IntersectionContent>> = {
  'tampico/cucarachas': tampicoCucarachas,
}

export const intersectionKey = (zone: string, pest: string) => `${zone}/${pest}`

export const getIntersection = (zone: string, pest: string) =>
  INTERSECTIONS[intersectionKey(zone, pest)] ?? null

/** Combinaciones con contenido escrito. Alimenta `generateStaticParams`. */
export const publishedIntersections = (): readonly MatrixCombo[] =>
  Object.values(INTERSECTIONS).map(({ zone, pest }) => ({ zone, pest }))

export const hasIntersection = (zone: string, pest: string) =>
  intersectionKey(zone, pest) in INTERSECTIONS

/**
 * Los dos helpers de abajo alimentan el enlazado bidireccional: la página de
 * zona lista sus plagas y la de servicio lista sus zonas.
 *
 * Filtran por contenido publicado y no por la matriz a propósito. Durante la
 * fase 3B la matriz declara 24 combinaciones pero solo hay contenido para
 * algunas; enlazar contra la matriz dejaría enlaces a 404 en producción hasta
 * que se escriba la última. Cuando 3B termine, ambos conjuntos coinciden.
 */
export const publishedPestsForZone = (zone: string): readonly MatrixPest[] =>
  publishedIntersections()
    .filter((c) => c.zone === zone)
    .map((c) => c.pest)

export const publishedZonesForPest = (pest: string): readonly MatrixZone[] =>
  publishedIntersections()
    .filter((c) => c.pest === pest)
    .map((c) => c.zone)
