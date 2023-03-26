import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

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
    props.headerHeightMobile &&
    `
    height: ${props.headerHeightMobile}px;
  `}
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #ebb436;
  ${(props) =>
    props.headerColor &&
    `
    background-color: ${props.headerColor};
  `}
  border-bottom: 3px solid #000;
  border-radius: 6px 6px 0px 0px;
  padding: 0px 5px;

  @media (min-width: 768px) {
    ${(props) =>
      props.headerHeightTablet &&
      `height: ${props.headerHeightTablet}px;
    `}
  }
  @media (min-width: 1024px) {
    ${(props) =>
      props.headerHeight &&
      `height: ${props.headerHeight}px;
    `}
  }
`;

const CloseLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.8s ease;

  &:hover {
    transform: rotate(180deg);
  }
`;

const CloseIcon = styled(MdOutlineClose)`
  font-size: 28px;
  color: #000;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 46px;
  }
`;

const BoxHeaderText = styled.p`
  padding-left: 6px;
  font-size: 12px;
  ${(props) =>
    props.headerTextSizeMobile &&
    `
    font-size: ${props.headerTextSizeMobile}px;
  `}
  font-weight: 600;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 16px;
    ${(props) =>
      props.headerTextSizeTablet &&
      `
    font-size: ${props.headerTextSizeTablet}px;
  `}
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
  headerColor,
  headerTextSizeMobile,
  headerTextSizeTablet,
  headerTextSize,
  headerHeightMobile,
  headerHeightTablet,
  headerHeight,
  children,
  closeButton,
}) => {
  return (
    <Section>
      <Container>
        <BoxHeader
          headerColor={headerColor}
          headerHeightMobile={headerHeightMobile}
          headerHeightTablet={headerHeightTablet}
          headerHeight={headerHeight}
        >
          <BoxHeaderText
            headerTextSizeMobile={headerTextSizeMobile}
            headerTextSizeTablet={headerTextSizeTablet}
            headerTextSize={headerTextSize}
          >
            {headerText}
          </BoxHeaderText>
          {closeButton && (
            <CloseLink to="/">
              <CloseIcon />
            </CloseLink>
          )}
        </BoxHeader>
        {children}
      </Container>
    </Section>
  );
};

export default RetroBox;
