import { Skeleton } from "@mui/material";
import { Hill } from "../types/hill";
import parse from "html-react-parser";

import { CustomButton } from "../Components/ui/Button";
import { CustomButtonWithIcon } from "../Components/ui/ButtonWithIcon";

import { Link } from "react-router-dom";
import clientConfig from "../clientConfig";
import styles from "./Hills.module.css";

import { handsIcon } from "../assest/icons/handsIcon";
import { tureIcon } from "../assest/icons/tureIcon";

import nonTopImage from "../assest/non_top_image.jpg";

import { useIsMobile } from "../utils/utils";
import { useDispatch } from "react-redux";
import { mainSettingActions } from "../store/MainSetting";

interface HillItemProps {
  loading: boolean;
  hill?: Hill;
}
const HillItem = ({ loading, hill }: HillItemProps) => {
  const title = hill?.title ?? "";
  // console.log(hill);
  const tourEmail = hill?.acf?.tour_email ?? "";
  // console.log(tourEmail);
  const topImage = hill?.acf?.top_image[0]
    ? hill.acf.top_image[0]
    : nonTopImage;
  const aboutText = hill?.acf?.about_text ?? "";
  const isMobile = useIsMobile();

  const dispatch = useDispatch();
  const handleTourEmail = (tourEmail: string, title: string, hillId: string) => {
    dispatch(mainSettingActions.setTourFormPopUp(true));
    dispatch(mainSettingActions.setSelectedTourName(title));
    dispatch(mainSettingActions.setSelectedTourEmail(tourEmail));
    dispatch(mainSettingActions.setSelectedTHillId(hillId));  
  };

  return (
    <div className={styles.hillItem}>
      {loading ? (
        <Skeleton
          height={"100%"}
          width={"100%"}
          animation="wave"
          sx={{ transform: "scale(1, 1)" }}
        />
      ) : (
        <>
          <Link
            to={`/hills/${hill?.id}`}
            className={styles.hillItemImage}
            style={{ backgroundImage: `url(${topImage})` }}
          ></Link>
          <Link to={`/hills/${hill?.id}`} className={styles.hillItemContent}>
            <p className={styles.hillItemTitle}>{title}</p>
            <p className={styles.hillItemAbout}>{parse(aboutText)}</p>
            <div className="flex items-center justify-center">
              <CustomButton
                sx={{
                  position: "absolute",
                  bottom: "18px",
                  backgroundColor: clientConfig.primaryColor,
                  color: "white",
                  fontFamily: "var(--primary-font)",
                  fontSize: "1.2rem",
                  padding: "2px 20px 0px 20px",
                  borderRadius: "100px",
                  fontWeight: "500",
                  height: "30px",
                  "&:hover": {
                    backgroundColor: clientConfig.primaryColorHover,
                  },
                }}
              >
                למידע נוסף
              </CustomButton>
            </div>
          </Link>
          <div className={styles.hillItemButtonsContainer}>
            <Link to={hill?.acf.donate_url ?? ""} target="_blank">
              <CustomButtonWithIcon
                hillName={`ל${title}`}
                icon={handsIcon}
                title="תרומה"
                fontSize={isMobile ? "1.6rem" : "1.6rem"}
              />
            </Link>
            {tourEmail && (
              <div
                onClick={() =>
                  handleTourEmail(tourEmail, title, hill?.id.toString() ?? "")
                }
              >
                <CustomButtonWithIcon
                  hillName={`ב${title}`}
                  icon={tureIcon}
                  title="תאום סיור"
                  fontSize={isMobile ? "1.2rem" : "1.3rem"}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HillItem;
