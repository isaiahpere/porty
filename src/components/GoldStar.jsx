import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  @media (min-width: 1024px) {
    top: 44%;
  }
`;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 160px;
  -webkit-animation: spin 30s linear infinite;
  -moz-animation: spin 30s linear infinite;
  animation: spin 30s linear infinite;
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media (min-width: 1024px) {
    width: 140px;
  }
`;

const GoldStar = () => {
  return (
    <Section>
      <Wrapper>
        <Image src="./assets/images/goldStar.png" />
      </Wrapper>
    </Section>
  );
};

export default GoldStar;
