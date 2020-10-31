import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding-top: 1px;
  flex: 1;
`;

export const Content = styled.View`
  /* flex: 1; */
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 80px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #111111;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #111111;
  font-size: 16px;
  /* font-family: "RobotoSlab-Regular"; */
`;
