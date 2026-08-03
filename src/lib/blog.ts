import {
  getPestService,
  getServiceOgImage,
  type ServiceSlug,
} from './services'

/**
 * Blog de captación.
 *
 * Cada artículo ataca una consulta real de búsqueda con intención comercial cercana y
 * enlaza a su landing de servicio. La geografía es deliberada: Tampico, Ciudad Madero,
 * Altamira y la zona conurbada del sur de Tamaulipas. Un artículo que menciona otra
 * región manda una señal geográfica contradictoria y debilita todo el dominio.
 */
export interface BlogSection {
  heading: string
  paragraphs: readonly string[]
  bullets?: readonly string[]
}

export interface BlogPost {
  slug: string
  title: string
  summary: string
  image: string
  imageAlt: string
  category: string
  datePublished: string
  dateModified: string
  readingTime: string
  serviceHref: string
  serviceLabel: string
  sections: readonly BlogSection[]
  relatedSlugs: readonly string[]
}

function pestImage(slug: ServiceSlug) {
  const service = getPestService(slug)
  if (!service) throw new Error(`No existe el servicio ${slug}`)
  return service.image
}

export function getPostOgImage(post: BlogPost) {
  const serviceSlug = post.serviceHref.split('/').at(-1)

  return serviceSlug && getPestService(serviceSlug)
    ? getServiceOgImage(serviceSlug as ServiceSlug)
    : '/images/og/hernandez-og.webp'
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'moscos-en-tampico-criaderos',
    title: 'Moscos en Tampico: cómo acabar con los criaderos de tu patio',
    summary:
      'Dónde se esconde el agua que no ves, por qué nebulizar sin eliminar criaderos solo dura unos días y qué revisar después de cada lluvia.',
    image: pestImage('moscos'),
    imageAlt: 'Inspección de un patio en busca de criaderos de moscos',
    category: 'Moscos',
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    readingTime: '7 min',
    serviceHref: '/servicios/moscos',
    serviceLabel: 'Fumigación profesional de moscos',
    sections: [
      {
        heading: 'Por qué en la zona conurbada nunca se van del todo',
        paragraphs: [
          'Tampico, Ciudad Madero y Altamira reúnen todo lo que un mosco necesita: calor durante casi todo el año, humedad alta, lagunas, esteros y el río Pánuco. A diferencia del centro del país, aquí no hay un invierno que corte el ciclo, así que la población nunca se reinicia desde cero.',
          'La temporada de lluvias multiplica el problema, pero el mosco no necesita una inundación. Le basta con la cantidad de agua que cabe en un plato de maceta. Y esa agua está repartida por todos los patios de la ciudad.',
          'Hay además un motivo sanitario para tomárselo en serio: el *Aedes aegypti*, vector de dengue, zika y chikungunya, está presente en toda la región y se reproduce precisamente en esos recipientes pequeños alrededor de la casa.',
        ],
      },
      {
        heading: 'El agua que no ves',
        paragraphs: [
          'Cuando pedimos a un cliente que revise su patio, casi siempre dice que no hay agua estancada. Y casi siempre encontramos varios criaderos activos. Estos son los que más se repiten:',
        ],
        bullets: [
          'Platos bajo las macetas: el criadero número uno, y el que más se pasa por alto.',
          'Llantas viejas, cubetas y tambos destapados en el patio o la azotea.',
          'Canaletas con hojas que retienen agua después de la lluvia.',
          'Registros y coladeras de patio con agua detenida.',
          'Bebederos de mascotas y floreros que no se cambian cada tercer día.',
          'Tinacos y cisternas sin tapa o con la tapa rota.',
          'Lonas, juguetes y cualquier objeto cóncavo olvidado a la intemperie.',
        ],
      },
      {
        heading: 'Por qué nebulizar solo no alcanza',
        paragraphs: [
          'La nebulización abate a los moscos adultos que están volando en ese momento. El efecto es inmediato y muy visible, y por eso se contrata. Pero no toca a las larvas que ya están desarrollándose en el agua.',
          'En un clima como el nuestro, esas larvas se convierten en adultos en pocos días. Si el criadero sigue activo, en una semana el patio vuelve a estar como antes y la sensación es que "el servicio no sirvió".',
          'El sol y la lluvia de la región acortan además el efecto residual del producto. Por eso el control sostenido es siempre la suma de dos cosas: nebulizar para bajar la población adulta y eliminar físicamente los criaderos para que no se reponga.',
        ],
      },
      {
        heading: 'La rutina de después de cada lluvia',
        paragraphs: [
          'La costumbre más útil que puede adoptar una casa en esta zona es una revisión de cinco minutos al día siguiente de cada lluvia fuerte. Es cuando aparecen los criaderos nuevos.',
        ],
        bullets: [
          'Voltear o vaciar todo lo que haya juntado agua, sin excepción.',
          'Revisar la azotea: es donde más se acumulan objetos olvidados.',
          'Destapar canaletas y comprobar que drenen.',
          'Cambiar el agua de bebederos y floreros.',
          'Revisar también el patio del lado que colinda: si el vecino tiene criaderos, los moscos cruzan.',
        ],
      },
      {
        heading: 'Cuándo llamar a un profesional',
        paragraphs: [
          'Si la actividad es constante pese a haber eliminado el agua visible, si hay vegetación densa donde los moscos pasan el día, o si el patio es amplio y colinda con terreno baldío o zonas de agua, el tratamiento profesional marca la diferencia.',
          'Aplicamos termonebulización o nebulización en frío según el espacio, tratamos la vegetación y las zonas de reposo, y durante la inspección señalamos cada criadero que encontramos para que puedas eliminarlo. Atendemos Tampico, Ciudad Madero, Altamira y la zona conurbada las 24 horas.',
        ],
      },
    ],
    relatedSlugs: [
      'cucarachas-del-drenaje',
      'termitas-clima-golfo',
      'cada-cuanto-fumigar-casa',
    ],
  },
  {
    slug: 'cucarachas-del-drenaje',
    title: 'Cucarachas del drenaje: por qué pasa y cómo se corta',
    summary:
      'No es falta de limpieza. Suben por las tuberías, sobre todo después de las lluvias, y hay una forma concreta de cerrarles el paso.',
    image: pestImage('cucarachas'),
    imageAlt: 'Cucaracha americana saliendo de una coladera durante la noche',
    category: 'Cucarachas',
    datePublished: '2026-07-19',
    dateModified: '2026-07-19',
    readingTime: '7 min',
    serviceHref: '/servicios/cucarachas',
    serviceLabel: 'Fumigación profesional de cucarachas',
    sections: [
      {
        heading: 'Lo primero: no es culpa de tu limpieza',
        paragraphs: [
          'Es la frase que más repetimos en las visitas. La cucaracha americana —la grande, la que vuela— no vive dentro de la casa: vive en el drenaje, y sube. Puedes tener la cocina impecable y aun así encontrarte una en la tarja a medianoche.',
          'El sistema de drenaje le ofrece exactamente lo que necesita: humedad, calor, materia orgánica y oscuridad. Y en la zona conurbada, con el clima que tenemos y buena parte de la red con años encima, esas condiciones son permanentes.',
          'Por eso el problema no se resuelve limpiando más. Se resuelve cerrando la vía de entrada y tratando el punto por donde suben.',
        ],
      },
      {
        heading: 'Por qué empeora después de las lluvias',
        paragraphs: [
          'Cuando llueve fuerte, el sistema de drenaje se satura y las cucarachas que viven en él buscan salida hacia arriba. Es la razón de que muchas familias noten un pico de actividad justo en los días siguientes a una tormenta.',
          'A eso se suma que la humedad ambiental sube y las condiciones dentro de la casa se vuelven más parecidas a las del drenaje, así que una vez dentro les resulta más fácil quedarse.',
        ],
      },
      {
        heading: 'Las tres cosas que sí funcionan',
        paragraphs: [
          'Contra la cucaracha de drenaje hay medidas concretas y baratas que cambian mucho el resultado:',
        ],
        bullets: [
          'Tapar coladeras y desagües por la noche, que es cuando suben. Un tapón de rosca o una rejilla con contrapeso bastan.',
          'Mantener con agua los sifones que no se usan: un sifón seco es una puerta abierta.',
          'Sellar el hueco alrededor de las tuberías bajo la tarja y el lavabo, que suele estar sin tapar.',
          'Revisar el registro del patio y mantenerlo cerrado.',
        ],
      },
      {
        heading: 'Por qué el aerosol empeora las cosas',
        paragraphs: [
          'El insecticida en aerosol tiene efecto repelente. Cuando lo aplicas sobre un punto de actividad, las cucarachas que no reciben dosis letal huyen hacia otros refugios de la casa. Un problema localizado en la cocina se reparte por toda la vivienda.',
          'Además no toca las ootecas, que son las cápsulas donde la hembra deposita entre 15 y 40 huevos. Esas cápsulas resisten los insecticidas de contacto, así que a los pocos días eclosionan y la actividad regresa.',
          'El gel activo funciona al revés: la cucaracha se alimenta del cebo y lo transporta al refugio, donde alcanza a los ejemplares que nunca salen. Tarda más en dar sensación de resultado, pero es lo que corta la colonia.',
        ],
      },
      {
        heading: 'Cómo es el tratamiento profesional',
        paragraphs: [
          'Aplicamos gel activo en los puntos protegidos donde se alimentan y se refugian, aspersión dirigida en rutas de paso y polvos residuales en registros eléctricos, donde no llega el líquido. Y tratamos específicamente coladeras, drenajes y registros, que en esta zona son la vía de entrada principal.',
          'La actividad baja de forma notoria durante la primera semana. En infestaciones altas programamos una revisión de refuerzo. Atendemos Tampico, Ciudad Madero y Altamira las 24 horas.',
        ],
      },
    ],
    relatedSlugs: [
      'moscos-en-tampico-criaderos',
      'ratas-en-casa-senales-y-que-hacer',
      'cada-cuanto-fumigar-casa',
    ],
  },
  {
    slug: 'termitas-clima-golfo',
    title: 'Termitas: por qué el clima del Golfo las favorece',
    summary:
      'Las señales que aparecen mucho antes del daño visible, qué revisar en construcción con madera y por qué aquí el riesgo es mayor que en otras regiones.',
    image: pestImage('termitas'),
    imageAlt: 'Túneles de tierra de termitas sobre un muro',
    category: 'Termitas',
    datePublished: '2026-07-17',
    dateModified: '2026-07-17',
    readingTime: '7 min',
    serviceHref: '/servicios/termitas',
    serviceLabel: 'Control profesional de termitas',
    sections: [
      {
        heading: 'Por qué aquí hay más termitas que en otras partes',
        paragraphs: [
          'La termita subterránea necesita humedad para sobrevivir, y la costa del Golfo se la da todo el año. En regiones con estación seca marcada su actividad se frena; en Tampico, Ciudad Madero y Altamira no.',
          'A eso se suma el parque construido. El centro histórico de Tampico conserva mucha edificación con estructura, entrepisos y detalles de madera, y en toda la zona conurbada son comunes los marcos, rodapiés y closets empotrados de madera en contacto con muros húmedos.',
          'La consecuencia práctica es que aquí la termita no es una plaga excepcional que le toca a alguien con mala suerte. Es endémica, y conviene revisar de forma preventiva.',
        ],
      },
      {
        heading: 'El daño avanza mucho antes de verse',
        paragraphs: [
          'La termita consume la madera desde el interior y deja intacta una capa superficial delgada. Por fuera la pieza parece perfecta. Cuando alguien nota que un marco suena hueco o que un rodapié cede al pisarlo, el daño acumulado suele llevar meses o años progresando.',
          'Por eso las señales indirectas valen tanto: son lo único que aparece a tiempo.',
        ],
        bullets: [
          'Túneles de tierra sobre muros, zócalos o cimentación: son autopistas que construyen para desplazarse.',
          'Madera que suena hueca al golpearla con los nudillos.',
          'Alas desprendidas cerca de ventanas o lámparas después de un enjambre.',
          'Serrín muy fino o pequeños orificios en marcos y muebles.',
          'Pintura abombada o superficies que ceden con presión ligera.',
        ],
      },
      {
        heading: 'Lo que hace que se instalen',
        paragraphs: [
          'Casi siempre encontramos detrás de una infestación alguna de estas condiciones, y todas son corregibles:',
        ],
        bullets: [
          'Filtraciones o humedad en muros y pisos que mantienen la madera húmeda.',
          'Contacto directo de madera o muebles con el suelo.',
          'Muebles empotrados contra muros con humedad.',
          'Madera almacenada o leña apilada contra la construcción.',
          'Jardineras pegadas al muro con riego frecuente.',
        ],
      },
      {
        heading: 'Un error que conviene evitar',
        paragraphs: [
          'Si encuentras túneles de tierra sobre un muro, la reacción natural es limpiarlos. Es mejor no hacerlo antes de la inspección: esos túneles indican por dónde se desplazan y hacia dónde van, y son información útil para localizar el foco.',
          'Lo mismo con las alas desprendidas tras un enjambre: dicen que hay una colonia madura cerca y ayudan a orientar la revisión.',
        ],
      },
      {
        heading: 'Cómo es el tratamiento',
        paragraphs: [
          'Primero una inspección estructural que determine la extensión real: marcos, rodapiés, vigas y puntos de contacto con el suelo. A partir de ahí se define si basta el tratamiento dirigido o hay que contemplar reparación.',
          'El tratamiento combina inyección puntual con jeringa en la madera afectada, aspersión dirigida y barrera perimetral en los puntos de contacto con el suelo. Se aplica mediante orificios milimétricos, sin manchar ni afectar el acabado.',
          'Atendemos Tampico, Ciudad Madero, Altamira y la zona conurbada. Si sospechas de termitas, la inspección temprana es lo que evita una reparación cara.',
        ],
      },
    ],
    relatedSlugs: [
      'cucarachas-del-drenaje',
      'moscos-en-tampico-criaderos',
      'cada-cuanto-fumigar-casa',
    ],
  },
  {
    slug: 'ratas-en-casa-senales-y-que-hacer',
    title: 'Ratas y ratones en casa: señales y qué hacer',
    summary:
      'Cómo reconocer la actividad real, por qué envenenar sin sellar no funciona y cuándo el problema ya requiere intervención profesional.',
    image: pestImage('ratas'),
    imageAlt:
      'Estación de cebo cerrada instalada durante un servicio de control de ratas',
    category: 'Ratas',
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    readingTime: '7 min',
    serviceHref: '/servicios/ratas',
    serviceLabel: 'Control profesional de ratas y ratones',
    sections: [
      {
        heading: 'Las señales que confirman actividad',
        paragraphs: [
          'Las ratas son nocturnas y discretas: cuando ves una de día, la población suele llevar tiempo establecida. Las señales indirectas aparecen mucho antes y permiten actuar a tiempo.',
        ],
        bullets: [
          'Excremento oscuro con forma de grano de arroz junto a muros o tras electrodomésticos.',
          'Ruidos de carrera o roedura en plafones y entretechos durante la noche.',
          'Marcas de grasa a lo largo de rodapiés: recorren siempre la misma ruta pegadas al muro.',
          'Empaques, costales o cableado roídos.',
          'Olor amoniacal persistente en espacios cerrados o bodegas.',
          'Nerviosismo inusual de las mascotas frente a un muro o mueble concreto.',
        ],
      },
      {
        heading: 'Por qué la presión es alta en esta zona',
        paragraphs: [
          'La conurbación tiene condiciones que mantienen una población de roedores constante: actividad portuaria y logística, canales y cuerpos de agua, drenaje con años de servicio y movimiento continuo de mercancía.',
          'En Altamira, con el puerto industrial y sus bodegas, la entrada de roedores por contenedores y carga es un riesgo permanente que solo se contiene con programa continuo y no con intervenciones puntuales.',
        ],
      },
      {
        heading: 'Por qué envenenar sin sellar no resuelve',
        paragraphs: [
          'Es el error más común. Colocar veneno reduce la población presente, pero no cambia las condiciones que la atrajeron. Si el acceso sigue abierto y hay alimento disponible, en pocas semanas llega una nueva camada desde el exterior.',
          'A eso se suma un problema práctico: el roedor envenenado suele morir dentro de muros o plafones, donde no se puede retirar. Con el calor de la región, el olor de descomposición es especialmente intenso y puede durar semanas.',
          'Un ratón entra por una abertura del tamaño de una moneda y una rata por la de un puño. Sin sellado, el ciclo no se rompe.',
        ],
      },
      {
        heading: 'Qué puedes hacer desde hoy',
        paragraphs: [
          'Reducir alimento y refugio disponible mejora mucho el resultado del tratamiento y a veces evita que la población llegue a establecerse.',
        ],
        bullets: [
          'Guardar granos, croquetas y abarrotes en contenedores rígidos con tapa, nunca en costal al piso.',
          'Separar la estiba de los muros y elevarla del suelo para poder inspeccionar detrás.',
          'Cerrar las bolsas de basura y no dejarlas en el patio durante la noche.',
          'Revisar y sellar huecos nuevos por obra, humedad o paso de tuberías.',
          'Colocar rejilla en coladeras y guardas en la parte baja de las puertas.',
        ],
      },
      {
        heading: 'Cuándo dejar de intentarlo por tu cuenta',
        paragraphs: [
          'Si escuchas actividad en plafones, si encuentras excremento en más de una habitación, si hay cableado roído o si aparece un ejemplar de día, la población ya está establecida y las trampas de supermercado no van a alcanzarla.',
          'El servicio profesional combina estaciones de cebo cerradas y rotuladas sobre las rutas detectadas, trampeo para medir la actividad real y sellado de accesos, que es lo que evita que vuelva a formarse. Atendemos casas, comercios, bodegas y naves industriales en toda la zona conurbada.',
        ],
      },
    ],
    relatedSlugs: [
      'cucarachas-del-drenaje',
      'cada-cuanto-fumigar-casa',
      'alacranes-en-tamaulipas',
    ],
  },
  {
    slug: 'cada-cuanto-fumigar-casa',
    title: '¿Cada cuánto hay que fumigar una casa en Tampico?',
    summary:
      'Por qué en la costa la frecuencia es distinta que en el centro del país, y qué factores del entorno acortan el intervalo.',
    image: pestImage('hormigas'),
    imageAlt:
      'Aplicación preventiva de control de plagas en el perímetro de una vivienda',
    category: 'Prevención',
    datePublished: '2026-07-12',
    dateModified: '2026-07-12',
    readingTime: '6 min',
    serviceHref: '/servicios/cucarachas',
    serviceLabel: 'Servicio programado de fumigación',
    sections: [
      {
        heading: 'Aquí no aplica la regla del centro del país',
        paragraphs: [
          'Muchas guías recomiendan fumigar cada seis meses. Esa frecuencia se calcula para climas con estación fría, donde la actividad de las plagas baja durante meses y da un respiro natural.',
          'En Tampico, Ciudad Madero y Altamira ese respiro no existe. El calor y la humedad se mantienen buena parte del año y las plagas siguen reproduciéndose, así que el intervalo razonable es más corto: normalmente entre 3 y 4 meses en vivienda.',
          'El efecto residual de los productos también dura menos aquí, porque el sol intenso y las lluvias frecuentes lo degradan más rápido, sobre todo en aplicaciones exteriores.',
        ],
      },
      {
        heading: 'Los factores que acortan el intervalo',
        paragraphs: [
          'Si tu vivienda cumple varios de estos puntos, conviene acercarse a los 3 meses en lugar de los 4:',
        ],
        bullets: [
          'Cercanía a lagunas, esteros, canales o el río: presión constante de moscos.',
          'Patio con vegetación densa o jardín amplio.',
          'Terreno baldío, monte u obra en curso en la manzana.',
          'Drenaje antiguo o coladeras sin rejilla.',
          'Mascotas con acceso al patio o a la calle.',
          'Construcción con elementos de madera o humedad en muros.',
          'Historial de infestaciones previas en la propiedad.',
        ],
      },
      {
        heading: 'Prevenir cuesta menos que corregir',
        paragraphs: [
          'La diferencia de costo entre un servicio programado y un tratamiento correctivo no es pequeña. Una infestación establecida requiere más visitas, más producto y más tiempo, y en el intervalo puede haber daño material: alimentos perdidos, cableado roído, madera afectada por termitas.',
          'En un negocio la cuenta incluye además el riesgo sanitario y el daño de imagen que supone que un cliente vea una cucaracha en el local.',
          'El servicio programado tiene otra ventaja menos obvia: genera histórico. Sabemos qué se detectó la visita anterior, qué se corrigió y qué se repite, lo que permite atacar la causa en lugar de repetir siempre la misma aplicación.',
        ],
      },
      {
        heading: 'Señales para no esperar a la siguiente visita',
        paragraphs: [
          'Entre aplicaciones hay hallazgos que justifican adelantar el servicio: ver cucarachas de día, encontrar excremento de roedor, detectar túneles de tierra en un muro, notar picaduras al despertar o ver actividad en una habitación donde antes no la había.',
          'En cualquiera de esos casos conviene una revisión anticipada. Atender un foco temprano casi siempre significa una intervención más corta y más barata.',
        ],
      },
    ],
    relatedSlugs: [
      'moscos-en-tampico-criaderos',
      'termitas-clima-golfo',
      'cucarachas-del-drenaje',
    ],
  },
  {
    slug: 'alacranes-en-tamaulipas',
    title: 'Alacranes en Tamaulipas: cómo prevenirlos en casa',
    summary:
      'Dónde se refugian, qué revisar cada semana y cómo reducir el riesgo para niños y mascotas sin depender de remedios improvisados.',
    image: pestImage('alacranes'),
    imageAlt:
      'Alacrán localizado durante una inspección preventiva de grietas y accesos',
    category: 'Alacranes',
    datePublished: '2026-07-10',
    dateModified: '2026-07-10',
    readingTime: '6 min',
    serviceHref: '/servicios/alacranes',
    serviceLabel: 'Control profesional de alacranes',
    sections: [
      {
        heading: 'Por qué entran a la vivienda',
        paragraphs: [
          'El alacrán no busca a las personas. Entra porque encuentra tres cosas: refugio, humedad e insectos de los que alimentarse. Un hueco bajo la puerta, una grieta alrededor de una tubería o material apilado contra el muro conectan el exterior con el interior.',
          'En la periferia de la conurbación, en Altamira, Aldama y las zonas donde la vivienda colinda con monte o terreno sin construir, la probabilidad de ingreso es bastante mayor. Las obras en curso y el escombro acumulado aceleran el proceso.',
          'Durante el día permanece oculto y sale de noche a cazar. Por eso un avistamiento en el baño o la recámara no indica necesariamente dónde está el refugio.',
        ],
      },
      {
        heading: 'Los puntos que conviene revisar cada semana',
        paragraphs: [
          'Una rutina breve permite detectar las condiciones antes de encontrarte un ejemplar. Hazla con buena iluminación y calzado cerrado, y no metas las manos en huecos que no puedas ver. Si mueves objetos almacenados, usa guantes resistentes.',
        ],
        bullets: [
          'Sacude zapatos, toallas y ropa que hayan quedado sobre el piso.',
          'Revisa zoclos, marcos, pasos de instalaciones y grietas visibles.',
          'Mantén despejados registros, bodegas y cuartos de lavado.',
          'Retira escombro, madera, piedra y macetas pegadas a la construcción.',
          'Comprueba que los sellos inferiores de las puertas estén completos.',
        ],
      },
      {
        heading: 'Cómo proteger a niños y mascotas',
        paragraphs: [
          'En hogares con niños pequeños, evita dejar juguetes, cobijas o calzado sobre el piso durante la noche. Las camas y cunas no deben quedar pegadas a muros con grietas, y conviene retirar los faldones que lleguen al suelo: son un puente de acceso.',
          'Enseña a los niños a no tocar un alacrán aunque parezca inmóvil, y ten una linterna a mano para revisar antes de recoger objetos en el patio.',
          'Con las mascotas, mantén limpias sus zonas de descanso y evita que jueguen entre material acumulado. No apliques insecticidas domésticos en su cama ni mezcles productos.',
        ],
      },
      {
        heading: 'Qué hacer ante un hallazgo o una picadura',
        paragraphs: [
          'Si encuentras un alacrán, mantén distancia y no lo captures con las manos. Aísla el área, aleja a niños y mascotas, y anota dónde y a qué hora apareció: esa información orienta la inspección posterior.',
          'Ante una picadura, busca atención médica de inmediato y sigue las indicaciones del personal de salud. No hagas cortes ni succiones, y no apliques sustancias caseras sobre la zona. El control de plagas atiende la propiedad, pero no sustituye la valoración médica ni debe retrasarla.',
        ],
      },
      {
        heading: 'Cuándo conviene el control profesional',
        paragraphs: [
          'Un avistamiento recurrente, la presencia en habitaciones o cualquier hallazgo en una vivienda con niños pequeños justifica una inspección. El técnico revisa refugios, accesos y actividad de otros insectos, y aplica polvos residuales en grietas seleccionadas junto con tratamiento perimetral.',
          'La aplicación rinde mucho más acompañada de orden, retiro de material acumulado y sellado de accesos. El objetivo no es rociar la casa entera, sino eliminar las condiciones que permiten que el alacrán entre y se quede.',
        ],
      },
    ],
    relatedSlugs: [
      'cada-cuanto-fumigar-casa',
      'ratas-en-casa-senales-y-que-hacer',
      'moscos-en-tampico-criaderos',
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS]
}

export function getPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((related): related is BlogPost => Boolean(related))
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug)
}
