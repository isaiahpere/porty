import React from "react";
import styled from "styled-components/macro";

import RetroBox from "../../components/RetroBox";
import { Flex } from "../../components/RetroBox";

const MainContainer = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 70vw;
  height: 80vh;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 46px); // minus header height
  padding: 20px;
`;

const ContentContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  flex-direction: column;
`;

const Left = styled(Flex)`
  flex: 1;
`;

const Image = styled.img`
  width: 266px;
  height: 233px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;

  @media (min-width: 768px) {
    width: 360px;
    height: 316px;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Right = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h2`
  font-family: "Modak", cursive;
  color: #fff;
  font-size: 24px;
  -webkit-text-stroke: 1px black;
  @media (min-width: 768px) {
    font-size: 48px;
    -webkit-text-stroke: 2px black;
  }
`;

const AboutMeText = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: justify;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = () => {
  return (
    <MainContainer>
      <Wrapper>
        <RetroBox
          headerHeightMobile={32}
          headerHeightTablet={44}
          headerHeight={44}
          headerText="about me"
          headerTextSizeMobile={16}
          headerTextSizeTablet={22}
          headerTextSize={28}
          closeButton
        >
          <Container>
            <ContentContainer>
              <Left>
                <Image src="./assets/boy.png" />
              </Left>
              <Right>
                <Title>Howdy!</Title>
                <AboutMeText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perspiciatis est vitae temporibus ipsa ipsum vel. Excepturi
                  est, doloremque officia asperiores aperiam quisquam ullam?
                  Blanditiis iusto mollitia quisquam accusantium quis ipsum!
                  Necessitatibus, quisquam, veritatis error assumenda odio
                  reiciendis minus velit quae aliquid eveniet vero et molestiae
                  repellendus nesciunt libero. Laudantium neque eos ad expedita
                  quam magnam nulla, consequatur error aperiam velit. Totam
                  voluptatum at voluptates iure beatae atque? Blanditiis
                  aspernatur explicabo praesentium excepturi dolorem fugit ipsam
                  ad, maiores sit possimus neque id deserunt quod veniam impedit
                  fuga consequuntur, cum voluptates aliquid? Harum optio
                  perferendis quo quae beatae rerum iste, doloribus accusamus
                  minima maiores in eaque, aut placeat magnam animi eligendi
                  magni atque illo assumenda ullam possimus esse pariatur?
                  Ratione, quae repellendus. Dolores iure repudiandae ad,
                  maiores sit possimus neque id deserunt quod veniam impedit
                  fuga consequuntur, cum voluptates aliquid? Harum optio
                  perferendis quo quae beatae rerum iste, doloribus accusamus
                  minima maiores in eaque, aut placeat magnam animi eligendi
                  magni atque illo assumenda ullam possimus esse pariatur?
                  Ratione, quae repellendus. Dolores iure repudiandae
                </AboutMeText>
              </Right>
            </ContentContainer>
          </Container>
        </RetroBox>
      </Wrapper>
    </MainContainer>
  );
};

export default ContactForm;
