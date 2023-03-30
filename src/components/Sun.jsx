import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  /* top: 6%; */
  /* top: 60px; */
  top: 4vh;
  right: 14%;
  @media (min-width: 768px) {
    top: 10vh;
    right: 14%;
  }
  @media (min-width: 1024px) {
    right: 14%;
  }
`;

const Wrapper = styled.div``;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: relative;
  z-index: 10;
  width: 140px;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(-20px);
    }
  }
`;

const Stars = styled.img`
  position: absolute;
  bottom: 70%;
  left: 90%;
  width: 60px;
  animation: rotate 2s infinite ease alternate;

  @keyframes rotate {
    to {
      transform: scale(1.3);
    }
  }

  @media (min-width: 1440px) {
    width: 60px;
  }
`;

const Sun = () => {
  return (
    <Section>
      <Wrapper>
        <ImageContainer>
          <Stars src="./assets/images/stars.png" />
          <Image src="./assets/images/smiley.png" />
        </ImageContainer>
      </Wrapper>
    </Section>
  );
};

export default Sun;
