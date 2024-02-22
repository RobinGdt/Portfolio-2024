import styled from "styled-components";
import { AnimatedContainer } from "../../utils/constants";
import { COLORS } from "../../utils/palette";
import { useEffect, useState } from "react";
import { Logo } from "../../utils/icon";
import Span from "../../ui-components/Span/Span";

interface FooterProps {
  darkMode: boolean;
}

const StyledFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 4.4fr 4fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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

const LogoWrapper = styled.div`
  width: 65%;
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

const Footer = ({ darkMode }: FooterProps): JSX.Element => {
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
          <Span text="Robin Godart" strong={true} />
        </LogoWrapper>
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode}>
        <Span text="A propos" strong={true} />
        <Span text="Mentions légales" strong={true} />
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode}>
        <YearWrapper>
          <Span text="2024" strong={true} />
        </YearWrapper>
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode} />
    </StyledFooter>
  );
};

export default Footer;
