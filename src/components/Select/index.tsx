import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Text,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import SelectItem from "../SelectItem";

import {
  SelectContainer,
  OptionText,
  PlaceholderText,
  ModalContainer,
  CloseModalContainer,
  TextCloseModal,
} from "./styles";

interface ItenProps {
  color: string;
  icon: string;
  label: string;
  value: number;
}

interface SelectProps {
  items: ItenProps[];
  icon: string;
  numberOfColumns?: number;
  placeholder: string;
  selectedItem?: ItenProps;
  onSelectItem?: any;
}

import {} from "./styles";

const Select: React.FC<SelectProps> = ({
  items,
  icon,
  numberOfColumns = 1,
  placeholder,
  selectedItem,
  onSelectItem,
  // PickerItemComponent = PickerItem,
  // width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.tela}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <SelectContainer>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              // color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <OptionText style={styles.textt}>{selectedItem.label}</OptionText>
          ) : (
            <PlaceholderText style={styles.textt}>
              {placeholder}
            </PlaceholderText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            // color={defaultStyles.colors.medium}
          />
        </SelectContainer>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType="slide"
        // transparent={true}
        // style={styles.container}
      >
        <ModalContainer>

          
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <CloseModalContainer>
              <TextCloseModal>Fechar</TextCloseModal>
            </CloseModalContainer>
          </TouchableWithoutFeedback>

          <FlatList
            style={styles.list}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              // <View style={styles.container}>
              //   <Text style={styles.tex}> {item.label}</Text>
              // </View>

              <SelectItem
                item={item}
                // label={item.label}
                onPress={() => {
                  // () => console.log(item);
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </ModalContainer>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  textt: {
    flex: 1,
  },
  tela: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    // flex: 1,
    padding: 20,
    // paddingVertical: "10",
    // marginVertical: "10",
    // height: "60",
    backgroundColor: "green",
  },
  tex: {
    // flex: 1,
    // padding: "20",
    // paddingVertical: "10",
    // marginVertical: "10",
    // height: "60",
    color: "white",
    fontSize: 40,
  },
  text: {
    // flex: 1,
    backgroundColor: "red",
    height: "60",
    marginHorizontal: "60",
  },
  list: {
    // flex: 1,
    backgroundColor: "blue",
    // height: "60",
    // marginHorizontal: "60",
  },
});

export default Select;
