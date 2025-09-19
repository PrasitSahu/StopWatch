import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { register } from "./registerServiceWorker"; // Modern destructured import

// Create root for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in your app (optional)
reportWebVitals(console.log);

// Register the service worker for offline capabilities
register();
