import React from "react";
import styled from "styled-components/macro";

import Sections from "./Sections";
import Announcement from "./Announcement";

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightblue;
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
`;

const Home = () => {
  return (
    <Container>
      <Sections />
      <Announcement />
    </Container>
  );
};

export default Home;
