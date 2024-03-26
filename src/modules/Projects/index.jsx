import React from "react";
import styled from "styled-components/macro";

import BgContainer from "../../components/BgContainer";
import RetroBox from "../../components/RetroBox";
import AnimateContainer from "../../components/AnimateContainer";
// import ProjectCard from "./ProjectCard";
import { Flex } from "../../components/RetroBox";
// import { Arrow } from "../AboutMe";
// import { projects } from "../../assets/iconInfo";

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

const FullContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Message = styled.p`
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 20px;
  }
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const SmallText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 15px;
`;

const GithubLink = styled.a`
  width: 60px;
`;

// const ArrowBackground = styled(Flex)`
//   position: absolute;
//   z-index: 50;
//   bottom: 50%;
//   right: 6%;
//   ${(props) =>
//     props.left &&
//     `
//     right: unset;
//     left: 6%;
//   `}
//   width: 24px;
//   height: 24px;
//   background-color: #fff;
//   border: 2px solid #000;
//   border-radius: 50%;
//   overflow: hidden;
//   @media (min-width: 768px) {
//     width: 30px;
//     height: 30px;
//   }
// `;

// const SliderArrow = styled(Arrow)`
//   ${(props) =>
//     props.left &&
//     `
//     transform: rotate(180deg);
//   `}
//   width: 16px;
//   height: 16px;
//   color: #000;
//   @media (min-width: 768px) {
//     width: 20px;
//     height: 20px;
//   }
// `;

const Photo = () => {
  //state
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleBackward = () => {
  //   if (currentIndex === 0) {
  //     setCurrentIndex(projects.length - 1);
  //   } else setCurrentIndex((prev) => prev - 1);
  // };

  // const handleForward = () => {
  //   if (currentIndex === projects.length - 1) {
  //     setCurrentIndex(0);
  //   } else setCurrentIndex((prev) => prev + 1);
  // };

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
              height={400}
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
                  <FullContainer>
                    <Message>
                      {
                        "Ooopsie! This page is currently under construction. Please check back later :( "
                      }
                    </Message>

                    <SmallContainer>
                      <SmallText>
                        In the meantime, please check out my projects on my
                        GitHub page.
                      </SmallText>
                      <GithubLink
                        href="https://github.com/isaiahpere"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </GithubLink>
                    </SmallContainer>
                  </FullContainer>

                  {/* <ProjectCard data={projects[currentIndex]} />
                  <ArrowBackground onClick={handleForward}>
                    <SliderArrow />
                  </ArrowBackground>
                  <ArrowBackground left={1} onClick={handleBackward}>
                    <SliderArrow left={1} />
                  </ArrowBackground> */}
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
