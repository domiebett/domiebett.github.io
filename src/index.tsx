import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";

import './styles/global.scss';

const rootEl = document.getElementById("root") as Element;
const root = createRoot(rootEl);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
