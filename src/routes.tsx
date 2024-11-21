import { lazy } from 'react';
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
];
