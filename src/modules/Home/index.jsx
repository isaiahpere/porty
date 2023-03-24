import React from "react";
import styled from "styled-components/macro";

import Sections from "./Sections";
import Announcement from "./Announcement";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  background-color: lightblue;
`;

const Container = styled(Flex)`
  min-height: 100vh;
  padding: 15px;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    padding: 20px;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    overflow: hidden;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Sections />
        <Announcement />
      </Container>
    </Section>
  );
};

export default Home;
