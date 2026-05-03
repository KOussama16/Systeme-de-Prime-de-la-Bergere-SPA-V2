# La Bergere SPA - Systeme de Remuneration

Plateforme de gestion de la remuneration pour La Bergere SPA.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/              # Next.js App Router pages
    employes/       # Employee management
    remuneration/   # Compensation & benefits
    rapports/       # Reports & analytics
    settings/       # System configuration
  components/
    layout/         # AppShell, Sidebar, Header
    ui/             # StatCard, DataTable, EmptyState
    charts/         # BarChart, DonutChart
  lib/              # Utilities and Supabase client
```

## Features

- Dashboard with key compensation metrics
- Employee directory with search and filtering
- Compensation management (primes, avantages)
- Reports and analytics with visual charts
- Configurable salary grids and settings

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
