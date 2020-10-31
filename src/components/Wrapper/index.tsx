import React from "react";
import { StatusBar } from "react-native";

import { Container, Content } from "./styles";

// import backgroud from '../../assets/background.jpg'

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <StatusBar backgroundColor="#f6f7fc" barStyle="dark-content" />
      <Container>
        <Content source={require("../../assets/back.jpg")}>{children}</Content>
      </Container>
    </>
  );
};

export default Wrapper;
