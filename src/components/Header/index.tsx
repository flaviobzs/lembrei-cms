import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { Container, BackButton } from './styles';

interface HeaderProps{
  navigationLocal: any;
} 

const Header: React.FC<HeaderProps> = ({navigationLocal}) => {
  return <Container>
 <BackButton onPress={navigationLocal}>
          <MaterialCommunityIcons name="chevron-left" size={24} color="#111111" />
        </BackButton>

        {/* <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} /> */}

  </Container>;
}

export default Header;