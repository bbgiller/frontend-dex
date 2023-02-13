import { Dimensions, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { isDevice } from "expo-device";
import CurrentGlucose from "./pages/CurrentGlucose";

export default function App() {
  interface GlucoseDataType {
    username: string;
    currentGlucose: number;
  }

  const localhostURL = isDevice
    ? `http://${Constants.manifest?.debuggerHost?.split(":").shift()}:5000`
    : "http://localhost:5000/";

  const useProdUrl =
    process.env.NODE_ENV === "production" ||
    process.env.MIMIC_LOCALHOST_PROD === "true";

  const baseURL = useProdUrl
    ? "https://scatter-server.herokuapp.com"
    : localhostURL;

  return (
    <View
    // Background Linear Gradient
    // colors={["#4c669f", "white", "transparent"]}
    // style={styles.container}
    >
      <CurrentGlucose />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});
