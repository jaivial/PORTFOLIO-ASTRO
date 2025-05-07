# Alquería Villa Carmen

![Alquería Villa Carmen](https://alqueriavillacarmen.com/assets/img/logo.png)

## 📝 Descripción

Sitio web completo para "Alquería Villa Carmen", un restaurante y salón de eventos ubicado en Valencia. El proyecto incluye:

- Página web promocional para mostrar el restaurante, sus servicios y ambiente
- Sistema de gestión de reservas online con límite diario y confirmación por email
- Cartas y menús dinámicos (diario, fin de semana y carta de vinos) editables en tiempo real
- Panel de administración completo para gestionar reservas, aforo, menús y más

La implementación del sistema de reservas online ha logrado un aumento del 300% en la clientela del restaurante, optimizando la gestión interna y mejorando la experiencia del cliente.

## 🔗 Enlaces

- **Web en producción:** [https://alqueriavillacarmen.com/](https://alqueriavillacarmen.com/)
- **Repositorio:** [https://github.com/jaivial/villacarmen.git](https://github.com/jaivial/villacarmen.git)

## ✨ Características Principales

### 🗓️ Gestor de Reservas Online
- Sistema avanzado de reservas con calendario visual que muestra días disponibles, cerrados y completos
- Límite de comensales condicional según capacidad diaria y reservas existentes
- Proceso de reserva en 4 pasos intuitivos:
  1. Selección de fecha y número de personas
  2. Opción para pre-reservar arroces (conectado a base de datos)
  3. Formulario de datos personales con envío automático de confirmación por email y WhatsApp
  4. Confirmación final con opciones para tronas/carros y aceptación de condiciones

### 🍽️ Carta Dinámica de Platos
- Menú digital conectado a base de datos que genera la presentación de platos dinámicamente
- Muestra solo los platos activos con descripciones, precios e información de alérgenos
- Actualización en tiempo real sin necesidad de modificar el código

### 🍷 Carta de Vinos Dinámica
- Sistema conectado a base de datos que muestra dinámicamente solo los vinos disponibles
- Facilita la actualización constante de la bodega sin intervención técnica

### 👨‍💼 Panel de Administración Completo
- Calendario visual con codificación por colores según porcentaje de ocupación
- Gestión avanzada de reservas:
  - Tabla completa con información detallada por día
  - Opciones para editar y borrar reservas individuales
  - Exportación de datos en Excel o PDF para gestión interna
  - Control de aforo personalizado por día
  - Gestión de horarios con límites personalizables por franja horaria
  - Sistema de reservas manuales sin restricciones para el personal

### 🍕 Gestión de Menús y Platos
- Panel para añadir, activar/desactivar y editar platos por categorías
- Selección personalizada de alérgenos para cada plato
- Gestión integral de carta de vinos con opciones para añadir, editar y desactivar referencias

## 🛠️ Tecnologías Utilizadas

- **Frontend:** 
  - HTML5, CSS3, JavaScript
  - Diseño responsive para todos los dispositivos
  - AJAX para interacciones dinámicas sin recargar la página

- **Backend:**
  - PHP para la lógica de negocio y gestión de datos
  - API RESTful para comunicación entre frontend y backend

- **Base de Datos:**
  - MySQL para almacenamiento de datos:
    - Reservas y gestión de clientes
    - Inventario de platos y vinos
    - Configuración de aforo y horarios

- **Servidor:**
  - Nginx como servidor web
  - Configuración optimizada para rendimiento y seguridad

- **Herramientas Adicionales:**
  - Sistema de envío de emails automáticos
  - Integración con WhatsApp para notificaciones
  - Exportación a PDF/Excel para informes

## 🚀 Instalación y Configuración

### Requisitos Previos
- Servidor web con soporte para PHP 7.4+
- MySQL 5.7+
- Servidor SMTP para envío de emails
- Acceso vía SSH para despliegue

### Pasos de Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jaivial/villacarmen.git
   cd villacarmen
   ```

2. Configurar la base de datos:
   - Importar el archivo `database.sql` a tu servidor MySQL
   - Configurar las credenciales de conexión en `config/database.php`

3. Configurar el envío de emails:
   - Editar `config/mail.php` con los datos del servidor SMTP

4. Configuración del servidor web:
   - Apuntar el dominio al directorio `/public`
   - Asegurar que los permisos de archivos sean correctos:
     ```bash
     chmod -R 755 public/
     chmod -R 777 storage/
     ```

5. Acceso al panel de administración:
   - Navegar a `https://tudominio.com/admin`
   - Usuario por defecto: admin
   - Contraseña por defecto: cambiar_inmediatamente

## 📷 Capturas de Pantalla

### Sistema de Reservas
![Reservas - Calendario](https://alqueriavillacarmen.com/assets/img/github/reservas-calendario.jpg)
*Sistema de reservas con calendario interactivo*

![Gestión de Reservas](https://alqueriavillacarmen.com/assets/img/github/admin-reservas.jpg)
*Panel de administración de reservas*

### Cartas y Menús
![Carta Dinámica](https://alqueriavillacarmen.com/assets/img/github/carta-dinamica.jpg)
*Carta de platos dinámica conectada a base de datos*

![Edición de Platos](https://alqueriavillacarmen.com/assets/img/github/edicion-platos.jpg)
*Panel de edición de platos y alérgenos*

## 📁 Estructura del Proyecto

```
alqueria-villacarmen/
├── public/                  # Directorio web público
│   ├── assets/              # Recursos estáticos
│   │   ├── css/             # Hojas de estilo
│   │   ├── js/              # Scripts JavaScript
│   │   └── img/             # Imágenes e iconos
│   ├── admin/               # Panel de administración
│   └── index.php            # Punto de entrada principal
├── app/                     # Lógica de la aplicación
│   ├── Controllers/         # Controladores MVC
│   ├── Models/              # Modelos de datos
│   ├── Views/               # Plantillas de vistas
│   └── Helpers/             # Funciones auxiliares
├── config/                  # Configuración
│   ├── database.php         # Conexión a base de datos
│   └── mail.php             # Configuración de email
├── database/                # Gestión de base de datos
│   └── database.sql         # Esquema inicial
└── README.md                # Esta documentación
```

## 📞 Contacto e Información

### Desarrollador
- **Nombre:** Jaime Villanueva
- **Email:** jaimevillanuevapro@gmail.com
- **Portfolio:** [https://jaimevillanueva.es](https://jaimevillanueva.es)

### Cliente
- **Alquería Villa Carmen**
- **Web:** [https://alqueriavillacarmen.com](https://alqueriavillacarmen.com)
- **Dirección:** Carrer de València, 96, Albal, Valencia
- **Teléfono:** +34 606 33 56 93

## 📄 Licencia

Este proyecto está bajo licencia privada para uso exclusivo del cliente Alquería Villa Carmen. Todos los derechos reservados.

---

© 2022-2023 Jaime Villanueva | Alquería Villa Carmen
