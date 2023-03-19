import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CurrentGlucose from "../CurrentGlucose";
import ChartsTab from "../ChartsTab";
import { tabNavigatorStyles as styles } from "../../styles/TabNavigatorStyles";
import CreateInsulinForm from "../../components/Insulin/CreateInsulinForm";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Glucose"
        component={CurrentGlucose}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-egg"
              size={size}
              style={{ opacity: 0.9 }}
              color={focused ? "green" : "black"}
            />
          ),
          headerStyle: styles.header,
        }}
      />
      <Tab.Screen
        name="Charts"
        component={ChartsTab}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-stats-chart"
              size={size}
              style={{ opacity: 0.9 }}
              color={focused ? "green" : "black"}
            />
          ),
          headerStyle: styles.header,
        }}
      />
      <Tab.Screen
        name="Insulin"
        component={CreateInsulinForm}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-flask-outline"
              size={size}
              style={{ opacity: 0.9 }}
              color={focused ? "green" : "black"}
            />
          ),
          headerStyle: styles.header,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
