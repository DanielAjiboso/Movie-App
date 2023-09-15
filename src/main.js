import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App2 from "./pages/App2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "App2",
    element: <App2 />,
  },
]);
