import React, { useEffect, useState } from "react";
import GetGlucoseReadings from "./GetGlucoseReadings";
import { Text, View } from "react-native";
import AxiosErrorHandler from "./AxiosErrorHandler";
import { GlucoseReadingsObject } from "./GlucoseReadingsType";

const GlucoseReadings = () => {
  const [readingsData, setReadingsData] = useState<[GlucoseReadingsObject]>();
  useEffect(() => {
    GetGlucoseReadings()
      .then((response) => {
        const res = response.data;
        const { glucose_list } = res;
        setReadingsData(glucose_list);
      })
      .catch((err) => AxiosErrorHandler(err));
    console.log(readingsData);
  }, []);
  return <View></View>;
};

export default GlucoseReadings;
