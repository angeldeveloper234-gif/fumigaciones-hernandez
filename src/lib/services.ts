/**
 * Catálogo de plagas de Fumigaciones Hernández (Tampico, Tamaulipas).
 *
 * Cada entrada es una landing de intención comercial (`/servicios/<slug>`). El listado
 * reproduce el que el propio negocio publicaba en 2018 —"Moscos · Cucarachas · Termita ·
 * Hormigas · Ratas · Pulgas · Arañas"— y usa su vocabulario local: aquí se dice *moscos*,
 * no mosquitos, y *ratas*, no roedores.
 *
 * El clima manda en la prioridad: la costa del Golfo es cálida y húmeda todo el año, así
 * que moscos, cucarachas americanas y termitas no tienen pausa invernal. Ver `hernandez_seo.md`.
 */
import { pestMedia } from '@/config/pest-media'

export type ServiceSlug =
  | 'moscos'
  | 'cucarachas'
  | 'termitas'
  | 'ratas'
  | 'hormigas'
  | 'alacranes'
  | 'pulgas'
  | 'chinches'
  | 'aranas'
  | 'garrapatas'
  | 'moscas'

export type ControlMethod =
  | 'Aspersión dirigida'
  | 'Gel Activo'
  | 'Nebulización en frío (ULV)'
  | 'Polvos Residuales'
  | 'Termonebulización'
  | 'Estaciones de cebo'
  | 'Trampeo estratégico'
  | 'Aplicación con jeringa'
  | 'Sellado de accesos'
  | 'Sanitización'

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
  /** Prioridad SEO: 1 = cabeza de estrategia, 3 = cola larga. Ordena el sitemap. */
  seoPriority: 1 | 2 | 3
}

export const CONTROL_METHODS = {
  'Aspersión dirigida':
    'Aplicación uniforme con equipo profesional sobre rodapiés, grietas y rutas de paso, creando una barrera residual donde la plaga se desplaza.',
  'Gel Activo':
    'Cebos de alta atracción en puntos protegidos que la colonia transporta a su refugio, sin saturar el ambiente ni exponer a personas o mascotas.',
  'Nebulización en frío (ULV)':
    'Distribución homogénea de partículas finas que alcanza espacios aéreos y áreas de difícil acceso sin dejar residuos excesivos.',
  'Polvos Residuales':
    'Tratamiento de grietas, hendiduras y registros eléctricos que conserva su acción durante semanas en refugios donde no llega el líquido.',
  Termonebulización:
    'Niebla caliente de alta penetración para patios, jardines, bodegas y exteriores amplios donde la plaga se refugia fuera de alcance.',
  'Estaciones de cebo':
    'Dispositivos cerrados y rotulados en rutas de ratas, seguros frente a niños y mascotas, que permiten controlar y monitorear la actividad.',
  'Trampeo estratégico':
    'Monitoreo con trampas ubicadas según el recorrido detectado, para medir la actividad real y confirmar cuándo el control está logrado.',
  'Aplicación con jeringa':
    'Tratamiento puntual y milimétrico en grietas, uniones de muebles y costuras donde se alojan huevos y ninfas.',
  'Sellado de accesos':
    'Corrección de aberturas, drenajes y pasos detectados en la inspección para impedir el reingreso una vez controlada la plaga.',
  Sanitización:
    'Desinfección para eliminar bacterias, virus y hongos tras el control de la plaga, dejando un ambiente limpio y saludable.',
} as const

