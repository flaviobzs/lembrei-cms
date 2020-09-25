import React from "react";
// import { useNavigation } from "@react-navigation/native";

import { List } from "./styles";

import Screen from "../../components/Screen";
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
];

const Dashboard: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <Screen>
      <List
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={String(item.price)}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default Dashboard;
