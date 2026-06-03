import { toWebPCached, addCacheBusting } from './images.js';

// Base image URLs - automatically converted to WebP with cache-busting
const ras = toWebPCached(`${__CDN_URL__}/ras.webp`);
const joke = toWebPCached(`${__CDN_URL__}/joke.webp`);
const lofi = toWebPCached(`${__CDN_URL__}/lofi.webp`);
const blog = toWebPCached(`${__CDN_URL__}/blog.webp`);
const Carhub = toWebPCached(`${__CDN_URL__}/carhub.webp`);
const AlqueriaVillacarmen = toWebPCached(`${__CDN_URL__}/villacarmendoble.webp`);
const Portfolio = toWebPCached(`${__CDN_URL__}/portfolioweb.webp`)
const GuillermoFernandezNutricion = toWebPCached(`${__CDN_URL__}/images/guillermofernandeznutricion.webp`)
const GuilleImg1 = toWebPCached(`${__CDN_URL__}/assets/images/guilleromofernandeznutricion/guille1.jpg`)
const GuilleImg2 = toWebPCached(`${__CDN_URL__}/assets/images/guilleromofernandeznutricion/guille2.jpg`)
const GuilleImg3 = toWebPCached(`${__CDN_URL__}/assets/images/guilleromofernandeznutricion/guille3.jpg`)
// import GuilleVideo from "../assets/videos/guillermofernandeznutricion/videoguille.mov" // Commented out - video file missing

// Importaciones para Frases Marcos Alcón
const FrasesMarcosAlcon = toWebPCached(`${__CDN_URL__}/assets/images/frasesmarcosalcon/frasesmarcosalcon1.jpg`);
const FrasesMarcosAlconImg1 = toWebPCached(`${__CDN_URL__}/assets/images/frasesmarcosalcon/frasesmarcosalcon1.jpg`);
const FrasesMarcosAlconImg2 = toWebPCached(`${__CDN_URL__}/assets/images/frasesmarcosalcon/frasesmarcosalcon2.jpg`);
const FrasesMarcosAlconImg3 = toWebPCached(`${__CDN_URL__}/assets/images/frasesmarcosalcon/frasesmarcosalcon3.jpg`);
const FrasesMarcosAlconImg4 = toWebPCached(`${__CDN_URL__}/assets/images/frasesmarcosalcon/frasesmarcosalcon4.jpg`);
// import FrasesMarcosAlconVideo1 from "../assets/videos/frasesmarcosalcon/frasesmarcosalcon1.mov" // Commented out - video file missing

// Importaciones para Cat Store
const CatStore = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore1.jpg`);
const CatStoreImg1 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore1.jpg`);
const CatStoreImg2 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore2.jpg`);
const CatStoreImg3 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore3.jpg`);
const CatStoreImg4 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore4.jpg`);
const CatStoreImg5 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore5.jpg`);
const CatStoreImg6 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore6.jpg`);
const CatStoreImg7 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore7.jpg`);
const CatStoreImg8 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore8.jpg`);
const CatStoreImg9 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore9.jpg`);
const CatStoreImg10 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore10.jpg`);
const CatStoreImg11 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore11.jpg`);
const CatStoreImg12 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore12.jpg`);
const CatStoreImg13 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore13.jpg`);
const CatStoreImg14 = toWebPCached(`${__CDN_URL__}/assets/images/catstore/catstore14.jpg`);
// import CatStoreVideo1 from "../assets/videos/catstore/catstore1.mov"
// import CatStoreVideo2 from "../assets/videos/catstore/catstore2.mov"
// import CatStoreVideo3 from "../assets/videos/catstore/catstore3.mov"
// import CatStoreVideo4 from "../assets/videos/catstore/catstore4.mov"
// import CatStoreVideo5 from "../assets/videos/catstore/catstore5.mov"

// Importaciones para Alqueria Villacarmen
const VillacarmenImg1 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-1.jpg`)
const VillacarmenImg2 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-2.jpg`)
const VillacarmenImg3 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-3.jpg`)
const VillacarmenImg4 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-4.jpg`)
const VillacarmenImg5 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-5.jpg`)
const VillacarmenImg6 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-6.jpg`)
const VillacarmenImg7 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-7.jpg`)
const VillacarmenImg8 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-8.jpg`)
const VillacarmenImg9 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-9.jpg`)
const VillacarmenImg10 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-10.jpg`)
const VillacarmenImg11 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-11.jpg`)
const VillacarmenImg12 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-12.jpg`)
const VillacarmenImg13 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-13.jpg`)
const VillacarmenImg14 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-14.jpg`)
const VillacarmenImg15 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-15.jpg`)
const VillacarmenImg16 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-16.jpg`)
const VillacarmenImg17 = toWebPCached(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-17.jpg`)
const VillacarmenImg18 = addCacheBusting(`${__CDN_URL__}/assets/images/villacarmen/villacarmen-18.jpg`)
// import VillacarmenVideo from "../assets/videos/villacarmen/villacarmen-video.mov"

// Importaciones para Tour To Valencia
const TourToValencia = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia11.jpg`);
const TourToValenciaImg1 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia1.jpg`);
const TourToValenciaImg2 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia2.jpg`);
const TourToValenciaImg3 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia3.jpg`);
const TourToValenciaImg4 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia4.jpg`);
const TourToValenciaImg5 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia5.jpg`);
const TourToValenciaImg6 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia6.jpg`);
const TourToValenciaImg7 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia7.jpg`);
const TourToValenciaImg8 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia8.jpg`);
const TourToValenciaImg9 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia9.jpg`);
const TourToValenciaImg10 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia10.jpg`);
const TourToValenciaImg11 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia11.jpg`);
const TourToValenciaImg12 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia12.jpg`);
const TourToValenciaImg13 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia13.jpg`);
const TourToValenciaImg14 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia14.jpg`);
const TourToValenciaImg15 = toWebPCached(`${__CDN_URL__}/assets/images/tourtovalencia/tourtovalencia15.jpg`);
// import TourToValenciaVideo1 from "../assets/videos/tourtovalencia/tourtovalencia1.mov"
// import TourToValenciaVideo2 from "../assets/videos/tourtovalencia/tourtovalencia2.mov"
// import TourToValenciaVideo3 from "../assets/videos/tourtovalencia/tourtovalencia3.mov"
// import TourToValenciaVideo4 from "../assets/videos/tourtovalencia/tourtovalencia4.mov"
// import TourToValenciaVideo5 from "../assets/videos/tourtovalencia/tourtovalencia5.mov"
// import TourToValenciaVideo6 from "../assets/videos/tourtovalencia/tourtovalencia6.mov"
// import TourToValenciaVideo7 from "../assets/videos/tourtovalencia/tourtovalencia7.mov"
// import TourToValenciaVideo8 from "../assets/videos/tourtovalencia/tourtovalencia8.mov"

// Importaciones para Centro Neuro Expresion
const CentroNeuroExpresion = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion1.jpg`);
const CentroNeuroExpresionImg1 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion1.jpg`);
const CentroNeuroExpresionImg2 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion2.jpg`);
const CentroNeuroExpresionImg3 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion3.jpg`);
const CentroNeuroExpresionImg4 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion4.jpg`);
const CentroNeuroExpresionImg5 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion5.jpg`);
const CentroNeuroExpresionImg6 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion6.jpg`);
const CentroNeuroExpresionImg7 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion7.jpg`);
const CentroNeuroExpresionImg8 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion8.jpg`);
const CentroNeuroExpresionImg9 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion9.jpg`);
const CentroNeuroExpresionImg10 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion10.jpg`);
const CentroNeuroExpresionImg11 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion11.jpg`);
const CentroNeuroExpresionImg12 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion12.jpg`);
const CentroNeuroExpresionImg13 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion13.jpg`);
const CentroNeuroExpresionImg14 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion14.jpg`);
const CentroNeuroExpresionImg15 = toWebPCached(`${__CDN_URL__}/images/centroneuroexpresion/centroneuroexpresion15.jpg`);
// import CentroNeuroExpresionVideo1 from "../assets/videos/centroneuroexpresion/centroneuroexpresion1.mov"
// import CentroNeuroExpresionVideo2 from "../assets/videos/centroneuroexpresion/centroneuroexpresion2.mov"
// import CentroNeuroExpresionVideo3 from "../assets/videos/centroneuroexpresion/centroneuroexpresion3.mov"
// import CentroNeuroExpresionVideo4 from "../assets/videos/centroneuroexpresion/centroneuroexpresion4.mov"

// Importaciones para Hero Budget (usando imagen temporal - reemplazar con imágenes reales)
const HeroBudget = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg1.webp`);
const HeroBudgetIcon = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgeticon.png`);
const HeroBudgetImg1 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg1.webp`);
const herobudgetimg1ligh = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg1ligh.png`);
const HeroBudgetImg2 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg2.webp`);
const HeroBudgetImg3 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg3.webp`);
const HeroBudgetImg4 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg4.webp`);
const HeroBudgetImg5 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg5.webp`);
const HeroBudgetImg6 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg6.webp`);
const HeroBudgetImg7 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg7.webp`);
const HeroBudgetImg8 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg8.webp`);
const HeroBudgetImg9 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg9.webp`);
const HeroBudgetImg10 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetimg10.webp`);
const deltaSyncFlow = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/delta-sync-flow.svg`);
const offlineFirstInfographic = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/offline-first-infographic.svg`);
const backendMicroservicesDiagram = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/backend-microservices-diagram.svg`);
const herobudgetbills = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetbills.png`);
const herobudgetdark2 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetdark2.png`);
const herobudgetlight2 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetlight2.png`);
const herobudgetdark3 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetdark3.png`);
const herobudgetdark4 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetdark4.png`);
const herobudgetgoals = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetgoals.png`);
const herobudgetlight3 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetlight3.png`);
const herobudgetlight4 = toWebPCached(`${__CDN_URL__}/assets/images/herobudget/herobudgetlight4.png`);

