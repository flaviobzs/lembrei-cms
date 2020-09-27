import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CreateProductButton from "../components/CreateProductButton";

import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import CreateProduct from "../screens/CreateProduct";
import DetailsProduct from "../screens/DetailsProduct";
import ImageProduct from "../screens/ImageProduct";
import SelectTest from "../screens/SelectTest";

// const App = createStackNavigator();
const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="SelectTest" component={SelectTest} />
    <App.Screen name="ImageProduct" component={ImageProduct} />
    <App.Screen name="DetailsProduct" component={DetailsProduct} />
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen
      name="CreateProduct"
      component={CreateProduct}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <CreateProductButton
            onPress={() => navigation.navigate("CreateProduct")}
          />
        ),
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="plus-circle"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
