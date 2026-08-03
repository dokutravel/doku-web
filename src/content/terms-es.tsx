import { contactEmail } from '@/lib/site';

export function TermsEs() {
  return (
    <>
      <p>
        Estos términos rigen el uso de Doku, la aplicación y los servicios asociados. Al crear
        una cuenta o usar la app, aceptás estos términos.
      </p>

      <h2>El servicio</h2>
      <p>
        Doku te permite guardar, organizar y compartir documentos de viaje, con extracción de
        datos asistida por inteligencia artificial. Doku está actualmente en beta: el servicio
        puede cambiar, interrumpirse o limitarse mientras lo desarrollamos.
      </p>

      <h2>Tu cuenta</h2>
      <p>
        Necesitás una cuenta de Google o Apple para iniciar sesión. Sos responsable de la
        actividad que ocurra con tu cuenta y de mantener el acceso a tu dispositivo seguro.
      </p>

      <h2>Tu contenido</h2>
      <p>
        Los documentos que subís son tuyos. Nos otorgás una licencia limitada para
        almacenarlos, procesarlos y transmitirlos con el único fin de prestarte el servicio
        (incluido el análisis con IA que vos pidas y el compartir viajes que vos inicies). No
        subas documentos sobre los que no tengas derechos.
      </p>

      <h2>Sobre la extracción con IA</h2>
      <p>
        <strong>La IA puede cometer errores.</strong> Los datos extraídos (fechas, horarios,
        códigos, terminales) son una ayuda para organizarte, no un documento oficial. Antes de
        viajar, verificá siempre la información crítica contra la confirmación original o con
        el proveedor (aerolínea, hotel, aseguradora). Doku no se hace responsable por
        decisiones tomadas en base a datos extraídos incorrectamente.
      </p>

      <h2>Uso aceptable</h2>
      <p>
        No uses Doku para almacenar o distribuir contenido ilegal, para intentar acceder a
        datos de otros usuarios ni para interferir con el servicio. Podemos suspender cuentas
        que violen estos términos.
      </p>

      <h2>Planes y precios</h2>
      <p>
        Durante la beta, Doku es gratuita. Al lanzar, va a haber un plan gratuito y planes
        pagos; los precios y límites se comunicarán en la app antes de cualquier cobro.
      </p>

      <h2>Terminación</h2>
      <p>
        Podés dejar de usar Doku y eliminar tu cuenta cuando quieras. Nosotros podemos
        suspender o terminar el servicio (o una cuenta) por violaciones a estos términos, con
        aviso razonable cuando sea posible.
      </p>

      <h2>Garantías y responsabilidad</h2>
      <p>
        El servicio se ofrece &quot;tal cual&quot;, sin garantías de disponibilidad o exactitud.
        En la máxima medida permitida por la ley, nuestra responsabilidad total frente a vos se
        limita al monto que pagaste por el servicio en los últimos 12 meses.
      </p>

      <h2>Cambios y contacto</h2>
      <p>
        Podemos actualizar estos términos; los cambios sustanciales se comunicarán en la app.
        Preguntas: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </>
  );
}
