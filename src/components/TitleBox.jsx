import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  border: 3px solid #000;
  height: 27px;
  border-radius: 24px;
`;

const SubContainer = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  color: #242424;
`;

const TitleBox = ({ children }) => {
  return (
    <Container>
      <SubContainer>{children}</SubContainer>
    </Container>
  );
};

export default TitleBox;
