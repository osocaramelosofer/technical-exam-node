# Examen tecnico node

Este examen tecnico echo con node, express, y mongoose realiza un Resful api para resolver el examen tecnico para el puesto de full stack developer, enfocado en el back-end con node.js

La aplicacion pretende demostrar los conocimientos en tecnologias como node, express, mongodb y la arquitectura/experiencia que el candidato tiene en el stack mencionado.

## Authors

- [@elferras](https://github.com/osocaramelosofer)

## Documentacion

## Variables de Entorno

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET_KEY`

`MONGO_CONNECTION_STRING`

## Features

- Crear un nuevo usuario
- Listar usuarios
- Obtener un usuario especifico por su id
- Actualizar el nombre y correo de un usuario existente
- Eliminar un usuario por su id
- Generar un jwt para acceder al CRUD

## Instalacion

Asegurate de tener la version de node v18

Instala el proyecto con pnpm

## Run Locally

Clone the project

```bash
  git clone https://github.com/osocaramelosofer/technical-exam-node
```

Go to the project directory

```bash
  cd technical-exam-node
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```

**Server:** Node, Express, Mongodb + mongoose
