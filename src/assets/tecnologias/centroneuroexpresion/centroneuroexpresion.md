# Centro de Neuro Expresión | Early Intervention Center

![Centro Logo](/public/logobueno.svg)

## English | [Español](#español)

A modern, accessible website for an early intervention center focused on children from birth to six years old, built with Astro and Tailwind CSS.

## 🌟 Project Overview

This website serves as the online presence for "Centro de Neuro Expresión", a center specializing in early intervention services. The site provides comprehensive information about the center's specialized services across four key developmental areas:

- Cognitive Intervention
- Linguistic Intervention
- Prenatal Intervention
- Sensorimotor Intervention

The website also includes information about the team, approach, and contact details.

## 🔍 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Child-friendly UI**: Warm and professional aesthetic suitable for families
- **Accessibility**: Compliant with web accessibility standards
- **Performance**: Fast loading with minimal JavaScript using Astro's partial hydration
- **Multilingual**: Available in Spanish and English
- **SEO-friendly**: Optimized structure with proper meta tags and sitemap

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Quicksand, Nunito, and Varela Round via Fontsource
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Deployment**: 
  - [Netlify](https://netlify.com/) for staging environment
  - Production environment deployed on a VPS with NGINX for optimal performance and control


## 📁 Project Structure

```
/
├── public/                # Static assets
│   ├── images/            # Image assets
│   ├── testimonials/      # Testimonial images
│   ├── favicon.svg        # Site favicon
│   ├── logo.svg           # Site logo
│   ├── logo-white.svg     # White version of logo
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # Site map for SEO
│
├── src/
│   ├── assets/            # Processed assets
│   │
│   ├── components/        # Reusable UI components
│   │   ├── Button.astro   # Button component
│   │   ├── Card.astro     # Card component
│   │   ├── CallToAction.astro # CTA component
│   │   ├── Dropdown.astro # Navigation dropdown
│   │   ├── Footer.astro   # Site footer
│   │   ├── Header.astro   # Site header
│   │   ├── Hero.astro     # Hero section
│   │   ├── Testimonial.astro # Testimonial component
│   │   └── Welcome.astro  # Welcome section
│   │
│   ├── layouts/           # Page layouts
│   │   ├── BaseLayout.astro # Base layout
│   │   ├── Layout.astro   # Simple layout
│   │   └── MainLayout.astro # Main site layout
│   │
│   ├── pages/             # Astro pages (routes)
│   │   ├── index.astro    # Home page
│   │   ├── about.astro    # About page (English)
│   │   ├── nosotros.astro # About page (Spanish)
│   │   ├── services.astro # Services page (English)
│   │   ├── servicios.astro # Services page (Spanish)
│   │   ├── contact.astro  # Contact page (English)
│   │   ├── contacto.astro # Contact page (Spanish)
│   │   ├── intervencion-cognitiva.astro # Cognitive intervention
│   │   ├── intervencion-linguistica.astro # Linguistic intervention
│   │   ├── intervencion-prenatal.astro # Prenatal intervention
│   │   ├── intervencion-sensoriomotora.astro # Sensorimotor intervention
│   │   └── 404.astro      # 404 error page
│   │
│   └── styles/            # Global styles and Tailwind config
│
├── .astro/                # Astro build files
├── .cursor/               # Cursor IDE config
├── .vscode/               # VS Code config
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── netlify.toml           # Netlify deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jaivial/centroneuroexpresion.git
   cd centroneuroexpresion
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚢 Deployment

This site is configured for deployment on Netlify. The site automatically builds and deploys when changes are pushed to the main branch.

Live site: [centroneuroexpresion.com](https://www.centroneuroexpresion.com)

## 📜 License

This project is licensed under the MIT License.

---

<a name="español"></a>
# Centro de Neuro Expresión | Centro de Intervención Temprana

![Logo del Centro](/public/logobueno.svg)

## [English](#english) | Español

Un sitio web moderno y accesible para un centro de intervención temprana enfocado en niños desde el nacimiento hasta los seis años, construido con Astro y Tailwind CSS.

## 🌟 Descripción del Proyecto

Este sitio web sirve como presencia online para el "Centro de Neuro Expresión", un centro especializado en servicios de intervención temprana. El sitio proporciona información completa sobre los servicios especializados del centro en cuatro áreas clave del desarrollo:

- Intervención Cognitiva
- Intervención Lingüística
- Intervención Prenatal
- Intervención Sensoriomotora

El sitio web también incluye información sobre el equipo, enfoque y datos de contacto.

## 🔍 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos, desde móviles hasta escritorio
- **Interfaz Amigable**: Estética cálida y profesional adecuada para familias
- **Accesibilidad**: Cumple con los estándares de accesibilidad web
- **Rendimiento**: Carga rápida con JavaScript mínimo usando la hidratación parcial de Astro
- **Multilingüe**: Disponible en español e inglés
- **Optimizado para SEO**: Estructura optimizada con metaetiquetas adecuadas y mapa del sitio

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Astro](https://astro.build/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Tipografía**: Quicksand, Nunito y Varela Round a través de Fontsource
- **Iconos**: [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Despliegue**: [Netlify](https://netlify.com/)
- **Despliegue**: 
  - [Netlify](https://netlify.com/) para el entorno de pruebas
  - Entorno de producción desplegado en un VPS con NGINX para un rendimiento y control óptimos

## 📁 Estructura del Proyecto

```
/
├── public/                # Activos estáticos
│   ├── images/            # Imágenes
│   ├── testimonials/      # Imágenes de testimonios
│   ├── favicon.svg        # Favicon del sitio
│   ├── logo.svg           # Logo del sitio
│   ├── logo-white.svg     # Versión blanca del logo
│   ├── robots.txt         # Archivo robots para SEO
│   └── sitemap.xml        # Mapa del sitio para SEO
│
├── src/
│   ├── assets/            # Activos procesados
│   │
│   ├── components/        # Componentes UI reutilizables
│   │   ├── Button.astro   # Componente de botón
│   │   ├── Card.astro     # Componente de tarjeta
│   │   ├── CallToAction.astro # Componente CTA
│   │   ├── Dropdown.astro # Menú desplegable
│   │   ├── Footer.astro   # Pie de página
│   │   ├── Header.astro   # Encabezado del sitio
│   │   ├── Hero.astro     # Sección hero
│   │   ├── Testimonial.astro # Componente de testimonio
│   │   └── Welcome.astro  # Sección de bienvenida
│   │
│   ├── layouts/           # Layouts de página
│   │   ├── BaseLayout.astro # Layout base
│   │   ├── Layout.astro   # Layout simple
│   │   └── MainLayout.astro # Layout principal del sitio
│   │
│   ├── pages/             # Páginas Astro (rutas)
│   │   ├── index.astro    # Página principal
│   │   ├── about.astro    # Página Sobre Nosotros (inglés)
│   │   ├── nosotros.astro # Página Sobre Nosotros (español)
│   │   ├── services.astro # Página de Servicios (inglés)
│   │   ├── servicios.astro # Página de Servicios (español)
│   │   ├── contact.astro  # Página de Contacto (inglés)
│   │   ├── contacto.astro # Página de Contacto (español)
│   │   ├── intervencion-cognitiva.astro # Intervención cognitiva
│   │   ├── intervencion-linguistica.astro # Intervención lingüística
│   │   ├── intervencion-prenatal.astro # Intervención prenatal
│   │   ├── intervencion-sensoriomotora.astro # Intervención sensoriomotora
│   │   └── 404.astro      # Página de error 404
│   │
│   └── styles/            # Estilos globales y configuración de Tailwind
│
├── .astro/                # Archivos de compilación de Astro
├── .cursor/               # Configuración de Cursor IDE
├── .vscode/               # Configuración de VS Code
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.cjs    # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
├── package.json           # Dependencias y scripts
└── netlify.toml           # Configuración de despliegue en Netlify
```

## 🚀 Primeros Pasos

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jaivial/centroneuroexpresion.git
   cd centroneuroexpresion
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir el navegador y navegar a `http://localhost:4321`

## 🏗️ Compilación para Producción

Para crear una compilación de producción:

```bash
npm run build
```

Los archivos compilados estarán en el directorio `dist/`.

## 🚢 Despliegue

Este sitio está configurado para su despliegue en Netlify. El sitio se compila y despliega automáticamente cuando se envían cambios a la rama principal.

Sitio web: [centroneuroexpresion.com](https://www.centroneuroexpresion.com)

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT.
