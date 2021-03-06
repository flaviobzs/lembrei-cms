import React, { useEffect, useCallback } from "react";
import {View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Logo from "../../components/Logo";

import {Content} from "./styles";

interface IFormInputs {
  email: string;
  name: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("email");
    register("name");
    register("password");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
  }, []);

  return (
    <KeyboardAvoidingView 
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    enabled
    >
      <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
    <Wrapper>
     
      <Logo/>
      <Content>
      <Text>Cadastro</Text>
      <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{
          required: { value: true, message: "O nome não pode ser vazio" },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite seu nome"
            onChangeText={(value: any) => {
              onChange(value);
              setValue("name", value);
            }}
            value={value}
            icon="account"
            onBlur={onBlur}
            name={name}
            error={errors?.email}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{
          required: { value: true, message: "O email não pode ser vazio" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "O email é inválido",
          },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite seu e-mail"
            onChangeText={(value: any) => {
              onChange(value);
              setValue("email", value);
            }}
            value={value}
            icon="email"
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
          required: { value: true, message: "A senha não pode ser vazia" },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite sua senha"
            icon=""
            onChangeText={(value: any) => {
              onChange(value);
              setValue("password", value);
            }}
            value={value}
            icon="key"
            onBlur={onBlur}
            name={name}
            error={errors?.email}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Cadastrar </Button>
      </Content>
    </Wrapper>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
