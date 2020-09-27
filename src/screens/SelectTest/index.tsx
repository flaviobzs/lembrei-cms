import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

// import { Container } from './styles';

import Select from "../../components/Select";
import SelectItem from "../../components/SelectItem";

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

const SelectTest: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Select
          items={categories}
          // name="category"
          numberOfColumns={1}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          // onSelectItem=""
          // width="50%"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectTest;
