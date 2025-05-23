import { useState, useEffect, useCallback } from "react";

export function useApi(url, method = "GET", body = null, auto = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (customUrl = url, customMethod = method, customBody = body) => {
      setLoading(true);
      setError(null);

      try {
        const options = {
          method: customMethod,
          headers: { "Content-Type": "application/json" },
        };

        if (customBody) {
          options.body = JSON.stringify(customBody);
        }

        const res = await fetch(customUrl, options);

        if (!res.ok) throw new Error(`Error: ${res.status}`);

        const result = await res.json();
        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [url, method, body]
  );

  useEffect(() => {
    if (auto && method === "GET") {
      fetchData();
    }
  }, [auto, method, fetchData]);

  return { data, loading, error, request: fetchData };
}
