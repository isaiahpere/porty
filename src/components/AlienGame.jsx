import React from "react";
import styled from "styled-components/macro";

import RetroBox from "./RetroBox";
import { Flex } from "./RetroBox";

const Section = styled.div`
  position: absolute;
  top: 4%;
  left: 5%;
  width: 412px;
  height: 276px;
  z-index: 10;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 90%;
  height: 80%;
  padding: 15px 0px;
  display: flex;
  gap: 10px;
`;

const LeftSide = styled.div`
  position: relative;
  flex: 1;
  background-color: #f3cfff;
`;

const RedBlock = styled.img`
  position: absolute;
  bottom: 0%;
  right: 6%;
  width: 30px;
  height: 25px;
`;

const BlueBlock = styled(RedBlock)`
  bottom: 12%;
  right: 15%;
  width: 60px;
`;

const GreenBlock = styled(RedBlock)`
  top: 44%;
  left: 10%;
  width: 15px;
  height: 45px;
`;

const RightSide = styled(Flex)`
  flex: 1;
  flex-direction: column;
  padding: 0 4px;
`;

const Scoreboard = styled(Flex)`
  flex-direction: column;
  width: 170px;
  height: 82px;
  border-radius: 13px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const Points = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Level = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const StartButton = styled(Flex)`
  width: 160px;
  height: 40px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  -webkit-text-stroke: 1px black;
  color: #f1ed43;
  background-color: #f59097;
  border: 1px solid #707070;
  border-radius: 13px;
  text-transform: uppercase;
  cursor: not-allowed;
`;

const AlienGame = () => {
  return (
    <Section>
      <RetroBox
        headerColor="#F59097"
        headerText="square alien invasion"
        headerHeight={30}
        headerTextSize={12}
      >
        <Wrapper>
          <LeftSide>
            <GreenBlock src="./assets/greenBlock.png" />
            <RedBlock src="./assets/redBlock.png" />
            <BlueBlock src="./assets/blueBlock.png" />
          </LeftSide>
          <RightSide>
            <Scoreboard>
              <Points>Points: 8214</Points>
              <Level>Level: 99</Level>
            </Scoreboard>
            <StartButton>game over</StartButton>
          </RightSide>
        </Wrapper>
      </RetroBox>
    </Section>
  );
};

export default AlienGame;
