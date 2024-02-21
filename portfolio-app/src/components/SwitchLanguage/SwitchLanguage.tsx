import styled from "styled-components";
import SwitchButton from "../SwitchButton/SwitchButton";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface SwitchLanguageProps {
  darkMode?: boolean;
}

const StyledSwitchLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`;

const SwitchLanguage = ({ darkMode }: SwitchLanguageProps): JSX.Element => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "fr");

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    setIsEnglish(language === "en");
  };

  return (
    <StyledSwitchLanguage>
      <Paragraph text="FR" strong={!isEnglish} />
      <SwitchButton
        id="test-switch"
        toggled={isEnglish}
        onChange={() => handleChangeLanguage(isEnglish ? "fr" : "en")}
        darkMode={darkMode}
      />
      <Paragraph text="EN" strong={isEnglish} />
    </StyledSwitchLanguage>
  );
};

export default SwitchLanguage;
