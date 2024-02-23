import styled from "styled-components";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import Button from "../Button/Button";

interface ProjectsProps {
  darkMode: boolean;
  isLoaded: boolean;
  title: string;
  projet: string;
  background: string;
  detailText: string;
  stack: string;
  contextDetail: string;
  firstProject: JSX.Element;
  secondProject: JSX.Element;
  src: string;
  href?: string;
}

const StyledProjects = styled.div`
  width: 100%;
`;

const ProjectTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 12.4fr 1fr;
  grid-template-rows: 4fr;
`;

const ItemTitle = styled(AnimatedContainer)<{
  $darkmode?: boolean;
  $background?: string;
}>`
  border: ${(props) =>
    props.$darkmode
      ? `0.3px solid ${COLORS.DARKSLATE[100]}`
      : `0.3px solid ${COLORS.SKY[100]}`};
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  h1 {
    color: ${COLORS.WHITE[100]};
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const ProjectDetails = styled(ProjectTitle)`
  grid-template-columns: 1fr 8.2fr 4.2fr 1fr;
  grid-template-rows: 4fr;
`;

const ItemDetail = styled(ItemTitle)`
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
`;

const ProjectContext = styled(ProjectTitle)``;

const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ItemContext = styled(ItemDetail)``;

const StackWrapper = styled.div``;

const ParagraphContainer = styled.div`
  display: flex;
  font-size: 14px;
  align-self: start;
  padding-left: 5%;
  padding-right: 5%;
  background: #00000049;
  border-radius: 40px;
  backdrop-filter: blur(20px);

  p {
    color: ${COLORS.WHITE[100]};
    line-height: 0;
    font-size: var(--16px);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Projects = ({
  darkMode,
  isLoaded,
  background,
  title,
  projet,
  detailText,
  stack,
  contextDetail,
  src,
  href,
  firstProject,
  secondProject,
}: ProjectsProps): JSX.Element => {
  const styledLoaded = isLoaded ? "animate" : "";
  return (
    <StyledProjects>
      {/*------------------ TITLE ------------------*/}
      <ProjectTitle>
        <ItemTitle $darkmode={darkMode} className={styledLoaded} />
        <ItemTitle
          $darkmode={darkMode}
          className={styledLoaded}
          $background={background}
        >
          <h1>
            {" "}
            <strong>{title}</strong>
          </h1>
          <ParagraphContainer>
            <Paragraph text={projet} />
          </ParagraphContainer>
        </ItemTitle>
        <ItemTitle $darkmode={darkMode} className={styledLoaded} />
      </ProjectTitle>
      {/*------------------ DETAILS ------------------*/}
      <ProjectDetails>
        <ItemDetail $darkmode={darkMode} className={styledLoaded} />
        <ItemDetail $darkmode={darkMode} className={styledLoaded}>
          <Subtitle text="DETAILS" />
          <Paragraph text={detailText} />
          <Button title="Visiter le site" darkMode={darkMode} href={href} />
        </ItemDetail>
        <ItemDetail $darkmode={darkMode} className={styledLoaded}>
          <Subtitle text="STACK" />
          <StackWrapper>
            <Paragraph text={stack} />
          </StackWrapper>
        </ItemDetail>
        <ItemDetail $darkmode={darkMode} className={styledLoaded} />
      </ProjectDetails>
      {/*------------------ CONTEXT ------------------*/}
      <ProjectContext>
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
        <ItemContext $darkmode={darkMode} className={styledLoaded}>
          <Subtitle text="CONTEXTE" />
          <Paragraph text={contextDetail} />
          <Subtitle text="PREVIEW" />
          <Image src={src} />
        </ItemContext>
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
        {/*------------------ OTHER PROJECTS ------------------*/}
        <ItemContext $darkmode={darkMode} className={styledLoaded}>
          <Subtitle text="AUTRES PROJETS" />
          <ProjectsWrapper>
            {firstProject}
            {secondProject}
          </ProjectsWrapper>
        </ItemContext>
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
      </ProjectContext>
    </StyledProjects>
  );
};

export default Projects;
