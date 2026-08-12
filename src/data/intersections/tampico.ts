import type { IntersectionContent } from './types'

/**
 * Las 8 intersecciones de Tampico.
 *
 * Perfil dominante de la ciudad: comercio, hotelería y vivienda antigua. El
 * centro histórico está construido sobre traza vieja, con edificación de
 * ladrillo y madera de más de un siglo, drenaje de décadas y sótanos que se
 * inundan. Alrededor, la Laguna del Carpintero y la ribera del Pánuco
 * mantienen humedad todo el año, y la temporada de lluvias va de junio a
 * octubre.
 *
 * Cada página se apoya en ese perfil. Si un párrafo de acá sobrevive cambiando
 * "Tampico" por "Altamira", está mal escrito y hay que rehacerlo.
 */

const moscos: IntersectionContent = {
  zone: 'tampico',
  pest: 'moscos',
  h1: 'Moscos en Tampico: nebulización y control de criaderos',
  metaTitle: 'Fumigación de moscos en Tampico | Patios y jardines',
  metaDescription:
    'Control de moscos en Tampico: criaderos de patio, azoteas del centro y áreas verdes junto a la laguna. Revisión sin costo y guardia 24 horas.',
  intro: [
    'Tampico es una ciudad rodeada de agua. La Laguna del Carpintero por un lado, la ribera del Pánuco por el otro, los canales que cruzan colonias enteras y una temporada de lluvias que va de junio a octubre. El mosco no tiene que buscar mucho.',
    'Pero el criadero que llena de moscos una casa del centro casi nunca es la laguna. Es el plato de la maceta del patio, el tinaco sin tapa de la azotea o el registro destapado del pasillo. La laguna aporta presión de fondo; el patio propio aporta la población que pica todas las noches.',
    'Por eso el trabajo tiene dos mitades que no se pueden separar: bajar los adultos que ya están volando y sacar el agua donde se están formando los que vienen. Hacer solo la primera da un alivio de días.',
  ],
  localContext: {
    heading: 'Por qué en Tampico el mosco no descansa en invierno',
    paragraphs: [
      'En el centro del país el frío corta el ciclo unos meses y la población se reinicia cada año casi desde cero. Acá no pasa: la costa del Golfo se mantiene cálida y húmeda todo el año, así que el mosco sigue reproduciéndose en enero. Lo que cambia con las lluvias no es que aparezca, sino cuántos criaderos hay disponibles al mismo tiempo.',
      'Las azoteas del centro son un punto que casi nadie revisa y que en Tampico pesa mucho. La edificación antigua tiene azoteas planas, con pretil, canaletas viejas y tinacos que llevan años ahí. Basta que una canaleta esté tapada con hojas para que quede una lámina de agua permanente a dos pisos de altura, fuera de la vista de todo el mundo.',
      'En las colonias que bordean la Laguna del Carpintero y los canales el asunto es distinto: ahí hay vegetación densa y sombra, que es donde el mosco adulto pasa el día. No se reproduce en la hoja, pero descansa ahí y sale al atardecer. Un patio con setos altos y arbustos pegados al muro funciona como dormitorio y sostiene la actividad aunque el patio esté seco.',
      'La hotelería y la restauración de la ciudad tienen su propia versión del problema: terrazas, jardines, fuentes ornamentales y platos de maceta en cantidad. Un restaurante con terraza puede tener quince criaderos en macetas decorativas sin que nadie lo note, y el cliente lo percibe directamente en la mesa.',
    ],
  },
  signs: {
    heading: 'Qué indica que el criadero está adentro de su propiedad',
    intro:
      'Que haya moscos en Tampico no dice nada: los hay en toda la ciudad. Estas señales sí indican que la reproducción está ocurriendo en su propio patio o azotea:',
    items: [
      'Picaduras concentradas al amanecer y al atardecer en el patio, la terraza o el jardín, y no adentro de la casa.',
      'Actividad que se dispara dos o tres días después de una lluvia fuerte y no baja sola.',
      'Larvas visibles: hilos que se mueven a sacudones en cubetas, platos de maceta, floreros o el fondo de un tambo.',
      'Zumbido nocturno en recámaras pese a tener mosquiteros en buen estado.',
      'Moscos que salen en nube al mover un seto, una enredadera o la vegetación pegada al muro.',
      'Agua detenida en la azotea al día siguiente de llover, sobre todo junto a la canaleta o el pretil.',
    ],
  },
  howWeWork: {
    heading: 'Qué recorre el técnico en una propiedad de Tampico',
    paragraphs: [
      'La inspección arranca por la azotea, porque es donde están los criaderos que el dueño no ve. Se revisan canaletas, pretiles, tinacos y todo lo que haya quedado ahí guardado. Después se baja al patio y se marca uno por uno cada recipiente con agua, incluidos los que parecen inocentes como el plato de una maceta o el bebedero del perro.',
      'Sobre los adultos aplicamos termonebulización o nebulización en frío según el espacio: la niebla caliente penetra mejor en vegetación densa y patios, y la nebulización en frío es la que corresponde en interiores y bajo techo. La vegetación y las zonas de reposo se tratan con aspersión dirigida, que es lo que sostiene el resultado más allá de la primera semana.',
      'Lo que no hacemos es prometer que el mosco desaparece. En una ciudad con laguna, río y canales, siempre va a haber presión desde afuera. Lo que sí se logra es que su propiedad deje de ser criadero, y ahí la diferencia es grande y se nota rápido.',
    ],
    checks: [
      'Azotea completa: canaletas, pretil, tinaco, cisterna y objetos guardados.',
      'Platos de maceta, floreros, bebederos y cualquier recipiente del patio.',
      'Registros, coladeras de patio y cajas de agua sin tapa.',
      'Vegetación densa, setos y enredaderas donde el adulto pasa el día.',
      'Terrazas, fuentes ornamentales y jardineras en locales y hotelería.',
      'Patio colindante, cuando se ve desde el suyo y está en abandono.',
    ],
  },
  faqs: [
    {
      question: '¿Sirve de algo fumigar si vivo junto a la Laguna del Carpintero?',
      answer:
        'Sirve, pero conviene saber qué esperar. Viviendo pegado a un cuerpo de agua siempre va a entrar mosco desde afuera, y ningún tratamiento cambia eso. Lo que sí cambia es que su patio deje de aportar población propia y que la vegetación donde descansan de día quede tratada. La diferencia entre una casa tratada y una sin tratar en esa zona es notoria, aunque el cero no exista.',
    },
    {
      question: '¿Por qué me pican en el patio y adentro casi no?',
      answer:
        'Porque el criadero está en el patio y el mosco que pica es el que acaba de emerger ahí. Los que molestan al atardecer suelen ser de vuelo bajo y corto alcance: no viajaron, nacieron a pocos metros. Es la señal más clara de que hay agua acumulada en la propiedad, no de que falte mosquitero.',
    },
    {
      question: 'Tengo un local con terraza en el centro. ¿Se puede tratar sin cerrar?',
      answer:
        'Sí. La nebulización de una terraza se hace fuera del horario de servicio y el espacio queda utilizable en poco tiempo; el técnico indica el tiempo de reingreso al llegar. Lo que pedimos es retirar mantelería, cristalería y alimento expuesto de la zona a tratar, y aprovechar para vaciar los platos de las macetas decorativas, que en terrazas suelen ser el criadero principal.',
    },
    {
      question: '¿Cada cuánto hay que repetir en Tampico?',
      answer:
        'Depende de la presión del entorno más que del calendario. En una casa del centro sin cuerpos de agua cerca y con el patio ordenado, el intervalo se estira bastante. En una propiedad junto a la laguna, un canal o un terreno baldío inundable, conviene acercarse durante la temporada de lluvias. En la revisión le decimos cuál es su caso, no un número genérico.',
    },
    {
      question: '¿Revisan la azotea o solo el patio?',
      answer:
        'La azotea es la primera parada, y en construcción antigua del centro suele ser donde aparecen los criaderos más productivos: canaletas tapadas, tinacos sin tapa, cubetas y material guardado hace años. Es también la parte que el dueño casi nunca sube a revisar, así que es donde más seguido encontramos agua con larvas.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'ratas' },
    { zone: 'ciudad-madero', pest: 'moscos' },
  ],
}

const cucarachas: IntersectionContent = {
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
      question: '¿Por qué aparecen de golpe cuando llueve fuerte en Tampico?',
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

const termitas: IntersectionContent = {
  zone: 'tampico',
  pest: 'termitas',
  h1: 'Termitas en Tampico: revisión y tratamiento de madera',
  metaTitle: 'Control de termitas en Tampico | Casonas y madera antigua',
  metaDescription:
    'Termitas en Tampico: madera de casona antigua, humedad del subsuelo y túneles sobre muro de ladrillo. Inspección y presupuesto sin costo.',
  intro: [
    'El daño de termita en Tampico se concentra donde hay madera vieja, y en esta ciudad eso significa el centro y las colonias que lo rodean. Casonas con vigas de más de un siglo, entrepisos de duela, marcos y contramarcos de madera maciza, escaleras y barandales que llevan generaciones puestos.',
    'La particularidad local es que esa madera convive con un subsuelo húmedo. Tampico está a pocos metros sobre el nivel del río, y el agua no está lejos en ningún punto del centro. La termita subterránea, que es la que hace el daño estructural aquí, necesita exactamente eso: contacto con humedad del suelo y una vía protegida hasta la madera.',
    'El problema es que trabaja por dentro. Una viga puede verse perfecta y estar hueca; el momento en que la madera se hunde bajo el peso suele llegar años después de que la colonia entró.',
  ],
  localContext: {
    heading: 'Qué le da de comer a la termita en el centro de Tampico',
    paragraphs: [
      'La construcción antigua del centro combina muro grueso de ladrillo con elementos de madera embutidos: durmientes, cabezales de viga metidos en el muro, marcos anclados directamente a la mampostería. La termita subterránea sube desde el suelo por el interior o la cara del muro y llega a esa madera sin cruzar aire libre en ningún momento. Por eso el ataque avanza sin que nadie vea un insecto.',
      'El nivel freático alto de la zona hace el resto. La colonia mantiene su contacto con la humedad del suelo, que es lo que la sostiene, y no necesita que la madera esté mojada para atacarla. Una casona con un patio de tierra o un jardín interior le da acceso directo.',
      'La señal más característica acá son los túneles de tierra sobre el muro de ladrillo: cordones de barro del ancho de un lápiz que suben desde el piso o desde el zócalo. Es la termita construyendo su camino protegido. Sobre ladrillo aparente del centro se ven bien; sobre muro aplanado y pintado quedan escondidos detrás del zócalo o del mueble arrimado.',
      'Hay un segundo frente en la zona comercial: estanterías, tarimas, cajones y muebles de madera apoyados contra el muro en locales y bodegas del centro. Ahí la termita encuentra celulosa en cantidad y a nivel de piso, que es justo por donde llega.',
    ],
  },
  signs: {
    heading: 'Lo que se ve antes de que la madera ceda',
    intro:
      'La termita subterránea da aviso, pero con señales discretas. Estas son las que aparecen primero en construcción antigua:',
    items: [
      'Túneles de tierra del ancho de un lápiz subiendo por el muro, el zócalo o una columna, sobre todo en zonas de sombra y humedad.',
      'Un marco, un zócalo o una duela que suena hueco al golpearlo con los nudillos, aunque por fuera se vea sano.',
      'Pintura o barniz abombado en una superficie de madera, como si tuviera una burbuja debajo.',
      'Alas sueltas, todas del mismo tamaño, acumuladas junto a una ventana o bajo una lámpara después de un día húmedo.',
      'Un pequeño montón de tierra fina donde el muro toca el piso, que reaparece a los días de barrerlo.',
      'Puertas o ventanas de madera que empezaron a costar y no es por hinchazón de humedad.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se revisa una casona de Tampico',
    paragraphs: [
      'La inspección recorre el perímetro interior a nivel de piso, que es donde aparecen los túneles, y sigue por los puntos donde la madera toca la mampostería: cabezales de viga, marcos anclados, arranque de escalera, durmientes bajo la duela. Se busca el camino, no el insecto, porque el insecto está adentro de la madera y no se asoma.',
      'El tratamiento combina aplicación con jeringa directamente en la madera afectada, que llega a las galerías internas sin desarmar el elemento, y una barrera en el punto de contacto con el suelo, que es por donde la colonia repone. Sobre madera que ya perdió sección hay que ser honesto: el control detiene el ataque, pero la resistencia perdida no vuelve, y ahí entra un carpintero o un estructurista.',
      'Si aparecen túneles, la recomendación es no limpiarlos antes de la visita. Ese cordón de tierra indica por dónde sube la colonia, y borrarlo antes de la inspección obliga a buscar de nuevo un camino que ya estaba a la vista.',
    ],
    checks: [
      'Perímetro interior a nivel de piso, detrás de zócalos y muebles arrimados.',
      'Cabezales de viga y marcos anclados a muro de ladrillo.',
      'Duela, durmientes y arranque de escalera de madera.',
      'Patio interior, jardinera y cualquier punto de tierra en contacto con el muro.',
      'Estantería, tarima y mueble de madera apoyado contra el muro en locales.',
      'Zonas de sombra permanente y filtración, donde la humedad no baja.',
    ],
  },
  faqs: [
    {
      question: '¿La termita de Tampico es la que vuela o la que vive en el suelo?',
      answer:
        'La que hace el daño estructural acá es la subterránea: vive en el suelo y sube por túneles de tierra hasta la madera. Los ejemplares con alas que aparecen algunos días húmedos son de esa misma colonia, saliendo a fundar otra. Ver alas sueltas no es el principio del problema, suele ser señal de que la colonia ya está madura.',
    },
    {
      question: 'Mi casa del centro tiene vigas originales. ¿Se pueden salvar?',
      answer:
        'Depende de cuánta sección perdieron. El tratamiento con jeringa llega a las galerías internas y detiene el ataque sin desarmar la viga, y eso salva muchísimos casos. Lo que no hace es devolver madera: si la pieza ya está vaciada, hay que evaluarla estructuralmente. En la inspección le decimos con franqueza en qué punto está cada elemento.',
    },
    {
      question: '¿Por qué aparecen justo cuando empieza la temporada de lluvias?',
      answer:
        'Porque la humedad favorece los vuelos de dispersión y porque el suelo saturado empuja actividad hacia arriba. Pero la colonia no llegó con la lluvia: llevaba tiempo trabajando. Lo que hace la temporada es volverla visible, y por eso junio y julio son los meses en que más nos llaman por termitas en el centro.',
    },
    {
      question: 'Encontré un túnel de tierra en el muro. ¿Lo limpio?',
      answer:
        'Mejor no antes de la visita. Ese cordón marca exactamente por dónde sube la colonia y es la información más útil que puede darle al técnico. Si ya lo limpió no pasa nada grave, pero conviene anotar dónde estaba y a qué altura llegaba.',
    },
    {
      question: '¿Sirve el tratamiento si el vecino no trata su casa?',
      answer:
        'Sirve, aunque conviene entenderlo bien. En el centro las construcciones comparten muro y el suelo es continuo, así que la presión del predio vecino existe. La barrera en el contacto con el suelo está pensada justamente para eso: corta la vía de reposición. Lo que sí conviene es revisar de nuevo a los meses, sobre todo si el predio de al lado está en abandono.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'hormigas' },
    { zone: 'ciudad-madero', pest: 'termitas' },
  ],
}

const ratas: IntersectionContent = {
  zone: 'tampico',
  pest: 'ratas',
  h1: 'Control de ratas y ratones en Tampico',
  metaTitle: 'Control de ratas en Tampico | Centro, mercados y locales',
  metaDescription:
    'Desratización en Tampico: entretechos de casona, drenaje del centro, mercados y zona portuaria. Estaciones cerradas y sellado de accesos.',
  intro: [
    'Tampico tiene tres cosas que sostienen población de roedores todo el año: puerto con movimiento de mercancía, mercados y zona restaurantera concentrados, y una red de drenaje con muchas décadas encima. Ninguna de las tres se va a ir, así que el control acá se plantea como algo sostenido y no como una visita única.',
    'La rata que más encontramos en el centro es la de techo: trepadora, delgada, que entra por arriba. Y ese es el punto que cambia todo respecto de otras ciudades. En el centro de Tampico los edificios están pegados unos con otros, con azoteas continuas, cornisas, cables y árboles que tocan el pretil. Un techo es una calle.',
    'Por eso el trabajo grueso no está en el piso. Está en el entretecho, en el plafón y en el punto exacto por donde bajan a la cocina o a la bodega.',
  ],
  localContext: {
    heading: 'Por qué en el centro la rata llega por arriba',
    paragraphs: [
      'La construcción antigua de Tampico tiene entretechos amplios, estructuras de madera bajo la cubierta y huecos entre el muro y la losa que quedaron de origen. Para una rata de techo eso es un refugio ideal: seco, oscuro, sin depredadores y a un salto de la comida. Sube por un cable, por una tubería de bajada o por la rama que toca el pretil, y ya está adentro sin haber pisado el suelo.',
      'La continuidad de azoteas del centro convierte a una manzana entera en un solo territorio. Por eso tratar un local sin mirar los colindantes deja el trabajo a medias: la población se repone desde el techo de al lado en cuestión de días.',
      'A nivel de calle el motor son los mercados y la zona de restaurantes. Materia orgánica en cantidad, horarios de residuos que no siempre calzan con la recolección, y contenedores que quedan abiertos de noche. Y del otro lado, el drenaje viejo, que le da a la rata gris un corredor protegido entre cuadras.',
      'La zona portuaria y la ribera del Pánuco agregan presión permanente: movimiento de carga, bodegas y agua cerca. En esa franja la reinfestación no es excepción, es la regla, y el planteo tiene que ser de monitoreo continuo.',
    ],
  },
  signs: {
    heading: 'Las señales aparecen mucho antes que el animal',
    intro:
      'La rata es nocturna y evita a la gente. Cuando se ve una de día, la población suele llevar tiempo instalada. Estas señales se adelantan:',
    items: [
      'Ruido de carrera o de arrastre en el plafón o el entretecho, casi siempre entre el anochecer y la madrugada.',
      'Excremento en más de una habitación, o concentrado sobre una viga, una repisa alta o el borde del plafón.',
      'Marcas de grasa oscura en el canto de una viga, en el borde de un hueco o a lo largo de una tubería: son rutas de paso.',
      'Cableado roído, sobre todo en entretecho y detrás de tableros.',
      'Empaques mordidos en la parte alta de la estantería y no en la baja, típico de rata de techo.',
      'El perro o el gato fijándose insistentemente en un punto del techo o de un muro.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se plantea un inmueble del centro de Tampico',
    paragraphs: [
      'La primera visita es de lectura, no de aplicación. Se recorre el entretecho, el plafón y la azotea buscando rutas: marcas de grasa, excremento y los puntos por donde bajan al área de trabajo. Con eso se decide dónde va cada cosa, porque colocar cebo sin conocer el recorrido es tirar producto.',
      'El control se hace con estaciones de cebo cerradas y rotuladas, colocadas sobre las rutas detectadas, más trampeo para medir actividad real y saber si está bajando o no. Las estaciones cerradas son la única forma responsable de trabajar en un local con público, con personal o con mascotas: el producto queda dentro del dispositivo y no accesible.',
      'La parte que decide el resultado es el sellado. Se cierran los huecos de bajada, los pasos de instalación y el acceso por cornisa o por rama, y se acuerda con el cliente qué hacer con los residuos y a qué hora sacarlos. Sin eso, el sitio se vuelve a llenar desde el techo vecino, y la ciudad tiene mucho techo vecino.',
    ],
    checks: [
      'Entretecho, plafón y estructura bajo la cubierta.',
      'Azotea, cornisa y puntos de contacto con edificios colindantes.',
      'Ramas y cables que llegan al pretil o al techo.',
      'Bajadas de instalación, pasos de tubería y huecos entre muro y losa.',
      'Cuarto de basura, contenedores y horario de residuos.',
      'Almacén y estantería alta, donde la rata de techo se mueve.',
    ],
  },
  faqs: [
    {
      question: '¿Por qué se escuchan en el techo y no en el piso?',
      answer:
        'Porque en el centro de Tampico predomina la rata de techo, que es trepadora y anida arriba. Entra por la azotea, por un cable o por una rama que toca el pretil, y se instala en el entretecho o sobre el plafón. Baja solo a comer. Buscarla a nivel de piso es el error más común y explica por qué muchos tratamientos previos no funcionaron.',
    },
    {
      question: '¿El cebo es seguro en un local con clientes y personal?',
      answer:
        'Trabajamos con estaciones cerradas y rotuladas, no con cebo suelto. El producto queda dentro del dispositivo, que se abre con llave, y se coloca sobre la ruta detectada y no en zonas de paso de gente. En locales de alimentos además se registra la posición de cada estación, que es lo que suele pedir una revisión sanitaria.',
    },
    {
      question: 'Trato mi local pero el de al lado no. ¿Vale la pena?',
      answer:
        'Vale, pero hay que hacerlo entendiendo que sin sellado el resultado dura poco. En una manzana del centro las azoteas son continuas y el techo del vecino está a un salto. Lo que hace la diferencia es cerrar sus propios accesos: aunque la población siga del otro lado, deja de tener por dónde entrar a lo suyo.',
    },
    {
      question: '¿Cuánto tarda en notarse?',
      answer:
        'El ruido nocturno suele bajar en la primera o segunda semana, según el tamaño de la población y qué tan bien ubicadas quedaron las estaciones. El trampeo nos dice si realmente está bajando y no solo si dejó de escucharse. En zona de mercado o cerca del puerto conviene mantener monitoreo, porque la presión desde afuera no se detiene.',
    },
    {
      question: 'Encontré cables roídos. ¿Es de rata?',
      answer:
        'Suele serlo, y conviene tomarlo en serio por el riesgo eléctrico, no solo por la plaga. El roído en cableado de entretecho es una de las señales más frecuentes en construcción antigua del centro. Le recomendamos revisar la instalación con un electricista además de tratar, porque el daño ya hecho no se resuelve con el control de la plaga.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'cucarachas' },
    { zone: 'altamira', pest: 'ratas' },
  ],
}

const alacranes: IntersectionContent = {
  zone: 'tampico',
  pest: 'alacranes',
  h1: 'Alacranes en Tampico: sellado y control perimetral',
  metaTitle: 'Control de alacranes en Tampico | Casonas y patios',
  metaDescription:
    'Alacranes en Tampico: muro grueso de ladrillo, patios con escombro y entretechos de casona. Revisión sin costo y tratamiento perimetral.',
  intro: [
    'En Tampico el alacrán no es la plaga que más nos llaman, pero es la que más asusta, y con razón cuando hay niños en la casa. Aparece sobre todo en dos situaciones muy concretas: construcción antigua del centro con muros gruesos y huecos, y vivienda en la franja donde la ciudad se topa con terreno sin construir.',
    'No entra buscando gente. Entra porque adentro encuentra tres cosas: sombra, humedad y otros insectos de los que comer. Un patio con escombro apilado contra el muro, un sótano que se inunda, un entretecho de madera con grietas: cada uno es un refugio con comida incluida.',
    'Eso define el trabajo. Contra alacrán, el sellado y el orden del perímetro pesan más que la aplicación, y la aplicación pesa poco si el acceso queda abierto.',
  ],
  localContext: {
    heading: 'Dónde se esconde en una construcción de Tampico',
    paragraphs: [
      'La casona del centro tiene muros de ladrillo de gran espesor, y esos muros están llenos de huecos: pasos de instalación viejos, ductos abandonados, juntas abiertas donde el aplanado se desprendió. El alacrán es plano y se mete en cualquier grieta donde entre una tarjeta. Un muro de medio metro con juntas abiertas es un refugio con temperatura estable todo el año.',
      'El sótano y el entrepiso, cuando existen, son el otro punto. En Tampico muchos sótanos del centro trabajan con humedad permanente por el nivel freático alto, y esa humedad atrae a los insectos que el alacrán come. Donde hay cochinillas y grillos, hay alacrán.',
      'Hacia la periferia de la ciudad, en las colonias donde la vivienda colinda con lotes baldíos o con vegetación sin desmontar, la vía de ingreso es distinta: viene de afuera, cruza el patio y entra por debajo de la puerta o por el registro. Ahí el problema no es el muro, es el terreno.',
      'La temporada de lluvias mueve la actividad. Cuando se satura el suelo y se inundan huecos y registros, el alacrán se desplaza y aparece adentro. No es que llegaron con el agua: estaban en el perímetro y el agua los empujó hacia el interior.',
    ],
  },
  signs: {
    heading: 'Qué mirar en la casa y en el patio',
    intro:
      'A diferencia de otras plagas, el alacrán no deja rastro fácil de leer. Lo que sí se puede evaluar son las condiciones que lo sostienen:',
    items: [
      'Hallazgos repetidos en la misma habitación o en el mismo rincón, y no un ejemplar suelto una vez al año.',
      'Escombro, leña, piedra, tabique o macetas apiladas contra el muro exterior.',
      'Juntas abiertas, aplanado desprendido o ductos viejos sin tapar en muros gruesos.',
      'Presencia notoria de cochinillas, grillos o arañas: es su comida, y anuncia el ambiente que busca.',
      'Burlete de la puerta de calle gastado o que ya no toca el piso.',
      'Registros del patio sin tapa o con la tapa rota, sobre todo después de lluvia.',
    ],
  },
  howWeWork: {
    heading: 'Qué hace el técnico en una propiedad de Tampico',
    paragraphs: [
      'El recorrido es perimetral y de abajo hacia arriba: se revisa el contacto del muro con el piso por fuera, el estado de las juntas, los registros, el burlete de las puertas y los pasos de instalación. Adentro se mira el zócalo, el marco de las puertas y, si el inmueble lo tiene, el sótano y el entretecho.',
      'La aplicación va con polvos residuales en grietas y hendiduras seleccionadas, que es lo que corresponde para un animal que vive metido en el hueco, más tratamiento perimetral en el contacto con el suelo. Nebulizar la casa entera no es el camino: el alacrán no está en el aire de la sala, está adentro del muro.',
      'La parte que más rinde y que depende del cliente es despejar: separar del muro el escombro, la leña y las macetas, y cerrar los huecos que se marcaron en la inspección. Un tratamiento acompañado de eso dura; uno sin eso vuelve a la misma situación en meses.',
      'Una aclaración necesaria: si hay una picadura, lo que corresponde es atención médica inmediata. El control de plagas trabaja sobre el inmueble y no sustituye ni debe demorar esa valoración.',
    ],
    checks: [
      'Contacto muro-piso en todo el perímetro exterior.',
      'Juntas abiertas, aplanado desprendido y ductos viejos sin tapar.',
      'Registros del patio, coladeras y su tapa.',
      'Burlete inferior de puertas a calle y a patio.',
      'Sótano, entrepiso y entretecho de madera, si existen.',
      'Material apilado contra el muro: escombro, leña, piedra, macetas.',
    ],
  },
  faqs: [
    {
      question: '¿Hay más alacranes en el centro o en la periferia de Tampico?',
      answer:
        'Son dos situaciones distintas. En el centro el refugio está en el propio edificio: muros gruesos con juntas abiertas, sótanos húmedos, entretechos. En la periferia, donde la vivienda colinda con lote baldío o vegetación, el alacrán viene de afuera y cruza el patio. El tratamiento cambia según cuál de las dos sea, y eso se define en la inspección.',
    },
    {
      question: '¿Por qué aparecen más cuando llueve?',
      answer:
        'Porque el suelo saturado y los huecos inundados los desplazan, y el interior de la casa queda como el sitio seco más cercano. Es el mismo motivo por el que aparecen tras una obra vecina: se les movió el refugio. En ninguno de los dos casos llegaron de lejos, estaban en el perímetro.',
    },
    {
      question: 'Vivo en una casona con muros anchos. ¿Se puede sellar todo?',
      answer:
        'Todo, no. En construcción de un siglo hay más huecos de los que se pueden cerrar, y algunos son estructurales. Lo que sí se hace es priorizar: se sellan los pasos de instalación, se tapan los ductos abandonados y se cierran las juntas del contacto con el piso, que son las vías reales de ingreso. Con eso se corta la mayor parte del tránsito.',
    },
    {
      question: '¿El tratamiento es seguro con niños y mascotas en la casa?',
      answer:
        'El polvo residual se aplica dentro de grietas y hendiduras, no en superficies de contacto ni en zonas de juego, justamente por eso. El técnico indica el tiempo de reingreso antes de empezar y pregunta si hay bebés, personas con asma o mascotas en el domicilio para ajustar la aplicación. Si hay recámara de niños, se trabaja el perímetro y no el interior del cuarto.',
    },
    {
      question: '¿Cada cuánto conviene revisar?',
      answer:
        'En una casa del centro con el perímetro ordenado y los huecos sellados, la revisión anual suele alcanzar. Si la propiedad colinda con lote baldío o hay obra en la cuadra, conviene acercarse, porque cualquier movimiento de tierra alrededor manda alacranes hacia las casas vecinas durante semanas.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'garrapatas' },
    { zone: 'altamira', pest: 'alacranes' },
  ],
}

const chinches: IntersectionContent = {
  zone: 'tampico',
  pest: 'chinches',
  h1: 'Chinches de cama en Tampico: hoteles y vivienda',
  metaTitle: 'Chinches de cama en Tampico | Hoteles y casas',
  metaDescription:
    'Control de chinches de cama en Tampico: hotelería, casas de huéspedes y vivienda del centro. Tratamiento por habitación con jeringa en costuras.',
  intro: [
    'La chinche de cama no llega por suciedad ni por descuido: llega en una maleta. Por eso en Tampico el frente principal está donde hay rotación de gente durmiendo, y esta es una ciudad con hotelería, casas de huéspedes y renta de cuartos por la actividad portuaria y comercial.',
    'Es también la plaga que más se trata mal. Se confunde con pulga o con mosco, se compra un insecticida de supermercado, se rocía el colchón y lo único que se consigue es dispersarlas a la habitación de al lado. Cuando nos llaman, en muchos casos ya pasaron por dos o tres intentos por cuenta propia.',
    'Y es la que menos tolera el trabajo a medias: si queda un foco vivo en una costura o detrás de un zócalo, en pocas semanas está todo otra vez como al principio.',
  ],
  localContext: {
    heading: 'Por qué en Tampico el problema se concentra en el cuarto',
    paragraphs: [
      'En hotelería la chinche viaja con el huésped y se instala en la habitación: costuras del colchón, base de la cama, cabecera, riel de cortina, tomacorriente. Desde ahí pasa a las habitaciones contiguas por el paso de instalaciones o por el zócalo. Por eso tratar solo el cuarto donde se reportó es la forma más rápida de que el problema reaparezca dos puertas más allá.',
      'En vivienda del centro el escenario es otro: mucho mueble antiguo de madera, camas con cabecera fija y respaldo tapizado, y grietas en el muro donde la chinche se refugia lejos de la cama. En construcción vieja el refugio suele estar más disperso que en una habitación de hotel moderna, y eso alarga el trabajo.',
      'El clima cálido de la costa acorta los ciclos: con temperatura estable la población se multiplica más rápido que en una ciudad fría, y una detección tardía se paga con más focos. En Tampico no hay una temporada baja en la que el problema se frene solo.',
      'Hay un componente comercial que conviene decir en voz alta: en un hotel, una reseña con la palabra "chinches" hace más daño que el costo del tratamiento. Por eso trabajamos con discreción, coordinando horarios y sin material identificable en pasillo.',
    ],
  },
  signs: {
    heading: 'Cómo confirmar que son chinches y no otra cosa',
    intro:
      'Antes de tratar hay que estar seguro de la especie, porque el método no se parece en nada al de pulga. Estas son las señales que la identifican:',
    items: [
      'Picaduras en línea o en grupo, en zonas que quedaron descubiertas durante la noche: brazos, hombros, cuello, tobillos.',
      'Puntos oscuros del tamaño de una cabeza de alfiler en la costura del colchón, en la base o en el rincón de la cabecera.',
      'Manchas de sangre pequeñas en la sábana, sobre todo al despertar.',
      'Restos de mudas: cascarones traslúcidos con forma de chinche, pegados en juntas y costuras.',
      'Olor dulzón y desagradable en un cuarto cerrado con infestación avanzada.',
      'Ejemplares vivos en la costura del colchón, detrás del cabecero o en la ranura del tomacorriente.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata una habitación en Tampico',
    paragraphs: [
      'La inspección es minuciosa y se hace con linterna: costura por costura del colchón y de la base, cabecera, buró, riel de cortina, zócalo y tomacorrientes. Se marca cada foco encontrado y se determina el alcance real, que casi siempre es mayor al cuarto reportado.',
      'El tratamiento va con aplicación con jeringa en costuras, juntas y uniones, que es donde están los huevos y donde ningún aerosol llega, más polvo residual en grietas y detrás de zócalos. En hotelería se tratan la habitación afectada y las contiguas de los dos lados, arriba y abajo, aunque no hayan reportado nada: es la única forma de no correr el problema de cuarto en cuarto.',
      'Siempre se programa una segunda visita. Los huevos tienen una eclosión escalonada y la revisión de seguimiento es la que confirma si quedó algún foco. Un tratamiento de chinches con una sola visita no es un tratamiento completo, y conviene saberlo antes de contratar.',
      'Del lado del cliente pedimos lavar y secar a temperatura alta la ropa de cama, y no mover colchones ni muebles a otras habitaciones antes de la visita: es la forma más común de expandir la infestación.',
    ],
    checks: [
      'Costuras, etiquetas y perímetro del colchón y del box.',
      'Base de la cama, cabecera y respaldo tapizado.',
      'Buró, cajones y muebles a menos de un metro de la cama.',
      'Zócalo, juntas del piso y grietas del muro cercano.',
      'Tomacorrientes, apagadores y riel de cortina.',
      'Habitaciones contiguas: laterales, la de arriba y la de abajo.',
    ],
  },
  faqs: [
    {
      question: '¿Se puede tratar un hotel sin que se enteren los huéspedes?',
      answer:
        'Sí, y es como preferimos trabajar. Se coordina el horario con recepción, se entra por servicio, no se deja material identificable en pasillo y la habitación queda lista dentro del tiempo que se acuerda. Lo que sí necesitamos es poder bloquear las habitaciones contiguas el tiempo del tratamiento, porque tratar solo la reportada no resuelve.',
    },
    {
      question: '¿Por qué hay que tratar los cuartos de al lado si ahí no hay?',
      answer:
        'Porque la chinche se desplaza entre habitaciones por el paso de instalaciones y por el zócalo, y una habitación sin picaduras reportadas puede tener un foco incipiente. Si se trata solo el cuarto donde se quejó el huésped, lo habitual es que el reporte aparezca a las semanas en el de al lado. Sale más caro tratar de a un cuarto tres veces que tratar el bloque una vez.',
    },
    {
      question: 'Compré un colchón nuevo y volvieron. ¿Por qué?',
      answer:
        'Porque el colchón casi nunca es el único refugio. La chinche vive también en la base, en la cabecera, en el zócalo, detrás de un cuadro o en la ranura de un tomacorriente. Cambiar el colchón sin tratar el resto del cuarto deja los focos intactos y además pone un colchón nuevo a disposición. Es uno de los gastos más frecuentes y más inútiles que vemos.',
    },
    {
      question: '¿Cuántas visitas hacen falta?',
      answer:
        'Al menos dos. La primera trata los focos detectados; la segunda, programada según el ciclo, revisa y trata lo que haya eclosionado después. En infestaciones avanzadas o en un bloque de habitaciones puede hacer falta una tercera. Le decimos cuántas prevemos en la inspección, antes de empezar.',
    },
    {
      question: '¿Sirve el insecticida de supermercado mientras llega el servicio?',
      answer:
        'No, y suele empeorar la situación. Los aerosoles domésticos no alcanzan los huevos en las costuras y lo que hacen es dispersar a los adultos, que se refugian más lejos y en más puntos. Si ya lo aplicó, avísenos en la visita: cambia dónde buscamos. Lo útil mientras tanto es lavar y secar la ropa de cama a temperatura alta y no mudar muebles a otro cuarto.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'cucarachas' },
    { zone: 'ciudad-madero', pest: 'chinches' },
  ],
}

const garrapatas: IntersectionContent = {
  zone: 'tampico',
  pest: 'garrapatas',
  h1: 'Garrapatas en Tampico: patio, perro y grietas de la casa',
  metaTitle: 'Control de garrapatas en Tampico | Patios y viviendas',
  metaDescription:
    'Garrapatas en Tampico: la del perro se instala dentro de la casa, en grietas y zócalos. Tratamiento de patio e interior, revisión sin costo.',
  intro: [
    'La idea de que la garrapata se agarra en el campo y se queda en el perro es la que hace que en Tampico el problema se vuelva grande. La garrapata café del perro, que es la que domina acá, hace algo distinto: se sube al animal para alimentarse y después se baja a la casa, a esconderse en una grieta, en el zócalo o detrás de un cuadro. Ahí pone huevos.',
    'Por eso hay casas donde se baña al perro cada semana y las garrapatas no bajan. El animal es el comedor, no el domicilio. Si se trata solo al perro y no la vivienda, el ciclo sigue corriendo del otro lado.',
    'En el clima de la costa esto se acelera: con calor y humedad estables el ciclo se cumple más rápido y una infestación pasa de "vi un par" a "están en la pared" en pocas semanas.',
  ],
  localContext: {
    heading: 'Por qué la casa de Tampico le queda cómoda',
    paragraphs: [
      'La construcción del centro y de las colonias tradicionales le da a la garrapata exactamente lo que necesita: grietas en el aplanado, zócalos despegados, juntas de piso abiertas, marcos de madera con separación. Se mete en huecos de un par de milímetros y ahí completa la muda y la puesta, protegida y a temperatura estable.',
      'El patio aporta la otra mitad. En Tampico es común el perro de patio, con casetas de madera, mucha sombra, vegetación baja pegada al muro y material apilado en un rincón. Ese entorno es donde la garrapata espera al huésped, y la humedad de la zona la mantiene activa buena parte del año.',
      'La cercanía a áreas verdes, a la Laguna del Carpintero y a lotes con vegetación sin desmontar mantiene una reposición constante hacia los patios que colindan. En esas cuadras el tratamiento tiene que contemplar el perímetro y no solo el interior.',
      'Un detalle que en esta ciudad pesa: las casas del centro comparten muro, y una infestación puede pasar de una vivienda a la de al lado por una junta. Cuando el vecino también tiene perro, conviene coordinar, porque de otro modo el ciclo se sostiene entre las dos casas.',
    ],
  },
  signs: {
    heading: 'Señales de que ya está en la casa y no solo en el perro',
    intro:
      'Mientras la garrapata está solo en el animal se ve poco. Cuando se instaló en la vivienda, las señales cambian:',
    items: [
      'Garrapatas trepando por el muro, sobre todo en la parte alta y cerca del techo: buscan altura para la puesta.',
      'Ejemplares en el zócalo, en el marco de la puerta o detrás de un cuadro, lejos de donde duerme el perro.',
      'Grupos de huevos: masas pequeñas de aspecto granulado, en una grieta o en la unión de dos superficies.',
      'El perro con garrapatas otra vez a los pocos días de haberlo tratado.',
      'Concentración en la caseta, en la cama del animal y en la sombra del patio donde se echa.',
      'Puntos oscuros en las juntas de la loseta o en la separación del zócalo.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trata una vivienda de Tampico',
    paragraphs: [
      'El tratamiento es de inmueble, no de mascota, y esa distinción es la que define el resultado. Se trabaja el patio con aspersión dirigida en la vegetación baja, el perímetro, la caseta y las zonas de sombra donde el animal se echa, y se trata el interior con polvo residual en grietas, zócalos y juntas, que es donde está la puesta.',
      'La inspección busca la altura: en infestaciones establecidas encontramos garrapatas y huevos en la parte alta del muro y en la unión con el techo, que es adonde suben para la puesta. Un tratamiento que se queda a nivel de piso deja lo que importa sin tocar.',
      'Lo del animal corre por veterinaria, y conviene coordinarlo el mismo día. Si se trata la casa y el perro sigue cargando ejemplares, o al revés, el ciclo no se corta. Se lo decimos siempre antes de empezar, porque es la causa más común de que un tratamiento previo no haya funcionado.',
      'La segunda visita no es opcional en garrapata. Los huevos que ya estaban puestos eclosionan después de la aplicación, y la revisión de seguimiento es la que cierra el ciclo.',
    ],
    checks: [
      'Zócalos, juntas de piso y grietas del aplanado en todo el interior.',
      'Parte alta del muro y unión con el techo, donde ocurre la puesta.',
      'Caseta, cama del perro y su zona de sombra habitual.',
      'Vegetación baja, arbustos pegados al muro y material apilado del patio.',
      'Perímetro exterior y colindancia con lote con vegetación.',
      'Marcos de puerta, detrás de cuadros y muebles arrimados al muro.',
    ],
  },
  faqs: [
    {
      question: 'Baño al perro cada semana y siguen apareciendo. ¿Por qué?',
      answer:
        'Porque la garrapata café del perro no vive en el animal: se alimenta ahí y se baja a la casa a esconderse y poner huevos. Mientras la vivienda no se trate, cada vez que el perro pasa por la grieta correcta vuelve a cargar ejemplares. El baño resuelve lo que está encima del animal en ese momento, no el foco.',
    },
    {
      question: '¿Por qué las veo trepando por la pared?',
      answer:
        'Porque buscan altura para la puesta. Es una de las señales más claras de que la infestación ya está establecida dentro de la vivienda y no solo en el patio. Cuando aparecen cerca del techo, el tratamiento tiene que contemplar la parte alta del muro, no solo el zócalo.',
    },
    {
      question: '¿El tratamiento afecta al perro?',
      answer:
        'La aplicación se hace sobre el inmueble, no sobre el animal, y el técnico indica cuánto tiempo debe permanecer fuera del área tratada antes de volver. Lo que corresponde al perro lo maneja su veterinario, y conviene hacerlo el mismo día para que no queden ejemplares circulando entre uno y otro.',
    },
    {
      question: 'Mi vecino también tiene perro. ¿Sirve tratar solo mi casa?',
      answer:
        'Sirve, sobre todo si se trata bien el interior, pero en el centro las casas comparten muro y la reinfestación por una junta es real. Lo ideal es coordinar con el vecino. Si no se puede, insistimos en el perímetro y en sellar las juntas de colindancia, y conviene prever una revisión a los meses.',
    },
    {
      question: '¿Cuántas aplicaciones hacen falta?',
      answer:
        'Normalmente dos. La primera trata adultos y ninfas presentes; la segunda, programada según el ciclo, alcanza lo que eclosionó de los huevos que ya estaban puestos. En infestaciones avanzadas, con puesta en la parte alta del muro, puede requerirse una tercera. Se lo decimos en la inspección, no sobre la marcha.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'alacranes' },
    { zone: 'ciudad-madero', pest: 'garrapatas' },
  ],
}

const hormigas: IntersectionContent = {
  zone: 'tampico',
  pest: 'hormigas',
  h1: 'Hormigas en Tampico: colonias en casa, local y patio',
  metaTitle: 'Control de hormigas en Tampico | Casas y locales',
  metaDescription:
    'Hormigas en Tampico: nidos en muro antiguo, cocinas de local y patios. Cebo en gel que alcanza a la colonia. Revisión y presupuesto sin costo.',
  intro: [
    'Con hormigas el error clásico es matar la fila. Se rocía el recorrido que va del zócalo a la azucarera, desaparecen un rato y a los dos días vuelven por otro lado. Lo que se vio nunca fue la plaga: era la parte de la colonia que salió a buscar comida, y suele ser una porción chica del total.',
    'En Tampico el nido casi siempre está en un lugar al que no se llega rociando: adentro del muro de ladrillo, bajo la loseta del patio, en la tierra de una jardinera o en el hueco de un marco de madera. La construcción antigua del centro está llena de esos espacios.',
    'Por eso trabajamos con cebo y no con aspersión sobre la fila. El cebo lo lleva la obrera al nido y llega a las que nunca salen, que son las que sostienen el problema.',
  ],
  localContext: {
    heading: 'Dónde anida la hormiga en el centro de Tampico',
    paragraphs: [
      'El muro grueso de ladrillo con aplanado desprendido es el refugio típico acá. La colonia se instala en el espesor del muro y sale por una junta abierta, un enchufe o el borde del zócalo. Desde afuera solo se ve la fila; el nido puede estar a medio metro de profundidad y a varios metros del punto por donde salen.',
      'El patio con loseta suelta y jardinera es el otro punto habitual. La tierra bajo la loseta se mantiene húmeda con el clima de la costa, y ahí la colonia tiene temperatura estable, humedad y salida directa a la cocina por la puerta del patio.',
      'En locales de comida y en el mercado el motor es distinto: azúcar, grasa y residuo orgánico disponible todo el día. Ahí la presión no baja nunca y la reinfestación desde el local vecino es constante, porque en el centro los locales comparten muro y entrepiso.',
      'La humedad de la zona agrega un frente que se pasa por alto: donde hay filtración —bajo un fregadero, en un muro con humedad de capilaridad, junto a una bajada de agua— aparecen especies que buscan justamente eso. Encontrar hormigas en un punto húmedo suele estar avisando de una filtración además de una plaga.',
    ],
  },
  signs: {
    heading: 'Cómo leer lo que se ve',
    intro:
      'La fila indica que hay colonia cerca, pero no dónde. Estas señales ayudan a ubicar el nido y a medir el tamaño:',
    items: [
      'Filas que salen siempre por el mismo punto: una junta, un enchufe, el borde del zócalo o el marco de una puerta.',
      'Montoncitos de tierra fina o de material del aplanado junto a una junta del muro o del piso.',
      'Actividad concentrada en un punto con humedad: bajo el fregadero, junto a una bajada de agua o en un muro con filtración.',
      'Presencia en dos plantas o en dos locales contiguos: la colonia está usando el entrepiso o el muro medianero.',
      'Hormigas aladas adentro de la casa: es una colonia madura dispersándose, no una invasión desde afuera.',
      'Loseta del patio que suena hueca o que se hunde ligeramente al pisarla.',
    ],
  },
  howWeWork: {
    heading: 'Cómo se trabaja en un inmueble de Tampico',
    paragraphs: [
      'Lo primero es seguir la fila hasta donde entra al muro o al piso, y ver qué está comiendo: si va a lo dulce o a lo graso cambia el cebo que corresponde. Esa lectura de cinco minutos es la que decide si el tratamiento funciona o si hay que repetirlo.',
      'La aplicación principal es gel en cebo, colocado en puntos discretos sobre el recorrido y cerca del acceso al nido. La obrera lo transporta y alimenta a la colonia, incluida la reina. Es lento comparado con un aerosol —se ve el resultado en días, no en minutos— pero es lo único que llega adentro del muro.',
      'Justamente por eso pedimos no rociar la fila antes ni durante el tratamiento. Un insecticida de contacto sobre el recorrido corta el transporte del cebo y, en algunas especies, parte la colonia en varios nidos, que es peor que como estaba.',
      'Cuando hay loseta suelta, jardinera pegada al muro o filtración, se lo señalamos: ahí el resultado depende de una reparación y no de una segunda aplicación. En locales de comida se suma el orden de residuos y el sellado de las juntas por donde pasan del local vecino.',
    ],
    checks: [
      'Recorrido completo de la fila hasta el punto de entrada al muro o al piso.',
      'Juntas abiertas, enchufes, zócalos y marcos de madera.',
      'Loseta suelta, jardinera y tierra del patio pegada a la construcción.',
      'Puntos con filtración o humedad de capilaridad.',
      'Muro medianero y entrepiso, en locales contiguos.',
      'Almacenamiento de azúcar, grasa y residuo orgánico en cocinas.',
    ],
  },
  faqs: [
    {
      question: '¿Por qué no rociar la fila mientras dura el tratamiento?',
      answer:
        'Porque la fila es el sistema de transporte del cebo. Si se rocía, las obreras dejan de llevarlo al nido y el tratamiento se corta justo antes de hacer efecto. Además, con algunas especies el insecticida de contacto provoca que la colonia se divida en varios nidos, y se termina con más focos que al principio.',
    },
    {
      question: 'Salen de un enchufe. ¿El nido está ahí?',
      answer:
        'Casi nunca. El enchufe es la salida, no el domicilio. En construcción antigua de Tampico la colonia suele estar dentro del espesor del muro y usa el hueco de la instalación eléctrica como corredor. Por eso el cebo se coloca cerca de esa salida pero el objetivo es que lo lleven adentro.',
    },
    {
      question: 'Aparecieron hormigas con alas dentro de la casa. ¿Qué significa?',
      answer:
        'Que hay una colonia madura y que está en época de dispersión. No es una invasión que llegó de la calle: es la que ya estaba, produciendo reproductores. Es buen momento para tratar, porque indica que el nido lleva tiempo establecido y va a seguir creciendo.',
    },
    {
      question: 'Están donde hay humedad. ¿Es coincidencia?',
      answer:
        'No. Varias especies buscan madera húmeda o puntos con filtración, así que encontrarlas siempre en el mismo lugar mojado suele estar avisando de dos cosas a la vez. Tratamos la plaga, pero si no se arregla la filtración el sitio sigue siendo atractivo y es probable que vuelva a ocuparse.',
    },
    {
      question: '¿Cuánto tarda en verse el resultado?',
      answer:
        'Con gel en cebo la caída fuerte se nota entre el tercer y el séptimo día. Al principio incluso puede parecer que hay más actividad, porque las obreras se concentran en el punto de cebo: es señal de que está funcionando. Si a los diez días no bajó, normalmente significa que el cebo no era el correcto para esa especie y se cambia.',
    },
  ],
  related: [
    { zone: 'tampico', pest: 'termitas' },
    { zone: 'altamira', pest: 'hormigas' },
  ],
}

export const TAMPICO_INTERSECTIONS: readonly IntersectionContent[] = [
  moscos,
  cucarachas,
  termitas,
  ratas,
  alacranes,
  chinches,
  garrapatas,
  hormigas,
]
