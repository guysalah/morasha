import { useState, useEffect, useMemo } from "react";
import clientConfig from "../clientConfig";
import { Hill as HillType } from "../types/hill";

export const useGetHill = (id: number) => {
  const config = useMemo(() => clientConfig, []);

  const [data, setData] = useState<HillType>({
    acf: {
      tour_email: "",
      donate_url: "",
      top_image: [],
      about_text: "",
      about_text_2: "",
      coordinates: { latitude: "", longitude: "" },
      gallery: [
        {
          row: {
            image1: { sizes: { large: "" } },
            image2: { sizes: { large: "" } },
          },
        },
      ],
      text_on_image: {
        text: "",
        background_image: {
          sizes: { large: "" },
        },
      },
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
        const response = await fetch(`${config.backendUrl}/api/v1/hill/${id}`, {
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

        const pageData: HillType = await response.json();
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
