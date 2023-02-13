import { useState, useEffect } from "react";
import axios from "axios";
import { client } from "../constants/NetworkConstants";

type Response<T> = {
  data: T | null;
  error: string;
  loaded: boolean;
};

function useAxiosGet<T>(url: string): Response<T> {
  const [data, setData] = useState<T | null>(null);
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
  }, [url]);

  return { data, error, loaded };
}

export default useAxiosGet;