// Importaciones para MenuStudio AI
const MenuStudioIcon = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/icon.png`);
const MenuStudioF01 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-01.png`);
const MenuStudioF02 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-02.png`);
const MenuStudioF03 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-03.png`);
const MenuStudioF04 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-04.png`);
const MenuStudioF05 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-05.png`);
const MenuStudioF06 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-06.png`);
const MenuStudioF07 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-07.png`);
const MenuStudioF08 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-08.png`);
const MenuStudioF09 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-09.png`);
const MenuStudioF10 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/feature-10.png`);
const TechDiagram01 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/diagrams/01-rest-api-architecture.svg`);
const TechDiagram02 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/diagrams/02-websocket-realtime.svg`);
const TechDiagram03 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/diagrams/03-session-authentication.svg`);
const TechDiagram06 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/diagrams/06-nsfw-ban-system.svg`);
const TechDiagram07 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/diagrams/07-stripe-integration.svg`);
const TechDiagram10 = toWebPCached(`${__CDN_URL__}/assets/images/menustudioai/diagrams/10-admin-panel.svg`);

// MenuStudio AI Features (10 user-facing features from LinkedIn posts)
const menuStudioFeatures = [
  {
    title: "AI Image Generation in <30 Seconds",
    description: "Generate professional food photography from text descriptions instantly. No photographer needed, no expensive equipment, just describe what you want and MenuStudio AI creates it.",
    image: { src: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-09-home-hero.png` },
    videos: [
      { url: `${__CDN_URL__}/posts/videos/dashboard-generate-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-generate-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-generate-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-generate-iphone-light.webm` }
    ]
  },
  {
    title: "AI-Powered Editing in Seconds",
    description: "Remove unwanted objects, enhance lighting, adjust colors, and perfect compositions with AI assistance. Fix 'almost perfect' photos without expensive editing software or design skills.",
    image: MenuStudioF02,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/dashboard-edit-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-edit-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-edit-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-edit-iphone-light.webm` }
    ]
  },
  {
    title: "Turn Photos into 4K Videos",
    description: "Transform static images into engaging cinematic videos with realistic camera movements. 10x higher engagement compared to static images, generated in under 2 minutes.",
    image: MenuStudioF03,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/dashboard-video-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-video-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-video-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-video-iphone-light.webm` }
    ]
  },
  {
    title: "Smart Gallery Management",
    description: "All your content in one place, searchable, categorized, and accessible from any device. Never lose track of your visual assets or use the same photo repeatedly.",
    image: MenuStudioF04,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/dashboard-gallery-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-gallery-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-gallery-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-gallery-iphone-light.webm` }
    ]
  },
  {
    title: "40+ Languages for Global Reach",
    description: "Complete interface translation including prompts, menus, and results. Reach international customers with culturally adapted content in their native language.",
    image: MenuStudioF05,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/profile-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/profile-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/profile-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/profile-iphone-light.webm` }
    ]
  },
  {
    title: "One-Click Distribution",
    description: "Share via link, embed code, or direct download. Platform-optimized formats for social media, websites, and print. Collaborate with team members seamlessly.",
    image: MenuStudioF06,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/home-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/home-desktop-light.webm` }
    ]
  },
  {
    title: "Pay Only for What You Use",
    description: "No monthly subscriptions, no commitment. Credits start at $10 and never expire. Transparent pricing: 2 credits per image, 14 per edit, 80 per video.",
    image: MenuStudioF07,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/credits-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/credits-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/credits-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/credits-iphone-light.webm` }
    ]
  },
  {
    title: "Live Progress Updates",
    description: "Watch your images generate in real-time with WebSocket updates. See progress across all your devices simultaneously. Know exactly when your content is ready.",
    image: MenuStudioF08,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/dashboard-generate-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/dashboard-generate-desktop-light.webm` }
    ]
  },
  {
    title: "Intuitive Design, Zero Learning Curve",
    description: "Glassmorphism aesthetics, spring-based animations, light/dark mode support. Powerful features that feel simple to use - maximum 3 clicks to any action.",
    image: MenuStudioF09,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/home-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/home-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/login-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/login-desktop-light.webm` },
      { url: `${__CDN_URL__}/posts/videos/register-desktop-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/register-desktop-light.webm` }
    ]
  },
  {
    title: "Brand-Safe, Print-Ready Quality",
    description: "NSFW content detection with three-strike ban system. High-resolution outputs optimized for print and digital. Trained specifically on gastronomy imagery.",
    image: MenuStudioF10,
    videos: [
      { url: `${__CDN_URL__}/posts/videos/home-iphone-dark.webm` },
      { url: `${__CDN_URL__}/posts/videos/home-iphone-light.webm` }
    ]
  }
];

// MenuStudio AI Technical Architecture (10 deep-dive sections)
const menuStudioArchitecture = [
  {
    key: "rest-api",
    title: "High-Performance REST API Architecture",
    description: "Built on Elysia.js with Bun runtime achieving 2.5x faster request handling than Node.js. Implements macro-based authorization for route-level access control, TypeBox validation for compile-time type safety, and plugin architecture for Prisma ORM, JWT sessions, WaveSpeed API, and Cloudflare R2 storage.",
    diagram: TechDiagram01
  },
  {
    key: "websocket-realtime",
    title: "Real-Time Multi-Device Synchronization",
    description: "WebSocket server supporting concurrent connections per user across multiple devices. Implements fire-and-forget async processing with background task manager, broadcasting status updates for image generation, credit balance changes, and admin notifications.",
    diagram: TechDiagram02
  },
  {
    key: "session-auth",
    title: "Secure Session-Based Authentication",
    description: "Hybrid JWT + database session system with 30-day user sessions and 8-hour admin sessions. Supports OAuth 2.0 integration with Google and Apple Sign-In. Includes device session tracking for security auditing and instant session revocation for banned users.",
    diagram: TechDiagram03
  },
  {
    key: "image-pipeline",
    title: "Asynchronous AI Image Processing",
    description: "WaveSpeed API integration with background polling mechanism (up to 5 minutes). Implements pre-deduction credit strategy with automatic rollback on failure, retry logic (max 3 attempts), and timeout cleanup to prevent zombie processes."
  },
  {
    key: "content-moderation",
    title: "AI-Powered Content Safety",
    description: "OpenAI Moderation API integration with configurable thresholds for adult content, violence, and explicit material. Fire-and-forget processing pattern allows immediate user access while moderation runs asynchronously in background."
  },
  {
    key: "nsfw-ban-system",
    title: "Progressive Three-Strike Ban Enforcement",
    description: "Atomic database transactions for ban creation, session revocation, and BannedUser table updates. Prevents re-registration via email/deviceId tracking. Includes appeal system with admin review workflow.",
    diagram: TechDiagram06
  },
  {
    key: "stripe-integration",
    title: "Multi-Currency Payment Processing",
    description: "Stripe Checkout Sessions supporting 39 locales with European Central Bank exchange rates (updated daily). Handles zero-decimal currencies (JPY, KRW, VND) correctly. Implements idempotent webhook processing with signature verification and duplicate prevention.",
    diagram: TechDiagram07
  },
  {
    key: "credit-system",
    title: "Transparent Credit Economics",
    description: "Pre-deduction pattern with automatic refunds on API failures. 3.33x markup over WaveSpeed API costs for sustainable margins. Includes timeout cleanup for abandoned processes and double-refund prevention with 'checked' flag."
  },
  {
    key: "database-schema",
    title: "Prisma ORM with MySQL",
    description: "15 models organized into 5 domains: Authentication (User, Session, BannedUser), Content (Image, BackgroundProcess), Payments (Transaction, StripeSession), Moderation (ModerationResult), and Administration (AdminActivityLog, DeviceSession). 40+ strategic indexes for query optimization."
  },
  {
    key: "admin-panel",
    title: "Role-Based Administration Dashboard",
    description: "Three privilege levels (SUPER_ADMIN, MODERATOR, VIEWER) with privilege escalation prevention. Features include 13-parallel analytics queries, revenue prediction with linear regression, device session tracking with UAParser, and comprehensive audit logging for compliance.",
    diagram: TechDiagram10
  }
];

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
        key: "reservation_system",
        title: "Gestor de Reservas Online",
        description: "Sistema avanzado de reservas con calendario que muestra días cerrados, abiertos y completos. El número de personas es condicional según el límite y número de reservas para cada día. Proceso en 4 pasos: selección de fecha y personas, opción de reservar arroz de la base de datos, datos personales con envío de confirmación por email y WhatsApp, y confirmación final con selección de tronas/carros y aceptación de condiciones.",
        carousel: [{ src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-1.jpg` }, { src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-2.jpg` }, { src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-3.jpg` }, { src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-4.jpg` }]
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
        carousel: [{ src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-12.jpg` }, { src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-13.jpg` }]
    },
    {
        title: "Administración de Carta de Vinos",
        description: "Sistema para gestionar la bodega con opciones para añadir, editar, activar o desactivar vinos de la carta, permitiendo actualizar la oferta sin necesidad de eliminar registros.",
        carousel: [{ src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-14.jpg` }, { src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-15.jpg` }, { src: `${__CDN_URL__}/assets/images/villacarmen/villacarmen-16.jpg` }]
    }
];

// Funcionalidades para Car Hub
// Source assets for these features were never created; entry left empty to avoid broken refs.
const carHubFeatures = [];

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
const TodoList = addCacheBusting(`${__CDN_URL__}/assets/images/todolist/todolist6.jpg`)
const TodoListImg1 = toWebPCached(`${__CDN_URL__}/assets/images/todolist/todolist1.jpg`)
const TodoListImg2 = toWebPCached(`${__CDN_URL__}/assets/images/todolist/todolist2.jpg`)
const TodoListImg3 = toWebPCached(`${__CDN_URL__}/assets/images/todolist/todolist3.jpg`)
const TodoListImg4 = toWebPCached(`${__CDN_URL__}/assets/images/todolist/todolist4.jpg`)
const TodoListImg5 = toWebPCached(`${__CDN_URL__}/assets/images/todolist/todolist5.jpg`)
// import TodoListVideo1 from "../assets/videos/todolist/todolist1.mov"
// import TodoListVideo2 from "../assets/videos/todolist/todolist2.mov"
// import TodoListVideo3 from "../assets/videos/todolist/todolist3.mov"
// import TodoListVideo4 from "../assets/videos/todolist/todolist4.mov"

// Funcionalidades para Todo List
const todoListFeatures = [
    {
        title: "Autenticación de usuarios",
        description: "Sistema completo de autenticación con formulario de inicio de sesión conectado a base de datos PostgreSQL, validación de errores, registro de nuevos usuarios y soporte para múltiples idiomas mediante selector integrado. La funcionalidad multilingual está implementada con useContext de React y archivos JSON para las traducciones.",
        // video: TodoListVideo1, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Gestión de tareas con calendario",
        description: "Dashboard con calendario integrado para seleccionar fechas específicas a las que añadir tareas. Las tareas se agregan a la sección de no completadas y el sistema muestra un indicador visual (punto rojo) en las fechas que contienen tareas pendientes. Cada día almacena sus propias tareas de forma independiente.",
        // video: TodoListVideo2, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Edición y eliminación de tareas",
        description: "Funcionalidad para editar y personalizar tareas existentes, así como para eliminar tareas que ya no son necesarias, manteniendo la lista organizada y actualizada según las necesidades del usuario.",
        // video: TodoListVideo3, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Completar tareas y organización por Drag & Drop",
        description: "Las tareas pueden marcarse como completadas mediante el checkbox o utilizando la funcionalidad de arrastrar y soltar (drag & drop) entre las secciones de completadas y pendientes. El sistema actualiza visualmente el estado del día en el calendario, cambiando de punto rojo a verde cuando todas las tareas están completadas.",
        // video: TodoListVideo4, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    }
];

// Funcionalidades para Tour To Valencia
const tourToValenciaFeatures = [
    {
        title: "Diseño Responsive y Multilingüe",
        description: "Diseño web responsive adaptado a todas las pantallas con un estilo elegante implementado con Tailwind CSS. La página inicial incluye un hero section moderno con imágenes intuitivas relacionadas con excursiones. El sitio está configurado con i18n para soporte multilingüe completo (español e inglés) mediante archivos JSON, ofreciendo una experiencia de usuario intuitiva y bien estructurada.",
        // video: TourToValenciaVideo1, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Páginas de Tour Detalladas",
        description: "Páginas individuales para cada tour con UI/UX de alto estándar para captar clientes. Incluyen información sintetizada pero informativa, imágenes de alta calidad, y una sección con diseño excepcional que muestra el itinerario de la excursión etapa por etapa. Finaliza con una tarjeta resumen de características y un botón de llamada a la acción para reservar.",
        // video: TourToValenciaVideo2, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Sistema de Reservas Avanzado",
        description: "Sistema de reservas en 4 pasos más pasarela de pago con PayPal. El proceso incluye: 1) Selección de tour y fecha (con fechas sin disponibilidad bloqueadas), 2) Elección del número de personas (actualizado dinámicamente según disponibilidad), 3) Recogida de datos personales, y 4) Resumen de compra. Tras confirmar, se procede al pago mediante PayPal, se registra la reserva en base de datos y se envían emails de confirmación al cliente y al negocio.",
        // video: TourToValenciaVideo3, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Optimización SEO",
        description: "Página con diseño UI optimizada para cumplir con los estándares SEO, asegurando que las palabras clave relevantes para el negocio aparezcan correctamente posicionadas para mejorar la visibilidad en motores de búsqueda.",
        // video: TourToValenciaVideo4, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Panel de Administración - Gestión de Reservas",
        description: "Área de administración protegida por usuario y contraseña para gestionar reservas y tours. Incluye un calendario para seleccionar fechas, opciones de filtrado por tour y fecha, y ajuste de límites de reservas para adaptarse a fluctuaciones de aforo. Muestra una tabla detallada con información de reservas, estado de pago y método de pago, con opción de filtrado por nombre.",
        // video: TourToValenciaVideo5, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Gestión de Cancelaciones y Reembolsos",
        description: "Sistema para cancelar reservas con opción de reembolso automático a través de PayPal mediante ID de transacción. Incluye una pestaña específica para visualizar reservas canceladas, facilitando el seguimiento y evitando errores de cancelación o malentendidos con los clientes.",
        // video: TourToValenciaVideo6, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Gestor de Tours",
        description: "Sección de administración para crear nuevos tours o editar los existentes. Incluye un editor de páginas que permite activar/desactivar disponibilidad de tours, cambiar precios, actualizar imágenes y GIFs animados, y editar textos de todas las secciones directamente haciendo clic en ellos.",
        // video: TourToValenciaVideo7, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Sistema de Edición con IA",
        description: "Sistema avanzado para editar/crear páginas que optimiza automáticamente las imágenes subidas a formato WebP con tamaño máximo de 100KB. Además, procesa textos mediante inteligencia artificial con API de OpenRouter a un modelo de Gemini, permitiendo al dueño del negocio crear contenido en un solo idioma (español) y traducirlo automáticamente al inglés.",
        // video: TourToValenciaVideo8, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    }
];

// Funcionalidades para Cat Store
const catStoreFeatures = [
    {
        title: "Página Principal y Carrito de Compra",
        description: "Se muestra la página inical de la tienda tras haber iniciado sesión. Se muesta un navbar con las opciones para navegar, el hero section y un grid con los productos (gatos) en la tienda. También se muestra como los productos se añaden al carrito conforme los seleccionas y como al hacer click en el navegador del carrito se abre un drawer para previsualizar el carrito de compra.",
        // video: CatStoreVideo1, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Sistema de Filtros de Productos",
        description: "Se muestra la funcionalidad de aplicar filtros a los productos del grid de la página incial. Cuando se hace click en el icono de filtro se abre un drawer con las diferentes opciones de filtros, los cuales hacen que se actualice el listado de productos. También se pueden ordenar los productos por criterios como nombre, precio y antiguedad.",
        // video: CatStoreVideo2, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Perfil de Usuario",
        description: "Se muestra el area de perfil de usuario. Donde se pueden modificar los datos personales y cambiar la contraseña. También se muestra las estadísticas de compra del usuario y se permite ver el historial de compras del usuario, abriendo una pagina con una tabla del historial de compras de ese usuario.",
        // video: CatStoreVideo3, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Panel de Administración",
        description: "Se muestra el área de administración donde el administrador puede gestionar los productos de la tienda. Se puede ver los productos existentes en una tabla a la cual se le pueden aplicar filtros de búsqueda. También se puede editar un producto existente, añadir un producto o eliminar un producto.",
        // video: CatStoreVideo4, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Proceso de Compra",
        description: "Se muestra el flujo para finalizar una compra. Se hace click en el carrito de la compra, el cual abre el drawer del carrito de compra. Accedemos al area de checkout y vemos el resumen de nuestro carrito de compra con la opción de modificar los elementos de nuestro carrito o vaciar el carrito. Cuando se procede a completar la compra se simula una compra exitosa sin necesidad de pago. Aparece una pantalla de exito.",
        // video: CatStoreVideo5, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    }
];

// Funcionalidades para Frases Marcos Alcón
const frasesMarcosAlconFeatures = [
    {
        title: "Lector de libro interactivo",
        description: "Se muestra la página de frases de Marcos Alcón. Un proyecto hecho para mi abuelo por su 95 cumpleaños recopilando las frases que ha ir escribiendo. Se ha creado una app web para crear un lector de libro con animación de pase de páginas. El sitio es responsive y con una UI y UX excepcional.",
        // video: FrasesMarcosAlconVideo1, // Commented out - video file missing
        image: { src: FrasesMarcosAlcon },
        autoplay: true,
        muted: true,
        loop: true
    }
];

// Funcionalidades para Centro Neuro Expresion
const centroNeuroExpresionFeatures = [
    {
        title: "Landing Page Optimizada",
        description: "Interfaz de usuario y experiencia de usuario perfectamente diseñadas para publicitar el centro de Intervención Temprana para niños. Incluye secciones esenciales como el enfoque de la empresa, servicios ofrecidos, testimonios de casos de éxito y llamadas a la acción para contacto.",
        // video: CentroNeuroExpresionVideo1, // Commented out - video file missing
        // videoPoster: CentroNeuroExpresionImg1, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Página 'Sobre Nosotros'",
        description: "Sección fundamental para empresas de atención al público como este centro de psicopedagogía. Presenta de manera clara y atractiva la misión del centro, su enfoque profesional, el equipo de especialistas y las instalaciones donde se realizan las intervenciones.",
        // video: CentroNeuroExpresionVideo2, // Commented out - video file missing
        // videoPoster: CentroNeuroExpresionImg2, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Página de Contacto",
        description: "Página indispensable que incluye un formulario de contacto intuitivo para los clientes, información detallada sobre la localización del negocio, horario de atención, teléfono, email y un formulario de contacto para consultas específicas.",
        // video: CentroNeuroExpresionVideo3, // Commented out - video file missing
        // videoPoster: CentroNeuroExpresionImg3, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    },
    {
        title: "Página de Servicio Especializado",
        description: "Una de las cuatro páginas dedicadas a explicar los servicios especializados del centro. Este ejemplo muestra el servicio de Intervención Cognitiva Temprana, presentado de forma visual con imágenes representativas de los servicios para familias y niños, explicando en qué consiste y sus beneficios.",
        // video: CentroNeuroExpresionVideo4, // Commented out - video file missing
        // videoPoster: CentroNeuroExpresionImg4, // Commented out - video file missing
        autoplay: true,
        muted: true,
        loop: true
    }
];

// Funcionalidades para Hero Budget
const heroBudgetFeatures = [
    {
        title: "Soporte Multiidioma (20+ Idiomas)",
        description: "Soporte completo de internacionalización con más de 20 traducciones de idiomas incluyendo inglés (US, GB), español (ES, MX, AR), portugués (PT, BR), francés, alemán, italiano, japonés, chino, ruso, holandés, danés, noruego, griego, hindi y catalán. Utiliza i18next para cambio de idioma fluido y localización con soporte de respaldo.",
        image: HeroBudgetImg9
    },
    {
        title: "Autenticación Social Integrada",
        description: "Autenticación sin problemas mediante Google Sign-In y Apple Sign-In utilizando protocolos OAuth 2.0. Soporta registro tradicional con email/contraseña y verificación OTP para mayor seguridad. Implementa autenticación basada en tokens con gestión automática de sesión y funcionalidad de 'recordarme'.",
        image: HeroBudgetImg1
    },
    {
        title: "Sincronización en Tiempo Real entre Dispositivos",
        description: "Protocolo avanzado de delta-sync que permite sincronización de datos en tiempo real entre múltiples dispositivos. Utiliza sincronización basada en operaciones con seguimiento de ID de dispositivo para prevenir operaciones duplicadas. La sincronización en segundo plano se ejecuta automáticamente cuando la aplicación vuelve al primer plano.",
        image: deltaSyncFlow
    },
    {
        title: "Arquitectura Offline-First",
        description: "Funcionalidad completa offline con base de datos local SQLite que soporta todas las operaciones CRUD sin conectividad de red. La cola de sincronización automática gestiona operaciones pendientes cuando se restaura la conexión. Los usuarios pueden rastrear sus finanzas sin problemas incluso sin acceso a internet.",
        image: offlineFirstInfographic
    },
    {
        title: "Dashboard con Analíticas Completas",
        description: "Dashboard interactivo que muestra resúmenes financieros mensuales con visualización de ingresos vs gastos. Seguimiento de balance en tiempo real para cuentas de efectivo y banco. Indicadores visuales de progreso para metas de ahorro y adherencia al presupuesto con indicadores de estado codificados por colores.",
        image: HeroBudgetImg3
    },
    {
        title: "Seguimiento y Gestión de Ingresos",
        description: "Añade y categoriza transacciones de ingresos con categorías personalizadas, métodos de pago (efectivo/banco) y descripciones detalladas. Visualiza el historial de ingresos con filtrado por rango de fechas, categoría y método de pago. Actualizaciones automáticas de balance y resúmenes mensuales de ingresos con análisis de tendencias.",
        image: HeroBudgetImg5
    },
    {
        title: "Gestión y Categorización de Gastos",
        description: "Rastrea todos los gastos con categorías personalizadas, métodos de pago y notas. Sistema inteligente de categorización con iconos emoji para identificación visual. Historial de gastos con capacidades completas de filtrado y búsqueda. Impacto automático en balances de efectivo/banco y resúmenes mensuales de gastos.",
        carousel: [{ src: `${__CDN_URL__}/assets/images/herobudget/herobudgetimg2.webp` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetimg7.webp` }]
    },
    {
        title: "Gestión de Facturas Recurrentes",
        description: "Crea y gestiona facturas recurrentes con horarios de pago flexibles (mensual, semanal, trimestral). Establece días de pago, fechas de vencimiento y duración en meses. Rastrea el estado de pago para cada período con funcionalidad de pago rápido. Recordatorios automáticos para facturas próximas y notificaciones de vencimiento.",
        image: herobudgetbills
    },
    {
        title: "Metas de Ahorro y Seguimiento de Progreso",
        description: "Establece metas de ahorro personalizadas con cantidades objetivo y períodos de seguimiento. Los indicadores visuales de progreso muestran el porcentaje de finalización con estado codificado por colores (en camino, en riesgo, retrasado). Comparación de balance disponible vs meta con métricas detalladas de progreso y celebraciones de hitos.",
        image: herobudgetgoals
    },
    {
        title: "Gestión de Categorías Personalizadas",
        description: "Crea categorías personalizadas ilimitadas para ingresos y gastos con iconos emoji para distinción visual. Edita nombres de categorías, tipos y emojis en cualquier momento. Los cambios de tipo de categoría activan el recálculo automático de todas las transacciones y balances afectados con actualizaciones en cascada.",
        image: HeroBudgetImg2
    },
    {
        title: "Modo Oscuro y Modo Claro",
        description: "Soporte completo para temas oscuro y claro con transiciones suaves. La preferencia de tema persiste a través de sesiones de la aplicación. Esquemas de colores optimizados para legibilidad en todas las condiciones de iluminación. Aplicación automática del tema a todos los componentes de UI y hojas inferiores.",
        carousel: [{ src: `${__CDN_URL__}/assets/images/herobudget/herobudgetimg3.webp` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetimg1ligh.png` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetdark2.png` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetlight2.png` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetdark3.png` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetlight3.png` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetdark4.png` }, { src: `${__CDN_URL__}/assets/images/herobudget/herobudgetlight4.png` }]
    },
    {
        title: "Microservicios Backend en Go",
        description: "Backend construido con Go usando arquitectura de espacio de trabajo multi-módulo (go.work). Microservicios separados para gestión de presupuesto, ahorros, datos de dashboard, gastos e ingresos. API RESTful con manejo de errores estructurado y gestión de tiempo de espera basada en contexto. Registro completo para depuración y monitoreo.",
        image: backendMicroservicesDiagram
    }
];

