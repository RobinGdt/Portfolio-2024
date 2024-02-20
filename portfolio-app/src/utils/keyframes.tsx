import { keyframes } from "styled-components";
import { COLORS } from "./palette";

export const fillAnimation = keyframes`
from {
  width: 100%;
  border: 1px solid ${COLORS.TANGERINE[100]};
}
to {
  width: 0%;
  border: none;
}
`;

export const moveArrow = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-40%) translateX(40%);
  }
  /* 45% {
    opacity: 1;
  } */
  20% {
    opacity: 0;
  }
  75% {
    opacity: 0;
    stroke: ${COLORS.TANGERINE[100]};
    transform: translateY(40%) translateX(-40%);
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
`;

export const reverseArrow = keyframes`
  0% {
    transform: translateY(0);
  }
  35% {
    opacity: 0;
  }
  50% {
    stroke: ${COLORS.TANGERINE[100]};
    transform: translateY(40%) translateX(-40%);
  }
  75% {
    opacity: 0;
  }
  80% {
    transform: translateY(-40%) translateX(40%);
  }
  100% {
    transform: translateY(0 translateX(0));
  }
`;
