import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebe1d8;
  border: 3px solid #242424;
  box-shadow: -5px 5px 0px 0px #000;
  border-radius: 10px;
`;

const BoxHeader = styled.div`
  height: 10%;
  width: 100%;
  background-color: #ebb436;
  border-bottom: 3px solid #242424;
  border-radius: 6px 6px 0px 0px;
`;

const RetroBox = ({ children }) => {
  return (
    <Section>
      <Container>
        <BoxHeader />
        {children}
      </Container>
    </Section>
  );
};

export default RetroBox;
