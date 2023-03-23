import React from "react";
import styled from "styled-components/macro";
import RetroBox from "../../components/Globals/RetroBox";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 306px;
  height: 304px;
`;

const InnerContainer = styled(Flex)`
  position: absolute;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 82%;
  top: 44px;
  left: 16px;
  background-color: #f59097;
  border: 2px solid #242424;
  border-radius: 10px;
  z-index: 1000;
`;

const TitleContainer = styled(Flex)`
  flex-direction: column;
  margin-top: 10px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  font-family: "Modak", cursive;
  color: #fff;
  font-size: 28px;
  line-height: 28px;
  -webkit-text-stroke: 2px black;
  text-shadow: -5px 0px 2px #242424;
`;

const Subtitle = styled(Title)`
  font-size: 36px;
  line-height: 36px;
  color: #f1ed43;
`;

const ImageContainer = styled(Flex)`
  width: 50%;
  padding-bottom: 10px;

  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const TechGuy = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Announcement = () => {
  return (
    <Section>
      <RetroBox>
        <InnerContainer>
          {/* <MyName src="./assets/IsaName.png" /> */}
          <TitleContainer>
            <Title>ISAIAH'S</Title>
            <Subtitle>PORTFOLIO</Subtitle>
          </TitleContainer>
          <ImageContainer>
            <TechGuy src="./assets/pcguy.png" />
          </ImageContainer>
        </InnerContainer>
      </RetroBox>
    </Section>
  );
};

export default Announcement;
