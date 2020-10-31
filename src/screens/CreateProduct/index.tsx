import React, { useEffect, useCallback, useState } from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "../../components/Wrapper";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Logo from "../../components/Logo";
import Select from "../../components/Select";
import InputImage from "../../components/InputImage";
import InputListImage from "../../components/InputListImage";

import { Content } from './styles';

interface IFormInputs {
  email: string;
  price: string;
  category: string;
  description: string;
}

const categories = [
  {
    color: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    color: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    color: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
];

const CreateProduct: React.FC = () => {
  const [category, setCategory] = useState();

  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("name");
    register("price");
    register("category");
    register("description");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
  }, []);

  const [imagesUris, setImagesUris] = useState<any>([]);  

  const handleAdd = (uri: any) => {
    setImagesUris([...imagesUris, uri]);
  };

  const handleRemove = (uri: any) => {
    setImagesUris(imagesUris.filter((image) => image !== uri));
  };


  return (
    <Wrapper>

      <Content>

      <InputListImage
        imageUris={imagesUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></InputListImage>

      <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{
          required: { value: true, message: "O nome não pode ser vazio" },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite o nome"
            onChangeText={(value: any) => {
              onChange(value);
              setValue(name, value);
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
        name="price"
        defaultValue=""
        rules={{
          required: { value: true, message: "O preço não pode ser vazio" },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite o preço"
            onChangeText={(value: any) => {
              onChange(value);
              setValue(name, value);
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
        name="category"
        defaultValue=" "
        rules={{
          required: {
            value: true,
            message: "A categoria não pode ser vazia ",
          },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <Select
            items={categories}
            icon="material-ui"
            // onChangeText={(value: string) => {
            //   onChange(value);
            //   // setValue("password", value);
            // }}
            onSelectItem={(item) => {
              onChange(item);
              // console.log(item);
            }}
            selectedItem={value}
            // name={name}
            numberOfColumns={1}
            // PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        defaultValue=""
        rules={{
          required: { value: true, message: "A descrição não pode ser vazio" },
        }}
        render={({ onChange, value, onBlur, name }) => (
          <InputField
            placeholder="Digite a descrição"
            onChangeText={(value: any) => {
              onChange(value);
              setValue(name, value);
            }}
            value={value}
            onBlur={onBlur}
            name={name}
            error={errors?.email}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Cadastrar </Button>
      </Content>
    </Wrapper>
  );
};

export default CreateProduct;
