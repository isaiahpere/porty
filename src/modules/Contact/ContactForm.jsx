import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components/macro";
import validator from "validator";
import { toast } from "react-hot-toast";

import RetroBox from "../../components/RetroBox";
import { Flex } from "../../components/RetroBox";

const MainContainer = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  /* width: 340px;

  @media (min-width: 540px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  } */
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 46px); // minus header height
  padding: 20px;
`;

const ContentContainer = styled(Flex)`
  padding: 10px;
  border-radius: 20px;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormInput = styled.input`
  height: 60px;
  width: 70%;
  margin-bottom: 16px;
  border-radius: 33px;
  border: 2px solid #000;
  padding: 0px 20px;
  ${(props) =>
    props.invalid &&
    `
    border: 3px dashed red;
  `}
`;

const FormMessage = styled.textarea`
  resize: vertical;
  width: 70%;
  min-height: 200px;
  max-height: 400px;
  border-radius: 33px;
  border: 2px solid #000;
  padding: 10px 20px 0 20px;
  margin-bottom: 24px;
  ${(props) =>
    props.invalid &&
    `
    border: 3px dashed red;
  `}
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FormButton = styled.button`
  width: 300px;
  border-radius: 33px;
  border: 2px solid #000;
  background-color: #eb6134;
  color: white;
  font-size: 30px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.invalid &&
    `
    background-color: grey;
    cursor: not-allowed;
  `}
  @media (min-width: 1024px) {
    &:hover {
      ${(props) =>
        !props.invalid &&
        `
          background-color: #ee8c6b;
        `}
    }
  }
`;

const ContactForm = () => {
  // state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // ref
  const contactForm = useRef();

  let isValidForm =
    fullName.length < 3 ||
    emailInvalid ||
    company.length < 3 ||
    message.length < 20;

  // validate Email
  const handleEmailValidation = (value) => {
    setEmail(value);

    if (validator.isEmail(value)) {
      setEmailInvalid(false);
    } else setEmailInvalid(true);
  };

  const handleForm = (event) => {
    event.preventDefault();

    if (
      fullName.length < 3 ||
      emailInvalid ||
      company.length < 3 ||
      message.length < 20
    )
      return;

    console.log("attempting to send email");
    emailjs
      .sendForm(
        "service_ybrcmtw",
        "template_hzogrou",
        contactForm.current,
        "rleL-0XZBsgtUIwre"
      )
      .then(
        (result) => {
          // fire toast
          toast.success("Thank you For Your Message!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    // reset values
    setFullName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setEmailInvalid(false);
  };

  return (
    <MainContainer id="contact-form" name="contact-form">
      <Wrapper>
        <RetroBox
          headerHeightMobile={32}
          headerHeightTablet={44}
          headerHeight={44}
          headerText="contact me"
          headerTextSizeMobile={16}
          headerTextSizeTablet={22}
          headerTextSize={28}
          closeButton
        >
          <Container>
            <ContentContainer>
              <Form onSubmit={handleForm} ref={contactForm}>
                <FormInput
                  type="text"
                  placeholder="Name"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  invalid={fullName.length >= 1 && fullName.length < 3}
                />
                <FormInput
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => handleEmailValidation(e.target.value)}
                  invalid={email.length >= 1 && emailInvalid}
                />
                <FormInput
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  invalid={company.length >= 1 && company.length < 3}
                />
                <FormMessage
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={10}
                  invalid={message.length >= 1 && message.length < 3}
                />
                <FormButton type="submit" invalid={isValidForm}>
                  SEND
                </FormButton>
              </Form>
            </ContentContainer>
          </Container>
        </RetroBox>
      </Wrapper>
    </MainContainer>
  );
};

export default ContactForm;
