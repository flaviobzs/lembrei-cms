import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";

const CreateProductButton: React.FC = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <MaterialCommunityIcons name="plus-circle" color="#fff" size={40} />
      </Container>
    </TouchableOpacity>
  );
};

export default CreateProductButton;
