import { useState } from "react";
import axios from "axios";

import { client } from "../../constants/NetworkConstants";

const useCreateInsulin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createInsulin = async (dose: number, time: Date, type: string) => {
    try {
      setLoading(true);

      const data = {
        user_id: "1",
        dose: dose.toString(),
        time: time.toISOString(),
        type,
      };
      console.log(data);

      const response = await client.post("/create_insulin/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response);
        setError(err.message);
      } else {
        console.error(error);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createInsulin, loading, error };
};

export default useCreateInsulin;
