import React, { useState } from "react";
import styled from "styled-components/macro";
import { AiOutlineArrowRight } from "react-icons/ai";

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
  height: 70vh;
  @media (min-width: 768px) {
    max-width: 600px;
    height: 60vh;
  }
  @media (min-width: 1024px) {
    width: 900px;
    height: 700px;
  }
  @media (min-width: 1440px) {
  }
`;

const MainContainer = styled(Flex)`
  width: 100%;
  height: calc(100% - 32px);
  flex-direction: column;
`;

const ContentContainer = styled(Flex)`
  position: relative;
  width: 100%;
  height: 85%;
  overflow: hidden;
  border-radius: 20px;
  transition: left 0.3s ease;
  @media (min-width: 1024px) {
    padding: 20px 100px;
    flex-direction: row;
  }
`;

const Container = styled(Flex)`
  padding: 0px 16px;
  ${(props) =>
    props.textContent &&
    `
    justify-content: flex-start;
    background-color: #fff;
    border: 6px solid #fff;
    `}
  border-radius: 24px;
  flex-direction: column;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

const Left = styled(Flex)`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: left 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    `
    left: 100%;
  `}
`;

const Image = styled.img`
  width: 310px;
  height: 310px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  border-radius: 13px;
  border: 3px solid #000;
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    margin-top: 10px;
  }
  @media (min-width: 1440px) {
    width: 450px;
    height: 450px;
  }
`;

const Right = styled(Flex)`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 100%;
  width: 100%;
  max-height: 100%;
  padding: 10px;
  border-radius: 10px;
  transition: left 0.5s ease-in-out;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.toggle &&
    `
    transition-delay: 200ms;
    left: 0;
  `}
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
`;

export const Arrow = styled(AiOutlineArrowRight)`
  width: 30px;
  height: 30px;
  transition: transform 0.8s ease;
  cursor: pointer;
  ${(props) =>
    props.toggle &&
    `
    transform: rotate(180deg);
    `}
`;

const AboutMe = () => {
  const [toggleSlide, setToggleSlide] = useState(false);

  const handleSlide = () => {
    setToggleSlide((prev) => !prev);
  };

  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          <Wrapper>
            <RetroBox
              bgColor="fff"
              headerHeightMobile={32}
              headerHeightTablet={44}
              headerHeight={44}
              headerText="about me"
              headerTextSizeMobile={16}
              headerTextSizeTablet={22}
              headerTextSize={28}
              closeButton
            >
              <MainContainer>
                <ContentContainer>
                  <Left toggle={toggleSlide ? 1 : 0}>
                    <Container>
                      <Image src="./assets/images/face.jpg" />
                    </Container>
                  </Left>
                  <Right toggle={toggleSlide ? 1 : 0}>
                    <Container textContent>
                      <Title>Howdy!</Title>
                      <AboutMeParagraph>
                        I'm Isaiah Pereira, a software engineer who's passionate
                        about creating amazing web applications! My expertise
                        lies in React, TypeScript, Postgres, and Node.js, and I
                        love using these technologies to build scalable,
                        efficient, and intuitively cool looking apps.
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
                        handle high volumes of traffic with ease. I also make
                        sure to design my databases in a way that's optimized
                        for performance, making sure my apps can store and
                        retrieve large amounts of data without breaking a sweat.
                        I'm all about writing clean, modular code that's easy to
                        maintain and scale. And, of course, I take pride in
                        delivering top-notch software solutions that meet the
                        needs of my clients.
                      </AboutMeParagraph>
                      <AboutMeParagraph>
                        When I'm not busy working on awesome projects, you can
                        find me indulging in my favorite hobbies. I'm an avid
                        video gamer, and I love nothing more than immersing
                        myself in an epic story. I also enjoy snowboarding, and
                        going on ATV trips with my wife and our furry companion,
                        Luke.
                      </AboutMeParagraph>
                      <AboutMeParagraph>
                        Thanks for stopping by my portfolio! Let's chat about
                        how we can work together to build something amazing.
                      </AboutMeParagraph>
                    </Container>
                  </Right>
                </ContentContainer>
                <Arrow onClick={handleSlide} toggle={toggleSlide ? 1 : 0} />
              </MainContainer>
            </RetroBox>
          </Wrapper>
        </MaxContainer>
      </AnimateContainer>
    </BgContainer>
  );
};

export default AboutMe;
