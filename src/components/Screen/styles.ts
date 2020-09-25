import styled from "styled-components/native";

interface ScreenProps {
  heightStatusBar: Number;
}

export const Container = styled.SafeAreaView<ScreenProps>`
  padding-top: heightStatusBar;
  flex: 1;
  width: 100%;

  /* background-color: blueviolet; */
`;

export const Wrapper = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
`;
