import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  flex-direction: row;
  border-width: 1px;
  border-color: #232129;
`;

export const DetailsContainer = styled.View`
  padding: 10px 20px;
`;

export const ImageContainer = styled.Image`
  width: 40%;
  height: 100px;
  border-right-width: 1px;
`;

export const TitleContainer = styled.Text`
  margin-bottom: 7px;
`;

export const SubTitleContainer = styled.Text`
  color: #111;
  font-weight: bold;
`;
