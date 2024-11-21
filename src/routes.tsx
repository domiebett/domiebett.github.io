import SuspenseLoader from "components/ui/suspense-loader/SuspenseLoader";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <SuspenseLoader>
        <HomePage />
      </SuspenseLoader>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <SuspenseLoader>
        <PortfolioPage />
      </SuspenseLoader>
    ),
  },
  { path: "/admin", element: <AdminPage /> },
];
