import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { isDevice } from "expo-device";
import CurrentGlucose from "./CurrentGlucose";

export default function App() {
  interface GlucoseDataType {
    username: string;
    currentGlucose: number;
  }

  const [glucoseData, setGlucoseData] = useState<GlucoseDataType>({
    username: "",
    currentGlucose: 0,
  });
  const [username, setUsername] = useState("");

  const localhostURL = isDevice
    ? `http://${Constants.manifest?.debuggerHost?.split(":").shift()}:9874`
    : "http://localhost:9874/";

  const useProdUrl =
    process.env.NODE_ENV === "production" ||
    process.env.MIMIC_LOCALHOST_PROD === "true";

  const baseURL = useProdUrl
    ? "https://scatter-server.herokuapp.com"
    : localhostURL;

  return (
    <View style={styles.container}>
      <Text>Current Glucose is:</Text>
      <CurrentGlucose />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
