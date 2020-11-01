import React, { useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";

import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Select from "../../components/Select";
import InputImage from "../../components/InputImage";

import { Content } from './styles';

interface IFormInputs {
  email: string;
  price: string;
  category: string;
  description: string;
}

const categories = [
  {
    id: 1,
    icon: "human-male",
    label: "Masculino",
  },
  {
    id: 2, 
    icon: "human-female",
    label: "Feminino",
  },
  {
    id: 3,
    icon: "human-child",
    label: "Infantil",
  },
];

const EditProduct: React.FC = () => {
  // const [category, setCategory] = useState();

  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("image");
    register("name");
    register("price");
    register("category");
    register("description");
  }, [register]);

  const onSubmit = useCallback(async (data: IFormInputs) => {
    console.log(data);
  }, []);

  return (
    <Wrapper>

      <Content>
      <Controller
        control={control}
        name="image"
        defaultValue={null}
        rules={{}}
        render={({ onChange, value, onBlur, name }) => (
          <InputImage            
            imageUri={value}
            onChangeImage={(value) => onChange(value)}
          ></InputImage>
      )}
      />

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
            // icon="material-ui"
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

      <Button onPress={handleSubmit(onSubmit)}>Editar</Button>
      </Content>
    </Wrapper>
  );
};

export default EditProduct;
