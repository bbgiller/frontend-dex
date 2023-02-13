import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AxiosErrorHandler from "./AxiosErrorHandler";
import GetRangeReadings from "../GetRangeReadings";
import RangeReadingsChart from "./RangeReadingsChart";
import { RangeReadingData } from "./RangeReadingsTypes";
const RangeReadings = () => {
  const [rangeData, setRangeData] = useState<RangeReadingData[]>([]);

  useEffect(() => {
    GetRangeReadings()
      .then((response) => {
        const res = response.data;
        const data = res;
        console.log(4);
        setRangeData(data);
      })
      .catch((err) => AxiosErrorHandler(err));
  }, []);
  return (
    <View>
      <RangeReadingsChart rangeData={rangeData} />
    </View>
  );
};

export default RangeReadings;
