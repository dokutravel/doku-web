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
          <strong>Datos técnicos.</strong> Reportes de errores y fallos (a través de Sentry) y
          contadores de uso del análisis con IA, que usamos para aplicar los límites del plan.
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

      <h2>Cambios a esta política</h2>
      <p>
        Si cambiamos esta política de forma sustancial, lo vamos a comunicar en la app o por
        email antes de que el cambio entre en vigencia.
      </p>
    </>
  );
}
