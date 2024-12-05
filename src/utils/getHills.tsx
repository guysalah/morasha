import { useState, useEffect, useMemo } from "react";
import clientConfig from "../clientConfig";
import { Hill } from "../types/hill";

export const useGetHills = () => {
  const config = useMemo(() => clientConfig, []);
  const [data, setData] = useState<Hill[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${config.backendUrl}/api/v1/hills`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": config.apiKey || "",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const pageData: Hill[] = await response.json();
        setData(pageData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Handle known Error types
        } else if (typeof err === "string") {
          setError(err); // Handle string errors (rare, but possible)
        } else {
          setError("An unknown error occurred"); // Fallback for other types
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Abort the fetch if the component unmounts
      controller.abort();
    };
  }, [config]);

  return { data, error, loading };
};
