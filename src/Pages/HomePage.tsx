import { useEffect } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import clientConfig from "../clientConfig";
function HomePage() {
  const navigate = useNavigate();
//   const data = useLoaderData();
//   console.log(data);
    useEffect(() => {
      async function getData(pageId: number): Promise<any> {
        try {
          const response = await fetch(
            `https://morasha-db.activebranding.co.il/wp-json/wp/v2/pages/${pageId}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        //   throw error;
        }
      }
      getData(7);
    }, []);

  return (
    <div>
      HOME PAGE
      <Link to="/about">About</Link>
    </div>
  );
}
export default HomePage;
export async function loader() {
  const apiKey = clientConfig.apiKey;

  if (!apiKey) {
    throw new Error("API key is missing");
  }

  const response = await fetch(
    `http://localhost:8080/api`,
    {
      headers: {
        "x-api-key": apiKey,
      } as HeadersInit, // Type assertion to match HeadersInit
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  } else {
    const resData = await response.json();
    return resData;
  }
}
