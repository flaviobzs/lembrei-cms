import React from "react";
import { View } from "react-native";

import { Container, ImageList, ContentTitle, ContentSubTitle } from "./styles";

const ListItem: React.FC = ({ title, subTitle, image }) => {
  return (
    <Container>
      <ImageList source={image}></ImageList>
      <View>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>{subTitle}</ContentSubTitle>
      </View>
    </Container>
  );
};

export default ListItem;
