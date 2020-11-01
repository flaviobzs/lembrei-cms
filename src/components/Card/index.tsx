import React from "react";
import {
  TouchableOpacity,
} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";



import {
  Container,
  ProductContainer,
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
  renderRightActions?: any;
}

const Card: React.FC<CardProps> = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>    
      <Container>
        <ProductContainer>
        <ImageContainer source={image}></ImageContainer>
        <DetailsContainer>
          <TitleContainer>{title}</TitleContainer>
          <SubTitleContainer>{`R$ ${subTitle}`}</SubTitleContainer>
        </DetailsContainer>
        </ProductContainer>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name="square-edit-outline" size={27} color="black" />
        </TouchableOpacity>
      </Container>
    </Swipeable>
  );
};

export default Card;
