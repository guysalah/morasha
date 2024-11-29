import parse from "html-react-parser";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import goats_background from "../../../src/assest/home/goats_background.jpg";
import person_back from "../../../src/assest/home/person_back.png";
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
      className={classes.container}
      style={{ backgroundImage: `url(${goats_background})` }}
    >
      <div className={classes.innerContainer}>
        <div className={classes.personImage}>
          <img alt="person_back" src={person_back} />
        </div>

        <div className={classes.aboutText}>{aboutText}</div>
      </div>
    </div>
  );
};

export default Section3;
