# Next.js 13 Crash Course Tutorial #6: Fetching & Revalidating Data



## Fetching Data

### 1. Fetching desde un Archivo JSON Local

Puedes almacenar datos en un archivo JSON dentro de tu proyecto y luego importar esos datos directamente en tus componentes o páginas.

- **Crear un Archivo JSON**: Por ejemplo, `data.json` en tu directorio `public` o en cualquier otro lugar accesible.
- **Importar y Usar los Datos**:

  ```jsx
  // Suponiendo que tienes un archivo data.json
  import data from '../path/to/data.json';

  function MyComponent() {
    return (
      <div>
        {data.map(item => <p key={item.id}>{item.name}</p>)}
      </div>
    );
  }
  ```

### 2. Fetching desde un Servidor Externo (Paquete de Servidor JSON)

Para recuperar datos de un servidor externo, puedes utilizar `fetch` en las funciones `getStaticProps` o `getServerSideProps`.

- **Ejemplo de Uso de `getStaticProps`**:

  ```jsx
  export async function getStaticProps() {
    // Reemplaza 'url' con la URL de tu paquete de servidor JSON
    const res = await fetch('http://example.com/data')
    const data = await res.json()

    return {
      props: { data },
    }
  }

  function MyPage({ data }) {
    // Renderiza los datos en tu componente
  }
  ```

## Revalidating Data

### 1. Revalidación con ISR (Incremental Static Regeneration)

ISR te permite actualizar tus páginas estáticas después de que se hayan generado.

- **Uso en `getStaticProps`**:

  ```jsx
  export async function getStaticProps() {
    // Tu lógica de fetching aquí
    return {
      props: { /* tus props */ },
      revalidate: 10, // Revalida cada 10 segundos
    }
  }
  ```

### 2. Client-Side Data Fetching

Para datos que necesitan actualizarse en tiempo real o muy frecuentemente, considera hacer solicitudes del lado del cliente.

- **Uso de `useEffect` y `fetch` en Componentes**:

  ```jsx
  import { useEffect, useState } from 'react';

  function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://example.com/data');
        const newData = await response.json();
        setData(newData);
      }

      fetchData();
    }, []); // El array vacío asegura que el efecto se ejecute una vez

    // Renderiza los datos
  }
  ```
