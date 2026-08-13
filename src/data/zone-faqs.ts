import type { FaqItem } from '@/components/ui/Faq'
import type { CoverageSlug } from '@/lib/locations'

/**
 * Preguntas frecuentes de cada página de zona.
 *
 * Son deliberadamente distintas de las de las intersecciones. Aquellas
 * responden sobre una plaga concreta en una ciudad concreta; estas responden
 * sobre la logística de atender esa zona: si se llega, cómo se coordina, qué
 * cambia según el tipo de inmueble que predomina ahí.
 *
 * Vive fuera de `locations.ts` a propósito. Ese archivo es la definición de
 * las zonas y ya es largo; esto es contenido de página y se mantiene aparte.
 *
 * Nada de tiempos de respuesta garantizados ni de costos de traslado
 * concretos: `CLAUDE.md` §3 los marca como dato a confirmar y no están
 * confirmados. Las respuestas remiten a la llamada, que es donde el negocio
 * puede comprometerse con conocimiento del caso.
 */
export const ZONE_FAQS: Readonly<Record<CoverageSlug, readonly FaqItem[]>> = {
  tampico: [
    {
      question: '¿Entran al centro histórico con el equipo?',
      answer:
        'Sí. El centro tiene calles angostas y horarios de carga complicados, así que lo que hacemos es acordar la hora al agendar, en función de cuándo se pueda estacionar cerca del acceso. Para un local es habitual entrar antes de abrir o después de cerrar.',
    },
    {
      question: 'Tengo un restaurante. ¿Pueden trabajar sin cortar el servicio?',
      answer:
        'En la mayoría de los tratamientos de cocina comercial sí, porque se aplica gel en cebo y polvo en grietas, que van en puntos localizados. Lo habitual es entrar entre el cierre y la apertura. Lo que pedimos es retirar alimento expuesto y utensilios de las áreas que se van a tratar.',
    },
    {
      question: 'Vivo en un edificio de departamentos. ¿Sirve tratar solo el mío?',
      answer:
        'Sirve, aunque conviene saber que en un edificio las unidades comparten instalaciones y una plaga que sube por el ducto vuelve. Tratamos su departamento y le decimos qué encontramos; si el origen está en un área común o en otra unidad, se lo planteamos para que pueda llevarlo a la administración.',
    },
    {
      question: '¿Cuánto tardan en llegar a Tampico?',
      answer:
        'Depende de la agenda del día y de la zona exacta. Al llamar le decimos qué disponibilidad hay, sin darle un horario que después no podamos cumplir. Para urgencias fuera del horario de oficina hay guardia, y ahí la coordinación es directa por teléfono.',
    },
    {
      question: '¿Tengo que desocupar la casa o el local?',
      answer:
        'Depende del método. Con gel en cebo y polvos en grietas normalmente no hace falta desalojar. Con nebulización sí hay un tiempo de reingreso, que el técnico le indica al llegar. Antes de empezar pregunta si hay bebés, personas con asma o mascotas, y ajusta la aplicación con eso.',
    },
  ],
  'ciudad-madero': [
    {
      question: 'La oficina está en Madero. ¿Puedo pasar en vez de llamar?',
      answer:
        'Sí, la oficina está en Centenario 503, Col. Obrera, y atiende de lunes a sábado de 8:00 a 17:00. Muchos clientes de Madero prefieren pasar a explicar el caso en persona. Si va a ir, conviene avisar antes por teléfono para asegurarse de que haya alguien disponible para atenderlo.',
    },
    {
      question: '¿Atienden las colonias de la franja de Miramar?',
      answer:
        'Sí, toda Ciudad Madero. En la franja cercana a la playa el factor que más pesa es la humedad y la salinidad, que deterioran burletes, mallas y sellos antes de tiempo y van abriendo accesos. Es de las primeras cosas que revisa el técnico en esa zona.',
    },
    {
      question: '¿Cómo se cotiza una casa?',
      answer:
        'Con una visita previa, que no se cobra. Nadie puede cotizar sin ver el inmueble: cambia el tamaño, el tipo de plaga, si hay patio, cochera o jardín, y por dónde está entrando. Después de esa revisión le pasamos el presupuesto, y recién ahí decide.',
    },
    {
      question: '¿Se puede coordinar en sábado?',
      answer:
        'La oficina atiende de lunes a sábado, así que el sábado es un día de servicio normal. Fuera de ese horario queda la guardia, pensada para urgencias más que para servicio programado. Al agendar le decimos qué hay disponible.',
    },
    {
      question: 'Es una casa con niños y mascotas. ¿Qué precauciones toman?',
      answer:
        'El técnico pregunta esto antes de empezar, no después, y con eso ajusta el método y dónde va cada aplicación. El gel se coloca dentro de muebles y en puntos no accesibles; los polvos van dentro de grietas y no en superficies de contacto. También le indica el tiempo de reingreso de cada área.',
    },
  ],
  altamira: [
    {
      question: '¿Atienden naves y bodegas del corredor industrial?',
      answer:
        'Sí, y el planteo es distinto al de una casa: perímetro definido, estaciones en el cerco, monitoreo interior y visitas periódicas, porque en el corredor la presión desde afuera no se detiene. En la primera visita se recorre el predio y se define el esquema antes de aplicar nada.',
    },
    {
      question: 'La planta exige inducción y equipo de protección. ¿Hay problema?',
      answer:
        'Ninguno, pero conviene avisarlo al agendar y no el día de la visita. Si su instalación pide inducción de seguridad, permiso de trabajo o equipo específico, lo coordinamos antes para que el técnico llegue en condiciones de entrar y no se pierda la ventana de trabajo.',
    },
    {
      question: '¿Llegan a los fraccionamientos nuevos?',
      answer:
        'Sí. En vivienda nueva de Altamira el patrón se repite bastante: el problema suele venir del terreno recién desmontado y de la obra que sigue avanzando en la manzana, no de la casa. Eso cambia dónde hay que trabajar, y es lo primero que revisa el técnico.',
    },
    {
      question: '¿Se puede contratar un esquema periódico en vez de una visita?',
      answer:
        'Es lo que recomendamos para instalación industrial. Un servicio único baja la población pero no sostiene el control cuando el entorno repone de forma continua. La frecuencia se define con la lectura de las primeras semanas, no con un número fijado de antemano.',
    },
    {
      question: '¿Cómo se cotiza una nave o una bodega?',
      answer:
        'Con un recorrido previo del predio, que no se cobra. Se mide la superficie a cubrir, el perímetro, los accesos y el tipo de producto almacenado, porque eso define el método y qué se puede aplicar. Con esa información se arma el presupuesto.',
    },
  ],
  'pueblo-viejo': [
    {
      question: 'Pueblo Viejo es Veracruz. ¿Igual llegan?',
      answer:
        'Sí. La zona conurbada funciona como un solo mercado y cruzar el Pánuco es parte de la rutina. Lo que sí conviene es agendar con algo de anticipación en lugar de esperar disponibilidad el mismo día, porque el traslado ocupa más tiempo de agenda que un servicio en Madero o Tampico.',
    },
    {
      question: '¿El traslado se cobra aparte?',
      answer:
        'La cotización se arma después de ver el caso y contempla la ubicación, así que va a estar reflejado en el presupuesto que le pasemos. No le vamos a dar un número por teléfono sin conocer la propiedad, porque sería inventarlo.',
    },
    {
      question: '¿Atienden propiedades fuera del casco urbano?',
      answer:
        'Sí, y en propiedad rural o de las orillas conviene describir bien el acceso al agendar: si hay camino de terracería, si se puede llegar en camioneta, si hay que abrir un portón. Es información que evita que la visita se pierda por un detalle logístico.',
    },
    {
      question: 'Somos varios vecinos con el mismo problema. ¿Conviene juntarnos?',
      answer:
        'Conviene, y bastante. Coordinar varias propiedades cercanas para el mismo día aprovecha mejor el traslado, y en plagas que se mueven entre predios —roedores, garrapatas, hormigas— tratar en conjunto da un resultado mucho más duradero que tratar una sola casa.',
    },
    {
      question: '¿Cómo coordino si no saben dónde queda la propiedad?',
      answer:
        'Lo más práctico es mandar la ubicación por WhatsApp al mismo número de contacto, junto con una referencia del camino. Con eso se resuelve casi siempre. Si la propiedad no aparece en el mapa, una descripción del recorrido desde un punto conocido alcanza.',
    },
  ],
  panuco: [
    {
      question: '¿Pánuco entra en su cobertura?',
      answer:
        'Sí, como cobertura de la región. Es de las zonas donde más conviene agendar con anticipación, porque la distancia hace que no siempre haya hueco el mismo día. Al llamar le decimos con franqueza qué disponibilidad hay en lugar de comprometer una fecha que no se pueda sostener.',
    },
    {
      question: 'Mi propiedad está sobre la ribera. ¿Cambia algo?',
      answer:
        'Cambia la presión del entorno. Estar cerca del río implica humedad permanente y llegada continua de moscos y roedores desde afuera, así que el resultado realista es de reducción sostenida y no de eliminación. Se lo planteamos así antes de contratar, no después.',
    },
    {
      question: '¿Atienden comercios y bodegas, o solo casas?',
      answer:
        'Los dos. En comercio y bodega el trabajo se concentra en el ingreso de mercancía, el manejo de residuos y el perímetro, que es por donde entra el problema. En casa el foco suele ser el patio y los accesos. Son planteos distintos y se definen en la visita.',
    },
    {
      question: '¿Con cuánta anticipación conviene agendar?',
      answer:
        'Cuanto antes mejor, sobre todo si necesita un día específico. No manejamos un plazo fijo porque depende de la carga de la semana, y preferimos decirle la disponibilidad real al momento de la llamada antes que dar un número genérico que después no se cumpla.',
    },
    {
      question: '¿Hacen una sola visita o hay seguimiento?',
      answer:
        'Depende de la plaga. Chinches y garrapatas requieren una segunda visita por el ciclo de los huevos, y eso se lo decimos antes de empezar. En otras plagas una visita puede alcanzar. En zonas alejadas planificamos el seguimiento desde el principio para que no quede a medias.',
    },
  ],
  aldama: [
    {
      question: '¿Llegan hasta Aldama?',
      answer:
        'Sí, como cobertura regional. Al estar más lejos de la conurbación, la visita se agenda con anticipación y se coordina el día según la disponibilidad de la semana. Al llamar le confirmamos qué hay, sin comprometer una fecha antes de tenerla.',
    },
    {
      question: '¿Atienden propiedades de campo?',
      answer:
        'Sí. En propiedad rural conviene describir bien el acceso al agendar —tipo de camino, si hay portón, si hay animales sueltos— porque son detalles que cambian cómo se organiza la visita. También ayuda saber de antemano si hay corrales o bodegas de grano, que son focos frecuentes.',
    },
    {
      question: '¿Puedo agendar varias propiedades el mismo día?',
      answer:
        'Sí, y en Aldama es lo más razonable. Agrupar propiedades cercanas en una misma salida aprovecha el traslado y suele mejorar la cotización del conjunto. Si son de dueños distintos, alcanza con que uno coordine y lo mencione al agendar.',
    },
    {
      question: 'Es una urgencia y estoy en Aldama. ¿Qué hago?',
      answer:
        'Llame al teléfono de contacto y explique la situación. Hay guardia fuera del horario de oficina, pero le vamos a ser francos sobre en cuánto se puede llegar hasta allá: la distancia es la que es y preferimos eso a prometer una hora y no cumplirla.',
    },
    {
      question: '¿Cómo se cotiza estando tan lejos?',
      answer:
        'La visita de revisión sigue sin costo, y la cotización contempla la ubicación. Para no hacerle perder tiempo, al llamar conviene describir el problema y el tipo de propiedad: con eso le damos una idea del planteo antes de mover a nadie, aunque el presupuesto cerrado salga después de ver el lugar.',
    },
  ],
}

export const getZoneFaqs = (slug: CoverageSlug) => ZONE_FAQS[slug]
