import styled from "styled-components";
import { COLORS } from "../../utils/palette";

interface SubtitleProps {
  text: string;
}

const StyledSubtitle = styled.h2`
  color: ${COLORS.TANGERINE[200]};
`;

const Subtitle = ({ text }: SubtitleProps): JSX.Element => {
  return <StyledSubtitle>{text}</StyledSubtitle>;
};

export default Subtitle;
