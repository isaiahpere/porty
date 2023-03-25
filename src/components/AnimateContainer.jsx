import React from "react";
import styled from "styled-components/macro";
const { motion } = require("framer-motion");

const Container = styled(motion.div)``;

const AnimateContainer = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", delay: 0.2 }}
    >
      {children}
    </Container>
  );
};

export default AnimateContainer;
