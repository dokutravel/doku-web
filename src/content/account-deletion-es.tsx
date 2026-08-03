import { contactEmail } from '@/lib/site';

export function AccountDeletionEs() {
  return (
    <>
      <p>
        Podés pedir la eliminación completa de tu cuenta de Doku y de todos los datos
        asociados en cualquier momento.
      </p>

      <h2>Cómo eliminar tu cuenta</h2>
      <ul>
        <li>
          Envianos un email a <a href={`mailto:${contactEmail}`}>{contactEmail}</a> con el
          asunto <strong>&quot;Eliminar cuenta&quot;</strong>, desde la misma dirección con la
          que iniciás sesión en Doku (tu cuenta de Google o Apple).
        </li>
        <li>Confirmamos la solicitud por email y procesamos la eliminación.</li>
      </ul>

      <h2>Qué se elimina</h2>
      <ul>
        <li>Tu cuenta y tu perfil (nombre, email, foto).</li>
        <li>Todos tus documentos y los archivos almacenados.</li>
        <li>Tus viajes y los datos extraídos por la IA.</li>
        <li>Tus contadores de uso y datos de plan.</li>
      </ul>
      <p>
        La eliminación se completa dentro de los <strong>30 días</strong> de confirmada la
        solicitud y es <strong>irreversible</strong>. Los documentos que hayas compartido en
        viajes de otras personas dejan de estar disponibles para ellas.
      </p>

      <h2>Nota</h2>
      <p>
        Estamos trabajando para que puedas eliminar tu cuenta directamente desde la app
        (Perfil → Eliminar cuenta). Mientras tanto, el proceso por email es la vía oficial.
      </p>
    </>
  );
}
