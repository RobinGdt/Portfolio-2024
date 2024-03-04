import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GlobalStyle from "./GlobalStyle";
import Typography from "./utils/Typography";
import { COLORS } from "./utils/palette";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useLoadingState } from "./customHooks/useLoadingEffect";
import Projects from "./components/Projects/Projects";
import champs from "./assets/champs.webp";
import dineImage from "./assets/dine-image.png";
import photosnapImage from "./assets/photosnap-image.webp";
import dinePreview from "./assets/dine-preview.webp";
import login from "./assets/Dashboard-Login-New-Design.webp";
import add from "./assets/Dashboard-Add-Product.webp";
import edit from "./assets/Dashboard-Edit-Product.webp";
import search from "./assets/Dashboard-Search-Product-2.webp";
import photosnapPreview from "./assets/photosnap-preview.webp";
import { useTranslation } from "react-i18next";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import About from "./components/About/About";
import ReactGA from "react-ga4";

ReactGA.initialize("G-CKVRJTL03J");

function App() {
  const { isLoaded, resetLoadingState } = useLoadingState();
  const { t } = useTranslation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

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
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "Home Page",
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
          path="/HygoTools"
          element={
            <Projects
              darkMode={darkMode}
              isLoaded={isLoaded}
              title="HygoTools"
              background={champs}
              projet={t("projects.label.pro")}
              detailText={t("projects.hygo.detail")}
              contextDetail={t("projects.hygo.context")}
              stacks={["React", "Typescript", "NodeJs", "PostgresSQL"]}
              srcArray={[login, add, search, edit]}
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
        <Route
          path="/Dine"
          element={
            <Projects
              darkMode={darkMode}
              isLoaded={isLoaded}
              title="Dine"
              visitBtn={true}
              href="http://robingdt.github.io/Dine"
              background={dineImage}
              projet={t("projects.label.perso")}
              detailText={t("projects.dine.detail")}
              contextDetail={t("projects.dine.context")}
              stacks={["React", "Typescript"]}
              src={dinePreview}
              firstProject={
                <ProjectCard
                  background={champs}
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
              detailText={t("projects.photosnap.detail")}
              contextDetail={t("projects.photosnap.context")}
              stacks={["React", "Typescript"]}
              src={photosnapPreview}
              firstProject={
                <ProjectCard
                  background={champs}
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
      </Routes>
      <Footer isLoaded={isLoaded} darkMode={darkMode} />
    </>
  );
}

export default App;
