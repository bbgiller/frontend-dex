import React, { useEffect, useState } from "react";
import GetCurrentGlucose from "./GetCurrentGlucose";
import { Text, View } from "react-native";
import AxiosErrorHandler from "./AxiosErrorHandler";
import Header from "./Header";
import { client } from "./NetworkConstants";
import { CurrentGlucoseData } from "./CurrentGlucoseType";
import axios from "axios";

const CurrentGlucose = () => {
  const [value, setValue] = useState(0);
  const [trendArrow, setTrendArrow] = useState("");
  const [trendDescription, setTrendDescription] = useState("");

  // const interval = setInterval(
  //   () =>
  //     GetCurrentGlucose()
  //       .then((response) => {
  //         const res = response.data;
  //         const { glucose_value, time, trend, trend_arrow, trend_description } =
  //           res;
  //         console.log(10);
  //         console.log(glucose_value);
  //         setValue(glucose_value);
  //         setTrendArrow(trend_arrow);
  //         setTrendDescription(trend_description);
  //       })
  //       .catch((err) => AxiosErrorHandler(err)),
  //   60000
  // );
  // useEffect(() => {
  //   interval;
  // }, []);
  // return <Header glucose={value} arrow={trendArrow} />;

  async function GlucoseCall() {
    console.log("glucose call");
    GetCurrentGlucose()
      .then((response) => {
        const res = response.data;
        const { glucose_value, time, trend, trend_arrow, trend_description } =
          res;
        console.log(10);
        console.log(glucose_value);
        setValue(glucose_value);
        setTrendArrow(trend_arrow);
        setTrendDescription(trend_description);
      })
      .catch((err) => AxiosErrorHandler(err));
  }

  useEffect(() => {
    let interval = setInterval(() => GlucoseCall(), 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Header glucose={value} arrow={trendArrow} />;
};

export default CurrentGlucose;
