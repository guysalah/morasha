import parse from "html-react-parser";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import goats_background from "../../../src/assest/home/goats_background.jpg";
import person_back from "../../../src/assest/home/person_back.png";
import wall from "../../../src/assest/home/wall.webp";
import classes from "./Section3.module.css";

interface section3Props {
  pageData: {
    homePageData: {
      about_morasha: string;
    };
  };
  loading: boolean;
}
const Section3: React.FC<section3Props> = ({ pageData, loading }) => {
  let aboutText = (
    <Skeleton count={3} style={{ width: "300px", marginBottom: "10px" }} />
  );
  if (pageData) {
    const text = pageData.homePageData.about_morasha;
    const sanitizedHTML = DOMPurify.sanitize(text || ""); // Sanitize HTML content
    aboutText = <div>{parse(sanitizedHTML)}</div>;
  }

  return (
    <div
      className={classes.container + " " + classes.section3Container}
      style={{ backgroundImage: `url(${goats_background})` }}
    >
      <div className={classes.backgroundImage}>
        <img src={wall} alt="wall" />
      </div>

      <div className={classes.innerContainer}>
        <div className={classes.aboutText + " " + classes.section3Text}>
          {aboutText}
        </div>
        <div className={classes.personImage}></div>
      </div>
    </div>
  );
};

export default Section3;
