# Go-live de dokutravel.com — paso a paso

> Objetivo de esta etapa: **la web queda live mostrando "en construcción"** (con
> waitlist), los **legales quedan públicos** para usarlos en el app y las
> tiendas, y **dev.dokutravel.com** muestra la web completa para desarrollo.

## 1. Crear el proyecto en Vercel

1. Entrá a [vercel.com/new](https://vercel.com/new) con tu cuenta.
2. Importá el repo **`dokutravel/doku-web`**. Si no aparece, tocá *Adjust GitHub
   App Permissions* y autorizá Vercel en la organización `dokutravel`.
3. Framework: detecta **Next.js** solo. No cambies nada del build. **Antes de
   tocar Deploy**, agregá la env var del paso 3 (o agregala después y redeployá).
4. Deploy. Te queda una URL `doku-web-xxx.vercel.app` funcionando.

## 2. Dominios

En el proyecto → **Settings → Domains**:

> El dominio está en **Cloudflare Registrar**, que obliga a usar los nameservers
> de Cloudflare — NO se puede delegar a Vercel. El DNS se administra en el
> dashboard de Cloudflare, y cada registro debe quedar en **DNS only (nube
> gris)**: con el proxy naranja activado, Vercel no puede emitir su certificado
> y el dominio queda con SSL/redirects rotos.

1. Agregá `dokutravel.com`.
   - En Cloudflare → DNS: registro **A** `@` → **76.76.21.21**, modo **DNS only**.
2. Agregá `www.dokutravel.com` → elegí **Redirect to dokutravel.com** (308).
   - En Cloudflare: CNAME `www` → `cname.vercel-dns.com`, **DNS only**.
3. Agregá `dev.dokutravel.com` → tocá **Edit** en esa fila y en **Git Branch**
   poné `dev`. Eso hace que ese subdominio sirva siempre el último deploy de la
   branch `dev` (la web completa, sin gate).
   - En Cloudflare: CNAME `dev` → `cname.vercel-dns.com`, **DNS only**.

La propagación de DNS puede tardar de minutos a un par de horas.

## 3. Variables de entorno

En **Settings → Environment Variables**:

| Variable | Valor | Entorno |
| --- | --- | --- |
| `SITE_MODE` | `coming-soon` | **Production únicamente** |
| `SUPABASE_URL` | URL del proyecto **prod** | Production |
| `SUPABASE_ANON_KEY` | anon key del proyecto **prod** | Production |
| `SUPABASE_URL` | URL de **DokuBE-dev** | Preview |
| `SUPABASE_ANON_KEY` | anon key de **DokuBE-dev** | Preview |

- `SITE_MODE` solo en Production: por eso dev y los previews muestran la web
  completa.
- Las de Supabase alimentan el form de waitlist/agencias. Sin ellas el sitio
  funciona igual (el form muestra un error amable), así que podés dejarlas para
  después del paso 4.
- Después de agregar/cambiar env vars: **Deployments → ⋯ → Redeploy** (las env
  vars se aplican en el próximo deploy).

## 4. Tabla de leads en Supabase

Para que la waitlist guarde emails:

1. Dashboard de Supabase → proyecto **prod** → **SQL Editor**.
2. Pegá y ejecutá el contenido de [`supabase/web_leads.sql`](../supabase/web_leads.sql).
3. Repetí en **DokuBE-dev** para que el form funcione también en dev.

Los leads se leen desde el Table Editor (`web_leads`); el sitio solo puede
insertar (RLS), nunca leer.

## 5. Verificar

- `https://dokutravel.com` → página "en construcción" con el form de waitlist.
- `https://dokutravel.com/es/privacy` y `/es/account-deletion` → contenido real.
- `https://dev.dokutravel.com` → la landing completa.
- Anotarse en la waitlist → aparece la fila en `web_leads` (proyecto prod).
- `https://dokutravel.com/en` → todo en inglés.

## 6. Usar los legales en el app y las tiendas

Ya podés apuntar (URLs estables, no cambian al lanzar):

- **Google Play Console** → Política de privacidad: `https://dokutravel.com/es/privacy`
- **Play Data Safety / eliminación de cuenta**: `https://dokutravel.com/es/account-deletion`
- **App Store Connect** → Privacy Policy URL: ídem privacy.
- **En el app** (perfil): links a privacy y account-deletion (backlog #3).

> Antes de cargarlas en las tiendas: **leé la política** (`src/content/privacy-es.tsx`)
> y confirmá que estás cómodo con lo que promete (p. ej. eliminación en 30 días).

## Los dos switches futuros

1. **Lanzar la web completa** (landing pública con waitlist): borrá `SITE_MODE`
   de Production en Vercel + Redeploy. Nada de código.
2. **Lanzar el producto**: reemplazamos el form de waitlist por los badges de
   App Store / Google Play (cambio de componente en el repo).

## Flujo de trabajo diario

- Desarrollo → branch `dev` → se ve al instante en `dev.dokutravel.com`.
- PRs → preview URL automática de Vercel.
- Cuando algo está listo para el público → merge `dev` → `main` → prod.
