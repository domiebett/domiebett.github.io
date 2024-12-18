import { lazy } from "react";
import { useTheme } from "../contexts/ThemeContext";
import SuspenseLoader from "components/ui/suspense-loader/SuspenseLoader";

const DarkDevHomePage = lazy(() => import("./themes/darkdev/HomePage"));
const CleanModernHomePage = lazy(
  () => import("./themes/cleanmodern/HomePage")
);

const HomePage = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <SuspenseLoader>
      {theme === "darkdev" && <DarkDevHomePage />}
      {theme === "cleanmodern" && <CleanModernHomePage />}
    </SuspenseLoader>
  );
};

export default HomePage;
