import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  /* background-color: red; */
`;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  /* height: 95px; */
  padding: 20px;
  background-color: #fff;
  border-radius: 33px;
  margin-right: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SubTextContainer = styled(Flex)`
  justify-content: flex-start;
  align-items: center;
`;

const IconImage = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const SubText = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-decoration: underline;
  text-underline-offset: 2px;
  padding-bottom: 4px; // font correction
  &:visited {
    color: #000;
  }
`;

const ImageContainer = styled(Flex)`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 74px;
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
          <SubText href={subTextOneLink} target="_blank">
            {subTextOneText}
          </SubText>
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
