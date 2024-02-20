import styled from "styled-components";

interface ParagraphProps {
  text: string;
  strong?: boolean;
}

const StyledParagraph = styled.p``;

const Paragraph = ({ text, strong }: ParagraphProps): JSX.Element => {
  return (
    <StyledParagraph>{strong ? <strong>{text}</strong> : text}</StyledParagraph>
  );
};

export default Paragraph;
