import { useEffect, useState } from "react";
import useAxiosGet from "../../Hooks/useAxiosGet";
import { GlucoseDataType } from "../../types/GlucoseDataType";
import { client } from "../../constants/NetworkConstants";
import axios from "axios";
const url = "current_glucose/?id=1";
const useCurrentGlucose = () => {
  const [data, setData] = useState<GlucoseDataType | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get(url);
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.status);
          console.error(err.response);
          console.log(err.message);
          setError(err.message);
        } else {
          console.error(error);
        }
      } finally {
        setLoaded(true);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 300000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { data, loaded, error };
};

export default useCurrentGlucose;