// ===== Importaciones GR Cup Backoffice =====
const GrCupBackoffice = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/02-dashboard.webp');
const GrCupBackoffice01login = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/01-login.webp');
const GrCupBackoffice02dashboard = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/02-dashboard.webp');
const GrCupBackoffice03inscripciones = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/03-inscripciones.webp');
const GrCupBackoffice04participantes = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/04-participantes.webp');
const GrCupBackoffice05sorteo = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/05-sorteo.webp');
const GrCupBackoffice06raffleconfig = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/06-raffle-config.webp');
const GrCupBackoffice07horarios = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/07-horarios.webp');
const GrCupBackoffice08cupones = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/08-cupones.webp');
const GrCupBackoffice09qrreader = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/09-qr-reader.webp');
const GrCupBackoffice10checkin = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/10-checkin.webp');
const GrCupBackoffice11judgetable = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/11-judge-table.webp');
const GrCupBackoffice12workspaces = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/12-workspaces.webp');
const GrCupBackoffice13users = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/13-users.webp');
const GrCupBackoffice14roles = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/14-roles.webp');
const GrCupBackoffice15configuracion = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/15-configuracion.webp');
const GrCupBackoffice16inscripcionconfig = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/16-inscripcion-config.webp');
const GrCupBackoffice17dashboardscroll = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/17-dashboard-scroll.webp');
const GrCupBackoffice18inscripcionesdetail = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/18-inscripciones-detail.webp');
const GrCupBackoffice19userslist = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/19-users-list.webp');
const GrCupBackoffice20dashboardmobile = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/20-dashboard-mobile.webp');
const GrCupBackoffice21loginhero = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-backoffice/21-login-hero.webp');

