import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  padding-top: ${statusBarHeight + "px"};
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  background-color: blueviolet;
`;
