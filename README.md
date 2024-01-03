# Next.js 13 Crash Course Tutorial #4: Layouts & Links

## Introducción

En este cuarto tutorial de nuestra serie sobre Next.js 13, nos enfocaremos en cómo trabajar eficientemente con **Layouts & Links**. Estos elementos son fundamentales para estructurar tu aplicación y facilitar la navegación. Aprenderás a crear layouts reutilizables y a manejar enlaces de manera efectiva.

## Conceptos Clave

### 1. Layouts en Next.js

Un layout es una plantilla que se utiliza para mantener una estructura consistente en varias páginas de tu aplicación. Esto es particularmente útil para elementos como cabeceras, pies de página y barras laterales que son comunes a través de tu sitio.

### 2. Links y Navegación

Next.js proporciona un componente `<Link>` para gestionar la navegación dentro de tu aplicación. Esto permite una transición fluida entre páginas sin recargar todo el sitio.

## Implementación Práctica

### Creando un Layout

1. **Crear un Componente de Layout**: Crea un archivo `Layout.jsx` en tu directorio de componentes.

   ```jsx
   // components/Layout.js
   export default function Layout({ children }) {
     return (
       <div>
         <header>Encabezado común</header>
         <main>{children}</main>
         <footer>Pie de página común</footer>
       </div>
     );
   }
   ```

2. **Uso del Layout en Páginas**: Envuelve las páginas de tu aplicación con el componente de Layout.

   ```jsx
   // pages/index.js
   import Layout from '../components/Layout';

   export default function Home() {
     return (
       <Layout>
         <h1>Bienvenido a mi sitio web</h1>
         {/* Contenido de la página */}
       </Layout>
     );
   }
   ```

### Manejo de Links

1. **Importar el Componente `<Link>`**: Utiliza `<Link>` para la navegación entre páginas.

   ```jsx
   import Link from 'next/link';
   ```

2. **Navegación con `<Link>`**: Envuelve tus etiquetas `<a>` con `<Link>` para habilitar una navegación rápida y sin recargar.

   ```jsx
   // Ejemplo en un componente
   <Link href="/about"><a>Acerca de Nosotros</a></Link>
   ```

