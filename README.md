# GR Theme Change Boilerplate

A React + Vite SaaS boilerplate with theme support, authentication, protected routes, and mock API tooling.

## Key Features

- ⚡ Vite-powered frontend with React 19
- 🎛 Redux Toolkit + RTK Query for state and data management
- 🔐 Authentication flow with guards and session persistence
- 🧭 Dynamic menu-driven routing from API data
- 🎨 SCSS-based styling and theme context support
- 🧪 Local mock backend via JSON Server
- 🧩 Docker-ready multi-stage production build
- 🛠 ESLint + Prettier for consistent code quality

## Repo Flow Overview

### Application bootstrap

- `src/main.jsx` is the entry point.
- It loads global styles and renders the React app inside `BrowserRouter`.
- `App.jsx` wraps the app with:
  - `ErrorBoundary`
  - Redux `Provider`
  - `AuthProvider`
  - `ThemeProvider`
  - `ToastContainer`
  - `SuspenseBoundary`
- `AppRoutes.jsx` defines public routes and protected app routes.

### Authentication and route protection

- `AuthContext` manages login, logout, and persisted token/user state.
- Authentication state is stored in `localStorage`.
- `PrivateRoute` redirects unauthenticated users to `/login`.
- Menu data is fetched only when authenticated.

### Dynamic routing and menu flow

- `menuApi.js` loads menu config from `/mainMenu`.
- `AppRoutes.jsx` uses that menu data to build app routes dynamically.
- Protected routes render inside `AppShell/Shell.jsx`.
- `Shell` includes the app layout with header, sidebar, main content, and footer.

### State management and API layer

- `src/store/index.js` configures the Redux store.
- `rootReducer.js` combines feature reducers and RTK Query reducers.
- `store/api/baseApi.js` defines the RTK Query base API layer.
- `serviceClient.js` provides a shared HTTP client wrapper with request cancellation, loader control, and error handling.
- `axiosConfig.js` configures axios with `VITE_API_URL` and auth headers.

### Proxy and environment config

- `vite.config.js` uses `src/config/proxy.conf.js`.
- In development, `/api` requests are proxied to `VITE_API_URL` or a fallback hosted JSON server.
- In production, proxy targets use `VITE_API_URL`, `API_URL`, or `VITE_JSON_SERVER_URL`.
- `src/config/env.js` exposes runtime environment variables and `VITE_` prefixed values.

### Mock backend

- `db.json` contains mock data for the app.
- `json-server.json` configures json-server defaults for port `3001`, watch mode, and response delay.
- `npm run dev:local` starts Vite and JSON Server together; it currently launches JSON Server on port `3002`.
- The frontend API client uses `VITE_API_URL` to resolve backend requests.
- JSON Server serves menu and todo endpoints for local development.

## Environment Variables

The project uses `.env` and `.env.production` files for environment-specific values.
- `VITE_API_URL` is the base URL used by Axios and the Vite proxy.
- `VITE_APP_NAME` sets the application title/branding.
- `NODE_ENV` sets the runtime environment.

If you run the local mock backend, set `VITE_API_URL=http://localhost:3002` or update the proxy config to point to your local server.

## Getting Started

### Prerequisites

- Node.js >= 24.0.0
- npm
- Optional: Docker for container builds

### Install dependencies

```bash
npm install
```

### Run locally

Recommended local dev command:

```bash
npm run dev:local
```

This starts:
- Vite dev server on `http://localhost:5173`
- JSON Server on `http://localhost:3002`

If you want to run only Vite:

```bash
npm run dev
```

If you want only JSON Server:

```bash
npx json-server --watch db.json --port 3002
```

> If you use `npm run dev:local`, ensure `VITE_API_URL` points to `http://localhost:3002` when needed.

### Alternative setup

Use the bash helper script on environments that support Bash:

```bash
npm run start-setup
```

### Build for production

```bash
npm run build
```

### Preview production bundle

```bash
npm run preview
```

## Docker Support

Build the Docker image:

```bash
npm run docker:build
```

Run the container:

```bash
npm run docker:run
```

The container serves static files from Nginx on port `80`.

## Project Structure

```
src/
├── app/                   # App routes, layouts, and shell
├── common/                # Contexts, HOCs, shared utilities
├── common-components/     # Reusable UI components
├── components/            # Feature-specific components
├── config/                # Vite proxy and env utilities
├── dummyData/             # Sample data for development
├── features/              # Feature modules and RTK Query APIs
├── hooks/                 # Custom React hooks
├── layouts/               # Layout components
├── pages/                 # Page screens and views
├── services/              # HTTP clients and auth helpers
├── store/                 # Redux store setup and API reducers
├── styles/                # Global SCSS and theme styles
└── utils/                 # Utility helpers and constants
```

## Important Files

- `package.json` - scripts and dependencies
- `vite.config.js` - Vite dev server config and proxy
- `src/main.jsx` - app entry point
- `src/app/App.jsx` - root app component and providers
- `src/app/AppRoutes.jsx` - route definitions and protected routes
- `src/common/contexts/AuthContext.jsx` - auth state and session persistence
- `src/store/index.js` - Redux store configuration
- `src/store/api/baseApi.js` - RTK Query base API
- `src/services/http/serviceClient.js` - HTTP service and request handling
- `db.json` - mocked backend data
- `json-server.json` - JSON Server runtime config
- `Dockerfile` - production Docker build

## Available Scripts

- `npm run dev` — Start Vite dev server only
- `npm run dev:local` — Start Vite and JSON Server together
- `npm run start-setup` — Run the Bash startup helper
- `npm run add-color-use` — Run the SCSS helper script
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Fix lint issues automatically
- `npm run format` — Format code with Prettier
- `npm run test` — Run Jest tests
- `npm run test:watch` — Run Jest in watch mode
- `npm run docker:build` — Build Docker image
- `npm run docker:run` — Run Docker container

## Notes

- API routes in development should use the `/api/*` prefix so the Vite proxy can forward them correctly.
- The app uses lazy-loaded pages and dynamic menu routing for protected sections.
- Authentication is simulated with a local token and stored user object.
- For production, replace the JSON Server mock backend with a real API.

