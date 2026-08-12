import type { IntersectionContent } from './types'

/**
 * Las 8 intersecciones de Ciudad Madero.
 *
 * Perfil dominante: vivienda residencial cerca del mar. La franja costera de
 * playa Miramar impone humedad y salinidad altas todo el año; el canal de la
 * Cortadura cruza la ciudad; la refinería y su entorno urbano marcan el norte;
 * y las colonias residenciales consolidadas —Árbol Grande, Obrera,
 * Universidad— son casa de una o dos plantas, con patio y cochera.
 *
 * La diferencia con Tampico es de tipo de inmueble: allá manda el local y la
 * casona antigua del centro; acá manda la casa de familia. Y la diferencia con
 * Altamira es la edad de la construcción: acá está asentada, no es obra nueva.
 *
 * La oficina de Hernández está en la Col. Obrera de Madero, así que en estas
 * ocho páginas la cercanía es un hecho y no una frase de venta.
 */

const moscos: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'moscos',
  h1: 'Moscos en Ciudad Madero: patios, canal y zona de playa',
  metaTitle: 'Fumigación de moscos en Ciudad Madero | Casas y patios',
  metaDescription:
    'Control de moscos en Ciudad Madero: patios residenciales, canal de la Cortadura y colonias cerca de Miramar. Revisión sin costo, guardia 24 horas.',
  intro: [
    'Madero es una ciudad de casas con patio, y el mosco vive de eso. No hace falta un cuerpo de agua grande: alcanza con lo que junta un patio residencial promedio entre macetas, cubetas, la pileta del perro y la lona que quedó tirada tras la última lluvia.',
    'Lo que sí agrega la ciudad es un entorno que nunca se seca. El canal de la Cortadura la cruza, la franja de Miramar mantiene humedad de mar y las colonias tienen jardines con vegetación densa que a esta plaga le sirve de dormitorio. La consecuencia práctica es que la temporada alta se estira mucho más que en el interior.',
    'Por eso el trabajo acá se plantea casa por casa. La nebulización baja lo que está volando esta noche; sacar el agua del patio es lo que decide si en dos semanas está igual o no.',
  ],
  localContext: {
    heading: 'Qué tiene el patio de Madero que sostiene la población',
    paragraphs: [
      'La casa típica de las colonias consolidadas de Madero tiene patio trasero, cochera y jardín al frente. Ese conjunto suele juntar más recipientes con agua de los que el dueño cree: platos de maceta, cubetas de lavado, tambos de reserva, llantas guardadas en la cochera, el bebedero de la mascota y la lona o el juguete que quedó a la intemperie. Cada uno es un criadero completo.',
      'La cercanía del mar cambia una cosa concreta: la humedad relativa alta hace que el agua tarde más en evaporarse. Un plato de maceta que en clima seco se secaría en dos días, en Madero puede sostener un ciclo completo. Por eso acá la regla de "revisar después de llover" se queda corta: conviene revisar aunque no haya llovido.',
      'El canal de la Cortadura y los cuerpos de agua asociados agregan presión constante en las colonias que los bordean. Ahí el mosco llega desde afuera todas las noches, y la conversación honesta es que el tratamiento reduce mucho pero no lleva a cero.',
      'Hay un punto de Madero que en Tampico pesa menos: la cisterna y el tinaco de casa unifamiliar. En vivienda residencial es muy común que la tapa esté rota, mal puesta o directamente ausente, y una cisterna destapada es el criadero más productivo que puede tener una propiedad, porque el volumen de agua es enorme y nadie lo mira.',
    ],
  },
  signs: {
    heading: 'Cómo saber si el criadero es suyo o del entorno',
    intro:
      'La diferencia importa, porque cambia qué se puede esperar del tratamiento. Estas señales apuntan a que la reproducción es en su propia casa:',
    items: [
      'Picaduras concentradas en el patio o la cochera al atardecer, y menos adentro de la casa.',
      'Larvas moviéndose a sacudones en cubetas, platos de maceta, tambos o el bebedero de la mascota.',
      'Actividad que no baja aunque hayan pasado varias semanas sin llover.',
      'Nube de moscos al mover el seto, la buganvilia o la vegetación pegada a la barda.',
      'Agua estancada en la cisterna o el tinaco al revisar la tapa.',
      'Zumbido nocturno en recámaras con mosquitero en buen estado.',
    ],
  },
  howWeWork: {
    heading: 'Qué recorre el técnico en una casa de Madero',
    paragraphs: [
      'Se revisa la propiedad completa, no solo el patio trasero: cochera, jardín delantero, azotea, cisterna y tinaco. En vivienda unifamiliar la cochera es el punto que más se pasa por alto, porque ahí se guardan llantas, cubetas y material que junta agua sin que nadie los mueva en meses.',
      'Sobre los adultos aplicamos termonebulización en patio y jardín, que penetra bien en vegetación, y nebulización en frío bajo techo. La aspersión dirigida va sobre la vegetación densa y las zonas de sombra donde el mosco pasa el día, que es lo que sostiene el efecto más allá de la primera semana.',
      'Durante la inspección marcamos cada criadero encontrado y se lo señalamos en el momento, no en un reporte posterior. La eliminación física del agua la hace el dueño y es la mitad del trabajo; si esa mitad no se hace, el resultado se cae solo.',
    ],
    checks: [
      'Cisterna y tinaco: estado y ajuste de la tapa.',
      'Cochera: llantas, cubetas, tambos y material guardado.',
      'Platos de maceta, bebederos y recipientes del patio y del jardín.',
      'Azotea, canaletas y objetos olvidados a la intemperie.',
      'Vegetación densa, setos y enredaderas de la barda.',
      'Registros del patio y coladeras sin tapa.',
    ],
  },
  faqs: [
    {
      question: 'Vivo cerca del canal de la Cortadura. ¿Sirve fumigar?',
      answer:
        'Sirve, con una expectativa realista. Colindando con un cuerpo de agua siempre va a entrar mosco desde afuera y ningún tratamiento lo evita. Lo que sí cambia mucho es que su patio deje de aportar población propia y que la vegetación donde descansan de día quede tratada. La diferencia se nota, aunque el cero no exista en esa zona.',
    },
    {
      question: '¿Por qué hay moscos si hace semanas que no llueve?',
      answer:
        'Porque en Madero la humedad del mar hace que el agua acumulada tarde mucho más en evaporarse. Un plato de maceta o una cubeta pueden sostener el ciclo completo sin una sola lluvia. Es la razón por la que acá la revisión conviene hacerla por rutina y no solo después de un aguacero.',
    },
    {
      question: '¿Revisan la cisterna?',
      answer:
        'Sí, y es de los primeros puntos. En vivienda unifamiliar la tapa rota o mal puesta es frecuentísima, y una cisterna abierta es el criadero más productivo que puede tener una casa por el volumen de agua que contiene. Solemos encontrar ahí lo que explica una infestación que el dueño no lograba entender.',
    },
    {
      question: '¿Puedo estar en la casa mientras aplican?',
      answer:
        'Durante la aplicación no, y el técnico indica el tiempo de reingreso al llegar, que depende del método y del espacio. Pregunta antes de empezar si hay bebés, personas con asma o mascotas en el domicilio, para ajustar la aplicación y el orden de las áreas. En patio y jardín el tiempo suele ser corto.',
    },
    {
      question: '¿Cada cuánto conviene repetir en Madero?',
      answer:
        'Depende del entorno más que del calendario. Una casa en colonia consolidada, con el patio ordenado y la cisterna cerrada, aguanta intervalos largos. Una propiedad pegada al canal, a un terreno baldío inundable o a la franja de playa necesita acercarse durante la temporada de lluvias. En la revisión le decimos cuál es su caso.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'garrapatas' },
    { zone: 'tampico', pest: 'moscos' },
  ],
}

