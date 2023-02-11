import { client } from "./NetworkConstants";
import { CurrentGlucoseData } from "./GlucoseDataType";
const GetCurrentGlucose = async () => {
  const url = "/current_glucose";
  const response = await client.get<CurrentGlucoseData>(url);
  // console.log(response || "no response");
  return response;
};
export default GetCurrentGlucose;
