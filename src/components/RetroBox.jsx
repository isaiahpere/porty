import React from "react";
import styled from "styled-components/macro";

//COLORS
// Yellow -> #ebb436
// Pink -> #f59097
// Dark Orange -> #eb6134
// Dark Blue -> #1d8ebf
// Light Blue -> #90c6dc
// Light Gray -> #ebe1d8

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: lightgray;
  border-radius: 10px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebe1d8;
  border: 3px solid #000;
  box-shadow: -5px 5px 0px 0px #000;
  border-radius: 10px;
`;

const BoxHeader = styled(Flex)`
  height: 10%;
  width: 100%;
  justify-content: flex-start;
  background-color: #ebb436;
  border-bottom: 3px solid #000;
  border-radius: 6px 6px 0px 0px;
`;

const BoxHeaderText = styled.p`
  padding-left: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const RetroBox = ({ headerText, children }) => {
  return (
    <Section>
      <Container>
        <BoxHeader>
          <BoxHeaderText>{headerText}</BoxHeaderText>
        </BoxHeader>
        {children}
      </Container>
    </Section>
  );
};

export default RetroBox;
