import React from "react";

import { Container, TextItem } from "./styles";

interface SelectItemProps {
  item: any;
  onPress: any;
}

const SelectItem: React.FC<SelectItemProps> = ({ item, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TextItem>{item.label}</TextItem>
    </Container>
  );
};

export default SelectItem;
