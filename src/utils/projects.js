import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import FloridaCats from "../assets/images/floridacats.webp";
import Carhub from "../assets/images/carhub.webp";
import AlqueriaVillacarmen from "../assets/images/villacarmendoble.webp";
import Portfolio from "../assets/images/portfolioweb.webp"
import GuillermoFernandezNutricion from "../assets/images/guillermofernandeznutricion.webp"
import GuilleImg1 from "../assets/images/guilleromofernandeznutricion/guille1.jpg"
import GuilleImg2 from "../assets/images/guilleromofernandeznutricion/guille2.jpg"
import GuilleImg3 from "../assets/images/guilleromofernandeznutricion/guille3.jpg"
import GuilleVideo from "../assets/videos/guillermofernandeznutricion/videoguille.mov"

// Placeholder para imágenes y videos
// En un entorno real, estas URLs apuntarían a recursos reales
const placeholderImages = [
    { url: '/img/placeholder1.jpg', alt: 'Imagen de placeholder 1' },
    { url: '/img/placeholder2.jpg', alt: 'Imagen de placeholder 2' },
    { url: '/img/placeholder3.jpg', alt: 'Imagen de placeholder 3' },
];

const placeholderVideos = [
    { url: '/videos/placeholder1.mp4', poster: '/img/video-poster1.jpg' },
    { url: '/videos/placeholder2.mp4', poster: '/img/video-poster2.jpg' },
];

// Placeholder para funcionalidades
// Cada funcionalidad tiene un título, descripción y opcionalmente una imagen o video
const placeholderFeatures = [
    {
        title: "Consulta Nutricional Online",
        description: "Los clientes pueden realizar una primera consulta nutricional a través de un formulario online, facilitando el contacto inicial sin necesidad de llamadas.",
        image: "/img/features/feature1.jpg" // Ruta a la imagen que muestra esta funcionalidad
    },
    {
        title: "Información Personalizada",
        description: "Sección detallada con los servicios ofrecidos y precios, permitiendo a los clientes conocer toda la información antes de contactar.",
        image: "/img/features/feature2.jpg"
    },
    {
        title: "Testimonios de Clientes",
        description: "Galería de testimonios reales de clientes que han mejorado su alimentación y salud gracias a las consultas nutricionales.",
        video: "/videos/features/testimonios.mp4",
        videoPoster: "/img/features/video-poster1.jpg"
    }
];

// Funcionalidades para Alqueria Villa Carmen
const alqueriaFeatures = [
    {
        title: "Sistema de Reservas Online",
        description: "Los clientes pueden realizar reservas directamente desde la web, seleccionando fecha, hora y número de comensales, reduciendo la carga de trabajo de gestión manual.",
        image: "/img/features/alqueria-reservas.jpg"
    },
    {
        title: "Menús Digitales Actualizables",
        description: "Sistema que permite actualizar los menús del día, fin de semana y carta de vinos en tiempo real, sin necesidad de conocimientos técnicos.",
        video: "/videos/features/alqueria-menus.mp4",
        videoPoster: "/img/features/alqueria-poster.jpg"
    },
    {
        title: "Back Office de Gestión",
        description: "Panel de administración completo para gestionar reservas, establecer límites de aforo diarios y enviar confirmaciones automáticas por correo electrónico.",
        image: "/img/features/alqueria-backoffice.jpg"
    }
];

// Funcionalidades para Car Hub
const carHubFeatures = [
    {
        title: "Presentación del Software",
        description: "Sección dedicada a mostrar las características principales del software de compra-venta de coches, con explicaciones detalladas de su funcionamiento.",
        image: "/img/features/carhub-software.jpg"
    },
    {
        title: "Diseño Responsive",
        description: "Interfaz adaptable a cualquier dispositivo (escritorio, tablet o móvil) para garantizar una experiencia de usuario óptima en cualquier pantalla.",
        image: "/img/features/carhub-responsive.jpg"
    },
    {
        title: "Formulario de Contacto",
        description: "Sistema de contacto directo con el equipo de desarrollo mediante un formulario que envía las consultas por email para una rápida respuesta.",
        video: "/videos/features/carhub-contact.mp4",
        videoPoster: "/img/features/carhub-poster.jpg"
    }
];

