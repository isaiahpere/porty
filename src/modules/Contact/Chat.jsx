import React from "react";
import styled from "styled-components/macro";

import RetroBox from "../../components/RetroBox";
import { Flex } from "../../components/RetroBox";
import ChatReader from "./ChatReader";
import ChatWriter from "./ChatWriter";

const MainContainer = styled(Flex)`
  width: 100vw;
  height: 100vh;
  @media (min-width: 1440px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 80vh;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 46px); // minus header height
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 40px;
  border-radius: 20px;
`;

const Chat = () => {
  let emailLink =
    "mailto:isaiahpereira88@gmail.com?subject=I%20Want%20To%20Hire%20You!";

  return (
    <MainContainer>
      <Wrapper>
        <RetroBox
          headerHeightMobile={32}
          headerHeightTablet={44}
          headerHeight={46}
          headerColor="#1d8ebf"
          headerText="messages"
          headerTextSizeMobile={16}
          headerTextSizeTablet={22}
          headerTextSize={28}
          closeButton
        >
          <Container>
            <ContentContainer>
              <ChatWriter text="where can i find you?" showEmoji />
              <ChatReader
                paragraph="you can find me in many places such as linkedin and github!"
                subTextOneLink="https://www.linkedin.com/in/isaiahpereira/"
                subTextOneText="LinkedIn/Isaiah"
                iconSrcOne="./assets/contact/linkedin.png"
                subTextTwoLink="https://github.com/isaiahpere"
                subTextTwoText="Github/Isaiah"
                iconSrcTwo="./assets/contact/github.png"
              />
            </ContentContainer>
          </Container>
        </RetroBox>
      </Wrapper>
    </MainContainer>
  );
};

export default Chat;
