import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import Text from "../../components/Text";

import {Content, User} from "./styles";

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (  
    <Wrapper>
      <User>
        <Text>Bem vindo, José</Text>
        <Text>jose@teste.com</Text>
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
    </Wrapper>   
  );
};

export default Profile;

