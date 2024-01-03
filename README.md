# Next.js 13 Crash Course Tutorial #10: Loading UI & Suspense



## Loading UI

### 1. Concepto de Loading UI

Una Loading UI se muestra cuando se está cargando contenido o datos, proporcionando una retroalimentación visual al usuario de que algo está sucediendo.

### 2. Implementación Básica

Para una simple Loading UI, puedes usar el estado en un componente para mostrar un indicador de carga mientras se están cargando los datos.

- **Ejemplo de Implementación**:

  ```jsx
  import { useState, useEffect } from 'react';

  function DataLoader() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchData()
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <div>{/* Renderizar datos aquí */}</div>;
  }
  ```

## Suspense en Next.js

### 1. ¿Qué es Suspense?

Suspense es una característica de React que te permite suspender el renderizado de tu componente hasta que ciertas condiciones sean cumplidas, como la carga de datos.

### 2. Uso de Suspense

Next.js 13 aún no soporta Suspense para la renderización del lado del servidor (SSR), pero puedes usarlo en el cliente.

- **Ejemplo de Uso de Suspense para Datos**:

  ```jsx
  import { Suspense } from 'react';

  function MyComponent() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <DataComponent />
      </Suspense>
    );
  }

  function DataComponent() {
    // Lógica para cargar datos
  }
  ```

### 3. Consideraciones

- **Uso en el Cliente**: Asegúrate de usar Suspense en partes de tu aplicación que se renderizan en el cliente.
- **Fallback**: Proporciona un componente `fallback` para mostrar mientras los datos o componentes están cargando.

