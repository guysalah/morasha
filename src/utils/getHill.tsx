import { useState, useEffect, useMemo } from "react";
import clientConfig from "../clientConfig";

// Define the type for the expected data structure
interface Hill {
  acf: {
    donate_url: string;
    top_image: string;
    about_text: string;
    about_text2: string;
    gallery: { sizes: { large: string } }[];
    coordinates: { latitude: string; longitude: string };
  };
  id: number;
  title: string;
  featuredImage: string;
}

export const useGetHill = (id: number) => {
  const config = useMemo(() => clientConfig, []);

  const [data, setData] = useState<Hill>({
    acf: {
      donate_url: "",
      top_image: "",
      about_text: "",
      about_text2: "",
      gallery: [],
      coordinates: { latitude: "", longitude: "" },
    },
    id: 0,
    title: "",
    featuredImage: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${config.backendUrl}/api/hill/${id}`, {
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

        const pageData: Hill = await response.json();
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
  }, [config, id]);

  return { data, error, loading };
};
