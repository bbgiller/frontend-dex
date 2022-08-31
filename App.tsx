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
    : "/sugars/";

  const useProdUrl =
    process.env.NODE_ENV === "production" ||
    process.env.MIMIC_LOCALHOST_PROD === "true";

  const baseURL = useProdUrl
    ? "https://scatter-server.herokuapp.com"
    : localhostURL;

  // function getCurrentGlucose() {
  //   fetch("http://localhost:9874/sugars/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }

  // function getNewGlucose() {
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:9874/sugars/",
  //   })
  //     .then((response) => {
  //       const res = response.data;
  //       setGlucoseData({
  //         username: res.username,
  //         currentGlucose: res.current_glucose,
  //       });
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     });
  // }

  // useEffect(() => {
  //   getNewGlucose();
  // }, []);

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
