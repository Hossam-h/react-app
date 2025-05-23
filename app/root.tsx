import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  NavLink,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="w-full bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
          <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
            <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-blue-400">MySite</Link>
            <div className="flex gap-6 text-lg">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "font-bold text-blue-700 dark:text-blue-400" : "text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "font-bold text-blue-700 dark:text-blue-400" : "text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "font-bold text-blue-700 dark:text-blue-400" : "text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "font-bold text-blue-700 dark:text-blue-400" : "text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"}`
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
