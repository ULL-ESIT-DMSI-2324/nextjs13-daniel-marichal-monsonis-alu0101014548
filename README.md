# Next.js 13 Crash Course Tutorial #3: Pages & Routes

## Introducción

Bienvenidos al Tutorial #3 del Crash Course de Next.js 13, enfocado en **Pages & Routes**. Next.js, conocido por su eficiencia y facilidad de uso en aplicaciones React, introduce una forma única y poderosa de manejar páginas y rutas. Este tutorial te guiará a través de los conceptos clave y las prácticas recomendadas.

## Conceptos Básicos

### 1. Estructura de Directorios

- **Páginas**: En Next.js, cada archivo `.js`, `.jsx`, `.ts`, o `.tsx` en el directorio `pages` se convierte automáticamente en una ruta accesible.
- **Index Page**: El archivo `pages/index.jsx` corresponde a la ruta raíz (`/`).

### 2. Rutas Dinámicas

- **Parámetros**: Para crear rutas dinámicas, puedes usar corchetes (`[ ]`) para envolver los nombres de los parámetros en el nombre del archivo. Por ejemplo, `pages/posts/[id].js` se traduce en rutas como `/posts/1`, `/posts/2`, etc.

