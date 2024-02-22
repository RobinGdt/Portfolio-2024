import styled from "styled-components";

interface ParagraphProps {
  text: string;
  strong?: boolean;
}

const StyledParagraph = styled.p<{ $strong?: boolean }>`
  font-weight: ${(props) => (props.$strong ? "900" : "400")};
`;

const Paragraph = ({ text, strong }: ParagraphProps): JSX.Element => {
  return <StyledParagraph $strong={strong}>{text}</StyledParagraph>;
};

export default Paragraph;
