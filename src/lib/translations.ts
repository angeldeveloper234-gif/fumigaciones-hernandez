/**
 * Copy del home de Fumigaciones Hernández.
 *
 * El sitio es monolingüe: español de México, trato de usted (`CLAUDE.md` §5.1).
 * Antes de esto el archivo cargaba además un diccionario ES/EN heredado del
 * template de MosquitoMEX que alimentaba un selector de idioma del header. El
 * selector cambiaba el atributo `lang` del documento pero no traducía nada,
 * porque todas las secciones leen de acá y de ningún otro lado. Se fue el
 * diccionario, se fue el selector.
 *
 * ── Voz ──────────────────────────────────────────────────────────────────
 * Hernández es un negocio con domicilio, teléfono y horario. El ángulo es ese:
 * quien contesta es quien va a ir. Nada de "soluciones integrales", nada de
 * superlativos sin respaldo. Se dice lo que se hace, en el orden en que pasa:
 * se revisa, se cotiza, se aplica.
 *
 * Los superlativos que traía el template —"el mejor equipo y productos del
 * mercado", "los mejores precios de la zona", "personal con años de
 * experiencia"— salieron todos. No hay forma de sostenerlos y `CLAUDE.md` §3
 * y §5 los prohíben.
 *
 * Los verbos de los CTA son propios a propósito: pedir, marcar, mandar,
 * confirmar, contar, leer. No se cruzan con los de fumcon-next, que usa
 * consultar, solicitar, ver, llamar y escribir.
 */
