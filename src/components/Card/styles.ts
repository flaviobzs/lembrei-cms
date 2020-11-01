import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 15px;
  /* border-bottom-left-radius: 15px;
  border-top-left-radius:15px; */
  background-color: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  flex-direction: row;
  border-width: 1px;
  border-color: #232129;  
  padding: 5px 15px 5px 5px;
  justify-content: space-between;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.Image`
  width: 100px;
  height: 80px;
  border-radius: 15px;
  margin: 6px;
`;

export const DetailsContainer = styled.View`
  padding: 10px 20px;
  width: 60%;
`;

export const TitleContainer = styled.Text`
  margin-bottom: 7px;
`;

export const PriceContainer = styled.Text`
  color: #111;
  font-weight: bold;
`;

export const SubTitleContainer = styled.Text`
  color: #111;
  font-size: 10px;
`;
