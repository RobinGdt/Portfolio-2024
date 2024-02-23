import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { Link } from "react-router-dom";
import Span from "../../ui-components/Span/Span";

interface ProjectCardProps {
  title: string;
  background: string;
  projet: string;
  to: string;
  onClick?: () => void;
}

const StyledProjectCard = styled.div<{ $background: string }>`
  width: 95%;
  height: 150px;
  min-width: 500px;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  cursor: pointer;
  background-size: 100%;
  transition: background-size 0.5s ease;

  h3 {
    font-size: 43px;
    font-family: "Formula Condensed";
    transition: all 0.5s;
    color: ${COLORS.WHITE[100]};
  }

  &:hover {
    background-size: 120%;
    h3 {
      text-shadow: -5px -5px 0 #d9c9fc47, 1px -1px 0 #eefcff7a,
        -1px 1px #2daad7d6, 1px 1px 0 #2dd785;
      transition: all 0.5s;
    }
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
    transition: all 0.5s;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  font-size: 14px;
  align-self: start;
  padding: 0 5% 0 5%;
  background: rgba(9, 34, 59, 0.5);
  border-radius: 40px;

  span {
    color: ${COLORS.WHITE[100]};
    font-size: var(--16px);
    backdrop-filter: blur(8px);
    line-height: 30px;
  }
`;

const ProjectCard = ({
  title,
  background,
  projet,
  to,
  onClick,
}: ProjectCardProps): JSX.Element => {
  return (
    <Link to={to} onClick={onClick}>
      <StyledProjectCard $background={background}>
        <h3>{title}</h3>
        <ParagraphContainer>
          <Span text={projet} />
        </ParagraphContainer>
      </StyledProjectCard>
    </Link>
  );
};

export default ProjectCard;
