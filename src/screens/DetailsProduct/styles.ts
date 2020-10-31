import styled from "styled-components/native";

export const ProductDetailsContainer = styled.View`
  padding: 20px;
`;

export const ProductImageContainer = styled.TouchableOpacity`
  width: 100%;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 16px;
`;

export const ProductTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
`;
export const ProductPrice = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px;
`;

export const ModalContainer = styled.View`
  background-color: black;
  flex: 1;
`;

export const Close = styled.View`
  /* position: absolute;
  top: 40px;
  right: 30px; */
  margin: 20px;
`;

export const CloseContainer = styled.TouchableOpacity``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  /* flex: 1; */
  align-items: center;
  /* height: 80px; */
  justify-content: flex-end;
`;

export const Delete = styled.View`
  /* position: absolute;
  top: 40px;
  left: 30px; */
  margin: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
