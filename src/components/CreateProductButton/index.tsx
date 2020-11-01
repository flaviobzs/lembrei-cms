import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";

interface CreateProductButtonProps{
  onPress: Function;
}

const CreateProductButton: React.FC<CreateProductButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <MaterialCommunityIcons name="plus-circle" color="#fff" size={40} />
      </Container>
    </TouchableOpacity>
  );
};

export default CreateProductButton;
