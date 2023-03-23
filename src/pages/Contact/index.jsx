import React from "react";
import styled from "styled-components/macro";

//COLORS
// Yellow -> #ebb436
// Pink -> #f59097
// Dark Orange -> #eb6134
// Dark Blue -> #1d8ebf
// Light Blue -> #90c6dc
// Light Gray -> #ebe1d8

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px 15px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
  background-color: #ebe1d8;
  border: 5px solid #242424;
  box-shadow: -5px 15px 0px 0px #000;
  border-radius: 10px;
`;

const BoxHeader = styled.div`
  height: 40px;
  width: 100%;
  background-color: #ebb436;
  border-bottom: 3px solid #242424;
  border-radius: 3px 3px 0px 0px;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <BoxHeader />
      </Container>
    </Section>
  );
};

export default Contact;
