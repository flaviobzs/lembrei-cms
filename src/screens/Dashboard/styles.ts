import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { FlatList } from "react-native";

interface Category {
  id: string;
  name: string;
}

interface CategoryContainerProps {
  selected: boolean;
}

interface CategoryNameProps {
  selected: boolean;
}

export const List = styled.FlatList`
  width: 100%;
`;

export const CategoryListContainer = styled.View`
  height: 112px;
  width: 100%;
`;

export const CategoryList = styled(FlatList as new () => FlatList<Category>)`
  padding: 32px 24px;
`;

export const CategoryContainer = styled(RectButton)<CategoryContainerProps>`
  background: ${(props) => (props.selected ? "#483D8B" : "#111111")};
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const CategoryAvatar = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const CategoryName = styled.Text<CategoryNameProps>`
  margin-left: 8px;
  font-size: 18px;
  color: ${(props) => (props.selected ? "#ffffff" : "#ffffff")};
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
