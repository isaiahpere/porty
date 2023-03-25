import React from "react";
import styled from "styled-components/macro";

import BgContainer from "../../components/BgContainer";
import AnimateContainer from "../../components/AnimateContainer";
import { Flex } from "../../components/RetroBox";
import RetroBox from "../../components/RetroBox";
import { resumeInfo } from "../../assets/iconInfo";

const MaxContainer = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Wrapper = styled(Flex)`
  width: 80vw;
  height: 30vh;
  margin-bottom: 24px;
  @media (min-width: 1024px) {
    width: 50%;
    height: 30vh;
    margin-bottom: 36px;
  }
`;

const Container = styled(Flex)`
  height: 100%;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Boldy = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-underline-offset: 2px;
  text-decoration: underline;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 36px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  background-color: #eb6134;
  border: 2px solid #000;
  border-radius: 13px;
  text-transform: uppercase;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 230px;
    height: 48px;
    font-size: 22px;
  }
  @media (min-width: 1024px) {
    &:hover {
      background-color: #32a956;
    }
  }
`;

const Resume = () => {
  return (
    <BgContainer>
      <AnimateContainer>
        <MaxContainer>
          {resumeInfo &&
            resumeInfo.map((item) => (
              <Wrapper key={item.title}>
                <RetroBox
                  headerHeightMobile={32}
                  headerHeightTablet={36}
                  headerHeight={40}
                  headerColor={item.color}
                  headerText={item.title}
                  headerTextSizeMobile={16}
                  headerTextSizeTablet={20}
                  headerTextSize={24}
                  closeButton
                >
                  <Container>
                    <Text>
                      Download the <Boldy>{item.title.split(" ")[0]}</Boldy>{" "}
                      resume?
                    </Text>
                    <DownloadButton
                      href={`./assets/resume/${item.fileName}`}
                      download={item.fileName}
                      target="_blank"
                    >
                      Download
                    </DownloadButton>
                  </Container>
                </RetroBox>
              </Wrapper>
            ))}
        </MaxContainer>
      </AnimateContainer>
    </BgContainer>
  );
};

export default Resume;
