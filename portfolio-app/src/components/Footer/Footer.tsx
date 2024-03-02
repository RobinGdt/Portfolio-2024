import styled from "styled-components";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import { Logo } from "../../utils/icon";
import Span from "../../ui-components/Span/Span";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface FooterProps {
  darkMode: boolean;
  isLoaded: boolean;
}

const StyledFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 4.4fr 4fr 1fr;
  grid-template-rows: 1fr;

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

  @media (max-width: 1050px) {
    padding: 5px 15px 5px 15px;

    .none {
      display: none;
    }
  }
`;

const LogoWrapper = styled.div<{ $darkmode?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
  cursor: pointer;

  span {
    cursor: pointer;
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

const Footer = ({ darkMode, isLoaded }: FooterProps): JSX.Element => {
  const { t } = useTranslation();
  const styledLoaded = isLoaded ? "animate" : "";
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
        <Link to="/About">
          <Span text={t("about.about")} strong={true} />
        </Link>
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
