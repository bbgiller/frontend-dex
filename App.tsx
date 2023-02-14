import { Dimensions, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { isDevice } from "expo-device";
import CurrentGlucose from "./pages/CurrentGlucose";
import Navigation from "./pages/Tabs/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current Glucose" component={CurrentGlucose} />
      </Tab.Navigator>
    </NavigationContainer>
    // </View>
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