export const HERNANDEZ_HOME = {
  es: {
    hero: {
      eyebrow: 'Oficina en Ciudad Madero · Atención en toda la zona conurbada',
      // Medido: a 360px este H1 entra en tres renglones, que es el límite que
      // fijó la fase 1. Sumarle "Fumigación y" lo empuja a cuatro. La palabra
      // vive igual en el <title>, en la meta description y en el cuerpo.
      title: 'Control de plagas en Tampico,',
      highlight: 'Madero y Altamira',
      description:
        'Atendemos casas, locales, bodegas e industrias. Vamos, revisamos el inmueble y le decimos qué encontramos y cuánto cuesta antes de aplicar nada.',
      primaryCta: 'Pida su revisión',
      secondaryCta: 'Qué plagas atendemos',
      /**
       * Encabeza la ficha operativa del hero. Sustituye a `review`, que
       * sostenía una insignia de Google con cinco estrellas que el negocio no
       * tiene (`CLAUDE.md` §5.2).
       */
      cardLabel: 'Levante el teléfono',
      assurances: [
        'Guardia fuera del horario de oficina',
        'Revisión y presupuesto sin costo',
        'Domicilio fijo, no somos un conmutador',
      ],
    },
    pests: {
      eyebrow: 'Once plagas, un solo teléfono',
      title: 'Lo que atendemos en la zona conurbada',
      description:
        'Cada plaga entra por un lado distinto y se trata distinto. Elija la suya y ahí explicamos cómo la abordamos y qué revisa el técnico cuando llega.',
      cta: 'Cómo lo tratamos',
    },
    methods: {
      eyebrow: 'De qué depende el método',
      title: 'La técnica correcta para cada espacio',
      description:
        'El método lo define la plaga y lo define el inmueble: no se trata igual una cocina de restaurante que un patio con vegetación o una bodega con tarima.',
      items: [
        {
          title: 'Aspersión dirigida',
          description:
            'Aplicación uniforme con equipo profesional en rutas de paso y refugios.',
          icon: 'target',
        },
        {
          title: 'Gel Activo',
          description:
            'Cebo que la colonia transporta a su nido, sin saturar el ambiente.',
          icon: 'target',
        },
        {
          title: 'Nebulización en frío (ULV)',
          description:
            'Partículas finas distribuidas de forma homogénea, sin residuos excesivos.',
          icon: 'wind',
        },
        {
          title: 'Termonebulización',
          description:
            'Niebla caliente de alta penetración para patios, jardines y bodegas.',
          icon: 'cloud',
        },
        {
          title: 'Polvos Residuales',
          description:
            'Grietas, hendiduras y registros eléctricos con acción prolongada.',
          icon: 'shield',
        },
        {
          title: 'Estaciones de cebo',
          description:
            'Control de ratas con dispositivos cerrados, seguros con niños y mascotas.',
          icon: 'shield',
        },
        {
          title: 'Aplicación con jeringa',
          description:
            'Tratamiento milimétrico en costuras y uniones donde se alojan los huevos.',
          icon: 'target',
        },
        {
          title: 'Sellado de accesos',
          description:
            'Cerramos las vías de entrada para que la plaga no vuelva a instalarse.',
          icon: 'wind',
        },
      ],
    },
    about: {
      eyebrow: 'Quiénes somos',
      title: 'Una fumigadora de aquí, no una franquicia',
      description:
        'Fumigaciones Hernández trabaja la zona conurbada del sur de Tamaulipas. La oficina está en la Col. Obrera, en Ciudad Madero, y la base operativa en Cd. Cuauhtémoc, Tampico. Quien le contesta el teléfono es quien coordina la visita.',
      secondary:
        'Eso cambia cómo trabajamos: el técnico ve el inmueble antes de cotizar, usted sabe qué se va a aplicar y dónde, y si algo no se resolvió lo hablamos con quien tomó el servicio, sin pasar por una central de otra ciudad.',
      audiences: [
        'Casas',
        'Locales comerciales',
        'Restaurantes',
        'Oficinas',
        'Bodegas',
        'Industrias',
      ],
      cta: 'Cuéntenos su caso',
    },
    promotion: {
      badge: 'Antes de contratar',
      title: 'Primero la revisión, después el precio',
      description:
        'Nadie puede cotizar una plaga por teléfono sin ver el lugar. Vamos, identificamos qué es y por dónde entra, y recién entonces le pasamos el presupuesto. Esa visita no se cobra.',
      // TODO(cliente): en 2018 el claim era "los mejores precios de la zona" pero nunca
      // se publicó una tarifa. Un rango real convierte mejor que ocultarlo.
      priceLabel: 'La revisión',
      price: 'Sin costo',
      currency: '',
      benefits: [
        'Le decimos qué plaga es y por dónde entra',
        'Presupuesto cerrado antes de aplicar',
        'Si no conviene tratar, se lo decimos',
      ],
      cta: 'Pida su presupuesto',
    },
    /**
     * Reemplaza al bloque `testimonials`, que maquetaba la misión, la visión y
     * los valores del sitio de 2019 como si fueran reseñas de clientes: cinco
     * estrellas por bloque, comillas de cita e insignia de Google.
     *
     * Acá solo van hechos que el visitante puede comprobar solo: el teléfono
     * se marca, la oficina se visita, la cotización se pide.
     *
     * {{PENDIENTE: garantía de servicio — ¿qué cubre y por cuánto tiempo?}}
     * {{PENDIENTE: licencia sanitaria o registro COFEPRIS, si existe}}
     */
    trust: {
      eyebrow: 'Lo comprobable',
      title: 'Con qué respaldamos lo que decimos',
      description:
        'No tenemos reseñas publicadas todavía. Mientras tanto, esto es lo que sí puede verificar por su cuenta antes de contratarnos.',
      items: [
        {
          icon: 'clock',
          title: 'Guardia las 24 horas',
          detail:
            'La oficina atiende de lunes a sábado, de 8:00 a 17:00. Fuera de ese horario queda una guardia para urgencias.',
        },
        {
          icon: 'receipt',
          title: 'La revisión no se cobra',
          detail:
            'Se paga el tratamiento, no el diagnóstico. Si después de ver el inmueble decide no contratar, no debe nada.',
        },
        {
          icon: 'office',
          title: 'Oficina con domicilio fijo',
          detail: '{{ADDRESS}}',
        },
        {
          icon: 'map',
          title: 'Zonas que cubrimos',
          detail: '{{AREAS}}',
        },
        {
          icon: 'clipboard',
          title: 'Presupuesto antes de aplicar',
          detail:
            'Sabe qué se va a aplicar, en qué áreas y cuánto cuesta antes de que el técnico abra el equipo.',
        },
        {
          icon: 'shield',
          title: 'Trato con quien hace el trabajo',
          detail:
            'Coordina con la misma persona que organiza la visita. No hay call center de por medio ni tickets que se pierden.',
        },
      ],
    },
    coverage: {
      eyebrow: 'Hasta dónde llegamos',
      title: 'Tampico, Madero y Altamira',
      description:
        'La base operativa está en Cd. Cuauhtémoc, Tampico, y la oficina en la Col. Obrera de Ciudad Madero. Desde ahí cubrimos la zona conurbada y las localidades vecinas.',
      cta: 'Confirme su colonia',
      areas: [
        { name: 'Tampico', slug: 'tampico' },
        { name: 'Ciudad Madero', slug: 'ciudad-madero' },
        { name: 'Altamira', slug: 'altamira' },
        { name: 'Pueblo Viejo', slug: 'pueblo-viejo' },
        { name: 'Pánuco', slug: 'panuco' },
        { name: 'Aldama', slug: 'aldama' },
      ],
    },
    blog: {
      eyebrow: 'Antes de que llegue el técnico',
      title: 'Cómo se ve una plaga cuando recién empieza',
      description:
        'Qué mirar en su casa o en su local para darse cuenta a tiempo, qué puede hacer mientras coordina la visita y en qué punto ya conviene tratar.',
      cta: 'Leer las guías',
      articles: [
        {
          category: 'Moscos',
          title: 'Moscos en Tampico: los criaderos que tiene en su propio patio',
          summary:
            'Dónde se esconde el agua que nadie ve y por qué nebulizar sin eliminar criaderos solo dura unos días.',
        },
        {
          category: 'Termitas',
          title: 'Termitas en la costa: por qué el clima del Golfo las favorece',
          summary:
            'Las señales que aparecen antes del daño visible y qué revisar en construcción con madera.',
        },
        {
          category: 'Cucarachas',
          title: 'Cucarachas que salen del drenaje: por qué pasa y cómo se corta',
          summary:
            'No es falta de limpieza. Suben por las tuberías, sobre todo después de las lluvias.',
        },
      ],
    },
    contact: {
      eyebrow: 'Para empezar',
      title: 'Dígale a alguien qué está viendo',
      description:
        'Con saber qué plaga notó, en qué parte del inmueble y en qué colonia, ya podemos decirle cómo seguimos. Si prefiere pasar, la oficina está en Centenario 503, Col. Obrera, Ciudad Madero.',
      whatsappCta: 'Mándenos un mensaje',
      phoneCta: 'Marque directo',
    },
  },
} as const
