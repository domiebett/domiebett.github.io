import SuspenseLoader from "components/ui/suspense-loader/SuspenseLoader";
import { useTheme } from "contexts/ThemeContext";
import { lazy, Suspense } from "react";

const DarkDevPortFolioPage = lazy(
  () => import("../components/darkdev/MyProjects/Portfolio")
);

const PortforlioPage = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <SuspenseLoader>
      {theme === "darkdev" && <DarkDevPortFolioPage />}
    </SuspenseLoader>
  );
};

export default PortforlioPage;
