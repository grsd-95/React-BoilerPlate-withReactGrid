# SaaS Project Boilerplate

A modern React + Vite boilerplate for building SaaS applications with Redux Toolkit, React Router, and comprehensive tooling.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 19 with HMR
- 🎨 SCSS for styling
- 🗂️ Redux Toolkit with RTK Query for state management
- 🛣️ React Router for routing
- 🔐 Authentication context and guards
- 📦 JSON Server for local API development
- 🎯 ESLint and Prettier for code quality
- 🐳 Docker support

## Getting Started

### Prerequisites

- Node.js >= 24.0.0
- npm or yarn

### Installation

```bash
npm install
```

### Development

#### Option 1: Run JSON Server and Vite together (Recommended)
```bash
npm run dev:server
```

This will start:
- JSON Server on http://localhost:3001
- Vite Dev Server on http://localhost:5173

#### Option 2: Run separately

Terminal 1 - JSON Server:
```bash
npm run json-server
```

Terminal 2 - Vite Dev Server:
```bash
npm run dev
```

### JSON Server Setup

This project uses JSON Server for the Todo API. See [JSON_SERVER_SETUP.md](./JSON_SERVER_SETUP.md) for detailed documentation.

Quick start:
1. Verify setup: `npm run test-setup`
2. Start both servers: `npm run dev:server` (Recommended)
   - Or run separately: `npm run json-server` in one terminal and `npm run dev` in another
3. The API will be available at http://localhost:3001/todos
4. The Vite proxy forwards `/todos` requests to the JSON server

**Troubleshooting:** See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) if you encounter any issues.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── app/                 # App-level components and routing
├── common/              # Common utilities and contexts
├── common-components/   # Reusable UI components
├── components/          # Feature components
├── config/              # Configuration files
├── dummyData/           # Dummy data for development
├── features/            # Feature modules (todo, user, etc.)
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
├── pages/               # Page components
├── services/            # API services and HTTP clients
├── store/               # Redux store configuration
├── styles/              # Global styles and themes
└── utils/               # Utility functions
```

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run dev:server` - Start JSON Server + Vite dev server (Recommended)
- `npm run json-server` - Start JSON Server only
- `npm run generate-db` - Regenerate db.json from dummy data
- `npm run test-setup` - Verify JSON Server setup
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching
- **React Router** - Routing
- **Axios/Fetch** - HTTP clients
- **SCSS** - Styling
- **JSON Server** - Mock API server

## License

MIT
