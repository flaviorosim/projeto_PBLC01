# NestExchange

NestExchange is a backend API for a student-exchange accommodation platform. It is designed to connect exchange students with hosts, manage accommodation availability, and handle reservation workflows.

The project was developed as an academic software engineering project and focuses on REST API development, relational data modelling, authentication, and database integration.

> **Repository scope:** this repository contains the backend API. The frontend part was separated in another repository.

## Features

- **Authentication:** user login with password verification using Argon2 and JWT generation.
- **Calendar management:** create, retrieve, update, and delete host availability calendars.
- **Availability checking:** check whether a calendar has conflicting reservations for a requested date range.
- **Reservation management:** create, retrieve, update, and delete reservations, as well as update their status.
- **Relational data model:** data structures for users, profiles, hosts, exchange students, accommodations, addresses, calendars, reservations, ratings, and messages.
- **API documentation:** interactive OpenAPI/Swagger documentation served by the backend.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| TypeScript | Main programming language |
| Node.js | JavaScript runtime |
| Express 5 | REST API and HTTP routing |
| PostgreSQL 15 | Relational database |
| Prisma ORM | Database access and schema management |
| Argon2 | Password hashing and verification |
| JSON Web Tokens (JWT) | Token generation after login |
| Swagger / OpenAPI | API documentation |
| Docker Compose | Local PostgreSQL environment |

## Project Structure

```text
projeto_PBLC01/
├── prisma/
│   └── schema.prisma          # Database schema and relationships
├── src/
│   ├── controllers/           # HTTP request handlers
│   ├── repositories/          # Database operations through Prisma
│   ├── routes/                # API route definitions
│   ├── schemas/               # OpenAPI documentation schemas
│   ├── seed.ts                # Sample database data
│   └── server.ts              # Express application entry point
├── docker-compose.yaml        # PostgreSQL container configuration
├── package.json
├── tsconfig.json
└── README.md
```

The code follows a separation between routes, controllers, and repositories: routes expose the HTTP endpoints, controllers handle requests and responses, and repositories perform database operations through Prisma.

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js and npm
- Docker and Docker Compose
- Git

### 1. Clone the repository

```bash
git clone https://github.com/flaviorosim/projeto_PBLC01.git
cd projeto_PBLC01
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start PostgreSQL

The repository includes a Docker Compose configuration for PostgreSQL 15.3.

```bash
docker compose up -d
```

The current Compose configuration exposes PostgreSQL on port `5432` and uses the following development database settings:

| Variable | Value |
| --- | --- |
| Database | `thor` |
| Username | `thor` |
| Password | `thor` |
| Host port | `5432` |

These credentials are intended only for local development. 

### 4. Configure environment variables

The application expects a database connection string and a JWT signing secret. Set these variables in the terminal where you will run the Prisma commands and the API.

**Linux / macOS (Bash):**

```bash
export DATABASE_URL="postgresql://thor:thor@localhost:5432/thor?schema=public"
export JWT_SECRET="replace-this-with-a-long-random-secret"
export PORT=3000
```

**Windows (PowerShell):**

```powershell
$env:DATABASE_URL="postgresql://thor:thor@localhost:5432/thor?schema=public"
$env:JWT_SECRET="replace-this-with-a-long-random-secret"
$env:PORT="3000"
```

### 5. Generate the Prisma Client and prepare the database

```bash
npx prisma generate
npx prisma db push
```

`prisma generate` creates the Prisma Client used by the repositories. `prisma db push` applies the current Prisma schema to the PostgreSQL database.

### 6. (Optional) Insert sample data

The project includes a seed script with sample users and related platform data.

```bash
npx prisma db seed
```

### 7. Run the development server

```bash
npm run dev
```

The API should be available at:

```text
http://localhost:3000
```

The development script uses `tsx watch`, so the server restarts when source files change.

## API Documentation

Interactive API documentation is available at:

```text
http://localhost:3000/docs
```

The documentation is generated with Swagger JSDoc from the schemas in `src/schemas`.

## API Endpoints

The current server exposes the following route groups:

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/auth/login` | Authenticate a user and return a JWT. |

Example request:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","senha":"your-password"}'
```

The request body uses the field names `email` and `senha`. On successful authentication, the response contains a token that expires after one hour.

### Calendars

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/calendars` | Retrieve all calendars. |
| `GET` | `/calendars/:id` | Retrieve a calendar by ID. |
| `POST` | `/calendars` | Create a calendar. |
| `PUT` | `/calendars/:id` | Update a calendar. |
| `DELETE` | `/calendars/:id` | Delete a calendar. |
| `POST` | `/calendars/:id/check-availability` | Check for reservation conflicts in a date range. |

Example availability request:

```bash
curl -X POST http://localhost:3000/calendars/1/check-availability \
  -H "Content-Type: application/json" \
  -d '{"beginDate":"2026-06-01T00:00:00.000Z","endDate":"2026-06-10T00:00:00.000Z"}'
```

The response contains an `isAvailable` boolean.

### Reservations

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/reservations` | Retrieve all reservations. |
| `GET` | `/reservations/:id` | Retrieve a reservation by ID. |
| `POST` | `/reservations` | Create a reservation. |
| `PUT` | `/reservations/:id` | Update a reservation. |
| `PATCH` | `/reservations/:id/status` | Update a reservation's status. |
| `DELETE` | `/reservations/:id` | Delete a reservation. |

The reservation model associates a booking with an exchange student and a calendar, and stores its start date, end date, and status.

## Data Model

The Prisma schema represents the main entities of the platform:

- **User and Profile:** account information and user profile details.
- **Host:** users who offer accommodation, including house rules.
- **ExchangeStudent:** exchange-student information, including nationality and spoken languages.
- **Accommodation and Address:** accommodation descriptions, capacity, and location details.
- **Calendar:** host availability and its related reservations.
- **Reservation:** booking dates, status, exchange student, and calendar references.
- **Rating:** evaluations and comments between users.
- **Message:** messages exchanged between users.


## License

This project is distributed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
