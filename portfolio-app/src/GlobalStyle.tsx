import { COLORS } from "./utils/palette";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle<{ darkMode?: boolean }>`
  :root {
    --white-100: ${COLORS.WHITE[100]};
    --white-50: ${COLORS.WHITE[50]};
    --disabled-100: ${COLORS.DISABLED[100]};
    --disabled-10: ${COLORS.DISABLED[10]};
    --sky-100: ${COLORS.SKY[100]};
    --bluish-100: ${COLORS.BLUISH[100]};
    --night-100: ${COLORS.NIGHT[100]};
    --night-50: ${COLORS.NIGHT[50]};
    --tangerine-100: ${COLORS.TANGERINE[100]};
    --tangerine-hover: ${COLORS.TANGERINE[200]};
    --smoke-100: ${COLORS.SMOKE[100]};
    --12px: 0.75rem;
    --14px: 0.875rem;
    --16px: 1rem;
    --18px: 1.125rem;
    --20px: 1.25rem;
    --24px: 1.5rem;
    --30px: 1.85rem;
    --36px: 2.25rem;
    --48px: 3rem;
    --96px: 6rem;
  }

  html,
  body,
  #root {
    height: 100%;
  }
  ::selection {
    background-color: ${(props) =>
      props.darkMode ? COLORS.PEACH[100] : COLORS.TANGERINE[100]};
    color: black;
  }
  body {
    scroll-behavior: smooth;
  }
  body.active {
    overflow: hidden;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) =>
      props.darkMode ? "#061423" : COLORS.BLUISH[100]};
  }

  p,
  a,
  li,
  span,
  h1,
  h3,
  h4,
  h5,
  label,
  h6 {
    overflow-wrap: break-word;
    color: ${(props) =>
      props.darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]};
  }
  h2 {
    color: ${(props) =>
      props.darkMode ? COLORS.PEACH[100] : COLORS.TANGERINE[100]};
  }
  #root {
    /* isolation: isolate; */
  }
`;

export default GlobalStyles;
