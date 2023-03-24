import React from "react";
import styled from "styled-components/macro";

const Section = styled.div`
  background-color: #90c6dc;
`;

const BgContainer = ({ children }) => {
  return <Section>{children}</Section>;
};

export default BgContainer;
