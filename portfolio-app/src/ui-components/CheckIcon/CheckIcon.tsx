import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { shadow } from "../../utils/keyframes";

interface CheckIconProps {
  darkMode?: boolean;
}

const StyledIcon = styled.div`
  display: block;
`;

const Icon = styled.div`
  margin-bottom: 40px;
  width: 200px;
`;

const FirstBar = styled.div<{ $darkmode?: boolean }>`
  background: ${(props) =>
    props.$darkmode ? "linear-gradient(to bottom, #fff 0%, #ccc 100%)" : ""};
  height: 60px;
  box-shadow: ${shadow};
  transform: translateX(30px) translateY(140px) rotate(-45deg);
  background-color: ${(props) =>
    props.$darkmode ? COLORS.WHITE[100] : COLORS.TANGERINE[100]};
  height: 60px;
  width: 30px;
`;

const SecondBar = styled(FirstBar)`
  height: 160px;
  transform: translateX(107px) translateY(15px) rotate(45deg);
`;

const CheckIcon = ({ darkMode }: CheckIconProps): JSX.Element => {
  return (
    <StyledIcon>
      <Icon>
        <FirstBar $darkmode={darkMode} />
        <SecondBar />
      </Icon>
    </StyledIcon>
  );
};

export default CheckIcon;
