import './sentry.jsx';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./ErrorBoundary";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const rootElement = document.getElementById("root");

if (!rootElement.innerHTML) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
