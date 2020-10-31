import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";

// import { Container } from './styles';

import Select from "../../components/Select";
import SelectItem from "../../components/SelectItem";
import Button from "../../components/Button";

import Screen from "../../components/Screen";
import InputImage from "../../components/InputImage";
import InputListImage from "../../components/InputListImage";

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

import backgroud from "../../assets/background.jpg";

const SelectTest: React.FC = () => {
  const { control, register, setValue, handleSubmit, errors } = useForm({});

  useEffect(() => {
    register("category");
  }, [register]);

  const [category, setCategory] = useState();

  // const [image, setimage] = useState("../../assets/background.jpg");
  const [imagesUris, setImagesUris] = useState<any>([" "]);

  const onSubmit = useCallback(async (data: any) => {}, []);

  const handleAdd = (uri: any) => {
    setImagesUris([...imagesUris, uri]);
  };

  const handleRemove = (uri: any) => {
    setImagesUris(imagesUris.filter((image) => image !== uri));
  };

  return (
    <Screen>
      {/* <SafeAreaView> */}
      {/* <Select
          items={categories}
          icon="material-ui"
          onSelectItem={(item) => setCategory(item)}
          selectedItem={category}
          // name="category"
          numberOfColumns={1}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        /> */}

      {/* <InputImage
        imageUri={image}
        onChangeImage={(uri) => setimage(uri)}
      ></InputImage> */}

      <InputListImage
        imageUris={imagesUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></InputListImage>

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
              console.log(item);
            }}
            selectedItem={value}
            // name={name}
            numberOfColumns={1}
            // PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
          />

          // <InputField
          //   placeholder="Digite sua senha"
          //   onChangeText={(value: string) => {
          //     onChange(value);
          //     // setValue("password", value);
          //   }}
          //   value={value}
          //   onBlur={onBlur}
          //   name={name}
          //   error={errors?.password}
          // />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Entrar </Button>
      {/* </SafeAreaView> */}
    </Screen>
  );
};

export default SelectTest;
