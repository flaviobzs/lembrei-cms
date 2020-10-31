import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (

  <Auth.Navigator
    screenOptions={{
      headerTransparent: true,      
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "" }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "" }}
    />
    <Auth.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ title: "" }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
