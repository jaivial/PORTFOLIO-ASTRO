// Importar imágenes de los proyectos profesionales
// Ya no necesitamos importar las imágenes como módulos
// porque ahora estamos usando rutas públicas

/**
 * Datos de experiencia profesional y proyectos para la sección de trayectoria
 * Cada entrada contiene información detallada sobre un proyecto o experiencia laboral
 */
export const careerData = [
    {
        id: 1,
        title: "Grado Superior DAM",
        role: "Estudiante",
        company: "Florida Universitaria",
        period: "2022-2024",
        description: "Formación en desarrollo de aplicaciones multiplataforma, adquiriendo conocimientos de programación, bases de datos, interfaces y desarrollo móvil.",
        link: "https://www.floridauniversitaria.es/",
        image: "https://docenzia.com/docs/64757/976d2f7c9a08073fcbfabdff5e44ba06",
        skills: ["React Native", "Java", "SQL", "Android", "C#", "PHP", "MySQL", "MongoDB", "Git", "Bash"],
        highlights: [
            "Desarrollo de aplicaciones móviles con React Native y Android Studio",
            "Gestión de bases de datos relacionales (MySQL) y no relacionales (MongoDB)",
            "Programación orientada a objetos con Java y C#",
            "Control de versiones con Git y comandos Bash"
        ],
        category: "education",
        location: "Valencia, España",
        details: "El Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) me proporcionó una sólida base de conocimientos en programación y diseño de software. Durante este periodo, adquirí competencias en diversas tecnologías y metodologías de desarrollo, lo que me permitió construir una base técnica sólida para mi carrera profesional."
    },
    {
        id: 2,
        title: "Proyecto Alquería Villacarmen",
        role: "Community Manager y Desarrollador Web",
        company: "Alquería Villacarmen",
        period: "2022",
        description: "Gestión de contenido y presencia en redes sociales para este negocio local, mejorando su visibilidad online y captación de clientes. Implementación de sistema de reservas online y carta digital.",
        link: "https://alqueriavillacarmen.com/",
        image: "/images/alqueriavillacarmen.webp",
        skills: ["Gestión de Contenido", "Redes Sociales", "Marketing Digital", "SEO", "WordPress", "PHP", "JavaScript"],
        highlights: [
            "Aumenté la visibilidad online en un 40%",
            "Desarrollo e implementación de sistema de reservas online",
            "Creación de carta digital con gestión dinámica de platos",
            "Panel de administración personalizado para gestión de reservas"
        ],
        category: "project",
        location: "Valencia, España",
        details: "En este proyecto freelance, combiné mis habilidades de community management con desarrollo web para crear una solución integral para este restaurante tradicional valenciano. El sistema de reservas online permitió automatizar procesos y reducir errores en la gestión de mesas, mientras que la estrategia de contenido en redes sociales aumentó significativamente la visibilidad y las visitas al restaurante."
    },
    {
        id: 3,
        title: "Proyecto Guillermo Fernández Nutrición",
        role: "Desarrollador Web",
        company: "Guillermo Fernández Nutrición",
        period: "2023",
        description: "Desarrollo de sitio web profesional para nutricionista con formulario de consulta y blog de contenido nutricional.",
        link: "https://guillermofernandezcalvet.com/",
        image: "/images/guillermofernandeznutricion.webp",
        skills: ["HTML/CSS", "JavaScript", "WordPress", "SEO", "Diseño Responsivo"],
        highlights: [
            "Diseño responsive adaptado a móviles y tablets",
            "Formulario de consulta integrado con email",
            "Blog con categorías de contenido nutricional",
            "Optimización para motores de búsqueda"
        ],
        category: "project",
        location: "Valencia, España",
        details: "Para este proyecto freelance de nutrición clínica, diseñé una web profesional centrada en la experiencia de usuario, con una estética limpia y funcional. Implementé un formulario de consulta que permite a los clientes contactar directamente con el profesional, así como un blog con contenido nutricional optimizado para SEO que ha permitido mejorar el posicionamiento del profesional en su sector."
    },
    {
        id: 5,
        title: "Proyecto Tour to Valencia",
        role: "Frontend Developer",
        company: "Tour to Valencia",
        period: "2025",
        description: "Desarrollo de plataforma de turismo local con enfoque en experiencias personalizadas y reservas online.",
        link: "/",
        image: "/images/tourtovalencia/tourtovalencia11.jpg",
        skills: ["React", "Tailwind CSS", "Firebase", "Next.js", "OpenRouter API", "PayPal API"],
        highlights: [
            "Gestor de reservas dinámico para tours",
            "Generador de páginas para tours de forma dinámica",
            "Conexión a IA por OpenRouter para traducción de páginas",
            "Pasarela de pago PayPal integrada con cuenta del cliente",
            "Sistema de emails para confirmación de reservas"
        ],
        category: "project",
        location: "Valencia, España",
        details: "Este proyecto freelance ofrece a los visitantes de Valencia la posibilidad de descubrir y reservar experiencias únicas en la ciudad. Implementé un sistema completo que permite gestionar reservas en tiempo real, generar páginas para tours de forma dinámica y procesar pagos a través de PayPal. La integración con OpenRouter permite la traducción automática del contenido, mejorando la experiencia internacional."
    },
    {
        id: 4,
        title: "Proyecto Centro Neuro Expresión",
        role: "Desarrollador Web",
        company: "Centro Neuro Expresión",
        period: "2025",
        description: "Desarrollo de sitio web informativo para centro de psicopedagogía con formulario de contacto integrado.",
        link: "/",
        image: "/images/centroneuroexpresion/centroneuroexpresion1.jpg",
        skills: ["React", "Tailwind CSS", "Responsive Design", "Email API"],
        highlights: [
            "Página informativa sobre servicios de psicopedagogía",
            "Secciones detalladas sobre especialidades del centro",
            "Formulario de contacto integrado con email",
            "Diseño totalmente responsive adaptado a todos los dispositivos"
        ],
        category: "project",
        location: "Valencia, España",
        details: "Desarrollé una web con fines publicitarios para este centro de psicopedagogía, destacando los servicios y especialidades que ofrecen. El sitio cuenta con un formulario de contacto conectado directamente al email del negocio, facilitando la comunicación con potenciales clientes. El diseño está optimizado para ofrecer una experiencia de usuario fluida y accesible en cualquier dispositivo."
    },
    {
        id: 6,
        title: "Prácticas en Knowmad Mood",
        role: "Frontend React Developer",
        company: "Knowmad Mood",
        period: "2023-Presente",
        description: "Desarrollo frontend con React, implementando buenas prácticas y escalabilidad de código.",
        link: "/",
        image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
        skills: ["React", "TypeScript", "Jest", "Styled-components", "RxJS", "Webpack"],
        highlights: [
            "Construcción de componentes reutilizables",
            "Testing con Jest y React Testing Library",
            "Implementación de flujos de datos reactivos con RxJS",
            "Optimización de rendimiento en aplicaciones web"
        ],
        category: "job",
        location: "Remoto",
        details: "En mis prácticas como Frontend React Developer, he participado en el desarrollo de aplicaciones web empresariales, colaborando con equipos multidisciplinares en metodologías ágiles. Mi trabajo se ha centrado en la creación de componentes reutilizables, la implementación de flujos de datos reactivos y la mejora del rendimiento de aplicaciones existentes. He aplicado buenas prácticas de desarrollo como testing, documentación y código limpio."
    }
];

/**
 * Obtener datos de experiencia profesional y proyectos
 * @returns {Array} Array con los datos de trayectoria profesional
 */
export function getCareerData() {
    return careerData;
}

/**
 * Filtrar datos de trayectoria por categoría
 * @param {string} category - Categoría para filtrar (education, project, job)
 * @returns {Array} Array filtrado con los datos de la categoría especificada
 */
export function getCareerByCategory(category) {
    return careerData.filter(item => item.category === category);
}

/**
 * Obtener un elemento específico de la trayectoria por su ID
 * @param {number} id - ID del elemento a obtener
 * @returns {Object|null} El elemento encontrado o null si no existe
 */
export function getCareerItemById(id) {
    return careerData.find(item => item.id === id) || null;
}

export default {
    getCareerData,
    getCareerByCategory,
    getCareerItemById
}; 