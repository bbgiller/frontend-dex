import { useEffect, useState } from "react";
import useAxiosGet from "../../Hooks/useAxiosGet";
import { GlucoseDataType } from "../../types/GlucoseDataType";

const useCurrentGlucose = () => {
  const url = "current_glucose";
  const { data, loaded, error } = useAxiosGet<GlucoseDataType>(url);

  useEffect(() => {
    const interval = setInterval(() => {
      useAxiosGet<GlucoseDataType>(url);
    }, 300000);

    return () => {
      clearInterval(interval);
    };
  }, [url]);

  return { data, loaded, error };
};

export default useCurrentGlucose;