export const PEST_SERVICES: readonly PestService[] = [
  {
    slug: 'moscos',
    name: 'Moscos',
    cardDescription: 'Nebulización y eliminación de criaderos.',
    image: pestMedia['moscos'].src,
    imageAlt: pestMedia['moscos'].alt,
    h1: 'Fumigación de Moscos en Tampico, Madero y Altamira',
    metaTitle: 'Fumigación de Moscos en Tampico | Patios y Jardines',
    metaDescription:
      'Control de moscos en Tampico, Ciudad Madero y Altamira. Nebulización de patios y jardines más eliminación de criaderos. Atención 24 horas.',
    intro:
      'En la zona conurbada el mosco no tiene temporada baja: el calor y la humedad del Golfo le permiten reproducirse todo el año, y las lluvias multiplican los criaderos. Reducimos la población adulta con nebulización y atacamos el origen, que es el agua estancada.',
    problem: [
      'Tampico, Madero y Altamira combinan lagunas, esteros, el río Pánuco y una temporada de lluvias larga. Es un entorno donde el mosco encuentra agua permanentemente, y bastan unos milímetros en un plato de maceta, una cubeta, una llanta o un registro destapado para que se complete un ciclo de reproducción.',
      'Además del zumbido y las picaduras, aquí hay un componente sanitario real: el mosco *Aedes aegypti* es vector de dengue, zika y chikungunya, y está presente en toda la región. Por eso el control no es solo una cuestión de comodidad.',
      'Nebulizar sin eliminar criaderos da un alivio de días. La población se repone desde las larvas que ya estaban en desarrollo en el propio patio o en el del vecino.',
    ],
    signs: [
      'Picaduras al amanecer y al atardecer, sobre todo en patios, jardines y terrazas.',
      'Zumbido nocturno en habitaciones pese a tener mosquiteros.',
      'Larvas visibles moviéndose en cubetas, tinacos destapados, floreros o platos de maceta.',
      'Aumento notorio de actividad en los días siguientes a una lluvia fuerte.',
    ],
    treatmentIntro:
      'Aplicamos Termonebulización o Nebulización en frío según el espacio para abatir la población adulta, y tratamos con Aspersión dirigida la vegetación y las zonas de reposo donde el mosco pasa el día. Durante la inspección identificamos y señalamos cada criadero para su eliminación.',
    methods: [
      'Termonebulización',
      'Nebulización en frío (ULV)',
      'Aspersión dirigida',
    ],
    recommendations: [
      'Vaciar y voltear cubetas, macetas, llantas y cualquier recipiente que junte agua tras la lluvia.',
      'Tapar tinacos y cisternas, y limpiar canaletas y registros con agua detenida.',
      'Cambiar cada tercer día el agua de bebederos de mascotas y floreros.',
      'Revisar el patio después de cada lluvia: es cuando aparecen los criaderos nuevos.',
    ],
    includes: [
      'Inspección de criaderos',
      'Nebulización de áreas exteriores',
      'Tratamiento de vegetación',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿Cuánto dura el efecto de la nebulización contra moscos?',
        answer:
          'La reducción de adultos es inmediata. El efecto residual depende del sol y de la lluvia, que en esta región lo acortan. Para que el resultado se sostenga hay que eliminar los criaderos: si siguen activos, la población se repone en poco tiempo.',
      },
      {
        question: '¿El servicio ayuda contra el mosco del dengue?',
        answer:
          'Sí. El tratamiento reduce la población adulta de *Aedes aegypti* y, sobre todo, elimina los criaderos donde se reproduce, que es la medida más eficaz. Aun así, el control del dengue es comunitario: conviene que los patios vecinos hagan lo mismo.',
      },
      {
        question: '¿Puedo estar en casa durante la aplicación?',
        answer:
          'Durante la nebulización el área tratada debe quedar despejada. El técnico indica antes de empezar cuánto tiempo hay que ventilar y a partir de qué momento se puede reingresar con seguridad.',
      },
    ],
    relatedSlugs: ['moscas', 'cucarachas', 'aranas'],
    seoPriority: 1,
  },
  {
    slug: 'cucarachas',
    name: 'Cucarachas',
    cardDescription: 'Eliminamos la colonia, no solo lo que se ve.',
    image: pestMedia['cucarachas'].src,
    imageAlt: pestMedia['cucarachas'].alt,
    h1: 'Fumigación de Cucarachas en Tampico, Madero y Altamira',
    metaTitle: 'Fumigación de Cucarachas en Tampico | Zona Conurbada',
    metaDescription:
      'Elimina cucarachas en Tampico, Ciudad Madero y Altamira. Gel activo y aspersión que alcanzan a la colonia completa. Atención 24 horas.',
    intro:
      'La cucaracha que ve de día es señal de que la colonia ya está establecida. Tratamos los refugios donde se reproduce —drenajes, registros, motores de electrodomésticos y uniones de muebles— para cortar el ciclo, no solo la actividad visible.',
    problem: [
      'El clima del Golfo favorece a la cucaracha americana, la grande que vuela y que aquí sale de drenajes, coladeras y registros. A diferencia de otras regiones donde la actividad baja en invierno, en la zona conurbada se mantiene todo el año.',
      'Su vía de entrada más común es el drenaje: suben por tuberías y coladeras, sobre todo de noche y después de lluvias fuertes, cuando el sistema se satura. Por eso una casa impecable puede tener cucarachas sin que haya nada que reprocharle a la limpieza.',
      'El aerosol de supermercado mata al ejemplar que toca y dispersa al resto hacia otros refugios. Las ootecas —las cápsulas de huevos— resisten los insecticidas de contacto, así que a los pocos días vuelve a haber actividad.',
    ],
    signs: [
      'Ejemplares grandes saliendo de coladeras, tarjas o registros por la noche.',
      'Manchas oscuras tipo puntos de tinta en esquinas de alacenas y detrás de la estufa.',
      'Olor dulzón y persistente en cocina, bajo el fregadero o en cuartos de servicio.',
      'Ootecas pegadas en bisagras, motores del refrigerador y uniones de melamina.',
    ],
    treatmentIntro:
      'Aplicamos Gel Activo en los puntos protegidos donde la colonia se alimenta y se refugia, con Aspersión dirigida en rutas de paso y Polvos Residuales en registros eléctricos. Tratamos además coladeras y drenajes, que en esta zona son la vía de entrada principal.',
    methods: ['Gel Activo', 'Aspersión dirigida', 'Polvos Residuales'],
    recommendations: [
      'Tapar coladeras y drenajes por la noche, que es cuando suben.',
      'Guardar alimentos y croquetas en recipientes herméticos; no dejar trastes con residuo.',
      'Corregir fugas y secar tarjas: sin agua disponible el cebo resulta mucho más atractivo.',
      'No limpiar con cloro sobre los puntos de gel: lo desactiva y anula el tratamiento.',
    ],
    includes: [
      'Inspección de focos y drenajes',
      'Aplicación profesional',
      'Revisión de resultados',
      'Seguimiento del tratamiento',
    ],
    faqs: [
      {
        question: '¿Tengo que salir de mi casa durante la fumigación?',
        answer:
          'En tratamientos con gel y aplicación dirigida normalmente no hace falta. El técnico indica antes de empezar el tiempo de reingreso según el método aplicado y si hay bebés, personas con asma o mascotas en el domicilio.',
      },
      {
        question: '¿Por qué salen cucarachas del drenaje aunque limpie a diario?',
        answer:
          'Porque no vienen de dentro de la casa: suben desde el sistema de drenaje, sobre todo de noche y tras lluvias fuertes. La limpieza no lo evita. El tratamiento incluye coladeras, registros y puntos de entrada, que es donde está el problema.',
      },
      {
        question: '¿En cuánto tiempo se eliminan?',
        answer:
          'La actividad baja de forma notoria durante la primera semana y el control se completa conforme el cebo alcanza a toda la colonia. En infestaciones altas programamos una revisión de refuerzo.',
      },
    ],
    relatedSlugs: ['ratas', 'hormigas', 'moscas'],
    seoPriority: 1,
  },
  {
    slug: 'termitas',
    name: 'Termitas',
    cardDescription: 'Protección de madera y estructuras.',
    image: pestMedia['termitas'].src,
    imageAlt: pestMedia['termitas'].alt,
    h1: 'Control de Termitas en Tampico, Madero y Altamira',
    metaTitle: 'Control de Termitas en Tampico | Protección de Madera',
    metaDescription:
      'Tratamiento contra termitas en Tampico, Madero y Altamira. Protección de madera, marcos y estructuras en clima húmedo. Inspección y atención 24 h.',
    intro:
      'La humedad constante del Golfo hace de esta región una de las más expuestas del país a la termita. Trabaja desde dentro de la madera y el daño se descubre cuando ya es estructural: la inspección temprana evita una reparación cara.',
    problem: [
      'Calor, humedad alta todo el año y mucha construcción con madera —especialmente en el centro histórico de Tampico— crean condiciones ideales para la termita subterránea. No es una plaga ocasional aquí: es endémica.',
      'Consumen la madera desde el interior y dejan intacta una capa superficial. Cuando una pieza suena hueca o cede bajo presión, el daño acumulado suele llevar meses o años avanzando sin ninguna señal visible.',
      'Afectan marcos de puerta, rodapiés, vigas, muebles empotrados y closets. Las filtraciones y el contacto directo de madera con el suelo son los factores que más aceleran su instalación, y ambos son comunes en la zona.',
    ],
    signs: [
      'Madera que suena hueca al golpearla o se hunde con presión ligera.',
      'Túneles de tierra sobre muros, zócalos o cimentación.',
      'Alas desprendidas cerca de ventanas y fuentes de luz después de un enjambre.',
      'Serrín fino o pequeños orificios en marcos, muebles y rodapiés.',
    ],
    treatmentIntro:
      'Aplicamos tratamiento dirigido con Aplicación con jeringa e inyección en la madera afectada, complementado con Aspersión dirigida y barreras perimetrales en los puntos de contacto con el suelo. El plan se define tras verificar la extensión real del daño.',
    methods: [
      'Aplicación con jeringa',
      'Aspersión dirigida',
      'Polvos Residuales',
      'Sellado de accesos',
    ],
    recommendations: [
      'Corregir filtraciones y humedad en muros y pisos, que es lo que más las atrae.',
      'Evitar el contacto directo de madera y muebles con el suelo o con muros húmedos.',
      'Revisar periódicamente marcos, rodapiés y closets empotrados.',
      'No retirar los túneles de tierra antes de la inspección: son evidencia útil para el diagnóstico.',
    ],
    includes: [
      'Inspección estructural',
      'Tratamiento dirigido de madera',
      'Barrera perimetral',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿Por qué hay tantas termitas en Tampico?',
        answer:
          'Por el clima. La humedad alta y sostenida durante todo el año, sumada a construcción con elementos de madera y a filtraciones frecuentes, crea condiciones ideales para la termita subterránea. Es una de las plagas más habituales de la zona conurbada.',
      },
      {
        question: '¿Cómo sé si el daño es estructural?',
        answer:
          'Solo la inspección lo determina. El técnico revisa marcos, rodapiés, vigas y puntos de contacto con el suelo, y evalúa la extensión real. A partir de ahí se define si basta el tratamiento dirigido o hay que contemplar reparación.',
      },
      {
        question: '¿El tratamiento daña los muebles?',
        answer:
          'No. Se aplican productos específicos mediante inyección puntual en orificios milimétricos y aspersión controlada, sin manchar ni afectar el acabado. En mobiliario de valor el técnico prueba primero en una zona no visible.',
      },
    ],
    relatedSlugs: ['hormigas', 'cucarachas', 'aranas'],
    seoPriority: 1,
  },
  {
    slug: 'ratas',
    name: 'Ratas y ratones',
    cardDescription: 'Estaciones seguras y sellado de accesos.',
    image: pestMedia['ratas'].src,
    imageAlt: pestMedia['ratas'].alt,
    h1: 'Control de Ratas y Ratones en Tampico, Madero y Altamira',
    metaTitle: 'Control de Ratas en Tampico | Casas, Bodegas e Industria',
    metaDescription:
      'Exterminio de ratas y ratones en Tampico, Madero y Altamira. Estaciones de cebo seguras, sellado de accesos y monitoreo para casas, bodegas e industria.',
    intro:
      'En roedores no alcanza con bajar la población: mientras el acceso siga abierto, el hueco se vuelve a llenar desde afuera. Trabajamos las dos cosas a la vez, en casas, comercios, bodegas y naves industriales.',
    problem: [
      'La zona conurbada tiene una presión de roedores alta y constante: puerto, actividad logística, canales, drenaje antiguo y cercanía al agua. En Altamira, además, el movimiento continuo de mercancía y contenedores es una vía de entrada permanente.',
      'Un ratón pasa por una abertura del tamaño de una moneda y una rata por la de un puño. Si solo se envenena sin cerrar accesos, la población se repone en semanas desde el exterior.',
      'Más allá de contaminar superficies y alimentos, roen cableado —causa frecuente de cortos e incendios— y empaques. En negocios con manejo de alimentos es además un hallazgo de sanción directa en verificación sanitaria.',
    ],
    signs: [
      'Excremento oscuro con forma de grano de arroz junto a muros o tras electrodomésticos.',
      'Ruidos de carrera o roedura en plafones y entretechos durante la noche.',
      'Marcas de grasa a lo largo de rodapiés: recorren siempre la misma ruta pegados al muro.',
      'Empaques, costales o cableado roídos, y olor amoniacal en espacios cerrados.',
    ],
    treatmentIntro:
      'Instalamos Estaciones de cebo cerradas y rotuladas sobre las rutas detectadas, seguras frente a niños y mascotas, complementadas con Trampeo estratégico para medir la actividad real. El servicio se cierra con Sellado de accesos, que es lo que evita que la población vuelva a formarse.',
    methods: ['Estaciones de cebo', 'Trampeo estratégico', 'Sellado de accesos'],
    recommendations: [
      'Almacenar granos, croquetas y abarrotes en contenedores rígidos con tapa, nunca en costal directo al piso.',
      'Separar la estiba de los muros y elevarla del suelo para poder inspeccionar detrás.',
      'Cerrar bolsas de basura y no dejarlas en el patio durante la noche.',
      'Reportar de inmediato huecos nuevos por obra o humedad: son la vía de entrada más común.',
    ],
    includes: [
      'Inspección de rutas y madrigueras',
      'Estaciones cerradas y rotuladas',
      'Sellado de accesos detectados',
      'Monitoreo y seguimiento',
    ],
    faqs: [
      {
        question: '¿Las estaciones de cebo son seguras con niños o mascotas?',
        answer:
          'Sí. Se instalan estaciones cerradas con llave y rotuladas, diseñadas para que solo el roedor acceda al cebo, y se colocan en puntos fuera del alcance habitual de niños y mascotas.',
      },
      {
        question: '¿Atienden bodegas y naves del puerto industrial de Altamira?',
        answer:
          'Sí. Para industria trabajamos con programa continuo: levantamiento inicial, plano de estaciones, frecuencia de visita y reportes. Es lo que permite sostener el control donde la presión externa no se detiene.',
      },
      {
        question: '¿El servicio incluye retirar los roedores muertos?',
        answer:
          'En las revisiones programadas se retiran los ejemplares localizados en estaciones y trampas. Para casos dentro de muros o plafones, el técnico indica el procedimiento a seguir.',
      },
    ],
    relatedSlugs: ['cucarachas', 'moscas', 'hormigas'],
    seoPriority: 1,
  },
  {
    slug: 'hormigas',
    name: 'Hormigas',
    cardDescription: 'Cebo que alcanza a la reina y a la colonia.',
    image: pestMedia['hormigas'].src,
    imageAlt: pestMedia['hormigas'].alt,
    h1: 'Control de Hormigas en Tampico, Madero y Altamira',
    metaTitle: 'Control de Hormigas en Tampico y Zona Conurbada',
    metaDescription:
      'Eliminación de hormigas en casas y negocios de Tampico, Madero y Altamira. Cebo que alcanza a la reina y tratamiento perimetral. Atención 24 horas.',
    intro:
      'Romper la fila no resuelve nada: mientras la reina siga produciendo, la colonia se recompone. Usamos cebo que las obreras transportan al nido para eliminar la colonia desde dentro.',
    problem: [
      'Las hormigas entran buscando azúcar, grasa o humedad, y establecen rutas fijas por juntas de piso, marcos de ventana y tuberías. La ruta queda marcada con feromona, así que limpiar la superficie no evita que vuelvan a pasar por el mismo punto.',
      'En clima cálido y húmedo la actividad es continua y las colonias crecen rápido. En patios y jardines de la zona conurbada es frecuente encontrar varios nidos satélite conectados entre sí.',
      'Aplicar insecticida de contacto sobre la fila produce el efecto contrario al buscado: en varias especies provoca que la colonia se fragmente y forme nuevos nidos, multiplicando los puntos de actividad.',
    ],
    signs: [
      'Filas constantes hacia cocina, despensa o áreas con humedad.',
      'Montículos de tierra fina en juntas de piso, macetas o patio.',
      'Hormigas aladas dentro del inmueble, señal de colonia madura enjambrando.',
      'Actividad concentrada alrededor de fugas, lavaplatos o tuberías embebidas.',
    ],
    treatmentIntro:
      'Colocamos Gel Activo en las rutas detectadas para que las obreras lo lleven al nido y alcance a la reina, y aplicamos Aspersión dirigida en accesos perimetrales. La eliminación completa tarda unos días, y esa demora es justamente la señal de que el cebo está funcionando.',
    methods: ['Gel Activo', 'Aspersión dirigida', 'Polvos Residuales'],
    recommendations: [
      'No limpiar con desinfectante los puntos donde se colocó el cebo durante los primeros días.',
      'Guardar azúcar, miel y alimentos dulces en frascos herméticos.',
      'Revisar macetas y jardineras pegadas a muros: son punto de anidación habitual.',
      'Sellar juntas de azulejo y marcos por donde se ve entrar la fila.',
    ],
    includes: [
      'Identificación de especie y rutas',
      'Cebo dirigido a la colonia',
      'Tratamiento perimetral',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿Por qué siguen apareciendo hormigas después del tratamiento?',
        answer:
          'Es lo esperado los primeros días: el cebo debe llegar al nido para alcanzar a la reina, y mientras tanto las obreras siguen circulando. La actividad decae de forma progresiva. Si continúa pasado el plazo que indique el técnico, volvemos a revisar.',
      },
      {
        question: '¿Es seguro para mascotas?',
        answer:
          'Sí. El gel se aplica en puntos protegidos fuera del alcance de las mascotas, y el técnico señala dónde quedó cada punto de aplicación.',
      },
    ],
    relatedSlugs: ['cucarachas', 'termitas', 'moscas'],
    seoPriority: 2,
  },
  {
    slug: 'alacranes',
    name: 'Alacranes',
    cardDescription: 'Tratamiento de grietas y sellado perimetral.',
    image: pestMedia['alacranes'].src,
    imageAlt: pestMedia['alacranes'].alt,
    h1: 'Control de Alacranes en Tampico, Madero y Altamira',
    metaTitle: 'Control de Alacranes en Tampico | Casas y Patios',
    metaDescription:
      'Eliminación de alacranes en viviendas y patios de Tampico, Madero y Altamira. Tratamiento de grietas, sellado de accesos y control perimetral 24 h.',
    intro:
      'El alacrán se refugia en grietas, huecos de muro y material apilado, y entra a la vivienda buscando humedad y presa. El control combina tratamiento de refugios con sellado de las vías de acceso.',
    problem: [
      'Es de hábito nocturno y se oculta durante el día en juntas de tabique, huecos de losa, detrás de cuadros, en zapatos y bajo material almacenado. Rara vez se ve de día, lo que retrasa la detección hasta que hay un encuentro.',
      'En zonas donde la vivienda colinda con monte, terreno sin construir o áreas de cultivo —frecuente en Altamira, Aldama y la periferia de la conurbación— la probabilidad de ingreso es mucho mayor.',
      'Su presencia tiene relevancia sanitaria, especialmente en hogares con niños pequeños o adultos mayores. El escombro y el material apilado contra la construcción son el factor que más veces encontramos detrás de una reinfestación.',
    ],
    signs: [
      'Avistamientos nocturnos en muros, techos o cerca de fuentes de luz.',
      'Presencia recurrente en cocheras, bodegas, patios o cuartos de servicio.',
      'Grietas en muros, huecos de losa y juntas de tabique sin sellar.',
      'Material apilado, escombro o leña pegados a la construcción.',
    ],
    treatmentIntro:
      'Aplicamos Polvos Residuales y Aspersión dirigida en grietas, juntas, huecos y perímetro, con atención especial a accesos de tuberías y registros. El Sellado de accesos es determinante: sin cerrar las vías de entrada, el tratamiento pierde efecto con el tiempo.',
    methods: ['Polvos Residuales', 'Aspersión dirigida', 'Sellado de accesos'],
    recommendations: [
      'Sacudir zapatos, ropa y ropa de cama antes de usarlos.',
      'Separar camas de los muros y evitar cortinas o faldones que toquen el piso.',
      'Retirar escombro, leña y material apilado pegado a la construcción.',
      'Sellar grietas, coladeras y pasos de tubería hacia el exterior.',
    ],
    includes: [
      'Inspección de grietas y refugios',
      'Tratamiento residual perimetral',
      'Sellado de accesos detectados',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿El tratamiento es seguro con niños en casa?',
        answer:
          'Sí. Se aplican productos en grietas y puntos protegidos, fuera del alcance directo. El técnico indica el tiempo de reingreso y qué áreas conviene ventilar antes de volver a ocuparlas.',
      },
      {
        question: '¿Qué hago si me pica un alacrán?',
        answer:
          'Vaya al médico de inmediato y siga lo que le indiquen ahí. No corte ni succione, y no aplique sustancias caseras. El control de plagas atiende la propiedad, pero no sustituye la valoración médica ni debe retrasarla.',
      },
      {
        question: '¿Cada cuánto conviene repetir el servicio?',
        answer:
          'En zonas con presión alta —monte cercano, terreno baldío, escombro— conviene mantenimiento periódico. La frecuencia la define el técnico según lo observado en la inspección.',
      },
    ],
    relatedSlugs: ['aranas', 'cucarachas', 'ratas'],
    seoPriority: 2,
  },
  {
    slug: 'pulgas',
    name: 'Pulgas',
    cardDescription: 'Tratamiento de pisos, textiles y mascota.',
    image: pestMedia['pulgas'].src,
    imageAlt: pestMedia['pulgas'].alt,
    h1: 'Fumigación contra Pulgas en Tampico, Madero y Altamira',
    metaTitle: 'Eliminar Pulgas en Casa | Tampico y Zona Conurbada',
    metaDescription:
      'Eliminación de pulgas en viviendas de Tampico, Madero y Altamira. Tratamiento de pisos, alfombras y textiles, seguro para mascotas. Atención 24 h.',
    intro:
      'La pulga que ve sobre la mascota es la parte más chica del problema: la mayor parte son huevos, larvas y pupas repartidos por pisos, textiles y juntas. El tratamiento tiene que ir al inmueble, no solo al animal.',
    problem: [
      'Las pulgas depositan huevos que caen de la mascota y se distribuyen por toda la vivienda: tapetes, sillones, camas y juntas de piso. Ahí se desarrollan hasta convertirse en adultos que vuelven a saltar sobre personas y animales.',
      'El calor y la humedad de la región aceleran el ciclo: lo que en clima seco tarda semanas, aquí puede completarse mucho más rápido, y por eso las infestaciones crecen tan deprisa.',
      'La fase de pupa resiste los insecticidas y puede permanecer inactiva hasta detectar vibración o calor. Por eso una casa aparentemente tratada vuelve a tener pulgas cuando se retoma el uso normal de las habitaciones.',
    ],
    signs: [
      'Picaduras en tobillos y piernas, sobre todo al caminar descalzo.',
      'La mascota se rasca, muerde la base de la cola o presenta puntos negros en el pelaje.',
      'Puntos oscuros que se vuelven rojizos al humedecerse sobre la cama de la mascota.',
      'Pulgas saltando al mover tapetes, cojines o al regresar de un viaje.',
    ],
    treatmentIntro:
      'Aplicamos Aspersión dirigida sobre pisos, rodapiés, textiles y áreas de descanso de la mascota, con Polvos Residuales en juntas y zonas de difícil acceso. Se programa una segunda aplicación para alcanzar a los adultos que emergen de las pupas.',
    methods: ['Aspersión dirigida', 'Polvos Residuales', 'Nebulización en frío (ULV)'],
    recommendations: [
      'Aspirar a fondo antes del servicio, incluidas juntas y bajo muebles, y desechar la bolsa fuera de la casa.',
      'Lavar textiles y camas de mascota en agua caliente.',
      'Coordinar en paralelo la desparasitación con el veterinario: sin eso, la reinfestación es cuestión de días.',
      'Caminar por las áreas tratadas los días siguientes: la vibración hace emerger a las pupas y las expone al producto.',
    ],
    includes: [
      'Inspección de focos y textiles',
      'Tratamiento de pisos y mobiliario',
      'Segunda aplicación programada',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿El producto es seguro para mi perro o gato?',
        answer:
          'Sí. La mascota debe permanecer fuera del área durante la aplicación y hasta el secado; el técnico indica el tiempo exacto antes de comenzar.',
      },
      {
        question: '¿Es necesario desparasitar también a la mascota?',
        answer:
          'Sí, y es imprescindible. Nosotros tratamos el inmueble, que es donde está la mayoría de la población; el tratamiento del animal corresponde al veterinario. Si solo se hace uno de los dos, la infestación regresa.',
      },
    ],
    relatedSlugs: ['garrapatas', 'chinches', 'moscas'],
    seoPriority: 2,
  },
  {
    slug: 'chinches',
    name: 'Chinches de cama',
    cardDescription: 'Tratamiento de colchón, base y perímetro.',
    image: pestMedia['chinches'].src,
    imageAlt: pestMedia['chinches'].alt,
    h1: 'Eliminación de Chinches de Cama en Tampico y Madero',
    metaTitle: 'Eliminar Chinches de Cama en Tampico | Servicio Urgente',
    metaDescription:
      'Eliminación de chinches de cama en Tampico, Madero y Altamira. Tratamiento de colchón, base y costuras con segunda aplicación. Atención 24 horas.',
    intro:
      'Las chinches no se van solas ni con remedios caseros. Requieren un tratamiento que alcance huevos, ninfas y adultos en cada costura, unión y grieta del dormitorio, con una segunda aplicación programada para romper el ciclo completo.',
    problem: [
      'La chinche de cama se transporta en maletas, ropa, muebles de segunda mano y mudanzas. No tiene relación con la limpieza del hogar: aparece igual en vivienda nueva que antigua, y en hoteles de cualquier categoría.',
      'Se esconde a milímetros de donde duermes: costuras del colchón, bastidor, cabecera, contactos eléctricos y rodapiés. Un huevo resiste la mayoría de los insecticidas de contacto, por eso un solo tratamiento superficial casi nunca resuelve.',
      'En una zona con movimiento turístico y de negocios como la conurbación, la vía de entrada más común sigue siendo el equipaje.',
    ],
    signs: [
      'Picaduras en línea o en grupo, sobre brazos, piernas, cuello y espalda, al despertar.',
      'Puntos de sangre o manchas oscuras en sábanas y costuras del colchón.',
      'Pieles mudadas translúcidas y huevos blancos diminutos en uniones de la base de cama.',
      'Olor dulzón intenso en el dormitorio cuando la infestación está avanzada.',
    ],
    treatmentIntro:
      'Combinamos Aplicación con jeringa en costuras, uniones y grietas con Aspersión dirigida sobre bastidor, rodapiés y mobiliario, más Polvos Residuales en contactos y huecos. El protocolo contempla una segunda visita para eliminar las ninfas que eclosionan después de la primera aplicación.',
    methods: [
      'Aplicación con jeringa',
      'Aspersión dirigida',
      'Polvos Residuales',
      'Trampeo estratégico',
    ],
    recommendations: [
      'No mover colchones ni muebles a otras habitaciones: es la forma más rápida de extender la infestación.',
      'Lavar ropa de cama y textiles a más de 60 °C y secar en secadora caliente.',
      'No tirar el colchón antes de la inspección: en la mayoría de los casos se recupera.',
      'No aplicar insecticida en aerosol: dispersa a las chinches hacia otros cuartos.',
    ],
    includes: [
      'Inspección de dormitorio y mobiliario',
      'Tratamiento de colchón, base y perímetro',
      'Segunda aplicación programada',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿Cuántas visitas se necesitan para eliminar chinches?',
        answer:
          'El protocolo estándar contempla dos aplicaciones. La primera elimina adultos y ninfas presentes; la segunda alcanza a las que eclosionan de huevos ya puestos. En infestaciones severas puede requerirse una tercera revisión.',
      },
      {
        question: '¿Tengo que tirar mi colchón?',
        answer:
          'En la mayoría de los casos no. El colchón se trata en costuras y uniones. Tirarlo sin tratar el resto del dormitorio no resuelve nada, porque las chinches también están en la base, la cabecera y los rodapiés.',
      },
      {
        question: '¿Las chinches aparecen por falta de limpieza?',
        answer:
          'No. Llegan transportadas en maletas, ropa, mochilas o muebles usados, y se instalan igual en una vivienda impecable. La limpieza ayuda a detectarlas antes, pero no las previene.',
      },
    ],
    relatedSlugs: ['pulgas', 'garrapatas', 'cucarachas'],
    seoPriority: 2,
  },
  {
    slug: 'aranas',
    name: 'Arañas',
    cardDescription: 'Control perimetral y retiro de telarañas.',
    image: pestMedia['aranas'].src,
    imageAlt: pestMedia['aranas'].alt,
    h1: 'Control de Arañas en Tampico, Madero y Altamira',
    metaTitle: 'Control de Arañas en Tampico y Zona Conurbada',
    metaDescription:
      'Eliminación de arañas en viviendas y negocios de Tampico, Madero y Altamira. Tratamiento perimetral, retiro de telarañas y control de sus presas.',
    intro:
      'Las arañas se instalan donde hay presa disponible. El control combina tratamiento perimetral y retiro de telarañas con la reducción de los insectos que las atraen al inmueble.',
    problem: [
      'Buscan rincones sin corriente de aire y con paso de insectos: cocheras, bodegas, entretechos, esquinas altas y detrás de muebles poco movidos. Su presencia suele indicar que hay otra plaga alimentándolas.',
      'La abundancia de moscos e insectos voladores propia de esta región les garantiza alimento constante, y por eso reaparecen con facilidad si no se reduce también esa población.',
      'Algunas especies presentes en la zona, como la viuda negra y la violinista, tienen relevancia sanitaria y aparecen en zonas de almacenamiento, escombro y patios. Su identificación cambia el manejo del servicio.',
    ],
    signs: [
      'Telarañas recurrentes en esquinas altas, cocheras, bodegas y ventanas.',
      'Sacos de huevos adheridos a muros, techos o bajo mobiliario.',
      'Presencia de otros insectos, que son su fuente de alimento.',
      'Ejemplares en zonas de escombro, leña o material almacenado.',
    ],
    treatmentIntro:
      'Aplicamos Aspersión dirigida en el perímetro, marcos, esquinas y accesos, con Polvos Residuales en huecos y entretechos, y retiramos telarañas y sacos de huevos. Al reducir en paralelo los insectos de los que se alimentan, la reinstalación es mucho menos probable.',
    methods: ['Aspersión dirigida', 'Polvos Residuales', 'Sellado de accesos'],
    recommendations: [
      'Retirar escombro, cartón y material apilado en cocheras y patios.',
      'Mantener despejadas las esquinas altas y ventilar espacios cerrados.',
      'Sellar rendijas de puertas y ventanas hacia el exterior.',
      'Avisar al técnico si se detecta una especie de importancia sanitaria.',
    ],
    includes: [
      'Inspección y reconocimiento de especie',
      'Tratamiento perimetral',
      'Retiro de telarañas y sacos',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿Cómo sé si es una araña peligrosa?',
        answer:
          'La identificación la hace el técnico durante la inspección. Especies como la viuda negra y la violinista requieren un manejo específico del área donde se localizan. Si sospechas de una de ellas, no la manipules y avísanos.',
      },
      {
        question: '¿El tratamiento evita que vuelvan las telarañas?',
        answer:
          'El tratamiento perimetral reduce mucho la reinstalación, pero el factor determinante es el alimento disponible. Por eso el servicio contempla también el control de los insectos que las atraen.',
      },
    ],
    relatedSlugs: ['alacranes', 'moscos', 'cucarachas'],
    seoPriority: 3,
  },
  {
    slug: 'garrapatas',
    name: 'Garrapatas',
    cardDescription: 'Control en patios, grietas y zonas de mascota.',
    image: pestMedia['garrapatas'].src,
    imageAlt: pestMedia['garrapatas'].alt,
    h1: 'Control de Garrapatas en Tampico, Madero y Altamira',
    metaTitle: 'Control de Garrapatas en Tampico | Patios y Ranchos',
    metaDescription:
      'Eliminación de garrapatas en patios, viviendas y ranchos de Tampico, Madero, Altamira y Pánuco. Tratamiento de grietas y zonas de mascotas.',
    intro:
      'La garrapata pasa la mayor parte de su vida fuera del animal: en grietas de muro, juntas de piso, bardas y zonas de sombra. El control efectivo trata esos refugios, no solo a la mascota.',
    problem: [
      'La garrapata café del perro es la más común en viviendas de la región y completa su ciclo entero dentro del inmueble. Sube por muros y se refugia en grietas altas, marcos de puerta y detrás de rodapiés.',
      'El calor y la humedad aceleran su desarrollo, y en zonas rurales o con presencia de ganado —Pánuco, Aldama y la periferia— la presión es todavía mayor.',
      'Una hembra deposita miles de huevos en una sola postura. Por eso un patio que parecía controlado presenta reinfestación masiva pocas semanas después si no se trataron los refugios donde estaban las posturas.',
    ],
    signs: [
      'Garrapatas trepando por muros, bardas o marcos de puerta, incluso lejos de la mascota.',
      'Grupos de huevos en grietas, uniones de muro y bajo objetos del patio.',
      'La mascota presenta garrapatas recurrentes pese a tratamientos veterinarios.',
      'Ejemplares dentro de la vivienda, en rodapiés o esquinas de habitaciones.',
    ],
    treatmentIntro:
      'Tratamos con Aspersión dirigida el perímetro, patio, bardas y zonas de descanso del animal, reforzando con Polvos Residuales las grietas y uniones donde se alojan las posturas. Se programa seguimiento para cortar el ciclo antes de que eclosione la siguiente generación.',
    methods: ['Aspersión dirigida', 'Polvos Residuales', 'Termonebulización'],
    recommendations: [
      'Retirar escombro, macetas en desuso y objetos apilados del patio.',
      'Podar y despejar vegetación pegada a muros y bardas.',
      'Coordinar el tratamiento del animal con el veterinario en paralelo al servicio.',
      'Lavar o desechar la cama de la mascota antes de la aplicación.',
    ],
    includes: [
      'Inspección de patio y refugios',
      'Tratamiento perimetral y de grietas',
      'Revisión de seguimiento',
      'Indicaciones para mascotas',
    ],
    faqs: [
      {
        question: '¿Por qué hay garrapatas si mi perro está desparasitado?',
        answer:
          'Porque la mayor parte de la población no está sobre el animal, sino en las grietas y refugios del inmueble. El tratamiento veterinario protege a la mascota, pero no elimina los huevos ni las ninfas alojadas en muros, patio y rodapiés.',
      },
      {
        question: '¿Atienden ranchos y corrales?',
        answer:
          'Sí, en Pánuco, Aldama y la zona rural. En propiedades con ganado coordinamos el tratamiento del inmueble y las áreas de descanso de los animales, con indicaciones claras de reingreso.',
      },
    ],
    relatedSlugs: ['pulgas', 'chinches', 'aranas'],
    seoPriority: 3,
  },
  {
    slug: 'moscas',
    name: 'Moscas',
    cardDescription: 'Control del foco de reproducción y trampeo.',
    image: pestMedia['moscas'].src,
    imageAlt: pestMedia['moscas'].alt,
    h1: 'Control de Moscas en Tampico, Madero y Altamira',
    metaTitle: 'Control de Moscas en Tampico | Negocios y Casas',
    metaDescription:
      'Control de moscas en restaurantes, comedores y viviendas de Tampico, Madero y Altamira. Eliminación del foco de reproducción y trampeo. Atención 24 h.',
    intro:
      'Matar moscas adultas no reduce la población: por cada adulto visible hay decenas de larvas desarrollándose en un foco cercano. El control empieza por localizar y eliminar ese foco.',
    problem: [
      'La mosca doméstica se reproduce en materia orgánica en descomposición: basura acumulada, coladeras con grasa, registros de drenaje, residuos de patio. Con el calor de la región un solo foco activo repone la población en cuestión de días.',
      'En negocios con manejo de alimentos, la presencia de moscas es un hallazgo directo en verificación sanitaria y un motivo frecuente de queja de clientes. Además son vector mecánico de contaminación entre residuos y superficies de trabajo.',
      'En temporada de calor y tras las lluvias la actividad se dispara, sobre todo cerca de zonas con residuos o agua detenida.',
    ],
    signs: [
      'Actividad concentrada alrededor de coladeras, contenedores de basura o áreas de lavado.',
      'Puntos oscuros de mosca en techos, lámparas, azulejo y superficies claras.',
      'Larvas visibles en registros, tarjas o bajo contenedores.',
      'Aumento repentino de actividad tras días cálidos o lluvia.',
    ],
    treatmentIntro:
      'Localizamos y tratamos el foco de reproducción —coladeras, registros, contenedores— con Aspersión dirigida y Sanitización, y controlamos la población adulta con Trampeo estratégico y Nebulización en frío según el tipo de espacio.',
    methods: [
      'Aspersión dirigida',
      'Nebulización en frío (ULV)',
      'Trampeo estratégico',
      'Sanitización',
    ],
    recommendations: [
      'Mantener contenedores de basura tapados y lavarlos, no solo cambiarles la bolsa.',
      'Limpiar coladeras y registros con desengrasante: la película de grasa es criadero directo.',
      'Instalar mosquiteros y cortinas de aire en accesos de cocina.',
      'Retirar residuos orgánicos al cierre de la jornada, sin dejarlos pernoctar dentro.',
    ],
    includes: [
      'Localización del foco de reproducción',
      'Tratamiento y sanitización de focos',
      'Trampeo y control de adultos',
      'Revisión de seguimiento',
    ],
    faqs: [
      {
        question: '¿Sirve para restaurantes y comedores?',
        answer:
          'Sí. Es uno de los servicios que más solicitan los giros de alimentos. Trabajamos en horarios fuera de operación para no interrumpir el servicio del negocio.',
      },
      {
        question: '¿Por qué vuelven las moscas a los pocos días?',
        answer:
          'Porque quedó activo el foco de reproducción. Si solo se eliminan los adultos, las larvas que ya estaban en desarrollo emergen y repueblan el espacio. Por eso la inspección se centra en localizar y tratar el criadero.',
      },
    ],
    relatedSlugs: ['moscos', 'cucarachas', 'ratas'],
    seoPriority: 3,
  },
]

