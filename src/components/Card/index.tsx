import React from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

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
  onPress?: any;
}

const Card: React.FC<CardProps> = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <ImageContainer source={image}></ImageContainer>
        <DetailsContainer>
          <TitleContainer>{title}</TitleContainer>
          <SubTitleContainer>{subTitle}</SubTitleContainer>
        </DetailsContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
