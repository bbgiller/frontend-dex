import axios from "axios";
import { isDevice } from "expo-device";
import Constants from "expo-constants";
import * as Network from "expo-network";

let BaseLocalURL = "";

async function setBaseLocalURL() {
  if (isDevice) {
    // If running on a physical device, use the device's local IP address
    const ipAlert = async () => {
      const ip = await Network.getIpAddressAsync();
      BaseLocalURL = `http://${ip}:8000`;
      console.log(BaseLocalURL);
    };
    ipAlert();
  } else {
    // If running on a simulator, use localhost
    BaseLocalURL = "http://localhost:8000";
  }
}

setBaseLocalURL();

export const client = axios.create({
  baseURL: BaseLocalURL,
});
