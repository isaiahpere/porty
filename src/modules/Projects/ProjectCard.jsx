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
  height: 350px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  @media (min-width: 390px) {
    height: 375px;
  }
  @media (min-width: 768px) {
    height: 500px;
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  object-fit: cover;
`;

const ProjectInfo = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid #fff;
  height: calc(100% - 350px);
  overflow-y: scroll;
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // IE 10+
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  @media (min-width: 390px) {
    height: calc(100% - 375px);
  }
  @media (min-width: 768px) {
    height: calc(100% - 500px);
    padding: 10px 16px;
  }
`;

const ProjectTitle = styled.a`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
  text-decoration: underline;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

const TechSubtitle = styled.h3`
  font-size: 12px;
  margin-top: 6px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const ProjectText = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
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
        <ProjectTitle href={data.link} target="_blank">
          {data.title}
        </ProjectTitle>
        <ProjectText>{data.descOne}</ProjectText>
        <TechSubtitle>Technologies</TechSubtitle>
        <ProjectText>{data.descTwo}</ProjectText>
      </ProjectInfo>
    </>
  );
};

export default ProjectCard;
