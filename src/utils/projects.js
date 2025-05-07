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

// Importaciones para Alqueria Villacarmen
import VillacarmenImg1 from "../assets/images/villacarmen/villacarmen-1.jpg"
import VillacarmenImg2 from "../assets/images/villacarmen/villacarmen-2.jpg"
import VillacarmenImg3 from "../assets/images/villacarmen/villacarmen-3.jpg"
import VillacarmenImg4 from "../assets/images/villacarmen/villacarmen-4.jpg"
import VillacarmenImg5 from "../assets/images/villacarmen/villacarmen-5.jpg"
import VillacarmenImg6 from "../assets/images/villacarmen/villacarmen-6.jpg"
import VillacarmenImg7 from "../assets/images/villacarmen/villacarmen-7.jpg"
import VillacarmenImg8 from "../assets/images/villacarmen/villacarmen-8.jpg"
import VillacarmenImg9 from "../assets/images/villacarmen/villacarmen-9.jpg"
import VillacarmenImg10 from "../assets/images/villacarmen/villacarmen-10.jpg"
import VillacarmenImg11 from "../assets/images/villacarmen/villacarmen-11.jpg"
import VillacarmenImg12 from "../assets/images/villacarmen/villacarmen-12.jpg"
import VillacarmenImg13 from "../assets/images/villacarmen/villacarmen-13.jpg"
import VillacarmenImg14 from "../assets/images/villacarmen/villacarmen-14.jpg"
import VillacarmenImg15 from "../assets/images/villacarmen/villacarmen-15.jpg"
import VillacarmenImg16 from "../assets/images/villacarmen/villacarmen-16.jpg"
import VillacarmenImg17 from "../assets/images/villacarmen/villacarmen-17.jpg"
import VillacarmenImg18 from "../assets/images/villacarmen/villacarmen-18.jpg"
import VillacarmenVideo from "../assets/videos/villacarmen/villacarmen-video.mov"

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
        title: "Gestor de Reservas Online",
        description: "Sistema avanzado de reservas con calendario que muestra días cerrados, abiertos y completos. El número de personas es condicional según el límite y número de reservas para cada día. Proceso en 4 pasos: selección de fecha y personas, opción de reservar arroz de la base de datos, datos personales con envío de confirmación por email y WhatsApp, y confirmación final con selección de tronas/carros y aceptación de condiciones.",
        carousel: [VillacarmenImg1, VillacarmenImg2, VillacarmenImg3, VillacarmenImg4]
    },
    {
        title: "Carta Dinámica de Platos",
        description: "Menú digital conectado a la base de datos que genera la presentación de platos de forma dinámica, mostrando solo los platos activos con sus descripciones, precios e información de alérgenos actualizada en tiempo real.",
        image: VillacarmenImg5
    },
    {
        title: "Carta de Vinos Dinámica",
        description: "Sistema conectado a la base de datos que muestra de forma dinámica solo los vinos activos, facilitando la actualización constante de la bodega sin necesidad de modificar el código.",
        image: VillacarmenImg6
    },
    {
        title: "Administración de Reservas",
        description: "Panel de control con calendario visual que muestra días abiertos y cerrados, resumen de número de reservas por día y codificación por colores según el porcentaje de ocupación, permitiendo una gestión visual e intuitiva.",
        image: VillacarmenImg7
    },
    {
        title: "Gestión de Reservas Avanzada",
        description: "Tabla completa con información detallada de reservas por día, opciones de editar y borrar cada reserva, y funcionalidad para exportar datos en Excel o PDF para facilitar la recepción de clientes.",
        image: VillacarmenImg8
    },
    {
        title: "Control de Aforo Personalizado",
        description: "Herramienta para establecer límites de reservas individuales para cada día y gestionar el número máximo de mesas de 2 personas, optimizando el uso del espacio y la distribución de comensales.",
        image: VillacarmenImg9
    },
    {
        title: "Gestión de Horarios",
        description: "Sistema de administración de horas de apertura por día, con distribución personalizada del límite de reservas por hora para evitar colapsos, y bloqueo automático de franjas horarias al alcanzar su límite.",
        image: VillacarmenImg10
    },
    {
        title: "Reservas Manuales sin Límites",
        description: "Funcionalidad para que el personal introduzca reservas realizadas en persona o por teléfono sin las restricciones del sistema online, permitiendo mayor flexibilidad para la gestión interna.",
        image: VillacarmenImg11
    },
    {
        title: "Gestión de Menús y Platos",
        description: "Panel de administración para añadir, activar/desactivar y editar platos en la base de datos según categorías (entrantes, principales, arroces, postres), con selección personalizada de alérgenos para cada plato.",
        carousel: [VillacarmenImg12, VillacarmenImg13]
    },
    {
        title: "Administración de Carta de Vinos",
        description: "Sistema para gestionar la bodega con opciones para añadir, editar, activar o desactivar vinos de la carta, permitiendo actualizar la oferta sin necesidad de eliminar registros.",
        carousel: [VillacarmenImg14, VillacarmenImg15, VillacarmenImg16]
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

// Importacion de imagenes y videos para TodoList
import TodoList from "../assets/images/todolist/todolist6.jpg"
import TodoListImg1 from "../assets/images/todolist/todolist1.jpg"
import TodoListImg2 from "../assets/images/todolist/todolist2.jpg"
import TodoListImg3 from "../assets/images/todolist/todolist3.jpg"
import TodoListImg4 from "../assets/images/todolist/todolist4.jpg"
import TodoListImg5 from "../assets/images/todolist/todolist5.jpg"
import TodoListVideo1 from "../assets/videos/todolist/todolist1.mov"
import TodoListVideo2 from "../assets/videos/todolist/todolist2.mov"
import TodoListVideo3 from "../assets/videos/todolist/todolist3.mov"
import TodoListVideo4 from "../assets/videos/todolist/todolist4.mov"

// Funcionalidades para Todo List
const todoListFeatures = [
    {
        title: "Autenticación de usuarios",
        description: "Sistema completo de autenticación con formulario de inicio de sesión conectado a base de datos PostgreSQL, validación de errores, registro de nuevos usuarios y soporte para múltiples idiomas mediante selector integrado. La funcionalidad multilingual está implementada con useContext de React y archivos JSON para las traducciones.",
        video: TodoListVideo1,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Gestión de tareas con calendario",
        description: "Dashboard con calendario integrado para seleccionar fechas específicas a las que añadir tareas. Las tareas se agregan a la sección de no completadas y el sistema muestra un indicador visual (punto rojo) en las fechas que contienen tareas pendientes. Cada día almacena sus propias tareas de forma independiente.",
        video: TodoListVideo2,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Edición y eliminación de tareas",
        description: "Funcionalidad para editar y personalizar tareas existentes, así como para eliminar tareas que ya no son necesarias, manteniendo la lista organizada y actualizada según las necesidades del usuario.",
        video: TodoListVideo3,
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Completar tareas y organización por Drag & Drop",
        description: "Las tareas pueden marcarse como completadas mediante el checkbox o utilizando la funcionalidad de arrastrar y soltar (drag & drop) entre las secciones de completadas y pendientes. El sistema actualiza visualmente el estado del día en el calendario, cambiando de punto rojo a verde cuando todas las tareas están completadas.",
        video: TodoListVideo4,
        autoplay: true,
        muted: true,
        loop: true
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
        tech: ['HTML', 'Javascript', 'CSS', 'Astro', 'Express js', 'Nginx'],
        date: "2023-08-15",
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
        image: VillacarmenImg18,
        slug: "alqueria-villacarmen",
        description: "Creación de página web para promocionar Alqueria Villa Carmen, un restaurante y salón de eventos. Destaca por mostrar los Menús del Día, de Fin de Semana y la carta de vinos, además de permitir reservas online. Incluye un gestor de reservas con funciones como límite diario de reservas, confirmación por correo electrónico y administración de reservas. La reserva online aumenta en un 300% la clientela. Además, las cartas son editables en tiempo real y desde dispositivos móviles, permitiendo cambios en fotos, descripciones y platos.",
        tech: ['PHP', 'HTML', 'Javascript', 'CSS', 'MySQL', 'Nginx'],
        date: "2022-11-10",
        images: [
            { url: VillacarmenImg1.src, alt: 'Gestor de Reservas - Selección Fecha y Personas' },
            { url: VillacarmenImg2.src, alt: 'Gestor de Reservas - Selección de Arroz' },
            { url: VillacarmenImg3.src, alt: 'Gestor de Reservas - Datos Personales' },
            { url: VillacarmenImg4.src, alt: 'Gestor de Reservas - Confirmación' },
            { url: VillacarmenImg5.src, alt: 'Carta Dinámica de Platos' },
            { url: VillacarmenImg6.src, alt: 'Carta de Vinos Dinámica' },
            { url: VillacarmenImg7.src, alt: 'Administración - Calendario de Reservas' },
            { url: VillacarmenImg8.src, alt: 'Administración - Tabla de Gestión de Reservas' },
            { url: VillacarmenImg9.src, alt: 'Administración - Control de Aforo' },
            { url: VillacarmenImg10.src, alt: 'Administración - Gestión de Horarios' },
            { url: VillacarmenImg11.src, alt: 'Administración - Reservas Manuales' },
            { url: VillacarmenImg12.src, alt: 'Administración - Gestión de Platos' },
            { url: VillacarmenImg13.src, alt: 'Administración - Edición de Platos y Alérgenos' },
            { url: VillacarmenImg14.src, alt: 'Administración - Gestión de Vinos' },
            { url: VillacarmenImg15.src, alt: 'Administración - Lista de Vinos' },
            { url: VillacarmenImg16.src, alt: 'Administración - Edición de Vinos' },
            { url: VillacarmenImg17.src, alt: 'Vista General del Restaurante' },
            { url: VillacarmenImg18.src, alt: 'Imagen Principal del Proyecto' }
        ],
        videos: [
            { url: VillacarmenVideo, poster: VillacarmenImg1.src }
        ],
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
        tech: ['HTML', 'Javascript', 'CSS', 'PHP', 'Nginx'],
        date: "2022-05-22",
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
        tech: ['HTML', 'Javascript', 'CSS', 'PHP', 'MySQL', 'Nginx'],
        date: "2021-09-03",
        images: placeholderImages,
        videos: placeholderVideos,
        features: floridaCatsFeatures
    },
    {
        name: "Todo List",
        type: "Aplicación Web Full-Stack",
        url: "https://todolist.jaimedigitalstudio.com/",
        github: "https://github.com/jaivial/to-do-list",
        image: TodoList,
        slug: "todo-list",
        description: "Aplicación completa de gestión de tareas desarrollada con Next.js 15, TypeScript, Tailwind CSS 4 y PostgreSQL. Ofrece autenticación de usuarios, gestión de tareas con un sistema de arrastrar y soltar (drag & drop), integración con calendario, y soporte multilingüe. La aplicación permite crear, editar, eliminar y marcar tareas como completadas, con una visualización clara del estado de las tareas por día en el calendario.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js", "next-intl"],
        date: "2023-10-15",
        images: [
            { url: TodoListImg1.src, alt: 'Pantalla de inicio de sesión' },
            { url: TodoListImg2.src, alt: 'Dashboard con calendario' },
            { url: TodoListImg3.src, alt: 'Gestión de tareas' },
            { url: TodoListImg4.src, alt: 'Tareas completadas' },
            { url: TodoListImg5.src, alt: 'Vista móvil responsiva' }
        ],
        videos: [
            { url: TodoListVideo1, poster: TodoListImg1.src },
            { url: TodoListVideo2, poster: TodoListImg2.src },
            { url: TodoListVideo3, poster: TodoListImg3.src },
            { url: TodoListVideo4, poster: TodoListImg4.src }
        ],
        features: todoListFeatures
    }
]

// Organizar tecnologías por categorías para mejor visualización
const techCategories = {
    frontend: ["HTML", "Javascript", "CSS", "Tailwind CSS", "Astro", "React", "Vue", "Angular", "Next.js", "TypeScript"],
    backend: ["PHP", "NodeJS", "Express", "Express js", "Python", "Java", "Ruby", "Prisma", "NextAuth.js"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    other: ["Nginx", "next-intl"],
};

export function getData() {
    // Ordenar proyectos por fecha (del más reciente al más antiguo)
    return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
}