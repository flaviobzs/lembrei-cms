import React, { useState } from "react";

import { Container, TextInput, Icon } from "./styles";

interface InputProps {
  name: string;
  icon?: string;
  error?: boolean;
  label?: string;
}

const InputField: React.FC<InputProps> = ({ name, error, icon, ...rest }) => {
  // console.log(name, error, rest);

  return (
    <Container isErrored={!!error}>
      {icon && <Icon name={icon} size={20} />}
      <TextInput {...rest} />
    </Container>
  );
};

export default InputField;
