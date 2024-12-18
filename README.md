# Examen Técnico - Node.js Backend API

Este proyecto implementa una **API RESTful** utilizando **Node.js**, **Express** y **Mongoose** para gestionar usuarios, como parte de un examen técnico para el puesto de **Full Stack Developer**. El objetivo es demostrar el manejo de tecnologías como **Node.js**, **Express**, **MongoDB** y la arquitectura de aplicaciones backend.

## Descripción

El examen consiste en crear una API que permita gestionar un listado de usuarios con las siguientes operaciones CRUD (Crear, Leer, Actualizar, Eliminar):

- **Crear un usuario**
- **Listar usuarios (paginado)**
- **Obtener un usuario específico por su ID**
- **Actualizar un usuario existente (nombre y correo)**
- **Eliminar un usuario**

Además, se implementa **autenticación JWT** para acceder a los endpoints, y se utiliza **MongoDB** para almacenar los datos de los usuarios.

## Funcionalidades

- **Crear un nuevo usuario** (POST /users)
- **Listar usuarios** con paginación (GET /users)
- **Obtener un usuario por su ID** (GET /users/:id)
- **Actualizar un usuario** (PUT /users/:id)
- **Eliminar un usuario** (DELETE /users/:id)
- **Autenticación JWT** para acceso a los servicios

## Instalación

### Requisitos

- **Node.js v18+**
- **pnpm** como gestor de paquetes

### Pasos para instalar y correr el proyecto

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/osocaramelosofer/technical-exam-node
   ```

2. **Accede al directorio del proyecto**

   ```bash
   cd technical-exam-node
   ```

3. **Instala las dependencias**

   Asegúrate de tener **pnpm** instalado, si no, instálalo con:

   ```bash
   npm install -g pnpm
   ```

   Luego, instala las dependencias del proyecto:

   ```bash
   pnpm install
   ```

4. **Configura las variables de entorno**

   Crea un archivo `.env` en el directorio raíz del proyecto y agrega las siguientes variables:

   ```env
   JWT_SECRET_KEY=<tu_secreto_jwt>
   MONGO_CONNECTION_STRING=<tu_cadena_de_conexion_mongo>
   ```

5. **Inicia el servidor en modo desarrollo**

   ```bash
   pnpm run dev
   ```

   El servidor estará corriendo en `http://localhost:3000`.

## Endpoints

### 1. **Crear un nuevo usuario**

- **Método**: `POST`
- **Ruta**: `/users`
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "nombre del usuario",
    "email": "correo@ejemplo.com",
    "password": "contraseña"
  }
  ```
- **Respuesta exitosa**:
  ```json
  {
    "success": true,
    "message": "Usuario creado exitosamente",
    "data": {
      "_id": "id_del_usuario",
      "name": "nombre",
      "email": "correo@ejemplo.com",
      "password": "contraseña_encriptada",
      "__v": 0
    }
  }
  ```
- **Respuesta de error**:
  ```json
  {
    "error": {
      "message": "Error al crear el usuario",
      "code": "400"
    }
  }
  ```

### 2. **Listar usuarios (paginado)**

- **Método**: `GET`
- **Ruta**: `/users?page=0&limit=10`
- **Parámetros**:
  - `page`: Número de página (paginación)
  - `limit`: Número máximo de usuarios por página
- **Respuesta exitosa**:
  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "id_del_usuario_1",
        "name": "nombre1",
        "email": "correo@ejemplo.com",
        "password": "contraseña_encriptada",
        "__v": 0
      },
      {
        "_id": "id_del_usuario_2",
        "name": "nombre2",
        "email": "correo@ejemplo.com",
        "password": "contraseña_encriptada",
        "__v": 0
      }
    ],
    "page": 1,
    "limit": 10,
    "total": 100
  }
  ```

### 3. **Obtener un usuario por su ID**

- **Método**: `GET`
- **Ruta**: `/users/:id`
- **Parámetros**:
  - `id`: ID del usuario a obtener
- **Respuesta exitosa**:
  ```json
  {
    "success": true,
    "data": {
      "_id": "id_del_usuario",
      "name": "nombre",
      "email": "correo@ejemplo.com",
      "password": "contraseña_encriptada",
      "__v": 0
    }
  }
  ```

### 4. **Actualizar un usuario**

- **Método**: `PUT`
- **Ruta**: `/users/:id`
- **Cuerpo de la solicitud**:
  ```json
  {
    "name": "nuevo_nombre",
    "email": "nuevo_email@ejemplo.com"
  }
  ```
- **Respuesta exitosa**:
  ```json
  {
    "success": true,
    "message": "Usuario actualizado exitosamente",
    "data": {
      "_id": "id_del_usuario",
      "name": "nuevo_nombre",
      "email": "nuevo_email@ejemplo.com",
      "password": "contraseña_encriptada",
      "__v": 0
    }
  }
  ```

### 5. **Eliminar un usuario**

- **Método**: `DELETE`
- **Ruta**: `/users/:id`
- **Parámetros**:
  - `id`: ID del usuario a eliminar
- **Respuesta exitosa**:
  ```json
  {
    "success": true,
    "message": "Usuario eliminado exitosamente",
    "data": {
      "_id": "id_del_usuario",
      "name": "nombre",
      "email": "correo@ejemplo.com",
      "password": "contraseña_encriptada",
      "__v": 0
    }
  }
  ```

## Seguridad

El acceso a todos los endpoints está protegido por un **JWT**. Se debe incluir el token en los encabezados de la solicitud de la siguiente manera:

```http
Authorization: Bearer <tu_token_jwt>
```

## Tests

Si deseas ejecutar pruebas, puedes configurar un entorno de pruebas y utilizar herramientas como **Jest** o **Mocha** para testear los endpoints y la lógica del backend.

## Contribuciones

Si deseas contribuir a este proyecto, por favor realiza un **fork** y crea un **pull request** con las mejoras. Asegúrate de seguir las mejores prácticas de desarrollo y de documentar los cambios realizados.
