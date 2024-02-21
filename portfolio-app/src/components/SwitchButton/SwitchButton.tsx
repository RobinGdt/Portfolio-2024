import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { useEffect, useState } from "react";

interface SwitchBttonProps {
  toggled?: any;
  onChange?: any;
  darkMode?: boolean;
  id?: any;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 5%;
`;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label<{ $darkmode?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  border: ${(props) =>
    props.$darkmode
      ? `1px solid ${COLORS.DARKSLATE[100]}`
      : `1px solid ${COLORS.SKY[100]}`};
  position: relative;
  transition: background-color 0.2s;
`;

const StyledSwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 6px;
  left: 8px;
  width: 12px;
  height: 12px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${COLORS.TANGERINE[100]};
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 8px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 35px;
  }
`;

const SwitchButton = ({
  id,
  toggled,
  onChange,
  darkMode,
}: SwitchBttonProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(toggled);

  useEffect(() => {
    setIsChecked(toggled);
  }, [toggled]);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <Wrapper>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id} $darkmode={darkMode}>
        <StyledSwitchButton className="switch-button" />
      </SwitchLabel>
    </Wrapper>
  );
};

export default SwitchButton;
