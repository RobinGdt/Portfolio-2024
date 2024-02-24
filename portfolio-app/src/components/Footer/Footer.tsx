import styled from "styled-components";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import { useEffect, useState } from "react";
import { Logo } from "../../utils/icon";
import Span from "../../ui-components/Span/Span";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import Anchor from "../../ui-components/Anchor/Anchor";

interface FooterProps {
  darkMode: boolean;
}

const StyledFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 4.4fr 4fr 1fr;
  grid-template-rows: 1fr;
  min-width: 770px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 5.1fr 7.1fr 1fr;
    .none {
      display: none;
    }
  }
`;

const Item = styled(AnimatedContainer)<{ $darkmode?: boolean }>`
  border: ${(props) =>
    props.$darkmode
      ? `0.3px solid ${COLORS.DARKSLATE[100]}`
      : `0.3px solid ${COLORS.SKY[100]}`};
  padding: 15px 40px 15px 40px;
  position: relative;
  font-size: 30px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div<{ $darkmode?: boolean }>`
  width: 65%;
  display: flex;
  align-items: center;
  gap: 5%;
  cursor: pointer;

  span {
    cursor: pointer;
  }

  &.about {
    color: ${(props) =>
      props.$darkmode ? COLORS.TANGERINE[100] : COLORS.PEACH[100]};
  }

  &:hover {
    svg {
      rect {
        fill: ${COLORS.PEACH[100]};
        transition: fill 300ms ease-out;
      }
    }
    span {
      color: ${COLORS.PEACH[100]};
      transition: color 300ms ease-out;
    }
  }

  &:not(:hover) {
    svg {
      rect {
        transition: fill 300ms ease-out;
      }
    }
    span {
      transition: color 300ms ease-out;
    }
  }
`;

const YearWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5%;
`;

const Footer = ({ darkMode }: FooterProps): JSX.Element => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const styledLoaded = isLoaded ? "animate" : "";

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <StyledFooter>
      <Item className={styledLoaded} $darkmode={darkMode} />
      <Item className={styledLoaded} $darkmode={darkMode}>
        <LogoWrapper>
          <Logo
            fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
            stroke={darkMode ? COLORS.NIGHT[100] : COLORS.WHITE[100]}
          />
          <Span className="none" text="Robin Godart" strong={true} />
        </LogoWrapper>
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode}>
        <Anchor
          text={t("about.about")}
          strong={true}
          className="about"
          href="/Home/about"
        />
        <Span text={t("notice.legal")} strong={true} />
      </Item>
      <Item className={`none ${styledLoaded}`} $darkmode={darkMode}>
        <YearWrapper>
          <Span text="2024" strong={true} />
        </YearWrapper>
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode} />
    </StyledFooter>
  );
};

export default Footer;
