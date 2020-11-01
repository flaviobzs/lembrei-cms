import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CreateProductButton from "../components/CreateProductButton";

import CreateProduct from "../screens/CreateProduct";
import ProfileRoutes from './profile.routes'
import ProductRoutes from './product.routes'

// const { Navigator, Screen } = createBottomTabNavigator();
const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen 
      name="Dashboard" 
      component={ProductRoutes}
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={35} />
        ),
      }}
    />
    <App.Screen
      name="CreateProduct"
      component={CreateProduct}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <CreateProductButton
            onPress={() => navigation.navigate("CreateProduct")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <App.Screen 
      name="Profile" 
      component={ProfileRoutes} 
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={35} />
        ),
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
