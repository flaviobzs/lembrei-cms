import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Close, Delete, Image } from "./styles";

const ImageProduct: React.FC = () => {
  return (
    <Container>
      <Close>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </Close>

      <Delete>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </Delete>
      <Image resizeMode="contain" source={require("../../assets/jacket.jpg")} />
    </Container>
  );
};

export default ImageProduct;
