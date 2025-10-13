# Hero Budget Project Setup Instructions

## 1. Asset Organization

### Create Directory Structure
Create the following directories in your assets folder:

```
src/assets/images/herobudget/
src/assets/videos/herobudget/
```

### Required Images
You need to add at least 10 images for the Hero Budget project:

1. `herobudget1.jpg` - Main dashboard/home screen
2. `herobudget2.jpg` - Income and expense management screen
3. `herobudget3.jpg` - Recurring bills system
4. `herobudget4.jpg` - Savings goals and progress
5. `herobudget5.jpg` - Custom categories management
6. `herobudget6.jpg` - Account and balance management
7. `herobudget7.jpg` - Transaction history
8. `herobudget8.jpg` - Top categories analysis
9. `herobudget9.jpg` - User profile screen
10. `herobudget10.jpg` - Dark/light mode comparison

**Note:** You can add more images as needed. Follow the naming convention: `herobudgetN.jpg`

### Required Videos
You need to add at least 5 videos (`.mov` format preferred):

1. `herobudget1.mov` - App overview and multilingual support
2. `herobudget2.mov` - Social authentication and onboarding
3. `herobudget3.mov` - Real-time sync demonstration
4. `herobudget4.mov` - Offline functionality demo
5. `herobudget5.mov` - Dashboard analytics walkthrough

**Note:** Videos should be optimized for web (compressed, reasonable size). `.mov` format is used consistently across the portfolio.

### Main Project Image
You need one main image for the project card:
- `herobudget.webp` or `herobudget.jpg` - This will be displayed on the projects listing page

Place this in: `src/assets/images/`

---

## 2. Update projects.js

### Step 1: Add Imports at the Top of the File

Add these import statements after line 112 (after the Centro Neuro Expresion imports):

```javascript
// Importaciones para Hero Budget
import HeroBudget from "../assets/images/herobudget.webp"; // or .jpg
import HeroBudgetImg1 from "../assets/images/herobudget/herobudget1.jpg";
import HeroBudgetImg2 from "../assets/images/herobudget/herobudget2.jpg";
import HeroBudgetImg3 from "../assets/images/herobudget/herobudget3.jpg";
import HeroBudgetImg4 from "../assets/images/herobudget/herobudget4.jpg";
import HeroBudgetImg5 from "../assets/images/herobudget/herobudget5.jpg";
import HeroBudgetImg6 from "../assets/images/herobudget/herobudget6.jpg";
import HeroBudgetImg7 from "../assets/images/herobudget/herobudget7.jpg";
import HeroBudgetImg8 from "../assets/images/herobudget/herobudget8.jpg";
import HeroBudgetImg9 from "../assets/images/herobudget/herobudget9.jpg";
import HeroBudgetImg10 from "../assets/images/herobudget/herobudget10.jpg";
import HeroBudgetVideo1 from "../assets/videos/herobudget/herobudget1.mov";
import HeroBudgetVideo2 from "../assets/videos/herobudget/herobudget2.mov";
import HeroBudgetVideo3 from "../assets/videos/herobudget/herobudget3.mov";
import HeroBudgetVideo4 from "../assets/videos/herobudget/herobudget4.mov";
import HeroBudgetVideo5 from "../assets/videos/herobudget/herobudget5.mov";
```

### Step 2: Add Features Array

Add this features array after the `centroNeuroExpresionFeatures` array (around line 471):

