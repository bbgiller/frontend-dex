import { client } from "./NetworkConstants";
import { CurrentGlucoseData } from "./CurrentGlucoseType";
const GetCurrentGlucose = async () => {
  const url = "/current_glucose";
  const response = await client.get<CurrentGlucoseData>(url);
  return response;
};
export default GetCurrentGlucose;
