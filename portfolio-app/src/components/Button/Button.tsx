import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { Arrow } from "../../utils/icon";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 45px;
  border: 1px solid #d7e5f2;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 5%;
  display: flex;
  align-items: center;
  margin-bottom: 43px;
  transition: border 500ms ease-out;
  cursor: pointer;

  &:hover {
    border: 1px solid ${COLORS.TANGERINE[100]};
  }
`;

const Button = ({ title, onClick }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick}>
      <p>{title}</p>
      <Arrow />
    </StyledButton>
  );
};

export default Button;
