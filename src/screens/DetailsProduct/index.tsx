import React from "react";

import Screen from "../../components/Screen";
import {
  ProductDetailsContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./styles";

const product = {
  id: 1,
  title: "Red sale",
  price: 100,
  image: require("../../assets/jacket.jpg"),
};

const DetailsProduct: React.FC = () => {
  return (
    <Screen>
      <ProductImage source={product.image}></ProductImage>
      <ProductDetailsContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductDetailsContainer>
    </Screen>
  );
};

export default DetailsProduct;
