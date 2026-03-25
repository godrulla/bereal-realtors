# BeReal Realtors - Real Estate Website

A modern real estate website built with React, TypeScript, and Vite, featuring property listings, agent profiles, and buyer/seller tools.

## Description

A full-featured real estate platform for BeReal Realtors with property browsing, buying/selling guides, agent directory, and contact functionality. Built with a component-driven architecture using shadcn/ui and Tailwind CSS for a polished, professional look.

## Features

- Property listings with search and filtering
- Individual property detail pages
- Buy and sell guides for clients
- Agent directory with profiles
- Contact page with inquiry form
- Responsive design across all devices
- Dark/light theme support
- Recharts-powered data visualizations
- Accessible UI components via Radix UI

## Tech Stack

- **Runtime**: Vite 5
- **Language**: TypeScript
- **Framework**: React 18
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with tailwindcss-animate
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Theming**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

### Environment Variables

No environment variables required for the frontend. Configure API endpoints in the source if connecting to a backend.

## Project Structure

```
src/
├── components/         # Reusable UI components
├── data/               # Static data and mock content
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Route-level page components
│   ├── Home.tsx
│   ├── PropertiesPage.tsx
│   ├── BuyPage.tsx
│   ├── SellPage.tsx
│   ├── AgentsPage.tsx
│   └── ContactPage.tsx
├── App.tsx             # Root component with routing
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## Contributing

PRs welcome. Please open an issue first to discuss proposed changes.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

Built by Armando Diaz Silverio
