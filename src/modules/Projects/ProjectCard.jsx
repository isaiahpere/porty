import React from "react";
import styled from "styled-components/macro";

import useWindowDimensions from "../../utils/hooks/useWindow";
import { Flex } from "../../components/RetroBox";
const { motion } = require("framer-motion");

const ProjectVisual = styled.div`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 6px;
  padding: 0px 0px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: 600px;
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  object-fit: cover;
`;

const ProjectInfo = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  max-height: 30%;
  font-size: 10px;
  margin-top: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  @media (min-width: 768px) {
    height: 160px;
    letter-spacing: 0.8px;
    padding: 10px 16px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
`;

const ProjectText = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
`;

const ProjectCard = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <ProjectVisual>
        {width >= 1024 && <ProjectImage src={data.desktopImageSrc} />}
        {width >= 768 && width < 1024 && (
          <ProjectImage src={data.tabletImageSrc} />
        )}
        {width < 768 && <ProjectImage src={data.mobileImageSrc} />}
      </ProjectVisual>
      <ProjectInfo>
        <ProjectTitle>{data.title}</ProjectTitle>
        <ProjectText>{data.descOne}</ProjectText>
        <ProjectText>{data.descTwo}</ProjectText>
      </ProjectInfo>
    </>
  );
};

export default ProjectCard;
