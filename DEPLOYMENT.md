# Guía de Despliegue en Vercel - SenseiCripto

## Configuración antes de desplegar

### 1. Configura tu número de WhatsApp

Edita el archivo `app/page.tsx` en la línea 5:

```typescript
const whatsappNumber = "573001234567"; // Cambia esto por tu número
```

**Formato del número:**
- Sin el símbolo `+`
- Incluye código de país (ej: 57 para Colombia, 34 para España, 52 para México)
- Ejemplo completo: `573001234567`

## Opción 1: Despliegue mediante GitHub (Recomendado)

### Paso 1: Sube tu código a GitHub

```bash
# Si aún no has hecho commit de los cambios
git add .
git commit -m "Preparar proyecto para despliegue en Vercel"

# Crea un repositorio en GitHub y luego:
git remote add origin https://github.com/TU_USUARIO/senseicripto-web.git
git branch -M main
git push -u origin main
```

### Paso 2: Conecta con Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta o inicia sesión
2. Click en "Add New..." → "Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Click en "Deploy"

¡Listo! Tu sitio estará disponible en unos minutos.

## Opción 2: Despliegue mediante Vercel CLI

### Instalación de Vercel CLI

```bash
npm install -g vercel
```

### Desplegar

```bash
# En la raíz del proyecto
vercel

# Para producción
vercel --prod
```

Sigue las instrucciones en pantalla. Vercel te preguntará:
- ¿Configurar y desplegar? → Yes
- ¿Qué alcance? → Selecciona tu cuenta
- ¿Vincular a proyecto existente? → No (primera vez)
- ¿Nombre del proyecto? → senseicripto-web
- ¿En qué directorio está tu código? → ./
- ¿Configuración de build detectada? → Yes

## Configuración del Proyecto

El proyecto ya incluye:

- ✅ `vercel.json` - Configuración de Vercel
- ✅ `.vercelignore` - Archivos a ignorar en el despliegue
- ✅ `next.config.ts` - Configuración de Next.js
- ✅ Build exitoso probado localmente

## Variables de Entorno (Opcional)

Si quieres usar variables de entorno para el número de WhatsApp:

1. En Vercel, ve a tu proyecto → Settings → Environment Variables
2. Agrega: `NEXT_PUBLIC_WHATSAPP_NUMBER` = tu número
3. En `app/page.tsx`, cambia:

```typescript
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";
```

## Dominio Personalizado

Después del despliegue, puedes agregar un dominio personalizado:

1. En Vercel, ve a tu proyecto → Settings → Domains
2. Agrega tu dominio (ej: senseicripto.com)
3. Sigue las instrucciones para configurar los DNS

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción local
npm run build

# Iniciar servidor de producción local
npm start

# Linter
npm run lint

# Ver deployments en Vercel
vercel ls

# Ver logs del último deployment
vercel logs
```

## Verificación Post-Despliegue

Después de desplegar, verifica:

1. ✅ El logo se muestra correctamente
2. ✅ El fondo de cielo con nubes está visible
3. ✅ El botón de WhatsApp funciona correctamente
4. ✅ La página es responsive en móviles
5. ✅ No hay errores en la consola del navegador

## Soporte

- Documentación de Vercel: https://vercel.com/docs
- Documentación de Next.js: https://nextjs.org/docs
- Si tienes problemas, revisa los logs en el dashboard de Vercel

---

**Nota:** Este proyecto usa Next.js 16 con React 19 y Tailwind CSS 4. Vercel tiene soporte nativo para Next.js, por lo que el despliegue es automático y optimizado.
