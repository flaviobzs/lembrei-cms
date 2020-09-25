import styled from "styled-components/native";
import Text from "../Text";

export const Container = styled.View`
  flex-direction: row;
`;
export const ImageList = styled.Image`
  width: 70;
  height: 70;
  border-radius: 35;
  margin-right: 10;
`;

export const ContentSubTitle = styled(Text)`
  /* color: colors.secondary; */
  color: #111;
`;

export const ContentTitle = styled(Text)`
  font-weight: 500;
`;
