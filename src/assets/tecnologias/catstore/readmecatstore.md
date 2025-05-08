# Cat Store - Tienda de Gatos

Aplicación web para una tienda online de gatos desarrollada con PHP, MySQL, HTML, CSS y JavaScript.

## Características

- Sistema de autenticación (login/registro)
- Persistencia de sesión mediante cookies
- Catálogo de productos con filtros
- Carrito de compra
- Gestión de perfil de usuario
- Historial de compras
- Panel de administración
- Diseño responsive

## Requisitos

- PHP 7.4 o superior
- MySQL 5.7 o superior
- Servidor web (Apache, Nginx, etc.)
- Navegador web moderno

## Instalación

1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/cat-store.git
   cd cat-store
   ```

2. Configurar la base de datos:
   - Crear una base de datos MySQL
   - Importar el archivo `database/create_db.sql`
   - Importar el archivo `database/seed_data.sql` para datos de muestra

3. Configurar la conexión a la base de datos:
   - Editar el archivo `config/db_config.php` con los datos de conexión:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'tu_usuario');
   define('DB_PASS', 'tu_contraseña');
   define('DB_NAME', 'gatos');
   ```

4. Configurar el servidor web:
   - Asegurarse de que el directorio raíz del sitio web apunte al directorio del proyecto
   - Configurar los permisos adecuados para los directorios y archivos

## Estructura del Proyecto

```
cat-store/
├── assets/             # Recursos estáticos
│   ├── css/            # Hojas de estilo
│   ├── js/             # Scripts JavaScript
│   └── img/            # Imágenes
├── config/             # Configuración
├── includes/           # Archivos comunes incluidos
├── models/             # Modelos de datos
├── controllers/        # Controladores
├── views/              # Vistas
│   ├── auth/           # Autenticación
│   ├── store/          # Tienda principal
│   ├── cart/           # Carrito de compra
│   ├── profile/        # Perfil de usuario
│   └── admin/          # Administración
├── api/                # API para interacciones AJAX
├── database/           # Scripts SQL
├── index.php           # Archivo principal
└── README.md           # Este archivo
```

## Usuarios Predeterminados

- **Administrador**:
  - Usuario: javial
  - Contraseña: 12

- **Usuario de prueba**:
  - Usuario: usuario
  - Contraseña: password

## Uso

1. Acceder a la aplicación desde el navegador:
   ```
   http://localhost/cat-store/
   ```

2. Iniciar sesión con alguno de los usuarios predeterminados o registrar uno nuevo.

3. Explorar el catálogo, añadir productos al carrito y realizar compras.

4. Para acceder al panel de administración, iniciar sesión como administrador.

## Funcionalidades Principales

- **Autenticación**: Sistema de login y registro con persistencia de sesión mediante cookies.
- **Catálogo**: Visualización de productos con filtros por tipo, color, precio, etc.
- **Carrito**: Gestión de productos seleccionados para compra.
- **Perfil**: Visualización y edición de datos personales, historial de compras.
- **Administración**: Gestión de productos (añadir, editar, eliminar).

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles. 