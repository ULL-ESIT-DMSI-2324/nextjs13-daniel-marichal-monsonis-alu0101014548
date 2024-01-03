# Next.js 13 Crash Course Tutorial #9: Custom 404 Page

## Introducción

Bienvenidos al Tutorial #9 de nuestro Crash Course de Next.js 13, centrado en la creación de una **Custom 404 Page**. Una página 404 personalizada es esencial para mejorar la experiencia del usuario y mantener la coherencia del diseño en tu aplicación web cuando se encuentra con una ruta no existente.

## Conceptos Clave

### ¿Qué es una Página 404?

Una página 404 es una página de error que se muestra cuando el servidor no puede encontrar la página solicitada. En Next.js, puedes personalizar esta página para que coincida con el estilo de tu aplicación y proporcionar una mejor guía a tus usuarios.

## Creación de una Página 404 Personalizada

### 1. Crear un Archivo 404

Next.js automáticamente reconoce un archivo especial llamado `404.js` en tu directorio `pages` como tu página de error 404 personalizada.

- **Estructura de Archivos**:

  ```
  pages/
    404.js  // Tu página 404 personalizada
  ```

### 2. Diseño de la Página 404

Diseña tu página 404 como cualquier otra página en Next.js. Puedes incluir estilos, imágenes, enlaces, etc.

- **Ejemplo de Página 404**:

  ```jsx
  // pages/404.js
  export default function Custom404() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - Página No Encontrada</h1>
        <p>Oops! La página que buscas no existe.</p>
        <a href="/">Volver al inicio</a>
      </div>
    );
  }
  ```

### 3. Incluir Navegación

Es útil incluir enlaces para llevar a los usuarios de vuelta a páginas relevantes, como la página de inicio o una página de contacto.

