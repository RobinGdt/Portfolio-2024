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
import dineImage from "./assets/dine-image.png";
import photosnapImage from "./assets/photosnap-image.jpg";
import dinePreview from "./assets/dine-preview.jpg";
import photosnapPreview from "./assets/photosnap-preview.jpg";
import { useTranslation } from "react-i18next";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import About from "./components/About/About";

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

  window.addEventListener("popstate", () => {
    resetLoadingState();
  });
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
          path="/about"
          element={<About darkMode={darkMode} isLoaded={isLoaded} />}
        />
        <Route
          path="/Dine"
          element={
            <Projects
              darkMode={darkMode}
              isLoaded={isLoaded}
              title="Dine"
              href="http://robingdt.github.io/Dine"
              background={dineImage}
              projet={t("projects.label.perso")}
              detailText={t("projects.dine.detail")}
              contextDetail={t("projects.dine.context")}
              stack="React / Typescript"
              src={dinePreview}
              firstProject={
                <ProjectCard
                  background={projet1}
                  title={"HygoTools"}
                  projet={t("projects.label.pro")}
                  to={"/HygoTools"}
                  onClick={resetLoadingState}
                />
              }
              secondProject={
                <ProjectCard
                  background={photosnapImage}
                  title={"Photosnap"}
                  projet={t("projects.label.perso")}
                  to={"/Photosnap"}
                  onClick={resetLoadingState}
                />
              }
            />
          }
        />
        <Route
          path="/Photosnap"
          element={
            <Projects
              darkMode={darkMode}
              isLoaded={isLoaded}
              title="Photosnap"
              background={photosnapImage}
              projet={t("projects.label.perso")}
              detailText="FoodFinder vous permet de trouver des recettes en fonction des ingrédients que vous avez dans votre frigo."
              stack="React"
              contextDetail="Dine vous permet de trouver des recettes en fonction des ingrédients que vous avez dans votre frigo."
              src={photosnapPreview}
              firstProject={
                <ProjectCard
                  background={projet1}
                  title={"HygoTools"}
                  projet={t("projects.label.pro")}
                  to={"/HygoTools"}
                  onClick={resetLoadingState}
                />
              }
              secondProject={
                <ProjectCard
                  background={dineImage}
                  title={"Dine"}
                  projet={t("projects.label.perso")}
                  to={"/Dine"}
                  onClick={resetLoadingState}
                />
              }
            />
          }
        />
        <Route
          path="/HygoTools"
          element={
            <Projects
              darkMode={darkMode}
              isLoaded={isLoaded}
              title="HygoTools"
              background={projet1}
              projet={t("projects.label.perso")}
              detailText="FoodFinder vous permet de trouver des recettes en fonction des ingrédients que vous avez dans votre frigo."
              stack="React"
              contextDetail="Dine vous permet de trouver des recettes en fonction des ingrédients que vous avez dans votre frigo."
              src={projet1}
              firstProject={
                <ProjectCard
                  background={photosnapImage}
                  title={"Photosnap"}
                  projet={t("projects.label.pro")}
                  to={"/Photosnap"}
                  onClick={resetLoadingState}
                />
              }
              secondProject={
                <ProjectCard
                  background={dineImage}
                  title={"Dine"}
                  projet={t("projects.label.perso")}
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
