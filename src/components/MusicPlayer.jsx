import React from "react";
import styled from "styled-components/macro";

import RetroBox from "./RetroBox";

const Section = styled.div`
  position: absolute;
  bottom: 8%;
  left: 12%;
  width: 400px;
  height: 170px;
  z-index: 10;
`;

const Wrapper = styled.div`
  position: relative;
  top: 15%;
  left: 5%;
  width: 90%;
  height: 80%;
  padding: 15px 0px;
  display: flex;
  gap: 10px;
`;

const MusicPlayer = () => {
  return (
    <Section>
      <RetroBox
        headerText="Never Gonna to Give you up - Rick A."
        headerHeight={30}
        headerTextSize={12}
      >
        <Wrapper>Link to Youtube here</Wrapper>
      </RetroBox>
    </Section>
  );
};

export default MusicPlayer;
