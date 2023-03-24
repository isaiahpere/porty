import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";
const { motion } = require("framer-motion");

const AnimateContainer = styled(motion.div)``;

const Link = styled.a`
  cursor: pointer;
`;

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Image = styled.img`
  width: 65px;
  margin-bottom: 10px;
  display: block;
  @media (min-width: 415px) {
    width: 70px;
  }
  @media (min-width: 768px) {
    width: 100px;
  }
  @media (min-width: 1024px) {
    width: 140px;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Logo = ({ url, title, variants, path }) => {
  return (
    <AnimateContainer variants={variants} layout>
      <Link href={path} target="_blank">
        <Container>
          <Image src={url} />
          <Title>{title}</Title>
        </Container>
      </Link>
    </AnimateContainer>
  );
};

export default Logo;
