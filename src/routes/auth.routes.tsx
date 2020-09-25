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
      headerShown: false,
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
