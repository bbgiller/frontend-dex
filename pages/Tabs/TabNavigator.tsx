import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CurrentGlucose from "../CurrentGlucose";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CurrentGlucose" component={CurrentGlucose} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
