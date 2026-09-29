// Categorización de tecnologías
export const techCategories = {
    frameworks: ["Astro", "Next.js", "Remix", "Vite", "Vike"],
    frontend: ["React", "React 19", "React Native", "Preact", "Tailwind CSS", "Javascript", "Responsive Design", "TypeScript", "Shadcn UI", "Framer Motion", "CSS", "HTML", "Tailwind", "Flutter", "Jotai"],
    backend: ["MongoDB", "Nodemailer", "PostgreSQL", "Prisma", "Express js", "PHP", "MySQL", "Go", "NextAuth.js", "Node.js", "API", "REST API"],
    integrations: ["PayPal", "Stripe", "OpenAI", "SEO", "next-intl", "HTMX", "i18n"],
    devops: ["PM2", "Nginx", "VPS", "Vercel", "Netlify", "Docker"],
    tools: ["VS Code", "Figma", "Postman"],
};

// Función para categorizar las tecnologías del proyecto
export const categorizeTech = (techArray) => {
    const categorized = {
        frameworks: [],
        frontend: [],
        backend: [],
        integrations: [],
        devops: [],
        tools: [],
    };

    techArray?.forEach((tech) => {
        let isFound = false;

        for (const [category, techs] of Object.entries(techCategories)) {
            if (techs.some(t => t.toLowerCase() === tech.toLowerCase())) {
                categorized[category].push(tech);
                isFound = true;
                break;
            }
        }

        // Si no se encuentra en ninguna categoría, agregar a "tools" por defecto
        if (!isFound) {
            categorized.tools.push(tech);
        }
    });

    return categorized;
}; 