// Funcionalidades para Florida Cats
const floridaCatsFeatures = [
    {
        title: "Sistema de Autenticación",
        description: "Sistema completo de registro e inicio de sesión con almacenamiento seguro de datos de usuario y gestión de cookies de sesión.",
        image: "/img/features/floridacats-auth.jpg"
    },
    {
        title: "Carrito de Compras Personalizado",
        description: "Carrito de compras único para cada usuario que permite añadir, eliminar y gestionar los productos seleccionados de forma intuitiva.",
        video: "/videos/features/floridacats-cart.mp4",
        videoPoster: "/img/features/floridacats-poster.jpg"
    },
    {
        title: "Filtrado de Productos",
        description: "Sistema de filtrado avanzado que permite ordenar los productos por precio, nombre y antigüedad para facilitar la búsqueda al cliente.",
        image: "/img/features/floridacats-filter.jpg"
    },
    {
        title: "Panel de Administración",
        description: "Área exclusiva para administradores que permite añadir o eliminar productos del catálogo sin necesidad de acceder al código.",
        image: "/img/features/floridacats-admin.jpg"
    }
];

// Funcionalidades para Portfolio
const portfolioFeatures = [
    {
        title: "Diseño Minimal y Elegante",
        description: "Interfaz de usuario limpia y moderna con animaciones sutiles que mejoran la experiencia de navegación manteniendo el enfoque en el contenido.",
        image: "/img/features/portfolio-design.jpg"
    },
    {
        title: "Sección de Proyectos Filtrable",
        description: "Galería de proyectos con sistema de filtrado para mostrar los trabajos más recientes o por categorías específicas.",
        video: "/videos/features/portfolio-projects.mp4",
        videoPoster: "/img/features/portfolio-poster.jpg"
    },
    {
        title: "Formulario de Contacto Integrado",
        description: "Sistema de contacto directo que permite a los visitantes enviar mensajes sin salir de la página, facilitando la comunicación con potenciales clientes.",
        image: "/img/features/portfolio-contact.jpg"
    }
];

// Funcionalidades para Guillermo Fernández Nutrición
const guillermoFernandezFeatures = [
    {
        title: "Servicios Nutricionales Especializados",
        description: "Presentación de servicios específicos (Nutrición Clínica, Pérdida de Peso, Nutrición Deportiva, Hábitos Alimentarios) con descripciones detalladas y llamadas a la acción claras, permitiendo a los usuarios encontrar fácilmente la especialidad que necesitan.",
        image: GuilleImg1
    },
    {
        title: "Solicitud de Consulta Online",
        description: "Sistema de formulario de contacto personalizado que permite a los usuarios solicitar información o agendar una primera consulta nutricional, facilitando la captación de nuevos clientes con campos específicos para el motivo de consulta y tipo de servicio.",
        image: GuilleImg2
    },
    {
        title: "Presentación Profesional del Nutricionista",
        description: "Sección detallada sobre la formación, experiencia y enfoque profesional de Guillermo Fernández, nutricionista colegiado, generando confianza en los visitantes al mostrar sus credenciales y filosofía de trabajo personalizado.",
        image: GuilleImg3
    }
];

