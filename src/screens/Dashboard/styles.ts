import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { FlatList } from "react-native";

interface Category {
  id: string;
  name: string;
  // image: string;
}

interface CategoryContainerProps {
  selected: boolean;
}

interface CategoryNameProps {
  selected: boolean;
}

export const List = styled.FlatList`
  /* background-color: #111111; */
  width: 100%;
`;

export const CategoryListContainer = styled.View`
  height: 112px;
  width: 100%;
`;

/* export const CategoryList = styled.FlatList` */
export const CategoryList = styled(FlatList as new () => FlatList<Category>)`
  padding: 32px 24px;
`;

export const CategoryContainer = styled(RectButton)<CategoryContainerProps>`
  background: ${(props) => (props.selected ? "#666360" : "#111111")};
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
  /* font-family: "RobotoSlab-Medium"; */
  font-size: 18px;
  color: ${(props) => (props.selected ? "#666360" : "#ffffff")};
`;
