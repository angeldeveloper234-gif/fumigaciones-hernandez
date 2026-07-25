export type ServiceSlug =
  | 'cucarachas'
  | 'roedores'
  | 'termitas'
  | 'mosquitos'
  | 'alacranes'
  | 'hormigas'
  | 'aranas'
  | 'garrapatas'

export type ControlMethod =
  | 'Aspersión'
  | 'Gel Activo'
  | 'Nebulización'
  | 'Polvos Residuales'
  | 'Termonebulización'

export interface PestService {
  slug: ServiceSlug
  name: string
  cardDescription: string
  image: string
  imageAlt: string
  h1: string
  metaTitle: string
  metaDescription: string
  intro: string
  problem: readonly string[]
  signs: readonly string[]
  treatmentIntro: string
  methods: readonly ControlMethod[]
  recommendations: readonly string[]
  includes: readonly string[]
  faqs: readonly {
    question: string
    answer: string
  }[]
  relatedSlugs: readonly ServiceSlug[]
}

export const CONTROL_METHODS = {
  'Aspersión':
    'Aplicación líquida perimetral para crear barreras químicas efectivas en los puntos de paso y refugio.',
  'Gel Activo':
    'Cebos de alta atracción para un control focalizado que alcanza la colonia sin saturar el ambiente.',
  'Nebulización':
    'Microgotas que alcanzan áreas difíciles y espacios aéreos donde se concentra la actividad.',
  'Polvos Residuales':
    'Tratamiento de grietas y hendiduras que conserva su acción en refugios de difícil acceso.',
  'Termonebulización':
    'Niebla térmica de alta penetración para áreas difíciles, exteriores amplios y techos elevados.',
} as const

