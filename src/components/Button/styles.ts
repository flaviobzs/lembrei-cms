import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.blackMedium};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  margin: 8px 0px;
  height: 55px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;
