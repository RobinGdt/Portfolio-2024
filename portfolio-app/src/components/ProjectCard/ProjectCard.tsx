import styled from "styled-components";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import { COLORS } from "../../utils/palette";

interface ProjectCardProps {
  title: string;
  background: string;
  projet: string;
}

const StyledProjectCard = styled.div<{ $background: string }>`
  width: 95%;
  height: 150px;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  color: ${COLORS.WHITE[100]};
  cursor: pointer;

  h3 {
    font-size: 43px;
    font-family: "Formula Condensed";
    transition: all 0.5s;
  }

  &:hover {
    h3 {
      text-shadow: -5px -5px 0 #632dd748, 1px -1px 0 #2db8d77b,
        -1px 1px #2daad7d6, 1px 1px 0 #2dd785;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.3);
    transition: all 0.5s;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  font-size: 14px;
  align-self: start;
  padding-left: 5%;
  padding-right: 5%;
  background: #00000024;
  border-radius: 40px;

  p {
    color: ${COLORS.WHITE[100]};
    line-height: 0;
    font-size: var(--16px);
  }
`;

const ProjectCard = ({
  title,
  background,
  projet,
}: ProjectCardProps): JSX.Element => {
  return (
    <StyledProjectCard $background={background}>
      <h3>{title}</h3>
      <ParagraphContainer>
        <Paragraph text={projet} />
      </ParagraphContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
