import styled from "styled-components";
import Button from "../Button/Button";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import project1 from "../../assets/project-1.jpeg";
import ProjectCard from "../ProjectCard/ProjectCard";
import puddle from "./puddle.svg";
import { useEffect, useState } from "react";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import { useTranslation } from "react-i18next";

interface HomeProps {
  darkMode: boolean;
}

const StyledHome = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 8.4fr 4fr 1fr;
  grid-template-rows: repeat(1fr, 4fr, 4fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Title = styled.div`
  width: 50%;
  display: flex;
  text-align: left;
  align-items: flex-end;
  position: relative;
`;

const Item = styled(AnimatedContainer)<{ $darkmode?: boolean }>`
  border: ${(props) =>
    props.$darkmode
      ? `0.3px solid ${COLORS.DARKSLATE[100]}`
      : `0.3px solid ${COLORS.SKY[100]}`};
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  font-size: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;

  &.name-item {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5%;
  }

  &.setting-item {
    flex-direction: row;
  }

  &.puddle-item {
    background-image: url(${puddle});
  }

  &.double-column {
    grid-row: span 2;
  }
`;

const CustomItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 8.4fr 1fr;
  grid-template-rows: repeat(1fr, 4fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Home = ({ darkMode }: HomeProps): JSX.Element => {
  const { t } = useTranslation();
  const projectData = [
    {
      title: "DINE",
      projet: t("projects.label.perso"),
      image: project1,
    },
    {
      title: "HYGO TOOL",
      projet: t("projects.label.pro"),
      image: project1,
    },
    {
      title: "GESTION PRO PLANNER",
      projet: t("projects.label.perso"),
      image: project1,
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const styledLoaded = isLoaded ? "animate" : "";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <StyledHome>
      <Grid>
        <Item
          className={`item name-item ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item className={`item name-item`} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Title>
            <h1>
              {t("title.part1")} <strong>{t("title.part2")}</strong>
            </h1>
          </Title>
        </Item>
        <Item
          className={`item puddle-item ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item
          className={`item puddle-item ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item
          className={`item contact-item ${styledLoaded}`}
          $darkmode={darkMode}
        >
          <Subtitle text="CONTACT" />
          <Button title="Me contacter" darkMode={darkMode} />
        </Item>
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text={t("about.about")} />
          <Paragraph text={t("about.description")} />
          <Button title={t("about.learn")} darkMode={darkMode} />
        </Item>
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text="SOCIAL" />
          <Button
            title="GitHub"
            href="https://github.com/RobinGdt"
            darkMode={darkMode}
          />
          <Button
            title="Linkedin"
            href="https://www.linkedin.com/in/robin-godart-4847351b9/"
            darkMode={darkMode}
          />
        </Item>
        <Item className={styledLoaded} $darkmode={darkMode} />
      </Grid>
      <CustomItem>
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text={t("experience.title")} />
          <Button
            title="Alvie"
            label={t("experience.label")}
            darkMode={darkMode}
          />
        </Item>
        <Item
          className={`item double-column ${styledLoaded}`}
          $darkmode={darkMode}
        >
          <Subtitle text={t("projects.title")} />
          {projectData.map((item, index) => (
            <ProjectCard
              background={item.image}
              title={item.title}
              projet={item.projet}
              key={index}
            />
          ))}
        </Item>
        <Item
          className={`item double-column ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <div className="">
            <Subtitle text="CONTACT" />
            <Button title={t("contact.email")} darkMode={darkMode} />
            <Button title={t("contact.phone")} darkMode={darkMode} />
          </div>
        </Item>
      </CustomItem>
    </StyledHome>
  );
};

export default Home;
