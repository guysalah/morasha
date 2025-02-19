import styles from "./homePage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useIsMobile } from "../utils/utils";
import { useGetPageData } from "../utils/getPageData";
import Section1 from "./HomePageSections/Section1";
import Section2B from "./HomePageSections/Section2B";
import Section3 from "./HomePageSections/Section3";
import Section4 from "./HomePageSections/Section4";
import Section5 from "./HomePageSections/Section5";
import Section6 from "./HomePageSections/Section6";


// Define the Redux state shape for type safety
interface RootState {
  links: {
    topImage: string;
    topImageMobile: string;
  };
  hills: {
    selectedHillId: number;
  };
}

// Define the component's props interface
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  // Fetch page data using the custom hook
  const { data, error, loading } = useGetPageData(22);
  // Get values from the Redux store
  const mainImageUrl = useSelector((state: RootState) => state.links.topImage);
  const mainImageMobileUrl = useSelector(
    (state: RootState) => state.links.topImageMobile
  );

  // Determine if the device is mobile
  const isMobile = useIsMobile();

  return (
    <section className={styles.mainContainer}>
      <div className={styles.topImage}>
        <img
          alt="morasha_logo"
          src={isMobile ? mainImageMobileUrl : mainImageUrl}
        />
      </div>
      <Section1 />
      <Section2B loading={loading} pageData={data} />
      <Section3 loading={loading} pageData={data} />
      <Section4 />
      <Section5 loading={loading} pageData={data}/>
      <Section6 loading={loading} pageData={data}/>
    </section>
  );
};

export default HomePage;

//this is loader functions for react-router-dom loader

// export async function loader() {
//   const apiKey = clientConfig.apiKey;
//   if (!apiKey) {
//     throw new Error("API key is missing");
//   }

//   const response = await fetch(`http://localhost:8080/api`, {
//     headers: {
//       "x-api-key": apiKey,
//     } as HeadersInit, // Type assertion to match HeadersInit
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
// }
