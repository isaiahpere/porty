import React from "react";
import styled from "styled-components/macro";

import Announcement from "./Announcement";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  position: relative;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
    </Container>
  );
};

export default Home;
