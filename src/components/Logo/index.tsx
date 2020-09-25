import React from "react";

import { Container, LogoImage } from "./styles";

const Logo: React.FC = () => {
  return (
    <Container>
      <LogoImage source={require("../../assets/logo2.png")}></LogoImage>
    </Container>
  );
};

export default Logo;
