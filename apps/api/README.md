# API Architecture Overview

This document outlines the backend architecture for the Kallosophia project. It is designed for flexibility, strong typing, and seamless integration with the frontend and future mobile clients.

## Tech Stack

| Layer      | Tool/Framework     | Description                                   |
| ---------- | ------------------ | --------------------------------------------- |
| API Type   | GraphQL            | Flexible data querying and mutations          |
| API Server | Apollo Server      | GraphQL server with middleware support        |
| ORM        | Prisma             | Type-safe database access and migrations      |
| Database   | PostgreSQL         | Reliable relational data store                |
| Language   | TypeScript         | Full-stack typing across frontend and backend |
| Deployment | Docker + GCP + GKE | Cloud-native, containerized infrastructure    |

## Why This Stack?

- GraphQL allows frontend and mobile clients to request only the data they need.
- Prisma simplifies working with PostgreSQL using type-safe queries.
- PostgreSQL is well-suited for complex relationships and structured data (like quizzes, answers, users).
- Apollo Server integrates easily with middleware, authentication, and monitoring.
- TypeScript improves developer productivity and reduces runtime bugs.

## Data Flow

- A client (web or mobile) sends a GraphQL query or mutation to the API.
- Apollo Server receives the request and passes it to resolvers.
- Resolvers use Prisma to query or mutate data in PostgreSQL.
- Results are returned in a structured GraphQL response.

## Extensibility

- Authentication & Authorization: Easily added as middleware in Apollo context.
- Subscriptions: GraphQL real-time updates for multiplayer or timed games.
- Federation (optional): For scaling to multiple microservices later.

## Mobile-Friendly

This architecture is fully compatible with mobile clients:

- Mobile apps can use the same GraphQL API.
- Apollo Client (or other GraphQL clients) work well in React Native or Flutter.
- Authentication and session handling can be standardized across platforms.
