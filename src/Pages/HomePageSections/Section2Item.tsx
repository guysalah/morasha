import { useState } from "react";
import classes from "./Section2.module.css";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import clientConfig from "../../clientConfig";

import { plusIcon } from "../../assest/icons/plusIcon";
import { minusIcon } from "../../assest/icons/minusIcon";

interface ItemProps {
  title?: string;
  loading?: boolean;
  fullDescription?: string;
  shortDescription?: string;
  boxBackgroundColor?: string;
  popupBackgroundColor?: string;
  iconName?: string;
}

const Item: React.FC<ItemProps> = ({
  title,
  fullDescription,
  shortDescription,
  loading,
  boxBackgroundColor,
  popupBackgroundColor,
  iconName,
}) => {
  const style: React.CSSProperties = {
    backgroundColor: boxBackgroundColor || clientConfig.secondaryColor,
  };

  const [showOvelay, setShowOverlay] = useState<boolean>(false);

  const sanitizedHTML = DOMPurify.sanitize(shortDescription || ""); // Sanitize HTML content

  const sanitizedHTMLfullDescription = DOMPurify.sanitize(
    fullDescription || ""
  );

  const upArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 144.483 144.483"
    >
      <g id="Group_6" data-name="Group 6" transform="translate(-999 221.001)">
        <path
          id="Path_7"
          data-name="Path 7"
          d="M43.035,48.055a5,5,0,0,0-7.071,0l-9.731,9.73a5,5,0,0,0,7.072,7.071l1.194-1.2V73.726a5,5,0,0,0,10,0V63.661l1.2,1.2a5,5,0,0,0,7.071-7.071Z"
          transform="translate(999 -221)"
          fill="#fff"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M39.5,85.347a5,5,0,0,0-5,5v49.135a5,5,0,0,0,10,0V90.347a5,5,0,0,0-5-5"
          transform="translate(999 -221)"
          fill="#fff"
        />
        <path
          id="Path_9"
          data-name="Path 9"
          d="M18.266,91.736a5,5,0,0,0-7.071,0l-9.731,9.73a5,5,0,1,0,7.072,7.071l1.194-1.195v32.14a5,5,0,0,0,10,0v-32.14l1.2,1.195A5,5,0,1,0,28,101.466Z"
          transform="translate(999 -221)"
          fill="#fff"
        />
        <path
          id="Path_10"
          data-name="Path 10"
          d="M118.249,66.29l-9.731-9.73a5,5,0,0,0-7.071,0l-9.731,9.73a5,5,0,0,0,7.071,7.07l1.195-1.195v67.317a5,5,0,1,0,10,0V72.165l1.2,1.195a5,5,0,1,0,7.071-7.07"
          transform="translate(999 -221)"
          fill="#fff"
        />
        <path
          id="Path_11"
          data-name="Path 11"
          d="M143.018,101.466l-9.731-9.73a5,5,0,0,0-7.071,0l-9.731,9.73a5,5,0,1,0,7.071,7.07l1.195-1.195v32.141a5,5,0,0,0,10,0V107.341l1.2,1.195a5,5,0,0,0,7.071-7.07"
          transform="translate(999 -221)"
          fill="#fff"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          d="M104.327,38.562a8.981,8.981,0,0,0-1.16-11.388L78.647,2.655a9.055,9.055,0,0,0-12.812,0L41.314,27.174a9.059,9.059,0,0,0,9.76,14.821l7.291-2.907V113.8a5,5,0,1,0,10,0V31.713a5,5,0,0,0-6.851-4.644l-9.9,3.944L72.241,10.39,92.864,31.013,82.805,27a5,5,0,0,0-6.852,4.645V43.6a5,5,0,0,0,10,0V39.024l7.455,2.971a8.978,8.978,0,0,0,10.919-3.433"
          transform="translate(999 -221)"
          fill="#fff"
        />
        <path
          id="Path_13"
          data-name="Path 13"
          d="M80.953,58.058a5,5,0,0,0-5,5v71.424H68.365v-1.226a5,5,0,1,0-10,0v6.226a5,5,0,0,0,5,5H80.953a5,5,0,0,0,5-5V63.058a5,5,0,0,0-5-5"
          transform="translate(999 -221)"
          fill="#fff"
        />
      </g>
    </svg>
  );
  const timeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 134.559 133.583"
    >
      <g id="Group_7" data-name="Group 7" transform="translate(-787 272)">
        <path
          id="Path_14"
          data-name="Path 14"
          d="M80.871,122.071c-1.11.277-2.24.522-3.364.729a5.41,5.41,0,1,0,1.972,10.638c1.336-.248,2.684-.54,4.006-.87a5.409,5.409,0,1,0-2.614-10.5"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M120.873,49.566a5.409,5.409,0,0,0,10.27-3.4c-.427-1.292-.9-2.589-1.407-3.851a5.409,5.409,0,1,0-10.044,4.016c.424,1.061.822,2.15,1.181,3.236"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M98.449,114.348c-.954.63-1.939,1.24-2.931,1.811a5.409,5.409,0,1,0,5.406,9.371c1.179-.681,2.352-1.4,3.488-2.156a5.409,5.409,0,0,0-5.963-9.026"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_17"
          data-name="Path 17"
          d="M134.507,64.674a5.409,5.409,0,1,0-10.81.425c.045,1.141.056,2.3.03,3.439a5.409,5.409,0,1,0,10.815.239c.03-1.362.019-2.742-.035-4.1"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_18"
          data-name="Path 18"
          d="M119.991,100.118a5.407,5.407,0,0,0-7.574,1.081c-.687.915-1.41,1.819-2.151,2.69a5.412,5.412,0,0,0,.612,7.625c.13.109.261.21.4.305a5.408,5.408,0,0,0,7.229-.917c.884-1.038,1.746-2.118,2.566-3.211a5.41,5.41,0,0,0-1.079-7.573"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_19"
          data-name="Path 19"
          d="M127.942,80.564a5.408,5.408,0,0,0-6.779,3.544c-.342,1.089-.721,2.183-1.13,3.255a5.408,5.408,0,0,0,10.108,3.851c.486-1.274.937-2.576,1.344-3.87a5.41,5.41,0,0,0-3.543-6.78"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_20"
          data-name="Path 20"
          d="M57.271,122.849A55.857,55.857,0,0,1,43.4,118.44c-.052-.028-.1-.058-.153-.083-1.037-.488-2.072-1.011-3.075-1.557a.038.038,0,0,0-.015-.009,57.822,57.822,0,0,1-5.382-3.363,56.445,56.445,0,0,1,.236-92.458l.194-.136a56.544,56.544,0,0,1,63.371-.508l-4.226,6.106c-1.175,1.7-.452,2.938,1.6,2.753l18.357-1.643a3.025,3.025,0,0,0,2.738-3.956l-4.93-17.761c-.552-1.991-1.965-2.23-3.141-.53l-4.236,6.12A66.808,66.808,0,0,0,55.787,1.006q-2.6.45-5.122,1.094l-.034.006c-.065.016-.131.037-.194.055A66.695,66.695,0,0,0,13.45,26.949c-.078.092-.158.183-.231.283-.307.413-.612.836-.91,1.259-.488.693-.969,1.4-1.428,2.114-.058.086-.1.173-.152.259A66.691,66.691,0,0,0,.069,70.2c0,.046,0,.092,0,.139C.13,71.7.238,73.071.384,74.425c.008.088.027.171.042.258.151,1.362.34,2.727.578,4.091a66.757,66.757,0,0,0,18.824,36.2l.07.071c.008.009.017.014.025.022a68.125,68.125,0,0,0,8.617,7.2A66.694,66.694,0,0,0,55.362,133.5a5.409,5.409,0,0,0,1.909-10.648"
          transform="translate(787 -272)"
          fill="#fff"
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M63.96,23.577a4.378,4.378,0,0,0-4.378,4.377v43.6L99.46,92.172a4.376,4.376,0,1,0,4.019-7.775L68.333,66.227V27.954a4.375,4.375,0,0,0-4.373-4.377"
          transform="translate(787 -272)"
          fill="#fff"
        />
      </g>
    </svg>
  );
  const mapIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 66.71 181.937"
    >
      <g id="Group_5" data-name="Group 5" transform="translate(-988.548 269)">
        <path
          id="Path_4"
          data-name="Path 4"
          d="M63.678,0l-9.1,3.032V9.1l-9.1,6.064L39.42,12.129l-3.033,3.032-3.032,9.1H27.291v6.756A79.8,79.8,0,0,1,11.333,78.893L0,94,12.129,133.42v6.065l6.065,6.064,3.032,15.162,6.065,9.1v12.129l9.1-18.194V148.582l-3.032-12.129,9.1-15.162,3.032-9.1,3.033-9.1V87.936l6.064-12.129L51.549,60.646l3.032-15.162V30.323l12.129-9.1v-9.1Z"
          transform="translate(988.548 -269)"
          fill="#fff"
        />
      </g>
    </svg>
  );

  let icon;
  let iconStyle;
  switch (iconName) {
    case "up_arrow":
      icon = upArrowIcon;
      iconStyle = { height: "100px" };
      break;
    case "time":
      icon = timeIcon;
      iconStyle = { height: "100px" };
      break;
    case "map":
      icon = mapIcon;
      iconStyle = { height: "140px", top: "30px" };
      break;
    default:
      icon = undefined;
  }



  const ovelayText = (
    <div
      style={{
        backgroundColor: popupBackgroundColor,
        top: showOvelay ? "0" : "-100%",
      }}
      className={classes.ovelayText}
    >
      {parse(sanitizedHTMLfullDescription)}
    </div>
  );

  const toggleOvelay = () => [setShowOverlay(!showOvelay)];
  let content;
  if (loading) {
    content = (
      <div style={style} className={classes.section2Item}>
        <SkeletonTheme
          baseColor={clientConfig.secondaryColor}
          highlightColor="#55ccdb"
        >
          <Skeleton
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "100%",
              height: "100%",
            }}
          />
        </SkeletonTheme>
      </div>
    );
  }
  if (!loading) {
    content = (
      <div style={style} className={classes.section2Item}>
        {ovelayText}
        <div className={classes.Icon} style={iconStyle}>
          {icon}
        </div>
        <div className={classes.titleAndText}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{parse(sanitizedHTML)}</div>
        </div>
        <div onClick={toggleOvelay} className={classes.showHideIcon}>
          {showOvelay ? minusIcon : plusIcon}
        </div>
      </div>
    );
  }

  return content;
};

export default Item;
