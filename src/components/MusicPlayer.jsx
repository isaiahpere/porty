import React, { useState } from "react";
import styled from "styled-components/macro";

import RetroBox, { Flex } from "./RetroBox";
import { songs } from "../assets/iconInfo";

const Section = styled(Flex)`
  position: absolute;
  bottom: 10%;
  left: 2%;
  width: 300px;
  height: 170px;
  z-index: 10;

  @media (min-width: 1200px) {
    left: 10%;
  }
`;

const Wrapper = styled(Flex)`
  width: 100%;
  height: calc(100% - 30px);
`;

const LeftControl = styled.div`
  cursor: pointer;
  margin-right: 16px;
`;

const ControlImage = styled.img`
  width: 60px;
`;

const PlayButton = styled.a`
  cursor: pointer;
`;

const PlayButtonImage = styled.img`
  width: 60px;
`;

const RightControl = styled.div`
  cursor: pointer;
  margin-left: 16px;
`;

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);

  const handlePrevious = () => {
    if (currentSong === 0) setCurrentSong(songs.length - 1);
    else {
      setCurrentSong((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSong === songs.length - 1) setCurrentSong(0);
    else {
      setCurrentSong((prev) => prev + 1);
    }
  };

  return (
    <Section>
      <RetroBox
        headerText={songs[currentSong].songName}
        headerHeight={30}
        headerTextSize={12}
      >
        <Wrapper>
          <LeftControl onClick={handlePrevious}>
            <ControlImage src="./assets/music/backward.png" />
          </LeftControl>
          <PlayButton href={songs[currentSong].songLink} target="_blank">
            <PlayButtonImage src="./assets/music/play.png" />
          </PlayButton>
          <RightControl onClick={handleNext}>
            <ControlImage src="./assets/music/forward.png" />
          </RightControl>
        </Wrapper>
      </RetroBox>
    </Section>
  );
};

export default MusicPlayer;
