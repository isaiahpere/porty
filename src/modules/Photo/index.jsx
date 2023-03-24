import React from "react";
import styled from "styled-components/macro";

import BgContainer from "../../components/BgContainer";
import RetroBox from "../../components/RetroBox";
import { Flex } from "../../components/RetroBox";
import AnimateContainer from "../../components/AnimateContainer";
const { motion } = require("framer-motion");

const MaxContainer = styled(Flex)`
  height: 100vh;
  @media (min-width: 1200px) {
    max-width: 1300px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 50vh;
  @media (min-width: 1024px) {
    width: 50%;
    height: 70vh;
  }
`;

const Container = styled(Flex)`
  height: calc(100% - 60px); // minus header height
  padding: 20px 20px 0px 20px;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          <Wrapper>
            <RetroBox
              headerHeightMobile={32}
              headerHeightTablet={44}
              headerHeight={44}
              headerText="photo.jpg"
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
                  <Image src="./assets/angry.png" />
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