const cucarachas: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'cucarachas',
  h1: 'Cucarachas en Ciudad Madero: control en vivienda',
  metaTitle: 'Fumigación de cucarachas en Ciudad Madero | Casas',
  metaDescription:
    'Control de cucarachas en Ciudad Madero: registros de patio, humedad costera y cocina de casa. Gel en cebo y sellado. Revisión sin costo.',
  intro: [
    'En Madero la cucaracha llega a la casa por dos caminos que conviene no confundir. Uno es el registro del patio y la coladera: por ahí sube la americana, la grande, que vive en el drenaje y no adentro. El otro es la bolsa del súper, la caja de cartón y el electrodoméstico usado: por ahí entra la alemana, chica y clara, que sí se queda a vivir en la cocina.',
    'La diferencia no es un detalle técnico. Una se resuelve trabajando el perímetro y cerrando accesos; la otra se resuelve con cebo adentro. Aplicar el método de una contra la otra es la causa más común de tratamientos que no funcionaron.',
    'Lo que las une acá es la humedad. En una ciudad pegada al mar, la casa tiene puntos húmedos permanentes —bajo el fregadero, en el cuarto de lavado, en el muro de la barda— y ese es el ambiente que las dos buscan.',
  ],
  localContext: {
    heading: 'Por qué en la casa de Madero encuentran dónde quedarse',
    paragraphs: [
      'La vivienda residencial de Madero tiene patio trasero con registro, cuarto de lavado y a menudo un medio baño de servicio. Esos tres puntos concentran humedad y tienen conexión directa al drenaje. Cuando el registro está sin tapa o con la tapa rota —que es lo habitual— la americana tiene entrada franca al patio y de ahí a la cocina.',
      'La salinidad y la humedad de la franja costera hacen algo que en el interior no pasa tanto: aceleran el deterioro de sellos, burletes y juntas. Un burlete de puerta que en clima seco dura años, acá se endurece y se despega antes. El resultado es una casa que va abriendo accesos con el tiempo sin que nadie haga nada.',
      'En cocina de casa de familia la alemana encuentra un escenario distinto al de un restaurante: menos volumen de comida pero más escondites estables. Detrás del refrigerador, en el motor del microondas, en la unión de la mesada con el muro, en el cajón de los cubiertos. El calor de los electrodomésticos es lo que define dónde se instala.',
      'Un frente propio de la vivienda unifamiliar es el electrodoméstico de segunda mano. Un refrigerador, una lavadora o un microondas usado es la vía de entrada más frecuente de la alemana en casa particular, porque llega con la colonia adentro del motor y nadie lo revisa antes de enchufarlo.',
    ],
  },
  signs: {
    heading: 'Qué mirar antes de comprar insecticida',
    intro:
      'Vale la pena identificar cuál de las dos es antes de tratar, porque el método cambia por completo. Estas señales orientan:',
    items: [
      'Ejemplares grandes que aparecen de noche en el baño o la cocina y vienen del patio: apunta a la americana del drenaje.',
      'Ejemplares chicos y claros dentro de alacenas, cajones o el motor de un electrodoméstico: apunta a la alemana.',
      'Manchas oscuras como puntos de tinta en esquinas de alacena, detrás de bisagras y en el canto de repisas.',
      'Ootecas: cápsulas marrones del tamaño de un grano de arroz, pegadas en juntas o bajo el filo de la mesada.',
      'Olor dulzón y rancio al abrir un mueble de cocina cerrado.',
      'Actividad alrededor del motor del refrigerador, el microondas o la lavadora.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata una casa de Madero',
    paragraphs: [
      'La visita empieza en el patio: registro, coladeras, cuarto de lavado y el paso de las tuberías por la barda. Ahí se define si hay entrada desde el drenaje y se marca qué sellar. Después se entra a la cocina y se revisa el interior de los muebles, el trasfondo del refrigerador y el motor de los electrodomésticos.',
      'Contra la americana trabajamos el perímetro y los puntos de subida con polvos residuales en grietas y registros, más el sellado de los accesos. Contra la alemana va gel en cebo, colocado en el interior de los muebles y cerca de los focos de calor: la colonia lo transporta y llega a los ejemplares que nunca salen. Rociar la cocina con aerosol es lo peor que se puede hacer con alemana, porque las dispersa a más habitaciones.',
      'En casa con niños o mascotas ajustamos dónde va cada cosa: el gel se coloca en el interior de muebles y en puntos no accesibles, y el polvo va dentro de grietas, no en superficies de contacto. El técnico pregunta esto antes de empezar, no después.',
    ],
    checks: [
      'Registro del patio, coladeras y estado de sus tapas.',
      'Cuarto de lavado, medio baño de servicio y bajo fregadero.',
      'Trasfondo y motor de refrigerador, lavadora y microondas.',
      'Interior de alacenas, cajones y unión de mesada con muro.',
      'Burletes de puertas a patio y a cochera.',
      'Paso de tuberías por la barda y juntas con la casa vecina.',
    ],
  },
  faqs: [
    {
      question: '¿Cómo sé si la mía es la del drenaje o la de la cocina?',
      answer:
        'Por el tamaño y por dónde aparece. La americana es grande, de color caoba, vuela y sale de noche cerca del baño, el patio o la coladera. La alemana es chica, clara, con dos rayas oscuras detrás de la cabeza, y vive dentro de los muebles de cocina. Si tiene duda, guarde una en un frasco: en la visita la identificamos y eso define el tratamiento.',
    },
    {
      question: 'Compré un refrigerador usado y aparecieron. ¿Puede ser de ahí?',
      answer:
        'Es una de las vías de entrada más frecuentes en casa particular. La cucaracha alemana se instala en el motor y en el aislamiento, donde hay calor constante, y el electrodoméstico llega con la colonia adentro. Si acaba de traer uno de segunda mano, dígalo en la visita: cambia por dónde empezamos a buscar.',
    },
    {
      question: '¿El registro del patio hay que taparlo siempre?',
      answer:
        'Sí, y en Madero es de las medidas que más rinden por lo poco que cuestan. Un registro sin tapa o con la tapa quebrada es entrada directa desde el drenaje al patio, y del patio a la casa hay un paso. En la inspección le marcamos cuáles están abiertos y qué medida corresponde a cada uno.',
    },
    {
      question: '¿Es seguro el gel con niños y mascotas?',
      answer:
        'Se coloca en puntos no accesibles: interior de muebles, detrás de electrodomésticos, dentro de grietas. No se aplica en superficies de contacto ni a nivel del piso donde juegue un niño o coma un animal. El técnico pregunta por bebés, personas con asma y mascotas antes de empezar, y ajusta la ubicación de cada punto.',
    },
    {
      question: '¿Por qué me dicen que no rocíe mientras dura el tratamiento?',
      answer:
        'Porque el gel funciona si las cucarachas caminan hasta él y lo llevan al refugio. Un insecticida de contacto sobre esa ruta corta el transporte y, en el caso de la alemana, provoca que se dispersen a otras habitaciones. El tratamiento tarda unos días en verse, y ese es el precio de que llegue a la colonia entera.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'ratas' },
    { zone: 'tampico', pest: 'cucarachas' },
  ],
}

const termitas: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'termitas',
  h1: 'Termitas en Ciudad Madero: madera en casa costera',
  metaTitle: 'Control de termitas en Ciudad Madero | Casa costera',
  metaDescription:
    'Termitas en Ciudad Madero: humedad salina, marcos y clósets de casa residencial. Inspección con jeringa en madera y barrera de suelo.',
  intro: [
    'La casa de Madero no tiene las vigas centenarias de una casona de Tampico, pero tiene mucha madera igual: marcos y contramarcos, puertas, clósets empotrados, muebles de cocina, pérgolas y tejabanes de patio. Y tiene algo que la vuelve especialmente vulnerable, que es la humedad permanente de estar a un paso del mar.',
    'La termita subterránea, que es la que hace el daño estructural en la zona, no necesita que la madera esté mojada. Necesita mantener contacto con la humedad del suelo, y en la franja costera de Madero ese contacto lo tiene garantizado todo el año.',
    'El problema es que trabaja de adentro hacia afuera. El marco de una puerta puede verse impecable y estar vaciado; el momento en que se hunde bajo el dedo llega mucho después de que la colonia entró.',
  ],
  localContext: {
    heading: 'Qué le facilita el trabajo a la termita en la franja costera',
    paragraphs: [
      'En Madero la construcción residencial apoya marcos y contramarcos directamente sobre la mampostería, y muchas casas tienen clósets empotrados que arrancan a nivel de piso. Ese contacto entre madera y muro, a ras del suelo, es la vía que la termita subterránea usa para llegar sin exponerse: sube por la cara interior del muro y aparece directamente dentro del clóset.',
      'La salinidad del ambiente costero deteriora sellos, pinturas y barnices más rápido que tierra adentro. Una madera con el barniz vencido absorbe humedad, y una madera húmeda es más fácil de atacar. Es un efecto indirecto pero real: el mismo clima que oxida las rejas le prepara el terreno a la termita.',
      'El patio de la casa de Madero suma su parte. Pérgolas, tejabanes, casetas de perro y jardineras de madera apoyadas sobre tierra son el punto de entrada más frecuente que encontramos, porque ahí la madera toca el suelo directamente. Desde una pérgola la colonia pasa a la estructura de la casa sin dificultad.',
      'A diferencia de Tampico, donde el daño suele estar en elementos estructurales de un siglo, acá lo más común es daño en carpintería: marcos, puertas, zócalos de madera y muebles bajos. Eso cambia el tratamiento, porque son piezas accesibles y tratables con jeringa sin desarmar la construcción.',
    ],
  },
  signs: {
    heading: 'Lo que aparece antes de que la madera ceda',
    intro:
      'La termita subterránea avisa, pero con señales discretas. En vivienda residencial estas son las primeras:',
    items: [
      'Túneles de tierra del ancho de un lápiz subiendo por la barda, un muro exterior, el poste de una pérgola o el interior de un clóset.',
      'Un marco, un zócalo o la base de un clóset que suena hueco al golpearlo con los nudillos.',
      'Pintura o barniz abombado sobre madera, como con una burbuja debajo.',
      'Alas sueltas, todas del mismo tamaño, junto a una ventana o bajo la luz del patio después de un día húmedo.',
      'Tierra fina acumulada donde el muro toca el piso, que reaparece a los días de barrerla.',
      'Puertas que empezaron a rozar o a costar, y no por hinchazón de humedad.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se revisa una casa de Madero',
    paragraphs: [
      'La inspección empieza afuera, por los puntos donde la madera toca la tierra: pérgola, tejaban, caseta, jardinera, poste de tendedero. Es donde más seguido encontramos el origen. Después se recorre el interior a nivel de piso, con foco en el arranque de los clósets empotrados, los marcos y los zócalos de madera.',
      'El tratamiento combina aplicación con jeringa directamente en la pieza afectada, que llega a las galerías internas sin desarmar el marco ni el clóset, y una barrera en el punto de contacto con el suelo, que es por donde la colonia repone. En carpintería el resultado suele ser bueno justamente porque son piezas accesibles.',
      'Sobre madera que ya perdió sección hay que ser franco: el control detiene el ataque pero la resistencia no vuelve. En un marco o un zócalo eso se resuelve con carpintería; si el daño llegó a un elemento que carga, corresponde que lo vea un estructurista.',
      'Si encuentra túneles de tierra, la recomendación es no limpiarlos antes de la visita. Ese cordón indica por dónde sube la colonia y es la información más útil que puede darle al técnico.',
    ],
    checks: [
      'Pérgola, tejaban, caseta y jardinera de madera en contacto con tierra.',
      'Arranque de clósets empotrados y muebles bajos de cocina.',
      'Marcos, contramarcos y zócalos de madera a nivel de piso.',
      'Barda y muro exterior, buscando túneles en zona de sombra.',
      'Cuarto de lavado y bajo fregadero, por la humedad permanente.',
      'Puntos de filtración y humedad de capilaridad en muros.',
    ],
  },
  faqs: [
    {
      question: '¿La cercanía del mar hace que haya más termita en Madero?',
      answer:
        'No es la sal lo que las atrae, es la humedad. El ambiente costero mantiene el suelo y el ambiente húmedos todo el año, y eso favorece a la termita subterránea, que depende del contacto con la humedad del suelo para vivir. Además acelera el deterioro de barnices y sellos, y una madera desprotegida es más fácil de atacar.',
    },
    {
      question: 'El daño está en el marco de una puerta. ¿Hay que cambiarlo?',
      answer:
        'No necesariamente. La aplicación con jeringa llega a las galerías internas y detiene el ataque sin desmontar la pieza, y en carpintería eso salva la mayoría de los casos. Lo que decide es cuánta madera queda: si el marco ya está vaciado, se trata igual para cortar la colonia y después se reemplaza la pieza.',
    },
    {
      question: 'Tengo una pérgola en el patio. ¿Es un riesgo?',
      answer:
        'Es el punto de entrada que más encontramos en casa de Madero, porque los postes suelen ir directo a tierra. Desde ahí la colonia pasa a la construcción sin dificultad. Se puede tratar y además conviene revisar cómo está resuelto el apoyo: un poste con base metálica que lo separa del suelo cambia mucho el panorama.',
    },
    {
      question: 'Vi alas sueltas en el piso del patio. ¿Ya es tarde?',
      answer:
        'No es tarde, pero sí es señal de que la colonia está madura. Las alas son de reproductores que salieron a fundar colonias nuevas, y eso ocurre cuando la original lleva tiempo establecida. Conviene inspeccionar pronto: en ese punto el daño suele estar en algún elemento, aunque todavía no se vea.',
    },
    {
      question: '¿Cuánto dura el tratamiento?',
      answer:
        'La aplicación en la madera actúa sobre lo que está adentro de la pieza. La barrera de suelo es la que evita la reposición, y su duración depende de cuánto se mueva la tierra alrededor: una obra, una excavación o un cambio de jardín la comprometen. Por eso recomendamos revisar de nuevo si hay obra en la casa o en el predio vecino.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'hormigas' },
    { zone: 'altamira', pest: 'termitas' },
  ],
}

const ratas: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'ratas',
  h1: 'Ratas y ratones en Ciudad Madero: casa, patio y barda',
  metaTitle: 'Control de ratas en Ciudad Madero | Casas y patios',
  metaDescription:
    'Desratización en Ciudad Madero: bardas, cocheras, plafón de vivienda y terrenos baldíos vecinos. Estaciones cerradas y sellado de accesos.',
  intro: [
    'En vivienda residencial el roedor casi nunca aparece porque la casa esté descuidada. Aparece porque al lado hay un terreno baldío, una obra parada o una casa deshabitada, y ese predio sostiene una población que sale a comer a las casas de alrededor. En Madero esa situación es frecuente y explica la mayoría de los casos que atendemos.',
    'La vía de entrada típica de la casa de una o dos plantas es la barda. La rata recorre el remate de la barda como una calle, salta a la cochera o al techo del cuarto de servicio, y de ahí busca un hueco en el plafón o en el paso de una instalación.',
    'Por eso acá el control se resuelve más con sellado y perímetro que con cebo. El cebo baja la población; el sellado es lo que decide si vuelve.',
  ],
  localContext: {
    heading: 'Por dónde entra el roedor a una casa de Madero',
    paragraphs: [
      'La barda perimetral es la autopista. Su remate está a la altura justa para pasar a la cochera techada, al cuarto de lavado o al tejaban, y desde ahí el animal alcanza el plafón o el entretecho. Cuando además hay una rama de árbol o un cable que cruza, el acceso queda servido.',
      'El predio vecino manda mucho más de lo que el dueño supone. Un baldío con maleza alta, una casa deshabitada o una obra detenida sostienen población estable, y desde ahí las casas de la cuadra funcionan como comedor. Tratar sin mirar el entorno da resultados que duran semanas.',
      'La humedad y la salinidad de la franja costera deterioran mallas, rejillas y burletes antes de tiempo. Una rejilla de ventilación oxidada, un burlete despegado o una malla de mosquitero rota son accesos que la casa fue abriendo sola con los años, y son de los primeros puntos que revisamos.',
      'A diferencia del centro de Tampico, donde domina la rata de techo y las azoteas continuas, acá el escenario está más repartido: hay rata de techo entrando por barda y plafón, y hay rata gris usando el registro del patio y el drenaje. Por eso la inspección tiene que mirar arriba y abajo.',
    ],
  },
  signs: {
    heading: 'Señales que aparecen antes de ver al animal',
    intro:
      'El roedor evita a la gente y es nocturno. Cuando se ve uno de día, la población suele llevar tiempo. Estas señales se adelantan:',
    items: [
      'Ruido de carrera o de arrastre en el plafón, el entretecho o el techo del cuarto de servicio, de noche.',
      'Excremento en la cochera, el cuarto de lavado o detrás de electrodomésticos.',
      'Marcas de grasa oscura a lo largo de la barda, del borde de una viga o de una tubería.',
      'Empaques mordidos en la despensa o en el almacenamiento de croquetas de la mascota.',
      'Cableado roído, sobre todo en plafón y detrás del tablero.',
      'El perro o el gato fijándose insistentemente en un punto del techo o de un muro.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se plantea una casa de Madero',
    paragraphs: [
      'La primera visita lee el perímetro antes de colocar nada: remate de barda, cochera, tejaban, rejillas de ventilación, registros, y qué hay del otro lado de la barda. Con eso se entiende si la población es propia o si viene del predio vecino, que cambia todo el planteo.',
      'El control se hace con estaciones de cebo cerradas y rotuladas sobre las rutas detectadas, más trampeo para medir si la actividad realmente está bajando. Las estaciones cerradas son lo que corresponde en una casa con niños o mascotas: el producto queda dentro del dispositivo y no accesible.',
      'La parte que decide el resultado es el sellado. Se cierran huecos del plafón, pasos de instalación, rejillas rotas y el hueco bajo la puerta de la cochera, y se acuerda dónde guardar el alimento de la mascota, que en casa unifamiliar es una de las fuentes más comunes.',
      'Cuando el foco está en un baldío o una casa deshabitada al lado, se lo decimos con claridad. Se puede proteger la propiedad y bajar mucho la presión, pero mientras el predio siga así conviene prever revisiones periódicas en vez de esperar una solución definitiva.',
    ],
    checks: [
      'Remate de barda, cochera, tejaban y techo del cuarto de servicio.',
      'Plafón, entretecho y pasos de instalación.',
      'Rejillas de ventilación, mallas y burlete de la puerta de cochera.',
      'Registro del patio y coladeras, por la rata gris.',
      'Almacenamiento de croquetas, despensa y basura del patio.',
      'Colindancia: baldío, obra detenida o casa deshabitada.',
    ],
  },
  faqs: [
    {
      question: 'Al lado hay un terreno baldío. ¿Sirve tratar solo mi casa?',
      answer:
        'Sirve, y en la mayoría de los casos es lo único que se puede hacer. Se protege su propiedad, se cierran los accesos y se baja mucho la presión. Lo que no se puede prometer es que el baldío deje de sostener población: mientras siga así, conviene prever revisiones periódicas en vez de un tratamiento único. Se lo planteamos así desde la inspección.',
    },
    {
      question: '¿Por qué entran por la barda y no por la puerta?',
      answer:
        'Porque la barda es un corredor elevado, seguro y continuo, y su remate suele quedar a la altura justa para saltar a la cochera o al tejaban. Es la vía típica en vivienda de una o dos plantas. Por eso la inspección arranca por ahí y no por el interior de la casa.',
    },
    {
      question: '¿El cebo es seguro teniendo perro?',
      answer:
        'Trabajamos con estaciones cerradas, que se abren con llave, no con cebo suelto. Se colocan sobre las rutas detectadas y fuera del alcance del animal, y le indicamos dónde queda cada una. Además revisamos dónde guarda las croquetas, porque el alimento de mascota al alcance es una de las causas más frecuentes en casa unifamiliar.',
    },
    {
      question: 'Escucho ruido en el techo pero no veo nada abajo. ¿Es normal?',
      answer:
        'Sí, y es típico de la rata de techo, que anida arriba y solo baja a comer. Buscarla a nivel de piso es el error más común. La inspección tiene que subir al plafón o al entretecho y buscar marcas de grasa y excremento, que es donde aparece la ruta real.',
    },
    {
      question: '¿Cuánto tarda en bajar el ruido nocturno?',
      answer:
        'Normalmente entre la primera y la segunda semana, según el tamaño de la población y qué tan bien ubicadas quedaron las estaciones. El trampeo nos dice si de verdad está bajando y no solo si dejó de escucharse. Si el foco es un predio vecino, el ruido puede volver, y ahí lo que sostiene el resultado es el sellado.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'cucarachas' },
    { zone: 'tampico', pest: 'ratas' },
  ],
}

const alacranes: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'alacranes',
  h1: 'Alacranes en Ciudad Madero: perímetro de la casa',
  metaTitle: 'Control de alacranes en Ciudad Madero | Casas y bardas',
  metaDescription:
    'Alacranes en Ciudad Madero: bardas, patios con material apilado y colindancia con baldíos. Sellado, perímetro y revisión sin costo.',
  intro: [
    'En Madero el alacrán es sobre todo un asunto de perímetro. No anida en el centro de la casa: anida en la barda, en el material apilado del patio, bajo la loseta suelta o en el hueco de una jardinera, y entra cuando algo lo desplaza o cuando encuentra el paso abierto bajo una puerta.',
    'Las colonias que colindan con terreno sin construir, con obra detenida o con la franja de vegetación hacia la playa son las que más lo ven. Ahí el animal viene de afuera y cruza el patio. En colonia consolidada y cerrada aparece menos, y cuando aparece suele haber una obra cerca que le movió el refugio.',
    'Esto define el trabajo: contra alacrán, el orden del patio y el sellado pesan más que la aplicación, y la aplicación rinde poco si el acceso queda abierto. En una casa con niños vale la pena hacer las dos cosas.',
  ],
  localContext: {
    heading: 'Dónde se refugia en una casa de Madero',
    paragraphs: [
      'La barda perimetral es el refugio número uno. Un muro de block con juntas abiertas, con el remate deteriorado por la salinidad o con huecos donde se desprendió el aplanado, le da a un animal plano y nocturno exactamente lo que necesita: temperatura estable, oscuridad y salida directa al patio.',
      'El patio residencial suma el resto. Material de obra guardado hace años, leña, tabique, macetas apiladas contra el muro, la caseta del perro, la loseta que se levantó. Cada uno de esos puntos es refugio, y todos comparten algo: están pegados a la construcción, que es lo que convierte un refugio de patio en un problema de casa.',
      'El clima costero mantiene actividad buena parte del año, así que acá no hay una temporada en la que el problema se frene solo. Lo que sí marca picos es la lluvia: cuando el suelo se satura y los huecos se inundan, el alacrán se desplaza y aparece adentro. No llegó de lejos, estaba en el perímetro.',
      'Hay un disparador local muy concreto: la obra vecina. Cualquier movimiento de tierra, demolición o desmonte en la cuadra manda alacranes hacia las casas de alrededor durante semanas. Si le empezaron a aparecer y hay obra cerca, esa suele ser la explicación.',
    ],
  },
  signs: {
    heading: 'Qué evaluar en el patio y en la casa',
    intro:
      'El alacrán no deja rastro fácil de leer. Lo que sí se puede evaluar son las condiciones que lo sostienen:',
    items: [
      'Hallazgos repetidos en la misma zona de la casa, y no un ejemplar suelto una vez al año.',
      'Material apilado contra la barda o contra el muro de la casa: tabique, leña, macetas, obra guardada.',
      'Juntas abiertas o aplanado desprendido en la barda, sobre todo en la cara de sombra.',
      'Burlete de la puerta a patio o a cochera gastado, o que ya no toca el piso.',
      'Loseta de patio suelta o hueca, y jardineras pegadas a la construcción.',
      'Presencia notoria de cochinillas y grillos: es su comida, y anuncia el ambiente que busca.',
    ],
  },
  howWeWork: {
    heading: 'Qué hace el técnico en una casa de Madero',
    paragraphs: [
      'El recorrido es perimetral: barda por las dos caras cuando se puede, contacto del muro con el piso, registros, burletes, y el estado del material apilado. Adentro se revisa el zócalo, el marco de las puertas a patio y los puntos donde alguna instalación cruza el muro.',
      'La aplicación va con polvos residuales en grietas y hendiduras seleccionadas —que es lo que corresponde a un animal que vive metido en el hueco— más tratamiento perimetral en el contacto con el suelo y en la base de la barda. Nebulizar el interior de la casa no es el camino: el alacrán no está en el aire de la sala.',
      'La parte que más rinde depende del dueño: separar del muro el material apilado, levantar del piso la leña y el tabique, y cerrar los huecos que se marcaron. Un tratamiento acompañado de eso dura; uno sin eso vuelve al mismo punto en meses.',
      'Una aclaración necesaria: ante una picadura lo que corresponde es atención médica inmediata. Nuestro trabajo es sobre el inmueble y no sustituye ni debe demorar esa valoración.',
    ],
    checks: [
      'Barda perimetral: juntas, remate y contacto con el piso.',
      'Material apilado en el patio y su distancia al muro.',
      'Burletes de puertas a patio, a cochera y a jardín.',
      'Registros, coladeras y sus tapas.',
      'Loseta suelta, jardineras y caseta del perro.',
      'Colindancia: baldío, obra en curso o desmonte reciente.',
    ],
  },
  faqs: [
    {
      question: 'Empezaron a aparecer de golpe. ¿Por qué ahora?',
      answer:
        'La causa más frecuente en Madero es una obra cerca: cualquier movimiento de tierra, demolición o desmonte en la cuadra desplaza a los que vivían ahí hacia las casas vecinas, y el efecto dura semanas. El otro disparador es la lluvia fuerte, que inunda huecos del perímetro y los empuja hacia adentro. En los dos casos estaban cerca, no llegaron de lejos.',
    },
    {
      question: 'Tengo material de obra guardado en el patio. ¿Es un problema?',
      answer:
        'Es el refugio más común que encontramos. Tabique, block, leña o macetas apiladas contra el muro le dan sombra, humedad y huecos, y al estar pegados a la construcción convierten un refugio de patio en un problema de casa. Separarlo del muro y levantarlo del piso es la medida individual que más rinde.',
    },
    {
      question: '¿Hay que tratar el interior de las recámaras?',
      answer:
        'En general no, y menos si hay niños. El trabajo es perimetral: base de la barda, contacto muro-piso, grietas y accesos. Adentro se atiende el zócalo y el marco de la puerta al patio si hay hallazgos ahí. El polvo se aplica dentro de grietas, no en superficies de contacto ni en zonas de juego.',
    },
    {
      question: '¿Sirve poner burletes en las puertas?',
      answer:
        'Sirve mucho, y es de lo más barato que se puede hacer. En Madero la salinidad endurece y despega los burletes antes de tiempo, así que muchas casas tienen un hueco bajo la puerta del patio sin que nadie lo note. Ese hueco es una entrada directa. En la inspección le marcamos cuáles hay que reponer.',
    },
    {
      question: '¿Puedo hacer algo mientras espero la visita?',
      answer:
        'Sí, y ayuda bastante. Separe del muro lo que esté apilado en el patio, sacuda el calzado antes de ponérselo y no deje ropa ni juguetes en el piso de noche. Si tiene que mover tabique o leña, use guantes y levante las piezas desde arriba, nunca metiendo la mano en el hueco. Anote dónde y a qué hora apareció cada uno: ese dato orienta la inspección.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'garrapatas' },
    { zone: 'tampico', pest: 'alacranes' },
  ],
}

const chinches: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'chinches',
  h1: 'Chinches de cama en Ciudad Madero: recámaras de casa',
  metaTitle: 'Chinches de cama en Ciudad Madero | Casas y recámaras',
  metaDescription:
    'Control de chinches de cama en Ciudad Madero: recámaras de casa, muebles usados y equipaje. Aplicación con jeringa en costuras y seguimiento.',
  intro: [
    'La chinche de cama no llega por falta de limpieza. Llega en una maleta, en un colchón de segunda mano o en un sillón que alguien regaló. En Madero, que es una ciudad de casas de familia, el escenario típico es ese: alguien volvió de viaje, o entró un mueble usado a la casa, y a las semanas empezaron las picaduras.',
    'Es también la plaga que más se trata mal por cuenta propia. Se confunde con pulga, se rocía el colchón con un aerosol de supermercado y lo único que se consigue es que se dispersen a la recámara de al lado. Cuando nos llaman, muchas familias ya pasaron por dos o tres intentos.',
    'Y es la que menos perdona el trabajo incompleto. Si queda un foco vivo en una costura o detrás de un zócalo, en pocas semanas está todo otra vez como al principio.',
  ],
  localContext: {
    heading: 'Por qué en la casa de Madero se dispersa tan rápido',
    paragraphs: [
      'La vivienda residencial tiene varias recámaras conectadas por un mismo pasillo, con zócalo corrido y a menudo instalación eléctrica compartida en el muro. Para la chinche eso es una red: se mueve de un cuarto a otro por el zócalo y por el hueco de los tomacorrientes sin salir nunca a la vista. Por eso tratar solo la recámara donde hay picaduras es la forma más rápida de que reaparezca en la de al lado.',
      'El mueble usado es la vía de entrada más frecuente en casa particular. Un colchón, una base, un sillón o una cabecera de segunda mano llega con los focos adentro de las costuras, y nadie revisa una costura antes de meter un mueble a la casa. En Madero esto pesa porque la circulación de muebles entre familias y por venta directa es habitual.',
      'El clima cálido y estable de la costa acorta los ciclos. Con temperatura pareja todo el año la población crece más rápido que en una ciudad fría, y una detección tardía se paga con más focos repartidos. Acá no hay una temporada baja en la que el problema se frene solo.',
      'A diferencia de un hotel, donde el problema se trata por bloque de habitaciones, en casa el alcance lo definen los muebles y el uso: dónde durmió el visitante, en qué sillón se sienta la familia, si alguien se mudó de cuarto al empezar las picaduras. Ese último dato es clave y suele ser lo que expandió la infestación.',
    ],
  },
  signs: {
    heading: 'Cómo confirmar que son chinches y no pulgas',
    intro:
      'Antes de tratar hay que estar seguro de la especie, porque el método no se parece en nada. Estas señales las identifican:',
    items: [
      'Picaduras en línea o en grupo, en zonas descubiertas durante la noche: brazos, hombros, cuello, tobillos.',
      'Puntos oscuros del tamaño de una cabeza de alfiler en la costura del colchón, en la base o en el rincón de la cabecera.',
      'Manchas pequeñas de sangre en la sábana al despertar.',
      'Cascarones traslúcidos con forma de chinche pegados en juntas y costuras: son mudas.',
      'Olor dulzón y desagradable en una recámara cerrada con infestación avanzada.',
      'Ejemplares vivos en la costura del colchón, detrás del cabecero o en la ranura de un tomacorriente.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata una casa de Madero',
    paragraphs: [
      'La inspección se hace con linterna y es minuciosa: costura por costura del colchón y de la base, cabecera, buró, zócalo, tomacorrientes y los muebles a menos de un metro de la cama. Se marca cada foco y se determina el alcance real, que casi siempre incluye más de una recámara.',
      'El tratamiento va con aplicación con jeringa en costuras, juntas y uniones, que es donde están los huevos y donde ningún aerosol llega, más polvo residual en grietas y detrás de zócalos. En casa tratamos todas las recámaras del mismo pasillo aunque solo una tenga picaduras, porque el zócalo las conecta.',
      'Siempre se programa una segunda visita. Los huevos eclosionan de forma escalonada y la revisión de seguimiento es la que confirma si quedó algún foco. Un tratamiento de chinches con una sola visita no es un tratamiento completo, y conviene saberlo antes de contratar.',
      'Del lado de la familia pedimos dos cosas concretas: lavar y secar la ropa de cama a temperatura alta, y no mudarse a otra recámara ni sacar muebles a otro cuarto antes de la visita. Cambiarse de cuarto es la forma más común de llevarse el problema a una habitación limpia.',
    ],
    checks: [
      'Costuras, etiquetas y perímetro del colchón y del box.',
      'Base de la cama, cabecera y respaldo tapizado.',
      'Buró, cajones y muebles a menos de un metro de la cama.',
      'Zócalo corrido del pasillo y juntas del piso.',
      'Tomacorrientes, apagadores y riel de cortina.',
      'Sillones y sillas tapizadas de la sala, si alguien duerme ahí.',
    ],
  },
  faqs: [
    {
      question: 'Solo pican en una recámara. ¿Por qué tratar las demás?',
      answer:
        'Porque en casa las recámaras están conectadas por el zócalo corrido y por el hueco de la instalación eléctrica, y una habitación sin picaduras puede tener un foco incipiente. Si se trata solo donde hay quejas, lo habitual es que el problema aparezca en la de al lado a las semanas. Sale más caro tratar tres veces de a un cuarto que tratar bien una vez.',
    },
    {
      question: 'Entró un sillón de segunda mano y empezaron. ¿Puede ser de ahí?',
      answer:
        'Es la vía de entrada más frecuente en casa particular. Los muebles tapizados usados llegan con los focos dentro de las costuras y del armazón, y nadie revisa eso antes de meterlos. Si acaba de entrar un mueble usado, dígalo en la visita: cambia por dónde empezamos y qué alcance le damos al tratamiento.',
    },
    {
      question: 'Me cambié de cuarto para no dormir ahí. ¿Estuvo mal?',
      answer:
        'Es lo más comprensible del mundo y también lo que más expande la infestación: la chinche sigue a la persona. Si ya lo hizo, avísenos, porque el cuarto nuevo pasa a formar parte del tratamiento. Mientras espera la visita, lo mejor es seguir durmiendo en el mismo lugar y lavar la ropa de cama a temperatura alta.',
    },
    {
      question: '¿Compro un colchón nuevo?',
      answer:
        'Todavía no. El colchón casi nunca es el único refugio: también está en la base, la cabecera, el zócalo y hasta en la ranura de un tomacorriente. Cambiarlo sin tratar el resto deja los focos intactos y pone un colchón nuevo a disposición. Es uno de los gastos más frecuentes y más inútiles que vemos.',
    },
    {
      question: '¿Cuándo voy a poder dormir tranquilo otra vez?',
      answer:
        'Las picaduras suelen cortarse tras la primera aplicación, pero eso no significa que esté resuelto: quedan huevos que eclosionan de forma escalonada. Por eso siempre programamos una segunda visita, y hasta que esa revisión sale limpia no damos el caso por cerrado. Un tratamiento de chinches de una sola visita no es un tratamiento completo, y conviene saberlo antes de contratar.'
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'garrapatas' },
    { zone: 'tampico', pest: 'chinches' },
  ],
}

const garrapatas: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'garrapatas',
  h1: 'Garrapatas en Ciudad Madero: perro de patio y vivienda',
  metaTitle: 'Control de garrapatas en Ciudad Madero | Casas con perro',
  metaDescription:
    'Garrapatas en Ciudad Madero: la del perro se instala en zócalos y muros de la casa. Tratamiento de patio e interior, con seguimiento.',
  intro: [
    'Madero es una ciudad de casas con patio y perro de patio, y esa combinación es exactamente el escenario donde la garrapata café del perro prospera. La confusión que hace crecer el problema es creer que vive en el animal: no vive ahí. Se sube a alimentarse y se baja a la casa, a esconderse en el zócalo, en una grieta o detrás de un mueble. Ahí pone huevos.',
    'Por eso hay familias que bañan al perro cada semana y las garrapatas no bajan. El animal es el comedor, no el domicilio. Si se trata solo al perro, el ciclo sigue corriendo del otro lado.',
    'Y en el clima de la costa esto va rápido. Con calor y humedad estables la infestación pasa de "vi un par en la caseta" a "están subiendo por la pared de la sala" en pocas semanas.',
  ],
  localContext: {
    heading: 'Por qué la casa de Madero le queda cómoda',
    paragraphs: [
      'El patio residencial le da el punto de espera: caseta de madera, sombra del tejaban, vegetación baja pegada a la barda, la zona donde el perro se echa siempre. Ahí la garrapata aguarda al huésped, y la humedad de la franja costera la mantiene activa buena parte del año.',
      'La casa le da el punto de puesta. Zócalos despegados, juntas de loseta abiertas, grietas del aplanado, marcos de puerta con separación: huecos de un par de milímetros donde completa la muda y la puesta protegida y a temperatura estable. En vivienda residencial ese tipo de hueco abunda, y la salinidad del ambiente los va abriendo con los años.',
      'La cochera es un punto propio de Madero que suele pasarse por alto. Es donde muchos perros duermen, tiene sombra permanente, junta polvo y casi nunca se limpia a fondo. Cuando revisamos una infestación establecida, la unión de la loseta con el muro de la cochera aparece una y otra vez.',
      'Las casas comparten barda, y una infestación puede pasar de un patio al de al lado por una junta. Cuando el vecino también tiene perro, el ciclo se sostiene entre las dos propiedades y conviene coordinar el tratamiento, o al menos reforzar el perímetro.',
    ],
  },
  signs: {
    heading: 'Señales de que ya está en la casa y no solo en el perro',
    intro:
      'Mientras está solo en el animal se ve poco. Cuando se instaló en la vivienda, las señales cambian:',
    items: [
      'Garrapatas trepando por el muro, sobre todo en la parte alta y cerca del techo: buscan altura para la puesta.',
      'Ejemplares en el zócalo, en el marco de la puerta o detrás de un mueble, lejos de donde duerme el perro.',
      'Masas de huevos de aspecto granulado en una grieta o en la unión de dos superficies.',
      'El perro con garrapatas otra vez a los pocos días de haberlo tratado.',
      'Concentración en la caseta, en la cochera y en la sombra del tejaban.',
      'Puntos oscuros en las juntas de la loseta o en la separación del zócalo.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata una vivienda de Madero',
    paragraphs: [
      'El tratamiento es del inmueble, no de la mascota, y esa distinción decide el resultado. Se trabaja el patio con aspersión dirigida en vegetación baja, perímetro, caseta y zonas de sombra, y el interior con polvo residual en grietas, zócalos y juntas, que es donde está la puesta.',
      'La inspección busca altura. En infestaciones establecidas encontramos garrapatas y huevos en la parte alta del muro y en la unión con el techo, que es adonde suben para poner. Un tratamiento que se queda a nivel de piso deja intacto lo que importa.',
      'Lo del animal corre por veterinaria y conviene coordinarlo el mismo día. Si se trata la casa y el perro sigue cargando ejemplares, o al revés, el ciclo no se corta. Lo decimos siempre antes de empezar, porque es la causa más frecuente de que un tratamiento anterior no haya funcionado.',
      'La segunda visita no es opcional en garrapata. Los huevos ya puestos eclosionan después de la aplicación, y la revisión de seguimiento es la que cierra el ciclo.',
    ],
    checks: [
      'Zócalos, juntas de loseta y grietas del aplanado en todo el interior.',
      'Parte alta del muro y unión con el techo, donde ocurre la puesta.',
      'Cochera: unión de loseta con muro y zona donde duerme el perro.',
      'Caseta, cama del animal y su sombra habitual en el patio.',
      'Vegetación baja y arbustos pegados a la barda.',
      'Junta de colindancia con el patio vecino.',
    ],
  },
  faqs: [
    {
      question: 'Lo baño cada semana y siguen apareciendo. ¿Por qué?',
      answer:
        'Porque la garrapata café del perro no vive en el animal: se alimenta ahí y se baja a la casa a esconderse y poner huevos. Mientras la vivienda no se trate, cada vez que el perro pasa por la grieta correcta vuelve a cargar ejemplares. El baño resuelve lo que está encima en ese momento, no el foco.',
    },
    {
      question: '¿Por qué las veo subiendo por la pared de la sala?',
      answer:
        'Porque buscan altura para la puesta, y es de las señales más claras de que la infestación ya está dentro de la vivienda y no solo en el patio. Cuando aparecen cerca del techo, el tratamiento tiene que contemplar la parte alta del muro y no solo el zócalo.',
    },
    {
      question: '¿Hay que revisar la cochera?',
      answer:
        'Sí, y en Madero es un punto que rinde. Muchos perros duermen ahí, hay sombra permanente y casi nunca se limpia a fondo. La unión de la loseta con el muro de la cochera es uno de los lugares donde más seguido encontramos puesta en infestaciones establecidas.',
    },
    {
      question: '¿Pueden pasar del patio del vecino al mío por la barda?',
      answer:
        'Sí, y en Madero es la vía de reinfestación más común entre casas. La junta de colindancia y el remate de la barda funcionan como paso. Lo ideal es que los dos patios se traten a la vez; cuando no se puede, reforzamos el perímetro de su lado y le marcamos qué juntas conviene cerrar.',
    },
    {
      question: '¿Cuándo puede volver el perro al patio?',
      answer:
        'El técnico le da el tiempo de reingreso al llegar, según el método y las áreas que se traten; en patio y cochera suele ser corto. Lo que le pedimos es coordinar el mismo día la desparasitación con su veterinario: si la casa queda tratada pero el animal sigue cargando ejemplares, el ciclo vuelve a arrancar en cuanto se echa en su lugar de siempre.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'alacranes' },
    { zone: 'tampico', pest: 'garrapatas' },
  ],
}

const hormigas: IntersectionContent = {
  zone: 'ciudad-madero',
  pest: 'hormigas',
  h1: 'Hormigas en Ciudad Madero: cocina, patio y jardín',
  metaTitle: 'Control de hormigas en Ciudad Madero | Casas y jardines',
  metaDescription:
    'Hormigas en Ciudad Madero: nidos en jardín, loseta de patio y muros de casa. Cebo en gel que alcanza a la colonia. Revisión sin costo.',
  intro: [
    'Con hormigas el error clásico es matar la fila. Se rocía el recorrido que va del zócalo a la azucarera, desaparecen un rato y a los dos días vuelven por otro lado. Lo que se vio nunca fue la plaga: eran las obreras que salieron a buscar comida, y suelen ser una parte chica de la colonia.',
    'En la casa de Madero el nido casi siempre está en un punto al que no se llega rociando: bajo la loseta del patio, en la tierra del jardín, en la maceta grande de la entrada o dentro de la junta de la barda. La vivienda residencial con jardín les ofrece más opciones que un local del centro.',
    'Por eso trabajamos con cebo y no con aspersión sobre la fila. La obrera lo lleva al nido y llega a las que nunca salen, que son las que sostienen el problema.',
  ],
  localContext: {
    heading: 'Dónde anida la hormiga en una casa de Madero',
    paragraphs: [
      'El jardín y la jardinera pegada a la casa son el punto número uno. Tierra suelta, riego frecuente y contacto directo con la construcción: la colonia se instala afuera y entra por la junta de la loseta, por debajo del marco de la puerta al patio o por el paso de una instalación. Desde adentro solo se ve la fila; el nido está en el jardín.',
      'La loseta suelta del patio es el segundo. Bajo una loseta que se levantó queda un espacio con humedad estable, protegido y con salida directa a la cocina. En una ciudad con la humedad de Madero ese hueco no se seca nunca, y es un sitio de nido excelente.',
      'La maceta grande es un caso que se repite en vivienda residencial y que nadie sospecha. Una maceta de buen tamaño con tierra permanentemente húmeda funciona como un nido completo, y si está en el porche o junto a la puerta, la colonia entra a la casa todos los días sin recorrer un metro.',
      'Hay además un frente ligado al clima: donde hay filtración —bajo el fregadero, en un muro con humedad de capilaridad, junto a una bajada de agua— aparecen especies que buscan justamente madera húmeda. Encontrar hormigas siempre en el mismo punto mojado suele estar avisando de una filtración además de una plaga.',
    ],
  },
  signs: {
    heading: 'Cómo leer lo que se ve',
    intro:
      'La fila dice que hay colonia cerca, pero no dónde. Estas señales ayudan a ubicar el nido y a medir el tamaño:',
    items: [
      'Filas que entran siempre por el mismo punto: la junta de una loseta, el marco de la puerta al patio, un enchufe o el borde del zócalo.',
      'Montoncitos de tierra fina junto a una junta del piso, en el patio o al pie de la barda.',
      'Actividad concentrada en un punto húmedo: bajo el fregadero, junto a una bajada de agua o en un muro con filtración.',
      'Fila que sale de una maceta grande o de la jardinera y entra a la casa.',
      'Hormigas aladas dentro de la casa: es una colonia madura dispersándose, no una invasión desde afuera.',
      'Loseta del patio que suena hueca o se hunde ligeramente al pisarla.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trabaja en una casa de Madero',
    paragraphs: [
      'Lo primero es seguir la fila hasta donde entra al piso, al muro o al jardín, y ver qué está comiendo: si va a lo dulce o a lo graso cambia el cebo que corresponde. Esa lectura de cinco minutos decide si el tratamiento funciona a la primera.',
      'La aplicación principal es gel en cebo, en puntos discretos sobre el recorrido y cerca del acceso al nido. La obrera lo transporta y alimenta a la colonia, incluida la reina. Es más lento que un aerosol —se ve en días, no en minutos— pero es lo único que llega al nido, esté en el jardín o bajo la loseta.',
      'Por eso pedimos no rociar la fila antes ni durante el tratamiento. Un insecticida de contacto corta el transporte del cebo y en algunas especies parte la colonia en varios nidos, que es peor que como estaba.',
      'Cuando el nido está bajo loseta suelta, en una jardinera pegada al muro o asociado a una filtración, lo señalamos: ahí el resultado depende de una reparación y no de una segunda aplicación. En casa con niños o mascotas el gel se coloca en puntos no accesibles.',
    ],
    checks: [
      'Recorrido de la fila hasta su punto de entrada al piso, muro o jardín.',
      'Jardinera, jardín y macetas grandes en contacto con la construcción.',
      'Loseta suelta del patio y juntas del piso.',
      'Marco de la puerta al patio, enchufes y zócalos.',
      'Puntos con filtración o humedad de capilaridad.',
      'Almacenamiento de azúcar, miel y alimento de mascota en la cocina.',
    ],
  },
  faqs: [
    {
      question: 'La fila sale de una maceta del porche. ¿Ahí está el nido?',
      answer:
        'Muy probablemente sí, y es un caso que vemos seguido en casa de Madero. Una maceta grande con tierra siempre húmeda funciona como nido completo, y si está junto a la puerta la colonia entra a diario sin recorrer distancia. Se trata con cebo y, según el caso, conviene revisar el riego o cambiar la tierra.',
    },
    {
      question: 'Ya rocié la fila antes de llamarlos. ¿Arruiné el tratamiento?',
      answer:
        'No, pero conviene decirlo en la visita porque cambia lo que esperamos ver. El insecticida de contacto suele dispersar el recorrido y, con algunas especies, parte la colonia en varios nidos. Eso significa que quizá tengamos que buscar más de un punto de acceso y que el cebo tarde un poco más en encontrarse. De acá en adelante, no rocíe: el cebo necesita que caminen hasta él.',
    },
    {
      question: 'Salen de la junta de la loseta del patio. ¿Se puede tratar sin levantarla?',
      answer:
        'Sí, con cebo colocado en el punto de salida: la obrera lo lleva adentro y alcanza a la colonia sin necesidad de romper. Ahora bien, si la loseta está suelta y suena hueca, ese espacio se va a volver a ocupar. En ese caso le decimos con franqueza que la solución de fondo es repararla.',
    },
    {
      question: '¿Las del jardín y las de la cocina son la misma colonia?',
      answer:
        'Casi siempre sí, y esa es la razón por la que tratar solo adentro no alcanza. En la casa de Madero el nido suele estar afuera —jardinera, maceta grande, bajo una loseta— y lo que entra a la cocina son obreras en busca de comida. Por eso el cebo se coloca en el recorrido y cerca del acceso, para que lo lleven al jardín, que es donde vive la colonia.',
    },
    {
      question: 'Al día siguiente parecía que había más. ¿Está mal aplicado?',
      answer:
        'Al contrario, es la señal de que va bien. Las obreras se concentran en el punto de cebo y por eso se ven más que antes durante las primeras cuarenta y ocho horas. La caída fuerte llega entre el tercer y el séptimo día. Si a los diez días no bajó, avísenos: normalmente significa que el cebo no era el correcto para esa especie y se cambia por otro.',
    },
  ],
  related: [
    { zone: 'ciudad-madero', pest: 'termitas' },
    { zone: 'tampico', pest: 'hormigas' },
  ],
}

export const CIUDAD_MADERO_INTERSECTIONS: readonly IntersectionContent[] = [
  moscos,
  cucarachas,
  termitas,
  ratas,
  alacranes,
  chinches,
  garrapatas,
  hormigas,
]
