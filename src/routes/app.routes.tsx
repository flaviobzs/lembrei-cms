import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Dashboard from "../screens/Dashboard";

// const App = createStackNavigator();
const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      // options={{
      //   tabBarIcon: ({ color, size }) => (
      //     <MaterialCommunityIcons name="home" color={color} size={size} />
      //   ),
      // }}
    />
  </App.Navigator>
);

export default AppRoutes;
