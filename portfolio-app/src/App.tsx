import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GlobalStyle from "./GlobalStyle";
import Typography from "./utils/Typography";
import { COLORS } from "./utils/palette";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import i18n from "./i18n";
import { useLoadingState } from "./customHooks/useLoadingEffect";
import Projects from "./components/Projects/Projects";
import projet1 from "./assets/project-1.jpeg";
import { useTranslation } from "react-i18next";
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  const { isLoaded, resetLoadingState } = useLoadingState();
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }

    return () => {};
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", String(newDarkMode));
      return newDarkMode;
    });
  };
  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Typography />
      <Header
        darkMode={darkMode}
        isLoaded={isLoaded}
        fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
        onClickLoading={resetLoadingState}
        onClickDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              isLoaded={isLoaded}
              onClickLoading={resetLoadingState}
            />
          }
        />
        <Route
          path="/Dine"
          element={
            <Projects
              darkMode={darkMode}
              isLoaded={isLoaded}
              title="Dine"
              background={projet1}
              projet={t("projects.label.perso")}
              detailText="FoodFinder vous permet de trouver des recettes en fonction des ingrédients que vous avez dans votre frigo."
              stack="React"
              contextDetail="Dine vous permet de trouver des recettes en fonction des ingrédients que vous avez dans votre frigo."
              src={projet1}
              firstProject={
                <ProjectCard
                  background={projet1}
                  title={"HygoTools"}
                  projet={"pro"}
                  to={"/Dine"}
                  onClick={resetLoadingState}
                />
              }
              secondProject={
                <ProjectCard
                  background={projet1}
                  title={"Gestion Pro Planner"}
                  projet={"perso"}
                  to={"/Dine"}
                  onClick={resetLoadingState}
                />
              }
            />
          }
        />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
