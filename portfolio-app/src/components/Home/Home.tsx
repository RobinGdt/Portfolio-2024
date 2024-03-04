import styled from "styled-components";
import Button from "../Button/Button";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import project1 from "../../assets/champs.webp";
import dineImage from "../../assets/dine-image.png";
import photosnapImage from "../../assets/photosnap-image.webp";
import ProjectCard from "../ProjectCard/ProjectCard";
import puddle from "./puddle.svg";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import FormContact from "../FormContact/FormContact";
import { JsLogo, ReactLogo, TsLogo } from "../../utils/icon";
import ReactGA from "react-ga4";
import {
  clickOnAlvie,
  clickOnCall,
  clickOnDine,
  clickOnGithub,
  clickOnHygo,
  clickOnLearnMore,
  clickOnLinkedin,
  clickOnPhotosnap,
  clickOnSendMail,
} from "../../utils/ga4Events";

interface HomeProps {
  darkMode: boolean;
  isLoaded: boolean;
  onClickLoading: () => void;
}

const StyledHome = styled.div`
  width: 100%;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 8.4fr 4fr 1fr;
  grid-template-rows: repeat(1fr, 4fr, 4fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-width: 350px;

  .display {
    display: none;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 12.4fr 1fr;

    .display {
      display: block;
    }
    .none {
      display: none;
    }
  }
`;

const CustomSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 8.4fr 1fr;
  grid-template-rows: repeat(1fr, 4fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-width: 350px;

  .display {
    display: none;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 12.4fr 1fr;

    .display {
      display: block;
    }
    .none {
      display: none;
    }
  }
`;

const Title = styled.div`
  width: 60%;
  display: flex;
  text-align: left;
  align-items: flex-end;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const Item = styled(AnimatedContainer)<{ $darkmode?: boolean }>`
  border: ${(props) =>
    props.$darkmode
      ? `0.3px solid ${COLORS.DARKSLATE[100]}`
      : `0.3px solid ${COLORS.SKY[100]}`};
  padding: 40px;
  font-size: 30px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;

  &.puddle-item {
    background-image: url(${puddle});
  }

  &.double-column {
    grid-row: span 2;
  }

  &#contact-item {
    align-self: flex-start;
    border: none;
  }

  @media (max-width: 1050px) {
    padding: 15px;
    .double-column {
      grid-row: span 1;
    }
  }
`;

const TechnosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Home = ({
  darkMode,
  isLoaded,
  onClickLoading,
}: HomeProps): JSX.Element => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const styledLoaded = isLoaded ? "animate" : "";

  const projectData = [
    {
      title: "HYGO TOOL",
      projet: t("projects.label.pro"),
      image: project1,
      to: "HygoTools",
      logAnalytic: clickOnHygo,
    },
    {
      title: "DINE",
      projet: t("projects.label.perso"),
      image: dineImage,
      to: "Dine",
      logAnalytic: clickOnDine,
    },
    {
      title: "PHOTOSNAP",
      projet: t("projects.label.perso"),
      image: photosnapImage,
      to: "Photosnap",
      logAnalytic: clickOnPhotosnap,
    },
  ];
  return (
    <StyledHome>
      <Section>
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Title>
            <h1>
              {t("title.part1")} <strong>{t("title.part2")}</strong>
            </h1>
          </Title>
        </Item>
        <Item
          className={`item none puddle-item ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item className={styledLoaded} $darkmode={darkMode} />
      </Section>
      <Section>
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item
          className={`item none puddle-item ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text="technos" />
          <TechnosWrapper>
            <JsLogo fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]} />
            <ReactLogo
              fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
            />
            <TsLogo fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]} />
          </TechnosWrapper>
        </Item>
        <Item className={styledLoaded} $darkmode={darkMode} />
      </Section>
      <Section>
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text={t("about.about")} />
          <Paragraph text={t("about.description")} />
          <Button
            title={t("about.learn")}
            darkMode={darkMode}
            to="about"
            onClick={() => {
              onClickLoading();
              ReactGA.event(clickOnLearnMore);
            }}
          />
        </Item>
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text="SOCIAL" />
          <Button
            title="GitHub"
            href="https://github.com/RobinGdt"
            darkMode={darkMode}
            onClick={() => ReactGA.event(clickOnGithub)}
          />
          <Button
            title="Linkedin"
            href="https://www.linkedin.com/in/robin-godart-4847351b9/"
            darkMode={darkMode}
            onClick={() => ReactGA.event(clickOnLinkedin)}
          />
        </Item>
        <Item className={styledLoaded} $darkmode={darkMode} />
      </Section>
      <CustomSection>
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text={t("experience.title")} />
          <Button
            title="Alvie"
            label={t("experience.label")}
            darkMode={darkMode}
            to="https://www.alvie.fr/hygo"
            target="blank"
            onClick={() => {
              onClickLoading();
              ReactGA.event(clickOnAlvie);
            }}
          />
        </Item>
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
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
              to={item.to}
              onClick={() => {
                onClickLoading();
                ReactGA.event(item.logAnalytic);
              }}
            />
          ))}
        </Item>
        <Item
          className={`item none double-column ${styledLoaded}`}
          $darkmode={darkMode}
        />
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />

        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} id="contact-item">
          <Subtitle text="CONTACT" />
          <Button
            title={t("contact.email")}
            darkMode={darkMode}
            onClick={() => {
              toggleModal();
              ReactGA.event(clickOnSendMail);
            }}
          />
          <Button
            title={t("contact.phone")}
            darkMode={darkMode}
            href="tel: +33782255092"
            onClick={() => ReactGA.event(clickOnCall)}
          />
        </Item>
        <Item className={`display ${styledLoaded}`} $darkmode={darkMode} />
      </CustomSection>
      {modalIsOpen && (
        <FormContact toggleModal={toggleModal} darkMode={darkMode} />
      )}
    </StyledHome>
  );
};

export default Home;
