# Next.js 13 Crash Course Tutorial #7: Dynamic Segments (Params)

## Introducción

Bienvenido al Tutorial #7 de nuestro Crash Course de Next.js 13, dedicado a **Dynamic Segments (Params)**. En este tutorial, aprenderás cómo manejar segmentos dinámicos en las rutas, una característica esencial para crear páginas que dependen de datos variables, como identificadores únicos de usuarios, productos, artículos de blog, etc.

## Conceptos Básicos

### 1. ¿Qué son los Segmentos Dinámicos?

Los segmentos dinámicos son partes de la URL que pueden cambiar y se utilizan para pasar datos a una página. En Next.js, estos se manejan mediante archivos y carpetas con nombres especiales en el directorio `pages`.

### 2. Creación de Rutas Dinámicas

Para crear una ruta dinámica, debes usar corchetes (`[]`) alrededor del nombre del segmento en el nombre del archivo o carpeta. Por ejemplo, `[id].js` o `[username]`.

## Implementación Práctica

### Creando una Página con un Segmento Dinámico

1. **Crear un Archivo para la Ruta Dinámica**: Por ejemplo, para un blog, crea un archivo `pages/posts/[id].js`.
2. **Acceso a los Parámetros Dinámicos**:

   - Utiliza el hook `useRouter` de Next.js para acceder a los parámetros.

     ```jsx
     import { useRouter } from 'next/router';

     function Post() {
       const router = useRouter();
       const { id } = router.query; // Accede al parámetro 'id'

       return <div>Post ID: {id}</div>;
     }

     export default Post;
     ```


