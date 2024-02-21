import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GlobalStyle from "./GlobalStyle";
import Typography from "./utils/Typography";
import { COLORS } from "./utils/palette";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import i18n from "./i18n";

function App() {
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
      <Router basename="/Home">
        <GlobalStyle darkMode={darkMode} />
        <Typography />
        <Header
          darkMode={darkMode}
          onClickDarkMode={toggleDarkMode}
          fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
        />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </>
  );
}

export default App;
