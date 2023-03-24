import React from "react";
import styled from "styled-components/macro";

import IconElement from "../../components/IconElement";
import { assetInfo } from "../../assets/iconInfo";

const Section = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 300px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    max-width: 160px;
    margin-bottom: 0px;
  }

  @media (min-width: 1024px) {
  }
`;

const Sections = () => {
  return (
    <Section>
      {assetInfo.map((item) => (
        <IconElement
          key={item.name}
          imgSrc={`./assets/${item.name}`}
          imgAlt={item.description}
          imgTitle={item.title}
          url={item.path}
        />
      ))}
    </Section>
  );
};

export default Sections;
