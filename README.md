## Flex Property Review Manager

A React + TypeScript single-page application bootstrapped with Vite, styled with Tailwind CSS and shadcn/ui components. It showcases a properties browsing experience, details pages, a booking widget, reviews, and a simple analytics dashboard.

### Tech Stack
- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui (Radix UI primitives)
- React Router v6
- Zustand for state management
- TanStack Query for data fetching/caching (where applicable)
- Recharts for charts, Leaflet for maps

### Getting Started
Prerequisites:
- Node.js 18+ (recommended LTS)

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Lint the project:
```bash
npm run lint
```

### Routing
- Home: `/`
- Properties listing: `/properties`
- Property details: `/properties/:id`
- Replica property details page: `/website`  ← Use this to view the replica page


### Project Structure
Key folders:
- `src/components` — UI components organized by domain (`features/`) and layout/common elements.
- `src/pages` — Top-level route components (`Index.tsx`, `NotFound.tsx`).
- `src/stores` — Zustand stores for app state (e.g., `propertiesStore`, `reviewsStore`).
- `src/services` — Data access utilities to read JSON assets.
- `src/types` — Shared TypeScript interfaces and types.
- `public/api` — Static JSON used as the data source.

### Features
- Properties list and details view
- Booking widget with date range selection and stay policies
- Reviews listing and status
- Dashboard with stats and charts (guest mentions, reviews, etc.)
- Responsive layout with header, sidebar, and footer

### Available Scripts
- `npm run dev` — Start Vite dev server
- `npm run build` — Build for production
- `npm run build:dev` — Development-mode build (useful for quick artifact checks)
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

### Environment & Configuration
- The project requires a `.env`. If you add one, do not commit secrets. Follow standard Vite conventions (`VITE_*` prefix for client-exposed variables).
- Required variables are `VITE_API_BASE_URL=<url_to_backend_link`

### Notes for Reviewers
- To access the replica version of the property details page, navigate to `/website`.

### License / Assessment
This repository is for a practical assessment. Usage is limited to evaluation purposes.

