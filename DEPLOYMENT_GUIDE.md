# 🚀 Guía de Desarrollo y Despliegue - Portafolio

## 📋 Tabla de Contenidos
- [Desarrollo Local](#desarrollo-local)
- [Pruebas de Producción Local](#pruebas-de-producción-local)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Variables de Entorno](#variables-de-entorno)
- [Solución de Problemas](#solución-de-problemas)

---

## 🛠️ Desarrollo Local

### Instalación Inicial
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor de desarrollo estará disponible en: `http://localhost:5173`

### Características del Modo Desarrollo
- ✅ Hot Module Replacement (HMR) - Cambios en tiempo real
- ✅ Source maps para debugging
- ✅ Mensajes de error detallados
- ✅ Recarga automática al guardar archivos

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo (puerto 5173)
npm run build    # Compilar para producción
npm run preview  # Preview local de la build de producción
npm run lint     # Verificar errores de código
```

---

## 🧪 Pruebas de Producción Local

### Antes de Desplegar a Vercel
Es **IMPORTANTE** probar la build de producción localmente:

```bash
# 1. Compilar el proyecto
npm run build

# 2. Previsualizar la build
npm run preview
```

La preview estará disponible en: `http://localhost:4173`

### ¿Qué verificar en Preview?
- [ ] Todas las rutas funcionan correctamente (/, /portfolio, /contact, /services, /projects)
- [ ] Las animaciones se ejecutan suavemente
- [ ] Las imágenes cargan correctamente
- [ ] Los enlaces externos funcionan
- [ ] El scroll es fluido
- [ ] No hay errores en la consola del navegador

### Diferencias entre Dev y Preview
| Aspecto | Dev (`npm run dev`) | Preview (`npm run preview`) |
|---------|---------------------|----------------------------|
| Velocidad | Más rápido | Más lento (optimizado) |
| Código | Sin minificar | Minificado |
| Source Maps | Completos | Limitados |
| Tamaño | Grande | Optimizado |
| Refleja Producción | ❌ No | ✅ Sí |

---

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

#### Paso 1: Preparar el Repositorio
```bash
# Asegúrate de que todos los cambios estén en GitHub
git add .
git commit -m "Preparar para despliegue en Vercel"
git push origin main
```

#### Paso 2: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Selecciona **"Import Git Repository"**
4. Autoriza acceso a tu cuenta de GitHub
5. Selecciona el repositorio: `JUAN-ELIAN/Portafolio`

#### Paso 3: Configurar el Proyecto
Vercel detectará automáticamente que es un proyecto Vite. Verifica:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**⚠️ IMPORTANTE**: No cambies estos valores, están correctos.

#### Paso 4: Desplegar
1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel compila y despliega
3. ¡Listo! Tu sitio estará en: `https://tu-proyecto.vercel.app`

### Opción 2: Despliegue desde CLI

```bash
# Instalar Vercel CLI (solo la primera vez)
npm install -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

---

## 🔐 Variables de Entorno

### Para Desarrollo Local
Crea un archivo `.env.local` en la raíz del proyecto:

```env
# ========================================
# VARIABLES DE ENTORNO - DESARROLLO LOCAL
# ========================================
# Este archivo NO se sube a GitHub (.gitignore)
# Copia este contenido a .env.local

# Ejemplo: API Keys (cuando las necesites)
# VITE_API_KEY=tu_api_key_aqui
# VITE_CONTACT_EMAIL=tu@email.com
```

### Para Vercel (Producción)
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade las variables necesarias
4. Redeploy el proyecto

**⚠️ IMPORTANTE**: 
- En Vite, las variables deben empezar con `VITE_`
- Ejemplo: `VITE_API_KEY` (no `API_KEY`)
- Acceso en código: `import.meta.env.VITE_API_KEY`

---

## 🔧 Archivos de Configuración Importantes

### `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
**Propósito**: Asegura que React Router funcione en producción.
**⚠️ NO ELIMINAR**: Sin esto, las rutas como `/portfolio` darán error 404.

### `vite.config.ts`
Configuración de Vite. Aquí puedes:
- Añadir plugins
- Configurar alias de rutas
- Optimizar la build

### `package.json`
Scripts de npm. **NO MODIFICAR** a menos que sepas lo que haces:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

---

## 🐛 Solución de Problemas

### Problema: "404 Not Found" en rutas en Vercel
**Solución**: Verifica que `vercel.json` existe y tiene la configuración de rewrites.

### Problema: Imágenes no cargan en producción
**Solución**: 
- Verifica que las rutas de imágenes sean relativas
- Usa `import` para imágenes en lugar de rutas absolutas
```tsx
// ❌ Incorrecto
<img src="/assets/image.png" />

// ✅ Correcto
import image from '../assets/image.png'
<img src={image} />
```

### Problema: Animaciones lentas en producción
**Solución**: 
- Reduce la complejidad de las animaciones
- Usa `will-change` CSS con moderación
- Optimiza imágenes (usa WebP)

### Problema: Build falla en Vercel
**Solución**:
1. Verifica que `npm run build` funciona localmente
2. Revisa los logs de Vercel para ver el error específico
3. Asegúrate de que todas las dependencias están en `package.json`

### Problema: Variables de entorno no funcionan
**Solución**:
- Verifica que empiezan con `VITE_`
- Redeploy después de añadir variables en Vercel
- En local, reinicia el servidor de desarrollo

---

## 📝 Checklist Pre-Despliegue

Antes de cada despliegue, verifica:

- [ ] `npm run build` funciona sin errores
- [ ] `npm run preview` muestra el sitio correctamente
- [ ] Todas las rutas funcionan
- [ ] No hay errores en consola
- [ ] Las imágenes cargan
- [ ] Los enlaces funcionan
- [ ] El sitio es responsive (móvil, tablet, desktop)
- [ ] Cambios commiteados a GitHub
- [ ] `vercel.json` está presente

---

## 🚀 Flujo de Trabajo Recomendado

```
1. Desarrollo Local
   ↓
   npm run dev
   ↓
2. Hacer cambios
   ↓
3. Probar localmente
   ↓
4. Build de producción
   ↓
   npm run build
   npm run preview
   ↓
5. Si todo funciona → Commit
   ↓
   git add .
   git commit -m "Descripción de cambios"
   git push origin main
   ↓
6. Vercel despliega automáticamente
   ↓
7. Verificar en producción
```

---

## 📞 Recursos Útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Vercel](https://vercel.com/docs)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🎯 Próximos Pasos Después del Primer Despliegue

1. **Configurar dominio personalizado** (opcional)
   - Settings → Domains en Vercel
   
2. **Configurar Analytics** (opcional)
   - Vercel Analytics para métricas de rendimiento
   
3. **Optimizar SEO**
   - Añadir meta tags
   - Configurar sitemap
   - Robots.txt

4. **Monitoreo**
   - Configurar alertas de errores
   - Revisar métricas de rendimiento

---

**Última actualización**: 2025-11-27
**Versión**: 1.0.0
