import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";
import RetroBox from "../../components/RetroBox";
import BgContainer from "../../components/BgContainer";
import Logo from "./Logo";
import { techInfo } from "../../assets/iconInfo";
import AnimateContainer from "../../components/AnimateContainer";

// import motion has issues
const { motion } = require("framer-motion");

// framer-motion-parent
const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  remove: { opacity: 0, scale: 0.8, transition: { duration: 5 } },
};
// framer-motion-children
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const MaxContainer = styled(Flex)`
  height: 100vh;
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 80vh;
  @media (min-width: 1024px) {
    height: 65vh;
  }
`;

const Container = styled(Flex)`
  width: 100%;
  height: calc(100% - 60px); // minus header height
  padding: 20px 20px 0px 20px;
`;

const ContentContainer = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 20px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Tech = () => {
  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          <Wrapper>
            <RetroBox
              headerHeightMobile={32}
              headerHeightTablet={44}
              headerHeight={44}
              headerColor="#EB6134"
              headerText="tech stack"
              headerTextSizeMobile={16}
              headerTextSizeTablet={22}
              headerTextSize={28}
              closeButton
            >
              <Container>
                <ContentContainer
                  layout
                  variants={cards}
                  initial={"hidden"}
                  animate={"show"}
                >
                  {techInfo.map((item) => (
                    <Logo
                      key={item.name}
                      variants={card}
                      url={`./assets/tech/${item.name}`}
                      title={item.title}
                      path={item.link}
                    />
                  ))}
                </ContentContainer>
              </Container>
            </RetroBox>
          </Wrapper>
        </MaxContainer>
      </AnimateContainer>
    </BgContainer>
  );
};

export default Tech;
