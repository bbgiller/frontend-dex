import React, { useEffect, useState } from "react";
import GetCurrentGlucose from "./GetCurrentGlucose";
import { Text, View } from "react-native";
// type Props = {}

const CurrentGlucose = () => {
  const [value, setValue] = useState(0);
  const [trendArrow, setTrendArrow] = useState("");
  useEffect(() => {
    GetCurrentGlucose()
      .then((response) => {
        const res = response.data;
        const { glucose_value, time, trend, trend_arrow, trend_description } =
          res;
        console.log(res);
        setValue(glucose_value);
        setTrendArrow(trend_arrow);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, []);
  return (
    <View>
      <Text>
        {value}
        {trendArrow}
      </Text>
    </View>
  );
};

export default CurrentGlucose;
