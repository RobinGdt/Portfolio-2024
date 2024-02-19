import styled from "styled-components";
import { COLORS } from "../../utils/palette";

interface ParagraphProps {
  text: string;
}

const StyledParagraph = styled.p`
  color: ${COLORS.NIGHT[100]};
`;

const Paragraph = ({ text }: ParagraphProps): JSX.Element => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export default Paragraph;
