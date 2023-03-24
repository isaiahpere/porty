import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  top: 10%;
  right: 14%;
`;

const Wrapper = styled.div``;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: relative;
  z-index: 10;
  width: 140px;
  animation: animate 3s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(-20px);
    }
  }
`;

const Stars = styled.img`
  position: absolute;
  bottom: 90%;
  right: -40%;
  width: 60px;
  animation: rotate 2s infinite ease alternate;

  @keyframes rotate {
    to {
      transform: scale(1.3);
    }
  }
`;

const Sun = () => {
  return (
    <Section>
      <Wrapper>
        <ImageContainer>
          <Stars src="./assets/stars.png" />
          <Image src="./assets/smiley.png" />
        </ImageContainer>
      </Wrapper>
    </Section>
  );
};

export default Sun;
