/**
 * Client-side rendering entry point for application.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
