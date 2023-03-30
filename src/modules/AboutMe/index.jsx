import React from "react";
import styled from "styled-components/macro";

import RetroBox from "../../components/RetroBox";
import { Flex } from "../../components/RetroBox";
import BgContainer from "../../components/BgContainer";
import AnimateContainer from "../../components/AnimateContainer";

const MaxContainer = styled(Flex)`
  height: 100vh;
  @media (min-width: 1440px) {
    max-width: 1300px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 80vh;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 46px); // minus header height
  padding: 20px;
`;

const ContentContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  flex-direction: column;
  @media (min-width: 1440px) {
    padding: 20px 40px;
    flex-direction: row;
  }
`;

const Left = styled(Flex)`
  flex: 1;
`;

const Image = styled.img`
  width: 266px;
  height: 233px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;

  @media (min-width: 768px) {
    width: 360px;
    height: 316px;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 1440px) {
    width: 400px;
    height: auto;
  }
`;

const Right = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1440px) {
    max-height: 90%;
  }
`;

const Title = styled.h2`
  font-family: "Modak", cursive;
  color: #fff;
  font-size: 24px;
  -webkit-text-stroke: 1px black;
  @media (min-width: 768px) {
    font-size: 48px;
    -webkit-text-stroke: 2px black;
  }
`;

const AboutMeParagraph = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: justify;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const AboutMe = () => {
  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          <Wrapper>
            <RetroBox
              headerHeightMobile={32}
              headerHeightTablet={44}
              headerHeight={44}
              headerText="about me"
              headerTextSizeMobile={16}
              headerTextSizeTablet={22}
              headerTextSize={28}
              closeButton
            >
              <Container>
                <ContentContainer>
                  <Left>
                    <Image src="./assets/images/boy.png" />
                  </Left>
                  <Right>
                    <Title>Howdy!</Title>
                    <AboutMeParagraph>
                      I'm Isaiah Pereira, a software engineer who's passionate
                      about creating amazing web applications! My expertise lies
                      in React, TypeScript, Postgres, and Node.js, and I love
                      using these technologies to build scalable, efficient, and
                      intuitively cool looking apps.
                    </AboutMeParagraph>
                    <AboutMeParagraph>
                      With React, I can create dynamic and interactive user
                      interfaces that look great and are super easy to use.
                      TypeScript is my go-to language for writing scalable and
                      maintainable code that makes my apps more reliable and
                      less error-prone.
                    </AboutMeParagraph>
                    <AboutMeParagraph>
                      When it comes to backends, I love using Node.js and
                      Postgres to build APIs that are lightning-fast and can
                      handle high volumes of traffic with ease. I also make sure
                      to design my databases in a way that's optimized for
                      performance, making sure my apps can store and retrieve
                      large amounts of data without breaking a sweat. I'm all
                      about writing clean, modular code that's easy to maintain
                      and scale. And, of course, I take pride in delivering
                      top-notch software solutions that meet the needs of my
                      clients.
                    </AboutMeParagraph>
                    <AboutMeParagraph>
                      When I'm not busy working on awesome projects, you can
                      find me indulging in my favorite hobbies. I'm an avid
                      video gamer, and I love nothing more than immersing myself
                      in an epic story. I also enjoy snowboarding, and going on
                      ATV trips with my wife and our furry companion, Luke.
                    </AboutMeParagraph>
                    <AboutMeParagraph>
                      Thanks for stopping by my portfolio! Let's chat about how
                      we can work together to build something amazing.
                    </AboutMeParagraph>
                  </Right>
                </ContentContainer>
              </Container>
            </RetroBox>
          </Wrapper>
        </MaxContainer>
      </AnimateContainer>
    </BgContainer>
  );
};

export default AboutMe;
