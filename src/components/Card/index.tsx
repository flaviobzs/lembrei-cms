import React from "react";

import {
  Container,
  DetailsContainer,
  ImageContainer,
  SubTitle,
  Title,
} from "./styles";

const Card: React.FC = ({ title, subTitle, image }) => {
  return (
    <Container>
      <ImageContainer source={image}></ImageContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </DetailsContainer>
    </Container>
  );
};

export default Card;
