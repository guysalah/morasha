import { useState, useEffect } from "react";
import clientConfig from "../clientConfig";

export const useGetPageData = (pageId: number) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPageData = async () => {
      setLoading(true);
      try {
        // const response = await fetch(
        //   `https://morasha-db.activebranding.co.il/wp-json/wp/v2/pages/${pageId}`
        // );

        const response = await fetch(`http://localhost:8080/api/home-page`, {
          method: "GET", // Optional, defaults to 'GET'
          headers: {
            "Content-Type": "application/json", // Optional, but good practice
            "x-api-key": clientConfig.apiKey || "", // Replace with your actual API key
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const pageData = await response.json();
        setData(pageData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (pageId) {
      fetchPageData();
    }
  }, [pageId]);

  return { data, error, loading };
};
