import axios from "axios";

const BaseLocalURL = "http://localhost:9874";
export const client = axios.create({
  baseURL: BaseLocalURL,
});
