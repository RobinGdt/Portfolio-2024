import styled from "styled-components";
import SwitchButton from "../SwitchButton/SwitchButton";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Span from "../../ui-components/Span/Span";
import ReactGA from "react-ga4";

interface SwitchLanguageProps {
  darkMode?: boolean;
}

const StyledSwitchLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
  @media (max-width: 1050px) {
    span {
      font-size: 15px;
    }
  }
`;

const SwitchLanguage = ({ darkMode }: SwitchLanguageProps): JSX.Element => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsEnglish(i18n.language === "en");
    };

    i18n.on("languageChanged", handleLanguageChange);

    const storedLanguage =
      localStorage.getItem("selectedLanguage") || i18n.language;
    i18n.changeLanguage(storedLanguage);
    setIsEnglish(storedLanguage === "en");

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    setIsEnglish(language === "en");
    ReactGA.event({
      action: "switch_language",
      category: "click",
      label: "switch_language_label",
    });
  };
  return (
    <StyledSwitchLanguage>
      <Span text="FR" strong={!isEnglish} />
      <SwitchButton
        id="test-switch"
        toggled={isEnglish}
        onChange={() => handleChangeLanguage(isEnglish ? "fr" : "en")}
        darkMode={darkMode}
      />
      <Span text="EN" strong={isEnglish} />
    </StyledSwitchLanguage>
  );
};

export default SwitchLanguage;
