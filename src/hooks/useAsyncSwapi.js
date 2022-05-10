import SwapiService from "../services/service";
import { useState } from "react";

export default function useAsyncSwapi(swapiMethod, array = false, id) {
  const swapiService = new SwapiService();
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function download() {
    setLoading(true);
    let newId = id || Math.floor(2 + Math.random() * (19 + 1 - 2));
    try {
      let result;
      if (array) {
        result = await swapiService[swapiMethod]();
      } else {
        result = await swapiService[swapiMethod](newId);
      }
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return [data, loading, error, download];
}
