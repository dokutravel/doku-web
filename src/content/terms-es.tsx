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
        datos asistida por IA. Doku está actualmente en beta: el servicio puede cambiar,
        interrumpirse o limitarse mientras lo construimos.
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

      <h2>Planes y precios</h2>
      <p>
        Durante la beta, Doku es gratis. Al lanzar habrá un plan gratuito y planes de pago;
        los precios y límites se comunicarán en la app antes de cualquier cargo.
      </p>

      <h2>Terminación</h2>
      <p>
        Puedes dejar de usar Doku y eliminar tu cuenta en cualquier momento. Nosotros podemos
        suspender o terminar el servicio (o una cuenta) por violaciones de estos términos, con
        aviso razonable cuando sea posible.
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
