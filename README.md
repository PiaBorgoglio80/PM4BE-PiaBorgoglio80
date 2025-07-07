# 🛒 Proyecto Final - Backend (PM4)

Este es el backend del Proyecto Final del Módulo 4, desarrollado con **NestJS**, **TypeORM** y **PostgreSQL**. El objetivo es brindar una API robusta para una aplicación e-commerce, incluyendo autenticación, gestión de productos, órdenes, usuarios y más.

## 🚀 Tecnologías utilizadas

- **NestJS** (arquitectura modular)
- **TypeORM** (ORM con PostgreSQL)
- **PostgreSQL** (base de datos relacional)
- **Cloudinary** (carga de imágenes)
- **dotenv** (variables de entorno)
- **JWT** (autenticación)
- **bcrypt** (hash de contraseñas)

## 📂 Estructura del proyecto

back/
├── src/
│ ├── auth/
│ ├── users/
│ ├── products/
│ ├── orders/
│ ├── categories/
│ ├── fileUpload/
│ ├── config/
│ ├── interfaces/
│ ├── decorators/
│ ├── middleware/
│ ├── entities/
│ └── main.ts
├── dist/ (compilado)
├── .env
├── package.json
├── tsconfig.json
└── README.md


## 🔧 Scripts útiles

En la carpeta `back/` podés ejecutar:

| Script             | Descripción                                       |
|--------------------|---------------------------------------------------|
| `npm run start`    | Ejecuta el backend compilado (`dist/`)           |
| `npm run start:dev`| Ejecuta el backend en modo desarrollo (hot reload)|
| `npm run build`    | Compila el proyecto a JavaScript (`dist/`)       |

## 🗂️ Variables de entorno

Crear un archivo `.env` con las siguientes variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_clave
DB_NAME=nombre_de_tu_bd

JWT_SECRET=tu_clave_secreta
CLOUDINARY_NAME=tu_nombre
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
