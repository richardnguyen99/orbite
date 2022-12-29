/**
 * Client-side rendering entry point for application.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-day-picker/dist/style.css";

import ToastProvider from "@features/Toast/Provider";
import Toast from "@features/Toast";
import "./index.css";

const RouteRoot = React.lazy(() => import("./routes/root"));
const RouteAbout = React.lazy(() => import("./routes/about"));
const RouteSetting = React.lazy(() => import("./routes/setting"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteRoot />
      </React.Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteAbout />
      </React.Suspense>
    ),
  },
  {
    path: "/setting",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouteSetting />
      </React.Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
      <Toast />
    </ToastProvider>
  </React.StrictMode>
);
