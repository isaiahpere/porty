import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;
`;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 700px;
  @media (min-width: 1024px) {
    width: 800px;
  }
`;

const Grid = () => {
  return (
    <Section>
      <Wrapper>
        <Image src="./assets/grid.png" />
      </Wrapper>
    </Section>
  );
};

export default Grid;
