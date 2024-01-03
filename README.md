# Next.js 13 Crash Course Tutorial #11: Client Form Component



### Importaciones y Uso de "use client"

```jsx
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
```

- **`"use client"`**: Esta directiva asegura que el componente se ejecute solo en el lado del cliente, lo cual es importante para los formularios que requieren interactividad en el navegador.
- **`useRouter` y `useState`**: Se importan hooks de Next.js y React para la navegación y el manejo del estado.

### Estado del Componente

```jsx
const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [priority, setPriority] = useState('low')
const [isLoading, setIsLoading] = useState(false)
```

- Se mantienen estados para el título, cuerpo, prioridad del ticket, y un indicador de carga.

### Manejador del Envío del Formulario

```jsx
const handleSubmit = async (e) => {
  //...
}
```

- **`handleSubmit`**: Función asíncrona para manejar el envío del formulario.
- Envía los datos del ticket a un servidor y redirige a la página de tickets si el envío es exitoso.

### JSX del Formulario

```jsx
<form onSubmit={handleSubmit} className="w-1/2">
  {/* Inputs y botón de envío aquí */}
</form>
```

- **Formulario JSX**: Define la estructura del formulario, incluyendo campos de texto y selección para el título, cuerpo y prioridad del ticket.
- **Botón de Envío**: Muestra un texto diferente según si está cargando o no.

