# Viajes Olga - Tour To Valencia

## English

### Overview
Tour To Valencia is a modern, multilingual (English/Spanish) web application built with Remix and React that allows users to discover, explore, and book tours and experiences in Valencia, Spain. The platform offers a seamless booking experience with integrated payment processing through PayPal and Stripe, email confirmations, and a comprehensive admin dashboard for managing bookings and tour content.

### Features
- **Multilingual Support**: Full English and Spanish language support throughout the application
- **Tour Discovery**: Browse various tours and experiences available in Valencia
- **Dynamic Content Management**: Admin dashboard for creating and managing tour pages
- **Booking System**: Complete booking flow with date selection, availability checking, and party size options
- **Payment Processing**: Integrated PayPal and Stripe payment gateways
- **Email Notifications**: Automated confirmation emails for both customers and administrators
- **Responsive Design**: Fully responsive UI built with TailwindCSS
- **Admin Dashboard**: Comprehensive management interface for bookings, tour content, and availability settings

### Technology Stack
- **Frontend**: React, TypeScript, TailwindCSS
- **Framework**: Remix
- **Database**: MongoDB
- **Payment Processing**: PayPal, Stripe
- **Email**: Nodemailer
- **Styling**: TailwindCSS, Shadcn UI components
- **Animation**: Framer Motion
- **Deployment**: PM2, Nginx

### Project Structure
The application follows a well-organized component structure:

- **Route Components**: Handle data loading via Remix's `loader` function
- **Feature Components**: Import and use context variables and custom hooks
- **UI Components**: Receive props and render UI elements
- **Context Providers**: Manage application state and language preferences
- **Custom Hooks**: Encapsulate functionality and state management

### Getting Started

#### Prerequisites
- Node.js (v20.0.0 or higher)
- MongoDB

#### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/viajesolga.git
cd viajesolga
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Deployment
For deployment instructions, please refer to the deployment guides in the repository:
- `DEPLOYMENT_GUIDE_TOURTOVALENCIA.md`
- `deployment-guide.md`

---

## Español

### Descripción General
Tour To Valencia es una aplicación web moderna y multilingüe (inglés/español) construida con Remix y React que permite a los usuarios descubrir, explorar y reservar tours y experiencias en Valencia, España. La plataforma ofrece una experiencia de reserva fluida con procesamiento de pagos integrado a través de PayPal y Stripe, confirmaciones por correo electrónico y un completo panel de administración para gestionar reservas y contenido de tours.

### Características
- **Soporte Multilingüe**: Soporte completo en inglés y español en toda la aplicación
- **Descubrimiento de Tours**: Explora varios tours y experiencias disponibles en Valencia
- **Gestión de Contenido Dinámico**: Panel de administración para crear y gestionar páginas de tours
- **Sistema de Reservas**: Flujo completo de reservas con selección de fecha, verificación de disponibilidad y opciones de tamaño de grupo
- **Procesamiento de Pagos**: Pasarelas de pago integradas de PayPal y Stripe
- **Notificaciones por Correo Electrónico**: Correos electrónicos de confirmación automáticos para clientes y administradores
- **Diseño Responsivo**: Interfaz de usuario completamente responsiva construida con TailwindCSS
- **Panel de Administración**: Interfaz de gestión integral para reservas, contenido de tours y configuración de disponibilidad

### Stack Tecnológico
- **Frontend**: React, TypeScript, TailwindCSS
- **Framework**: Remix
- **Base de Datos**: MongoDB
- **Procesamiento de Pagos**: PayPal, Stripe
- **Correo Electrónico**: Nodemailer
- **Estilos**: TailwindCSS, componentes UI de Shadcn
- **Animación**: Framer Motion
- **Despliegue**: PM2, Nginx

### Estructura del Proyecto
La aplicación sigue una estructura de componentes bien organizada:

- **Componentes de Ruta**: Manejan la carga de datos mediante la función `loader` de Remix
- **Componentes de Características**: Importan y utilizan variables de contexto y hooks personalizados
- **Componentes UI**: Reciben props y renderizan elementos de interfaz de usuario
- **Proveedores de Contexto**: Gestionan el estado de la aplicación y las preferencias de idioma
- **Hooks Personalizados**: Encapsulan funcionalidad y gestión de estado

### Primeros Pasos

#### Requisitos Previos
- Node.js (v20.0.0 o superior)
- MongoDB

#### Instalación
1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/viajesolga.git
cd viajesolga
```

2. Instalar dependencias
```bash
npm install
```

3. Crear un archivo `.env` en el directorio raíz con las siguientes variables:
```
MONGODB_URI=tu_cadena_de_conexion_mongodb
STRIPE_SECRET_KEY=tu_clave_secreta_stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_clave_publicable_stripe
PAYPAL_CLIENT_ID=tu_client_id_paypal
PAYPAL_CLIENT_SECRET=tu_client_secret_paypal
EMAIL_USER=tu_direccion_de_correo
EMAIL_PASS=tu_contraseña_de_correo
EMAIL_HOST=tu_host_de_correo
EMAIL_PORT=tu_puerto_de_correo
ADMIN_USERNAME=tu_nombre_de_usuario_admin
ADMIN_PASSWORD=tu_contraseña_admin
```

4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

### Despliegue
Para instrucciones de despliegue, consulta las guías de despliegue en el repositorio:
- `DEPLOYMENT_GUIDE_TOURTOVALENCIA.md`
- `deployment-guide.md`