export const PEST_SERVICES: readonly PestService[] = [
  {
    slug: 'cucarachas',
    name: 'Cucarachas',
    cardDescription: 'Eliminación total garantizada.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/cucaracha.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vY3VjYXJhY2hhLmpwZyIsImlhdCI6MTc2OTIwMDY5OCwiZXhwIjoxODAwNzM2Njk4fQ.vrba2_grNgq86ULycxqxYFtCOy44l4oSj8gzEt6nHbE',
    imageAlt:
      'Cucaracha sobre una superficie durante una inspección de control de plagas',
    h1: 'Control de Cucarachas en Mérida y el Sureste',
    metaTitle:
      'Control de Cucarachas en el Sureste — Inspección Gratis',
    metaDescription:
      'Elimina cucarachas alemanas y americanas en Mérida, Yucatán y Quintana Roo con gel activo, aspersión, seguimiento y garantía.',
    intro:
      'Eliminamos la actividad visible y tratamos los refugios donde la colonia se reproduce. Nuestro servicio combina inspección, aplicación precisa y seguimiento para proteger cocinas, drenajes y áreas de alimentos.',
    problem: [
      'El clima cálido y húmedo del sureste favorece a la cucaracha americana y a la cucaracha alemana durante todo el año. Pueden entrar por drenajes, empaques, grietas o instalaciones compartidas y establecerse cerca del agua y de los alimentos.',
      'Limpiar o aplicar aerosol sobre los insectos visibles ofrece un alivio temporal, pero no llega a ootecas, ninfas ni refugios internos. En Fumcon localizamos los focos de actividad para cortar el ciclo de reproducción con una estrategia adecuada al inmueble.',
    ],
    signs: [
      'Rastros oscuros o pequeños excrementos dentro de alacenas y cajones.',
      'Olor característico y persistente en cocinas, bodegas o cuartos húmedos.',
      'Ootecas o cápsulas de huevos ocultas en esquinas, bisagras y electrodomésticos.',
      'Ejemplares que corren al encender la luz durante la noche.',
    ],
    treatmentIntro:
      'Aplicamos Gel Activo en puntos protegidos de alimentación y refugio, complementado con Aspersión perimetral cuando la inspección lo requiere. La combinación permite trabajar sobre la colonia y bloquear rutas de entrada sin aplicar producto de más.',
    methods: ['Gel Activo', 'Aspersión'],
    recommendations: [
      'Guardar alimentos y alimento para mascotas en recipientes cerrados.',
      'Corregir fugas y secar fregaderos o superficies húmedas por la noche.',
      'Evitar acumulación de cartón y sellar grietas alrededor de tuberías.',
    ],
    includes: [
      'Inspección de focos y rutas',
      'Aplicación profesional',
      'Revisión de resultados',
      'Garantía del tratamiento',
    ],
    faqs: [
      {
        question: '¿Tengo que salir de la propiedad durante el servicio?',
        answer:
          'Depende del nivel de actividad y del método elegido. Antes de comenzar, el técnico explica la preparación, el tiempo de aplicación y las indicaciones de reingreso para personas y mascotas.',
      },
      {
        question: '¿Cuándo se empieza a notar el resultado?',
        answer:
          'La actividad suele disminuir de manera progresiva porque el tratamiento debe alcanzar los refugios. El técnico define el plazo de revisión según la especie, la infestación y las condiciones de la propiedad.',
      },
    ],
    relatedSlugs: ['hormigas', 'roedores', 'termitas'],
  },
  {
    slug: 'roedores',
    name: 'Roedores',
    cardDescription: 'Control de ratas y ratones con seguimiento.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/ratas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vcmF0YXMuanBnIiwiaWF0IjoxNzY5MjAwNzM0LCJleHAiOjE4MDA3MzY3MzR9.jhRz-KHBKwnrxWBTvywY9yg1_kR1twDGhpGmnHuY3js',
    imageAlt:
      'Roedor identificado para un servicio profesional de control de ratas y ratones',
    h1: 'Control de Roedores (Ratas y Ratones) en el Sureste',
    metaTitle:
      'Control de Roedores en el Sureste — Inspección Gratis',
    metaDescription:
      'Control profesional de ratas y ratones en Yucatán y Quintana Roo con estaciones seguras, sellado de accesos y seguimiento.',
    intro:
      'Controlamos ratas y ratones en casas, restaurantes, oficinas y bodegas mediante una estrategia que reduce la población y corrige los accesos que mantienen el problema.',
    problem: [
      'Los roedores buscan alimento, agua y refugio en espacios con poca actividad. Pueden ingresar por aberturas pequeñas, drenajes, techos y puertas sin sello, y después desplazarse por muros, plafones o áreas de almacenamiento.',
      'Además de contaminar superficies y productos, roen cables, empaques y materiales de construcción. Colocar trampas al azar no resuelve una infestación activa: primero hay que reconocer la especie, sus recorridos y las condiciones que le permiten permanecer.',
    ],
    signs: [
      'Excrementos pequeños en esquinas, cajones, almacenes o zonas de alimentos.',
      'Marcas de roído en cables, costales, cajas y envases.',
      'Ruidos de carrera o raspado en techos y muros durante la noche.',
      'Madrigueras, huellas o manchas de roce junto a paredes.',
    ],
    treatmentIntro:
      'Instalamos estaciones de cebo seguras en rutas estratégicas y empleamos dispositivos de monitoreo según el entorno. Después identificamos puntos de acceso y recomendamos o ejecutamos el sellado necesario para reducir nuevas entradas.',
    methods: ['Aspersión'],
    recommendations: [
      'Cerrar alimentos, retirar residuos diariamente y mantener contenedores con tapa.',
      'Podar vegetación pegada a muros y despejar bodegas para facilitar la inspección.',
      'Sellar pasos de instalaciones, puertas, respiraderos y uniones de techo.',
    ],
    includes: [
      'Inspección y diagnóstico',
      'Estaciones de control',
      'Sellado de accesos detectados',
      'Monitoreo y seguimiento',
    ],
    faqs: [
      {
        question: '¿Las estaciones pueden colocarse donde hay niños o mascotas?',
        answer:
          'El técnico selecciona ubicaciones protegidas y estaciones diseñadas para impedir el acceso directo. También explica qué áreas no deben moverse y las medidas de cuidado aplicables a cada propiedad.',
      },
      {
        question: '¿Por qué es necesario sellar si ya se colocó el control?',
        answer:
          'Reducir la población actual no impide que otros ejemplares entren. El sellado y el orden sanitario trabajan junto con el monitoreo para disminuir la posibilidad de una nueva infestación.',
      },
    ],
    relatedSlugs: ['cucarachas', 'termitas', 'hormigas'],
  },
  {
    slug: 'termitas',
    name: 'Termitas',
    cardDescription: 'Protección para madera y estructuras.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/termitas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vdGVybWl0YXMuanBnIiwiaWF0IjoxNzY5MjAwNzU0LCJleHAiOjE4MDA3MzY3NTR9.SvfTGup5HLIPLubYeOCyTdXBQJUZHHpvxfss5ji4PsI',
    imageAlt:
      'Termitas sobre madera examinadas durante una inspección especializada',
    h1: 'Control de Termitas en Casas de Madera del Sureste',
    metaTitle:
      'Control de Termitas en el Sureste — Inspección Gratis',
    metaDescription:
      'Inspección y tratamiento profesional de termitas en casas y estructuras de madera de Yucatán y Quintana Roo.',
    intro:
      'Detectamos actividad de termitas y protegemos madera, mobiliario y elementos estructurales con tratamientos localizados o de suelo definidos después de una inspección.',
    problem: [
      'Las termitas subterráneas pueden llegar desde el suelo y consumir la madera desde el interior, por lo que el daño avanza sin ser evidente. La humedad del sureste, el contacto de madera con tierra y ciertas filtraciones favorecen su actividad.',
      'Una intervención tardía puede afectar marcos, puertas, muebles, techos o partes estructurales. No basta con retirar la pieza visible: es necesario identificar el recorrido de la colonia y distinguir termitas de otros insectos que también producen polvo o galerías.',
    ],
    signs: [
      'Madera que suena hueca, se hunde o pierde resistencia al presionarla.',
      'Tubos de lodo sobre muros, cimientos o uniones cercanas al suelo.',
      'Alas descartadas junto a ventanas después de una salida de reproductores.',
      'Polvo fino, pequeñas perforaciones o superficies que se deforman.',
    ],
    treatmentIntro:
      'Revisamos la madera, los puntos de humedad y el contacto con el suelo para delimitar la actividad. Según el hallazgo, realizamos tratamiento localizado, protección de elementos de madera o una barrera en el suelo para interceptar el tránsito.',
    methods: ['Polvos Residuales', 'Aspersión'],
    recommendations: [
      'Reparar filtraciones y evitar que la madera permanezca en contacto con tierra.',
      'Mantener ventilados los espacios bajo muebles, techos y pisos de madera.',
      'No destruir los tubos antes de la inspección: ayudan a localizar el recorrido.',
    ],
    includes: [
      'Inspección de madera y suelo',
      'Delimitación de la actividad',
      'Tratamiento localizado o de barrera',
      'Seguimiento y garantía',
    ],
    faqs: [
      {
        question: '¿Todo el polvo junto a la madera significa que hay termitas?',
        answer:
          'No necesariamente. Otros insectos xilófagos producen residuos parecidos. Una inspección permite revisar el tipo de galería, la humedad, el material y los indicios antes de recomendar un tratamiento.',
      },
      {
        question: '¿El tratamiento obliga a reemplazar la madera?',
        answer:
          'El control detiene la actividad, pero una pieza con daño estructural puede necesitar reparación o sustitución. Fumcon identifica el área afectada para que el propietario tome esa decisión con información clara.',
      },
    ],
    relatedSlugs: ['hormigas', 'cucarachas', 'aranas'],
  },
  {
    slug: 'mosquitos',
    name: 'Mosquitos',
    cardDescription: 'Reducción de criaderos y control de adultos.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/enjambre-mosquitos.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vZW5qYW1icmUtbW9zcXVpdG9zLmF2aWYiLCJpYXQiOjE3NjkyMDA3MDcsImV4cCI6MTgwMDczNjcwN30.BkZIY_o6cW31prGwh_nUfRUMh4nkg75MP7Coqv_rhKM',
    imageAlt:
      'Mosquitos en vuelo para servicio de fumigación en patios y jardines',
    h1: 'Fumigación contra Mosquitos en Yucatán y Quintana Roo',
    metaTitle:
      'Control de Mosquitos en el Sureste — Inspección Gratis',
    metaDescription:
      'Fumigación contra mosquitos con nebulización, termonebulización y revisión de criaderos en Yucatán y Quintana Roo.',
    intro:
      'Reducimos mosquitos adultos y detectamos los recipientes o zonas donde se reproducen para que patios, jardines y áreas de convivencia vuelvan a ser utilizables.',
    problem: [
      'En el sureste, el calor y las lluvias permiten que el mosquito complete su ciclo en cantidades mínimas de agua estancada. Macetas, cubetas, canaletas, bebederos y desagües pueden transformarse rápidamente en criaderos.',
      'Además de las molestias por picaduras, algunas especies pueden transmitir dengue, zika y chikungunya. Una aplicación aislada reduce adultos por un tiempo, pero el control mejora cuando se acompaña con eliminación de criaderos y mantenimiento del entorno.',
    ],
    signs: [
      'Picaduras frecuentes dentro de casa o en áreas exteriores.',
      'Mayor presencia en patios y jardines al amanecer o al atardecer.',
      'Larvas visibles en recipientes, canaletas o depósitos con agua.',
      'Vegetación densa y zonas húmedas donde descansan los adultos.',
    ],
    treatmentIntro:
      'Revisamos posibles criaderos y aplicamos Nebulización en vegetación, perímetros y áreas de descanso. En patios amplios o espacios de difícil acceso podemos utilizar Termonebulización, siempre de acuerdo con la inspección y las condiciones del lugar.',
    methods: ['Nebulización', 'Termonebulización'],
    recommendations: [
      'Vaciar, cepillar o cubrir recipientes que puedan acumular agua.',
      'Limpiar canaletas y mantener podada la vegetación densa.',
      'Renovar con frecuencia el agua de bebederos y floreros.',
    ],
    includes: [
      'Revisión de criaderos',
      'Aplicación en zonas críticas',
      'Indicaciones de preparación',
      'Recomendaciones preventivas',
    ],
    faqs: [
      {
        question: '¿La fumigación elimina también los criaderos?',
        answer:
          'La aplicación controla principalmente la actividad presente. El técnico identifica recipientes y acumulaciones de agua para que puedan eliminarse o corregirse, evitando que una nueva generación mantenga el problema.',
      },
      {
        question: '¿Cuánto tiempo debo evitar el área tratada?',
        answer:
          'El tiempo depende del método, el clima y el tipo de espacio. Antes del servicio se indican la preparación y el reingreso para personas y mascotas, y después se entregan recomendaciones puntuales.',
      },
    ],
    relatedSlugs: ['garrapatas', 'aranas', 'hormigas'],
  },
  {
    slug: 'alacranes',
    name: 'Alacranes',
    cardDescription: 'Barrera perimetral y tratamiento de grietas.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/alacranes.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vYWxhY3JhbmVzLmpwZyIsImlhdCI6MTc2OTIwMDU5NywiZXhwIjoxODAwNzM2NTk3fQ.Wu62ZvypCzAq112Ik8CFfz27j7h1qMyew_bMTkEqjA8',
    imageAlt:
      'Alacrán localizado para tratamiento perimetral profesional',
    h1: 'Control de Alacranes en Yucatán y Quintana Roo',
    metaTitle: 'Control de Alacranes en Yucatán y Q. Roo',
    metaDescription:
      'Control especializado de alacranes con barrera perimetral y tratamiento de grietas en Yucatán y Quintana Roo. Atención 24/7.',
    intro:
      'Protegemos hogares, comercios y alojamientos mediante una inspección dirigida a refugios, una barrera perimetral y tratamiento puntual de grietas.',
    problem: [
      'Los alacranes buscan sitios oscuros, secos y protegidos. Pueden ocultarse entre piedras, materiales almacenados, registros, grietas, zapatos o ropa, y entrar a la vivienda por separaciones en puertas y pasos de instalaciones.',
      'Su presencia representa un riesgo que requiere especial atención en propiedades con niños y mascotas. Encontrar un ejemplar no siempre revela el origen, por eso revisamos el perímetro, los refugios cercanos y la disponibilidad de insectos que les sirven de alimento.',
    ],
    signs: [
      'Avistamientos nocturnos en patios, pasillos o habitaciones.',
      'Ejemplares en baños, registros, cuartos de servicio o zonas húmedas.',
      'Grietas en muros, zoclos y marcos que funcionan como escondite.',
      'Materiales, escombro, leña o piedras acumulados junto a la construcción.',
    ],
    treatmentIntro:
      'Creamos una barrera mediante Aspersión en puntos de ingreso y tránsito, y aplicamos Polvos Residuales dentro de grietas y hendiduras. El trabajo se concentra donde la inspección detecta condiciones favorables, sin depender de una aplicación indiscriminada.',
    methods: ['Aspersión', 'Polvos Residuales'],
    recommendations: [
      'Sacudir zapatos y ropa que permanecieron en el piso o en bodegas.',
      'Retirar escombro, leña y objetos acumulados junto a muros.',
      'Colocar sellos en puertas y reparar grietas o pasos de instalaciones.',
    ],
    includes: [
      'Inspección de refugios',
      'Barrera química perimetral',
      'Tratamiento de grietas',
      'Seguimiento profesional',
    ],
    faqs: [
      {
        question: '¿Qué hago si encuentro un alacrán dentro de casa?',
        answer:
          'Evita manipularlo con las manos y mantén alejados a niños y mascotas. Si ocurre una picadura, busca orientación médica de inmediato; el servicio de Fumcon se enfoca en localizar y controlar las condiciones de la propiedad.',
      },
      {
        question: '¿Una sola aplicación evita que vuelvan a entrar?',
        answer:
          'La barrera ayuda a reducir el ingreso, pero también es importante sellar accesos, ordenar el perímetro y disminuir otros insectos. El técnico explica el seguimiento adecuado para las condiciones encontradas.',
      },
    ],
    relatedSlugs: ['aranas', 'cucarachas', 'hormigas'],
  },
  {
    slug: 'hormigas',
    name: 'Hormigas',
    cardDescription: 'Tratamiento del nido, no solo del rastro.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/hormigas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vaG9ybWlnYXMuanBnIiwiaWF0IjoxNzY5MjA0MzM0LCJleHAiOjE4MDA3NDAzMzR9.CKFh6VGr1id9RWg_rXxrKE9MWQSJmFX_PBTnZ69XGh8',
    imageAlt:
      'Hormigas siguiendo un rastro hacia el área que requiere tratamiento',
    h1: 'Control de Hormigas en el Sureste',
    metaTitle:
      'Control de Hormigas en el Sureste — Inspección Gratis',
    metaDescription:
      'Control profesional de hormigas en cocinas, jardines y negocios del sureste con gel activo, aspersión y seguimiento.',
    intro:
      'Localizamos rutas y posibles nidos para controlar la colonia, no solamente las hormigas que aparecen sobre una superficie.',
    problem: [
      'Las colonias pueden instalarse en jardines, muros, cocinas y áreas húmedas, y enviar obreras a grandes distancias en busca de alimento. El rastro visible es solo una parte de una organización que puede tener varios refugios.',
      'Limpiar la fila o rociarla de inmediato puede dispersar temporalmente la actividad sin afectar el nido. Primero identificamos el recorrido y las condiciones que lo sostienen para elegir cebos, barreras o una combinación de métodos.',
    ],
    signs: [
      'Líneas constantes de hormigas que llegan a alacenas o recipientes.',
      'Montículos de tierra o entradas pequeñas en patios y jardines.',
      'Actividad alrededor de tuberías, marcos, contactos o grietas.',
      'Reaparición frecuente a pesar de la limpieza del área.',
    ],
    treatmentIntro:
      'Colocamos Gel Activo en rutas protegidas para que las obreras lo lleven hacia el nido. Cuando existe actividad exterior o entradas definidas, complementamos con Aspersión en perímetros y puntos seleccionados.',
    methods: ['Gel Activo', 'Aspersión'],
    recommendations: [
      'Eliminar restos dulces o grasos y limpiar derrames con frecuencia.',
      'Podar ramas que toquen la construcción y revisar macetas.',
      'Sellar grietas solo después de que el técnico delimite la ruta activa.',
    ],
    includes: [
      'Inspección de rutas y nidos',
      'Cebo focalizado',
      'Tratamiento perimetral',
      'Revisión de resultados',
    ],
    faqs: [
      {
        question: '¿Por qué puedo ver más hormigas después de colocar el gel?',
        answer:
          'El cebo busca atraer obreras para que transporten el producto hacia la colonia. No debe retirarse ni rociarse con otros productos; el técnico indica cómo observar la actividad durante el proceso.',
      },
      {
        question: '¿El mismo tratamiento funciona para cualquier hormiga?',
        answer:
          'No. Las especies cambian sus hábitos y preferencias. La ubicación del nido, el alimento disponible y el tipo de propiedad determinan la presentación y los puntos de aplicación.',
      },
    ],
    relatedSlugs: ['cucarachas', 'termitas', 'aranas'],
  },
  {
    slug: 'aranas',
    name: 'Arañas',
    cardDescription: 'Control en rincones, techos y perímetros.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/spider.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vc3BpZGVyLnBuZyIsImlhdCI6MTc2OTIwMDc0NCwiZXhwIjoxODAwNzM2NzQ0fQ.xqmsOdTRLHYopkmFrnlpmkYQyyK7G1A-7xJs6LNzWAI',
    imageAlt:
      'Araña y telaraña identificadas para control en rincones y perímetros',
    h1: 'Control de Arañas en el Sureste',
    metaTitle:
      'Control de Arañas en el Sureste — Inspección Gratis',
    metaDescription:
      'Control de arañas en techos, garajes, bodegas y perímetros de Yucatán y Quintana Roo con inspección y seguimiento.',
    intro:
      'Retiramos telarañas activas y tratamos rincones, techos y perímetros para reducir refugios y la actividad de arañas dentro y alrededor de la propiedad.',
    problem: [
      'Las arañas suelen instalarse donde encuentran calma y otros insectos: garajes, bodegas, luminarias, aleros, techos altos y rincones poco ventilados. Las telarañas recurrentes indican que el entorno sigue ofreciendo alimento y refugio.',
      'La mayoría evita el contacto, pero algunas especies requieren precaución. Un control responsable no se limita a barrer; revisa accesos, iluminación, acumulaciones y actividad de insectos para disminuir las condiciones que favorecen su regreso.',
    ],
    signs: [
      'Telarañas nuevas que reaparecen después de la limpieza.',
      'Sacos de huevos adheridos a rincones, muebles o materiales guardados.',
      'Actividad en techos altos, aleros, garajes y zonas sin ventilación.',
      'Gran cantidad de insectos cerca de luces o ventanas.',
    ],
    treatmentIntro:
      'Realizamos barrido técnico de telarañas y aplicamos Aspersión en esquinas, accesos y perímetros seleccionados. En grietas profundas podemos usar Polvos Residuales para alcanzar refugios sin sobretratar las superficies.',
    methods: ['Aspersión', 'Polvos Residuales'],
    recommendations: [
      'Retirar cajas y objetos inmóviles de rincones y bodegas.',
      'Sellar mosquiteros, marcos y grietas después del tratamiento.',
      'Reducir insectos atraídos por luces cercanas a puertas y ventanas.',
    ],
    includes: [
      'Inspección de refugios',
      'Barrido de telarañas',
      'Aplicación focalizada',
      'Seguimiento preventivo',
    ],
    faqs: [
      {
        question: '¿Fumcon identifica la especie de cualquier araña?',
        answer:
          'El técnico evalúa características visibles y el entorno para orientar el control, pero una identificación taxonómica o médica puede requerir un especialista. Ante una mordedura, se debe buscar atención médica.',
      },
      {
        question: '¿Por qué también hay que controlar otros insectos?',
        answer:
          'Las arañas permanecen donde encuentran alimento. Reducir mosquitos, hormigas, cucarachas u otros insectos ayuda a que techos y rincones sean menos favorables para una nueva actividad.',
      },
    ],
    relatedSlugs: ['alacranes', 'mosquitos', 'cucarachas'],
  },
  {
    slug: 'garrapatas',
    name: 'Garrapatas',
    cardDescription: 'Protección de patios y zonas de mascotas.',
    image:
      'https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/garrapata.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vZ2FycmFwYXRhLmpwZyIsImlhdCI6MTc2OTIwMDcxOSwiZXhwIjoxODAwNzM2NzE5fQ.q81Su61d156_Tv0725kMDQhr1RtwzYSnM_2yi0LU1GE',
    imageAlt:
      'Garrapata observada para tratamiento de patios y zonas de mascotas',
    h1: 'Control de Garrapatas en el Sureste',
    metaTitle:
      'Control de Garrapatas en el Sureste — Inspección Gratis',
    metaDescription:
      'Tratamiento profesional de garrapatas en patios, jardines y zonas de mascotas de Yucatán y Quintana Roo.',
    intro:
      'Tratamos patios, jardines, bardas y zonas de descanso de mascotas para interrumpir la infestación ambiental de garrapatas y reducir la reinfestación.',
    problem: [
      'Las garrapatas pueden llegar con perros, otros animales o materiales y después completar parte de su ciclo en grietas, pasto y áreas sombreadas. Por eso retirar los ejemplares del animal no siempre elimina los que permanecen en el entorno.',
      'Además de causar molestias, pueden transmitir enfermedades. El control de la propiedad debe coordinarse con la atención veterinaria de las mascotas para actuar sobre ambos frentes y evitar que el ciclo se mantenga.',
    ],
    signs: [
      'Ejemplares adheridos a mascotas o encontrados en sus camas.',
      'Garrapatas caminando por bardas, pisos, terrazas o muros.',
      'Actividad en pasto alto, zonas sombreadas y debajo de objetos.',
      'Reaparición poco después del aseo o del tratamiento veterinario.',
    ],
    treatmentIntro:
      'Aplicamos Aspersión en patios, perímetros, bardas y zonas de descanso, prestando atención a grietas y vegetación. La inspección define si se requieren aplicaciones programadas para acompañar las etapas del ciclo.',
    methods: ['Aspersión', 'Polvos Residuales'],
    recommendations: [
      'Consultar al veterinario para el manejo simultáneo de las mascotas.',
      'Lavar camas y textiles siguiendo las indicaciones del técnico.',
      'Podar el pasto, retirar hojarasca y despejar áreas sombreadas.',
    ],
    includes: [
      'Inspección de exteriores',
      'Tratamiento de patios y perímetros',
      'Indicaciones para zonas de mascotas',
      'Seguimiento programado',
    ],
    faqs: [
      {
        question: '¿La fumigación sustituye el tratamiento veterinario?',
        answer:
          'No. Fumcon controla el ambiente de la propiedad, mientras el veterinario atiende a la mascota. Coordinar ambas acciones ayuda a cortar el ciclo y reducir la posibilidad de reinfestación.',
      },
      {
        question: '¿Por qué puede requerirse más de una aplicación?',
        answer:
          'Los huevos y etapas ocultas pueden no estar expuestos el mismo día. El técnico define el seguimiento según la actividad, el tamaño del área, la vegetación y las condiciones observadas.',
      },
    ],
    relatedSlugs: ['mosquitos', 'aranas', 'alacranes'],
  },
] as const

export function getPestService(slug: string) {
  return PEST_SERVICES.find((service) => service.slug === slug)
}

export function getRelatedServices(service: PestService) {
  return service.relatedSlugs
    .map((slug) => getPestService(slug))
    .filter((related): related is PestService => Boolean(related))
}
