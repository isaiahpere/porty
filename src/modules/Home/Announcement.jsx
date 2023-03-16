import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  position: absolute;
  bottom: 20vh;
  right: 15vw;
`;

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const InnerContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 82%;
  top: 12%;
  left: 6%;
  background-color: lightpink;
  border: 3px solid #242424;
  border-radius: 4px;
`;

const Layout = styled.img`
  width: 100%;
  height: 100%;
`;

const MyName = styled.img`
  position: absolute;
  width: 80%;
  padding-top: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const TechGuy = styled.img`
  object-fit: cover;
  width: 70%;
  padding-top: 15%;
`;

const Announcement = () => {
  return (
    <Section>
      <Container>
        <Layout src="./assets/yellow_layout.png" />
        <InnerContainer>
          <MyName src="./assets/IsaName.png" />
          <TechGuy src="./assets/pcguy.png" />
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Announcement;
