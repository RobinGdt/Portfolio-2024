import styled from "styled-components";

interface ParagraphProps {
  text: string;
  strong?: boolean;
}

const StyledSpan = styled.span<{ $strong?: boolean }>`
  font-weight: ${(props) => (props.$strong ? "900" : "400")};
`;

const Span = ({ text, strong }: ParagraphProps): JSX.Element => {
  return <StyledSpan $strong={strong}>{text}</StyledSpan>;
};

export default Span;
