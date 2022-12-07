import { client } from "./NetworkConstants";
import { RangeReadingData } from "./RangeReadingsTypes";
const GetRangeReadings = async () => {
  const url = "/readings_ranges";
  const response = await client.get<RangeReadingData[]>(url);
  console.log(response || "no response");
  return response;
};
export default GetRangeReadings;
