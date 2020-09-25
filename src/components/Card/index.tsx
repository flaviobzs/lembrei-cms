import React from "react";

import {
  Container,
  DetailsContainer,
  ImageContainer,
  SubTitleContainer,
  TitleContainer,
} from "./styles";

interface CardProps {
  title: string;
  subTitle: string;
  image?: any;
}

const Card: React.FC<CardProps> = ({ title, subTitle, image }) => {
  return (
    <Container>
      <ImageContainer source={image}></ImageContainer>
      <DetailsContainer>
        <TitleContainer>{title}</TitleContainer>
        <SubTitleContainer>{subTitle}</SubTitleContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Card;
