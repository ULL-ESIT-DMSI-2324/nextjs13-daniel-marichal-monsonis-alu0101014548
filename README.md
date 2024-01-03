# Next.js 13 Crash Course Tutorial #8: Static Rendering

## Introducción

Bienvenidos al Tutorial #8 de nuestra serie de Crash Course en Next.js 13, enfocado en **Static Rendering**. El Static Rendering es una característica clave de Next.js que permite generar páginas estáticas en el momento de la compilación. Este enfoque es ideal para sitios que no requieren datos actualizados en cada solicitud, como blogs, portfolios y sitios corporativos.

## Conceptos Clave

### 1. ¿Qué es el Static Rendering?

El Static Rendering, o generación estática, es un método donde el HTML es generado en el momento de la compilación y reutilizado en cada solicitud. Next.js soporta este enfoque a través de `getStaticProps` y `getStaticPaths`.

### 2. Ventajas del Static Rendering

- **Rendimiento**: Las páginas se cargan rápidamente porque el HTML está pregenerado.
- **SEO Mejorado**: Las páginas estáticas son fácilmente indexables por los motores de búsqueda.
- **Menos Solicitudes al Servidor**: Reduce la carga en el servidor ya que las páginas se sirven como archivos estáticos.

## Implementación Práctica

### Creando una Página Estática

1. **Definir `getStaticProps`**: Este método se ejecuta en el momento de la compilación y te permite especificar las props que tu página necesita.

   ```jsx
   export async function getStaticProps() {
     // Aquí puedes realizar llamadas a APIs, consultas a bases de datos, etc.
     const data = /* Tu lógica de fetching de datos */

     return {
       props: { data }, // Se pasará a tu página como props
     }
   }

   function MyStaticPage({ data }) {
     // Renderiza tu página usando los datos
     return <div>{/* Contenido de la página */}</div>;
   }

   export default MyStaticPage;
   ```

### Uso de `getStaticPaths` para Páginas Dinámicas

Para páginas con rutas dinámicas (como `pages/posts/[id].js`), necesitas definir `getStaticPaths`.

- **Definir `getStaticPaths`**:

  ```jsx
  export async function getStaticPaths() {
    // Genera las rutas que quieres pre-renderizar
    const paths = [
      { params: { id: '1' } },
      { params: { id: '2' } }
      // Más rutas según sea necesario
    ];

    return { paths, fallback: 'blocking' };
  }

  export async function getStaticProps({ params }) {
    // Tu lógica para obtener datos específicos del ID
  }
  ```

- **Opciones de `fallback`**:
  - `'false'`: Si la ruta no está en `paths`, muestra 404.
  - `'blocking'`: Genera la página en el primer request si no está pre-renderizada.
  - `'true'`: Muestra una versión de la página hasta que esté lista.



## Manejando Páginas No Encontradas con `notFound`

En el contexto del Static Rendering en Next.js, una característica importante es la capacidad de manejar situaciones donde una página solicitada no existe. Esto es crucial para proporcionar una experiencia de usuario adecuada y para gestionar el SEO de manera efectiva. Next.js facilita esto con la opción `notFound` en `getStaticProps`.

## Implementación de `notFound`

### Uso de `notFound` en `getStaticProps`

Cuando `getStaticProps` no encuentra los datos necesarios para renderizar una página (por ejemplo, un ID de blog que no existe en la base de datos), puedes retornar `notFound: true` para mostrar una página de error 404.

- **Ejemplo de Implementación**:

  ```jsx
  export async function getStaticProps({ params }) {
    const data = await fetchData(params.id);

    // Si no hay datos, retorna notFound: true
    if (!data) {
      return { notFound: true };
    }

    return { props: { data } };
  }

  function MyStaticPage({ data }) {
    // Renderiza tu página usando los datos
    return <div>{/* Contenido de la página */}</div>;
  }

  export default MyStaticPage;
  ```

### Comportamiento de `notFound`

- Al devolver `notFound: true`, Next.js automáticamente redirige al usuario a la página 404 personalizada de tu aplicación, si existe, o a la página 404 predeterminada de Next.js.
- Esta funcionalidad es especialmente útil para rutas dinámicas donde los parámetros pueden no corresponder a datos reales.

### Creación de una Página 404 Personalizada

Puedes crear una página 404 personalizada en Next.js simplemente creando un archivo `404.js` en tu directorio `pages`.

- **Ejemplo de Página 404 Personalizada**:

  ```jsx
  // pages/404.js
  export default function Custom404() {
    return <h1>404 - Página No Encontrada</h1>;
  }
  ```

## Buenas Prácticas

- **Diseño de la Página 404**: Aunque es una página de error, es una buena práctica mantener el diseño y el estilo coherentes con el resto de tu sitio web.
- **Proporcionar Enlaces Útiles**: Incluye enlaces a la página principal o a secciones populares para mejorar la experiencia del usuario.
- **Mensajes Claros**: Ofrece un mensaje claro que indique al usuario que la página solicitada no se pudo encontrar.
