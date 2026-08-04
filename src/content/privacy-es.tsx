import { contactEmail } from '@/lib/site';

export function PrivacyEs() {
  return (
    <>
      <p>
        Doku es una aplicación para organizar documentos de viaje. Esta política explica qué
        datos recopilamos, para qué los usamos y qué derechos tenés sobre ellos. La versión
        corta: tus documentos son tuyos, no vendemos tus datos y no los usamos para publicidad.
      </p>

      <h2>Quién es el responsable</h2>
      <p>
        El responsable del tratamiento es el equipo de Doku. Para cualquier consulta sobre tus
        datos, escribinos a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Qué datos recopilamos</h2>
      <ul>
        <li>
          <strong>Datos de cuenta.</strong> Al iniciar sesión con Google o Apple recibimos tu
          nombre, tu email y tu foto de perfil. No vemos tu contraseña.
        </li>
        <li>
          <strong>Tus documentos.</strong> Los archivos que subís o compartís a la app (PDFs,
          capturas o fotos de reservas, pasajes, vouchers, pólizas) y los datos que la IA
          extrae de ellos (fechas, códigos de reserva, horarios, pasajeros, destinos).
        </li>
        <li>
          <strong>Datos técnicos.</strong> Reportes de errores y fallos (a través de Sentry),
          contadores de uso del análisis con IA — que usamos para aplicar los límites del
          plan — y métricas de uso del producto (a través de PostHog): qué pantallas y
          funciones se usan, asociadas a un identificador interno aleatorio, nunca a tu
          nombre, tu email ni al contenido de tus documentos.
        </li>
        <li>
          <strong>En esta web.</strong> Si te anotás en la lista de espera, guardamos tu email
          con el único fin de avisarte del lanzamiento. Esta web no usa cookies de seguimiento.
        </li>
      </ul>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Prestar el servicio: guardar tus documentos, organizarlos por viaje y sincronizarlos entre tus dispositivos.</li>
        <li>Analizar los documentos que vos elegís analizar con IA, para extraer sus datos.</li>
        <li>Compartir un viaje con las personas que vos invites — solo ven los documentos de ese viaje.</li>
        <li>Mantener la app estable y diagnosticar errores.</li>
      </ul>
      <p>No vendemos tus datos ni los usamos para publicidad. Punto.</p>

      <h2>Base legal</h2>
      <ul>
        <li>
          <strong>Ejecución del contrato:</strong> guardar, organizar, analizar y sincronizar
          tus documentos es el servicio que nos pedís al usar Doku.
        </li>
        <li>
          <strong>Interés legítimo:</strong> mantener la app estable (reportes de errores) y
          entender cómo se usa el producto para mejorarlo (métricas sin datos personales más
          allá de un identificador interno).
        </li>
        <li>
          <strong>Consentimiento:</strong> anotarte en la lista de espera de esta web y
          cualquier comunicación que aceptes recibir. Podés retirarlo cuando quieras.
        </li>
      </ul>

      <h2>Análisis con inteligencia artificial</h2>
      <p>
        Cuando analizás un documento, este se envía de forma segura a la API de Google Gemini
        para extraer sus datos. Según los términos de la API paga de Google, los documentos
        procesados no se usan para entrenar sus modelos. El análisis ocurre solo cuando vos lo
        pedís (o al compartir un archivo con la app), nunca sobre documentos que no subiste.
      </p>

      <h2>Dónde y cómo se guardan</h2>
      <p>
        Tus documentos y datos se almacenan en Supabase (base de datos y almacenamiento de
        archivos), cifrados en tránsito (TLS) y en reposo. El acceso está restringido por
        reglas a nivel de fila: cada documento es visible únicamente para su dueño y para los
        miembros de los viajes con los que se compartió explícitamente.
      </p>

      <h2>Proveedores que nos ayudan a prestar el servicio</h2>
      <p>
        No compartimos tus datos con terceros para sus propios fines. Sí usamos estos
        proveedores (subencargados), que procesan datos únicamente para prestarnos su
        servicio:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — base de datos, autenticación y almacenamiento de tus
          archivos.
        </li>
        <li>
          <strong>Google (API de Gemini)</strong> — análisis con IA de los documentos que
          elegís analizar.
        </li>
        <li>
          <strong>Sentry</strong> — reportes de errores y fallos de la app.
        </li>
        <li>
          <strong>PostHog</strong> — métricas de uso del producto (recibe solo el
          identificador interno y los eventos de uso, nunca tus documentos ni tu email).
        </li>
        <li>
          <strong>Vercel</strong> — alojamiento de esta web.
        </li>
      </ul>

      <h2>Transferencias internacionales</h2>
      <p>
        Algunos de estos proveedores procesan datos en Estados Unidos u otros países fuera
        del tuyo. Cuando eso ocurre, la transferencia se apoya en salvaguardas
        contractuales, como cláusulas contractuales tipo o los marcos de adecuación
        vigentes.
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>
        Mientras tu cuenta exista. Si eliminás un documento, se borra de nuestro
        almacenamiento. Si eliminás tu cuenta, se eliminan tu cuenta, tus documentos, tus
        viajes y los datos extraídos dentro de los 30 días.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Podés acceder a tus datos y corregirlos directamente en la app (cada campo extraído es
        editable). Podés pedir la eliminación completa de tu cuenta y tus datos — ver{' '}
        <a href="./account-deletion">cómo eliminar tu cuenta</a>. Para cualquier otro pedido
        (acceso, portabilidad, limitación), escribinos a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Menores</h2>
      <p>
        Doku no está dirigida a menores de 13 años y no recopilamos sus datos a sabiendas.
        Si creés que un menor nos dio sus datos, escribinos a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> y los eliminamos.
      </p>

      <h2>Cambios a esta política</h2>
      <p>
        Si cambiamos esta política de forma sustancial, lo vamos a comunicar en la app o por
        email antes de que el cambio entre en vigencia.
      </p>
    </>
  );
}
