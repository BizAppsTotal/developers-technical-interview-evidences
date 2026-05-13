# Developers Technical Interview Evidences

Repositorio monorepo que consolida las pruebas técnicas entregadas por candidatos durante el proceso de selección.

## Estructura

```
.
├── julian/
│   └── employees-back/        # NestJS — API REST de empleados
├── prueba/
│   ├── my-app/                # Next.js — Frontend de empleados
│   └── prueba-backend/        # NestJS — API REST de empleados
└── sol/
    └── prueba_tecnica/
        ├── backend/           # Spring Boot — API REST de empleados
        └── frontend/          # React + Vite — Frontend de empleados
```

## Candidatos

| Candidato | Proyecto | Stack |
|-----------|----------|-------|
| Julian | `julian/employees-back` | NestJS, TypeScript |
| Prueba | `prueba/prueba-backend` | NestJS, TypeScript |
| Prueba | `prueba/my-app` | Next.js, React, TypeScript |
| Sol | `sol/prueba_tecnica/backend` | Spring Boot, Java, Maven |
| Sol | `sol/prueba_tecnica/frontend` | React, Vite, TypeScript |

## Instrucciones por stack

### NestJS (Node.js)

```bash
cd <proyecto>
npm install
npm run start:dev
```

### Next.js

```bash
cd prueba/my-app
npm install
npm run dev
```

### Spring Boot

```bash
cd sol/prueba_tecnica/backend
./mvnw spring-boot:run
```

### React + Vite

```bash
cd sol/prueba_tecnica/frontend
npm install
npm run dev
```
