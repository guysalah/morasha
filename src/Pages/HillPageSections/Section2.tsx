import classes from "../HillPage.module.css";
import { Link } from "react-router-dom";
import clientConfig from "../../clientConfig";
import Skeleton from "react-loading-skeleton";
import { Hill as HillType } from "../../types/hill";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
interface Section1Props {
  loading: boolean;
}

const Section2: React.FC<Section1Props> = ({ loading }) => {
  const data = useSelector(
    (state: { hill: { hill: HillType } }) => state.hill.hill
  );

  if (loading) return <div className={classes.section1Container}>loading</div>;
  if (!data || !data.acf) return <div></div>;

  if (!data.acf) return null;

  return (
    <div className={classes.section2Container}>
      <div
        className={classes.section2Content}
        style={{
          backgroundImage: `url(${
            data.acf.text_on_image?.background_image?.sizes?.large || ""
          })`,
        }}
      >
        <div
          className={classes.section2Text}
          style={{ backgroundColor: clientConfig.secondaryColor }}
        >
          {parse(data.acf.text_on_image.text)}
        </div>
      </div>

      <div className={classes.aboutTextContainer}>
        <div
          style={{ color: clientConfig.darkBrownColor }}
          className={classes.aboutText}
        >
          {parse(data.acf.about_text_2)}
        </div>
      </div>
    </div>
  );
};

export default Section2;
