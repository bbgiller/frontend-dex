import React, { useEffect, useState } from "react";
import Header from "../../pages/CurrentGlucoseTab";
import { client } from "../../constants/NetworkConstants";
import { GlucoseDataState, GlucoseDataType } from "../../types/GlucoseDataType";
import axios, { Axios, AxiosError, AxiosResponse } from "axios";

const CurrentGlucose = () => {
  const [glucoseData, setGlucoseData] = useState<GlucoseDataState>(undefined);

  const [error, setError] = useState<string | null>(null);

  const url = "/current_glucose";

  useEffect(() => {
    let interval = setInterval(() => GlucoseCall(), 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const GlucoseCall = async () => {
    try {
      const { data }: AxiosResponse<GlucoseDataType> = await axios.get(
        "http://localhost:9874/current_glucose"
      );
      setGlucoseData(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status);
        console.error(err.response);
        console.log(err.message);
        setError(err.message);
      } else {
        console.error(error);
      }
    }
  };

  return glucoseData ? (
    <Header
      trendDescription={
        error || glucoseData.trend_description.toString() || "Loading"
      }
      glucose={error || glucoseData.glucose_value.toString() || "Loading"}
    />
  ) : null;
};

export default CurrentGlucose;
