import styled from "styled-components";

interface ParagraphProps {
  text: string;
  strong?: boolean;
  className?: string;
}

const StyledSpan = styled.span<{ $strong?: boolean }>`
  font-weight: ${(props) => (props.$strong ? "900" : "400")};
`;

const Span = ({ text, strong, className }: ParagraphProps): JSX.Element => {
  return (
    <StyledSpan $strong={strong} className={className}>
      {text}
    </StyledSpan>
  );
};

export default Span;
