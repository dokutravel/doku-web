import { IoSparkles } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function PrivacyEs() {
  return (
    <>
      <Callout tone="brand" icon={IoSparkles}>
        <p>
          En resumen: tus documentos son tuyos. No vendemos tus datos ni los usamos para
          publicidad.
        </p>
      </Callout>
      <p>
        Esta política explica qué datos recopilamos, para qué los usamos y cuáles son tus
        derechos.
      </p>

      <h2>Quién es el responsable</h2>
      <p>
        El responsable del tratamiento es el equipo de Doku. Para cualquier consulta sobre tus
        datos, escríbenos a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Qué datos recopilamos</h2>
      <ul>
        <li>
          <strong>Datos de cuenta:</strong> tu nombre, email y foto de perfil, cuando inicias
          sesión con Google o Apple. Nunca vemos tu contraseña.
        </li>
        <li>
          <strong>Tus documentos:</strong> los archivos que subes o compartes con Doku
          (reservas en PDF, capturas de pantalla, pasajes, vouchers, pólizas de seguro) y los
          datos que se extraen de ellos (fechas, códigos de reserva, horarios, pasajeros,
          destinos).
        </li>
        <li>
          <strong>Viajes compartidos e invitaciones:</strong> el viaje, quién invitó a quién,
          el rol asignado, la fecha de vencimiento de la invitación y el email de la persona
          invitada, si la invitación se envía por email. Cuando se acepta una invitación,
          registramos a los miembros del viaje y sus roles.
        </li>
        <li>
          <strong>Compras:</strong> qué compraste (Trip Pass o suscripción anual), cuándo, a
          qué viaje se aplica y el identificador de la transacción en la tienda. No recibimos
          ni guardamos tus datos de pago.
        </li>
        <li>
          <strong>Notificaciones:</strong> el token de notificaciones de tu dispositivo y su
          plataforma (iOS o Android), si activas las notificaciones.
        </li>
        <li>
          <strong>Datos técnicos:</strong> reportes de errores y fallas (Sentry), contadores
          de uso de IA por viaje para aplicar los límites de uso razonable, y métricas de uso
          del producto (PostHog) asociadas a un identificador interno aleatorio, nunca a tu
          nombre, tu email ni el contenido de tus documentos.
        </li>
        <li>
          <strong>En esta web:</strong> si te sumas a la lista de espera, guardamos tu email
          solo para avisarte del lanzamiento. El sitio no usa cookies de seguimiento.
        </li>
      </ul>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Prestarte el servicio: guardar tus documentos, organizarlos por viaje y sincronizarlos entre tus dispositivos.</li>
        <li>Procesar tus documentos con inteligencia artificial cuando tu viaje tiene un Trip Pass o tienes el plan anual.</li>
        <li>Compartir viajes con las personas que invitas, que solo ven los documentos de ese viaje.</li>
        <li>Enviarte notificaciones sobre la actividad de tus viajes compartidos y los cambios en tu plan, si las activaste.</li>
        <li>Registrar tus compras y habilitar las funciones pagas.</li>
        <li>Mantener la app estable y diagnosticar errores.</li>
      </ul>
      <p>No vendemos tus datos ni los usamos para publicidad.</p>

      <h2>Bases legales</h2>
      <ul>
        <li>
          <strong>Ejecución del contrato:</strong> guardar, procesar, sincronizar y compartir
          tus documentos, y registrar tus compras.
        </li>
        <li>
          <strong>Interés legítimo:</strong> mantener la app estable y entender cómo se usa el
          producto con métricas que no te identifican.
        </li>
        <li>
          <strong>Consentimiento:</strong> notificaciones, lista de espera y comunicaciones
          opcionales. Puedes retirarlo en cualquier momento.
        </li>
        <li>
          <strong>Obligación legal:</strong> conservar los registros de compras durante el
          plazo que exigen las normas fiscales y contables.
        </li>
      </ul>

      <h2>Procesamiento con inteligencia artificial</h2>
      <p>
        Si tu viaje tiene un Trip Pass activo o tienes el plan anual Viajero Frecuente, los
        documentos que subes o compartes con Doku se envían de forma segura y automática a la
        API de Google Gemini para extraer y organizar su información. En un viaje sin pase ni
        suscripción, los documentos se guardan y se organizan a mano, sin procesamiento con
        IA.
      </p>
      <p>
        Según las condiciones de la API paga de Google, los documentos procesados no se usan
        para entrenar sus modelos. Solo procesamos los documentos que tú subes o compartes con
        la app.
      </p>

      <h2>Documentos sensibles</h2>
      <p>
        Doku está diseñada para organizar documentación relacionada con viajes, como pasajes,
        reservas de alojamiento, vouchers, entradas y pólizas de seguro. No está diseñada para
        almacenar documentos de identidad (pasaportes, DNI, cédulas, licencias de conducir,
        visas) ni datos sensibles, como información de salud o financiera.
      </p>
      <p>
        Por este motivo, te pedimos que no los subas. Si lo haces, esos datos se tratan como
        cualquier otro documento, incluido el procesamiento automático con IA cuando
        corresponda a tu plan.
      </p>

      <h2>Dónde y cómo se almacenan</h2>
      <p>
        Tus datos se guardan en Supabase, cifrados en tránsito (TLS) y en reposo. Las reglas
        de seguridad a nivel de fila limitan el acceso para que cada documento solo lo vean su
        dueño y los miembros de los viajes con los que se compartió explícitamente.
      </p>
      <p>
        <strong>Incidentes de seguridad.</strong> Si detectamos un incidente de seguridad que
        afecte tus datos personales, te lo vamos a informar sin demoras indebidas, junto con
        las medidas tomadas y las recomendaciones que correspondan.
      </p>

      <h2>Proveedores que nos ayudan a prestar el servicio</h2>
      <p>
        No compartimos tus datos con terceros para sus propios fines. Usamos estos proveedores
        para prestar el servicio:
      </p>
      <ul>
        <li>
          <strong>Supabase:</strong> base de datos, autenticación y almacenamiento de
          archivos.
        </li>
        <li>
          <strong>Google (API de Gemini):</strong> procesamiento con IA de los documentos de
          viajes con Trip Pass o plan anual.
        </li>
        <li>
          <strong>RevenueCat:</strong> gestión de compras y suscripciones. Recibe un
          identificador de cuenta y el estado de tus compras, nunca tus documentos.
        </li>
        <li>
          <strong>Apple y Google:</strong> procesan los pagos a través de App Store y Google
          Play, como responsables independientes según sus propias políticas.
        </li>
        <li>
          <strong>Expo:</strong> envía las notificaciones. El texto de una notificación puede
          incluir el nombre de un viaje y el de quien realizó una actividad.
        </li>
        <li>
          <strong>Sentry:</strong> reportes de errores y fallas de la app.
        </li>
        <li>
          <strong>PostHog:</strong> métricas de uso del producto. Solo recibe el identificador
          interno y eventos de uso.
        </li>
        <li>
          <strong>Vercel:</strong> alojamiento del sitio web.
        </li>
      </ul>

      <h2>Transferencias internacionales</h2>
      <p>
        Algunos de estos proveedores procesan datos en Estados Unidos o en otros países
        distintos del tuyo. Estas transferencias se apoyan en garantías contractuales, como
        cláusulas contractuales tipo o los marcos de adecuación aplicables.
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <ul>
        <li>Conservamos tus datos mientras tu cuenta exista.</li>
        <li>Si eliminas un documento, se borra del almacenamiento.</li>
        <li>
          Si eliminas tu cuenta, borramos tu cuenta, tus documentos, tus viajes, tus
          invitaciones, tus tokens de notificaciones y los datos extraídos dentro de los 30
          días.
        </li>
        <li>
          Los registros de compras (producto, fecha e identificador de transacción) se
          conservan desvinculados de tu cuenta durante el plazo que exigen las normas fiscales
          y contables.
        </li>
      </ul>

      <h2>Tus derechos</h2>
      <ul>
        <li>
          Puedes ver y corregir tus datos directamente en la app, donde cada dato extraído se
          puede editar.
        </li>
        <li>
          Puedes desactivar las notificaciones en cualquier momento, desde los ajustes de tu
          dispositivo o de la app.
        </li>
        <li>
          Puedes eliminar tu cuenta y todos tus datos siguiendo las instrucciones de la{' '}
          <a href="./account-deletion">página de eliminación de cuenta</a>, o escribiéndonos
          a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </li>
        <li>
          Para otras solicitudes, como acceso, portabilidad o limitación del tratamiento,
          escríbenos a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </li>
      </ul>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, actualización y supresión de tus
        datos en los términos de la Ley 25.326 de Protección de Datos Personales de Argentina.
        La Agencia de Acceso a la Información Pública (AAIP), órgano de control de esa ley,
        atiende las denuncias y reclamos de quienes consideren afectados sus derechos.
      </p>

      <h2>Menores</h2>
      <p>
        Doku no está dirigida a menores de 13 años y no recopilamos sus datos a sabiendas. Si
        crees que un menor nos dio sus datos, escríbenos a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> y los eliminaremos.
      </p>

      <h2>Cambios a esta política</h2>
      <p>
        Si hacemos cambios sustanciales en esta política, te avisaremos en la app o por email
        antes de que entren en vigor.
      </p>

      <h2>Quiénes integran Doku</h2>
      <p>
        El equipo de Doku está integrado por Manuel Bolla Agrelo y María Celeste Palacios, con
        domicilio en la República Argentina.
      </p>
    </>
  );
}
