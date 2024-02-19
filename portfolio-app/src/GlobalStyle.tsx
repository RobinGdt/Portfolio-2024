import { COLORS } from "./utils/palette";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  :root {
    --white-100: ${COLORS.WHITE[100]};
    --white-50: ${COLORS.WHITE[50]};
    --white-25: ${COLORS.WHITE[100]};
    --white-80: ${COLORS.WHITE[80]};
    --white-10: ${COLORS.WHITE[10]};
    --disabled-100: ${COLORS.DISABLED[100]};
    --disabled-10: ${COLORS.DISABLED[10]};
    --sky-100: ${COLORS.SKY[100]};
    --sky-50: ${COLORS.SKY[50]};
    --sky-25: ${COLORS.SKY[25]};
    --night-100: ${COLORS.NIGHT[100]};
    --night-50: ${COLORS.NIGHT[50]};
    --night-25: ${COLORS.NIGHT[25]};
    --night-10: ${COLORS.NIGHT[10]};
    --night-5: ${COLORS.NIGHT[5]};
    --tangerine-100: ${COLORS.TANGERINE[100]};
    --tangerine-hover: ${COLORS.TANGERINE[200]};
    --tangerine-50: ${COLORS.TANGERINE[50]};
    --tangerine-25: ${COLORS.TANGERINE[25]};
    --tangerine-10: ${COLORS.TANGERINE[10]};
    --smoke-100: ${COLORS.SMOKE[100]};
    --12px: 0.75rem;
    --14px: 0.875rem;
    --16px: 1rem;
    --20px: 1.25rem;
    --24px: 1.5rem;
    --36px: 2.25rem;
    --48px: 3rem;
    --96px: 6rem;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    scroll-behavior: smooth;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root {
    /* isolation: isolate; */
  }
`;

export default GlobalStyles;
