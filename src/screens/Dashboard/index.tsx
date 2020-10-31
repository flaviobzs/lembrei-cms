import React from "react";
// import { useNavigation } from "@react-navigation/native";

import {
  List,
  CategoryListContainer,
  CategoryList,
  CategoryContainer,
  CategoryAvatar,
  CategoryName,
} from "./styles";

import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";

const listings = [
  {
    id: 1,
    title: "Red sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch condition",
    price: 1000,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Couch condition",
    price: 1000,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Couch condition",
    price: 1000,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 5,
    title: "Couch condition",
    price: 1000,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 6,
    title: "Couch condition",
    price: 1000,
    image: require("../../assets/jacket.jpg"),
  },
];

const categories = [
  {
    id: 1,
    name: "todos",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    name: "feminino",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 3,
    name: "masculino",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 4,
    name: "infantil",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
];

const Dashboard: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <Wrapper>
      <CategoryListContainer>
        <CategoryList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(category) => String(category.id)}
          renderItem={({ item: category }) => (
            <CategoryContainer
              selected={false}
              onPress={() => {}}
              // selected={category.id === selectedcategory}
            >
              {/* <CategoryAvatar source={{ uri: provider.avatar_url }} /> */}
              {/* <CategoryName selected={category.id === selectedcategory}> */}
              <CategoryName selected={false}>{category.name}</CategoryName>
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
            subTitle={item.price}
            image={item.image}
            onPress={() => {}}
          />
        )}
      />
    </Wrapper>
  );
};

export default Dashboard;
