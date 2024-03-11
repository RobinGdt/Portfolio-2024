import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { AnimatedContainer } from "../../utils/constants";
import { Logo, Moon, Sun } from "../../utils/icon";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import Span from "../../ui-components/Span/Span";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { switchDarkmodeEvent } from "../../utils/ga4Events";

interface HeaderProps {
  darkMode?: boolean;
  isLoaded: boolean;
  fill: string;
  onClickDarkMode: () => void;
  onClickLoading: () => void;
}

const SyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4.2fr 4.2fr 4fr 1fr;
  grid-template-rows: 1fr;
  min-width: 350px;
  grid-column-gap: 0.5px;
  grid-row-gap: 0.5px;
  grid-gap: transparent;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 5.1fr 7.1fr 1fr;
    .none {
      display: none;
    }
  }
`;

const Item = styled(AnimatedContainer)<{ $darkmode?: boolean }>`
  background-color: ${(props) =>
    props.$darkmode ? "#061423" : COLORS.BLUISH[100]};
  padding: 15px 40px 15px 40px;
  position: relative;
  font-size: 30px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5px;

  @media (max-width: 1050px) {
    padding: 5px 15px 5px 15px;
    .none {
      display: none;
    }
  }
`;

const LogoWrapper = styled(Link)<{ $darkmode?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
  cursor: pointer;

  &:hover {
    svg {
      rect {
        fill: ${(props) =>
          props.$darkmode ? COLORS.PEACH[100] : COLORS.TANGERINE[100]};
        transition: fill 300ms ease-out;
      }
    }
    span {
      color: ${(props) =>
        props.$darkmode ? COLORS.PEACH[100] : COLORS.TANGERINE[100]};
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

  @media (max-width: 1050px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

const SvgContainer = styled.div<{ $darkmode?: boolean }>`
  cursor: pointer;
  &:hover {
    svg {
      path {
        stroke: ${(props) =>
          props.$darkmode ? COLORS.PEACH[100] : COLORS.TANGERINE[100]};
      }
    }
  }
  @media (max-width: 1050px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
const Header = ({
  darkMode,
  fill,
  isLoaded,
  onClickDarkMode,
  onClickLoading,
}: HeaderProps): JSX.Element => {
  const styledLoaded = isLoaded ? "animate" : "";

  return (
    <SyledHeader>
      <Item className={styledLoaded} $darkmode={darkMode} />
      <Item className={styledLoaded} $darkmode={darkMode}>
        <LogoWrapper to="" onClick={onClickLoading} $darkmode={darkMode}>
          <Logo
            fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
            stroke={darkMode ? COLORS.NIGHT[100] : COLORS.WHITE[100]}
          />
          <Span className="none" text="Robin Godart" strong={true} />
        </LogoWrapper>
      </Item>
      <Item className={`none ${styledLoaded}`} $darkmode={darkMode} />
      <Item className={styledLoaded} $darkmode={darkMode}>
        <SwitchLanguage darkMode={darkMode} />
        {darkMode ? (
          <SvgContainer
            onClick={() => {
              onClickDarkMode();
              onClickLoading();
              ReactGA.event(switchDarkmodeEvent);
            }}
          >
            <Moon fill={fill} />
          </SvgContainer>
        ) : (
          <SvgContainer
            onClick={() => {
              onClickDarkMode();
              onClickLoading();
            }}
          >
            <Sun fill={fill} />
          </SvgContainer>
        )}
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode} />
    </SyledHeader>
  );
};

export default Header;
