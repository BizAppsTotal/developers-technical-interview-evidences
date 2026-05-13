# Developers Technical Interview Evidences

Repositorio monorepo que consolida las pruebas técnicas entregadas por candidatos durante el proceso de selección.

## Estructura

```
.
├── julian_velasquez/
│   └── employees-back/           # NestJS — API REST de empleados
├── brayan_mora/
│   ├── my-app/                   # Next.js — Frontend de empleados
│   └── prueba-backend/           # NestJS — API REST de empleados
└── sol_salavarrieta/
    └── prueba_tecnica/
        ├── backend/              # Spring Boot — API REST de empleados
        └── frontend/             # React + Vite — Frontend de empleados
```

## Candidatos

| Candidato | Proyecto | Stack |
|-----------|----------|-------|
| Julian Velasquez | `julian_velasquez/employees-back` | NestJS, TypeScript |
| Brayan Mora | `brayan_mora/prueba-backend` | NestJS, TypeScript |
| Brayan Mora | `brayan_mora/my-app` | Next.js, React, TypeScript |
| Sol Salavarrieta | `sol_salavarrieta/prueba_tecnica/backend` | Spring Boot, Java, Maven |
| Sol Salavarrieta | `sol_salavarrieta/prueba_tecnica/frontend` | React, Vite, TypeScript |

## Instrucciones por stack

### NestJS (Node.js)

```bash
cd <proyecto>
npm install
npm run start:dev
```

### Next.js

```bash
cd brayan_mora/my-app
npm install
npm run dev
```

### Spring Boot

```bash
cd sol_salavarrieta/prueba_tecnica/backend
./mvnw spring-boot:run
```

### React + Vite

```bash
cd sol_salavarrieta/prueba_tecnica/frontend
npm install
npm run dev
```
