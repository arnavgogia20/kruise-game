# Cloud-Hosted KruiseGame Dashboard (Prototype)

> **Note**: This is a frontend-only UX prototype. It is not production code.

## Purpose

This prototype was built to support early design discussion with OpenKruise maintainers and to validate user workflows for a cloud-hosted KruiseGame experience.

It is intentionally frontend-only, uses static mock data, and does not represent production-ready functionality. Several edge cases and error states are intentionally omitted.

## What's Included

- **Overview page**: Shows environment status, cloud provider and region selection
- **Deploy page**: Simulated one-click deployment with manual step-through
- **Services page**: Read-only list of mock game server workloads

## Intentional Limitations

- Uses static mock data only
- No backend APIs
- No real cloud provisioning or SDK calls
- No authentication
- Deployment flow is simplified (no actual provisioning logic)
- Error state handling is not implemented

## Running Locally

```bash
npm install
npm run dev
```

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Status

Work-in-progress vertical slice for design validation.
