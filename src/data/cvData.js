const cvData = {
    en: {
        personal: {
            name: "Jaime Digital Studio",
            title: "Full Stack Developer",
            summary: "Passionate full stack developer with extensive experience in modern web technologies. Specialized in creating interactive and high-performance applications with React, Next.js and Astro. Strong focus on user experience and clean, maintainable code.",
            email: "jaimevillalcon@hotmail.com",
            phone: "+34 692747052",
            location: "Valencia, Spain",
            website: "jaimedigitalstudio.com",
            socials: [
                {
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/jaimedigitalstudio",
                    icon: "linkedin"
                },
                {
                    name: "GitHub",
                    url: "https://github.com/jaivial",
                    icon: "github"
                },
                {
                    name: "Instagram",
                    url: "https://instagram.com/jaimedigitalstudio",
                    icon: "instagram"
                }
            ]
        },
        experience: [
            {
                position: "Frontend React Developer",
                company: "Knowmad Mood",
                location: "Remote",
                period: "2023 - Present",
                description: "Frontend development with React, implementing best practices and code scalability.",
                achievements: [
                    "Building reusable components",
                    "Testing with Jest and React Testing Library",
                    "Implementation of reactive data flows with RxJS",
                    "Performance optimization in web applications"
                ]
            },
            {
                position: "Web Developer",
                company: "Centro Neuro Expresión",
                location: "Valencia, Spain",
                period: "2024",
                description: "Development of informative website for a psychopedagogy center with integrated contact form.",
                achievements: [
                    "Informative page about psychopedagogy services",
                    "Detailed sections on center specialties",
                    "Contact form integrated with email",
                    "Fully responsive design adapted to all devices"
                ]
            },
            {
                position: "Frontend Developer",
                company: "Tour to Valencia",
                location: "Valencia, Spain",
                period: "2024",
                description: "Development of local tourism platform with a focus on personalized experiences and online reservations.",
                achievements: [
                    "Dynamic reservation manager for tours",
                    "Dynamic tour page generator",
                    "Integration with OpenRouter API for page translation",
                    "PayPal payment gateway integrated with client account",
                    "Email system for reservation confirmation"
                ]
            },
            {
                position: "Web Developer",
                company: "Guillermo Fernández Nutrición",
                location: "Valencia, Spain",
                period: "2023",
                description: "Professional website development for nutritionist with consultation form and nutritional content blog.",
                achievements: [
                    "Responsive design adapted to mobile and tablets",
                    "Consultation form integrated with email",
                    "Blog with nutritional content categories",
                    "Search engine optimization"
                ]
            },
            {
                position: "Community Manager and Web Developer",
                company: "Alquería Villacarmen",
                location: "Valencia, Spain",
                period: "2022",
                description: "Content management and social media presence for this local business, improving its online visibility and customer acquisition. Implementation of online reservation system and digital menu.",
                achievements: [
                    "Increased online visibility by 40%",
                    "Development and implementation of online reservation system",
                    "Creation of digital menu with dynamic dish management",
                    "Custom administration panel for reservation management"
                ]
            }
        ],
        education: [
            {
                degree: "Higher Degree in Multiplatform Application Development",
                institution: "Florida Universitaria",
                location: "Valencia, Spain",
                period: "2022-2024",
                description: "Training in multiplatform application development, acquiring knowledge of programming, databases, interfaces and mobile development.",
                achievements: [
                    "Mobile application development with React Native and Android Studio",
                    "Management of relational (MySQL) and non-relational (MongoDB) databases",
                    "Object-oriented programming with Java and C#",
                    "Version control with Git and Bash commands"
                ]
            }
        ],
        skills: {
            technical: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 80 },
                { name: "Next.js", level: 85 },
                { name: "Remix", level: 80 },
                { name: "Astro", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "HTML/CSS", level: 95 },
                { name: "MongoDB", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "PostgreSQL", level: 75 },
                { name: "PHP", level: 70 },
                { name: "Node.js", level: 80 },
                { name: "Git", level: 85 },
                { name: "React Native", level: 75 },
                { name: "Java", level: 70 },
                { name: "Go", level: 60 },
            ],
            languages: [
                { name: "Spanish", level: "Native" },
                { name: "English", level: "Fluent (C1)" }
            ],
            soft: [
                "Problem solving",
                "Team collaboration",
                "Project management",
                "Client communication",
                "Time management",
                "Adaptability",
                "Creativity"
            ]
        },
        projects: [
            {
                title: "Frases Marcos Alcón",
                description: "Interactive web application built with Go that displays a collection of phrases and poems by Marcos Alcón in an elegant book format with page flip animations.",
                technologies: ["Go", "HTML", "Javascript", "CSS", "StPageFlip", "Responsive Design"],
                link: "https://frasesmarcosalcon.com",
                thumbnail: "/images/frasesmarcosalcon/frasesmarcosalcon1.jpg"
            },
            {
                title: "Tour To Valencia",
                description: "Modern, multilingual web application built with Remix and React for discovering, exploring, and booking tours and experiences in Valencia, Spain.",
                technologies: ["React", "Remix", "TypeScript", "Tailwind CSS", "MongoDB", "PayPal", "Stripe", "Responsive Design"],
                link: "https://www.tourtovalencia.com",
                thumbnail: "/images/tourtovalencia/tourtovalencia11.jpg"
            },
            {
                title: "Todo List",
                description: "Complete task management application developed with Next.js 15, TypeScript, Tailwind CSS 4 and PostgreSQL with user authentication, drag & drop task management, and multilingual support.",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Responsive Design"],
                link: "https://todolist.jaimedigitalstudio.com/",
                thumbnail: "/images/todolist/todolist6.jpg"
            },
            {
                title: "Guillermo Fernandez Nutrición",
                description: "Website to advertise nutritional consultation services and increase customer acquisition with responsive design adaptable to desktop, tablet, and mobile sizes.",
                technologies: ["Javascript", "CSS", "Astro", "Express.js", "Responsive Design"],
                link: "https://guillermofernandeznutricion.es/",
                thumbnail: "/images/guillermofernandeznutricion.webp"
            },
            {
                title: "Alqueria Villa Carmen",
                description: "Website creation to promote Alqueria Villa Carmen, a restaurant and event hall, featuring daily menus, weekend menus and wine list, plus online reservation capability.",
                technologies: ["PHP", "HTML", "Javascript", "CSS", "MySQL", "Responsive Design"],
                link: "https://alqueriavillacarmen.com/",
                thumbnail: "/images/villacarmen/villacarmen-18.jpg"
            },
            {
                title: "Cat Store",
                description: "Web application for an online cat store developed with PHP, MySQL, HTML, CSS and JavaScript with authentication system, session persistence through cookies, and mobile-responsive design.",
                technologies: ["HTML", "Javascript", "CSS", "PHP", "MySQL", "Responsive Design"],
                link: "https://catstore.jaimedigitalstudio.com",
                thumbnail: "/images/catstore/catstore1.jpg"
            }
        ],
        certifications: [
            {
                name: "Higher Degree in Multiplatform Application Development",
                issuer: "Florida Universitaria",
                date: "2024",
                url: "https://www.floridauniversitaria.es/"
            }
        ],
        interests: [
            "Web development",
            "Open source contribution",
            "UX/UI design",
            "AI integration",
            "Photography",
            "Travel"
        ]
    },
    es: {
        personal: {
            name: "Jaime Digital Studio",
            title: "Desarrollador Full Stack",
            summary: "Desarrollador full stack apasionado con amplia experiencia en tecnologías web modernas. Especializado en la creación de aplicaciones interactivas y de alto rendimiento con React, Next.js y Astro. Fuerte enfoque en la experiencia del usuario y código limpio y mantenible.",
            email: "jaimevillalcon@hotmail.com",
            phone: "+34 692747052",
            location: "Valencia, España",
            website: "jaimedigitalstudio.com",
            socials: [
                {
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/jaimedigitalstudio",
                    icon: "linkedin"
                },
                {
                    name: "GitHub",
                    url: "https://github.com/jaivial",
                    icon: "github"
                },
                {
                    name: "Instagram",
                    url: "https://instagram.com/jaimedigitalstudio",
                    icon: "instagram"
                }
            ]
        },
        experience: [
            {
                position: "Frontend React Developer",
                company: "Knowmad Mood",
                location: "Remoto",
                period: "2023 - Presente",
                description: "Desarrollo frontend con React, implementando buenas prácticas y escalabilidad de código.",
                achievements: [
                    "Construcción de componentes reutilizables",
                    "Testing con Jest y React Testing Library",
                    "Implementación de flujos de datos reactivos con RxJS",
                    "Optimización de rendimiento en aplicaciones web"
                ]
            },
            {
                position: "Desarrollador Web",
                company: "Centro Neuro Expresión",
                location: "Valencia, España",
                period: "2024",
                description: "Desarrollo de sitio web informativo para centro de psicopedagogía con formulario de contacto integrado.",
                achievements: [
                    "Página informativa sobre servicios de psicopedagogía",
                    "Secciones detalladas sobre especialidades del centro",
                    "Formulario de contacto integrado con email",
                    "Diseño totalmente responsive adaptado a todos los dispositivos"
                ]
            },
            {
                position: "Desarrollador Frontend",
                company: "Tour to Valencia",
                location: "Valencia, España",
                period: "2024",
                description: "Desarrollo de plataforma de turismo local con enfoque en experiencias personalizadas y reservas online.",
                achievements: [
                    "Gestor de reservas dinámico para tours",
                    "Generador de páginas para tours de forma dinámica",
                    "Conexión a IA por OpenRouter para traducción de páginas",
                    "Pasarela de pago PayPal integrada con cuenta del cliente",
                    "Sistema de emails para confirmación de reservas"
                ]
            },
            {
                position: "Desarrollador Web",
                company: "Guillermo Fernández Nutrición",
                location: "Valencia, España",
                period: "2023",
                description: "Desarrollo de sitio web profesional para nutricionista con formulario de consulta y blog de contenido nutricional.",
                achievements: [
                    "Diseño responsive adaptado a móviles y tablets",
                    "Formulario de consulta integrado con email",
                    "Blog con categorías de contenido nutricional",
                    "Optimización para motores de búsqueda"
                ]
            },
            {
                position: "Community Manager y Desarrollador Web",
                company: "Alquería Villacarmen",
                location: "Valencia, España",
                period: "2022",
                description: "Gestión de contenido y presencia en redes sociales para este negocio local, mejorando su visibilidad online y captación de clientes. Implementación de sistema de reservas online y carta digital.",
                achievements: [
                    "Aumenté la visibilidad online en un 40%",
                    "Desarrollo e implementación de sistema de reservas online",
                    "Creación de carta digital con gestión dinámica de platos",
                    "Panel de administración personalizado para gestión de reservas"
                ]
            }
        ],
        education: [
            {
                degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
                institution: "Florida Universitaria",
                location: "Valencia, España",
                period: "2022-2024",
                description: "Formación en desarrollo de aplicaciones multiplataforma, adquiriendo conocimientos de programación, bases de datos, interfaces y desarrollo móvil.",
                achievements: [
                    "Desarrollo de aplicaciones móviles con React Native y Android Studio",
                    "Gestión de bases de datos relacionales (MySQL) y no relacionales (MongoDB)",
                    "Programación orientada a objetos con Java y C#",
                    "Control de versiones con Git y comandos Bash"
                ]
            }
        ],
        skills: {
            technical: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 80 },
                { name: "Next.js", level: 85 },
                { name: "Remix", level: 80 },
                { name: "Astro", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "HTML/CSS", level: 95 },
                { name: "MongoDB", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "PostgreSQL", level: 75 },
                { name: "PHP", level: 70 },
                { name: "Node.js", level: 80 },
                { name: "Git", level: 85 },
                { name: "React Native", level: 75 },
                { name: "Java", level: 70 },
                { name: "Go", level: 60 },
            ],
            languages: [
                { name: "Español", level: "Nativo" },
                { name: "Inglés", level: "Fluido (C1)" }
            ],
            soft: [
                "Resolución de problemas",
                "Colaboración en equipo",
                "Gestión de proyectos",
                "Comunicación con clientes",
                "Gestión del tiempo",
                "Adaptabilidad",
                "Creatividad"
            ]
        },
        projects: [
            {
                title: "Frases Marcos Alcón",
                description: "Aplicación web interactiva construida con Go que muestra una colección de frases y poemas de Marcos Alcón en un elegante formato de libro con animaciones de paso de página.",
                technologies: ["Go", "HTML", "Javascript", "CSS", "StPageFlip", "Responsive Design"],
                link: "https://frasesmarcosalcon.com",
                thumbnail: "/images/frasesmarcosalcon/frasesmarcosalcon1.jpg"
            },
            {
                title: "Tour To Valencia",
                description: "Aplicación web moderna y multilingüe construida con Remix y React para descubrir, explorar y reservar tours y experiencias en Valencia, España.",
                technologies: ["React", "Remix", "TypeScript", "Tailwind CSS", "MongoDB", "PayPal", "Stripe", "Responsive Design"],
                link: "https://www.tourtovalencia.com",
                thumbnail: "/images/tourtovalencia/tourtovalencia11.jpg"
            },
            {
                title: "Todo List",
                description: "Aplicación completa de gestión de tareas desarrollada con Next.js 15, TypeScript, Tailwind CSS 4 y PostgreSQL con autenticación de usuarios, gestión de tareas con sistema de arrastrar y soltar, y soporte multilingüe.",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Responsive Design"],
                link: "https://todolist.jaimedigitalstudio.com/",
                thumbnail: "/images/todolist/todolist6.jpg"
            },
            {
                title: "Guillermo Fernandez Nutrición",
                description: "Página web para anunciar los servicios de consulta nutricional y aumentar la captación de clientes con diseño responsivo adaptable a tamaños de escritorio, tablet y móviles.",
                technologies: ["Javascript", "CSS", "Astro", "Express.js", "Responsive Design"],
                link: "https://guillermofernandeznutricion.es/",
                thumbnail: "/images/guillermofernandeznutricion.webp"
            },
            {
                title: "Alqueria Villa Carmen",
                description: "Creación de página web para promocionar Alqueria Villa Carmen, un restaurante y salón de eventos, mostrando los Menús del Día, de Fin de Semana y la carta de vinos, además de permitir reservas online.",
                technologies: ["PHP", "HTML", "Javascript", "CSS", "MySQL", "Responsive Design"],
                link: "https://alqueriavillacarmen.com/",
                thumbnail: "/images/villacarmen/villacarmen-18.jpg"
            },
            {
                title: "Cat Store",
                description: "Aplicación web para una tienda online de gatos desarrollada con PHP, MySQL, HTML, CSS y JavaScript con sistema de autenticación, persistencia de sesión mediante cookies y diseño adaptable a dispositivos móviles.",
                technologies: ["HTML", "Javascript", "CSS", "PHP", "MySQL", "Responsive Design"],
                link: "https://catstore.jaimedigitalstudio.com",
                thumbnail: "/images/catstore/catstore1.jpg"
            }
        ],
        certifications: [
            {
                name: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
                issuer: "Florida Universitaria",
                date: "2024",
                url: "https://www.floridauniversitaria.es/"
            }
        ],
        interests: [
            "Desarrollo web",
            "Contribución a código abierto",
            "Diseño UX/UI",
            "Integración de IA",
            "Fotografía",
            "Viajes"
        ]
    }
};

export default cvData; 