import styled from "styled-components";

interface ParagraphProps {
  text: string;
  strong?: boolean;
  link?: string;
  linkName?: string;
}

const StyledParagraph = styled.p<{ $strong?: boolean }>`
  font-weight: ${(props) => (props.$strong ? "900" : "400")};

  a {
    text-decoration: underline;
  }
`;

const Paragraph = ({
  text,
  strong,
  link,
  linkName,
}: ParagraphProps): JSX.Element => {
  return (
    <StyledParagraph $strong={strong}>
      {text}
      {link && (
        <a href={link} target="blank">
          {linkName}
        </a>
      )}
    </StyledParagraph>
  );
};

export default Paragraph;
