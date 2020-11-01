import React, { ReactChild } from "react";

import { Container, Content } from "./styles";

interface TextProps {
  typografia?: number;
  children: ReactChild;
}

const Text: React.FC<TextProps> = ({ children, typografia }) => {
  return (
    <Container >
      <Content typografia={typografia}>{children}</Content>
    </Container>
  )
    
};

export default Text;
