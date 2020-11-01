import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {TouchableOpacity} from "react-native-gesture-handler";
import { Alert} from "react-native";

import { Container } from './styles';

const CardDeleteAction: React.FC = () => {

  const handlePress = () => {
    Alert.alert("", "tem certeza que quer apagar o produto?", [
      { text: "Sim", onPress: () => (console.log("apagou")) },
      { text: "Não" },
    ]);
  };

  return (
    <Container>
      <TouchableOpacity onPress={handlePress}>
        <MaterialCommunityIcons
          name="delete"
          size={27}
          color="white"
        />
      </TouchableOpacity>
    </Container>
  )
}

export default CardDeleteAction;
