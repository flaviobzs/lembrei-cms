import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Modal, TouchableOpacity } from "react-native";

import Wrapper from "../../components/Wrapper";

import {
  ProductDetailsContainer,
  ProductImageContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ModalContainer,
  Close,
  CloseContainer,
  ButtonsContainer,
  Delete,
  Image,
} from "./styles";

const product = {
  id: 1,
  title: "Red sale",
  price: 100,
  image: require("../../assets/jacket.jpg"),
};

const DetailsProduct: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Wrapper>
        <ProductImageContainer
          onPress={() => {
            setModalVisible(true);
            console.log(modalVisible);
          }}
        >
          <ProductImage source={product.image}></ProductImage>
        </ProductImageContainer>
        <ProductDetailsContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductDetailsContainer>
      </Wrapper>
      <Modal visible={modalVisible} animationType="slide">
        <ModalContainer>
          <ButtonsContainer>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                console.log(modalVisible);
              }}
            >
              <Close>
                <MaterialCommunityIcons name="close" color="white" size={35} />
              </Close>
            </TouchableOpacity>

            {/* <Delete>
              <MaterialCommunityIcons
                name="trash-can-outline"
                color="white"
                size={35}
              />
            </Delete> */}
          </ButtonsContainer>
          <Image
            resizeMode="contain"
            source={require("../../assets/jacket.jpg")}
          />
        </ModalContainer>
      </Modal>
    </>
  );
};

export default DetailsProduct;
