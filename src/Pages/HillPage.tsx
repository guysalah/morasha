import { useParams, Link } from "react-router-dom";
import { useGetHill } from "../utils/getHill";
import classes from "./HillPage.module.css";
import clientConfig from "../clientConfig";
import GoogleMapSection from "./HillPageSections/GoogleMapSection";

function HillPage() {
  const params = useParams();

  const hillId = params.hillId ? parseInt(params.hillId) : 0;
  const { data, error, loading } = useGetHill(hillId);

  let map = null;
  if (
    data !== null &&
    +data.acf.coordinates.latitude > 0 &&
    +data.acf.coordinates.longitude > 0
  ) {
    map = (
      <GoogleMapSection
        hillId={hillId}
        latitude={+data.acf.coordinates.latitude}
        longitude={+data.acf.coordinates.longitude}
      />
    );
  }

  return (
    <div className={classes.HillPage} key={hillId}>
      <div className={classes.HillPageContent}>
        <Link
          to={data.acf.donate_url}
          target="_blank"
          style={{ backgroundColor: clientConfig.secondaryColor }}
          className={classes.donateButton}
        >
          {data.title ? `תרומה ל${data.title} >>` : ""}
        </Link>

        <div className={classes.topImage}>
          <h1
            style={{ backgroundColor: clientConfig.secondaryColor }}
            className={classes.topImageTitle}
          >
            {data.title?.split("גבעת").map((part, index) =>
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
          <h2
            style={{ color: clientConfig.darkBrownColor }}
            className={classes.aboutText}
          >
            {data.acf.about_text}
          </h2>
        </div>
      </div>

      {map}
    </div>
  );
}

export default HillPage;
