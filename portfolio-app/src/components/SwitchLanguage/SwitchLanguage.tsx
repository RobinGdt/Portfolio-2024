import styled from "styled-components";
import SwitchButton from "../SwitchButton/SwitchButton";
import Paragraph from "../../ui-components/Paragraph/Paragraph";

const StyledSwitchLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`;

const SwitchLanguage = (): JSX.Element => {
  return (
    <StyledSwitchLanguage>
      <Paragraph text="FR" strong={true} />
      <SwitchButton id="test-switch" />
      <Paragraph text="EN" strong={true} />
    </StyledSwitchLanguage>
  );
};

export default SwitchLanguage;
