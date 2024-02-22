import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { AnimatedContainer } from "../../utils/constants";
import { Logo, Moon, Sun } from "../../utils/icon";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import Span from "../../ui-components/Span/Span";

interface HeaderProps {
  darkMode?: boolean;
  isLoaded: boolean;
  fill: any;
  onClickDarkMode: () => void;
  onClickLoading: () => void;
}

const SyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4.2fr 4.2fr 4fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Item = styled(AnimatedContainer)<{ $darkmode?: boolean }>`
  border: ${(props) =>
    props.$darkmode
      ? `0.3px solid ${COLORS.DARKSLATE[100]}`
      : `0.3px solid ${COLORS.SKY[100]}`};
  border-bottom: none;
  padding: 15px 40px 15px 40px;
  position: relative;
  font-size: 30px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  gap: 5%;
  cursor: pointer;

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

const SvgContainer = styled.div`
  cursor: pointer;
  &:hover {
    svg {
      path {
        stroke: ${COLORS.PEACH[100]};
      }
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
        <LogoWrapper>
          <Logo
            fill={darkMode ? COLORS.WHITE[100] : COLORS.NIGHT[100]}
            stroke={darkMode ? COLORS.NIGHT[100] : COLORS.WHITE[100]}
          />
          <Span text="Robin Godart" strong={true} />
        </LogoWrapper>
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode} />
      <Item className={styledLoaded} $darkmode={darkMode}>
        <SwitchLanguage darkMode={darkMode} />
        {darkMode ? (
          <SvgContainer
            onClick={() => {
              onClickDarkMode();
              onClickLoading();
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
