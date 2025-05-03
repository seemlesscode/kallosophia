# Infrastructure Overview

This directory contains all infrastructure-as-code (IaC) related to the Kallosophia project. The goal is to support repeatable, scalable, and auditable deployments using modern DevOps best practices.

## Structure

infra/
├── terraform/ # Cloud infrastructure provisioning (GCP, GKE, networking, etc.)
└── k8s/ # Kubernetes manifests (apps, services, configmaps, etc.)

## Tooling

| Concern              | Tool                                                  |
| -------------------- | ----------------------------------------------------- |
| Cloud infrastructure | [Terraform](https://www.terraform.io/)                |
| Kubernetes manifests | [Helm](https://helm.sh/)                              |
| Automation           | [GitHub Actions](https://github.com/features/actions) |
| Container registry   | GCR (Google Container Registry)                       |

## Deployment Plan

### 1. Provision GCP Infrastructure

Using Terraform:

- Create a GKE cluster
- Configure IAM roles and service accounts
- Set up networking (VPC, subnets, firewall)
- Configure Cloud DNS and SSL

Terraform config lives in `infra/terraform/`.

### 2. Deploy to Kubernetes

Using Helm or Kustomize:

- Deploy the `frontend` (Next.js app)
- Deploy the `backend` (API)
- Manage secrets and configs via sealed secrets

Kubernetes configs live in `infra/k8s/`.

### 3. CI/CD Integration

GitHub Actions will:

- Build and push Docker images to GCR
- Apply Terraform infrastructure changes
- Deploy the latest version to GKE via `kubectl` or `helm upgrade`

## Notes

- The infrastructure setup is designed to evolve with the project.
- Multi-environment support (e.g. staging, production) will be added later using Terraform workspaces or Kustomize overlays.
