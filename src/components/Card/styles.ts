import styled from "styled-components/native";

import Text from "../Text";

export const Container = styled.View`
  border-radius: 15;
  /* background-color: colors.white, */
  background-color: #fff;
  margin-bottom: 20;
  overflow: hidden;
`;

export const DetailsContainer = styled.View`
  padding: 20;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: 200;
`;
export const SubTitle = styled(Text)`
  /* color: colors.secondary; */
  color: #111;
  font-weight: bold;
`;
export const Title = styled(Text)`
  margin-bottom: 7;
`;
