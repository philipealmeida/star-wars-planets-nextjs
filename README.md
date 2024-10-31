# Star Wars Planets Explorer

A Next.js application that allows users to explore planets from the Star Wars universe using the SWAPI (Star Wars API).

## Overview

As referenced in the original requirements:


## Features

- Search planets by name
- Paginated list of planets
- Detailed view of each planet
- Responsive design for mobile and desktop
- Dark/Light mode support
- Server-side rendering with Next.js
- Real-time data fetching with SWR

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Data Fetching:** SWR
- **Styling:** CSS Modules with CSS Variables
- **Font:** Geist (Sans & Mono)
- **Testing:** Jest & React Testing Library

## Project Structure

star-wars-planets-nextjs/
├── src/
│ ├── app/
│ │ ├── planets/
│ │ │ ├── [id]/
│ │ │ │ └── page.tsx        # Planet details page
│ │ │ └── page.tsx          # Main planets listing page
│ │ ├── layout.tsx          # Root layout with Geist font config
│ │ └── page.tsx            # Home page (redirects to /planets)
│ ├── components/
│ │ └── planets/
│ │   ├── PlanetList.tsx    # Main planet listing with search and pagination
│ │   ├── PlanetCard.tsx    # Individual planet card component
│ │   ├── PlanetDetails.tsx # Detailed planet view component
│ │   ├── PlanetSearch.tsx  # Search input with debounce
│ │   └── Pagination.tsx    # Pagination controls
│ ├── hooks/
│ │ ├── useDebounce.ts      # Custom debounce hook
│ │ └── useSwapiPlanets.ts  # SWR hook for planet data
│ ├── lib/
│ │ ├── types.ts            # TypeScript interfaces for planets
│ │ └── api.ts              # SWAPI fetch utilities
│ ├── styles/
│ │ ├── components/
│ │ │ └── planets/
│ │ │   ├── PlanetCard.module.css
│ │ │   ├── PlanetDetails.module.css
│ │ │   ├── PlanetList.module.css
│ │ │   ├── PlanetSearch.module.css
│ │ │   └── Pagination.module.css
│ │ └── globals.css         # Global styles and CSS variables
│ └── __tests__/
│   └── components/
│     └── planets/
│       ├── PlanetCard.test.tsx
│       ├── PlanetDetails.test.tsx
│       ├── PlanetList.test.tsx
│       ├── PlanetSearch.test.tsx
│       ├── Pagination.test.tsx
│       └── __snapshots__/   # Jest snapshots
├── public/
│ └── star-wars.svg         # Logo image
├── jest.config.mjs         # Jest configuration
├── jest.setup.ts           # Jest setup file
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json        # ESLint configuration
└── .gitignore            # Git ignore rules


## Getting Started

1. **Clone and Install**
bash
git clone <your-repo-url>
cd flecto-palm-exercise
npm install

2. **Development Server**
bash
npm run dev


3. Open [http://localhost:3000](http://localhost:3000) with your browser

## Testing

bash
Run unit tests
npm test
Run tests in watch mode
npm test:watch
Generate coverage report
npm test:coverage


## Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

CSS Module example:
typescript:flecto/frontend-exercise/flecto-palm-execise/src/app/page.module.css


## Dark Mode Support

The application uses CSS variables for theming:
css:flecto/frontend-exercise/flecto-palm-execise/src/app/globals.css


## API Integration

The application uses SWAPI (Star Wars API) with the following endpoints:

- `GET /api/planets/` - List all planets (paginated)
- `GET /api/planets/?search={query}` - Search planets
- `GET /api/planets/{id}/` - Get planet details

Data fetching is implemented using SWR as shown in package.json:
json:flecto/frontend-exercise/flecto-palm-execise/package.json


## Dependencies

The project uses the following key dependencies:
json:flecto/frontend-exercise/flecto-palm-execise/package.json


## Contributing

Feel free to contribute to this project. Open an issue or submit PRs.

## License

This project is MIT licensed.

## **What we expect**
React and TypeScript

Unit / integration tests

A nice design using CSS

Clear README.md

## What w**e'd love to see**

NextJS

TanStack Query / SWR

## What would be nice
If you have the time, you might want to add these to your project:

Responsive layout

Mobile suppport