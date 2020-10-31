import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  padding-top: ${statusBarHeight + "px"};
  flex: 1;
  background-color: #f6f7fc;
`;

export const Wrapper = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0px 20px 40px 20px;
`;
