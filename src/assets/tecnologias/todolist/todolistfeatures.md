# Funcionalidades de Todo List

## Autenticación de usuarios
Sistema completo de autenticación con formulario de inicio de sesión conectado a base de datos PostgreSQL, validación de errores, registro de nuevos usuarios y soporte para múltiples idiomas mediante selector integrado. La funcionalidad multilingual está implementada con useContext de React y archivos JSON para las traducciones.

## Gestión de tareas con calendario
Dashboard con calendario integrado para seleccionar fechas específicas a las que añadir tareas. Las tareas se agregan a la sección de no completadas y el sistema muestra un indicador visual (punto rojo) en las fechas que contienen tareas pendientes. Cada día almacena sus propias tareas de forma independiente.

## Edición y eliminación de tareas
Funcionalidad para editar y personalizar tareas existentes, así como para eliminar tareas que ya no son necesarias, manteniendo la lista organizada y actualizada según las necesidades del usuario.

## Completar tareas y organización por Drag & Drop
Las tareas pueden marcarse como completadas mediante el checkbox o utilizando la funcionalidad de arrastrar y soltar (drag & drop) entre las secciones de completadas y pendientes. El sistema actualiza visualmente el estado del día en el calendario, cambiando de punto rojo a verde cuando todas las tareas están completadas. 