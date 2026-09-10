import type { Dictionary } from './en';

export const es: Dictionary = {
  common: {
    appName: 'Doku',
    tagline: 'Tus documentos de viaje, organizados con IA',
  },
  nav: {
    how: 'Cómo funciona',
    features: 'Funciones',
    faq: 'FAQ',
    agencies: 'Para agencias',
    joinWaitlist: 'Únete a la lista',
  },
  hero: {
    title: 'Aterriza con todos tus documentos a mano.',
    subtitle:
      'Reenvía cualquier reserva a Doku — un vuelo, un hotel, un seguro. La IA la lee, la archiva en el viaje correcto y la mantiene lista sin conexión.',
    badge: 'Beta privada — únete antes',
    chips: {
      platforms: 'iOS y Android',
      offline: 'Funciona sin conexión',
      free: 'Gratis durante la beta',
    },
  },
  waitlist: {
    intro: 'Doku está en beta privada. Deja tu email y te avisaremos en cuanto esté disponible.',
    placeholder: 'tu@email.com',
    submit: 'Avísame',
    submitting: 'Enviando…',
    privacyNote: 'Un solo email cuando lancemos. Nada de spam.',
    success: '¡Listo! Te escribiremos en cuanto Doku esté disponible.',
    duplicate: 'Ese email ya está en la lista — ¡gracias por el entusiasmo!',
    invalidEmail: 'Ese email no parece válido.',
    error: 'Algo salió mal. Inténtalo de nuevo en un minuto.',
  },
  how: {
    label: 'Cómo funciona',
    title: 'Tres pasos. Cero carpetas.',
    steps: [
      {
        title: 'Comparte la reserva',
        body: 'Toca compartir en tu email o WhatsApp y elige Doku. PDFs, capturas o fotos — hasta cinco a la vez.',
        chip: 'Desde cualquier lugar',
      },
      {
        title: 'La IA archiva por ti',
        body: 'Doku reconoce vuelos, hoteles, transporte, actividades y seguros, y extrae fechas, códigos, horarios y pasajeros.',
        chip: 'Lee cualquier formato',
      },
      {
        title: 'Tu viaje queda listo',
        body: 'Cada documento cae en el viaje correcto — ordenado y listo para usar sin conexión. Tú solo viajas.',
        chip: 'Funciona sin conexión',
      },
    ],
  },
  features: {
    label: 'Funciones',
    title: 'Hecha para el momento en que de verdad estás viajando',
    subtitle: 'Doku no es otro cajón de archivos — es tu viaje, organizado.',
    items: [
      {
        key: 'categories',
        title: 'Cada reserva, entendida',
        body: 'Vuelos, hoteles, transporte, actividades y seguros — cada tipo tiene su propio color, diseño y datos clave.',
      },
      {
        key: 'offline',
        title: 'Sin conexión cuando importa',
        body: 'Descarga tu viaje antes de despegar y abre cualquier documento sin conexión. Sin necesidad de roaming.',
      },
      {
        key: 'shared',
        title: 'Un viaje, en el bolsillo de todos',
        body: 'Invita a tus compañeros de viaje y todos ven todos los documentos. Se acabó el "¿me reenvías el voucher?".',
      },
      {
        key: 'insurance',
        title: 'La asistencia, a un toque',
        body: 'El número de emergencias de tu seguro está fijado en la parte superior de cada viaje — llámalo sin buscar.',
      },
      {
        key: 'edit',
        title: 'Tú tienes la última palabra',
        body: 'Corrige cualquier campo que la IA haya leído mal, o añade documentos totalmente a mano. La IA es opcional, siempre.',
      },
      {
        key: 'privacy',
        title: 'Privado por defecto',
        body: 'Cifrado en tránsito y en reposo. Solo tú — y las personas que invites — pueden ver un viaje.',
      },
    ],
  },
  categories: {
    flight: 'Vuelo',
    hotel: 'Hotel',
    transport: 'Transporte',
    activity: 'Actividad',
    insurance: 'Seguro',
    other: 'Otro',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué es Doku?',
        a: 'Doku es una app móvil que organiza tus documentos de viaje. Le compartes tus confirmaciones de reserva — vuelos, hoteles, transporte, actividades, seguros — y la IA extrae los datos clave y agrupa todo por viaje.',
      },
      {
        q: '¿Cómo organiza Doku mis reservas?',
        a: 'Cuando compartes un PDF, una captura o una foto, Doku detecta el tipo de documento y extrae fechas, códigos de reserva, horarios y pasajeros. Los documentos cuyas fechas caen dentro de un viaje se adjuntan a él automáticamente; también puedes asignar cualquiera a mano.',
      },
      {
        q: '¿Funciona sin conexión?',
        a: 'Sí. El modo viaje descarga el viaje completo a tu teléfono, así que pases de abordar, vouchers y pólizas se abren al instante sin conexión — justo cuando sueles no tenerla.',
      },
      {
        q: '¿Qué tipos de documentos entiende?',
        a: 'Vuelos, reservas de hotel, transporte terrestre (bus, tren, ferry, traslados), actividades y tours, y seguros o pólizas de asistencia de viaje. Cualquier otra cosa se puede guardar y organizar manualmente.',
      },
      {
        q: '¿Mis documentos están seguros?',
        a: 'Tus documentos se guardan cifrados y solo son visibles para tu cuenta y para las personas con las que compartes un viaje explícitamente. La política de privacidad tiene el detalle completo.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Durante la beta, Doku es gratis. Al lanzar habrá un plan gratuito y un plan premium con análisis de IA ilimitado, modo viaje sin conexión y viajes compartidos.',
      },
      {
        q: '¿iPhone o Android?',
        a: 'Ambos. Doku está construida para iOS y Android desde el día uno, en inglés y español.',
      },
    ],
  },
  finalCta: {
    title: 'Tu próximo viaje, ya organizado',
    body: 'Únete a la lista de espera y sé de los primeros cuando Doku lance.',
  },
  phone: {
    title: 'Viajes',
    sectionLabel: 'Próximos y en curso',
    ongoing: 'En curso',
    upcoming: 'Próximo',
    trip1City: 'Ciudad de México',
    trip1Meta: 'México · 12 feb – 20 feb',
    flightTitle: 'Madrid → Ciudad de México',
    flightMeta: 'Vuelo · Iberia',
    flightDate: '12 feb',
    hotelTitle: 'Tulum',
    hotelMeta: 'Alojamiento · Hostel Oryx Tulum',
    hotelDate: '12 – 19 feb',
    insuranceTitle: 'Asistencia al viajero',
    insuranceMeta: 'Seguro · AXA',
    insuranceDate: '12 – 20 feb',
    trip1Docs: '4 documentos',
    seeAll: 'Ver todos',
    trip2City: 'Lisboa',
    trip2Meta: 'Portugal · 03 mar – 09 mar',
    trip2Docs: '2 documentos',
    tabTrips: 'Viajes',
    tabDocuments: 'Documentos',
    tabProfile: 'Perfil',
  },
  footer: {
    product: 'Producto',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
    deletion: 'Eliminar tu cuenta',
    support: 'Soporte',
    agencies: 'Para agencias de viaje',
    copyright: '© 2026 Doku. Todos los derechos reservados.',
  },
  agencies: {
    underConstructionBadge: 'En construcción',
    underConstructionBody:
      'Todavía no hemos empezado a desarrollar el producto para agencias — esta página muestra hacia dónde vamos. El formulario de abajo es solo para registrar interés temprano.',
    metaTitle: 'Doku para agencias de viaje',
    metaDescription:
      'Entrega viajes organizados a tus clientes: cada voucher, ticket y póliza en una sola app, sin conexión, con tu servicio detrás.',
    title: 'Doku para agencias de viaje',
    subtitle:
      'El viaje ya lo armas tú. Entrégalo como se merece: cada voucher, ticket y póliza organizados en una app que tu cliente abre en el aeropuerto — con tu agencia detrás.',
    bullets: [
      {
        title: 'Entrega viajes, no adjuntos',
        body: 'En lugar de una cadena de emails y PDFs, tu cliente recibe un viaje organizado: vuelos, hoteles, traslados y seguro en orden.',
      },
      {
        title: 'Menos mensajes de "¿me lo reenvías?"',
        body: 'Todo vive en el viaje, disponible sin conexión. Tu cliente deja de rebuscar en su correo — y deja de llamarte por eso.',
      },
      {
        title: 'Construida sobre un producto real',
        body: 'Doku es la misma tecnología que usan los viajeros para organizar sus propios documentos, con extracción por IA y viajes compartidos.',
      },
    ],
    formTitle: 'Estamos construyendo esto con un grupo pequeño de agencias aliadas',
    formIntro:
      '¿Te interesa? Cuéntanos sobre tu agencia y nos pondremos en contacto a medida que el producto para agencias tome forma.',
    nameLabel: 'Tu nombre',
    agencyLabel: 'Nombre de la agencia',
    emailLabel: 'Email de trabajo',
    messageLabel: 'Lo que quieras contarnos (opcional)',
    submit: 'Quiero saber más',
    submitting: 'Enviando…',
    success: '¡Gracias! Nos pondremos en contacto pronto.',
    duplicate: 'Ya tenemos tu contacto — ¡te escribiremos pronto!',
    error: 'Algo salió mal. Inténtalo de nuevo en un minuto.',
  },
  comingSoon: {
    title: 'Aquí se está construyendo algo bueno.',
    body: 'Doku organizará tus documentos de viaje con IA — compartes una reserva y tu viaje se arma solo. Estamos dando los últimos toques.',
  },
  legal: {
    badgeLegal: 'Legal',
    badgeAccount: 'Cuenta',
    privacyTitle: 'Política de privacidad',
    termsTitle: 'Términos del servicio',
    deletionTitle: 'Eliminar tu cuenta',
    supportTitle: 'Soporte',
    lastUpdated: 'Última actualización',
  },
  invite: {
    badge: 'Invitación a un viaje',
    title: 'Te han invitado a un viaje en Doku',
    subtitle:
      'Doku reúne los documentos de un viaje en un solo lugar — vuelos, hoteles, transporte y seguros — y todos los invitados ven lo mismo, también sin conexión.',
    hasApp: '¿Ya tienes Doku instalada?',
    openApp: 'Abrir la invitación',
    getApp: 'Consigue Doku para aceptarla',
    storesSoon: 'Doku está en beta privada. Déjanos tu correo y te enviamos el enlace en cuanto esté disponible.',
    whatIsIt: 'Qué incluye',
    point1: 'Todas las reservas del viaje en un solo lugar, ordenadas por día.',
    point2: 'Disponibles sin conexión, para los momentos sin señal.',
    point3: 'No tienes que pagar nada: quien te invitó ya cubrió este viaje.',
    keepsWaiting: 'La invitación te espera. Ábrela en el teléfono donde instales Doku.',
  },
  meta: {
    inviteTitle: 'Te han invitado a un viaje',
    inviteDescription:
      'Alguien ha compartido un viaje contigo en Doku. Instala la aplicación para ver todos los documentos del viaje, también sin conexión.',
    homeTitle: 'Doku — Tus documentos de viaje, organizados con IA',
    homeDescription:
      'Comparte el PDF de tu reserva y Doku lo lee, lo clasifica y lo archiva en tu viaje. Vuelos, hoteles, transporte y seguros — disponibles sin conexión, en inglés y español.',
    privacyDescription: 'Cómo Doku recopila, usa y protege tus datos.',
    termsDescription: 'Los términos que rigen el uso de Doku.',
    deletionDescription: 'Cómo eliminar tu cuenta de Doku y todos los datos asociados.',
    supportDescription: 'Recibe ayuda con Doku o contacta al equipo.',
  },
};