const data = [
    {
        name: "Guillermo Fernandez Nutrición",
        type: "Página Web + Email",
        url: "https://guillermofernandeznutricion.es/",
        github: "https://github.com/jaivial/astrowebsite.git",
        image: GuillermoFernandezNutricion,
        slug: "guillermo-fernandez-nutricion",
        description: "Página web para anunciar los servicios de consulta nutricional y aumentar la captación de clientes. Permite que los clientes realicen una primera consulta por un formulario de contacto. Diseño responsivo adaptable a tamaños de escritorio, tablet y móviles. Desarrollado con Astro para el front end y PHP para el backend del formulario de contacto. Las fotos y el contenido creativo fue elaborado por mi.",
        tech: ['HTML', 'Javascript', 'Css', 'Astro', 'PHP', 'NodeJS'],
        // Galería de imágenes del proyecto
        images: [
            { url: GuilleImg1.src, alt: 'Servicios Nutricionales Especializados' },
            { url: GuilleImg2.src, alt: 'Solicitud de Consulta Online' },
            { url: GuilleImg3.src, alt: 'Presentación Profesional del Nutricionista' },
        ],
        videos: [
            { url: GuilleVideo, poster: GuilleImg1.src }
        ],
        // Funcionalidades del proyecto con imágenes o videos explicativos
        features: guillermoFernandezFeatures
    },
    {
        name: "Alqueria Villa Carmen",
        type: "Página Web + Gestor de Reservas + Back Office",
        url: "https://alqueriavillacarmen.com/",
        github: "https://github.com/jaivial/villacarmen.git",
        image: AlqueriaVillacarmen,
        slug: "alqueria-villacarmen",
        description: "Creación de página web para promocionar Alqueria Villa Carmen, un restaurante y salón de eventos. Destaca por mostrar los Menús del Día, de Fin de Semana y la carta de vinos, además de permitir reservas online. Incluye un gestor de reservas con funciones como límite diario de reservas, confirmación por correo electrónico y administración de reservas. La reserva online aumenta en un 300% la clientela. Además, las cartas son editables en tiempo real y desde dispositivos móviles, permitiendo cambios en fotos, descripciones y platos.",
        tech: ['PHP', 'HTML', 'Javascript', 'Css', 'MySQL'],
        images: placeholderImages,
        videos: placeholderVideos,
        features: alqueriaFeatures
    },
    {
        name: "Car Hub",
        type: "Página Web",
        url: "https://carhubpi.000webhostapp.com/index.php",
        github: "/",
        image: Carhub,
        slug: "car-hub",
        description: "Descubre nuestro sitio web dedicado a presentar el software Car Hub, un portal de compra y venta de coches. Se destacan las funcionalidades del software, resaltando sus virtudes y su utilidad para nuestros clientes. Desarrollada con las últimas tecnologías en HTML y PHP, ofrece un diseño responsive que se adapta a cualquier dispositivo. Además, facilitamos la comunicación mediante un formulario de contacto vía email con nuestro equipo de desarrolladores.",
        tech: ['HTML', 'Javascript', 'Css', 'PHP'],
        images: placeholderImages,
        videos: [],
        features: carHubFeatures
    },
    {
        name: "Florida Cats",
        type: "Tienda Online",
        url: "https://floridacats.000webhostapp.com/",
        github: '/',
        image: FloridaCats,
        slug: "florida-cats",
        description: "Prototipo de tienda online con acceso de usuario y contraseña y registro de nuevos usuarios. Almacenamiento de datos de sesión en cookies. Es una tienda online en la que se pueden añadir gatos al carrito. Permite aplicar filtros de orden por precio, nombre y antiguedad. Cada usuario tiene un carrito y un historial de pedidos independiente. Permite la adición o eliminación de gatos cuando inicias sesión como administrador en el área de administrador.",
        tech: ['HTML', 'Javascript', 'CSS', 'PHP', 'MySQL'],
        images: placeholderImages,
        videos: placeholderVideos,
        features: floridaCatsFeatures
    },
    {
        name: "Portfolio Web",
        type: "Pagina Web",
        url: "https://www.jaimedigitalstudios.com/",
        github: "https://github.com/jaivial/astroportfolio.git",
        image: Portfolio,
        slug: "portfolio",
        description: "Portfolio web para mostrar mi perfil, mi carrera académica y profesional, mis proyectos y contactar conmigo mediante un formulario. Desarrollado con Astro, es un diseño elegante, minimal y con un rendimiento veloz. Permite el filtrado de datos para mostrar los últimos projecots mediante recogida de datos. 100% responsivo, se adapta a formatos de escritorio, tablets y móviles.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown'],
        images: placeholderImages,
        videos: [],
        features: portfolioFeatures
    },
]

export function getData() {
    return data;
}