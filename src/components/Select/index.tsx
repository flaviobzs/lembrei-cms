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
  // onSelectItem: string;
}

import {} from "./styles";

const Select: React.FC<SelectProps> = ({
  items,
  icon,
  numberOfColumns = 1,
  // onSelectItem,
  placeholder,
  selectedItem,
  // PickerItemComponent = PickerItem,
  // width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <SelectContainer>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              // color={defaultStyles.colors.medium}
              // style={styles.icon}
            />
          )}
          {selectedItem ? (
            <OptionText>{selectedItem.label}</OptionText>
          ) : (
            <PlaceholderText>{placeholder}</PlaceholderText>
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
              <View style={styles.container}>
                <Text> {item.label}</Text>
              </View>
              // <PickerItemComponent
              //   item={item}
              //   label={item.label}
              //   onPress={() => {
              //     setModalVisible(false);
              //     onSelectItem(item);
              //   }}
              // />
            )}
          />
        </ModalContainer>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: "20",
    // paddingVertical: "10",
    marginVertical: "10",
    height: "60",
    // backgroundColor: "red",
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