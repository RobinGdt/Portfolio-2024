import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/palette";

interface CustomCursorProps {
  darkMode: boolean;
}

const StyledCustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Pointer = styled.div<{ $darkmode?: boolean }>`
  position: absolute;
  z-index: -1;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(8em);
  transition: transform 0.1s ease;
  background-color: ${(props) =>
    props.$darkmode ? `${COLORS.PEACH[100]}` : `${COLORS.TANGERINE[100]}`};
`;

const CustomCursor = ({ darkMode }: CustomCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StyledCustomCursor>
      <Pointer
        $darkmode={darkMode}
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${
            mousePosition.y - 200
          }px)`,
        }}
      />
    </StyledCustomCursor>
  );
};

export default CustomCursor;