// ===== Importaciones FER Web (fercup.com) =====
const FerWeb = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/11-landing-hero.webp');
const FerWeb01landing = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/01-landing.webp');
const FerWeb02modalidades = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/02-modalidades.webp');
const FerWeb03horarios = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/03-horarios.webp');
const FerWeb04ubicacion = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/04-ubicacion.webp');
const FerWeb05galeria = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/05-galeria.webp');
const FerWeb06sobrenosotros = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/06-sobre-nosotros.webp');
const FerWeb07tutoriales = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/07-tutoriales.webp');
const FerWeb08inscripcion = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/08-inscripcion.webp');
const FerWeb09terminos = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/09-terminos.webp');
const FerWeb10privacidad = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/10-privacidad.webp');
const FerWeb11landinghero = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/11-landing-hero.webp');
const FerWeb12landingscroll1 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/12-landing-scroll-1.webp');
const FerWeb13landingscroll2 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/13-landing-scroll-2.webp');
const FerWeb14landingscroll3 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/14-landing-scroll-3.webp');
const FerWeb15inscripcionform = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/15-inscripcion-form.webp');
const FerWeb16modalidadesdetail = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/16-modalidades-detail.webp');
const FerWeb17galeriasscroll = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/17-galeria-scroll.webp');
const FerWeb18equipo = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/18-equipo.webp');
const FerWeb19landingmobile = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/19-landing-mobile.webp');
const FerWeb20inscripcionmobile = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/20-inscripcion-mobile.webp');
const FerWeb21ubicaciondetail = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/fercup-ferweb/21-ubicacion-detail.webp');

// ===== Importaciones GR Cup Frontend (sorteo) =====
const GrCupFrontend = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/05-raffle.webp');
const GrCupFrontend02inscripcion = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/02-inscripcion.webp');
const GrCupFrontend03checkout = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/03-checkout.webp');
const GrCupFrontend04success = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/04-success.webp');
const GrCupFrontend05raffle = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/05-raffle.webp');
const GrCupFrontend06horarios = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/06-horarios.webp');
const GrCupFrontend07ubicacion = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/07-ubicacion.webp');
const GrCupFrontend08backofficelogin = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/08-backoffice-login.webp');
const GrCupFrontend09politicaconcurso = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/09-politica-concurso.webp');
const GrCupFrontend10terminos = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/10-terminos.webp');
const GrCupFrontend11privacidad = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/11-privacidad.webp');
const GrCupFrontend12consentimiento = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/12-consentimiento.webp');
const GrCupFrontend17raffleframes = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/17-raffle-frames.webp');
const GrCupFrontend18raffledetail = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/18-raffle-detail.webp');
const GrCupFrontend19checkoutform = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/19-checkout-form.webp');
const GrCupFrontend20successdetail = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/20-success-detail.webp');
const GrCupFrontend21inscripcionform = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/21-inscripcion-form.webp');
const GrCupFrontend23backofficehero = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/23-backoffice-hero.webp');
const GrCupFrontend24politicascroll = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/24-politica-scroll.webp');
const GrCupFrontend30raffle1 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/30-raffle-1.webp');
const GrCupFrontend31raffle2 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/31-raffle-2.webp');
const GrCupFrontend32raffle3 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/32-raffle-3.webp');
const GrCupFrontend33raffle4 = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/33-raffle-4.webp');
const GrCupFrontend34checkout = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/34-checkout.webp');
const GrCupFrontend35politica = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/35-politica.webp');
const GrCupFrontend36mapa = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/36-mapa.webp');
const GrCupFrontend37success = toWebPCached('https://jaimedigitalstudio.b-cdn.net/images/grcup-frontend/37-success.webp');

