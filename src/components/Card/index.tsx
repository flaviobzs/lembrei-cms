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
  PriceContainer,
  TitleContainer,
} from "./styles";

interface CardProps {
  title: string;
  subTitle: string;
  price: string;
  image?: any;
  onPress?: any;
  onPressImage?: any;
  renderRightActions?: any;
}

const Card: React.FC<CardProps> = ({ title, subTitle, price, image, onPress, onPressImage, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>    
      <Container>
        <ProductContainer>
        <TouchableOpacity onPress={onPressImage}>
          <ImageContainer source={image}></ImageContainer>
        </TouchableOpacity>
        <DetailsContainer>
          <TitleContainer>{title}</TitleContainer>
          <PriceContainer>{`R$ ${price}`}</PriceContainer>
          <SubTitleContainer numberOfLines={2}>{subTitle}</SubTitleContainer>
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
