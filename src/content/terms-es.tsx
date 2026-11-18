import { IoAlertCircleOutline } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function TermsEs() {
  return (
    <>
      <h2>Quiénes somos</h2>
      <p>
        Doku es una aplicación desarrollada y operada por el equipo de Doku, con domicilio en
        la República Argentina (en adelante, «Doku» o «nosotros»). Al usar Doku, aceptas estos
        Términos. Contacto: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>El servicio</h2>
      <p>
        Doku te permite guardar, organizar y compartir tus documentos de viaje, con extracción
        de datos asistida por inteligencia artificial. Guardar, abrir, buscar y organizar
        documentos a mano está incluido en todos los planes.
      </p>
      <p>El servicio puede cambiar, interrumpirse o limitarse mientras sigue en desarrollo.</p>

      <h2>Tu cuenta</h2>
      <p>
        Para usar Doku necesitas una cuenta de Google o de Apple. Eres responsable de la
        actividad que ocurra en tu cuenta y de mantener seguro el acceso a tu dispositivo.
      </p>

      <h2>Tu contenido y tu responsabilidad</h2>
      <p>
        Los documentos que subes son tuyos. Nos otorgas una licencia limitada para
        almacenarlos, procesarlos y transmitirlos solo para prestarte el servicio.
      </p>
      <p>
        Al subir un documento, declaras que tienes derecho a hacerlo y que, si contiene datos
        personales de otras personas (por ejemplo, otros pasajeros de tu reserva), cuentas con
        su consentimiento o con otra base legal para compartirlos. Está prohibido subir
        documentos falsificados, adulterados o ilegales, o documentos de terceros sin su
        autorización.
      </p>
      <p>
        <strong>Indemnidad.</strong> Te comprometes a mantener indemne a Doku frente a
        cualquier reclamo, daño, multa o gasto (incluidos honorarios legales razonables) que un
        tercero inicie contra Doku a causa del contenido que subiste, de haber compartido datos
        de terceros sin autorización o de haber incumplido estos Términos.
      </p>

      <h2>Documentos que no debes subir</h2>
      <p>
        Doku está pensada para organizar documentación de reservas de viaje: pasajes, vouchers,
        confirmaciones de alojamiento, entradas y pólizas de seguro. No está diseñada para
        almacenar documentos de identidad (como pasaportes, DNI, cédulas o licencias de
        conducir) ni otra información especialmente sensible, como datos de salud o datos
        financieros (números de tarjeta o de cuentas bancarias).
      </p>
      <p>
        Si de todas formas subes este tipo de documentos, lo haces bajo tu exclusiva
        responsabilidad. En la medida permitida por la ley, Doku no será responsable por los
        daños que se deriven del almacenamiento de esa información.
      </p>

      <Callout tone="warning" icon={IoAlertCircleOutline}>
        <h3>Exactitud de la información</h3>
        <p>
          Doku extrae y organiza automáticamente los datos de tus documentos usando
          inteligencia artificial. Este proceso puede cometer errores: leer mal una fecha, un
          horario, una terminal, un número de vuelo o un código de reserva, omitir información
          o asignarla al viaje equivocado.
        </p>
        <p>
          La información que muestra Doku es una ayuda para organizarte y no reemplaza la
          documentación original ni la información oficial del proveedor (aerolínea,
          alojamiento, aseguradora, etc.). Antes de viajar y antes de cada trámite (check-in,
          embarque, llegada a un alojamiento), es tu responsabilidad verificar los datos
          importantes en el documento original o directamente con el proveedor, y estar atento
          a los cambios que este informe.
        </p>
        <p>
          En la medida permitida por la ley, Doku no será responsable por pérdidas de vuelos,
          conexiones o reservas, ni por otros daños derivados de haber confiado en datos mal
          extraídos, incompletos o desactualizados sin verificarlos.
        </p>
      </Callout>

      <h2>Uso aceptable</h2>
      <p>
        No puedes usar Doku para almacenar o distribuir contenido ilegal, intentar acceder a
        datos de otros usuarios ni interferir con el funcionamiento del servicio. Podemos
        suspender las cuentas que infrinjan estos Términos.
      </p>

      <h2>Planes y compras</h2>
      <p>
        Las funciones Pro (procesamiento automático con IA, compartir un viaje y descarga para
        acceso sin conexión) se habilitan por viaje, de dos formas:
      </p>
      <ul>
        <li>
          <strong>Trip Pass:</strong> pago único de US$ 4,99 que habilita las funciones Pro en
          un viaje. No vence ni se renueva. Es un producto consumible.
        </li>
        <li>
          <strong>Viajero Frecuente:</strong> suscripción anual de US$ 29,99 que habilita las
          funciones Pro en todos los viajes de los que eres titular mientras esté vigente.
        </li>
      </ul>
      <p>
        Los precios en dólares son de referencia. La tienda te muestra el precio final en tu
        moneda local, con los impuestos que correspondan, antes de confirmar la compra, y ese
        es el precio que prevalece.
      </p>

      <h3>El pase de bienvenida</h3>
      <p>
        Cada cuenta nueva recibe un Trip Pass gratuito, que se aplica automáticamente al primer
        viaje que crees. Ese es el plan gratuito.
      </p>
      <p>
        Un viaje sin pase ni suscripción no ejecuta procesamiento con IA, no se puede compartir
        ni descargar para acceso sin conexión. Sus documentos se pueden seguir guardando y
        organizando a mano.
      </p>

      <h3>El pase habilita un viaje, no una cuenta</h3>
      <p>
        El Trip Pass pertenece al viaje, no a quien lo compró. Los participantes de un viaje
        compartido acceden a las funciones Pro habilitadas por quien organiza el viaje. Aceptar
        una invitación no tiene costo.
      </p>
      <p>
        Un pase solo se puede aplicar a viajes que no hayan terminado. Si eliminas un viaje con
        pase, el pase se pierde. La app te avisa antes de eliminarlo.
      </p>

      <h3>Renovación y cancelación de la suscripción</h3>
      <p>
        <strong>Viajero Frecuente es una suscripción de renovación automática.</strong> El
        cobro se hace a través de App Store o Google Play y se repite al inicio de cada período
        anual, al precio vigente en tu país.
      </p>
      <p>
        Para que no se renueve, tienes que cancelarla al menos <strong>24 horas antes</strong>{' '}
        del fin del período, desde los ajustes de suscripciones de la tienda. La cancelación
        tiene efecto al final del período ya pagado. Eliminar la app no cancela la
        suscripción.
      </p>
      <p>
        Cuando la suscripción vence, no se habilitan nuevas funciones Pro, pero conservas tu
        itinerario, las invitaciones aceptadas y los archivos que ya descargaste. Los viajes con
        Trip Pass no se ven afectados.
      </p>

      <h3>Límite de uso razonable del procesamiento con IA</h3>
      <ul>
        <li>
          <strong>Con Trip Pass:</strong> al menos 40 análisis por viaje, durante toda la vida
          del viaje. No se reinicia cada mes.
        </li>
        <li>
          <strong>Con suscripción anual:</strong> al menos 100 análisis por viaje y por mes,
          mientras la suscripción esté vigente.
        </li>
      </ul>
      <p>
        No se cuentan los análisis que fallan por causas que Doku detecta, como un error del
        proveedor de IA, un documento ilegible o un archivo que no es un documento de viaje.
      </p>
      <p>
        Al alcanzar el límite, el viaje no admite nuevos documentos para procesar, pero todo su
        contenido sigue disponible y puedes crear eventos a mano. Podemos aumentar estos
        límites en cualquier momento. Si los redujéramos, te avisaremos antes.
      </p>

      <h3>Pagos y reembolsos</h3>
      <p>
        Todas las compras se procesan a través de App Store o Google Play. Doku no procesa
        pagos ni accede a tus datos de pago.
      </p>
      <p>
        Los reembolsos los gestionan Apple y Google según sus propias políticas, y la solicitud
        se hace en la tienda donde compraste. Podemos orientarte, pero la decisión corresponde
        a la tienda. Si la tienda reembolsa una compra, Doku puede retirar las funciones que
        esa compra habilitaba.
      </p>

      <h2>Acceso sin conexión y tu dispositivo</h2>
      <p>
        Para acceder a tus documentos sin internet, primero tienes que descargarlos en tu
        dispositivo con la función de acceso sin conexión. Doku no garantiza el acceso a tus
        documentos, ni será responsable si no puedes abrirlos, cuando eso se deba a
        circunstancias de tu dispositivo o ajenas a Doku, entre ellas:
      </p>
      <ul>
        <li>que no hayas descargado los documentos previamente;</li>
        <li>que hayas borrado la caché, los datos de la app o la app misma;</li>
        <li>falta de batería, fallas, pérdida o robo del dispositivo;</li>
        <li>falta de espacio de almacenamiento;</li>
        <li>
          actualizaciones del sistema operativo o configuraciones del dispositivo que impidan
          abrir la app;
        </li>
        <li>falta de conexión a internet cuando los documentos no estaban descargados.</li>
      </ul>
      <p>
        Te recomendamos llevar siempre una copia de respaldo de tu documentación esencial,
        impresa o en otro medio.
      </p>

      <h2>Viajes compartidos</h2>
      <p>
        Cuando compartes un viaje, los participantes pueden ver y, según el rol que les
        asignes, agregar, editar o eliminar documentos y datos de ese viaje. El dueño del viaje
        es responsable de elegir a quién invita y con qué permisos, y puede quitar
        participantes o eliminar el viaje en cualquier momento. Si elimina el viaje, todos los
        participantes pierden el acceso a sus documentos, incluso mientras están viajando.
      </p>
      <p>
        Doku no es parte de las relaciones entre los participantes de un viaje. En la medida
        permitida por la ley, Doku no será responsable por las acciones de otros participantes
        (como borrar o modificar documentos, cambiar datos o eliminar el viaje) ni por los
        desacuerdos o reclamos que surjan entre ellos. Te recomendamos que cada participante
        conserve una copia propia de los documentos que necesita para viajar.
      </p>

      <h2>Servicios de terceros y fuerza mayor</h2>
      <p>
        Doku funciona sobre servicios de terceros, entre ellos Supabase (base de datos y
        almacenamiento), Google Gemini (procesamiento con IA), Apple App Store y Google Play
        (distribución y pagos), Expo (notificaciones) y proveedores de internet y de hosting.
        No controlamos esos servicios.
      </p>
      <p>
        En la medida permitida por la ley, Doku no será responsable por interrupciones, demoras
        o fallas del servicio que se deban a caídas o fallas de esos terceros, ni a hechos de
        fuerza mayor o caso fortuito, como cortes de energía o de internet, fallas
        generalizadas de infraestructura, desastres naturales, conflictos, actos de autoridad o
        ataques informáticos a gran escala. Esto incluye no poder acceder a tus documentos en
        un momento puntual, como un check-in o un embarque. Por eso recomendamos descargarlos
        para acceso sin conexión y llevar una copia de respaldo.
      </p>

      <h2>Seguridad de la información</h2>
      <p>
        Aplicamos medidas de seguridad técnicas y organizativas razonables para proteger tus
        datos, como cifrado en tránsito y en reposo y controles de acceso por usuario. Sin
        embargo, ningún sistema conectado a internet es completamente invulnerable, y no
        podemos garantizar una seguridad absoluta.
      </p>
      <p>
        Si ocurre un incidente de seguridad que afecte tus datos, te avisaremos sin demoras
        indebidas y tomaremos las medidas razonables para contenerlo y mitigarlo. En la medida
        permitida por la ley, Doku no será responsable por accesos no autorizados, ataques
        informáticos o filtraciones que ocurran a pesar de haber adoptado medidas de seguridad
        razonables, ni por los que se deban a causas atribuibles al usuario, como el acceso de
        terceros a su dispositivo o a su cuenta de Google o Apple.
      </p>

      <h2>Terminación</h2>
      <p>
        Puedes dejar de usar Doku y eliminar tu cuenta en cualquier momento. Al eliminarla se
        borran tus viajes y los pases aplicados a ellos, sin derecho a reembolso.
      </p>
      <p>
        Podemos suspender o terminar el servicio o una cuenta por infracciones a estos
        Términos, con aviso razonable cuando sea posible.
      </p>

      <h2>Garantías y responsabilidad</h2>
      <p>
        El servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de
        disponibilidad continua ni de exactitud. En la máxima medida permitida por la ley
        aplicable, Doku no será responsable por daños indirectos, lucro cesante o pérdida de
        oportunidades, y su responsabilidad total frente a ti se limita al monto que hayas
        pagado por el servicio en los 12 meses anteriores al hecho que origina el reclamo.
      </p>
      <p>
        Nada de lo dispuesto en estos Términos limita los derechos que te reconoce la normativa
        de defensa del consumidor aplicable, ni excluye la responsabilidad de Doku por dolo o
        culpa grave.
      </p>

      <h2>Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de la República Argentina. Cualquier controversia
        se someterá a los tribunales ordinarios competentes de la República Argentina, sin perjuicio del
        derecho de los usuarios que sean consumidores a presentar reclamos ante los tribunales
        de su domicilio, conforme a la normativa vigente.
      </p>

      <h2>Cambios y contacto</h2>
      <p>
        Podemos actualizar estos Términos. Si hacemos cambios sustanciales, los anunciaremos en
        la app antes de que entren en vigor.
      </p>
      <p>
        Para cualquier consulta, escríbenos a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Quiénes integran Doku</h2>
      <p>
        El equipo de Doku está integrado por Manuel Bolla Agrelo y María Celeste Palacios, con
        domicilio en la República Argentina.
      </p>
    </>
  );
}
