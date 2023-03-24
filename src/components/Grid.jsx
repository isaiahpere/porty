import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
`;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 500px;
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
