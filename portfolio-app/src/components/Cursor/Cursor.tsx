import React from "react";
import styled from "styled-components";
// import { Tooltip } from "react-tooltip";

const CursorContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 20px;
  height: 20px;
`;

const Cursor = (): JSX.Element => {
  return (
    <CursorContainer>
      {/* <Tooltip
        id="cursor"
        effect="solid"
        place="top"
        type="light"
        backgroundColor="black"
        arrowColor="transparent"
      /> */}
    </CursorContainer>
  );
};

export default Cursor;
