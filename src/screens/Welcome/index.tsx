import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

import Button from "../../components/Button";
import Screen from "../../components/Screen";
import Logo from "../../components/Logo";

// import logo from "../../assets/logo2.png";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <Logo />
      <Container>
        <Button
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          Entrar
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Cadastrar
        </Button>
      </Container>
    </Screen>
  );
};

export default Welcome;
