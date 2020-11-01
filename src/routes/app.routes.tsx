import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CreateProductButton from "../components/CreateProductButton";

import CreateProduct from "../screens/CreateProduct";
import ProfileRoutes from './profile.routes'
import ProductRoutes from './product.routes'

// const { Navigator, Screen } = createBottomTabNavigator();
const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const [ color, setColor] = useState("#28262E")

  return(
    <App.Navigator 
      tabBarOptions={{
        activeTintColor: "#483D8B",
        inactiveTintColor: "#28262E",
        showLabel: false,             
      }}>
      <App.Screen 
        name="Dashboard" 
        component={ProductRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <App.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={({navigation }) => ({
          tabBarButton: () => (
            <CreateProductButton
              color={color}
              onPress={() => navigation.navigate("CreateProduct")}
            />
          ),
        
        })}
      />
      <App.Screen 
        name="Profile" 
        component={ProfileRoutes} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
    </App.Navigator>
  )
};

export default AppRoutes;
