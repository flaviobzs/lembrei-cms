import React, { ReactChild } from "react";

import { Container } from "./styles";

interface TextProps {
  typografia?: number;
  children: ReactChild;
}

const Text: React.FC<TextProps> = ({ children, typografia }) => {
  return <Container typografia={typografia}>{children}</Container>;
};

export default Text;
