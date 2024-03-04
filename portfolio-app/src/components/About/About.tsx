import styled from "styled-components";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import { useTranslation } from "react-i18next";
import Span from "../../ui-components/Span/Span";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import hygo from "../../assets/hygo.webp";
import Anchor from "../../ui-components/Anchor/Anchor";
import { Download } from "../../utils/icon";

interface AboutProps {
  darkMode: boolean;
  isLoaded: boolean;
}

const StyledAbout = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 12.4fr 1fr;
  grid-template-rows: repeat(4fr);
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

  @media (max-width: 1050px) {
    padding: 15px;
  }
`;

const ExperienceWrapper = styled.div<{ $darkmode?: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: ${(props) =>
    props.$darkmode
      ? `0.3px solid ${COLORS.DARKSLATE[100]}`
      : `0.3px solid ${COLORS.SKY[100]}`};

  &.last {
    border: none;
  }
`;

const Img = styled.img`
  max-width: 80%;
  display: flex;
  align-self: center;
`;

const About = ({ darkMode, isLoaded }: AboutProps): JSX.Element => {
  const { t } = useTranslation();
  const styledLoaded = isLoaded ? "animate" : "";
  return (
    <StyledAbout>
      <Grid>
        <Item className={styledLoaded} $darkmode={darkMode} />{" "}
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text={t("about.about")} />
          <Paragraph text={t("about.detailpart1")} />
          <Paragraph text={t("about.detailpart2")} />
          <Paragraph text={t("about.detailpart3")} />
          <Anchor
            href="./cv-robin-godart-2024.pdf"
            download="cv-robin-godart-2024.pdf"
            text={t("about.download")}
            strong={true}
            icon={
              <Download
                fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
              />
            }
          />
          <Img src={hygo} alt="hygo" />
        </Item>{" "}
        <Item className={styledLoaded} $darkmode={darkMode} />
        <Item className={styledLoaded} $darkmode={darkMode} />{" "}
        <Item className={styledLoaded} $darkmode={darkMode}>
          <Subtitle text={t("experience.title")} />
          <ExperienceWrapper $darkmode={darkMode}>
            <Span text={t("experience.label")} strong={true} />
            <Span text={t("experience.intership1")} strong={true} />
            <Span text={t("experience.intershipTime1")} />
          </ExperienceWrapper>
          <ExperienceWrapper $darkmode={darkMode} className="last">
            <Span text={t("experience.labelFront")} strong={true} />
            <Span text={t("experience.intership2")} strong={true} />
            <Span text={t("experience.intershipTime2")} />
          </ExperienceWrapper>
        </Item>{" "}
        <Item className={styledLoaded} $darkmode={darkMode} />
      </Grid>
    </StyledAbout>
  );
};

export default About;
