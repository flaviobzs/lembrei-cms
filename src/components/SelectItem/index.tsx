import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, TextItem } from "./styles";

interface SelectItemProps {
  item: any;
  onPress: any;
}

const SelectItem: React.FC<SelectItemProps> = ({ item, onPress }) => {
  return (
    <Container onPress={onPress}>
      <MaterialCommunityIcons name={item.icon} size={27} color="black" />
      <TextItem>{item.label}</TextItem>
    </Container>
  );
};

export default SelectItem;
