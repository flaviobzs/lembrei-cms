import React from "react";
import { StatusBar } from "react-native";

import { Container, Wrapper } from "./styles";

// import backgroud from '../../assets/background.jpg'

const AuthWrapper: React.FC = ({ children }) => {
  return (
    <>
      <StatusBar backgroundColor="#f6f7fc" barStyle="dark-content" />
      <Container>
        <Wrapper source={require("../../assets/back.jpg")}>{children}</Wrapper>
      </Container>
    </>
  );
};

export default AuthWrapper;
