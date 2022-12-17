/**
 * Client-side rendering entry point for application.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Routes from "./routes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes.Root />,
  },
  {
    path: "/about",
    element: <Routes.About />,
  },
  {
    path: "/setting",
    element: <Routes.Setting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
