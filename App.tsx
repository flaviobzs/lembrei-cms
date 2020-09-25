import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";

import Routes from "./src/routes";

import defaultTheme from "./src/styles/theme/default";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar style="auto" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
