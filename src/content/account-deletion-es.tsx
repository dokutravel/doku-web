import { IoAlertCircleOutline } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { NumberedStep } from '@/components/numbered-step';
import { contactEmail } from '@/lib/site';

export function AccountDeletionEs() {
  return (
    <>
      <p>
        Puedes solicitar la eliminación completa de tu cuenta de Doku y de todos los datos
        asociados en cualquier momento.
      </p>

      <h2>Cómo eliminar tu cuenta</h2>
      <p>Directamente desde la app:</p>
      <div className="mb-4 flex flex-col gap-3">
        <NumberedStep n={1}>
          <p>
            Abre Doku → <strong>Perfil → Eliminar cuenta</strong>.
          </p>
        </NumberedStep>
        <NumberedStep n={2}>
          <p>
            Escribe la palabra de confirmación que pide la pantalla y toca{' '}
            <strong>&quot;Eliminar mi cuenta&quot;</strong>. La eliminación se procesa de
            inmediato.
          </p>
        </NumberedStep>
      </div>
      <p>
        Si no puedes acceder a la app, envíanos un email a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> con el asunto{' '}
        <strong>&quot;Eliminar cuenta&quot;</strong>, desde la misma dirección con la que
        inicias sesión en Doku (tu cuenta de Google o Apple). Confirmamos la solicitud por
        email y procesamos la eliminación.
      </p>

      <h2>Qué se elimina</h2>
      <ul>
        <li>Tu cuenta y tu perfil (nombre, email, foto).</li>
        <li>Todos tus documentos y archivos almacenados.</li>
        <li>Tus viajes y los datos extraídos por la IA.</li>
        <li>Tus contadores de uso y datos de plan.</li>
      </ul>
      <Callout tone="danger" icon={IoAlertCircleOutline}>
        <p>
          Desde la app la eliminación es inmediata; por email se completa dentro de los{' '}
          <strong>30 días</strong> de confirmada la solicitud. En ambos casos es{' '}
          <strong>irreversible</strong>. Los viajes que creaste también desaparecen para las
          personas con las que los compartiste, y los documentos que compartiste en viajes de
          otras personas dejan de estar disponibles para ellas.
        </p>
      </Callout>
    </>
  );
}
