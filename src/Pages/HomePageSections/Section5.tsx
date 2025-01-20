import styles from "./Section5.module.css";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";

interface RootState {
  links: {
    oliveTree: string;
    noTime: string;
  };
}

interface section5Props {
  pageData: {
    homePageData: {
      no_time: string;
    };
  };
  loading: boolean;
}

const Section5: React.FC<section5Props> = ({ pageData, loading }) => {
  const backgroundImage = useSelector(
    (state: RootState) => state.links.oliveTree
  );

  let text: React.ReactNode = (
    <Skeleton count={3} style={{ width: "300px", marginBottom: "10px" }} />
  );
  if (pageData) {
    text = <>{parse(pageData.homePageData.no_time)}</>;
  }
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={styles.container}
    >
      <div className={styles.noTime}>{text}</div>
    </div>
  );
};

export default Section5;
