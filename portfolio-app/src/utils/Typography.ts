import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const Typography = styled.createGlobalStyle`
  html {
    font-family: "Strawford", sans-serif;
    color: var(--night-100);
  }

  h1 {
    font-family: "Formula Condensed", sans-serif;
    font-size: var(--96px);
    font-weight: 300;
    line-height: normal;
    /* letter-spacing: 1px; */
  }

  h2 {
    font-family: "Formula Condensed", sans-serif;
    font-size: var(--24px);
  }

  h3 {
    font-family: "Strawford", sans-serif;
    font-size: var(--14px);
  }

  h4 {
    font-family: "Strawford", sans-serif;
    font-size: var(--14px);
  }

  h5 {
    font-family: "Strawford", sans-serif;
    font-size: var(--12px);
  }

  p {
    font-family: "Strawford", sans-serif;
    font-size: var(--20px);
    line-height: var(--24px);
  }

  @media (max-width: 740px) {
    h1 {
      font-size: var(--24px);
    }
    h2 {
      font-size: var(--20px);
    }
    h3 {
      font-size: var(--16px);
    }
    h4 {
      font-size: var(--16px);
    }
    h5 {
      font-size: var(--14px);
    }
    h6 {
      font-size: var(--14px);
    }
    p {
      font-size: var(--14px);
    }
  }
`;

export default Typography;
