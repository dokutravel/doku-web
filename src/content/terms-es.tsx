import { IoAlertCircleOutline } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function TermsEs() {
  return (
    <>
      <p>
        Estos términos rigen tu uso de Doku, la app y sus servicios asociados. Al crear una
        cuenta o usar la app aceptas estos términos.
      </p>

      <h2>El servicio</h2>
      <p>
        Doku te permite guardar, organizar y compartir documentos de viaje, con extracción de
        datos asistida por IA. Guardar documentos y viajes, abrirlos, buscarlos y organizarlos
        a mano está incluido siempre, en cualquier plan. El servicio puede cambiar,
        interrumpirse o limitarse mientras lo desarrollamos.
      </p>

      <h2>Tu cuenta</h2>
      <p>
        Necesitas una cuenta de Google o Apple para iniciar sesión. Eres responsable de la
        actividad de tu cuenta y de mantener seguro el acceso a tu dispositivo.
      </p>

      <h2>Tu contenido</h2>
      <p>
        Los documentos que subes son tuyos. Nos otorgas una licencia limitada para
        almacenarlos, procesarlos y transmitirlos con el único fin de prestar el servicio
        (incluido el análisis con IA que solicites y el compartir viajes que inicies). No
        subas documentos sobre los que no tengas derechos.
      </p>

      <Callout tone="warning" icon={IoAlertCircleOutline}>
        <h3>Sobre la extracción con IA</h3>
        <p>
          <strong>La IA puede cometer errores.</strong> Los datos extraídos (fechas,
          horarios, códigos, terminales) son una ayuda para organizarte, no un documento
          oficial. Antes de viajar, verifica siempre la información crítica contra la
          confirmación original o con el proveedor (aerolínea, hotel, aseguradora). Doku no
          es responsable de decisiones tomadas con base en datos extraídos incorrectamente.
        </p>
      </Callout>

      <h2>Uso aceptable</h2>
      <p>
        No uses Doku para almacenar o distribuir contenido ilegal, para intentar acceder a
        datos de otros usuarios ni para interferir con el servicio. Podemos suspender cuentas
        que violen estos términos.
      </p>

      <h2>Planes y compras</h2>
      <p>
        Las funciones que Doku llama Pro —el análisis automático con IA, compartir un viaje y
        descargarlo para usarlo sin conexión— se habilitan por viaje. Hay dos formas de
        habilitarlas:
      </p>
      <ul>
        <li>
          <strong>Trip Pass</strong> — un pago único de US$ 4,99 que habilita las funciones
          Pro en un viaje concreto, sin fecha de vencimiento y sin renovación. Es un producto
          consumible: no se cobra de nuevo y tampoco se renueva solo.
        </li>
        <li>
          <strong>Frequent Traveler</strong> — una suscripción anual de US$ 29,99 por año que
          habilita las funciones Pro en todos los viajes de los que seas titular mientras la
          suscripción esté vigente. Se renueva automáticamente.
        </li>
      </ul>
      <p>
        Los precios indicados son los de referencia en dólares estadounidenses. Las tiendas
        aplican precios regionales y conversión de moneda: el precio final en tu país, con los
        impuestos que correspondan, lo muestra App Store o Google Play antes de que confirmes
        la compra, y es el que prevalece.
      </p>

      <h3>El pase de bienvenida</h3>
      <p>
        Toda cuenta nueva recibe un Trip Pass sin costo, que se aplica automáticamente al
        primer viaje que crees. Ese es el plan gratuito de Doku: un viaje con las funciones
        Pro habilitadas. Un viaje sin pase y sin suscripción vigente no ejecuta análisis con
        IA, no se puede compartir y no se descarga para uso sin conexión, pero sigues pudiendo
        guardar y organizar sus documentos a mano.
      </p>

      <h3>El pase habilita un viaje, no una cuenta</h3>
      <p>
        Un Trip Pass es una propiedad del viaje al que se aplica, no de la persona que lo
        compró. Aplicarlo a un viaje no habilita las funciones Pro en tus otros viajes.
        Quienes participan en un viaje compartido lo ven habilitado porque lo pagó quien
        organiza el viaje; aceptar una invitación y participar en un viaje compartido no tiene
        costo.
      </p>
      <p>
        Un pase se aplica a un viaje que todavía no terminó. Si eliminas un viaje al que
        aplicaste un pase, el pase se pierde junto con el viaje y no vuelve a estar
        disponible. La app te lo advierte antes de eliminarlo.
      </p>

      <h3>Renovación y cancelación de la suscripción</h3>
      <p>
        <strong>Frequent Traveler es una suscripción de renovación automática.</strong> El
        período es anual y el precio de referencia es de US$ 29,99 por año. El cobro se hace a
        través de tu cuenta de App Store o Google Play al confirmar la compra, y se repite
        automáticamente al inicio de cada nuevo período anual, al precio vigente en tu país,
        salvo que canceles antes.
      </p>
      <p>
        Para no renovar, cancela la suscripción al menos <strong>24 horas antes</strong> de
        la fecha de finalización del período en curso, desde los ajustes de suscripciones de
        tu cuenta de App Store o Google Play. La cancelación surte efecto al final del período
        ya pagado: conservas las funciones Pro hasta esa fecha. Eliminar la app no cancela la
        suscripción.
      </p>
      <p>
        Cuando una suscripción vence, Doku deja de habilitar funciones Pro nuevas, pero no
        retira lo que ya se hizo: el itinerario ya ordenado se conserva, quienes ya aceptaron
        una invitación siguen en el viaje, y los archivos ya descargados se siguen abriendo
        sin conexión. Los viajes con Trip Pass no se ven afectados por el vencimiento de una
        suscripción.
      </p>

      <h3>Límite de uso razonable del análisis con IA</h3>
      <p>
        El análisis automático con IA está sujeto a un límite de uso razonable, pensado para
        prevenir el abuso y no para acotar el uso normal de un viaje:
      </p>
      <ul>
        <li>
          <strong>Con Trip Pass:</strong> al menos 40 análisis en ese viaje, para toda la vida
          del viaje. No se reinicia mes a mes.
        </li>
        <li>
          <strong>Con la suscripción anual:</strong> al menos 100 análisis por viaje y por
          mes, mientras la suscripción esté vigente.
        </li>
      </ul>
      <p>
        Un análisis es el procesamiento con IA de un documento. No se descuentan los análisis
        que fallan por causas que Doku detecta por su cuenta: un error del proveedor de IA, un
        documento ilegible o un archivo que no resulta ser un documento de viaje.
      </p>
      <p>
        Al alcanzar el límite en un viaje, ese viaje deja de aceptar documentos nuevos para
        analizar; todo lo que ya está sigue disponible y puedes seguir creando eventos a mano.
        Podemos subir estos límites en cualquier momento. Si alguna vez tuviéramos que
        bajarlos, te lo anunciaremos antes de que el cambio entre en vigor.
      </p>

      <h3>Pagos y reembolsos</h3>
      <p>
        Las compras se procesan íntegramente a través de App Store o Google Play. Doku no
        procesa pagos directamente y no tiene acceso a tus datos de pago.
      </p>
      <p>
        Los reembolsos los gestionan Apple y Google conforme a sus propias políticas, y hay
        que solicitarlos a la tienda donde se hizo la compra. Si necesitas ayuda para
        gestionarlo, escríbenos a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>; podemos orientarte, pero la
        decisión sobre el reembolso es de la tienda. Si Apple o Google reembolsan una compra,
        Doku puede retirar las funciones que esa compra habilitaba.
      </p>

      <h2>Terminación</h2>
      <p>
        Puedes dejar de usar Doku y eliminar tu cuenta en cualquier momento. Eliminar tu
        cuenta elimina tus viajes y, con ellos, los pases aplicados a esos viajes; no genera
        derecho a reembolso. Nosotros podemos suspender o terminar el servicio (o una cuenta)
        por violaciones de estos términos, con aviso razonable cuando sea posible.
      </p>

      <h2>Garantías y responsabilidad</h2>
      <p>
        El servicio se ofrece &quot;tal cual&quot;, sin garantías de disponibilidad o
        exactitud. En la máxima medida permitida por la ley, nuestra responsabilidad total
        hacia ti se limita al monto que pagaste por el servicio en los últimos 12 meses.
      </p>

      <h2>Cambios y contacto</h2>
      <p>
        Podemos actualizar estos términos; los cambios sustanciales se anunciarán en la app.
        Preguntas: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </>
  );
}
