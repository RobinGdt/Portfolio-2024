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

const Pointer = styled.div<{ $darkmode: boolean }>``;

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

  console.log(darkMode);

  return (
    <StyledCustomCursor>
      <Pointer
        $darkmode={darkMode}
        style={{
          position: "absolute",
          zIndex: -1,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: `blur(5em)`,
          backgroundColor: `darkMode ?${COLORS.PEACH[100]} : ${COLORS.TANGERINE[100]}`,
          transform: `translate(${mousePosition.x - 200}px, ${
            mousePosition.y - 200
          }px)`,
        }}
      />
    </StyledCustomCursor>
  );
};

export default CustomCursor;
