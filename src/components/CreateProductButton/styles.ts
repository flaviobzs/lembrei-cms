import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blackMedium};
  border-color: white;
  border-radius: 40px;
  border-width: 10px;
  bottom: 30px;
  height: 80px;
  width: 80px;
  justify-content: center;
`;
