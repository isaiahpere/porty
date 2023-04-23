import React, { useState } from "react";
import styled from "styled-components/macro";

import BgContainer from "../../components/BgContainer";
import RetroBox from "../../components/RetroBox";
import AnimateContainer from "../../components/AnimateContainer";
import ProjectCard from "./ProjectCard";
import { Flex } from "../../components/RetroBox";
import { Arrow } from "../AboutMe";
import { projects } from "../../assets/iconInfo";

const MaxContainer = styled(Flex)`
  height: 100vh;
  padding: 0px 10px;
  @media (min-width: 1200px) {
    max-width: 1300px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 360px;
  height: 560px;
  @media (min-width: 390px) {
    width: 375px;
    height: 650px;
  }
  @media (min-width: 768px) {
    width: 540px;
    height: 850px;
  }
  @media (min-width: 1024px) {
    width: 700px;
    height: 850px;
  }
`;

const Container = styled(Flex)`
  height: calc(100% - 32px); // minus header height
  @media (min-width: 768px) {
    height: calc(100% - 44px); // minus header height
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
`;

const ArrowBackground = styled(Flex)`
  position: absolute;
  z-index: 50;
  bottom: 50%;
  right: 6%;
  ${(props) =>
    props.left &&
    `
    right: unset;
    left: 6%;
  `}
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const SliderArrow = styled(Arrow)`
  ${(props) =>
    props.left &&
    `
    transform: rotate(180deg);
  `}
  width: 16px;
  height: 16px;
  color: #000;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Photo = () => {
  //state
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBackward = () => {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    } else setCurrentIndex((prev) => prev - 1);
  };

  const handleForward = () => {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0);
    } else setCurrentIndex((prev) => prev + 1);
  };

  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          <Wrapper>
            <RetroBox
              headerHeightMobile={32}
              headerHeightTablet={44}
              headerHeight={44}
              headerText="projects"
              headerTextSizeMobile={16}
              headerTextSizeTablet={22}
              headerTextSize={28}
              closeButton
            >
              <Container>
                <ContentContainer
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ x: [600, 250, 0], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                >
                  <ProjectCard data={projects[currentIndex]} />
                  <ArrowBackground onClick={handleForward}>
                    <SliderArrow />
                  </ArrowBackground>
                  <ArrowBackground left={1} onClick={handleBackward}>
                    <SliderArrow left={1} />
                  </ArrowBackground>
                </ContentContainer>
              </Container>
            </RetroBox>
          </Wrapper>
        </MaxContainer>
      </AnimateContainer>
    </BgContainer>
  );
};

export default Photo;
