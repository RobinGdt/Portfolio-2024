import styled from "styled-components";

interface AnchorProps {
  text: string;
  strong?: boolean;
  className?: string;
  href: string;
}

const StyledSpan = styled.a<{ $strong?: boolean }>`
  font-weight: ${(props) => (props.$strong ? "900" : "400")};
`;

const Anchor = ({
  text,
  strong,
  className,
  href,
}: AnchorProps): JSX.Element => {
  return (
    <StyledSpan $strong={strong} className={className} href={href}>
      {text}
    </StyledSpan>
  );
};

export default Anchor;
