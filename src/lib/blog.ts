import {
  getPestService,
  getServiceOgImage,
  type ServiceSlug,
} from './services'

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
    : '/images/og/fumcon-og.webp'
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'alacranes-en-yucatan-prevenir-picaduras',
    title: 'Alacranes en Yucatán: cómo prevenir picaduras en casa',
    summary:
      'Aprende dónde suelen ocultarse, qué revisar cada semana y cómo reducir el riesgo para niños y mascotas sin depender de remedios improvisados.',
    image: pestImage('alacranes'),
    imageAlt: 'Alacrán localizado durante una inspección preventiva en Yucatán',
    category: 'Alacranes',
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    readingTime: '7 min',
    serviceHref: '/servicios/alacranes',
    serviceLabel: 'Control profesional de alacranes',
    sections: [
      {
        heading: 'Por qué aparecen alacranes dentro de una vivienda',
        paragraphs: [
          'El clima cálido de Yucatán permite que los alacranes mantengan actividad durante buena parte del año. No buscan a las personas: entran porque encuentran refugios secos, insectos para alimentarse y accesos pequeños. Un espacio bajo la puerta, una grieta alrededor de una tubería o materiales apilados junto al muro pueden conectar el patio con el interior.',
          'Durante el día permanecen ocultos y por la noche salen a buscar alimento. Por eso un avistamiento en baño, cocina o recámara no siempre indica dónde está el foco. Conviene revisar el perímetro completo, especialmente registros, cuartos de servicio, jardineras, acumulaciones de piedra, leña y cajas que llevan tiempo sin moverse.',
        ],
      },
      {
        heading: 'Los puntos que conviene revisar cada semana',
        paragraphs: [
          'Una rutina breve ayuda a detectar condiciones antes de encontrar un ejemplar. Haz la revisión con buena iluminación y calzado cerrado; no introduzcas las manos en huecos que no puedas ver. Si mueves objetos almacenados, utiliza guantes resistentes y sepáralos del muro para inspeccionar detrás.',
        ],
        bullets: [
          'Sacude zapatos, toallas y ropa que hayan quedado sobre el piso.',
          'Revisa zoclos, marcos, pasos de instalaciones y grietas visibles.',
          'Mantén despejados registros, bodegas y cuartos de lavado.',
          'Retira hojas, escombro, madera y piedras pegadas a la construcción.',
          'Comprueba que mosquiteros y sellos inferiores de puertas estén completos.',
        ],
      },
      {
        heading: 'Cómo proteger a niños y mascotas',
        paragraphs: [
          'En hogares con niños pequeños, evita dejar juguetes, cobijas o calzado en patios y pisos durante la noche. Las camas y cunas no deben quedar pegadas a muros con grietas. Enseña a los niños a no tocar alacranes, aunque parezcan inmóviles, y mantén una linterna accesible para revisar antes de recoger objetos en exteriores.',
          'Las mascotas también pueden acercarse por curiosidad. Mantén limpias sus zonas de descanso, revisa camas y recipientes, y evita que jueguen entre materiales acumulados. No apliques insecticidas domésticos en su cama ni combines productos: además del riesgo de exposición, la mezcla puede dispersar la actividad sin crear una barrera efectiva.',
        ],
      },
      {
        heading: 'Qué hacer ante un hallazgo o una picadura',
        paragraphs: [
          'Si encuentras un alacrán, mantén distancia y evita capturarlo con las manos. Aísla el área, aleja a niños y mascotas y registra dónde y a qué hora apareció; esa información ayuda durante la inspección. No destruyas de inmediato todas las señales del entorno, porque las rutas y refugios permiten orientar el tratamiento.',
          'Ante una picadura, busca atención médica inmediata y sigue las indicaciones del personal de salud. No realices cortes, succiones ni coloques sustancias caseras sobre la zona. El control de plagas atiende la propiedad, pero no sustituye la valoración médica ni debe retrasarla.',
        ],
      },
      {
        heading: 'Cuándo conviene solicitar control profesional',
        paragraphs: [
          'Un avistamiento recurrente, la presencia en habitaciones o cualquier hallazgo en una propiedad con niños y mascotas justifica una inspección. El técnico revisa refugios, entradas y actividad de otros insectos; después puede aplicar una barrera por aspersión y polvos residuales en grietas seleccionadas.',
          'La aplicación funciona mejor cuando se acompaña con orden, retiro de materiales y sellado de accesos. Fumcon explica la preparación, el tiempo de reingreso y el seguimiento necesario. La meta no es rociar toda la casa, sino reducir las condiciones que permiten que el alacrán entre y permanezca.',
        ],
      },
      {
        heading: 'Una rutina nocturna para reducir encuentros',
        paragraphs: [
          'Antes de dormir, despeja recorridos, guarda el calzado y revisa con luz los baños o patios donde ya hubo actividad. Cierra puertas exteriores y no dejes ropa húmeda, cajas o juguetes sobre el piso. La rutina toma pocos minutos y reduce la posibilidad de tocar un ejemplar oculto al levantarse.',
          'Anota cada avistamiento con fecha y lugar en vez de confiar en la memoria. Si dos o más hallazgos se concentran en el mismo sector, el técnico podrá revisar primero ese recorrido. Mantén estas medidas después del tratamiento, porque el control químico y las barreras físicas funcionan mejor cuando se sostienen juntos.',
        ],
        bullets: [
          'Usa calzado cerrado al caminar por patios durante la noche.',
          'Separa camas y cunas de muros con grietas o humedad.',
          'No muevas trampas ni aplicaciones colocadas por el técnico.',
          'Informa de inmediato si aparece actividad en una habitación.',
        ],
      },
    ],
    relatedSlugs: [
      'temporada-mosquitos-quintana-roo',
      'eliminar-cucarachas-clima-calido-humedo',
      'cada-cuanto-fumigar-regla-cuatro-meses',
    ],
  },
  {
    slug: 'eliminar-cucarachas-clima-calido-humedo',
    title: 'Cómo eliminar cucarachas en clima cálido y húmedo',
    summary:
      'Una guía para reconocer la especie, cortar alimento y humedad, y entender por qué tratar la colonia es más efectivo que perseguir ejemplares.',
    image: pestImage('cucarachas'),
    imageAlt: 'Cucaracha en una superficie de cocina en clima cálido y húmedo',
    category: 'Cucarachas',
    datePublished: '2026-07-05',
    dateModified: '2026-07-09',
    readingTime: '8 min',
    serviceHref: '/servicios/cucarachas',
    serviceLabel: 'Tratamiento contra cucarachas',
    sections: [
      {
        heading: 'Por qué el sureste favorece una infestación',
        paragraphs: [
          'El calor y la humedad de Yucatán y Quintana Roo aceleran el ciclo de las cucarachas. En una vivienda pueden encontrar agua debajo del fregadero, alimento detrás de electrodomésticos y refugio en bisagras, grietas o cartón. En edificios y comercios también se desplazan por drenajes, ductos y pasos compartidos de instalaciones.',
          'Las dos situaciones más comunes son diferentes. La cucaracha alemana suele concentrarse en cocinas y es pequeña; la americana es mayor y aparece con frecuencia cerca de drenajes, patios y registros. Reconocer hábitos y tamaño orienta la inspección, porque una estrategia útil para una no necesariamente resuelve el origen de la otra.',
        ],
      },
      {
        heading: 'Señales que aparecen antes de ver muchas',
        paragraphs: [
          'Ver una cucaracha de noche ya indica actividad, pero existen rastros que permiten actuar antes. Busca puntos oscuros parecidos a pimienta dentro de alacenas, cápsulas de huevos en esquinas, pieles mudadas y un olor persistente en espacios cerrados. Una aparición durante el día puede indicar que los refugios están saturados.',
        ],
        bullets: [
          'Excrementos en cajones, motores de refrigeradores y uniones de muebles.',
          'Ootecas adheridas a cartón, bisagras o superficies protegidas.',
          'Actividad al encender la luz durante la madrugada.',
          'Ejemplares pequeños cerca de fregaderos y electrodomésticos.',
          'Ingreso de cucarachas grandes por coladeras o puertas de patio.',
        ],
      },
      {
        heading: 'Limpieza útil: quitar recursos, no solo rastros',
        paragraphs: [
          'La limpieza ayuda cuando reduce alimento y agua, pero por sí sola no alcanza una colonia dentro de una pared o un equipo. Guarda harina, cereales y alimento para mascotas en recipientes cerrados. Retira grasa de laterales y parte inferior de estufas, vacía residuos cada noche y evita dejar platos con agua.',
          'Repara fugas, seca el fregadero y revisa bandejas de refrigeradores o aires acondicionados. El cartón corrugado ofrece refugio y puede transportar ootecas, así que conviene desempacar mercancía y retirarlo. No selles una grieta con actividad evidente antes de evaluar el foco: podrías desviar el recorrido hacia otro punto.',
        ],
      },
      {
        heading: 'Por qué los aerosoles suelen dar un resultado corto',
        paragraphs: [
          'Un aerosol mata el ejemplar que recibe el producto, pero no necesariamente llega a huevos, ninfas y adultos ocultos. Algunas formulaciones de uso doméstico son repelentes y pueden dispersar la colonia, dificultando que un cebo sea aceptado. Mezclar productos aumenta riesgos y hace más difícil interpretar el resultado.',
          'El Gel Activo se coloca en puntos pequeños y protegidos para que los insectos lo consuman y lo lleven hacia refugios. La aspersión perimetral puede complementar el control en entradas o recorridos definidos. La ubicación, la dosis y la compatibilidad entre métodos son más importantes que aplicar una gran cantidad.',
        ],
      },
      {
        heading: 'Seguimiento y prevención después del tratamiento',
        paragraphs: [
          'La actividad debería disminuir de manera progresiva, no siempre desaparecer en unas horas. Durante ese periodo no retires el gel ni rocíes otros químicos cerca. Registra dónde continúan los avistamientos para que el técnico determine si existe otro foco, un ingreso externo o condiciones que deben corregirse.',
          'Una inspección profesional incluye diagnóstico, aplicación, revisión de resultados y garantía según el servicio. Mantén las rutinas de almacenamiento, humedad y residuos después de la visita. El objetivo es cortar el ciclo actual y hacer que la propiedad ofrezca cada vez menos alimento, agua y refugio.',
        ],
      },
      {
        heading: 'Plan de siete días después de detectar actividad',
        paragraphs: [
          'Durante la primera semana, registra cada avistamiento sin aplicar productos adicionales. Revisa alacenas por secciones, limpia grasa y migas, controla fugas y retira cartón. No cambies todos los objetos de lugar al mismo tiempo: conservar el orden permite reconocer si el recorrido disminuye o se desplaza.',
          'Comparte el registro con el técnico durante el seguimiento. La hora, el tamaño del ejemplar y el punto exacto ayudan a decidir si el tratamiento está alcanzando la colonia o si existe un segundo foco. Una disminución progresiva acompañada por menos ninfas suele aportar más información que un solo día sin actividad.',
        ],
        bullets: [
          'No retires el gel ni limpies directamente sobre sus puntos.',
          'Mantén comida, residuos y alimento de mascotas cerrados.',
          'Revisa de noche con una linterna sin rociar aerosoles.',
          'Solicita revisión si la actividad no muestra una reducción clara.',
        ],
      },
    ],
    relatedSlugs: [
      'cada-cuanto-fumigar-regla-cuatro-meses',
      'fumigacion-restaurantes-hospitales-cofepris',
      'senales-termitas-casas-madera',
    ],
  },
  {
    slug: 'temporada-mosquitos-quintana-roo',
    title: 'Temporada de mosquitos en Quintana Roo: dengue y prevención',
    summary:
      'Medidas prácticas para reducir criaderos, proteger patios y saber cuándo una nebulización profesional puede complementar la prevención.',
    image: pestImage('mosquitos'),
    imageAlt: 'Mosquitos activos durante la temporada de lluvias en Quintana Roo',
    category: 'Mosquitos',
    datePublished: '2026-06-22',
    dateModified: '2026-06-25',
    readingTime: '8 min',
    serviceHref: '/servicios/mosquitos',
    serviceLabel: 'Control profesional de mosquitos',
    sections: [
      {
        heading: 'Lluvia, calor y un ciclo que puede ser muy rápido',
        paragraphs: [
          'En Quintana Roo, la combinación de temperatura alta y lluvia crea oportunidades constantes para la reproducción de mosquitos. No hace falta un estanque: una cubeta, un plato de maceta, una canaleta obstruida o una lona con agua pueden sostener larvas. El problema suele crecer después de varios días sin revisar esos puntos.',
          'Algunas especies pueden transmitir dengue, zika y chikungunya. La prevención en casa no sustituye las acciones de salud pública, pero sí reduce criaderos dentro de la propiedad. El paso más importante es interrumpir el ciclo acuático; matar únicamente adultos ofrece alivio temporal si siguen emergiendo desde recipientes cercanos.',
        ],
      },
      {
        heading: 'Una revisión de diez minutos cada semana',
        paragraphs: [
          'Recorre patio, azotea, jardín y áreas de servicio. Vacía el agua, cepilla el interior del recipiente y colócalo boca abajo o bajo techo. El cepillado importa porque algunos huevos pueden permanecer adheridos a la pared por encima del nivel del agua y activarse cuando el recipiente vuelve a llenarse.',
        ],
        bullets: [
          'Limpia canaletas, coladeras exteriores y desagües con poca pendiente.',
          'Tapa depósitos y revisa que mosquiteros no tengan aberturas.',
          'Cambia el agua de floreros y bebederos con frecuencia.',
          'Perfora o retira objetos que acumulen lluvia sin una función.',
          'Mantén podada la vegetación densa donde descansan mosquitos adultos.',
        ],
      },
      {
        heading: 'Cómo reducir picaduras dentro y fuera de casa',
        paragraphs: [
          'Instala o repara mosquiteros en ventanas y puertas, utiliza ropa que cubra la piel durante horas de mayor actividad y aplica repelente siguiendo la etiqueta. Los ventiladores ayudan en espacios de convivencia porque dificultan el vuelo, pero no eliminan criaderos ni sustituyen la protección personal.',
          'En propiedades con huéspedes, clientes o niños, comunica las medidas a todos. Dejar una puerta abierta, mover un recipiente o suspender la limpieza de canaletas puede reactivar el problema. Una lista semanal asignada a una persona concreta suele funcionar mejor que una revisión ocasional cuando la molestia ya es intensa.',
        ],
      },
      {
        heading: 'Cuándo considerar nebulización o termonebulización',
        paragraphs: [
          'La nebulización distribuye microgotas en vegetación, perímetros y áreas donde descansan adultos. La termonebulización puede utilizarse en exteriores amplios o zonas de difícil acceso. El método se elige según el tamaño del espacio, la actividad, el clima y la cercanía de personas, mascotas, alimentos o cuerpos de agua.',
          'Antes de aplicar, el técnico revisa criaderos y explica preparación y reingreso. Una lluvia inmediata o viento fuerte puede modificar el programa, por lo que la coordinación importa. El objetivo no es formar una nube visible por sí misma, sino colocar el tratamiento en puntos útiles con condiciones adecuadas.',
        ],
      },
      {
        heading: 'Qué hacer si la actividad continúa',
        paragraphs: [
          'Si después de eliminar recipientes siguen apareciendo muchos mosquitos, revisa propiedades colindantes, drenajes, vegetación y espacios que no se inspeccionan con frecuencia. Registra horarios y zonas con mayor presencia. Esa información permite diferenciar un criadero cercano de adultos que llegan desde un área más amplia.',
          'Fumcon combina revisión, aplicación y recomendaciones para patios, jardines, viviendas y negocios. Ante síntomas compatibles con dengue u otra enfermedad, busca atención médica; el control ambiental ayuda a reducir exposición, pero no diagnostica ni trata problemas de salud.',
        ],
      },
      {
        heading: 'Un plan familiar para la temporada de lluvias',
        paragraphs: [
          'Asigna un día fijo para revisar agua acumulada y reparte zonas entre quienes viven en la propiedad. Una persona puede revisar azotea y canaletas; otra, patio, macetas y recipientes. El hábito semanal evita depender de una limpieza extraordinaria cuando las picaduras ya aumentaron.',
          'Guarda repelente, revisa mosquiteros y acuerda qué hacer ante fiebre, dolor intenso u otros síntomas: buscar orientación médica y no automedicarse. En alojamientos o negocios, comunica el protocolo al personal y registra las áreas tratadas para mantener continuidad entre turnos.',
        ],
        bullets: [
          'Programa la revisión después de cada lluvia importante.',
          'Incluye áreas poco usadas, lotes interiores y cuartos de servicio.',
          'Pide a vecinos y mantenimiento revisar fuentes compartidas.',
          'Conserva las indicaciones entregadas después de la nebulización.',
        ],
      },
    ],
    relatedSlugs: [
      'alacranes-en-yucatan-prevenir-picaduras',
      'cada-cuanto-fumigar-regla-cuatro-meses',
      'fumigacion-restaurantes-hospitales-cofepris',
    ],
  },
  {
    slug: 'senales-termitas-casas-madera',
    title: 'Señales de termitas en casas de madera del sureste',
    summary:
      'Cómo distinguir indicios de actividad, revisar zonas húmedas y evitar reparaciones superficiales antes de una inspección especializada.',
    image: pestImage('termitas'),
    imageAlt: 'Termitas y daño visible en madera de una vivienda del sureste',
    category: 'Termitas',
    datePublished: '2026-06-08',
    dateModified: '2026-06-12',
    readingTime: '8 min',
    serviceHref: '/servicios/termitas',
    serviceLabel: 'Inspección y control de termitas',
    sections: [
      {
        heading: 'El daño puede avanzar sin verse desde fuera',
        paragraphs: [
          'Las termitas consumen celulosa y pueden desplazarse dentro de madera, muros o suelo sin quedar expuestas. En el sureste, la humedad, las filtraciones y el contacto de elementos de madera con tierra crean condiciones favorables. Una superficie pintada puede conservar su aspecto mientras el interior pierde resistencia.',
          'No todo insecto en la madera es termita. Hay especies que dejan polvo, perforaciones o galerías distintas. Identificar el tipo de actividad evita gastar en un tratamiento que no corresponde. La inspección considera el residuo, la forma del daño, la humedad, la ubicación y la conexión con otras partes de la propiedad.',
        ],
      },
      {
        heading: 'Cinco señales que justifican una revisión',
        paragraphs: [
          'Haz una inspección visual en marcos, puertas, muebles fijos, vigas, zoclos y piezas cercanas a baños o cocinas. Presiona con cuidado únicamente zonas que ya parezcan dañadas; no perfores elementos estructurales ni retires tubos antes de documentarlos.',
        ],
        bullets: [
          'Madera que suena hueca o cede con una presión ligera.',
          'Tubos de lodo que suben desde el suelo por muros o cimientos.',
          'Alas descartadas cerca de ventanas después de una salida de reproductores.',
          'Pintura abombada, superficies deformadas o uniones debilitadas.',
          'Polvo, pequeñas perforaciones o galerías visibles al mover una pieza.',
        ],
      },
      {
        heading: 'Humedad y contacto con suelo: dos factores clave',
        paragraphs: [
          'Repara fugas de tuberías, filtraciones de techo y drenajes que mantienen madera húmeda. Mejora la ventilación debajo de muebles, pisos y espacios cerrados. Separa leña, cartón y sobrantes de construcción de la vivienda; además de aportar celulosa, dificultan detectar actividad nueva.',
          'Evita que marcos, postes o recubrimientos queden directamente sobre tierra sin una protección diseñada para ello. Estas medidas no eliminan una colonia activa, pero reducen condiciones favorables y permiten que la inspección y el tratamiento tengan mejores resultados.',
        ],
      },
      {
        heading: 'Errores comunes al descubrir una zona dañada',
        paragraphs: [
          'Pintar, rellenar o reemplazar de inmediato la pieza visible puede ocultar el recorrido sin controlar el origen. Tampoco conviene rociar combustible, cloro ni mezclas caseras: representan un riesgo, pueden dañar materiales y no crean una estrategia de protección para el resto de la estructura.',
          'Toma fotografías, señala la fecha y evita alterar los indicios principales hasta la visita. Si la madera soporta peso o muestra pérdida importante de resistencia, limita el uso del área y consulta a un profesional de construcción. El control de termitas detiene actividad biológica; no recupera la capacidad estructural perdida.',
        ],
      },
      {
        heading: 'Qué incluye una estrategia profesional',
        paragraphs: [
          'El técnico delimita el daño, revisa madera y suelo y define si corresponde un tratamiento localizado, protección de elementos o una barrera. Los polvos residuales pueden alcanzar grietas; la aspersión o los tratamientos de suelo se reservan para condiciones donde realmente aportan control.',
          'Después se programa seguimiento y se indican correcciones de humedad, almacenamiento o contacto con tierra. Fumcon explica el alcance y la garantía del servicio antes de aplicar. Una revisión temprana suele permitir una intervención más focalizada y decisiones de reparación mejor informadas.',
        ],
      },
      {
        heading: 'Cómo vigilar la madera después de una intervención',
        paragraphs: [
          'Marca discretamente los límites del daño fotografiado y revisa la zona con la frecuencia indicada. Busca tubos reconstruidos, nuevas alas, residuos recientes o cambios en la superficie. No confundas polvo antiguo que cae durante una reparación con actividad nueva; compara siempre con imágenes fechadas.',
          'Mantén accesibles los puntos tratados y comunica al técnico cualquier obra, filtración o reemplazo de madera. Si un carpintero retira una pieza, pide conservar una muestra o fotografías del interior. La coordinación entre control, mantenimiento y reparación permite comprobar el resultado sin ocultar señales importantes.',
        ],
        bullets: [
          'Registra humedad o filtraciones que reaparezcan.',
          'No cubras las zonas de revisión con muebles o cajas.',
          'Conserva el reporte y la fecha del tratamiento.',
          'Solicita valoración estructural cuando una pieza haya perdido resistencia.',
        ],
      },
    ],
    relatedSlugs: [
      'eliminar-cucarachas-clima-calido-humedo',
      'cada-cuanto-fumigar-regla-cuatro-meses',
      'fumigacion-restaurantes-hospitales-cofepris',
    ],
  },
  {
    slug: 'cada-cuanto-fumigar-regla-cuatro-meses',
    title: '¿Cada cuánto fumigar? La regla de los 4 meses',
    summary:
      'Qué significa una frecuencia preventiva, cuándo debe ajustarse y por qué una inspección vale más que aplicar por calendario sin revisar.',
    image: '/hero/1.jpg',
    imageAlt: 'Técnico preparando un servicio preventivo de fumigación',
    category: 'Prevención',
    datePublished: '2026-05-21',
    dateModified: '2026-05-28',
    readingTime: '7 min',
    serviceHref: '/servicios',
    serviceLabel: 'Consultar todos los servicios',
    sections: [
      {
        heading: 'La frecuencia es una referencia, no una receta universal',
        paragraphs: [
          'Programar una revisión cada cuatro meses es una referencia práctica para muchas viviendas y pequeños negocios del sureste. Permite observar cambios entre temporadas, reforzar barreras y detectar actividad antes de que sea evidente. Sin embargo, la frecuencia adecuada depende de la plaga, el inmueble y el nivel de exposición.',
          'Una casa ordenada con accesos sellados no tiene el mismo riesgo que un restaurante con entregas diarias, una bodega junto a vegetación o un alojamiento con alta rotación. Aplicar por calendario sin inspeccionar puede llevar a tratar áreas innecesarias o a ignorar un problema específico que requiere otro método.',
        ],
      },
      {
        heading: 'Cuándo cuatro meses puede ser un buen punto de partida',
        paragraphs: [
          'La regla funciona mejor como programa preventivo después de controlar una actividad inicial. En cada visita se revisan señales, se comparan puntos críticos y se decide si hace falta aplicar, monitorear o corregir condiciones. El registro de hallazgos ayuda a ajustar el intervalo con evidencia.',
        ],
        bullets: [
          'Viviendas en clima cálido con patios, drenajes y vegetación cercana.',
          'Locales que almacenan alimentos o reciben mercancía con frecuencia.',
          'Propiedades que ya tuvieron cucarachas, hormigas o plagas perimetrales.',
          'Espacios que necesitan demostrar una rutina documentada de revisión.',
          'Temporadas de lluvia que aumentan humedad y actividad de insectos.',
        ],
      },
      {
        heading: 'Casos que pueden requerir otro intervalo',
        paragraphs: [
          'Una infestación activa puede necesitar seguimiento en días o semanas, no esperar cuatro meses. Roedores requieren monitoreo de estaciones y sellado; garrapatas pueden necesitar aplicaciones relacionadas con su ciclo; termitas se controlan con un plan específico y revisiones de la zona tratada.',
          'En el extremo contrario, una propiedad sin señales y con buenas barreras quizá solo necesite inspección periódica y acciones preventivas. El técnico debe explicar por qué recomienda una fecha, qué indicadores se evaluarán y qué condiciones obligarían a adelantar la visita.',
        ],
      },
      {
        heading: 'Qué hacer entre una visita y la siguiente',
        paragraphs: [
          'Mantén una bitácora sencilla con fecha, lugar y tipo de señal. Revisa humedad, residuos, alimentos, cartón, grietas y vegetación. Estos cambios cotidianos influyen tanto como la aplicación. Si aparece actividad nueva, informa antes de utilizar aerosoles o mover estaciones para no alterar el diagnóstico.',
          'En negocios, asigna responsables para cocina, almacén, residuos y exteriores. Una lista breve y repetible funciona mejor que una limpieza extraordinaria antes de la fumigación. El objetivo es que cada visita encuentre menos condiciones favorables y permita usar intervenciones más focalizadas.',
        ],
      },
      {
        heading: 'Cómo construir un plan preventivo responsable',
        paragraphs: [
          'Un plan comienza con inspección y una línea base: plagas encontradas, riesgos, métodos y recomendaciones. A partir de ahí se acuerda una frecuencia, pero puede ajustarse según resultados, clima, cambios en la operación o nuevas obras. La garantía también debe relacionarse con el tratamiento realizado.',
          'Fumcon ofrece atención para hogares y negocios en Yucatán y Quintana Roo. La regla de cuatro meses ayuda a recordar la prevención, pero la mejor decisión surge de observar la propiedad. Consulta antes si detectas excrementos, telarañas recurrentes, picaduras, madera dañada o actividad nocturna.',
        ],
      },
      {
        heading: 'Qué preguntar antes de contratar un plan',
        paragraphs: [
          'Pide que la propuesta indique plaga objetivo, áreas incluidas, método, preparación, seguimiento y garantía. También debe aclarar si cada visita implica una aplicación o si primero se inspecciona. Un programa responsable puede concluir que una zona solo necesita monitoreo o una corrección física.',
          'Confirma quién atenderá reportes entre visitas y qué información debes conservar. El precio importa, pero no reemplaza una explicación clara. Compara propuestas por alcance, frecuencia y evidencia, no solo por cantidad de producto o promesas generales de mantener cualquier plaga fuera durante meses.',
        ],
        bullets: [
          'Pregunta qué señales harán adelantar la siguiente visita.',
          'Solicita indicaciones específicas para personas y mascotas.',
          'Verifica que el teléfono y la garantía queden por escrito.',
          'Guarda reportes para comparar tendencias entre temporadas.',
        ],
      },
    ],
    relatedSlugs: [
      'eliminar-cucarachas-clima-calido-humedo',
      'temporada-mosquitos-quintana-roo',
      'senales-termitas-casas-madera',
    ],
  },
  {
    slug: 'fumigacion-restaurantes-hospitales-cofepris',
    title: 'Fumigación para restaurantes y hospitales: normativa COFEPRIS',
    summary:
      'Principios para organizar un programa profesional, documentar el servicio y proteger alimentos, pacientes, personal y áreas sensibles.',
    image: '/hero/2.jpg',
    imageAlt: 'Técnico de Fumcon realizando control profesional en una instalación',
    category: 'Negocios',
    datePublished: '2026-05-02',
    dateModified: '2026-05-14',
    readingTime: '9 min',
    serviceHref: '/servicios',
    serviceLabel: 'Servicios para negocios e instituciones',
    sections: [
      {
        heading: 'Control de plagas como parte de una operación sanitaria',
        paragraphs: [
          'En restaurantes y hospitales, fumigar no consiste en una visita aislada para aplicar producto. El control debe integrarse con limpieza, manejo de residuos, mantenimiento, almacenamiento y documentación. Una plaga puede contaminar superficies, afectar alimentos, dañar equipos o comprometer áreas donde la continuidad del servicio es crítica.',
          'COFEPRIS regula productos y prácticas sanitarias aplicables a distintos establecimientos. Los requisitos concretos dependen del giro, los procesos y la autoridad que inspecciona. Por eso el responsable del inmueble debe conservar sus procedimientos internos y solicitar asesoría regulatoria cuando corresponda; una empresa de control aporta diagnóstico, aplicación y evidencia del servicio.',
        ],
      },
      {
        heading: 'Qué debe revisarse antes de programar una aplicación',
        paragraphs: [
          'El recorrido inicial debe incluir recepción de mercancías, almacenes, cocinas, comedores, cuartos de residuos, drenajes, plafones y exteriores. En hospitales se añaden áreas sensibles, circulación de pacientes, equipos, medicamentos y protocolos de acceso. El mapa de riesgos define dónde monitorear y qué zonas requieren autorización especial.',
        ],
        bullets: [
          'Señales y especies observadas, no solo una descripción general de “insectos”.',
          'Horarios con menor impacto para alimentos, pacientes, clientes y personal.',
          'Productos autorizados, ficha técnica e indicaciones de preparación y reingreso.',
          'Puntos de monitoreo numerados y responsables internos de revisión.',
          'Acciones correctivas de limpieza, sellado, humedad y manejo de residuos.',
        ],
      },
      {
        heading: 'Elegir métodos según el área',
        paragraphs: [
          'El Gel Activo permite un control focalizado de cucarachas y hormigas en puntos protegidos. Las estaciones de roedores facilitan monitoreo sin dejar cebos expuestos. La aspersión, nebulización o polvos residuales se reservan para zonas y condiciones compatibles con su etiqueta y con la operación.',
          'No debe aplicarse un producto sobre alimentos, utensilios, medicamentos o equipos expuestos. Antes del servicio se protegen o retiran objetos y se define quién autoriza el reingreso. En áreas sensibles, una intervención pequeña y bien colocada puede ser más apropiada que una aplicación extensa.',
        ],
      },
      {
        heading: 'La documentación que conviene conservar',
        paragraphs: [
          'Cada visita debería dejar fecha, técnico, áreas inspeccionadas, plaga objetivo, producto y método, hallazgos, recomendaciones y próxima revisión. También conviene conservar fichas técnicas, registros de estaciones y evidencia de correcciones. La información permite demostrar continuidad y detectar tendencias.',
          'Si una estación muestra actividad repetida o un drenaje acumula incidencias, el registro orienta mantenimiento y evita repetir la misma respuesta. Un documento sin seguimiento sirve poco: los responsables internos deben cerrar acciones y comunicar cambios en obra, proveedores, almacenamiento o limpieza.',
        ],
      },
      {
        heading: 'Cómo evaluar a un proveedor de control de plagas',
        paragraphs: [
          'Confirma datos de contacto, licencia sanitaria, productos registrados, alcance de la garantía y capacidad de explicar el tratamiento. Fumcon opera con licencia AP050271 y utiliza productos certificados por COFEPRIS y EPA, siguiendo preparación y reingreso definidos para cada caso.',
          'Solicita una inspección antes de aceptar un programa genérico. El proveedor debe poder adaptar horarios, describir riesgos y señalar qué corresponde a su equipo y qué debe resolver el establecimiento. En un restaurante u hospital, el mejor control surge de la coordinación constante entre mantenimiento, limpieza, operación y técnicos.',
        ],
      },
      {
        heading: 'Preparación interna el día del servicio',
        paragraphs: [
          'Designa a una persona responsable para acompañar el recorrido y confirmar que alimentos, utensilios, medicamentos y equipos estén protegidos. Comunica al personal qué áreas quedarán restringidas, durante cuánto tiempo y quién autoriza la reapertura. Los cambios de turno no deben perder esta información.',
          'Después de la aplicación, verifica que el reporte coincida con las zonas atendidas y distribuye las acciones correctivas a mantenimiento, limpieza o almacén. La fumigación no compensa una puerta sin sello, residuos abiertos o una fuga permanente. Cerrar esas tareas forma parte del control y debe quedar documentado.',
        ],
        bullets: [
          'Confirma el horario y la lista de áreas antes de comenzar.',
          'Protege productos y retira objetos según la indicación técnica.',
          'Señaliza accesos y respeta el tiempo de reingreso.',
          'Registra responsables y fechas para cada corrección pendiente.',
        ],
      },
    ],
    relatedSlugs: [
      'cada-cuanto-fumigar-regla-cuatro-meses',
      'eliminar-cucarachas-clima-calido-humedo',
      'senales-termitas-casas-madera',
    ],
  },
] as const

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
