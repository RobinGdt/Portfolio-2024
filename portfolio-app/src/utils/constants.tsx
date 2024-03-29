import styled from "styled-components";
import { fillAnimation } from "./keyframes";
import { COLORS } from "./palette";

export const AnimatedContainer = styled.div`
  position: relative;
  &.animate::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${COLORS.TANGERINE[100]};
    animation: ${fillAnimation} 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
    width: 100%;
    z-index: 1;
  }
`;
