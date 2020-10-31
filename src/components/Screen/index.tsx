import React from "react";
import Constants from "expo-constants";

import { Container, Wrapper } from "./styles";

const Screen: React.FC = ({ children }) => {
  // const heightView = Constants.statusBarHeight;

  return (
    // <Container heightStatusBar={heightView}>
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Screen;
