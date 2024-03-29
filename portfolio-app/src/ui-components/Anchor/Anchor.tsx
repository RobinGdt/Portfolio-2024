import React, { ReactElement } from "react";
import styled from "styled-components";

interface AnchorProps {
  text: string;
  strong?: boolean;
  className?: string;
  href: string;
  download?: string;
  icon?: ReactElement;
}

const AnchorWrapper = styled.div`
  width: 20%;
`;

const StyledAnchor = styled.a<{ $strong?: boolean }>`
  font-weight: ${(props) => (props.$strong ? "900" : "400")};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Anchor = ({
  text,
  strong,
  className,
  href,
  download,
  icon,
}: AnchorProps): JSX.Element => {
  return (
    <AnchorWrapper>
      <StyledAnchor
        $strong={strong}
        className={className}
        href={href}
        download={download}
        target="blank"
      >
        {text}
        {icon && icon}
      </StyledAnchor>
    </AnchorWrapper>
  );
};

export default Anchor;