const grCupBackofficeFeatures = [
  {
    title: "Dashboard con KPIs financieros",
    description: "Vista general del estado de cada competicion: ingresos por Stripe, efectivo y banco, total de participantes, tickets vendidos y metricas clave en tiempo real.",
    image: { src: GrCupBackoffice02dashboard }
  },
  {
    title: "Gestion de inscripciones y atletas",
    description: "Tabla con busqueda, filtros por competicion, exportacion a CSV/PDF, edicion en linea de lift entries, atletas y categorias de peso.",
    image: { src: GrCupBackoffice03inscripciones }
  },
  {
    title: "Lector QR para check-in de atletas",
    description: "Escaneo en vivo con html5-qrcode. Valida identidad del atleta, marca asistencia y registra el pago de tickets desde un solo lugar.",
    image: { src: GrCupBackoffice09qrreader }
  },
  {
    title: "Mesa de jueces con votaciones en vivo",
    description: "Pantalla tactil para jueces con intentos, pesos propuestos y votacion individual. Sincronizacion en tiempo real entre todos los jueces.",
    image: { src: GrCupBackoffice11judgetable }
  },
  {
    title: "Check-in masivo y validacion",
    description: "Validacion por QR o DNI, registro de hora de entrada, lista negra automatica y marcaje automatico en Inscripciones.",
    image: { src: GrCupBackoffice10checkin }
  },
  {
    title: "Sistema de sorteo y premios",
    description: "Gestion de productos rifados, numeros ganadores, animacion de sorteo y notificacion automatica a ganadores por email.",
    image: { src: GrCupBackoffice05sorteo }
  },
  {
    title: "Cupones de descuento y referidos",
    description: "Codigos personalizados, plan de referidos con tracking, descuento porcentual o fijo y limite de uso por cupon.",
    image: { src: GrCupBackoffice08cupones }
  },
  {
    title: "Bloques horarios publicables",
    description: "Configuracion de bloques por competicion, categoria de peso y dia. Publicacion controlada para que los atletas solo vean lo aprobado.",
    image: { src: GrCupBackoffice07horarios }
  },
  {
    title: "Miembros del workspace con roles",
    description: "Gestion de usuarios, asignacion de roles por competicion, permisos granulares (system:* y comp:N:*) y detalle por miembro.",
    image: { src: GrCupBackoffice13users }
  },
  {
    title: "Configuracion, email y Stripe",
    description: "Ajustes de email (SMTP/Gmail), claves de Stripe, parametrizacion general del evento y personalizacion de marca.",
    image: { src: GrCupBackoffice15configuracion }
  }
];

const ferWebFeatures = [
  {
    title: "Hero animado con Framer Motion",
    description: "Animaciones de entrada, scroll-linked effects, paleta mistica FER con tipografia Fugaz One. Diseno cinematico que marca el tono del evento desde el primer pixel.",
    image: { src: FerWeb11landinghero }
  },
  {
    title: "Modalidades de powerlifting",
    description: "Detalle de sentadilla, press de banca y peso muerto con reglamento IPF/equipado, categorias y records por division.",
    image: { src: FerWeb02modalidades }
  },
  {
    title: "Calendario y horarios del evento",
    description: "Bloques por dia, plataforma de salida, calentamiento y breaks. Datos en vivo desde el backend para reflejar cambios de ultima hora.",
    image: { src: FerWeb03horarios }
  },
  {
    title: "Mapa interactivo y como llegar",
    description: "Google Maps embebido, direccion del pabellon, parking, transporte publico y hoteles cercanos.",
    image: { src: FerWeb04ubicacion }
  },
  {
    title: "Galeria de ediciones anteriores",
    description: "Carrusel de imagenes en alta resolucion con lazy load y lightbox. Memorias visuales de cada FER Cup.",
    image: { src: FerWeb05galeria }
  },
  {
    title: "Historia del equipo y comunidad",
    description: "Seccion con timeline, equipo organizador, valores y como FER Powerlifting nacio como evento independiente.",
    image: { src: FerWeb06sobrenosotros }
  },
  {
    title: "Tutoriales y normativa visual",
    description: "Guias paso a paso para atletas novatos: como inscribirse, equipacion valida, comandos en plataforma y sanciones.",
    image: { src: FerWeb07tutoriales }
  },
  {
    title: "Formulario de inscripcion con Zod",
    description: "Validacion robusta de cada paso (datos personales, categoria de peso, modalidad, pago) con Zod + react-hook-form.",
    image: { src: FerWeb08inscripcion }
  },
  {
    title: "Inscripcion multi-paso responsive",
    description: "Wizard mobile-first con guardado automatico, resumen lateral y soporte para pago via Stripe o transferencia.",
    image: { src: FerWeb15inscripcionform }
  },
  {
    title: "Vista movil optimizada",
    description: "Diseno mobile-first con menu hamburguesa, secciones colapsables y CTAs accesibles en cualquier pantalla.",
    image: { src: FerWeb19landingmobile }
  }
];

const grCupFrontendFeatures = [
  {
    title: "Composicion cinematica con scroll frames",
    description: "313 frames de un trofeo dibujado a mano desplegados segun el progreso de scroll. Compositor Remotion + HyperFrames que da al sorteo un look de trailer.",
    image: { src: GrCupFrontend05raffle }
  },
  {
    title: "Animacion frame-by-frame con FrameAnimator",
    description: "Preload inteligente de frames, sincronizacion con scroll progress, transiciones suaves entre estados del trofeo.",
    image: { src: GrCupFrontend30raffle1 }
  },
  {
    title: "Detalle de tickets y numeros del sorteo",
    description: "Listado completo de numeros asignados, comprados y disponibles con busqueda y filtros por participante.",
    image: { src: GrCupFrontend18raffledetail }
  },
  {
    title: "Checkout con Stripe y validacion",
    description: "Seleccion de cantidad, formulario de datos, validacion con Zod, redireccion a Stripe Checkout y webhook de confirmacion.",
    image: { src: GrCupFrontend19checkoutform }
  },
  {
    title: "Pasarela de pago integrada",
    description: "Stripe Checkout, soporte para tarjeta, Apple Pay y Google Pay. Comprobante enviado por email y recordatorio en el perfil.",
    image: { src: GrCupFrontend03checkout }
  },
  {
    title: "Pantalla de exito con QR del ticket",
    description: "Codigo QR unico por compra, botones de compartir en redes sociales, descarga de PDF con todos los numeros asignados.",
    image: { src: GrCupFrontend04success }
  },
  {
    title: "Inscripcion publica al sorteo",
    description: "Formulario accesible con prefill, validacion de email y telefono, y resumen de compra antes de pagar.",
    image: { src: GrCupFrontend02inscripcion }
  },
  {
    title: "Horarios publicos de la competicion",
    description: "Calendario por dia, plataforma y categoria. Datos en vivo del backend con cache y revalidacion periodica.",
    image: { src: GrCupFrontend06horarios }
  },
  {
    title: "Como llegar al evento",
    description: "Mapa, direccion, transporte y enlaces a Google Maps / Waze con un solo tap.",
    image: { src: GrCupFrontend07ubicacion }
  },
  {
    title: "Bases legales del concurso",
    description: "Texto legal completo: bases, requisitos de participacion, fechas, premios, fiscalidad y contacto del organizador.",
    image: { src: GrCupFrontend09politicaconcurso }
  }
];

