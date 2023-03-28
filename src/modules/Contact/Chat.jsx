import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

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
  width: 340px;

  @media (min-width: 540px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 46px); // minus header height
`;

const ContentContainer = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  @media (min-width: 1024px) {
    padding: 16px 40px;
  }
`;

const WriteContainer = styled(Link)`
  display: flex;
  gap: 10px;
  height: 40px;
  margin-top: 14px;
  cursor: pointer;
  @media (min-width: 1024px) {
    gap: 10px;
    height: 50px;
    margin-top: 14px;
  }
`;

const TextBox = styled.div`
  flex-grow: 100;
  border-radius: 33px;
  background-color: #fff;
`;

const SentButton = styled(Flex)`
  width: 100px;
  background-color: #eb6134;
  border-radius: 33px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
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
              <ChatWriter text="what other ways can i contact you?" />
              <ChatReader
                paragraph="reach out to me anytime by phone or email"
                subTextOneLink=""
                subTextOneText="702-496-0186"
                iconSrcOne="./assets/contact/phone.png"
                subTextTwoLink={emailLink}
                subTextTwoText="IsaiahPereira.nv@gmail.com"
                iconSrcTwo="./assets/contact/email.png"
              />
              <WriteContainer
                to="contact-form"
                // spy={true}
                smooth={true}
                offset={50}
                duration={900}
              >
                <TextBox />
                <SentButton>send</SentButton>
              </WriteContainer>
            </ContentContainer>
          </Container>
        </RetroBox>
      </Wrapper>
    </MainContainer>
  );
};

export default Chat;
