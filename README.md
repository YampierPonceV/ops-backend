# Ops Backend API

Backend API profesional desarrollada con **Node.js, Express, TypeScript y PostgreSQL**, enfocada en buenas prácticas de arquitectura, seguridad y despliegue.  
El proyecto simula un sistema real de gestión con autenticación, roles y control de acceso.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL**
- **Prisma ORM**
- **JWT (Autenticación)**
- **Zod (Validaciones)**
- **Pino (Logging)**
- **Jest + Supertest (Testing)**
- **Docker & Docker Compose**

---

## 🧱 Arquitectura del proyecto

El proyecto sigue una arquitectura modular y escalable:

### Separación de responsabilidades:

- **Routes**: Definición de endpoints
- **Controllers**: Manejo de requests/responses
- **Services**: Lógica de negocio
- **Middlewares**: Auth, roles, validaciones, errores
- **Config**: Prisma, entorno, DB
- **Utils**: JWT, logger

---

## 🔐 Autenticación y seguridad

- Registro y login de usuarios
- Contraseñas hasheadas con **bcrypt**
- Autenticación basada en **JWT**
- Middleware de autenticación
- Middleware de autorización por roles:
  - `ADMIN`
  - `OPERATOR`
  - `USER`

---

## ✅ Validaciones y manejo de errores

- Validaciones de entrada con **Zod**
- Middleware genérico de validación
- Manejo global de errores
- Respuestas HTTP semánticamente correctas (`400`, `401`, `403`, `500`)

---

## 🧪 Testing

- Tests de endpoints críticos con **Jest + Supertest**
- Healthcheck
- Login con credenciales inválidas
- Limpieza de conexiones a la base de datos al finalizar tests

Ejecutar tests:

```bash
npm test
```

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como parte de una transición profesional hacia el rol de Backend Developer, aplicando prácticas reales de desarrollo, testing, seguridad y despliegue, con un enfoque cercano a producción.

## 👤 Autor

Desarrollado por Yampier Ponce
Backend Developer | Node.js | TypeScript | PostgreSQL | Linux
