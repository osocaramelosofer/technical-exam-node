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

- **Crear un nuevo usuario** (POST)
- **Listar usuarios** con paginación (GET)
- **Obtener un usuario por su ID** (GET)
- **Actualizar un usuario** (PUT)
- **Eliminar un usuario** (DELETE)
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

El servidor estará corriendo en:  
`http://localhost:3000`

### Documentación de la API

La API está documentada utilizando **Swagger UI**. Puedes acceder a la documentación y probar los endpoints directamente desde el siguiente enlace:

[Acceder a Swagger UI](http://localhost:3000/api-docs/)

### Probar la API con otras herramientas

Si prefieres usar herramientas como **Postman** para probar la API, ten en cuenta que la URL base de la API es:

`http://localhost:3000/api/v1/`

## Cómo usar la API

Para interactuar con la API, debes tener en cuenta que la mayoría de los endpoints requieren autenticación mediante un **token JWT**. A continuación, te explicamos cómo obtener el token y cómo utilizarlo para hacer solicitudes a la API.

### 1. Crear un Usuario

Para empezar, necesitarás crear un usuario. Puedes hacerlo utilizando el siguiente endpoint:

**POST** `/api/v1/users`

Envía una solicitud **POST** a la URL `http://localhost:3000/api/v1/users` con un cuerpo similar al siguiente para crear un nuevo usuario:

```json
{
  "name": "user4",
  "email": "user4@hotmail.com",
  "password": "user4"
}
```

### 2. Obtener el Token de Autenticación

Una vez que hayas creado el usuario, puedes obtener un **token JWT** utilizando el endpoint de autenticación. Utiliza el siguiente endpoint:

**POST** `/api/v1/auth`

Envía una solicitud **POST** a la URL `http://localhost:3000/api/v1/auth` con un cuerpo como este:

```json
{
  "email": "user4@hotmail.com",
  "password": "user4"
}
```

La respuesta será algo como esto:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJlYWI1ODgxNWZhMTdhN2NmODA0MyIsImVtYWlsIjoidXNlcjRAaG90bWFpbC5jb20iLCJpYXQiOjE3MzQ1NDQ0NzIsImV4cCI6MTczNDU0NTk3Mn0.jXNh9KMLZsbQdq0l82Ydr6HxWeb75KLi0wPl-ByF0Us"
}
```

Este **token** es válido por **25 minutos**.

### 3. Usar el Token en las Solicitudes

Una vez que tengas el **token JWT**, puedes usarlo para autenticar tus solicitudes a la API. Solo necesitas agregar el token en los encabezados de tus solicitudes de la siguiente manera:

```http
Authorization: Bearer <tu_token_aqui>
```

Por ejemplo, para obtener los detalles de un usuario específico, realiza una solicitud **GET** a la URL `http://localhost:3000/api/v1/users/:id` y agrega el token en el encabezado:

```http
GET /api/v1/users/6762307e14afd91107693e93
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJlYWI1ODgxNWZhMTdhN2NmODA0MyIsImVtYWlsIjoidXNlcjRAaG90bWFpbC5jb20iLCJpYXQiOjE3MzQ1NDQ0NzIsImV4cCI6MTczNDU0NTk3Mn0.jXNh9KMLZsbQdq0l82Ydr6HxWeb75KLi0wPl-ByF0Us
```

### Consideraciones

- El **token** tiene una duración de **25 minutos**. Si el token expira, tendrás que volver a autenticarte para obtener uno nuevo.
- En caso de que el token no sea válido o haya expirado, recibirás una respuesta de error con el código de estado `401 Unauthorized`.
- La autenticación se realiza utilizando el esquema **Bearer Token** en el encabezado de las solicitudes.

Con estos pasos podrás probar y usar los endpoints de la API que requieren autenticación. Asegúrate de incluir siempre el **token** en las solicitudes a los endpoints que requieren acceso protegido.

## Endpoints

### 1. **Crear un nuevo usuario**

- **Método**: `POST`
- **Ruta**: `/api/v1/users`
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
- **Ruta**: `/api/v1/users?page=0&limit=10`
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
    ]
  }
  ```

### 3. **Obtener un usuario por su ID**

- **Método**: `GET`
- **Ruta**: `/api/v1/users?id={id}`
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
- **Ruta**: `/api/v1/users`
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
- **Ruta**: `/api/v1/users?id={id}`
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
