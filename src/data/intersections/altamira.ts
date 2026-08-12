import type { IntersectionContent } from './types'

/**
 * Las 8 intersecciones de Altamira.
 *
 * Perfil dominante: industria, almacenes y vivienda nueva. Puerto industrial y
 * corredor petroquímico, naves con andén y patio de maniobras, y
 * fraccionamientos en expansión levantados sobre terreno recién desmontado.
 * Alrededor, humedales y esteros.
 *
 * Dos cosas separan a Altamira de las otras dos ciudades y aparecen en las
 * ocho páginas:
 *
 * · La construcción es nueva. En Tampico el problema viene de la edificación
 *   de un siglo; acá viene del suelo removido, del relleno y de lo que la obra
 *   dejó enterrado. Es el opuesto exacto.
 * · El cliente industrial necesita que el servicio quede documentado, porque
 *   se lo audita su propio cliente. Eso cambia el entregable, no solo el
 *   tratamiento.
 *
 * {{PENDIENTE: confirmar con el cliente qué documentación emite hoy para
 * auditoría de proveedores — bitácora de visitas, fichas técnicas de producto,
 * plano de ubicación de estaciones. Las páginas describen lo que la auditoría
 * pide, sin afirmar un formato propio que no esté confirmado.}}
 */

const moscos: IntersectionContent = {
  zone: 'altamira',
  pest: 'moscos',
  h1: 'Moscos en Altamira: patios de maniobra y obra nueva',
  metaTitle: 'Fumigación de moscos en Altamira | Naves y fraccionamientos',
  metaDescription:
    'Control de moscos en Altamira: patios de maniobra, obra detenida y humedales del entorno. Nebulización de superficies grandes y revisión sin costo.',
  intro: [
    'En Altamira el criadero de moscos rara vez es un plato de maceta. Es una llanta en el patio de maniobras, una lona de carga que junta agua, un contenedor abierto, la excavación de una obra que quedó parada o el registro pluvial de una nave que no drena.',
    'La escala cambia todo. Un patio industrial de varias hectáreas puede tener decenas de puntos con agua y ninguno se ve desde la puerta. En un fraccionamiento nuevo el equivalente es la calle sin terminar, la zanja abierta y la casa a medio construir de la manzana.',
    'A eso se suma un entorno que aporta población de fondo todo el año: humedales y esteros alrededor de la ciudad. La conversación honesta acá es que se reduce mucho, pero el cero no existe.',
  ],
  localContext: {
    heading: 'Dónde junta agua una propiedad de Altamira',
    paragraphs: [
      'El patio de maniobras es el punto uno. Llantas apoyadas, tarimas apiladas que retienen agua entre listones, lonas de carga plegadas, tambos vacíos, contenedores sin tapa y el drenaje pluvial cuando la pendiente no está bien resuelta. Nada de eso se percibe como "agua estancada" y todo lo es.',
      'La obra detenida es el punto dos, y en una ciudad en expansión es constante. Una excavación abierta, una cisterna sin terminar, un tinaco todavía sin tapa o una losa con encharcamiento pueden sostener producción durante meses sin que nadie entre al predio. Cuando un fraccionamiento nuevo reporta moscos, la causa suele estar en la manzana de al lado y no en la casa.',
      'Los humedales y esteros del entorno mantienen presión permanente. Eso no se trata ni se puede tratar: lo que se trabaja es la propiedad y su perímetro, para que deje de aportar población propia y para que la vegetación donde el adulto pasa el día quede tratada.',
      'En nave industrial hay un frente propio: lucernarios, cubierta con canalón y áreas de lavado. Un canalón obstruido a diez metros de altura es un criadero al que nadie sube, y en una nave grande puede haber varios en la misma línea de cubierta.',
    ],
  },
  signs: {
    heading: 'Qué mirar en una propiedad grande',
    intro:
      'En superficies extensas conviene buscar por tipo de recipiente y no recorrer al azar. Estas son las señales que orientan:',
    items: [
      'Actividad concentrada en un sector del patio y no repartida: indica criadero cercano, no entrada desde el entorno.',
      'Larvas en tambos, llantas, cubetas de lavado o el hueco entre listones de tarima.',
      'Agua detenida en el canalón de la cubierta o alrededor de un lucernario, visible desde arriba.',
      'Encharcamiento permanente en el patio o junto al andén, que no seca entre lluvias.',
      'Quejas del personal concentradas en un turno, casi siempre el de la tarde o el nocturno.',
      'Predio vecino con obra detenida, excavación abierta o maleza alta.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trabaja una superficie grande en Altamira',
    paragraphs: [
      'El recorrido se hace por sectores y se levanta un inventario de puntos con agua, porque en una propiedad industrial la memoria no alcanza: hay que anotarlos para poder verificar después que se eliminaron. Se revisan patio, andén, cubierta, canalones y áreas de lavado.',
      'Sobre los adultos aplicamos termonebulización en exteriores y vegetación perimetral, que es lo que cubre superficie, y nebulización en frío en interiores y áreas techadas. La aspersión dirigida va sobre la franja de vegetación del perímetro, que es donde el mosco pasa el día y desde donde entra al patio al atardecer.',
      'En cliente industrial el trabajo se coordina con paro de línea, con el área de seguridad y con el horario que menos interfiera, y se deja constancia de qué se aplicó, dónde y con qué producto. Esa documentación es parte del servicio, no un extra: es lo que después le piden en la auditoría.',
      'Cuando el foco está en un predio vecino se lo decimos con claridad. Se puede tratar el propio perímetro y bajar mucho la presión, pero conviene saber que ahí el resultado es de contención y no de eliminación.',
    ],
    checks: [
      'Patio de maniobras: llantas, tarimas, tambos, lonas y contenedores.',
      'Cubierta de nave: canalones, lucernarios y puntos de encharcamiento.',
      'Áreas de lavado, fosas y drenaje pluvial.',
      'Franja de vegetación del perímetro y cerco.',
      'Obra en curso o detenida dentro del predio.',
      'Colindancia: baldío, excavación abierta o cuerpo de agua cercano.',
    ],
  },
  faqs: [
    {
      question: 'La planta colinda con humedal. ¿Se puede controlar?',
      answer:
        'Se puede reducir mucho, no llevar a cero, y preferimos decirlo antes de firmar. El humedal aporta población que va a seguir llegando al perímetro. Lo que sí se logra es que la propia planta deje de generar moscos —que en un patio de maniobras suele ser la mitad del problema— y que la vegetación del cerco, donde pasan el día, quede tratada.',
    },
    {
      question: '¿Revisan la cubierta de la nave?',
      answer:
        'Sí, y es un punto que casi nunca está en el reporte de un servicio previo. Un canalón obstruido a diez metros es un criadero al que nadie sube, y en una nave larga puede haber varios en la misma línea. Si la cubierta no es accesible con seguridad, lo planteamos con el área correspondiente antes de subir.',
    },
    {
      question: 'Los moscos aparecen solo en el turno de la tarde. ¿Por qué?',
      answer:
        'Porque la mayoría de las especies presentes acá tienen actividad de crepúsculo: salen de la vegetación donde pasaron el día justo cuando cae el sol. Que las quejas se concentren en un turno es información útil, porque indica desde qué sector del perímetro están entrando y ahí es donde conviene tratar.',
    },
    {
      question: '¿Interfiere con la operación de la planta?',
      answer:
        'Se coordina para que no. La nebulización de exteriores se programa en ventanas de baja actividad o con la línea parada, según lo que defina el área de seguridad, y el técnico informa el tiempo de reingreso de cada zona tratada. En áreas de proceso o con requisitos específicos, lo acordamos antes de la visita y no sobre la marcha.',
    },
    {
      question: 'El foco está en el terreno de al lado. ¿Qué se puede hacer?',
      answer:
        'Tratar el propio perímetro y cerrar lo que aporte la planta, que es lo que está bajo su control. Se lo decimos con franqueza porque cambia la expectativa: el resultado va a ser de contención mientras ese predio siga con agua acumulada. En esos casos conviene un esquema de visitas periódicas en lugar de un servicio único.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'ratas' },
    { zone: 'ciudad-madero', pest: 'moscos' },
  ],
}

const cucarachas: IntersectionContent = {
  zone: 'altamira',
  pest: 'cucarachas',
  h1: 'Cucarachas en Altamira: bodegas, andén y comedor',
  metaTitle: 'Control de cucarachas en Altamira | Bodegas y naves',
  metaDescription:
    'Cucarachas en Altamira: llegan en tarima y cartón al andén de recepción. Gel en cebo, control de mercancía y servicio documentado.',
  intro: [
    'En una bodega de Altamira la cucaracha casi nunca sube del drenaje. Llega en la mercancía. Entra en una tarima, en una caja de cartón corrugado o en una remesa que estuvo guardada en otro almacén, y se instala en el rack antes de que alguien la vea.',
    'Eso cambia por completo dónde hay que trabajar. En una casa del centro de Tampico el punto crítico es la coladera; acá es el andén de recepción y las primeras horas de la mercancía adentro.',
    'Y cambia también el estándar. En el corredor industrial la presencia de cucaracha en almacén no es solo una molestia: es un hallazgo de auditoría que puede frenar un embarque, así que el control tiene que ser preventivo y quedar documentado.',
  ],
  localContext: {
    heading: 'Por qué el andén decide todo en una bodega',
    paragraphs: [
      'El cartón corrugado es el vehículo perfecto: tiene canales del tamaño exacto de una cucaracha alemana, retiene humedad y viaja de almacén en almacén sin que nadie lo abra. Una tarima con cartón que llega infestada y va directo al rack pone la colonia en el punto más difícil de tratar de toda la nave.',
      'La tarima de madera suma lo suyo. Guardada a la intemperie en el patio de maniobras acumula humedad y suciedad entre listones, y cuando entra a la nave lleva adentro lo que juntó afuera. En Altamira, donde el movimiento de tarima es constante por el perfil logístico, es una vía de entrada permanente.',
      'El comedor de personal y el área de vending son el segundo foco, y suelen ser el que dispara la queja. Ahí hay calor, restos y equipos con motor, que es exactamente lo que la alemana busca. Desde el comedor pasa a oficinas y a vestidores por el ducto de instalaciones.',
      'A diferencia de Tampico, donde el drenaje viejo del centro manda, acá el drenaje pesa menos porque la construcción es nueva y está mejor resuelta. Cuando encontramos americana en Altamira suele ser por un registro exterior del patio o por una trampa de grasa mal cerrada, no por la red interna.',
    ],
  },
  signs: {
    heading: 'Qué revisar en almacén y áreas de personal',
    intro:
      'En una nave grande la inspección tiene que ser por zonas de riesgo, no un recorrido general. Estas son las señales que importan:',
    items: [
      'Ejemplares chicos y claros dentro de una tarima recién recibida o entre cartones de una misma remesa.',
      'Manchas oscuras como puntos de tinta en el canto de un rack, en la unión de una estiba o dentro de una caja.',
      'Ootecas pegadas en la junta del cartón o en el ángulo del rack: cápsulas marrones del tamaño de un grano de arroz.',
      'Actividad alrededor del motor de la máquina de vending, del refrigerador del comedor o de la cafetera.',
      'Olor dulzón y rancio al abrir una estiba que llevaba tiempo sin moverse.',
      'Hallazgos repetidos en la misma posición del rack, aunque se haya rotado la mercancía.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se plantea una nave de Altamira',
    paragraphs: [
      'El trabajo arranca en recepción y no en el fondo del almacén. Se revisa cómo entra la mercancía, dónde se estaciona antes de acomodarse, en qué estado están las tarimas y qué se hace con el cartón. Muchas veces la medida que más rinde no es un producto: es cambiar el punto donde se desarma el cartón y sacarlo el mismo día.',
      'La aplicación principal contra la alemana es gel en cebo, colocado en el ángulo del rack, detrás de equipos y en el comedor. La colonia lo transporta y alcanza a los ejemplares que nunca salen. Nebulizar un almacén con alemana instalada sirve de poco y además la dispersa a más pasillos.',
      'Se agrega monitoreo con trampas de captura en puntos fijos, que es lo que permite decir si la población está bajando y detectar una entrada nueva antes de que se instale. En cliente industrial eso importa doble, porque es la evidencia que sostiene el control ante una auditoría.',
      'De cada visita queda constancia de qué se aplicó, dónde y con qué producto, y las trampas se identifican por posición. Es lo que se suele pedir en una revisión de proveedor y conviene tenerlo armado antes de que lo pidan, no después.',
    ],
    checks: [
      'Andén de recepción, área de estacionamiento de tarima y manejo de cartón.',
      'Tarimas guardadas a la intemperie en el patio de maniobras.',
      'Ángulos de rack y estibas que llevan tiempo sin rotar.',
      'Comedor de personal, vending, cafetera y refrigeradores.',
      'Vestidores, lockers y ductos de instalación hacia oficinas.',
      'Registro exterior y trampa de grasa, por la americana.',
    ],
  },
  faqs: [
    {
      question: '¿Se puede evitar que entren con la mercancía?',
      answer:
        'Eliminarlo del todo no, pero se reduce mucho con tres cosas: revisar la tarima en el andén antes de acomodarla, desarmar y sacar el cartón el mismo día en lugar de acumularlo, y no guardar tarima de madera a la intemperie. En la inspección le decimos cuál de esas tres está fallando, porque casi siempre es una en concreto.',
    },
    {
      question: '¿Qué documentación queda del servicio?',
      answer:
        'De cada visita queda registro de las áreas atendidas, el producto aplicado y la posición de las trampas de monitoreo, que es lo que se suele solicitar en una revisión de proveedor. Si su cliente le exige un formato específico, dígalo antes de contratar para acordarlo desde la primera visita en vez de reconstruirlo después.',
    },
    {
      question: 'Aparecen siempre en la misma posición del rack. ¿Qué significa?',
      answer:
        'Que hay un foco establecido ahí y no una entrada nueva. Suele pasar cuando una estiba lleva mucho tiempo sin rotar: queda un microclima estable y protegido que funciona como refugio. Ese punto se trata directo y además conviene revisar la rotación, porque el problema se repone solo si la estiba vuelve a quedarse quieta.',
    },
    {
      question: '¿Se puede tratar sin parar el almacén?',
      answer:
        'Sí. El gel y las trampas se colocan en puntos localizados y no requieren desalojar la nave ni cubrir mercancía. Lo que sí coordinamos es el acceso a los racks que haya que atender y el horario, que normalmente se acuerda con el turno de menor movimiento para no cruzarse con el montacargas.',
    },
    {
      question: 'El problema empezó en el comedor. ¿Puede llegar al almacén?',
      answer:
        'Sí, y por eso los tratamos juntos aunque la queja venga de un solo lado. El comedor concentra calor, restos y equipos con motor, y desde ahí la alemana pasa a oficinas, vestidores y nave por el ducto de instalaciones. Tratar solo el comedor deja abierta la ruta de regreso.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'ratas' },
    { zone: 'tampico', pest: 'cucarachas' },
  ],
}

const termitas: IntersectionContent = {
  zone: 'altamira',
  pest: 'termitas',
  h1: 'Termitas en Altamira: obra nueva y suelo removido',
  metaTitle: 'Control de termitas en Altamira | Casas nuevas y obra',
  metaDescription:
    'Termitas en Altamira: restos de cimbra enterrados, relleno y suelo removido en fraccionamientos nuevos. Barrera de suelo y tratamiento con jeringa.',
  intro: [
    'Suena contradictorio y es de lo más común que atendemos: casas de tres o cinco años, en fraccionamiento nuevo, con termita. La reacción del dueño siempre es la misma, que cómo puede ser si la casa es nueva.',
    'Justamente por eso. En Altamira el problema no viene de la madera vieja sino del suelo. Desmontar un terreno, remover tierra y rellenar altera colonias que ya estaban ahí, y lo que la obra deja enterrado —restos de cimbra, polines, tarima, raíces— les queda como despensa a un metro de la casa nueva.',
    'La termita subterránea sube desde ahí. No necesita madera vieja: necesita contacto con la humedad del suelo, y un relleno recién compactado se lo da igual que un terreno de siempre.',
  ],
  localContext: {
    heading: 'Qué deja la obra debajo de una casa nueva',
    paragraphs: [
      'En la construcción de fraccionamiento es habitual que restos de cimbra, polines, tarima y despuntes de madera terminen enterrados en el relleno o quedando bajo la losa. Nadie lo hace con mala intención: es material que estorbaba y quedó ahí. Para una colonia subterránea eso es una fuente de alimento estable, protegida y en contacto directo con la humedad del suelo.',
      'El desmonte del terreno hace la otra mitad. Las colonias que vivían en la vegetación original no desaparecen cuando pasa la maquinaria: se desplazan. Cuando la casa se levanta encima, la madera de la construcción queda como lo más disponible del entorno.',
      'La losa de una casa nueva tiene juntas de colado, pasos de instalación hidráulica y sanitaria, y encuentros con el muro. Cada uno es un punto por donde la termita sube sin salir a la superficie. Por eso el daño aparece adentro, en un clóset o un marco, sin que se vea un solo túnel en el muro exterior.',
      'La expansión constante de la ciudad mantiene el escenario activo. Cuando arranca una obra en la manzana o se desmonta el terreno de al lado, las colonias se mueven, y es frecuente que una casa que llevaba años sin problema empiece a tenerlo justo entonces.',
    ],
  },
  signs: {
    heading: 'Cómo se manifiesta en construcción nueva',
    intro:
      'En casa nueva las señales son más discretas que en una casona, porque hay menos madera expuesta. Estas son las que aparecen primero:',
    items: [
      'Túneles de tierra subiendo por el interior de un clóset, por el muro de la cochera o por el arranque de la escalera.',
      'La base de un clóset empotrado o un zócalo de madera que suena hueco al golpearlo.',
      'Marco de puerta con la pintura abombada, como con una burbuja debajo.',
      'Alas sueltas del mismo tamaño junto a una ventana o bajo la luz del patio tras un día húmedo.',
      'Tierra fina junto a la junta de la losa o donde el muro toca el piso, que reaparece tras barrerla.',
      'Aparición del problema poco después de que empezó una obra en la manzana.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se revisa una casa nueva de Altamira',
    paragraphs: [
      'La inspección busca el punto de subida en la losa: juntas de colado, pasos de instalación hidráulica y sanitaria, encuentro de muro con piso y el arranque de los clósets empotrados. En construcción nueva ese recorrido interior rinde más que buscar túneles afuera, porque la termita sube por dentro y no se expone.',
      'El tratamiento combina aplicación con jeringa en la madera afectada, que llega a las galerías internas sin desmontar la carpintería, y una barrera química en el suelo perimetral y en los pasos de instalación, que es lo que corta la reposición desde abajo. En casa nueva el daño suele estar en carpintería y es tratable sin obra.',
      'Cuando el origen es material enterrado no siempre se puede retirar sin romper, y hay que decirlo con franqueza: en ese caso la barrera es lo que sostiene el resultado, y conviene revisar de nuevo pasado un tiempo en lugar de dar el tema por cerrado.',
      'Si la casa está en obra o va a ampliarse, el mejor momento para tratar el suelo es antes de colar. Un pretratamiento cuesta una fracción de lo que cuesta resolverlo con la casa terminada, y en fraccionamiento en expansión vale la pena plantearlo.',
    ],
    checks: [
      'Juntas de colado y encuentro de losa con muro.',
      'Pasos de instalación hidráulica y sanitaria a través del piso.',
      'Arranque de clósets empotrados y muebles bajos de cocina.',
      'Marcos, contramarcos y zócalos de madera.',
      'Perímetro exterior, jardinera y relleno pegado a la construcción.',
      'Obra reciente en el predio o en la manzana.',
    ],
  },
  faqs: [
    {
      question: 'Mi casa tiene cuatro años. ¿Cómo puede tener termita?',
      answer:
        'Es el caso más frecuente que atendemos en Altamira, y la explicación está en el suelo, no en la casa. Desmontar y rellenar desplaza colonias que ya vivían ahí, y la obra suele dejar enterrados restos de cimbra, polines y tarima. La termita sube desde ese material hasta la carpintería de la casa nueva. La edad de la construcción no la protege.',
    },
    {
      question: '¿Se puede tratar el suelo antes de construir?',
      answer:
        'Sí, y es la intervención que mejor relación tiene entre costo y resultado. Aplicar la barrera antes de colar la losa protege desde el arranque y cuesta una fracción de lo que cuesta resolverlo después. Si está por construir o ampliar, es el momento de plantearlo; con la casa terminada las opciones son más acotadas.',
    },
    {
      question: 'Empezó justo cuando construyeron al lado. ¿Es casualidad?',
      answer:
        'Casi nunca lo es. El movimiento de tierra desplaza colonias que estaban asentadas, y las construcciones vecinas pasan a ser lo más disponible. Es tan frecuente que cuando alguien nos llama por primera vez preguntamos si hubo obra cerca, y muchas veces esa es toda la explicación.',
    },
    {
      question: 'Encontré un túnel dentro del clóset. ¿Lo limpio?',
      answer:
        'Mejor no antes de la visita. Ese cordón de tierra marca exactamente por dónde sube la colonia y en casa nueva suele ser la única pista visible, porque el resto del recorrido va por dentro de la losa. Si ya lo limpió, anote dónde estaba y a qué altura llegaba.',
    },
    {
      question: '¿Hay que romper piso para tratar?',
      answer:
        'En la mayoría de los casos no. La aplicación con jeringa en la carpintería y la barrera en el perímetro y en los pasos de instalación se hacen sin obra. Romper solo se plantea cuando el origen está en material enterrado bajo la losa y el ataque se repite pese al tratamiento, y en ese caso se lo decimos antes, no después de intentarlo.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'hormigas' },
    { zone: 'ciudad-madero', pest: 'termitas' },
  ],
}

const ratas: IntersectionContent = {
  zone: 'altamira',
  pest: 'ratas',
  h1: 'Ratas en Altamira: nave, andén y patio de maniobras',
  metaTitle: 'Control de ratas en Altamira | Naves y almacenes',
  metaDescription:
    'Desratización en Altamira: perímetro de nave, andén, racks y patio de maniobras. Estaciones cerradas, plano de ubicación y bitácora de visitas.',
  intro: [
    'En una nave de Altamira el roedor no es solo un problema de plaga: es un problema de continuidad. Un cable roído en un tablero puede parar una línea, y un hallazgo en almacén puede frenar un embarque si el cliente audita a sus proveedores.',
    'La ventaja frente a una casa es que en industria el control se puede plantear en serio: perímetro definido, cerco, accesos contables y posibilidad de monitorear con método. La desventaja es la escala y la presión del entorno, que en el corredor industrial es alta y constante.',
    'Por eso acá no vendemos una visita. Se plantea un esquema con estaciones en perímetro, monitoreo interior y revisión periódica, porque la reinfestación desde afuera no es la excepción: es la regla.',
  ],
  localContext: {
    heading: 'Por dónde entra el roedor a una nave',
    paragraphs: [
      'El andén es la entrada más obvia y la más subestimada. Una cortina que no cierra al ras, un burlete vencido o una puerta que queda abierta durante la maniobra dejan un hueco por el que pasa una rata sin esfuerzo. En operación de carga esas puertas están abiertas buena parte del turno.',
      'El patio de maniobras da el refugio. Tarimas apiladas, chatarra, contenedores en desuso, maleza en la franja del cerco y áreas sin pavimentar donde se puede madriguear. Una rata que vive en el patio y come en el almacén no necesita anidar adentro, y por eso el trampeo interior a veces da poco mientras el problema sigue.',
      'La entrada de instalaciones es el tercer frente: pasos de tubería, canalizaciones eléctricas, ductos de extracción y juntas constructivas. En nave nueva suelen estar mejor resueltos que en construcción antigua, pero basta un paso sin sellar para que el resto no importe.',
      'El entorno pesa mucho. Corredor industrial con predios en obra, lotes sin desarrollar, humedales cercanos y movimiento continuo de carga: hay reposición permanente desde afuera. Es la diferencia con una casa de Madero, donde el foco suele ser un baldío puntual y acotado.',
    ],
  },
  signs: {
    heading: 'Señales en una instalación industrial',
    intro:
      'En superficies grandes la señal indirecta vale más que el avistamiento, porque llega antes. Estas son las que se leen mejor:',
    items: [
      'Marcas de grasa oscura a lo largo de un muro, del canto de un rack o de una canalización: son rutas de paso.',
      'Excremento concentrado en un pasillo de rack o detrás de una estiba, y no repartido.',
      'Cableado roído en tablero, canalización o equipo, con riesgo eléctrico asociado.',
      'Empaque mordido en la parte alta de la estiba, típico de rata de techo.',
      'Madrigueras en la franja sin pavimentar del perímetro o bajo tarima apilada en el patio.',
      'Consumo en las estaciones perimetrales concentrado siempre en el mismo tramo del cerco.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se plantea una instalación de Altamira',
    paragraphs: [
      'Se empieza por el perímetro: se recorre el cerco, se define la ubicación de las estaciones y se levanta un plano con la posición de cada una. Ese plano no es burocracia: es lo que permite leer dónde está entrando la presión, porque el consumo concentrado en un tramo señala el sector por donde llegan.',
      'Adentro se trabaja con monitoreo y trampeo, no con cebo suelto. En almacén de alimento o de producto terminado no corresponde otra cosa, y además el trampeo interior es lo que da la lectura de si algo pasó la barrera perimetral.',
      'El sellado y las condiciones cierran el esquema: cortinas que ajusten al ras, burletes en andén, pasos de instalación sellados, tarima levantada del suelo y separada del muro, y la franja del cerco despejada. Sin eso, las estaciones bajan la población pero el sitio sigue siendo habitable.',
      'De cada visita queda registro de lo revisado, el consumo por estación y las recomendaciones pendientes. En el corredor industrial esa bitácora es lo que sostiene el control frente a una auditoría de proveedor, y conviene tenerla desde la primera visita.',
    ],
    checks: [
      'Cerco perimetral, franja sin pavimentar y ubicación de estaciones.',
      'Andén: cortinas, burletes y huecos durante la maniobra.',
      'Pasos de instalación, canalizaciones y ductos de extracción.',
      'Patio: tarima apilada, chatarra y contenedores en desuso.',
      'Pasillos de rack, estibas sin rotar y almacén de alimento.',
      'Comedor, vestidores y manejo de residuos.',
    ],
  },
  faqs: [
    {
      question: '¿Qué necesito para pasar una auditoría de proveedor?',
      answer:
        'Lo que se suele revisar es que exista un plano con la ubicación de las estaciones, un registro de visitas con el consumo de cada una, y la información de los productos aplicados. Nosotros dejamos constancia de eso en cada visita. Si su cliente exige un formato particular, conviene decirlo antes de empezar para armarlo así desde el principio.',
    },
    {
      question: '¿Se puede usar cebo dentro del almacén?',
      answer:
        'En almacén de alimento o de producto terminado no corresponde, y no lo hacemos. Adentro trabajamos con monitoreo y trampeo, que además es lo que permite saber si algo cruzó la barrera perimetral. El cebo va en estaciones cerradas y rotuladas en el perímetro exterior, que es donde tiene sentido.',
    },
    {
      question: 'El consumo se concentra siempre en el mismo tramo del cerco. ¿Qué indica?',
      answer:
        'Que la presión entra por ahí, y suele haber una explicación concreta del otro lado: un predio en obra, un lote con maleza, un canal o un almacenamiento de residuos. Es de los datos más útiles que da el esquema, porque permite reforzar ese sector en vez de repartir esfuerzo por todo el perímetro.',
    },
    {
      question: 'Encontramos cable roído en un tablero. ¿Es urgente?',
      answer:
        'Sí, y por el riesgo eléctrico antes que por la plaga. Le recomendamos que lo revise un electricista además de tratar, porque el daño ya hecho no se resuelve con el control. En paralelo buscamos por dónde está llegando a esa canalización, que casi siempre es un paso de instalación sin sellar.',
    },
    {
      question: '¿Con qué frecuencia hay que revisar?',
      answer:
        'En instalación industrial del corredor conviene un esquema periódico y no un servicio único, porque la reposición desde afuera es constante. La frecuencia se define con la lectura de las primeras semanas: si el consumo perimetral se estabiliza bajo, se puede espaciar; si un tramo sigue activo, ahí se sostiene la revisión.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'cucarachas' },
    { zone: 'ciudad-madero', pest: 'ratas' },
  ],
}

const alacranes: IntersectionContent = {
  zone: 'altamira',
  pest: 'alacranes',
  h1: 'Alacranes en Altamira: fraccionamientos y desmonte',
  metaTitle: 'Control de alacranes en Altamira | Casas nuevas',
  metaDescription:
    'Alacranes en Altamira: casas nuevas sobre terreno recién desmontado y obra en la manzana. Sellado perimetral y tratamiento de grietas.',
  intro: [
    'La llamada típica de Altamira es esta: casa nueva, fraccionamiento en expansión, y alacranes desde que se mudaron. La familia lo vive como un defecto de la casa y no lo es: es el terreno.',
    'Cuando se desmonta un predio y se remueve tierra, las colonias que vivían ahí no desaparecen. Se desplazan a lo más cercano, y lo más cercano son las casas que se acaban de construir. Por eso el problema es más intenso en las manzanas del frente de avance del fraccionamiento, donde la obra todavía está andando.',
    'Es también la razón por la que acá la buena noticia es real: en una casa nueva el perímetro se puede cerrar bien, porque los huecos son pocos y accesibles. No es el caso de una casona de un siglo.',
  ],
  localContext: {
    heading: 'Por qué el frente de obra manda',
    paragraphs: [
      'En un fraccionamiento en expansión hay siempre una franja donde se está construyendo: excavación, movimiento de tierra, material apilado y casas a medio terminar. Esa franja funciona como una fuente continua de alacranes hacia las manzanas ya habitadas, y el efecto dura mientras la obra avanza.',
      'La casa a medio construir de la manzana es un refugio ideal: sin puertas ni ventanas, con material apilado, sombra y humedad. Cuando esa casa se termina y se ocupa, lo que estaba adentro se reparte a las de alrededor.',
      'Los humedales y la vegetación sin desmontar del entorno mantienen población de base. Los fraccionamientos que colindan con esa franja tienen presión permanente, no un pico asociado a la obra, y eso cambia la frecuencia de revisión que conviene.',
      'La ventaja de la construcción nueva es concreta: aplanados sanos, juntas cerradas y pocos huecos estructurales. Salvo el paso de instalaciones y el burlete de las puertas, no hay tanto por donde entrar. Sellar bien acá rinde mucho más que en Tampico, donde los huecos de un muro de un siglo no se terminan nunca.',
    ],
  },
  signs: {
    heading: 'Qué evaluar en una casa de fraccionamiento',
    intro:
      'El alacrán no deja rastro fácil. Lo que sí se puede evaluar son las condiciones y el entorno:',
    items: [
      'Hallazgos que empezaron al mudarse o al arrancar una obra en la manzana.',
      'Casa en construcción, lote baldío o material apilado a menos de una cuadra.',
      'Burlete de la puerta a patio o a cochera que no toca el piso.',
      'Registros del patio sin tapa o con la tapa mal asentada.',
      'Jardinera recién hecha, tierra de relleno o pasto en rollo pegado al muro.',
      'Presencia notoria de grillos y cochinillas, que son su alimento.',
    ],
  },
  howWeWork: {
    heading: 'Qué hace el técnico en una casa nueva',
    paragraphs: [
      'El recorrido es perimetral: contacto del muro con el piso, pasos de instalación, registros, burletes de todas las puertas al exterior y el estado de la jardinera. En construcción nueva la lista de accesos es corta y eso juega a favor: se puede cerrar de verdad, no mitigar.',
      'La aplicación va con polvos residuales en las grietas y hendiduras que se identificaron, más tratamiento perimetral en el contacto con el suelo y en la base de la barda. No se nebuliza el interior: el alacrán no está en el aire de la sala, está metido en un hueco.',
      'Cuando el frente de obra está activo se lo planteamos con franqueza: mientras siga avanzando va a haber reposición, y conviene una revisión durante ese período en lugar de esperar que un solo tratamiento resuelva algo que se está moviendo. Cuando la obra termina, el problema baja solo.',
      'Y lo que corresponde decir siempre: ante una picadura, atención médica inmediata. Nuestro trabajo es sobre el inmueble y no sustituye ni debe demorar esa valoración.',
    ],
    checks: [
      'Burletes de puertas a patio, cochera y jardín.',
      'Pasos de instalación a través de muro y losa.',
      'Registros, coladeras y el ajuste de sus tapas.',
      'Contacto de muro con piso en todo el perímetro exterior.',
      'Jardinera, relleno y material apilado contra la construcción.',
      'Entorno: frente de obra, lote baldío y franja sin desmontar.',
    ],
  },
  faqs: [
    {
      question: 'La casa es nueva. ¿Por qué hay alacranes?',
      answer:
        'Porque el problema no es la casa, es el terreno. Al desmontar y remover tierra, las colonias que vivían ahí se desplazan a lo más cercano, que son las casas recién construidas. Es la situación más común en fraccionamiento en expansión de Altamira y no indica ningún defecto de la construcción.',
    },
    {
      question: '¿Va a seguir mientras construyan en la manzana?',
      answer:
        'Mientras el frente de obra esté activo hay reposición, sí. Por eso en esa etapa conviene una revisión durante el período en lugar de un tratamiento único, y reforzar el sellado, que es lo que sí queda. Cuando la obra de la zona termina, la presión baja de forma notoria por sí sola.',
    },
    {
      question: 'En una casa nueva, ¿se puede cerrar el paso del todo?',
      answer:
        'Se puede llegar bastante cerca, y es una ventaja real frente a construcción antigua. En obra nueva los accesos son pocos y accesibles: pasos de instalación, registros y burlete de puertas. Cerrados esos tres, queda muy poco por donde entrar. En una casona de un siglo eso es imposible; acá no.',
    },
    {
      question: 'Hay una casa a medio construir en la cuadra. ¿Afecta?',
      answer:
        'Bastante. Una construcción sin puertas ni ventanas, con material apilado y sombra, es un refugio excelente, y cuando se termina y se ocupa lo que estaba adentro se reparte a las casas de alrededor. Si tiene una así cerca, conviene reforzar su propio perímetro sin esperar a que aparezcan.',
    },
    {
      question: '¿Es seguro el tratamiento con niños en casa?',
      answer:
        'El polvo se aplica dentro de grietas y hendiduras, no en superficies de contacto ni en zonas de juego, y el trabajo es sobre todo perimetral. El técnico pregunta antes de empezar si hay bebés, personas con asma o mascotas, y ajusta la aplicación y el orden de las áreas. En recámara de niños se trata el perímetro y no el interior del cuarto.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'garrapatas' },
    { zone: 'tampico', pest: 'alacranes' },
  ],
}

const chinches: IntersectionContent = {
  zone: 'altamira',
  pest: 'chinches',
  h1: 'Chinches de cama en Altamira: alojamiento de personal',
  metaTitle: 'Chinches de cama en Altamira | Alojamiento de personal',
  metaDescription:
    'Chinches de cama en Altamira: cuartos de personal rotativo, literas y casas compartidas. Tratamiento por bloque con jeringa y seguimiento.',
  intro: [
    'El corredor industrial de Altamira mueve personal que rota: contratistas por proyecto, cuadrillas de paro de planta, técnicos que vienen por semanas. Ese movimiento se aloja en cuartos rentados, casas compartidas y hospedaje de estancia corta, y la chinche de cama viaja exactamente así, en el equipaje de alguien.',
    'Es la plaga menos ligada a la limpieza y la más ligada a la rotación. Un alojamiento impecable con alta rotación tiene más riesgo que una casa desordenada donde vive siempre la misma gente.',
    'Y es la que peor tolera el trabajo parcial. En un alojamiento con varias camas por cuarto o con literas, tratar solo donde se reportó garantiza que en semanas aparezca en la habitación de al lado.',
  ],
  localContext: {
    heading: 'Por qué el alojamiento compartido la multiplica',
    paragraphs: [
      'En un cuarto con varias camas o con literas, la distancia entre un colchón y el siguiente se mide en centímetros. La chinche no necesita recorrer: pasa de una base a otra por el piso, por el zócalo o por la estructura misma de la litera, que es un camino continuo de metal y tornillería con huecos perfectos para refugiarse.',
      'La rotación de ocupantes hace lo suyo. Cada persona que entra puede traer un foco nuevo y cada persona que sale puede llevárselo, así que un alojamiento con movimiento semanal tiene entradas repetidas y no un evento único. Tratar una vez y no volver a mirar no funciona en ese escenario.',
      'El equipaje y la ropa de trabajo agregan un vector propio del perfil industrial: mochilas y maletas que se apoyan en el piso o sobre la cama, y ropa que se guarda en lockers compartidos. El locker es un punto que casi nunca se revisa y donde la chinche encuentra oscuridad, tela y juntas.',
      'El clima cálido y estable de la costa acorta los ciclos, así que una detección tardía se paga con más focos repartidos. Acá no hay una temporada baja en la que el problema se frene solo.',
    ],
  },
  signs: {
    heading: 'Cómo detectarla en un alojamiento',
    intro:
      'En hospedaje compartido conviene revisar por rutina y no esperar la queja. Estas son las señales:',
    items: [
      'Picaduras en línea o en grupo en brazos, hombros y tobillos de uno o varios ocupantes.',
      'Puntos oscuros del tamaño de una cabeza de alfiler en costuras del colchón, en la base o en el tubo de la litera.',
      'Manchas pequeñas de sangre en las sábanas al levantarse.',
      'Cascarones traslúcidos con forma de chinche en juntas, tornillería y costuras: son mudas.',
      'Ejemplares vivos en la unión del tubo de la litera, en la ranura del tomacorriente o detrás del cabecero.',
      'Reportes que se repiten en el mismo cuarto con distintos ocupantes a lo largo del tiempo.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata un alojamiento de Altamira',
    paragraphs: [
      'La inspección se hace con linterna, cama por cama: costuras del colchón, base, estructura y tornillería de la litera, zócalo, tomacorrientes y lockers. En alojamiento compartido se revisan todas las camas del cuarto y los cuartos contiguos, no solo la del ocupante que reportó.',
      'El tratamiento va con aplicación con jeringa en costuras, juntas y uniones —incluida la tornillería de las literas, que es donde más focos encontramos— más polvo residual en grietas y detrás de zócalos. Ningún aerosol llega a los huevos alojados en una costura, y aplicarlo solo dispersa a los adultos.',
      'Siempre se programa una segunda visita, porque los huevos eclosionan de forma escalonada. En alojamiento con rotación alta conviene además dejar una rutina de revisión al cambio de ocupante, que es cuando entra el riesgo, y no esperar la siguiente queja.',
      'Del lado del cliente pedimos lavar y secar a temperatura alta la ropa de cama, no mover colchones de un cuarto a otro y no reasignar a un ocupante a otra habitación antes de tratar: es la forma más común de propagar el problema por todo el alojamiento.',
    ],
    checks: [
      'Costuras y perímetro de cada colchón y base del cuarto.',
      'Estructura y tornillería de literas, punto por punto.',
      'Zócalo, juntas del piso y grietas del muro.',
      'Tomacorrientes, apagadores y cabeceras.',
      'Lockers, repisas y zona donde se apoya el equipaje.',
      'Cuartos contiguos y los que comparten muro o instalación.',
    ],
  },
  faqs: [
    {
      question: 'Solo un trabajador reporta picaduras. ¿Hay que tratar todo el cuarto?',
      answer:
        'Sí, y también los contiguos. Las personas reaccionan distinto a la picadura: puede haber ocupantes con focos en su cama y sin ninguna marca visible. Si se trata solo la cama del que reportó, lo habitual es que el siguiente reporte llegue en semanas desde la de al lado. En alojamiento compartido el alcance es el cuarto, no la cama.',
    },
    {
      question: '¿Por qué revisan la tornillería de las literas?',
      answer:
        'Porque es donde más focos encontramos en alojamiento de personal. Los tubos, las uniones atornilladas y las soldaduras dejan huecos oscuros y protegidos a centímetros del colchón, y ningún aerosol llega ahí. Se trata con jeringa punto por punto, que es lento pero es lo que resuelve.',
    },
    {
      question: 'Hay rotación de personal cada semana. ¿Qué conviene?',
      answer:
        'Con rotación alta el riesgo no es un evento único sino una entrada repetida, así que conviene una rutina de revisión al cambio de ocupante en lugar de esperar la queja. Es mucho más barato detectar un foco incipiente en una cama que tratar un alojamiento entero tres meses después.',
    },
    {
      question: '¿Se puede tratar sin desalojar el alojamiento?',
      answer:
        'Se trabaja por cuartos y se coordina para que el impacto sea el mínimo, pero el cuarto que se trata sí queda fuera de uso durante la aplicación y el tiempo de reingreso que indique el técnico. Lo que pedimos es no reasignar a esos ocupantes a otra habitación del mismo alojamiento, porque se llevan el problema.',
    },
    {
      question: 'El mismo cuarto reporta cada tanto con distintos ocupantes. ¿Qué pasa?',
      answer:
        'Que quedó un foco vivo y no que llegue gente infestada una y otra vez. Cuando el reporte se repite en la misma habitación con personas distintas, casi siempre hay huevos o adultos en un punto que no se trató: la tornillería de la litera, un locker o el zócalo. Ese cuarto necesita una inspección a fondo, no otra aplicación igual.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'garrapatas' },
    { zone: 'ciudad-madero', pest: 'chinches' },
  ],
}

const garrapatas: IntersectionContent = {
  zone: 'altamira',
  pest: 'garrapatas',
  h1: 'Garrapatas en Altamira: perros de vigilancia y monte',
  metaTitle: 'Control de garrapatas en Altamira | Predios y casetas',
  metaDescription:
    'Garrapatas en Altamira: perros de vigilancia en predios, casetas y fraccionamientos junto a monte sin desmontar. Tratamiento de caseta y perímetro.',
  intro: [
    'En Altamira la garrapata llega por dos vías que no existen igual en las otras dos ciudades. Una es el perro de vigilancia: predios industriales, obras y bodegas que mantienen animales sueltos en el patio, con una caseta y un turno de vigilante. La otra es el fraccionamiento nuevo que colinda con monte o potrero sin desmontar.',
    'En los dos casos el punto de partida está afuera, en vegetación alta donde la garrapata espera a que pase un huésped. Lo que cambia respecto de una casa consolidada es que acá hay mucha más superficie de vegetación sin intervenir y muchas menos grietas de construcción vieja.',
    'Eso reordena el trabajo. Acá el peso está en el perímetro, la vegetación y la caseta; el interior importa cuando ya se estableció, no antes.',
  ],
  localContext: {
    heading: 'Dónde espera la garrapata en un predio de Altamira',
    paragraphs: [
      'La franja de vegetación sin desmontar del cerco es el sitio de espera clásico. Pasto alto, arbustos y borde de terreno sin intervenir: la garrapata trepa a la punta de una hoja y aguarda a que pase un animal. En un predio industrial esa franja puede tener cientos de metros y casi nunca se corta con la frecuencia necesaria.',
      'La caseta del perro de vigilancia concentra el problema. Es el punto donde el animal duerme todos los días, tiene sombra permanente, madera o lámina con juntas, y suele estar en una esquina del patio que no se limpia a fondo. Ahí se encuentra la puesta cuando la infestación ya lleva tiempo.',
      'En fraccionamiento nuevo la vía es el paseo: el perro sale a la calle sin pavimentar o al lote baldío del frente de avance, carga ejemplares y los trae a casa. La casa nueva ofrece menos grietas que una construcción antigua, pero el zócalo, la junta de loseta y el marco de la puerta alcanzan para la puesta.',
      'La caseta de vigilancia de personal —la garita— es un punto propio del perfil industrial que se pasa por alto. Cuando el vigilante convive con el animal en un espacio chico y cerrado, la garrapata pasa del patio al interior de la garita, y de ahí a la ropa.',
    ],
  },
  signs: {
    heading: 'Qué mirar en un predio y en una casa nueva',
    intro:
      'La señal cambia según haya o no construcción vieja donde esconderse. Estas son las que orientan:',
    items: [
      'Concentración en la caseta del perro, en su sombra habitual y en el rincón del patio donde se echa.',
      'Ejemplares en la franja de vegetación del cerco, sobre todo en la punta del pasto alto.',
      'Garrapatas dentro de la garita o en la ropa del personal de vigilancia.',
      'El perro con garrapatas otra vez a los pocos días de tratarlo.',
      'Ejemplares trepando por el muro de la caseta o del cuarto de vigilancia, buscando altura para la puesta.',
      'Masas de huevos de aspecto granulado en la junta de la lámina, en la madera de la caseta o en el zócalo.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata un predio de Altamira',
    paragraphs: [
      'El trabajo empieza afuera y por la vegetación, que es donde la garrapata espera. Se trata con aspersión dirigida la franja del cerco, el borde de terreno sin intervenir y las zonas de sombra del patio, y se acuerda la frecuencia de corte del pasto, que en un predio grande es la medida que más cambia el resultado y no depende de nosotros.',
      'La caseta del animal se trata como el foco que es: aspersión en el exterior, polvo residual en juntas de madera o lámina, y retiro de la cama del perro para tratarla aparte. Si la caseta está muy deteriorada, lo decimos: a veces reemplazarla resuelve más que cualquier aplicación.',
      'Adentro se trabaja cuando ya hay señales de establecimiento: zócalo, juntas y parte alta del muro de la garita o de la casa, que es adonde suben a poner. En construcción nueva esa parte suele ser más acotada que en una casa antigua, y eso juega a favor.',
      'Lo del animal corre por veterinaria y conviene el mismo día. Si el predio queda tratado y el perro sigue cargando ejemplares, el ciclo arranca de nuevo apenas se echa en su lugar de siempre. La segunda visita tampoco es opcional: los huevos ya puestos eclosionan después de la aplicación.',
    ],
    checks: [
      'Franja de vegetación del cerco y borde sin desmontar.',
      'Caseta del perro: juntas de madera o lámina, y su cama.',
      'Zona de sombra del patio donde el animal se echa.',
      'Garita de vigilancia: zócalo, juntas y parte alta del muro.',
      'Recorrido habitual del animal dentro del predio.',
      'Colindancia con monte, potrero o lote sin desmontar.',
    ],
  },
  faqs: [
    {
      question: 'Tengo perros de vigilancia en el predio. ¿Cómo se maneja?',
      answer:
        'Se trata el predio y la caseta, que es el foco real, y en paralelo se coordina con veterinaria lo del animal. El técnico le indica cuánto tiempo deben permanecer fuera de las áreas tratadas antes de volver. Lo que no funciona es tratar solo a los perros: la puesta está en la caseta y en la vegetación, no en el animal.',
    },
    {
      question: '¿Cada cuánto hay que cortar el pasto del cerco?',
      answer:
        'Es la medida que más cambia el resultado y la que menos depende de nosotros. La garrapata espera trepada en la punta del pasto alto; con la franja corta pierde el sitio de espera. En la visita acordamos una frecuencia realista según el tamaño del predio, porque un cerco de cientos de metros necesita un plan, no buena voluntad.',
    },
    {
      question: 'Mi casa es nueva y aun así aparecen. ¿De dónde salen?',
      answer:
        'Del lote baldío o del monte sin desmontar del frente de avance del fraccionamiento. El perro sale a la calle sin pavimentar, carga ejemplares y los trae. La construcción nueva ofrece menos escondites que una casa antigua, pero el zócalo, la junta de loseta y el marco de la puerta alcanzan para que ponga huevos.',
    },
    {
      question: 'Aparecieron garrapatas dentro de la garita. ¿Es raro?',
      answer:
        'No, y es un punto que casi siempre queda fuera del servicio. Cuando el vigilante comparte un espacio chico y cerrado con el animal, la garrapata pasa del patio al interior y de ahí a la ropa. La garita se trata como cualquier área interior: zócalo, juntas y parte alta del muro.',
    },
    {
      question: '¿Alcanza con una sola aplicación?',
      answer:
        'No. Los huevos que ya estaban puestos eclosionan después de la primera aplicación, así que la segunda visita es la que cierra el ciclo. En predio grande con vegetación abundante pueden hacer falta más, y en ese caso lo planteamos como un esquema con frecuencia definida en lugar de vender un servicio único.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'alacranes' },
    { zone: 'ciudad-madero', pest: 'garrapatas' },
  ],
}

const hormigas: IntersectionContent = {
  zone: 'altamira',
  pest: 'hormigas',
  h1: 'Hormigas en Altamira: suelo removido, jardín y almacén',
  metaTitle: 'Control de hormigas en Altamira | Casas nuevas y naves',
  metaDescription:
    'Hormigas en Altamira: colonias en suelo removido de obra, jardines nuevos y almacenes. Cebo en gel y tratamiento de nido. Revisión sin costo.',
  intro: [
    'Altamira tiene dos escenarios de hormiga que no se parecen entre sí, y conviene separarlos porque el tratamiento cambia.',
    'Uno es la casa de fraccionamiento nuevo. Suelo removido, relleno reciente, jardín recién plantado y pasto en rollo: un terreno alterado es un terreno donde las colonias se reacomodan, y el jardín nuevo con riego frecuente es el mejor sitio disponible en varias manzanas. La casa se lleva las consecuencias.',
    'El otro es el almacén, donde la hormiga no busca tierra sino producto. Ahí el problema es de acceso y de mercancía, y en una nave con almacén de alimento el estándar es distinto: no se trata de que molesten, se trata de que no debería haber.',
  ],
  localContext: {
    heading: 'Suelo removido afuera, mercancía adentro',
    paragraphs: [
      'En fraccionamiento nuevo la obra deja el suelo alterado y con material enterrado, y las colonias que estaban ahí se reacomodan en lo que encuentran: el relleno junto a la banqueta, el hueco bajo la loseta recién puesta, la jardinera que se armó con tierra traída. Nada de eso estaba asentado hace tres años, y por eso el problema es tan común en las manzanas del frente de avance.',
      'El jardín nuevo agrava el cuadro. Pasto en rollo con riego diario, plantas recién puestas y tierra permanentemente húmeda es el mejor terreno disponible en varias cuadras. La colonia se instala afuera y entra a la casa por la junta de la loseta o por debajo del marco de la puerta al patio: adentro solo se ve la fila.',
      'En nave y bodega el escenario es otro. La hormiga entra por juntas constructivas, pasos de instalación y el andén, y va a producto: azúcar, granos, alimento para mascota, cualquier cosa dulce en una estiba. En un almacén el rastro es largo y se ve claro, porque recorre distancias que en una casa no haría.',
      'El comedor de personal es el punto que dispara la queja en instalación industrial, igual que pasa con la cucaracha. Y comparte causa: restos, humedad y un acceso que quedó sin sellar.',
    ],
  },
  signs: {
    heading: 'Cómo leer el rastro',
    intro:
      'La fila indica que hay colonia cerca, pero no dónde. Estas señales ubican el nido y miden el tamaño:',
    items: [
      'Fila que entra por la junta de una loseta nueva, por debajo del marco de la puerta al patio o por la banqueta.',
      'Montoncitos de tierra fina sobre el relleno, en la jardinera o en la junta de la banqueta.',
      'Hormigas saliendo de un jardín recién plantado o del rollo de pasto.',
      'En almacén, rastro largo y sostenido que cruza pasillos hasta una estiba concreta.',
      'Actividad concentrada en un punto con humedad: bajo fregadero, junto a una bajada de agua o en una filtración.',
      'Defoliación en las plantas nuevas del jardín, con cortes limpios y semicirculares en las hojas.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trabaja según el escenario',
    paragraphs: [
      'En casa nueva se sigue la fila hasta el punto donde entra al piso, al muro o al jardín, y se observa qué está comiendo: si va a lo dulce o a lo graso cambia el cebo. Esa lectura de cinco minutos decide si el tratamiento funciona a la primera. La aplicación es gel en cebo cerca del acceso, para que la obrera lo lleve al nido, que está afuera.',
      'Cuando el nido está en el jardín o en el relleno, se trata directamente el punto del nido además del recorrido. En jardín nuevo conviene revisar además el riego: tierra permanentemente saturada mantiene el sitio atractivo por más que se trate, y eso es una decisión de mantenimiento, no de fumigación.',
      'En almacén el planteo cambia: se ubican los accesos por juntas constructivas y andén, se trata el recorrido con cebo y se sella lo que se pueda. En almacén de alimento no se aplica cebo suelto: se trabaja con formulaciones y ubicaciones compatibles con producto, y se deja registro de qué se aplicó y dónde.',
      'En los dos escenarios pedimos lo mismo: no rociar la fila. Un insecticida de contacto corta el transporte del cebo justo antes de que haga efecto y, en algunas especies, parte la colonia en varios nidos.',
    ],
    checks: [
      'Punto de entrada de la fila: junta de loseta, marco de puerta, banqueta.',
      'Jardín nuevo, pasto en rollo, jardinera y tierra de relleno.',
      'Riego y puntos de humedad permanente.',
      'Juntas constructivas, pasos de instalación y andén, en nave.',
      'Estibas con producto dulce o alimento en almacén.',
      'Comedor de personal y manejo de residuos.',
    ],
  },
  faqs: [
    {
      question: 'Pusimos jardín nuevo y aparecieron. ¿Hay relación?',
      answer:
        'Directa. Pasto en rollo y plantas recién puestas vienen con tierra propia y se riegan a diario, así que en un fraccionamiento con suelo removido ese jardín pasa a ser el mejor terreno disponible en varias manzanas. Se trata con cebo, y además conviene revisar la frecuencia de riego: tierra siempre saturada mantiene el sitio atractivo por más que se aplique.',
    },
    {
      question: 'Están cortando las hojas de mis plantas. ¿Son las mismas?',
      answer:
        'No, y por eso se tratan distinto. Los cortes limpios y semicirculares en las hojas son de hormiga cortadora, que no va a la cocina: se lleva el material vegetal a su nido para cultivar hongo. Ahí el objetivo es el nido y el sendero, no el recorrido a la despensa. Si nos describe el daño en la visita, ajustamos el planteo.',
    },
    {
      question: '¿Se puede usar cebo en un almacén de alimento?',
      answer:
        'No cebo suelto. En almacén de alimento se trabaja con formulaciones y ubicaciones compatibles con producto, en puntos definidos y registrados, y se refuerza el sellado de accesos. De cada visita queda constancia de qué se aplicó y dónde, que es lo que se suele revisar en una auditoría de proveedor.',
    },
    {
      question: 'En la nave el rastro cruza todo el pasillo. ¿Es normal?',
      answer:
        'En almacén sí. La hormiga recorre distancias que en una casa no haría, porque el alimento está concentrado en un punto y el nido puede estar en una junta constructiva o afuera del edificio. Ese rastro largo es una ventaja: seguirlo hasta el extremo suele llevar directo al acceso, que es lo que hay que sellar.',
    },
    {
      question: 'Ya rocié y volvieron peor. ¿Por qué?',
      answer:
        'Es lo esperable con algunas especies. El insecticida de contacto mata a las obreras que estaban a la vista, que son una parte chica, y en varias especies provoca que la colonia se divida en nidos separados. Se termina con más focos y más filas que al principio. Por eso el cebo es lento pero es lo que llega al nido: hay que dejarlas caminar.',
    },
  ],
  related: [
    { zone: 'altamira', pest: 'termitas' },
    { zone: 'tampico', pest: 'hormigas' },
  ],
}

export const ALTAMIRA_INTERSECTIONS: readonly IntersectionContent[] = [
  moscos,
  cucarachas,
  termitas,
  ratas,
  alacranes,
  chinches,
  garrapatas,
  hormigas,
]
