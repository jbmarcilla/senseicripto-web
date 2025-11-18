# Solución para Error 403 en Vercel

## Problema
Al compartir el link en WhatsApp/Facebook, aparecía un error 403 indicando que los bots estaban bloqueados.

## Solución Implementada

Se han agregado las siguientes configuraciones:

### 1. ✅ Archivo `public/robots.txt`
Permite el acceso a todos los crawlers y bots de redes sociales (Facebook, WhatsApp, Twitter, etc.)

### 2. ✅ Archivo `app/robots.ts`
Configuración dinámica de robots para Next.js que permite:
- Todos los user agents
- facebookexternalhit (Facebook)
- Facebot (Facebook)
- WhatsApp
- Sitemap

### 3. ✅ Headers en `next.config.ts`
Configurado para incluir:
- `X-Robots-Tag: index, follow`
- `Access-Control-Allow-Origin: *`

### 4. ✅ Metadata en `app/layout.tsx`
Agregado:
- OpenGraph metadata para mejor preview en redes sociales
- Configuración de robots: index y follow habilitados
- Locale en español

## Pasos para Aplicar los Cambios

1. **Hacer commit de los cambios:**
```bash
git add .
git commit -m "Fix: Permitir acceso a bots de redes sociales"
git push
```

2. **Vercel re-desplegará automáticamente** (si tienes GitHub conectado)

O si usas CLI:
```bash
vercel --prod
```

## Verificación

Después del despliegue, verifica:

1. **Robots.txt:**
   - Visita: `https://tu-dominio.vercel.app/robots.txt`
   - Debe mostrar las reglas permitiendo los bots

2. **Preview en Facebook:**
   - Ve a: https://developers.facebook.com/tools/debug/
   - Ingresa tu URL
   - Click en "Scrape Again"
   - Debe mostrar tu contenido sin error 403

3. **Preview en WhatsApp:**
   - Envía el link por WhatsApp
   - Debe mostrar el preview con título y descripción

## URLs de Prueba

- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator

## Notas Adicionales

- Los cambios pueden tardar unos minutos en propagarse
- Facebook cachea los resultados, usa "Scrape Again" para actualizar
- Si el problema persiste, verifica los logs en el dashboard de Vercel

---

**Estado:** ✅ Solucionado - Build exitoso con robots.txt generado
