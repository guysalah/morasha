import classes from "./imageAndTiteCotainer.module.css";
import { iconFlag, iconHands, iconQustionsMark } from "./icons";
import clientConfig from "../../clientConfig";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { mainSettingActions } from "../../store/MainSetting";
import { useEffect } from "react";

interface RootState {
  mainSetting: { formSent: boolean };
}

const ImageAndTitle = () => {
  const formSent = useSelector(
    (state: RootState) => state.mainSetting.formSent
  );
  console.log(formSent);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
        if (formSent) {
          dispatch(mainSettingActions.setFormSent(false));
        }
    };
  }, [formSent, dispatch]);

  return (
    <div className={classes.imageAndTiteCotainer}>
      <div className={classes.iconContainer}>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {iconFlag()}
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {iconHands()}
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {iconQustionsMark()}
        </motion.div>
      </div>
      <div className={classes.sentenceContainer}>
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: formSent ? -100 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={classes.title}
          style={{ color: clientConfig.secondaryColor }}
        >
          מעוניינים לתמוך בגבעות, לתאם סיור או לשאול שאלה? מלאו את הפרטים בטופס
          ונחזור אליכם בהקדם!
        </motion.h1>

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: formSent ? -100 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={classes.title + " " + classes.successTitle}
          style={{ color: clientConfig.secondaryColor }}
        >
          הודעתך נשלחה בהצלחה!
          <br />
          נחזור אליכם בהקדם!
        </motion.h1>
      </div>
    </div>
  );
};

export default ImageAndTitle;
