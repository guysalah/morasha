import styles from "./Section6.module.css";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";
import { useIsMobile } from "../../utils/utils";

interface RootState {
  links: {
    israelMap: string;
    israelMapMobile: string;
  };
}

interface section6Props {
  pageData: {
    homePageData: {
      my_country: string;
    };
  };
  loading: boolean;
}

const Section6: React.FC<section6Props> = ({ pageData, loading }) => {
  const backgroundImage = useSelector(
    (state: RootState) => state.links.israelMap
  );
  const backgroundImageMobile = useSelector(
    (state: RootState) => state.links.israelMapMobile
  );

  let text: React.ReactNode = (
    <Skeleton count={3} style={{ width: "300px", marginBottom: "10px" }} />
  );
  if (pageData) {
    text = <>{parse(pageData.homePageData.my_country)}</>;
  }
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        backgroundImage: `url(${isMobile ? "" : backgroundImage})`,
      }}
      className={styles.container}
    >
      <div className={styles.innerContainer}>
        <div className={styles.text}>{text}</div>
        <div className={styles.image}>
          {isMobile ? <img src={backgroundImageMobile} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Section6;
