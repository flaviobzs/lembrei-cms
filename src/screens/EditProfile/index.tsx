import React, { useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Text from "../../components/Text";

import {Content} from "./styles";

interface IFormInputs {
  email: string;
  password: string;
}

const data = {
  name: 'jose',
  email: 'jose@test.com',
}

const Profile: React.FC = () => {
  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("email");
    register("name");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
    console.log(errors);
  }, []);

  return (  
    <Wrapper>
      <Content>
      <Text>Editar Perfil</Text>
      <Controller
        control={control}
        name="name"
        defaultValue={data.name}
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
            error={errors?.name}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        defaultValue={data.email}
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
      <Button onPress={handleSubmit(onSubmit)}>Editar </Button>
      </Content>
    </Wrapper>   
  );
};

export default Profile;

