import { Dimensions, StyleSheet, Text, View } from "react-native";
import CurrentGlucose from "./pages/CurrentGlucose";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlucoseReadingsList from "./components/GlucoseReadingsList/GlucoseReadingsList";
import GlucoseReadingsChart from "./components/GlucoseReadingsChart/GlucoseReadingsChart";
import ChartsTab from "./pages/ChartsTab";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Glucose"
          component={CurrentGlucose}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="ios-egg"
                size={size}
                style={{ opacity: 0.9 }}
                color={"black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Glucose Readings"
          component={ChartsTab}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="ios-stats-chart"
                size={size}
                style={{ opacity: 0.9 }}
                color={"black"}
              />
            ),
            headerStyle: { backgroundColor: "#f2f3f3" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});
