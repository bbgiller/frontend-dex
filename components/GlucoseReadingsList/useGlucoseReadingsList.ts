import { useEffect, useState } from "react";
import useAxiosGet from "../../Hooks/useAxiosGet";
import { GlucoseDataType } from "../../types/GlucoseDataType";
import { GlucoseReadingsListType } from "../../types/GlucoseReadingsListType";

const useGlucoseReadingsList = () => {
  const url = "glucose_readings_list/";
  const { data, loaded, error } = useAxiosGet<GlucoseReadingsListType>(url);

  return { data, loaded, error };
};

export default useGlucoseReadingsList;
