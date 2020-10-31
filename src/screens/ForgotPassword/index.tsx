import React, { useEffect, useCallback } from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import { Title, Content } from "./styles";

interface IFormInputs {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("password");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
  }, []);

  return (
    <Wrapper>
      <Logo />
      <Content>
      <View>
        <Title>Redefinir senha</Title>
      </View>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "O email não pode ser vazio",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "O email é inválido",
          },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite seu e-mail"
            onChangeText={(value: string) => {
              onChange(value);
              // setValue("email", value);
            }}
            value={value}
            onBlur={onBlur}
            name={name}
            error={errors?.email}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Redefinir</Button>
      </Content>
    </Wrapper>
  );
};

export default ForgotPassword;
