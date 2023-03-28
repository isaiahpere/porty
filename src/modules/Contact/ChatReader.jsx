import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  /* background-color: red; */
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 33px;
  margin-right: 10px;
  @media (min-width: 540px) {
    width: 280px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    width: 400px;
    padding: 20px;
  }
  @media (min-width: 1024px) {
    width: 560px;
    padding: 20px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  @media (min-width: 540px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const SubTextContainer = styled(Flex)`
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
`;

const IconImage = styled.img`
  width: 24px;
  margin-right: 10px;
  @media (min-width: 540px) {
    width: 32px;
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    width: 40px;
    margin-right: 10px;
  }
  @media (min-width: 1024px) {
    width: 50px;
    margin-right: 10px;
  }
`;

const SubText = styled.a`
  font-size: 10px;
  font-weight: 500;
  color: #000;
  text-decoration: underline;
  text-underline-offset: 2px;
  padding-bottom: 4px; // font correction
  &:visited {
    color: #000;
  }
  @media (min-width: 540px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const SubTextNoLink = styled(SubText)`
  text-decoration: none;
  cursor: auto;
`;

const ImageContainer = styled(Flex)`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  @media (min-width: 540px) {
    width: 54px;
    height: 54px;
  }
  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

const Image = styled.img`
  width: 30px;
  @media (min-width: 540px) {
    width: 40px;
  }
  @media (min-width: 1024px) {
    width: 60px;
  }
`;

const ChatReader = ({
  paragraph,
  subTextOneLink,
  subTextOneText,
  iconSrcOne,
  subTextTwoLink,
  subTextTwoText,
  iconSrcTwo,
}) => {
  return (
    <Container>
      <MainTextContainer>
        <Text>{paragraph}</Text>
        <SubTextContainer>
          <IconImage src={iconSrcOne} />
          {subTextOneLink && (
            <SubText href={subTextOneLink} target="_blank">
              {subTextOneText}
            </SubText>
          )}
          {!subTextOneLink && (
            <SubTextNoLink href="#">{subTextOneText}</SubTextNoLink>
          )}
        </SubTextContainer>
        <SubTextContainer>
          <IconImage src={iconSrcTwo} />
          <SubText href={subTextTwoLink} target="_blank">
            {subTextTwoText}
          </SubText>
        </SubTextContainer>
      </MainTextContainer>
      <ImageContainer>
        <Image src="./assets/contact/face.png" />
      </ImageContainer>
    </Container>
  );
};

export default ChatReader;
