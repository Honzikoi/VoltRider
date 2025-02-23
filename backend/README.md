VoltRide - Electric Scooter Fleet Management 🚲⚡

📌 Project Overview

VoltRide is a fleet management system for electric scooters, designed to help:

Delivery services

Short-term rentals

Resellers

The system provides maintenance tracking, stock management, and test/demo ride scheduling while ensuring clean code practices and a scalable architecture.

🏗️ Tech Stack

Backend: NestJS (TypeScript, Clean Architecture) & Fastify

Databases:

PostgreSQL (structured data: maintenance, stock, scooters)

MongoDB (important logs, flexible data)

Containerization: Docker & Docker Compose

ORM/ODM: TypeORM (PostgreSQL) & Mongoose (MongoDB)

Testing: Jest

📁 Folder Structure

/backend/src
 ├── application/        # Business logic (Use Cases, Services)
 │    ├── scooter.service.ts
 │    ├── maintenance.service.ts
 │    ├── stock.service.ts
 │
 ├── domain/             # Entities & Schemas
 │    ├── entities/      # PostgreSQL (TypeORM)
 │    │    ├── scooter.entity.ts
 │    │    ├── maintenance.entity.ts
 │    ├── schemas/       # MongoDB (Mongoose)
 │         ├── log.schema.ts
 │
 ├── infrastructure/     # Database & external services
 │    ├── database/
 │    │    ├── database.module.ts
 │    │    ├── postgres/
 │    │    │    ├── postgres.provider.ts
 │    │    ├── mongo/
 │    │         ├── mongo.provider.ts
 │    ├── config/
 │         ├── env.config.ts
 │
 ├── interface/          # Controllers & API endpoints
 │    ├── controllers/
 │    │    ├── scooter.controller.ts
 │    │    ├── maintenance.controller.ts
 │    ├── dto/           # Data Transfer Objects
 │
 ├── main.ts             # Entry point for the backend

🚀 How to Run the Project

1️⃣ Clone the Repository

git clone https://github.com/Honzikoi/VoltRide.git
cd VoltRide/backend

2️⃣ Set Up Environment Variables

Create a .env file:

# PostgreSQL
DATABASE_URL=postgresql://user:password@postgres:5432/voltRideDB

# MongoDB
MONGODB_URI=mongodb://mongodb:27017/voltRideDB2

3️⃣ Build & Start the Application with Docker

docker-compose build --no-cache

docker-compose up -d

4️⃣ Run Database Seeding (Manually if Needed)

docker exec -it backend-backend-1 sh -c "node dist/infrastructure/database/seed.ts"


5️⃣ Verify Database Connections

Check PostgreSQL Tables & Data

docker exec -it backend-postgres-1 psql -U user -d voltRideDB -c "SELECT * FROM scooters LIMIT 10;"

Check MongoDB Collections & Data

docker exec -it backend-mongodb-1 mongosh -u root -p yourpassword --authenticationDatabase admin
use voltRideDB2
show collections

db.scooters.find().pretty()


📌 API Endpoints (WIP)

GET /scooters - List all scooters

POST /scooters - Create a new scooter

GET /maintenance - Get maintenance logs

POST /maintenance - Add maintenance record

(More endpoints coming soon...)

📜 Clean Architecture Principles Used

🛠️ Contributors

@Honzikoi - Project Owner & Developer

🚀 Happy Coding!