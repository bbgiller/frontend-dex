import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CurrentGlucose from "../CurrentGlucose";
import ChartsTab from "../ChartsTab";
import { tabNavigatorStyles as styles } from "../../styles/TabNavigatorStyles";
import CreateInsulinForm from "../../components/Insulin/CreateInsulinForm";
import useCurrentGlucose from "../../components/CurrentGlucose/useCurrentGlucose";
import { Text, View } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { data, loaded, error } = useCurrentGlucose();
  const CurrentGlucoseScreen = () => (
    <CurrentGlucose data={data} loaded={loaded} error={error} />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Glucose"
        component={CurrentGlucoseScreen}
        initialParams={{ data, loaded, error }}
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
          headerTitle:
            data?.glucose_value && data.trend_arrow
              ? data?.glucose_value.toString() + data?.trend_arrow
              : "",
          headerTitleStyle: { fontSize: 30 },
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
