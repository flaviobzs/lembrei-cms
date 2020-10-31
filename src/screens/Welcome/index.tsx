import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonsContainer } from "./styles";

import Wrapper from "../../components/Wrapper";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Logo />
      <ButtonsContainer>
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
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Welcome;
