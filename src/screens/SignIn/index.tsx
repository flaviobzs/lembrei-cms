import React, { useEffect, useCallback } from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import Screen from "../../components/Screen";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import { Title, ForgotPassword, ForgotPasswordText } from "./styles";

interface IFormInputs {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
  }, []);

  return (
    <Screen>
      <Logo />
      {/* <View>
        <Title>Login</Title>
      </View> */}
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

      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "A senha não pode ser vazia ",
          },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite sua senha"
            onChangeText={(value: string) => {
              onChange(value);
              // setValue("password", value);
            }}
            value={value}
            onBlur={onBlur}
            name={name}
            error={errors?.password}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Entrar </Button>

      <ForgotPassword
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
    </Screen>
  );
};

export default SignIn;
