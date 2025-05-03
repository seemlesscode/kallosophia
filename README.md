# Kallosophia

Kallosophia is a culture quiz application focused on art. It allows users to test their knowledge about artworks, artists, and historical movements, while offering both free and premium features. Users can play quizzes, track their progress, and customize their experience with premium accounts.

## Features

- Play art-related quizzes on various topics.
- Track your performance and see your progress over time.
- Premium accounts can create custom quizzes and participate in leaderboards.

## Technologies

- **Frontend**: Built with Next.js for a dynamic and responsive user interface.
- **Backend**: GraphQL API with Apollo Server and Prisma, using Node.js and TypeScript.
- **Database**: PostgreSQL for structured, relational data.
- **Authentication**: JWT-based login and session management.
- **Deployment**: Containerized via Docker and deployed to GCP (Google Kubernetes Engine).

## Monorepo Structure

This project uses a monorepo structure (via `pnpm workspaces`) to manage multiple packages and apps:

- `/apps/web`: Frontend (Next.js)
- `/apps/api`: Backend (GraphQL server)
- `/packages/core`: Shared logic and models

## Infrastructure

The infrastructure is managed as code and lives in the `infra/` directory. It includes:

- Terraform for provisioning GCP resources (GKE, networking, IAM).
- Kubernetes manifests (via Helm) for deploying the frontend and backend apps.
- GitHub Actions for CI/CD automation, including image builds and cluster deployments.

See `infra/README.md` for full details on the architecture and deployment plan.

## Observability

To monitor and debug the platform effectively, the project uses an open-source observability stack:

| Concern        | Tool            | Hosting            | Notes                                        |
| -------------- | --------------- | ------------------ | -------------------------------------------- |
| Metrics        | Prometheus      | Self-hosted in GKE | Kubernetes and app-level metrics             |
| Logs           | Loki + Promtail | Self-hosted in GKE | Centralized logging, integrates with Grafana |
| Dashboards     | Grafana         | Self-hosted in GKE | Visualizes logs + metrics in one place       |
| Error Tracking | Sentry          | Sentry.io (cloud)  | Free tier available for personal use         |

- **Grafana** serves as the unified UI for metrics and logs.
- **Prometheus** scrapes app and system metrics.
- **Loki + Promtail** aggregate logs from pods.
- **Sentry** captures and categorizes runtime exceptions (frontend & backend).

## Getting Started

To set up the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/seemlesscode/kallosophia.git
cd kallosophia
```

### 2. Install dependencies:

We recommend using [pnpm](https://pnpm.io/) for package management:

```bash
pnpm install
```

Alternatively, you can use Yarn or npm if you prefer.

### 3. Start the development server:

```bash
pnpm run dev
```

Your application should now be running on http://localhost:3000.

## Contributing

We welcome contributions to improve the Kallosophia project. If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-name`).

3. Make your changes and commit (`git commit -am 'Add feature'`).

4. Push to your branch (`git push origin feature-name`).

5. Submit a pull request with a detailed description of your changes.

## License

Kallosophia is released under the [Business Source License 1.1](./LICENSE).  
After May 3, 2028, it will be made available under the [MIT License](./LICENSE-MIT).

## Contact

For any questions or feedback, feel free to reach out to the project maintainers at tarek.dinkespiler@gmail.com.