/**
 * Servicios por tipo de inmueble — así los presentaba el propio negocio en 2019
 * ("Fumigación de Casas / Comercios / Industrias").
 */
export const BUSINESS_SERVICES = [
  {
    slug: 'casas',
    name: 'Fumigación de casas',
    description:
      'Control y exterminio de plagas en hogares, con tratamiento adaptado al tamaño del inmueble: número de pisos, habitaciones y áreas exteriores como jardín, patio y cochera.',
    audience: ['Casas', 'Departamentos', 'Viviendas con patio', 'Fraccionamientos'],
  },
  {
    slug: 'comercios',
    name: 'Fumigación de comercios',
    description:
      'Servicio para locales, restaurantes, oficinas y tiendas que necesitan mantener un ambiente limpio y saludable, con aplicaciones en horarios fuera de operación.',
    audience: ['Restaurantes', 'Oficinas', 'Tiendas', 'Hoteles'],
  },
  {
    slug: 'industrias',
    name: 'Fumigación de industrias',
    description:
      'Programas de control para naves, bodegas y patios de maniobras, con monitoreo continuo y registro de servicio. Cobertura en el puerto industrial de Altamira.',
    audience: ['Naves industriales', 'Bodegas', 'Patios de maniobras', 'Almacenes'],
  },
] as const

export function getPestService(slug: string) {
  return PEST_SERVICES.find((service) => service.slug === slug)
}

/**
 * Imagen de Open Graph de cada servicio.
 *
 * Antes apuntaba a `/images/og/pests/<slug>.webp`: once archivos que eran
 * byte a byte los del sitio hermano. Ahora son recortes 1200x630 derivados de
 * la foto propia de cada plaga, que es lo que declara `seo.ts`.
 */
export function getServiceOgImage(slug: ServiceSlug) {
  return `/images/og/pests/${slug}.jpg`
}

export function getRelatedServices(service: PestService) {
  return service.relatedSlugs
    .map((slug) => getPestService(slug))
    .filter((related): related is PestService => Boolean(related))
}

/** Plagas ordenadas por prioridad SEO — para destacar en home, menús y sitemap. */
export function getServicesByPriority() {
  return [...PEST_SERVICES].sort((a, b) => a.seoPriority - b.seoPriority)
}
