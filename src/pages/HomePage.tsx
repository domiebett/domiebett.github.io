import { lazy } from "react";
import { useTheme } from "../contexts/ThemeContext";

const DarkDevHomePage = lazy(() => import("../components/darkdev/HomePage"));
const CleanModernHomePage = lazy(
  () => import("../components/cleanmodern/HomePage")
);

const HomePage = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      {theme === "darkdev" && <DarkDevHomePage />}
      {theme === "cleanmodern" && <CleanModernHomePage />}
    </>
  );
};

export default HomePage;
