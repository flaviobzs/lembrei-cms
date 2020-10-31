import styled from 'styled-components/native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;
  width: 100%;
  /* top: 0; */

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: "RobotoSlab-Medium";
  font-size: 20px;
  margin-left: 16px;
`;