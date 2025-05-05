# Portfolio Website

  

![GitHub](https://img.shields.io/github/license/DevRohit06/Portfolio-website) ![GitHub stars](https://img.shields.io/github/stars/DevRohit06/Portfolio-website) ![GitHub forks](https://img.shields.io/github/forks/DevRohit06/Portfolio-website) ![GitHub last commit](https://img.shields.io/github/last-commit/DevRohit06/Portfolio-website)

  

This is my personal portfolio website built using Tailwind CSS and Astro. It showcases my projects, skills, and contact information.

  

## Preview

  

![Portfolio Website Preview](https://pbs.twimg.com/media/F6iOZw3WAAAtoqK?format=jpg&name=medium)

  

You can check out the live website [here](https://rohitk06.vercel.app).

  

## Features

  

- Responsive design

- Projects showcase

- Contact form

- Blog Page

  

## Technologies Used

  

- [Tailwind CSS](https://tailwindcss.com/)

- [Astro](https://astro.build/)

- [React](https://react.dev/)

  

## Installation

  

To run this project locally, follow these steps:

  

1. Clone the repository:

  

```bash

git clone https://github.com/DevRohit06/Portfolio-website.git

```

  

2. Navigate to the project directory:

  

```bash

cd Portfolio-website

```


3. Change the Google Analytics Key Code to your own Key

Change the Key inside 
```
Portfolio-website/src/layouts/Layout.astro & BlogLayout.astro
```


4. Install the dependencies:

  

```bash

npm install

```

  

5. Start the development server:

  

```bash

npm run dev

```

  

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the website locally.

  

## Usage

  

You can use this project as a template for your own portfolio website. Customize it by adding your own projects, skills, and contact information.

  

## Contributing

  

If you'd like to contribute to this project, please open an issue or submit a pull request.

  

## License

  

This project is open source and available under the [MIT License](LICENSE).

  

---

  

Icons made by [FontAwesome](https://fontawesome.com/).

  

Feel free to reach out if you have any questions or suggestions!


[![Built with Astro](https://astro.badg.es/v2/built-with-astro/large.svg)](https://astro.build)

# Portfolio Astro

Este repositorio contiene mi portfolio web personal construido con Astro y Tailwind CSS.

## Estructura de datos de proyectos

Los proyectos se definen en `src/utils/projects.js`. Cada proyecto puede tener los siguientes campos:

### Campos básicos

- `name`: Nombre del proyecto
- `type`: Tipo de proyecto (ej. "Página Web", "Tienda Online")
- `url`: URL del proyecto desplegado
- `github`: URL del repositorio (usar "/" si no está disponible públicamente)
- `image`: Imagen principal del proyecto (importada directamente)
- `slug`: Identificador único para la URL
- `description`: Descripción detallada del proyecto
- `tech`: Array de tecnologías utilizadas

### Galería multimedia

- `images`: Array de imágenes adicionales con formato `{url: '/ruta/imagen.jpg', alt: 'Texto alternativo'}`
- `videos`: Array de videos con formato `{url: '/ruta/video.mp4', poster: '/ruta/poster.jpg'}`

### Funcionalidades

La sección de funcionalidades permite mostrar características específicas del proyecto con imágenes o videos explicativos:

```javascript
features: [
    {
        title: "Nombre de la funcionalidad",
        description: "Descripción detallada de cómo funciona esta característica",
        image: "/ruta/a/imagen-explicativa.jpg" // Opcional: imagen que muestra la funcionalidad
    },
    {
        title: "Otra funcionalidad con video",
        description: "Explicación de la funcionalidad con demostración en video",
        video: "/ruta/al/video-demo.mp4", // Opcional: video que demuestra la funcionalidad
        videoPoster: "/ruta/a/poster.jpg" // Opcional: imagen de portada para el video
    }
]
```

Cada funcionalidad puede incluir:
- Título descriptivo
- Explicación detallada
- Una imagen explicativa (opcional) usando el campo `image`
- O un video demostrativo (opcional) usando los campos `video` y `videoPoster`

Puedes añadir tantas funcionalidades como necesites y cada una aparecerá como una subsección individual en la página de detalles del proyecto.

## Desarrollo

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Construye el sitio para producción:
```bash
npm run build
```
