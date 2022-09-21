import { client } from "./NetworkConstants";
import { GlucoseReadingsType } from "./GlucoseReadingsType";
const GetGlucoseReadings = async () => {
  const url = "/glucose_readings";
  const response = await client.get<GlucoseReadingsType>(url);
  console.log(response || "no response");
  return response;
};
export default GetGlucoseReadings;
