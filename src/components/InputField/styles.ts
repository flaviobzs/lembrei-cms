import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ContainerProps {
  isErrored: boolean;
}

interface IconProps {
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  border-radius: 15px;
  width: 100%;
  height: 55px;
  background-color: #fff;
  margin-bottom: 8px;
  overflow: hidden;
  padding: 0px 10px;
  border-width: 2px;
  border-color: #232129;
  padding: 8px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: black;
  font-size: 16px;
`;

export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  /* margin-right: 16px;
  color: ${({ theme }) => theme.colors.grayHard};

  ${(props) =>
    (props.isFocused || props.isFilled) &&
    css`
      color: ${props.theme.colors.orange};
    `} */
`;
