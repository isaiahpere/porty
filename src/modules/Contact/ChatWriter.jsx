import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 95px;
  margin-right: 26px;
`;

const Text = styled(Flex)`
  width: 560px;
  height: 95px;
  padding: 0px 20px;
  font-size: 26px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #f59097;
  border-radius: 33px;
  color: #fff;
`;

const EmojiSmall = styled.img`
  width: 50px;
  margin-left: 20px;
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
