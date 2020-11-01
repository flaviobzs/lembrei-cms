import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";

import {Container, Content, User, Welcome, Email} from "./styles";

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (  
    <Wrapper>
      <Container>
        <User>
          <Welcome>Bem vindo, José</Welcome>
          <Email>jose@teste.com</Email>
        </User>
        <Content>      
        <Button
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            Editar Dados
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("EditPasswordProfile");
            }}
          >
            Mudar Senha
          </Button>      
        </Content>
      </Container>
    </Wrapper>   
  );
};

export default Profile;

