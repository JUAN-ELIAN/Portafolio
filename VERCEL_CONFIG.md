# 📋 Documentación de vercel.json

## ¿Qué es este archivo?
`vercel.json` es el archivo de configuración para el despliegue en Vercel. Define cómo se debe compilar y servir tu aplicación.

---

## 🔧 Configuración Actual

### Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

**Explicación:**
- `buildCommand`: Comando para compilar el proyecto para producción
- `outputDirectory`: Carpeta donde se genera la build (Vite usa `dist`)
- `devCommand`: Comando para desarrollo local
- `installCommand`: Comando para instalar dependencias
- `framework`: Vercel detecta automáticamente que es Vite

**⚠️ IMPORTANTE**: NO cambies estos valores a menos que sepas exactamente lo que haces.

---

### Rewrites (Routing de SPA)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**¿Por qué es necesario?**
- Tu app es una SPA (Single Page Application) con React Router
- Sin esto, rutas como `/portfolio`, `/contact`, etc. darían error 404
- Esto redirige TODAS las rutas a `index.html` para que React Router las maneje

**⚠️ CRÍTICO**: Si eliminas esto, tu sitio NO funcionará correctamente en producción.

---

### Headers (Seguridad y Performance)

#### Headers Generales
```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "X-Frame-Options", "value": "DENY" },
    { "key": "X-XSS-Protection", "value": "1; mode=block" }
  ]
}
```

**Propósito**: Seguridad básica
- `X-Content-Type-Options`: Previene ataques MIME-sniffing
- `X-Frame-Options`: Previene clickjacking (tu sitio no puede ser embebido en iframes)
- `X-XSS-Protection`: Protección contra XSS (Cross-Site Scripting)

#### Headers de Cache para Imágenes
```json
{
  "source": "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp)",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
}
```

**Propósito**: Optimización de performance
- Las imágenes se cachean por 1 año (31536000 segundos)
- `immutable`: El navegador no necesita revalidar el archivo
- Resultado: Sitio más rápido en visitas repetidas

---

## 🚫 ¿Qué NO Hacer?

### ❌ NO añadas comentarios en vercel.json
JSON no permite comentarios. Si necesitas documentar algo, hazlo en este archivo.

### ❌ NO cambies el outputDirectory
Vite siempre genera la build en `dist`. Si cambias esto, el despliegue fallará.

### ❌ NO elimines los rewrites
Sin rewrites, React Router no funcionará en producción.

---

## ✅ Configuraciones Opcionales

### Redirects (si los necesitas en el futuro)
```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}
```

### Variables de Entorno (NO las pongas aquí)
Las variables de entorno se configuran en:
**Vercel Dashboard → Settings → Environment Variables**

NO las pongas en `vercel.json` porque se subirían a GitHub.

---

## 🔍 Verificar Configuración

### Antes de Desplegar
```bash
# 1. Verifica que el build funciona
npm run build

# 2. Verifica que el preview funciona
npm run preview

# 3. Prueba todas las rutas:
# - http://localhost:4173/
# - http://localhost:4173/portfolio
# - http://localhost:4173/contact
# - http://localhost:4173/services
# - http://localhost:4173/projects
```

### Después de Desplegar
Verifica en producción:
- ✅ Todas las rutas funcionan
- ✅ No hay errores 404
- ✅ Las imágenes cargan
- ✅ El sitio es rápido

---

## 🐛 Solución de Problemas

### Error: "404 Not Found" en rutas
**Causa**: Falta la configuración de rewrites  
**Solución**: Verifica que `vercel.json` tiene la sección de rewrites

### Error: "Build failed"
**Causa**: Configuración incorrecta de build  
**Solución**: 
1. Verifica que `npm run build` funciona localmente
2. Revisa los logs de Vercel para el error específico

### Error: "Invalid vercel.json"
**Causa**: Sintaxis JSON incorrecta (probablemente comentarios)  
**Solución**: Usa un validador JSON online para verificar el archivo

---

## 📚 Recursos

- [Documentación de vercel.json](https://vercel.com/docs/project-configuration)
- [Configuración de Vite en Vercel](https://vercel.com/docs/frameworks/vite)
- [Headers HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

**Última actualización**: 2025-11-27  
**Versión del archivo**: 1.0.0
