<!-- README.md -->

# VoidNull Backend

<!-- ![VoidNull Logo](public/logo.png) (Replace with your project logo if available) -->

A RESTful backend API for managing inventory items, built with **NestJS**, **Prisma**, and **MySQL**.
Main features:

- CRUD operations for items (name, description, price, in stock, timestamps)
- Type-safe schema and data access via Prisma
- Modern development workflow with robust testing, formatting, and CI tools

---

## Table of Contents

<!-- * [Demo](#demo) -->

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
  <!-- * [Contributing](#contributing) -->
  <!-- * [License](#license) -->
  <!-- * [Acknowledgements](#acknowledgements) -->
- [Contact](#contact)

<!-- ---

## Demo

**Live Backend:** [https://void-null-back.onrender.com](https://void-null-back.onrender.com)
**Frontend:** [VoidNull Frontend](https://void-null-front.onrender.com)

> Example endpoint:
> [GET /items](https://void-null-back.onrender.com/items) – list all items

![Screenshot](public/screenshot.png) Replace if you have an actual screenshot -->

---

## Tech Stack

**Backend:**

- NestJS (TypeScript, Express)
- Prisma ORM
- MySQL

**Dev Tools:**

- Jest (unit & e2e testing)
- ESLint, Prettier, Husky, lint-staged, Commitlint
- Docker (optional, for local database or deployment)
- GitHub Actions (optional, for CI/CD)

---

## Getting Started

### Prerequisites

- Node.js (>=20.x)
- npm (>=9.x)
- MySQL database (local, Docker, or managed)
<!-- * (Optional) Docker -->

### Installation

```bash
git clone https://github.com/Ange230700/void_null_back.git
cd void_null_back
npm install
```

---

## Running the Project

### 1. Setup Environment Variables

Copy `.env.sample` to `.env` and fill in your values:

```env
DATABASE_URL="mysql://user:password@host:port/database_name"
FRONT_API_BASE_URL=http://localhost:4200
PORT=3000
```

### 2. Run Database Migrations & Seed (first time)

```bash
npm run prisma:migrate:dev
npm run prisma:db:seed
```

### 3. Start the Backend

**Development mode (auto-reload):**

```bash
npm run start:dev
```

**Production mode:**

```bash
npm run build
npm run start:prod
```

App runs by default at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
├── src/
│   ├── app.module.ts        # Main NestJS module
│   ├── app.controller.ts    # Root controller ("/" endpoint)
│   ├── items/               # Item module (CRUD: controller, service, DTOs)
│   └── prismaClient.ts      # Prisma client instance
├── prisma/
│   ├── schema.prisma        # Prisma database schema (MySQL)
│   └── seed.ts              # Database seeder (with Faker)
├── test/                    # e2e and unit test specs
├── .env.sample              # Example environment config
├── package.json
├── tsconfig.json
└── ...
```

---

## API Documentation

All endpoints accept/return JSON.

| Method | Endpoint    | Description                  |
| ------ | ----------- | ---------------------------- |
| GET    | /           | Healthcheck (`Hello World!`) |
| GET    | /items      | Get all items                |
| GET    | /items/\:id | Get one item by id           |
| POST   | /items      | Create new item              |
| PATCH  | /items/\:id | Update item                  |
| DELETE | /items/\:id | Delete item                  |

Example `Item` object:

```json
{
  "id": 1,
  "name": "Book",
  "description": "A cool book",
  "price": "19.99 €",
  "inStock": true,
  "createdAt": "2024-06-16T12:34:56.000Z",
  "updatedAt": "2024-06-16T12:34:56.000Z"
}
```

<!-- > **OpenAPI/Swagger docs:** *Not included out of the box, but you can easily add with [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction).* -->
<!-- > See [src/items/items.controller.ts](src/items/items.controller.ts) for endpoints. -->

---

## Testing

Run all tests:

```bash
npm test
```

- Unit tests: Jest (`*.spec.ts`)
- End-to-end tests: Jest + Supertest (`test/*.e2e-spec.ts`)

---

## Deployment

1. Set production `.env` (`DATABASE_URL`, `PORT`, etc).
2. Build the project:

   ```bash
   npm run build
   ```

3. Start the server:

   ```bash
   npm run start:prod
   ```

4. For Docker, create a `Dockerfile` or use your favorite platform (e.g. Render, Heroku, AWS, etc).

---

## Environment Variables

Create a `.env` file at the project root with:

```env
DATABASE_URL="mysql://user:password@host:port/database_name"
FRONT_API_BASE_URL=<frontend origin for CORS>
PORT=3000
```

- `DATABASE_URL`: MySQL connection string (required)
- `FRONT_API_BASE_URL`: Frontend base URL for CORS (e.g. `http://localhost:4200`)
- `PORT`: Server port (default: 3000)

<!-- ---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push your branch (`git push origin feature/new-feature`)
5. Create a Pull Request

Pre-commit hooks, linting, and formatting are enforced for code quality. -->

<!-- ---

## License

MIT License -->

<!-- ---

## Acknowledgements

Special thanks to these libraries & frameworks:

* [NestJS](https://nestjs.com/)
* [Prisma](https://www.prisma.io/)
* [MySQL](https://www.mysql.com/)
* [Jest](https://jestjs.io/)
* [Faker](https://fakerjs.dev/) -->

---

## Contact

Ange KOUAKOU – [kouakouangeericstephane@gmail.com](mailto:kouakouangeericstephane@gmail.com)

[Frontend Repo](https://github.com/Ange230700/void_null_front)
[Backend Repo](https://github.com/Ange230700/void_null_back)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
