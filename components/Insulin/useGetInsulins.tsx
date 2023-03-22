import { useEffect, useState } from "react";
import axios from "axios";
import { client } from "../../constants/NetworkConstants";
import { InsulinsListType } from "../../types/InsulinType";

const useGetInsulins = () => {
  const url = "get_insulins/?user_id=1";

  const [data, setData] = useState<InsulinsListType | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get<InsulinsListType>(url);
        console.log("response.data:", response.data);
        console.log(
          "response.data.insulins_list:",
          response.data.insulins_list
        );
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
  }, []);

  return { data, loaded, error };
};

export default useGetInsulins;
