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
    line-height: 100px;
    margin: 0;
    /* letter-spacing: -4px; */
  }

  h2 {
    font-family: "Formula Condensed", sans-serif;
    font-size: var(--24px);
    line-height: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
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
    font-size: var(--18px);
    line-height: var(--24px);
  }
  span {
    font-family: "Strawford", sans-serif;
    font-size: var(--20px);
    line-height: var(--48px);
  }
  a {
    text-decoration: none;
    font-family: "Strawford", sans-serif;
    font-size: var(--20px);
    line-height: var(--48px);
  }

  @media (max-width: 740px) {
    h1 {
      font-size: var(--48px);
    }
    h2 {
      font-size: var(--24px);
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
    span {
      font-size: var(--14px);
    }
  }
`;

export default Typography;
