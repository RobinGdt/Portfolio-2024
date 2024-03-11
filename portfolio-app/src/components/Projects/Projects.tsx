import styled from "styled-components";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Span from "../../ui-components/Span/Span";
import { shadow } from "../../utils/keyframes";

interface ProjectsProps {
  darkMode: boolean;
  isLoaded: boolean;
  title: string;
  projet: string;
  background: string;
  detailText: string;
  stacks: string[];
  contextDetail: string;
  firstProject: JSX.Element;
  secondProject: JSX.Element;
  src?: string;
  srcArray?: string[];
  href?: string;
  visitBtn?: boolean;
  link?: string;
  linkName?: string;
}

const StyledProjects = styled.div`
  width: 100%;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;
const Overlay = styled(Modal)`
  background: rgba(49, 49, 49, 0.8);
`;
const ModalContent = styled.div<{ $darkmode?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 40%;
  min-height: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) =>
    props.$darkmode ? COLORS.DARKSLATE[100] : COLORS.BLUISH[100]};
  z-index: 2;
  padding: 10px;
  box-shadow: ${shadow};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1050px) {
    width: 80%;
    min-height: 0;
  }
`;

const ProjectTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 12.4fr 1fr;
  grid-template-rows: 4fr;
  grid-column-gap: 0.5px;
  grid-row-gap: 0.5px;
  grid-gap: transparent;
`;

const ItemTitle = styled(AnimatedContainer)<{
  $darkmode?: boolean;
  $background?: string;
}>`
  background-color: ${(props) =>
    props.$darkmode ? "#061423" : COLORS.BLUISH[100]};
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  margin-bottom: 0.5px;
  margin-top: 0.5px;
  h1 {
    color: ${COLORS.WHITE[100]};
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 1050px) {
    padding: 15px;
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

  @media (max-width: 1050px) {
    padding: 15px;
  }
  &.left-details {
    margin-right: 1px;
  }
`;

const ProjectContext = styled(ProjectTitle)``;

const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 24px;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  width: 100%;
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

  span {
    color: ${COLORS.WHITE[100]};
    line-height: 30px;
    font-size: var(--16px);
  }
`;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 40%;
    margin: 20px;
  }
`;

const Projects = ({
  darkMode,
  isLoaded,
  background,
  title,
  projet,
  detailText,
  stacks,
  contextDetail,
  srcArray,
  src,
  href,
  firstProject,
  secondProject,
  visitBtn,
  link,
  linkName,
}: ProjectsProps): JSX.Element => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const styledLoaded = isLoaded ? "animate" : "";

  const openModal = (imageSrc: string) => {
    setEnlargedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleImageClick = (imageSrc: string) => {
    openModal(imageSrc);
  };

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
            <Span text={projet} />
          </ParagraphContainer>
        </ItemTitle>
        <ItemTitle $darkmode={darkMode} className={styledLoaded} />
      </ProjectTitle>
      {/*------------------ DETAILS ------------------*/}
      <ProjectDetails>
        <ItemDetail $darkmode={darkMode} className={styledLoaded} />
        <ItemDetail
          $darkmode={darkMode}
          className={`${styledLoaded} left-details`}
        >
          <Subtitle text="DETAILS" />
          <Paragraph
            text={detailText}
            link={link}
            linkName={linkName}
          ></Paragraph>
          {visitBtn && (
            <Button title={t("visit")} darkMode={darkMode} href={href} />
          )}
        </ItemDetail>
        <ItemDetail $darkmode={darkMode} className={styledLoaded}>
          <Subtitle text="STACK" />
          <StackWrapper>
            <ul>
              {stacks.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>
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
          {src && <Image src={src} />}
          <ImageContainer>
            {srcArray &&
              srcArray.map((images, index) => (
                <Image
                  key={index}
                  src={images}
                  onClick={() => handleImageClick(images)}
                />
              ))}
          </ImageContainer>

          {/*------------------ ENLARGED IMAGE VIEW ------------------*/}
          {isModalOpen && (
            <Overlay onClick={() => setIsModalOpen(false)}>
              <ModalContent $darkmode={darkMode}>
                <div onClick={() => setIsModalOpen(false)}></div>
                {enlargedImage && <Image src={enlargedImage} />}
                {/* Autres éléments de la modal ici */}
              </ModalContent>
            </Overlay>
          )}
        </ItemContext>
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
        {/*------------------ OTHER PROJECTS ------------------*/}
        <ItemContext $darkmode={darkMode} className={`wrap ${styledLoaded}`}>
          <Subtitle text={t("projects.other")} />
          <ProjectsWrapper>
            <Project>{firstProject}</Project>
            <Project>{secondProject}</Project>
          </ProjectsWrapper>
        </ItemContext>
        <ItemContext $darkmode={darkMode} className={styledLoaded} />
      </ProjectContext>
    </StyledProjects>
  );
};

export default Projects;
