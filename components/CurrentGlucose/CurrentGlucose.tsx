import React, { useEffect, useState } from "react";
import Header from "../../pages/CurrentGlucoseTab";
import useAxiosGet from "../../Hooks/useAxiosGet";
import { GlucoseDataType } from "../../types/GlucoseDataType";
const url = "current_glucose";
const CurrentGlucose = () => {
  const { data, loaded, error } = useAxiosGet<GlucoseDataType>(url);
  useEffect(() => {
    const interval = setInterval(() => {
      useAxiosGet<GlucoseDataType>(url);
    }, 300000);

    return () => {
      clearInterval(interval);
    };
  }, [url]);

  if (!loaded) {
  }
  if (data) {
    return (
      <Header
        trendDescription={error || data.trend_description.toString()}
        glucose={error || data.glucose_value.toString()}
      />
    );
  }
};

export default CurrentGlucose;