```javascript
// Funcionalidades para Hero Budget
const heroBudgetFeatures = [
    {
        title: "Soporte Multiidioma (20+ Idiomas)",
        description: "Soporte completo de internacionalización con más de 20 traducciones de idiomas incluyendo inglés (US, GB), español (ES, MX, AR), portugués (PT, BR), francés, alemán, italiano, japonés, chino, ruso, holandés, danés, noruego, griego, hindi y catalán. Utiliza i18next para cambio de idioma fluido y localización con soporte de respaldo.",
        image: HeroBudgetImg1
    },
    {
        title: "Autenticación Social Integrada",
        description: "Autenticación sin problemas mediante Google Sign-In y Apple Sign-In utilizando protocolos OAuth 2.0. Soporta registro tradicional con email/contraseña y verificación OTP para mayor seguridad. Implementa autenticación basada en tokens con gestión automática de sesión y funcionalidad de 'recordarme'.",
        video: HeroBudgetVideo1,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Sincronización en Tiempo Real entre Dispositivos",
        description: "Protocolo avanzado de delta-sync que permite sincronización de datos en tiempo real entre múltiples dispositivos. Utiliza sincronización basada en operaciones con seguimiento de ID de dispositivo para prevenir operaciones duplicadas. La sincronización en segundo plano se ejecuta automáticamente cuando la aplicación vuelve al primer plano.",
        video: HeroBudgetVideo2,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Arquitectura Offline-First",
        description: "Funcionalidad completa offline con base de datos local SQLite que soporta todas las operaciones CRUD sin conectividad de red. La cola de sincronización automática gestiona operaciones pendientes cuando se restaura la conexión. Los usuarios pueden rastrear sus finanzas sin problemas incluso sin acceso a internet.",
        video: HeroBudgetVideo3,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Dashboard con Analíticas Completas",
        description: "Dashboard interactivo que muestra resúmenes financieros mensuales con visualización de ingresos vs gastos. Seguimiento de balance en tiempo real para cuentas de efectivo y banco. Indicadores visuales de progreso para metas de ahorro y adherencia al presupuesto con indicadores de estado codificados por colores.",
        image: HeroBudgetImg2
    },
    {
        title: "Seguimiento y Gestión de Ingresos",
        description: "Añade y categoriza transacciones de ingresos con categorías personalizadas, métodos de pago (efectivo/banco) y descripciones detalladas. Visualiza el historial de ingresos con filtrado por rango de fechas, categoría y método de pago. Actualizaciones automáticas de balance y resúmenes mensuales de ingresos con análisis de tendencias.",
        image: HeroBudgetImg3
    },
    {
        title: "Gestión y Categorización de Gastos",
        description: "Rastrea todos los gastos con categorías personalizadas, métodos de pago y notas. Sistema inteligente de categorización con iconos emoji para identificación visual. Historial de gastos con capacidades completas de filtrado y búsqueda. Impacto automático en balances de efectivo/banco y resúmenes mensuales de gastos.",
        carousel: [HeroBudgetImg4, HeroBudgetImg5]
    },
    {
        title: "Gestión de Facturas Recurrentes",
        description: "Crea y gestiona facturas recurrentes con horarios de pago flexibles (mensual, semanal, trimestral). Establece días de pago, fechas de vencimiento y duración en meses. Rastrea el estado de pago para cada período con funcionalidad de pago rápido. Recordatorios automáticos para facturas próximas y notificaciones de vencimiento.",
        video: HeroBudgetVideo4,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Metas de Ahorro y Seguimiento de Progreso",
        description: "Establece metas de ahorro personalizadas con cantidades objetivo y períodos de seguimiento. Los indicadores visuales de progreso muestran el porcentaje de finalización con estado codificado por colores (en camino, en riesgo, retrasado). Comparación de balance disponible vs meta con métricas detalladas de progreso y celebraciones de hitos.",
        carousel: [HeroBudgetImg6, HeroBudgetImg7]
    },
    {
        title: "Gestión de Categorías Personalizadas",
        description: "Crea categorías personalizadas ilimitadas para ingresos y gastos con iconos emoji para distinción visual. Edita nombres de categorías, tipos y emojis en cualquier momento. Los cambios de tipo de categoría activan el recálculo automático de todas las transacciones y balances afectados con actualizaciones en cascada.",
        image: HeroBudgetImg8
    },
    {
        title: "Modo Oscuro y Modo Claro",
        description: "Soporte completo para temas oscuro y claro con transiciones suaves. La preferencia de tema persiste a través de sesiones de la aplicación. Esquemas de colores optimizados para legibilidad en todas las condiciones de iluminación. Aplicación automática del tema a todos los componentes de UI y hojas inferiores.",
        carousel: [HeroBudgetImg9, HeroBudgetImg10]
    },
    {
        title: "Microservicios Backend en Go",
        description: "Backend construido con Go usando arquitectura de espacio de trabajo multi-módulo (go.work). Microservicios separados para gestión de presupuesto, ahorros, datos de dashboard, gastos e ingresos. API RESTful con manejo de errores estructurado y gestión de tiempo de espera basada en contexto. Registro completo para depuración y monitoreo.",
        video: HeroBudgetVideo5,
        autoplay: true,
        muted: true,
        loop: true
    }
];
```

### Step 3: Add Project Object to Data Array

Add this project object at the **beginning** of the `data` array (after line 473, making it the first project):

