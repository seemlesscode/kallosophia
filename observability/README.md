# Observability Plan

This document outlines the observability stack for the Kallosophia project, aimed at providing logs, metrics, and error tracking with minimal cost and complexity.

## Goals

- Debug issues across frontend and backend
- Monitor app and system performance
- Track and categorize runtime errors
- Keep infrastructure cost under control

---

## Stack Overview

| Concern        | Tool            | Hosting            | Notes                                        |
| -------------- | --------------- | ------------------ | -------------------------------------------- |
| Metrics        | Prometheus      | Self-hosted in GKE | Kubernetes and app-level metrics             |
| Logs           | Loki + Promtail | Self-hosted in GKE | Centralized logging, integrates with Grafana |
| Dashboards     | Grafana         | Self-hosted in GKE | Visualizes logs + metrics in one place       |
| Error Tracking | Sentry          | Sentry.io (cloud)  | Free tier available for personal use         |

---

## Architecture

- **Grafana** serves as the UI for both logs and metrics.
- **Prometheus** scrapes metrics from:
  - Application endpoints (e.g., `/metrics`)
  - Kubernetes cluster (via kube-state-metrics)
- **Loki + Promtail** collects and aggregates logs from pods.
- **Sentry** automatically captures and categorizes application-level errors.

## Usage

- Grafana: View metrics, logs, and set up alerts.
- Sentry: Monitor and categorize app exceptions.

## Future Improvements

- Add distributed tracing with OpenTelemetry.
- Alert routing via Slack or email.
- Export data to long-term storage (e.g., GCS or BigQuery).

## Cost Control

- All tools used are open source and self-hosted (except Sentry).
- Sentry's free tier supports up to 5K errors/month.
- Use GCP Budget Alerts to monitor resource consumption.

## Notes

- The infrastructure setup is designed to evolve with the project.
