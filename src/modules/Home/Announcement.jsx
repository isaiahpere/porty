import React from "react";
import styled from "styled-components/macro";

import RetroBox from "../../components/RetroBox";
import useWindowDimensions from "../../utils/hooks/useWindow";
import Sun from "../../components/Sun";
import GoldStar from "../../components/GoldStar";
import Grid from "../../components/Grid";

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
  }
`;

const Wrapper = styled.div`
  width: 300px;
  height: 304px;
  @media (min-width: 768px) {
    width: 451px;
    height: 450px;
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
`;

const Subtitle = styled(Title)`
  font-size: 36px;
  line-height: 36px;
  color: #f1ed43;
  @media (min-width: 768px) {
    font-size: 60px;
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
`;

const TechGuy = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Announcement = () => {
  const { width } = useWindowDimensions();
  let tablet = width && width >= 768;

  return (
    <Section>
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
