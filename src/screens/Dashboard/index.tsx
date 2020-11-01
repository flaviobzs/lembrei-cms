import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Modal, TouchableOpacity } from "react-native";

import {
  List,
  CategoryListContainer,
  CategoryList,
  CategoryContainer,
  CategoryName,
  ModalContainer, 
  ButtonsContainer,
  Close,
  Image,
} from "./styles";

import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import CardActions from "../../components/CardActions";

import listings from '../../service/products'
import categories from '../../service/tags'

const Dashboard: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <>
    <Wrapper>
      <CategoryListContainer>
        <CategoryList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(category) => String(category.id)}
          renderItem={({ item: category }) => (
            <CategoryContainer
              selected={category.id === filterCategory ? true : false}
              onPress={() => {setFilterCategory(category.id)}}
            >
              <CategoryName selected={category.id === filterCategory ? true : false }>{category.name}</CategoryName>
            </CategoryContainer>
          )}
        />
      </CategoryListContainer>

      <List
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            subTitle={item.description}
            image={item.image}
            onPressImage={() => {
                setModalVisible(true);
                console.log(modalVisible);
            }}
            onPress={() => { 
              navigation.navigate("EditProduct");
            }}
            renderRightActions={() => <CardActions/>}
          />
        )}
      />
    </Wrapper>
    <Modal visible={modalVisible} animationType="slide">
      <ModalContainer>
        <ButtonsContainer>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              console.log(modalVisible);
            }}
          >
            <Close>
              <MaterialCommunityIcons name="close" color="white" size={35} />
            </Close>
          </TouchableOpacity>            
        </ButtonsContainer>
        <Image
          resizeMode="contain"
          source={require("../../assets/boneco.png")}
        />
      </ModalContainer>
    </Modal>
  </>
  );
};

export default Dashboard;
