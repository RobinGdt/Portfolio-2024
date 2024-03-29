import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { Arrow } from "../../utils/icon";
import { moveArrow, reverseArrow } from "../../utils/keyframes";
import { Link } from "react-router-dom";
import Span from "../../ui-components/Span/Span";

interface ButtonProps {
  title: string;
  label?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  darkMode?: boolean;
  target?: string;
}

const StyledButtonWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const StyledButton = styled.button<{ $darkmode?: boolean }>`
  width: 100%;
  height: 56px;
  border-radius: 45px;
  border: ${(props) =>
    props.$darkmode
      ? `1px solid ${COLORS.DARKSLATE[100]}`
      : `1px solid ${COLORS.SKY[100]}`};
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 5%;
  display: flex;
  align-items: center;
  transition: border 500ms ease-out;
  cursor: pointer;

  svg {
    path {
      stroke: ${(props) =>
        props.$darkmode ? COLORS.WHITE[100] : COLORS.NIGHT[100]};
      transition: stroke 500ms ease-out;
      transform-origin: center;
      transform: translateY(0);
      transition: opacity 0s;
    }
  }

  &:hover {
    border: ${(props) =>
      props.$darkmode
        ? `1px solid ${COLORS.PEACH[100]}`
        : `1px solid ${COLORS.TANGERINE[100]}`};

    svg {
      animation: ${moveArrow} 400ms linear;
      path {
        stroke: ${(props) =>
          props.$darkmode ? COLORS.PEACH[100] : COLORS.TANGERINE[100]};
      }
    }
  }

  &:not(:hover) {
    svg {
      animation: ${reverseArrow} 400ms linear;
      path {
        stroke: ${(props) =>
          props.$darkmode ? COLORS.WHITE[100] : COLORS.NIGHT[100]};
      }
    }
  }

  @media (max-width: 1050px) {
    height: 66px;
    border: ${(props) =>
      props.$darkmode
        ? `2px solid ${COLORS.DARKSLATE[100]}`
        : `1px solid ${COLORS.SKY[100]}`};

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const Label = styled.label`
  font-size: var(--14px);
  font-family: "Strawford", sans-serif;
`;

const Button = ({
  title,
  label,
  to,
  href,
  darkMode,
  target,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButtonWithLabel>
      {label && <Label>{label}</Label>}
      {to ? (
        <Link to={to} target={target}>
          <StyledButton $darkmode={darkMode} onClick={onClick}>
            <Span text={title} />
            <Arrow className="arrow" />
          </StyledButton>
        </Link>
      ) : (
        <>
          {href ? (
            <a href={href} target="_blank" rel="noreferrer noopener">
              <StyledButton onClick={onClick} $darkmode={darkMode}>
                <Span text={title} />
                <Arrow className="arrow" />
              </StyledButton>
            </a>
          ) : (
            <StyledButton onClick={onClick} $darkmode={darkMode}>
              <Span text={title} />
              <Arrow className="arrow" />
            </StyledButton>
          )}
        </>
      )}
    </StyledButtonWithLabel>
  );
};

export default Button;
