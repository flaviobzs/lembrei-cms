import styled from "styled-components/native";

interface TextProps {
  typografia: number;
}

export const Container = styled.Text<TextProps>`
  font-size: 25;
  color: black;
  margin: 30px 0px 40px;
  /* font-family: Platform.OS === "android" ? "Roboto" : "Avenir"; */
`;
