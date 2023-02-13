import axios from "axios";
import { isDevice } from "expo-device";
import Constants from "expo-constants";
const localhostURL = isDevice
  ? `http://${Constants.manifest?.debuggerHost?.split(":").shift()}:9874`
  : "http://localhost:9874/";

const BaseLocalURL = "http://localhost:9874";
export const client = axios.create({
  baseURL: BaseLocalURL,
});
