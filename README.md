# Examen Tecnico Node

Este examen técnico hecho con Node, Express y Mongoose realiza una API RESTful para resolver el examen técnico para el puesto de Full Stack Developer, enfocado en el back-end con Node.js.

La aplicación pretende demostrar los conocimientos en tecnologías como Node, Express, MongoDB y la arquitectura/experiencia que el candidato tiene en el stack mencionado.

## Authors

- [@elferras](https://github.com/osocaramelosofer)

## Documentación

### Variables de Entorno

Para ejecutar este proyecto, deberás agregar las siguientes variables de entorno a tu archivo .env:

- `JWT_SECRET_KEY`
- `MONGO_CONNECTION_STRING`

### Features

- Crear un nuevo usuario
- Listar usuarios
- Obtener un usuario específico por su ID
- Actualizar el nombre y correo de un usuario existente
- Eliminar un usuario por su ID
- Generar un JWT para acceder al CRUD

### Instalación

Asegúrate de tener la versión de Node `v18`.

Instala el proyecto con pnpm.

### Run Locally

Clona el proyecto:

```bash
  git clone https://github.com/osocaramelosofer/technical-exam-node
```

Dirígete al directorio del proyecto:

```bash
  cd technical-exam-node
```

Instala las dependencias:

```bash
  pnpm install
```

Inicia el servidor:

```bash
  pnpm run dev
```

**Server:** Node, Express, MongoDB + Mongoose

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

### POST /api/v1/users

Crea un nuevo usuario.

### GET /api/v1/users

Obtiene una lista de usuarios paginada.

### GET /api/v1/users/:id

Obtiene un usuario específico por su ID.

### PUT /api/v1/users/:id

Actualiza un usuario existente.

### DELETE /api/v1/users/:id

Elimina un usuario existente.

## Consideraciones de Seguridad

El proyecto utiliza JWT para la autenticación de los usuarios, por lo que todas las peticiones que requieren acceso a datos sensibles deben llevar un token válido en el encabezado `Authorization: Bearer <token>`.
