import React from "react";
import styled from "styled-components/macro";

import { Flex } from "../../components/RetroBox";
import BgContainer from "../../components/BgContainer";
import AnimateContainer from "../../components/AnimateContainer";
import Chat from "./Chat";
import ContactForm from "./ContactForm";

const MaxContainer = styled(Flex)`
  min-height: 100vh;
  flex-direction: column;
`;

const Contact = () => {
  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          <Chat />
          {/* <ContactForm /> */}
        </MaxContainer>
      </AnimateContainer>
    </BgContainer>
  );
};

export default Contact;
