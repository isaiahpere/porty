import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import TitleBox from "./TitleBox";

const IconContainer = styled(Link)`
  width: 120px;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(4px);
  }

  @media (min-width: 768px) {
    width: 140px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IconImage = styled.img`
  width: 70%;
  display: block;
  margin-bottom: 5px;
  object-fit: cover;
  text-align: center;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const IconElement = ({ imgSrc, imgAlt, imgTitle, url }) => {
  return (
    <IconContainer to={url}>
      <ImageContainer>
        <IconImage src={imgSrc} alt={imgAlt} />
      </ImageContainer>
      <TitleBox>{imgTitle}</TitleBox>
    </IconContainer>
  );
};

export default IconElement;
