import React, { useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Text from "../../components/Text";

import {Content} from "./styles";

interface IFormInputs {
  oldPassword: string;
  newPassword: string;
}

const EditPasswordProfile: React.FC = () => {
  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("oldPassword");
    register("newPassword");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
    console.log(errors);
  }, []);

  return (  
    <Wrapper>
      <Content>
        <Text>Mudar Senha</Text>
        <Controller
          control={control}
          name="oldPassword"
          defaultValue=""
          rules={{
            required: { value: true, message: "A senha antiga não pode ser vazia" },
          }}
          render={({ onChange, value, onBlur, name }) => (
            <InputField
              placeholder="Digite sua senha antiga"
              onChangeText={(value: any) => {
                onChange(value);
                setValue("oldPassword", value);
              }}
              value={value}
              onBlur={onBlur}
              name={name}
              error={errors?.oldPassword}
            />
          )}
        />

        <Controller
          control={control}
          name="newPassword"
          defaultValue=""
          rules={{
            required: { value: true, message: "O nova senha não pode ser vazia" },          
          }}
          render={({ onChange, value, onBlur, name }) => (
            <InputField
              placeholder="Digite sua nova senha"
              onChangeText={(value: any) => {
                onChange(value);
                setValue("newPassword", value);
              }}
              value={value}
              onBlur={onBlur}
              name={name}
              error={errors?.newPassword}
            />
          )}
        /> 
        <Button onPress={handleSubmit(onSubmit)}>Alterar</Button>
      </Content>
    </Wrapper>   
  );
};

export default EditPasswordProfile;