const data = [
    {
        name: "Hero Budget",
        type: "Aplicación Móvil - Gestión de Finanzas Personales",
        url: "https://apps.apple.com/es/app/hero-budget/id6746946502?l=en-GB",
        github: "https://github.com/jaivial/HerobudgetReact",
        image: { src: `${__CDN_URL__}/assets/images/herobudget/herobudgeticon.png` },
        slug: "hero-budget",
        description: "Hero Budget es una aplicación móvil completa de gestión de finanzas personales desarrollada con React Native y TypeScript. La aplicación proporciona a los usuarios herramientas potentes para rastrear ingresos, gastos, facturas recurrentes y metas de ahorro con sincronización en tiempo real entre múltiples dispositivos. Presenta una interfaz moderna e intuitiva con soporte para temas claro y oscuro, localización multiidioma (más de 20 idiomas), y arquitectura offline-first con sincronización automática en la nube. El backend está impulsado por una robusta arquitectura de microservicios en Go desplegada en VPS con proxy inverso NGINX, asegurando alto rendimiento y fiabilidad.",
        tech: ["React Native", "TypeScript", "Go", "SQLite", "React Navigation", "Jotai", "i18next", "OAuth 2.0", "Jest", "RESTful API", "VPS", "Nginx", "Responsive Design"],
        date: "2024-11-15",
        images: [
            { url: HeroBudgetImg1, alt: 'Pantalla principal con dashboard de Hero Budget' },
            { url: HeroBudgetImg2, alt: 'Gestión de ingresos y gastos' },
            { url: HeroBudgetImg3, alt: 'Sistema de facturas recurrentes' },
            { url: HeroBudgetImg4, alt: 'Metas de ahorro y progreso' },
            { url: HeroBudgetImg5, alt: 'Panel de administración de categorías' },
            { url: HeroBudgetImg6, alt: 'Gestión de cuentas y balances' },
            { url: HeroBudgetImg7, alt: 'Historial de transacciones' },
            { url: HeroBudgetImg8, alt: 'Análisis de categorías principales' },
            { url: HeroBudgetImg9, alt: 'Perfil de usuario' },
            { url: HeroBudgetImg10, alt: 'Modo oscuro y claro' },
            { url: deltaSyncFlow, alt: 'Sincronización en tiempo real' },
            { url: offlineFirstInfographic, alt: 'Arquitectura offline-first' },
            { url: backendMicroservicesDiagram, alt: 'Arquitectura de microservicios en backend' },
            { url: herobudgetbills, alt: 'Gestión de facturas recurrentes' },
            { url: herobudgetgoals, alt: 'Gestión de metas de ahorro' },
            { url: herobudgetimg1ligh, alt: 'Dashboard modo claro' },
            { url: herobudgetdark2, alt: 'Dashboard modo oscuro' },
            { url: herobudgetlight2, alt: 'Dashboard modo claro' },
            { url: herobudgetdark3, alt: 'Dashboard modo oscuro' },
            { url: herobudgetlight3, alt: 'Dashboard modo claro' },
            { url: herobudgetdark4, alt: 'Dashboard modo oscuro' },
            { url: herobudgetlight4, alt: 'Dashboard modo claro' },
        ],
        videos: [],
        features: heroBudgetFeatures
    },
    {
        name: "MenuStudio AI",
        type: "Full-Stack SaaS Platform - AI Image Generation",
        url: "https://menustudioai.com",
        github: "https://github.com/jaivial/menustudioai",
        image: { src: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-09-home-hero.png` },
        slug: "menustudio-ai",
        date: "2025-12-29",
        description: "MenuStudio AI is a comprehensive SaaS platform that leverages artificial intelligence to generate professional food photography for restaurants and hospitality businesses. Built with a modern tech stack including React + Vite frontend and Elysia.js backend on Bun runtime, it offers text-to-image generation, AI-powered editing, video creation, and multi-language support for 40+ languages. The platform includes a flexible credit-based pricing system with Stripe integration, real-time WebSocket updates for live processing feedback, content moderation with NSFW detection, and a comprehensive admin panel for analytics and user management.",
        tech: [
            "React", "Vite", "TypeScript", "Jotai", "Tailwind CSS",
            "Elysia.js", "Bun", "Prisma ORM", "MySQL",
            "WaveSpeed API", "Cloudflare R2", "OpenAI API",
            "Stripe", "JWT", "Session Auth", "OAuth 2.0",
            "WebSocket", "i18n", "REST API", "VPS Deployment"
        ],
        images: [
            // Main hero image
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-09-home-hero.png`, alt: "MenuStudio AI Home Hero" },

            // Instagram post images - Light theme
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-01-text-to-image.png`, alt: "Text to Image Generation" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-02-ai-editing.png`, alt: "AI-Powered Editing" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-03-generate-video.png`, alt: "Video Generation" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-04-gallery.png`, alt: "Gallery Management" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-05-multi-language.png`, alt: "Multi-Language Support" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-06-share-modal.png`, alt: "Share & Collaborate" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-07-credits-pricing.png`, alt: "Credit Pricing System" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-08-realtime-processing.png`, alt: "Real-Time Processing" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/ig-post-10-professional-results.png`, alt: "Professional Results" },

            // Instagram post images - Dark theme
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-01-text-to-image-dark.png`, alt: "Text to Image Generation (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-02-edit-image-dark.png`, alt: "AI Image Editing (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-03-generate-video-dark.png`, alt: "Video Generation (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-04-gallery-dark.png`, alt: "Gallery Management (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-05-multi-language-dark.png`, alt: "Multi-Language Support (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-06-share-modal-dark.png`, alt: "Share & Collaborate (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-07-credits-pricing-dark.png`, alt: "Credit Pricing System (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-08-realtime-processing-dark.png`, alt: "Real-Time Processing (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-09-home-hero-dark.png`, alt: "Home Hero (Dark)" },
            { url: `${__CDN_URL__}/posts/instagram/posts/images/instagram-post-10-professional-results-dark.png`, alt: "Professional Results (Dark)" },

            // iPhone mobile screenshots - Dark theme
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-01-text-to-image-dark.png`, alt: "Mobile: Text to Image (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-02-edit-image-dark.png`, alt: "Mobile: Edit Image (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-03-generate-video-dark.png`, alt: "Mobile: Generate Video (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-04-gallery-dark.png`, alt: "Mobile: Gallery (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-05-share-modal-dark.png`, alt: "Mobile: Share Modal (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-06-credits-pricing-dark.png`, alt: "Mobile: Credits Pricing (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-07-home-hero-dark.png`, alt: "Mobile: Home Hero (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-08-language-selector-dark.png`, alt: "Mobile: Language Selector (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-09-features-bento-dark.png`, alt: "Mobile: Features Bento (Dark)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-10-features-more-dark.png`, alt: "Mobile: More Features (Dark)" },

            // iPhone mobile screenshots - Light theme
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-01-text-to-image-light.png`, alt: "Mobile: Text to Image (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-02-edit-image-light.png`, alt: "Mobile: Edit Image (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-03-generate-video-light.png`, alt: "Mobile: Generate Video (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-04-gallery-light.png`, alt: "Mobile: Gallery (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-05-share-modal-light.png`, alt: "Mobile: Share Modal (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-06-credits-pricing-light.png`, alt: "Mobile: Credits Pricing (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-07-home-hero-light.png`, alt: "Mobile: Home Hero (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-08-language-selector-light.png`, alt: "Mobile: Language Selector (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-09-features-bento-light.png`, alt: "Mobile: Features Bento (Light)" },
            { url: `${__CDN_URL__}/posts/iphone/images/iphone-10-features-more-light.png`, alt: "Mobile: More Features (Light)" },

            // Technical diagrams
            { url: TechDiagram01, alt: "REST API Architecture" },
            { url: TechDiagram02, alt: "WebSocket Real-Time" },
            { url: TechDiagram03, alt: "Session Authentication" },
            { url: TechDiagram06, alt: "NSFW Ban System" },
            { url: TechDiagram07, alt: "Stripe Integration" },
            { url: TechDiagram10, alt: "Admin Panel" }
        ],
        videos: [],
        features: menuStudioFeatures,
        technicalArchitecture: menuStudioArchitecture
    },
    {
        name: "Frases Marcos Alcón",
        type: "Aplicación Web Interactiva",
        url: "https://frasesmarcosalcon.com",
        github: "https://github.com/jaivial/frasesmarcosalcon.git",
        image: { src: FrasesMarcosAlcon },
        slug: "frases-marcos-alcon",
        description: "MarcosGoWeb es una elegante aplicación web construida con Go que muestra una colección de frases y poemas de Marcos Alcón. La aplicación presenta el contenido en un hermoso formato de libro interactivo con animaciones de paso de página, creando una experiencia de lectura inmersiva. Desarrollada como un regalo especial para el 95 cumpleaños de mi abuelo.",
        tech: ["Go", "HTML", "Javascript", "CSS", "StPageFlip", "VPS", "Nginx", "Responsive Design"],
        date: "2024-07-01",
        images: [
            { url: FrasesMarcosAlconImg1, alt: 'Página principal de Frases Marcos Alcón' },
            { url: FrasesMarcosAlconImg2, alt: 'Vista del libro interactivo' },
            { url: FrasesMarcosAlconImg3, alt: 'Detalle de frases y poemas' },
            { url: FrasesMarcosAlconImg4, alt: 'Vista responsiva en dispositivo móvil' }
        ],
        videos: [
            // { url: FrasesMarcosAlconVideo1, poster: FrasesMarcosAlconImg1 } // Commented out - video file missing
        ],
        features: frasesMarcosAlconFeatures
    },
    {
        name: "Tour To Valencia",
        type: "Página Web + Sistema de Reservas + Back Office",
        url: "https://www.tourtovalencia.com",
        github: "https://github.com/jaivial/tourtovalencia.git",
        image: { src: TourToValencia },
        slug: "tour-to-valencia",
        description: "Tour To Valencia es una aplicación web moderna y multilingüe (inglés/español) construida con Remix y React que permite a los usuarios descubrir, explorar y reservar tours y experiencias en Valencia, España. La plataforma ofrece una experiencia de reserva fluida con procesamiento de pagos integrado a través de PayPal y Stripe, confirmaciones por correo electrónico y un completo panel de administración para gestionar reservas y contenido de tours.",
        tech: ["React", "Remix", "TypeScript", "Tailwind CSS", "MongoDB", "PayPal", "Stripe", "Nodemailer", "Shadcn UI", "Framer Motion", "i18n", "PM2", "VPS", "Nginx", "OpenAI", "Responsive Design"],
        date: "2024-06-01",
        images: [
            { url: TourToValenciaImg1, alt: 'Página principal de Tour To Valencia' },
            { url: TourToValenciaImg2, alt: 'Detalle de tour' },
            { url: TourToValenciaImg3, alt: 'Sistema de reservas' },
            { url: TourToValenciaImg4, alt: 'Página SEO optimizada' },
            { url: TourToValenciaImg5, alt: 'Panel de administración' },
            { url: TourToValenciaImg6, alt: 'Gestión de cancelaciones' },
            { url: TourToValenciaImg7, alt: 'Editor de tours' },
            { url: TourToValenciaImg8, alt: 'Sistema de edición con IA' },
            { url: TourToValenciaImg9, alt: 'Vista adicional 1' },
            { url: TourToValenciaImg10, alt: 'Vista adicional 2' },
            { url: TourToValenciaImg11, alt: 'Vista adicional 3' },
            { url: TourToValenciaImg12, alt: 'Vista adicional 4' },
            { url: TourToValenciaImg13, alt: 'Vista adicional 5' },
            { url: TourToValenciaImg14, alt: 'Vista adicional 6' },
            { url: TourToValenciaImg15, alt: 'Vista adicional 7' }
        ],
        videos: [
            // { url: TourToValenciaVideo1, poster: TourToValenciaImg1 }, // Commented out - video file missing
            // { url: TourToValenciaVideo2, poster: TourToValenciaImg2 }, // Commented out - video file missing
            // { url: TourToValenciaVideo3, poster: TourToValenciaImg3 }, // Commented out - video file missing
            // { url: TourToValenciaVideo4, poster: TourToValenciaImg4 }, // Commented out - video file missing
            // { url: TourToValenciaVideo5, poster: TourToValenciaImg5 }, // Commented out - video file missing
            // { url: TourToValenciaVideo6, poster: TourToValenciaImg6 }, // Commented out - video file missing
            // { url: TourToValenciaVideo7, poster: TourToValenciaImg7 }, // Commented out - video file missing
            // { url: TourToValenciaVideo8, poster: TourToValenciaImg8 } // Commented out - video file missing
        ],
        features: tourToValenciaFeatures
    },
    {
        name: "Guillermo Fernandez Nutrición",
        type: "Página Web + Email",
        url: "https://guillermofernandeznutricion.es/",
        github: "https://github.com/jaivial/astrowebsite.git",
        image: { src: `${__CDN_URL__}/images/guillermofernandeznutricion.webp` },
        slug: "guillermo-fernandez-nutricion",
        description: "Página web para anunciar los servicios de consulta nutricional y aumentar la captación de clientes. Permite que los clientes realicen una primera consulta por un formulario de contacto. Diseño responsivo adaptable a tamaños de escritorio, tablet y móviles. Desarrollado con Astro para el front end y PHP para el backend del formulario de contacto. Las fotos y el contenido creativo fue elaborado por mi.",
        tech: ['Javascript', 'CSS', 'Astro', 'Express js', 'VPS', 'Nginx', 'Responsive Design'],
        date: "2023-08-15",
        // Galería de imágenes del proyecto
        images: [
            { url: GuilleImg1, alt: 'Servicios Nutricionales Especializados' },
            { url: GuilleImg2, alt: 'Solicitud de Consulta Online' },
            { url: GuilleImg3, alt: 'Presentación Profesional del Nutricionista' },
        ],
        videos: [
            // { url: GuilleVideo, poster: GuilleImg1 } // Commented out - video file missing
        ],
        // Funcionalidades del proyecto con imágenes o videos explicativos
        features: guillermoFernandezFeatures
    },
    {
        name: "Alqueria Villa Carmen",
        type: "Página Web + Gestor de Reservas + Back Office",
        url: "https://alqueriavillacarmen.com/",
        github: "https://github.com/jaivial/villacarmen.git",
        image: { src: VillacarmenImg18 },
        slug: "alqueria-villacarmen",
        description: "Creación de página web para promocionar Alqueria Villa Carmen, un restaurante y salón de eventos. Destaca por mostrar los Menús del Día, de Fin de Semana y la carta de vinos, además de permitir reservas online. Incluye un gestor de reservas con funciones como límite diario de reservas, confirmación por correo electrónico y administración de reservas. La reserva online aumenta en un 300% la clientela. Además, las cartas son editables en tiempo real y desde dispositivos móviles, permitiendo cambios en fotos, descripciones y platos.",
        tech: ['PHP', 'HTML', 'Javascript', 'CSS', 'MySQL', 'VPS', 'Nginx', 'Responsive Design'],
        date: "2022-11-10",
        images: [
            { url: VillacarmenImg1, alt: 'Gestor de Reservas - Selección Fecha y Personas' },
            { url: VillacarmenImg2, alt: 'Gestor de Reservas - Selección de Arroz' },
            { url: VillacarmenImg3, alt: 'Gestor de Reservas - Datos Personales' },
            { url: VillacarmenImg4, alt: 'Gestor de Reservas - Confirmación' },
            { url: VillacarmenImg5, alt: 'Carta Dinámica de Platos' },
            { url: VillacarmenImg6, alt: 'Carta de Vinos Dinámica' },
            { url: VillacarmenImg7, alt: 'Administración - Calendario de Reservas' },
            { url: VillacarmenImg8, alt: 'Administración - Tabla de Gestión de Reservas' },
            { url: VillacarmenImg9, alt: 'Administración - Control de Aforo' },
            { url: VillacarmenImg10, alt: 'Administración - Gestión de Horarios' },
            { url: VillacarmenImg11, alt: 'Administración - Reservas Manuales' },
            { url: VillacarmenImg12, alt: 'Administración - Gestión de Platos' },
            { url: VillacarmenImg13, alt: 'Administración - Edición de Platos y Alérgenos' },
            { url: VillacarmenImg14, alt: 'Administración - Gestión de Vinos' },
            { url: VillacarmenImg15, alt: 'Administración - Lista de Vinos' },
            { url: VillacarmenImg16, alt: 'Administración - Edición de Vinos' },
            { url: VillacarmenImg17, alt: 'Vista General del Restaurante' },
            { url: VillacarmenImg18, alt: 'Imagen Principal del Proyecto' }
        ],
        videos: [
            // { url: VillacarmenVideo, poster: VillacarmenImg1 } // Commented out - video file missing
        ],
        features: alqueriaFeatures
    },
    {
        name: "Car Hub",
        type: "Página Web",
        url: "https://carhubpi.000webhostapp.com/index.php",
        github: "/",
        image: { src: `${__CDN_URL__}/carhub.webp` },
        slug: "car-hub",
        description: "Descubre nuestro sitio web dedicado a presentar el software Car Hub, un portal de compra y venta de coches. Se destacan las funcionalidades del software, resaltando sus virtudes y su utilidad para nuestros clientes. Desarrollada con las últimas tecnologías en HTML y PHP, ofrece un diseño responsive que se adapta a cualquier dispositivo. Además, facilitamos la comunicación mediante un formulario de contacto vía email con nuestro equipo de desarrolladores.",
        tech: ['HTML', 'Javascript', 'CSS', 'PHP', 'VPS', 'Nginx', 'Responsive Design'],
        date: "2022-05-22",
        images: placeholderImages,
        videos: [],
        features: carHubFeatures
    },
    {
        name: "Todo List",
        type: "Aplicación Web Full-Stack",
        url: "https://todolist.jaimedigitalstudio.com/",
        github: "https://github.com/jaivial/to-do-list",
        image: { src: TodoList },
        slug: "todo-list",
        description: "Aplicación completa de gestión de tareas desarrollada con Next.js 15, TypeScript, Tailwind CSS 4 y PostgreSQL. Ofrece autenticación de usuarios, gestión de tareas con un sistema de arrastrar y soltar (drag & drop), integración con calendario, y soporte multilingüe. La aplicación permite crear, editar, eliminar y marcar tareas como completadas, con una visualización clara del estado de las tareas por día en el calendario.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js", "next-intl", "VPS", "Nginx", "Responsive Design"],
        date: "2023-10-15",
        images: [
            { url: TodoListImg1, alt: 'Pantalla de inicio de sesión' },
            { url: TodoListImg2, alt: 'Dashboard con calendario' },
            { url: TodoListImg3, alt: 'Gestión de tareas' },
            { url: TodoListImg4, alt: 'Tareas completadas' },
            { url: TodoListImg5, alt: 'Vista móvil responsiva' }
        ],
        videos: [
            // { url: TodoListVideo1, poster: TodoListImg1 }, // Commented out - video file missing
            // { url: TodoListVideo2, poster: TodoListImg2 }, // Commented out - video file missing
            // { url: TodoListVideo3, poster: TodoListImg3 }, // Commented out - video file missing
            // { url: TodoListVideo4, poster: TodoListImg4 } // Commented out - video file missing
        ],
        features: todoListFeatures
    },
    {
        name: "Cat Store",
        type: "Tienda Online",
        url: "https://catstore.jaimedigitalstudio.com",
        github: "https://github.com/jaivial/CATSTORE.git",
        image: { src: CatStore },
        slug: "cat-store",
        description: "Aplicación web para una tienda online de gatos desarrollada con PHP, MySQL, HTML, CSS y JavaScript. Incluye sistema de autenticación, persistencia de sesión mediante cookies, catálogo de productos con filtros, carrito de compra, gestión de perfil de usuario, historial de compras, panel de administración y diseño responsive.",
        tech: ['HTML', 'Javascript', 'CSS', 'PHP', 'MySQL', 'VPS', 'Nginx', 'Responsive Design'],
        date: "2021-05-15",
        images: [
            { url: CatStoreImg1, alt: 'Página principal de Cat Store' },
            { url: CatStoreImg2, alt: 'Sistema de filtros' },
            { url: CatStoreImg3, alt: 'Perfil de usuario' },
            { url: CatStoreImg4, alt: 'Panel de administración' },
            { url: CatStoreImg5, alt: 'Proceso de compra' },
            { url: CatStoreImg6, alt: 'Vista adicional 1' },
            { url: CatStoreImg7, alt: 'Vista adicional 2' },
            { url: CatStoreImg8, alt: 'Vista adicional 3' },
            { url: CatStoreImg9, alt: 'Vista adicional 4' },
            { url: CatStoreImg10, alt: 'Vista adicional 5' },
            { url: CatStoreImg11, alt: 'Vista adicional 6' },
            { url: CatStoreImg12, alt: 'Vista adicional 7' },
            { url: CatStoreImg13, alt: 'Vista adicional 8' },
            { url: CatStoreImg14, alt: 'Vista adicional 9' }
        ],
        videos: [
            // { url: CatStoreVideo1, poster: CatStoreImg1 }, // Commented out - video file missing
            // { url: CatStoreVideo2, poster: CatStoreImg2 }, // Commented out - video file missing
            // { url: CatStoreVideo3, poster: CatStoreImg3 }, // Commented out - video file missing
            // { url: CatStoreVideo4, poster: CatStoreImg4 }, // Commented out - video file missing
            // { url: CatStoreVideo5, poster: CatStoreImg5 } // Commented out - video file missing
        ],
        features: catStoreFeatures
    },
    {
        id: 1,
        name: "Centro Neuro Expresión",
        slug: "centro-neuro-expresion",
        image: { src: CentroNeuroExpresion },
        description: "Sitio web moderno y accesible para un centro de intervención temprana enfocado en niños desde el nacimiento hasta los seis años. Proporciona información completa sobre servicios especializados en cuatro áreas clave del desarrollo: Intervención Cognitiva, Lingüística, Prenatal y Sensoriomotora.",
        type: "Sitio Web Corporativo",
        tech: ["Astro", "Tailwind CSS", "JavaScript", "Responsive Design", "SEO", "VPS", "Nginx"],
        github: "https://github.com/jaivial/centroneuroexpresion",
        url: "https://centroneuroexpresion.com",
        features: centroNeuroExpresionFeatures,
        date: "2024-05-01",
        images: [
            { url: CentroNeuroExpresionImg1, alt: 'Landing Page' },
            { url: CentroNeuroExpresionImg2, alt: 'Sobre Nosotros' },
            { url: CentroNeuroExpresionImg3, alt: 'Página de Contacto' },
            { url: CentroNeuroExpresionImg4, alt: 'Intervención Cognitiva' },
            { url: CentroNeuroExpresionImg5, alt: 'Servicios Especializados' },
            { url: CentroNeuroExpresionImg6, alt: 'Equipo Profesional' },
            { url: CentroNeuroExpresionImg7, alt: 'Instalaciones' },
            { url: CentroNeuroExpresionImg8, alt: 'Testimonios' },
            { url: CentroNeuroExpresionImg9, alt: 'Intervención Lingüística' },
            { url: CentroNeuroExpresionImg10, alt: 'Intervención Prenatal' },
            { url: CentroNeuroExpresionImg11, alt: 'Intervención Sensoriomotora' },
            { url: CentroNeuroExpresionImg12, alt: 'Enfoque Terapéutico' },
            { url: CentroNeuroExpresionImg13, alt: 'Metodología' },
            { url: CentroNeuroExpresionImg14, alt: 'Recursos Educativos' },
            { url: CentroNeuroExpresionImg15, alt: 'Vista General' }
        ],
        videos: [
            // { url: CentroNeuroExpresionVideo1, poster: CentroNeuroExpresionImg1 }, // Commented out - video file missing
            // { url: CentroNeuroExpresionVideo2, poster: CentroNeuroExpresionImg2 }, // Commented out - video file missing
            // { url: CentroNeuroExpresionVideo3, poster: CentroNeuroExpresionImg3 }, // Commented out - video file missing
            // { url: CentroNeuroExpresionVideo4, poster: CentroNeuroExpresionImg4 } // Commented out - video file missing
        ]
    },
    {
        id: 1,
        name: "GR Cup Backoffice",
        slug: "gr-cup-backoffice",
        image: { src: GrCupBackoffice },
        description: "Panel de administracion para la plataforma GR Cup / FER Powerlifting. Gestiona multiples competiciones (GR Cup 2026 y FER CUP II), inscripciones de atletas, sorteos, cupones, miembros, horarios, configuracion de pagos (Stripe) y email. Construido con React 18, Vite, TypeScript, Tailwind CSS y un backend .NET 8 + MySQL con autenticacion JWT y SignalR para actualizaciones en vivo (mesa de jueces, check-in, sorteos).",
        type: "Panel de Administracion - Competiciones y Sorteos",
        tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Jotai", "wouter", "Microsoft SignalR", "html5-qrcode", "jsPDF", "Drizzle ORM", ".NET 8", "C#", "MySQL", "Stripe", "JWT", "VPS", "Nginx", "Responsive Design"],
        github: "https://github.com/jaivial/grweb",
        url: "https://backoffice.fercup.com",
        features: grCupBackofficeFeatures,
        date: "2026-06-03",
        images: [
            { url: GrCupBackoffice01login, alt: "Pantalla de inicio de sesion con diseno oscuro y branding GR Cup" },
            { url: GrCupBackoffice02dashboard, alt: "Dashboard principal con KPIs y resumen financiero" },
            { url: GrCupBackoffice03inscripciones, alt: "Gestion de inscripciones de atletas con tabla y filtros" },
            { url: GrCupBackoffice04participantes, alt: "Listado de participantes y tickets del sorteo" },
            { url: GrCupBackoffice05sorteo, alt: "Configuracion y gestion del sorteo y premios" },
            { url: GrCupBackoffice06raffleconfig, alt: "Configuracion del sistema de rifa" },
            { url: GrCupBackoffice07horarios, alt: "Bloques horarios y publicaciones de la competicion" },
            { url: GrCupBackoffice08cupones, alt: "Gestion de cupones de descuento" },
            { url: GrCupBackoffice09qrreader, alt: "Lector de codigos QR para check-in de atletas" },
            { url: GrCupBackoffice10checkin, alt: "Pantalla de check-in y validacion de asistentes" },
            { url: GrCupBackoffice11judgetable, alt: "Mesa de jueces con intentos, pesos y votaciones" },
            { url: GrCupBackoffice12workspaces, alt: "Listado de workspaces y competiciones" },
            { url: GrCupBackoffice13users, alt: "Gestion de miembros del workspace con roles" },
            { url: GrCupBackoffice14roles, alt: "Detalle de rol con permisos por competicion" },
            { url: GrCupBackoffice15configuracion, alt: "Configuracion general, email y pasarela de pagos" },
            { url: GrCupBackoffice16inscripcionconfig, alt: "Configuracion de formulario de inscripcion" },
            { url: GrCupBackoffice17dashboardscroll, alt: "Dashboard con graficos y metricas detalladas" },
            { url: GrCupBackoffice18inscripcionesdetail, alt: "Detalle de inscripcion con datos del atleta" },
            { url: GrCupBackoffice19userslist, alt: "Lista de miembros con busqueda y filtros" },
            { url: GrCupBackoffice20dashboardmobile, alt: "Dashboard adaptado a vista movil" },
            { url: GrCupBackoffice21loginhero, alt: "Pantalla de login en alta resolucion" }
        ],
        videos: []
    },
    {
        id: 2,
        name: "FER Web",
        slug: "fer-web",
        image: { src: FerWeb },
        description: "Landing publica del evento FER CUP II 2026 en Almussafes. Presenta modalidades, horarios, ubicacion, galeria, tutoriales, equipo y formulario de inscripcion multi-paso. Construido con React 18, Vite, TypeScript, Tailwind CSS y Framer Motion para un diseno cinematico con paleta mistica FER. Validacion robusta con Zod y gestion de pagos via Stripe.",
        type: "Landing Publica - FER Powerlifting",
        tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Zod", "Jotai", "wouter", "Lucide React", "react-hot-toast", "react-intersection-observer", "VPS", "Nginx", "Responsive Design"],
        github: "https://github.com/jaivial/grweb",
        url: "https://fercup.com",
        features: ferWebFeatures,
        date: "2026-06-03",
        images: [
            { url: FerWeb01landing, alt: "Landing principal FER CUP II 2026 con hero animado" },
            { url: FerWeb02modalidades, alt: "Modalidades de competicion: sentadilla, press y peso muerto" },
            { url: FerWeb03horarios, alt: "Calendario y horarios de la competicion" },
            { url: FerWeb04ubicacion, alt: "Ubicacion del evento en Almussafes con mapa interactivo" },
            { url: FerWeb05galeria, alt: "Galeria de imagenes de ediciones anteriores" },
            { url: FerWeb06sobrenosotros, alt: "Historia del equipo y comunidad FER" },
            { url: FerWeb07tutoriales, alt: "Tutoriales y normativa de competicion" },
            { url: FerWeb08inscripcion, alt: "Formulario de inscripcion multi-paso con validacion Zod" },
            { url: FerWeb09terminos, alt: "Terminos y condiciones del evento" },
            { url: FerWeb10privacidad, alt: "Politica de privacidad y proteccion de datos" },
            { url: FerWeb11landinghero, alt: "Hero principal FER CUP II 2026 en alta resolucion" },
            { url: FerWeb12landingscroll1, alt: "Seccion de caracteristicas y modalidades" },
            { url: FerWeb13landingscroll2, alt: "Seccion de patrocinadores y comunidad" },
            { url: FerWeb14landingscroll3, alt: "Footer y enlaces de interes" },
            { url: FerWeb15inscripcionform, alt: "Formulario de inscripcion paso 1" },
            { url: FerWeb16modalidadesdetail, alt: "Detalle de cada modalidad de powerlifting" },
            { url: FerWeb17galeriasscroll, alt: "Galeria scrolleable de ediciones previas" },
            { url: FerWeb18equipo, alt: "Equipo y comunidad FER Powerlifting" },
            { url: FerWeb19landingmobile, alt: "Landing FER adaptado a vista movil" },
            { url: FerWeb20inscripcionmobile, alt: "Formulario de inscripcion en vista movil" },
            { url: FerWeb21ubicaciondetail, alt: "Mapa y direcciones del evento" }
        ],
        videos: []
    },
    {
        id: 3,
        name: "GR Cup Frontend",
        slug: "gr-cup-frontend",
        image: { src: GrCupFrontend },
        description: "Frontend publico para el sorteo del GR Cup 2026. Combina una landing con animaciones de scroll frame-by-frame (313 frames desplegados progresivamente), un compositor de video Remotion + HyperFrames y un sistema completo de compra de tickets con Stripe. Construido con React 18, Vite, TypeScript, Tailwind CSS, Three.js, html5-qrcode y jsPDF. Accesible, responsive y preparado para soportar miles de usuarios concurrentes.",
        type: "Sorteo Publico - Experiencia Cinematica",
        tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Three.js", "@react-three/fiber", "@react-three/drei", "Remotion", "HyperFrames", "wouter", "Jotai", "Microsoft SignalR", "html5-qrcode", "jsPDF", "Storybook", "Playwright", "VPS", "Nginx", "Responsive Design"],
        github: "https://github.com/jaivial/grweb",
        url: "https://fercup.com/sorteo",
        features: grCupFrontendFeatures,
        date: "2026-06-03",
        images: [
            { url: GrCupFrontend02inscripcion, alt: "Formulario publico de inscripcion para sorteo" },
            { url: GrCupFrontend03checkout, alt: "Checkout y seleccion de tickets con Stripe" },
            { url: GrCupFrontend04success, alt: "Confirmacion de compra exitosa con opciones de compartir" },
            { url: GrCupFrontend05raffle, alt: "Visualizacion del sorteo con frames de scroll cinematicos" },
            { url: GrCupFrontend06horarios, alt: "Horarios publicos de la competicion" },
            { url: GrCupFrontend07ubicacion, alt: "Como llegar al evento con mapa" },
            { url: GrCupFrontend08backofficelogin, alt: "Acceso al panel de administracion" },
            { url: GrCupFrontend09politicaconcurso, alt: "Politica del concurso y bases legales" },
            { url: GrCupFrontend10terminos, alt: "Terminos de servicio del sorteo" },
            { url: GrCupFrontend11privacidad, alt: "Politica de privacidad del sorteo" },
            { url: GrCupFrontend12consentimiento, alt: "Consentimiento de tratamiento de datos" },
            { url: GrCupFrontend17raffleframes, alt: "Composicion cinematica con scroll frames del sorteo" },
            { url: GrCupFrontend18raffledetail, alt: "Detalle de tickets y numeros del sorteo" },
            { url: GrCupFrontend19checkoutform, alt: "Formulario de checkout y seleccion de tickets" },
            { url: GrCupFrontend20successdetail, alt: "Confirmacion de compra con botones de compartir" },
            { url: GrCupFrontend21inscripcionform, alt: "Formulario publico de inscripcion al sorteo" },
            { url: GrCupFrontend23backofficehero, alt: "Login del backoffice integrado en alta resolucion" },
            { url: GrCupFrontend24politicascroll, alt: "Bases legales del concurso en formato largo" },
            { url: GrCupFrontend30raffle1, alt: "Composicion cinematica del sorteo en frame 1" },
            { url: GrCupFrontend31raffle2, alt: "Composicion cinematica del sorteo en frame 2" },
            { url: GrCupFrontend32raffle3, alt: "Composicion cinematica del sorteo en frame 3" },
            { url: GrCupFrontend33raffle4, alt: "Detalle de tickets asignados en el sorteo" },
            { url: GrCupFrontend34checkout, alt: "Checkout con selector de cantidad de tickets" },
            { url: GrCupFrontend35politica, alt: "Bases legales completas del concurso" },
            { url: GrCupFrontend36mapa, alt: "Mapa interactivo de ubicacion del evento" },
            { url: GrCupFrontend37success, alt: "Confirmacion de compra con codigo QR" }
        ],
        videos: []
    }
]

// Organizar tecnologías por categorías para mejor visualización
const techCategories = {
    frontend: ["HTML", "Javascript", "CSS", "Tailwind CSS", "Astro", "React", "React Native", "Vue", "Angular", "Next.js", "TypeScript"],
    backend: ["PHP", "NodeJS", "Express", "Express js", "Python", "Java", "Ruby", "Prisma", "NextAuth.js", "Go"],
    database: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    other: ["Nginx", "next-intl", "StPageFlip", "Jotai", "i18next", "OAuth 2.0", "Jest", "React Navigation", "RESTful API"],
};

export function getData() {
    // Ordenar proyectos por fecha (del más reciente al más antiguo)
    return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
}

