import type { Dictionary } from './en';

export const es: Dictionary = {
  common: {
    appName: 'Doku',
    tagline: 'Tus documentos de viaje, organizados con IA',
  },
  nav: {
    how: 'Cómo funciona',
    features: 'Qué hace',
    faq: 'Preguntas',
    agencies: 'Para agencias',
    joinWaitlist: 'Anotarme',
  },
  hero: {
    title: 'Tus documentos de viaje, organizados solos.',
    subtitle:
      'Compartile a Doku el PDF de una reserva — un vuelo, un hotel, un seguro. La IA lo lee, extrae lo importante y lo guarda en el viaje que corresponde. Todo a mano cuando aterrizás, incluso sin señal.',
    badge: 'Beta cerrada',
  },
  waitlist: {
    intro: 'Doku está en beta cerrada. Dejanos tu email y te avisamos apenas esté disponible.',
    placeholder: 'tu@email.com',
    submit: 'Avisame',
    submitting: 'Enviando…',
    privacyNote: 'Un solo email cuando lancemos. Nada de spam.',
    success: '¡Listo! Te escribimos apenas Doku esté disponible.',
    duplicate: 'Ese email ya está anotado. ¡Gracias por el entusiasmo!',
    invalidEmail: 'Ese email no parece válido.',
    error: 'Algo salió mal. Probá de nuevo en un minuto.',
  },
  how: {
    title: 'Cómo funciona',
    subtitle: 'Tres pasos, cero carpetas.',
    steps: [
      {
        title: 'Compartí la reserva',
        body: 'Desde el mail o WhatsApp, tocá compartir y elegí Doku. PDFs, capturas o fotos — hasta cinco a la vez.',
      },
      {
        title: 'La IA la lee por vos',
        body: 'Doku detecta si es un vuelo, hotel, transporte, actividad o seguro, y extrae fechas, códigos, horarios y pasajeros.',
      },
      {
        title: 'Tu viaje se arma solo',
        body: 'Cada documento cae en el viaje correcto, ordenado y a mano. Vos solo viajás.',
      },
    ],
  },
  features: {
    title: 'Pensada para el momento en que estás viajando',
    subtitle: 'Doku no es otro cajón de archivos: es tu viaje, organizado.',
    items: [
      {
        key: 'categories',
        title: 'Cada reserva, entendida',
        body: 'Vuelos, hoteles, transporte, actividades y seguros de viaje — cada uno con su color y su detalle propio.',
      },
      {
        key: 'offline',
        title: 'Modo viaje, sin conexión',
        body: 'Descargá el viaje antes de salir y abrí todos los documentos sin internet. Los aeropuertos aman matar tu roaming.',
      },
      {
        key: 'shared',
        title: 'Viajes compartidos',
        body: 'Invitá a tus compañeros de viaje. Todos ven los documentos del viaje — se acabó el "¿me reenviás el voucher?".',
      },
      {
        key: 'insurance',
        title: 'La asistencia, primera',
        body: 'El teléfono de emergencias de tu seguro, arriba de todo en el viaje y a un toque de llamar.',
      },
      {
        key: 'edit',
        title: 'Vos tenés el control',
        body: '¿La IA leyó algo mal? Corregí cualquier campo en el momento. Cargá documentos a mano, con o sin IA.',
      },
      {
        key: 'privacy',
        title: 'Tus documentos son tuyos',
        body: 'Cifrados en tránsito y en reposo, visibles solo para vos y para quienes compartas un viaje.',
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
        a: 'Doku es una app que organiza tus documentos de viaje. Le compartís tus confirmaciones de reserva — vuelos, hoteles, transporte, actividades, seguros — y la IA extrae los datos importantes y agrupa todo por viaje.',
      },
      {
        q: '¿Cómo organiza Doku mis reservas?',
        a: 'Cuando compartís un PDF, captura o foto, Doku detecta el tipo de documento y extrae fechas, códigos de reserva, horarios y pasajeros. Los documentos cuyas fechas caen dentro de un viaje se vinculan solos; también podés asignar cualquiera a mano.',
      },
      {
        q: '¿Funciona sin conexión?',
        a: 'Sí. El modo viaje descarga el viaje entero a tu teléfono: pases de abordar, vouchers y pólizas se abren al instante sin internet — justo cuando menos señal tenés.',
      },
      {
        q: '¿Qué tipos de documentos entiende?',
        a: 'Vuelos, reservas de hotel, transporte terrestre (bus, tren, ferry, transfers), actividades y tours, y seguros o asistencia al viajero. Cualquier otra cosa se puede guardar y organizar a mano.',
      },
      {
        q: '¿Mis documentos están seguros?',
        a: 'Tus documentos se guardan cifrados y solo los ve tu cuenta y las personas con las que compartís un viaje explícitamente. En la política de privacidad está el detalle completo.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Durante la beta, Doku es gratis. Al lanzar va a haber un plan gratuito y un plan premium con análisis de IA ilimitado, modo viaje offline y viajes compartidos.',
      },
      {
        q: '¿Para iPhone o Android?',
        a: 'Ambos. Doku está construida para iOS y Android desde el día uno, en español e inglés.',
      },
    ],
  },
  finalCta: {
    title: 'Viajá con todo a mano',
    body: 'Sé de los primeros en enterarte cuando Doku esté disponible.',
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
    metaTitle: 'Doku para agencias de viaje',
    metaDescription:
      'Entregá viajes organizados a tus clientes: cada voucher, ticket y póliza en una app, disponible offline, con tu servicio detrás.',
    title: 'Doku para agencias de viaje',
    subtitle:
      'El viaje ya lo armás vos. Entregalo como se merece: cada voucher, ticket y póliza organizados en una app que tu cliente abre en el aeropuerto — con tu agencia detrás.',
    bullets: [
      {
        title: 'Entregá viajes, no adjuntos',
        body: 'En vez de una cadena de mails y PDFs, tu cliente recibe un viaje organizado: vuelos, hoteles, transfers y seguro en orden.',
      },
      {
        title: 'Menos "¿me lo reenviás?"',
        body: 'Todo vive en el viaje, disponible sin conexión. Tu cliente deja de revolver el correo — y deja de llamarte por eso.',
      },
      {
        title: 'Sobre un producto real',
        body: 'Doku es la misma tecnología que usan los viajeros para organizar sus propios documentos, con extracción por IA y viajes compartidos.',
      },
    ],
    formTitle: 'Estamos construyendo esto con un grupo chico de agencias partner',
    formIntro:
      '¿Te interesa? Contanos de tu agencia y te contactamos a medida que el producto para agencias tome forma.',
    nameLabel: 'Tu nombre',
    agencyLabel: 'Nombre de la agencia',
    emailLabel: 'Email de trabajo',
    messageLabel: 'Lo que quieras contarnos (opcional)',
    submit: 'Quiero saber más',
    submitting: 'Enviando…',
    success: '¡Gracias! Te contactamos pronto.',
    duplicate: 'Ya tenemos tu contacto — ¡te escribimos pronto!',
    error: 'Algo salió mal. Probá de nuevo en un minuto.',
  },
  comingSoon: {
    title: 'Acá se está construyendo algo bueno.',
    body: 'Doku va a organizar tus documentos de viaje con IA — compartís una reserva y tu viaje se arma solo. Estamos dando los últimos toques.',
  },
  legal: {
    privacyTitle: 'Política de privacidad',
    termsTitle: 'Términos del servicio',
    deletionTitle: 'Eliminar tu cuenta',
    supportTitle: 'Soporte',
    lastUpdated: 'Última actualización',
  },
  meta: {
    homeTitle: 'Doku — Tus documentos de viaje, organizados con IA',
    homeDescription:
      'Compartí el PDF de tu reserva y Doku lo lee, lo clasifica y lo guarda en tu viaje. Vuelos, hoteles, transporte y seguros — disponibles offline, en español e inglés.',
    privacyDescription: 'Cómo Doku recopila, usa y protege tus datos.',
    termsDescription: 'Los términos que rigen el uso de Doku.',
    deletionDescription: 'Cómo eliminar tu cuenta de Doku y todos los datos asociados.',
    supportDescription: 'Recibí ayuda con Doku o contactá al equipo.',
  },
};
