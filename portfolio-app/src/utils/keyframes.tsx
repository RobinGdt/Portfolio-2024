import { keyframes } from "styled-components";
import { COLORS } from "./palette";

export const shadow =
  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;";

export const fillAnimation = keyframes`
0%{
  width: 100%;
  height: 101%;
  border: 1px solid ${COLORS.TANGERINE[100]};
  box-shadow: ${shadow};
}
10%{
  width: 100%;
  height: 101%;
  border: 1px solid ${COLORS.TANGERINE[100]};
  box-shadow: ${shadow};
}
99.999%{
  width: 1%;
  height: 101%;
  border: 1px solid ${COLORS.TANGERINE[100]};
  box-shadow: ${shadow};
}
100% {
  width: 0%;
  height: 100%;
  border: none;
  box-shadow: 0;
}
`;

export const doubleFillAnimation = keyframes`
0%{
  width:0%;
  height: 101%;
  border: 1px solid ${COLORS.TANGERINE[100]};
  box-shadow: ${shadow};
}
50%{
  width:100%;
  height: 101%;
  border: 1px solid ${COLORS.TANGERINE[100]};
  box-shadow: ${shadow};
}
99.999%{
  width: 1%;
  height: 101%;
  border: 1px solid ${COLORS.TANGERINE[100]};
  box-shadow: ${shadow};
}
100% {
  width: 0%;
  height: 100%;
  border: none;
  box-shadow: 0;
}
`;

export const moveArrow = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-40%) translateX(40%);
  }
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
