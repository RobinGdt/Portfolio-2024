import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { AnimatedContainer } from "../../utils/constants";
import { Logo, Moon, Sun } from "../../utils/icon";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import { useEffect, useState } from "react";

interface HeaderProps {
  darkMode?: boolean;
  onClickDarkMode: () => void;
  fill: any;
}

const SyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 5.4fr 4fr 1fr;
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
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  font-size: 30px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
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
  onClickDarkMode,
  fill,
}: HeaderProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const styledLoaded = isLoaded ? "animate" : "";

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <SyledHeader>
      <Item className={styledLoaded} $darkmode={darkMode} />
      <Item className={styledLoaded} $darkmode={darkMode}>
        <LogoWrapper>
          <Logo fill={darkMode ? COLORS.SKY[100] : COLORS.NIGHT[100]} />
          <Paragraph text="Robin Godart" strong={true} />
        </LogoWrapper>
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode} />
      <Item className={styledLoaded} $darkmode={darkMode}>
        <SwitchLanguage />
        {darkMode ? (
          <SvgContainer onClick={onClickDarkMode}>
            <Moon fill={fill} />
          </SvgContainer>
        ) : (
          <SvgContainer onClick={onClickDarkMode}>
            <Sun fill={fill} />
          </SvgContainer>
        )}
      </Item>
      <Item className={styledLoaded} $darkmode={darkMode} />
    </SyledHeader>
  );
};

export default Header;
