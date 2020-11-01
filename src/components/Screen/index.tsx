import React from "react";

import { Container, Wrapper } from "./styles";

const Screen: React.FC = ({ children }) => {

  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Screen;
