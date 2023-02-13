import { client } from "../../constants/NetworkConstants";
import { GlucoseDataType } from "../../types/GlucoseDataType";
const GetCurrentGlucose = async () => {
  const url = "/current_glucose";
  const response = await client.get<GlucoseDataType>(url);
  return response;
};
export default GetCurrentGlucose;