```javascript
const data = [
    {
        name: "Hero Budget",
        type: "Aplicación Móvil - Gestión de Finanzas Personales",
        url: "https://apps.apple.com/es/app/hero-budget/id6746946502?l=en-GB",
        github: "https://github.com/jaivial/HerobudgetReact",
        image: HeroBudget,
        slug: "hero-budget",
        description: "Hero Budget es una aplicación móvil completa de gestión de finanzas personales desarrollada con React Native y TypeScript. La aplicación proporciona a los usuarios herramientas potentes para rastrear ingresos, gastos, facturas recurrentes y metas de ahorro con sincronización en tiempo real entre múltiples dispositivos. Presenta una interfaz moderna e intuitiva con soporte para temas claro y oscuro, localización multiidioma (más de 20 idiomas), y arquitectura offline-first con sincronización automática en la nube. El backend está impulsado por una robusta arquitectura de microservicios en Go desplegada en VPS con proxy inverso NGINX, asegurando alto rendimiento y fiabilidad.",
        tech: ["React Native", "TypeScript", "Go", "SQLite", "React Navigation", "Jotai", "i18next", "OAuth 2.0", "Jest", "Detox", "RESTful API", "VPS", "Nginx", "Responsive Design"],
        date: "2024-11-15",
        images: [
            { url: HeroBudgetImg1.src, alt: 'Pantalla principal con dashboard de Hero Budget' },
            { url: HeroBudgetImg2.src, alt: 'Gestión de ingresos y gastos' },
            { url: HeroBudgetImg3.src, alt: 'Sistema de facturas recurrentes' },
            { url: HeroBudgetImg4.src, alt: 'Metas de ahorro y progreso' },
            { url: HeroBudgetImg5.src, alt: 'Panel de administración de categorías' },
            { url: HeroBudgetImg6.src, alt: 'Gestión de cuentas y balances' },
            { url: HeroBudgetImg7.src, alt: 'Historial de transacciones' },
            { url: HeroBudgetImg8.src, alt: 'Análisis de categorías principales' },
            { url: HeroBudgetImg9.src, alt: 'Perfil de usuario' },
            { url: HeroBudgetImg10.src, alt: 'Modo oscuro y claro' }
        ],
        videos: [
            { url: HeroBudgetVideo1, poster: HeroBudgetImg1.src },
            { url: HeroBudgetVideo2, poster: HeroBudgetImg2.src },
            { url: HeroBudgetVideo3, poster: HeroBudgetImg3.src },
            { url: HeroBudgetVideo4, poster: HeroBudgetImg4.src },
            { url: HeroBudgetVideo5, poster: HeroBudgetImg5.src }
        ],
        features: heroBudgetFeatures
    },
    // ... rest of existing projects
```

---

## 3. Technology Categories Update (Optional)

If you want to add the new technologies to the `techCategories` object (around line 704), update it like this:

```javascript
const techCategories = {
    frontend: ["HTML", "Javascript", "CSS", "Tailwind CSS", "Astro", "React", "React Native", "Vue", "Angular", "Next.js", "TypeScript"],
    backend: ["PHP", "NodeJS", "Express", "Express js", "Python", "Java", "Ruby", "Prisma", "NextAuth.js", "Go"],
    database: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    other: ["Nginx", "next-intl", "StPageFlip", "Jotai", "i18next", "OAuth 2.0", "Jest", "Detox", "React Navigation"],
};
```

---

## 4. Checklist Before Committing

- [ ] All images are placed in `src/assets/images/herobudget/`
- [ ] All videos are placed in `src/assets/videos/herobudget/`
- [ ] Main project image is in `src/assets/images/`
- [ ] All import statements are added to `projects.js`
- [ ] Features array is added to `projects.js`
- [ ] Project object is added to the data array
- [ ] Images are optimized for web (compressed, reasonable file sizes)
- [ ] Videos are compressed and web-optimized
- [ ] Run `npm run dev` to test locally
- [ ] Check that the project appears on `/projects` page
- [ ] Check that the project detail page loads at `/projects/hero-budget`
- [ ] Verify all images and videos load correctly
- [ ] Test on different screen sizes (mobile, tablet, desktop)

---

## 5. Notes

- **Date Format:** The project date is set to `"2024-11-15"` which will make it appear as the most recent project
- **Slug:** The slug is `"hero-budget"` so the project will be accessible at `/projects/hero-budget`
- **Tech Array:** Technologies are simplified to match the existing pattern (no version numbers in main display)
- **Features:** Selected 12 key features from the original 35+ to keep the page concise and focused
- **Images vs Videos:** Features use a mix of images (for static UI) and videos (for interactions/animations)
- **Carousel:** Some features use carousel arrays to show multiple related images

---

## 6. Alternative: Using Placeholder Images Temporarily

If you don't have the images/videos ready yet, you can temporarily use placeholder imports:

```javascript
// Temporary placeholders
import HeroBudget from "../assets/images/placeholder.jpg";
import HeroBudgetImg1 from "../assets/images/placeholder.jpg";
// ... etc
```

Then replace them once the real assets are available.

---

## Summary

This setup will integrate Hero Budget into your portfolio following the exact same structure and patterns used by your other projects like Tour To Valencia, Cat Store, and Centro Neuro Expresion. The project will automatically:

1. Appear in the projects listing page (sorted by date, so it will be first)
2. Have its own detail page at `/projects/hero-budget`
3. Display all features with their images/videos
4. Show the technology stack with proper categorization
5. Include links to the App Store and GitHub repository
