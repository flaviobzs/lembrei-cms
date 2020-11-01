import React from "react";
import { createStackNavigator,  } from "@react-navigation/stack";

import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import EditPasswordProfile from "../screens/EditPasswordProfile";

const ProfileNav = createStackNavigator();

const ProfileRoutes: React.FC = () => (
  <ProfileNav.Navigator
    screenOptions={{
      headerTransparent: true,      
    }}
  >
    <ProfileNav.Screen
      name="Profile"
      component={Profile}
      options={{ title: "" }}  
    />
    <ProfileNav.Screen
      name="EditPasswordProfile"
      component={EditPasswordProfile}
      options={{ title: "" }}
    />   
    <ProfileNav.Screen
      name="EditProfile"
      component={EditProfile}
      options={{ title: "" }}
    />
  </ProfileNav.Navigator>
);

export default ProfileRoutes;
