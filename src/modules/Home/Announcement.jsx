import React from "react";
import styled from "styled-components/macro";

import RetroBox from "../../components/RetroBox";
import useWindowDimensions from "../../utils/hooks/useWindow";
import Sun from "../../components/Sun";
import GoldStar from "../../components/GoldStar";
import Grid from "../../components/Grid";
import AlienGame from "../../components/AlienGame";
import MusicPlayer from "../../components/MusicPlayer";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled(Flex)`
  position: relative;
  @media (min-width: 768px) {
    min-height: 90vh;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 3;
    padding-bottom: 150px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 300;
  width: 300px;
  height: 304px;
  @media (min-width: 768px) {
    width: 451px;
    height: 450px;
  }
  @media (min-width: 1440px) {
    width: 587px;
    height: 585px;
  }
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
  @media (min-width: 768px) {
    top: 62px;
    left: 24px;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    top: 82px;
    left: 30px;
  }
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
  @media (min-width: 768px) {
    font-size: 40px;
    padding-bottom: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
    padding-bottom: 18px;
  }
`;

const Subtitle = styled(Title)`
  font-size: 36px;
  line-height: 36px;
  color: #f1ed43;
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
  }
`;

const ImageContainer = styled(Flex)`
  width: 50%;
  padding-bottom: 10px;

  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 55%;
  }
  @media (min-width: 1440px) {
    width: 60%;
  }
`;

const TechGuy = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Announcement = () => {
  const { width } = useWindowDimensions();
  let tablet = width && width >= 768;
  let desktop = width && width >= 1024;
  let largeDesktop = width && width >= 1440;

  return (
    <Section>
      {largeDesktop && <MusicPlayer />}
      {desktop && <AlienGame />}
      {tablet && (
        <>
          <Grid />
          <GoldStar />
          <Sun />
        </>
      )}
      <Wrapper>
        <RetroBox headerText="software engineer - welcome">
          <InnerContainer>
            <TitleContainer>
              <Title>ISAIAH'S</Title>
              <Subtitle>PORTFOLIO</Subtitle>
            </TitleContainer>
            <ImageContainer>
              <TechGuy src="./assets/pcguy.png" />
            </ImageContainer>
          </InnerContainer>
        </RetroBox>
      </Wrapper>
    </Section>
  );
};

export default Announcement;
