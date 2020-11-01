import styled from "styled-components/native";

interface TextProps {
  typografia: number;
}

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const Content = styled.Text<TextProps>`
  font-size: 27px;
  color: black;
  font-weight: bold;
  /* margin: 30px 0px 40px; */
  /* font-family: Platform.OS === "android" ? "Roboto" : "Avenir"; */
`;
