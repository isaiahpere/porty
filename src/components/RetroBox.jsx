import React from "react";
import styled from "styled-components/macro";

//COLORS
// Yellow -> #ebb436
// Pink -> #f59097
// Dark Orange -> #eb6134
// Dark Blue -> #1d8ebf
// Light Blue -> #90c6dc
// Light Gray -> #ebe1d8

export const Flex = styled.div`
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
  height: 8%;
  ${(props) =>
    props.headerHeight &&
    `
    height: ${props.headerHeight}px;
  `}
  width: 100%;
  justify-content: flex-start;
  background-color: #ebb436;
  ${(props) =>
    props.headerColor &&
    `
    background-color: ${props.headerColor};
  `}
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
  @media (min-width: 1024px) {
    ${(props) =>
      props.headerTextSize &&
      `
    font-size: ${props.headerTextSize}px;
  `}
  }
`;

const RetroBox = ({
  headerText,
  headerTextSize,
  headerColor,
  headerHeight,
  children,
}) => {
  return (
    <Section>
      <Container>
        <BoxHeader headerColor={headerColor} headerHeight={headerHeight}>
          <BoxHeaderText headerTextSize={headerTextSize}>
            {headerText}
          </BoxHeaderText>
        </BoxHeader>
        {children}
      </Container>
    </Section>
  );
};

export default RetroBox;
