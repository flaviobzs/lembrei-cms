import React from "react";
import { createStackNavigator,  } from "@react-navigation/stack";

import Dashboard from "../screens/Dashboard";
import EditProduct from "../screens/EditProduct";

const Product = createStackNavigator();

const ProductRoutes: React.FC = () => (
  <Product.Navigator
    screenOptions={{
      headerTransparent: true,      
    }}
  >
    <Product.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: "" }}  
    />
    <Product.Screen
      name="EditProduct"
      component={EditProduct}
      options={{ title: "" }}
    />  
  </Product.Navigator>
);

export default ProductRoutes;
