import React from "react";
import Constants from "expo-constants";

import { Container, Wrapper } from "./styles";

// import backgroud from '../../assets/background.jpg'

const Login: React.FC = ({ children }) => {
  const heightView = Constants.statusBarHeight;

  return (
    <Container heightStatusBar={heightView}>
      <Wrapper source={require("../../assets/back.jpg")}>{children}</Wrapper>
    </Container>
  );
};

export default Login;
