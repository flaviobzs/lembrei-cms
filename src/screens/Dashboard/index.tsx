import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";

import {
  List,
  CategoryListContainer,
  CategoryList,
  CategoryContainer,
  CategoryName,
} from "./styles";

import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import CardActions from "../../components/CardActions";

import listings from '../../service/products'
import categories from '../../service/categories'

const Dashboard: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState(1);

  const navigation = useNavigation();

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
            subTitle={item.price}
            image={item.image}
            onPress={() => { 
              navigation.navigate("EditProduct");
            }}
            renderRightActions={() => <CardActions/>}
          />
        )}
      />
    </Wrapper>
  );
};

export default Dashboard;
