import classes from "../HillPage.module.css";
import { Link } from "react-router-dom";
import clientConfig from "../../clientConfig";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Hill as HillType } from "../../types/hill";
import parse from "html-react-parser";
interface Section1Props {
  loading: boolean;
}

const Section1: React.FC<Section1Props> = ({ loading }) => {
  const data = useSelector(
    (state: { hill: { hill: HillType } }) => state.hill.hill
  );

  if (loading)
    return (
      <div className={classes.section1Container}>
        <div style={{ padding: "40px" }}>
          <Skeleton
            height={500}
            width="100%"
            // baseColor={clientConfig.secondaryColor}
            // highlightColor="white"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    );
  if (!data || !data.acf) return null;

  // Verify the required properties exist
  if (!data.acf.donate_url || !data.acf.top_image || !data.acf.about_text) {
    return null;
  }

  return (
    <div className={classes.section1Container}>
      <Link
        to={data.acf.donate_url}
        target="_blank"
        style={{ backgroundColor: clientConfig.secondaryColor }}
        className={classes.donateButton}
      >
        {data.title ? `תרומה ל${data.title} >>` : ""}
      </Link>
      <div style={{ height: "30px" }}></div>
      <div className={classes.topImage}>
        <h1
          style={{ backgroundColor: clientConfig.secondaryColor }}
          className={classes.topImageTitle}
        >
          {data.title?.split("גבעת").map((part: string, index: number) =>
            index === 0 ? (
              <>
                גבעת
                <br />
                {part}
              </>
            ) : (
              part
            )
          )}
        </h1>
        <div
          style={{ backgroundImage: `url(${data.acf.top_image})` }}
          className={classes.topImageContent}
        ></div>
      </div>
      <div className={classes.aboutTextContainer}>
        <div
          style={{ color: clientConfig.darkBrownColor }}
          className={classes.aboutText}
        >
          {parse(data.acf.about_text)}
        </div>
      </div>
    </div>
  );
};

export default Section1;
