import React from "react";

import { Container, TextItem } from "./styles";

interface SelectItemProps {}

const SelectItem: React.FC = ({ item, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TextItem>{item.label}</TextItem>
    </Container>
  );
};

export default SelectItem;
