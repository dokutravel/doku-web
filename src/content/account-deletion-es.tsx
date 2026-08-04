import { contactEmail } from '@/lib/site';

export function AccountDeletionEs() {
  return (
    <>
      <p>
        Podés pedir la eliminación completa de tu cuenta de Doku y de todos los datos
        asociados en cualquier momento.
      </p>

      <h2>Cómo eliminar tu cuenta</h2>
      <p>Directamente desde la app:</p>
      <ul>
        <li>
          Abrí Doku → <strong>Perfil → Eliminar cuenta</strong>.
        </li>
        <li>
          Escribí la palabra de confirmación que te pide la pantalla y tocá{' '}
          <strong>&quot;Eliminar mi cuenta&quot;</strong>. La eliminación se procesa al
          instante.
        </li>
      </ul>
      <p>
        Si no podés acceder a la app, envianos un email a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> con el asunto{' '}
        <strong>&quot;Eliminar cuenta&quot;</strong>, desde la misma dirección con la que
        iniciás sesión en Doku (tu cuenta de Google o Apple). Confirmamos la solicitud por
        email y procesamos la eliminación.
      </p>

      <h2>Qué se elimina</h2>
      <ul>
        <li>Tu cuenta y tu perfil (nombre, email, foto).</li>
        <li>Todos tus documentos y los archivos almacenados.</li>
        <li>Tus viajes y los datos extraídos por la IA.</li>
        <li>Tus contadores de uso y datos de plan.</li>
      </ul>
      <p>
        Desde la app la eliminación es inmediata; por email se completa dentro de los{' '}
        <strong>30 días</strong> de confirmada la solicitud. En ambos casos es{' '}
        <strong>irreversible</strong>. Los viajes que creaste desaparecen también para las
        personas con las que los compartiste, y los documentos que hayas compartido en viajes
        de otras personas dejan de estar disponibles para ellas.
      </p>
    </>
  );
}
