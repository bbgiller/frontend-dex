import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabNavigator from "./pages/Tabs/TabNavigator";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
