import { client } from "./NetworkConstants";

const GetCurrentGlucose = async () => {
  const url = "/current_glucose";
  const response = await client.get(url);
  return response;
};
export default GetCurrentGlucose;
