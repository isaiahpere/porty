import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (min-width: 540px) {
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 30px;
  margin-right: 10px;
  @media (min-width: 540px) {
    width: 40px;
  }
  @media (min-width: 1024px) {
    width: 70px;
  }
`;

const Text = styled(Flex)`
  justify-content: flex-start;
  width: 180px;
  min-height: 38px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #f59097;
  border-radius: 33px;
  color: #fff;
  @media (min-width: 540px) {
    width: 320px;
    height: 40px;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    width: 430px;
    padding: 0px 20px;
    font-size: 18px;
  }
`;

const EmojiSmall = styled.img`
  width: 14px;
  margin-left: 12px;
  display: none;
  @media (min-width: 540px) {
    display: block;
    width: 24px;
  }
  @media (min-width: 1024px) {
    width: 30px;
    margin-left: 20px;
  }
`;

const ChatWriter = ({ text, showEmoji }) => {
  return (
    <Container>
      <Image src="./assets/smiley.png" />
      <Text>
        {text}
        {showEmoji && (
          <>
            <EmojiSmall src="./assets/smileySmall.png" />
            <EmojiSmall src="./assets/smileySmall.png" />
          </>
        )}
      </Text>
    </Container>
  );
};

export default ChatWriter;
