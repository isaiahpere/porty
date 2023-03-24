import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  top: 43%;
  left: 15%;
`;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 88px;
`;

const GoldStar = () => {
  return (
    <Section>
      <Wrapper>
        <Image src="./assets/goldStar.png" />
      </Wrapper>
    </Section>
  );
};

export default GoldStar;
