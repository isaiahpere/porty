import React, { useRef } from "react";
import styled from "styled-components/macro";

import BgContainer from "../../components/BgContainer";
import RetroBox from "../../components/RetroBox";
import { Flex } from "../../components/RetroBox";
import AnimateContainer from "../../components/AnimateContainer";
import { StartButton } from "../../components/AlienGame";

const { motion } = require("framer-motion");

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
  height: 380px;
  @media (min-width: 500px) {
    width: 460px;
    height: 480px;
  }
  @media (min-width: 1024px) {
    width: 600px;
    height: 620px;
  }
`;

const Container = styled(Flex)`
  height: calc(100% - 32px); // minus header height
  @media (min-width: 768px) {
    height: calc(100% - 44px); // minus header height
  }
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  border: 3px solid #000;
  border-radius: 13px;
  cursor: pointer;
  width: 80%;
  margin-bottom: 10px;
`;

const PlayButton = styled(StartButton)`
  background-color: #eb6134;
  border: 2px solid #000;
  color: #fff;
  cursor: pointer;
`;

const Image = styled.img`
  width: 300px;

  @media (min-width: 415px) {
    width: 360px;
  }
  @media (min-width: 768px) {
    width: 550px;
  }
`;

const Photo = () => {
  const VideoRef = useRef();

  const handleVideoPlay = () => {
    VideoRef.current.play();
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
              headerText="video.mp4"
              headerTextSizeMobile={16}
              headerTextSizeTablet={22}
              headerTextSize={28}
              closeButton
            >
              <Container>
                <ContentContainer
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ x: [-600, 250, 0], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                >
                  <Video
                    ref={VideoRef}
                    preload="no"
                    onClick={(e) => e.target.play()}
                  >
                    <source
                      src="./assets/video/thankyou.mp4"
                      type="video/mp4"
                    />
                  </Video>
                  <PlayButton onClick={handleVideoPlay}>Play Me</PlayButton>
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
