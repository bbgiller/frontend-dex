import React, { useEffect, useState } from "react";
import GetGlucoseReadings from "./GetGlucoseReadings";
import { Text, View } from "react-native";
import AxiosErrorHandler from "./AxiosErrorHandler";
import { GlucoseReadingsObject } from "./GlucoseReadingsType";
import GlucoseChart from "../GlucoseChart";

const GlucoseReadings = () => {
  const [readingsData, setReadingsData] = useState<GlucoseReadingsObject[]>([]);
  useEffect(() => {
    GetGlucoseReadings()
      .then((response) => {
        const res = response.data;
        const { glucose_list } = res;
        // console.log(4);
        setReadingsData(glucose_list);
      })
      .catch((err) => AxiosErrorHandler(err));
  }, []);
  return (
    <View>
      <GlucoseChart data={readingsData} />
    </View>
  );
};

export default GlucoseReadings;
