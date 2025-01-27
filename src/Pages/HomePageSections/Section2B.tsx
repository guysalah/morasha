import parse from "html-react-parser";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import person_back from "../../../src/assest/home/person_back.png";
import section2Back from '../../../src/assest/home/section2Back.webp'
import classes from "./Section2B.module.css";

interface section3Props {
  pageData: {
    homePageData: {
      about_morasha: string;
      going_up_text: string;
    };
  };
  loading: boolean;
}
const Section3: React.FC<section3Props> = ({ pageData, loading }) => {
  // console.log(pageData);
  let aboutText = (
    <Skeleton count={3} style={{ width: "300px", marginBottom: "10px" }} />
  );
  if (pageData) {
    const text = pageData.homePageData.going_up_text;
    const sanitizedHTML = DOMPurify.sanitize(text || ""); // Sanitize HTML content
    aboutText = <div>{parse(sanitizedHTML)}</div>;
  }

  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${section2Back})` }}
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
