# Next.js 13 Crash Course Tutorial #5: Styles, Fonts & Images

## Introducción

Bienvenidos al Tutorial #5 de nuestro Crash Course de Next.js 13, centrado en **Styles, Fonts & Images**. En este tutorial, aprenderás a incorporar estilos, usar Google Fonts y manejar imágenes de manera efectiva en Next.js 13. Estos elementos son cruciales para mejorar la apariencia y el rendimiento de tu aplicación web.

## Estilos en Next.js

### 1. CSS y Sass

Next.js permite importar hojas de estilo CSS y Sass directamente en tus componentes de JavaScript.

- **Uso de CSS**: Puedes crear un archivo `.css` y luego importarlo en tu componente.
- **Uso de Sass**: Similar al CSS, pero con archivos `.scss` o `.sass`.

### 2. CSS Modules

Next.js admite CSS Modules por defecto, lo que te permite tener estilos locales que solo afectan a tu componente.

- **Archivo CSS Module**: Nómbralo como `[nombre].module.css`.
- **Importar Estilos**: Importa tu archivo CSS Module en tu componente y úsalo como un objeto.

  ```jsx
  // styles/Button.module.css
  .button {
    background-color: blue;
    color: white;
  }

  // Componente que utiliza Button.module.css
  import styles from '../styles/Button.module.css';

  function Button() {
    return <button className={styles.button}>Click me</button>;
  }
  ```

## Google Fonts

### Incorporar Google Fonts

1. **Selecciona la Fuente en Google Fonts**: Visita [Google Fonts](https://fonts.google.com/) y elige una fuente.
2. **Incorpora la Fuente en tu Aplicación**:
   - **Método 1**: Enlaza la fuente en tu archivo HTML o en el componente Head de Next.js.
   - **Método 2**: Utiliza `@import` en tus hojas de estilo CSS.

   ```jsx
   // pages/_document.js o tu componente Head
   <Head>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   </Head>
   ```

   ```css
   /* Método con @import en CSS */
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

   body {
     font-family: 'Roboto', sans-serif;
   }
   ```

## Manejo de Imágenes

### Uso de la Etiqueta `<Image>` de Next.js

Next.js proporciona un componente `<Image>` para optimizar automáticamente las imágenes.

- **Importar el Componente `<Image>`**:
  
  ```jsx
  import Image from 'next/image';
  ```

- **Usar el Componente `<Image>`**:
  
  ```jsx
  // Ejemplo de uso de Image
  <Image
    src="/path/to/your/image.jpg" // Ruta de la imagen
    alt="Descripción"
    width={500}  // Ancho definido
    height={300} // Alto definido
  />
  ```

