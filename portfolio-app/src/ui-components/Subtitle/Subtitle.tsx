import styled from "styled-components";

interface SubtitleProps {
  text: string;
}

const StyledSubtitle = styled.h2``;

const Subtitle = ({ text }: SubtitleProps): JSX.Element => {
  return <StyledSubtitle>{text}</StyledSubtitle>;
};

export default Subtitle;
