import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clientConfig from "../../clientConfig";
import classes from "../homePage.module.css";
import pic1 from "../../assest/home/pic1.png";
import pic2 from "../../assest/home/pic2.png";
import pic3 from "../../assest/home/pic3.png";
import pic4 from "../../assest/home/pic4.png";
import pic5 from "../../assest/home/pic5.png";
import { useIsMobile } from "../../utils/utils";

const Section1: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Define scroll animations for the images
  const pic1Animation = useTransform(scrollYProgress, [0, 1], [-5, 60]);
  const pic2Animation = useTransform(scrollYProgress, [0, 1], [-5, 250]);
  const pic3Animation = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const pic4Animation = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const pic5Animation = useTransform(scrollYProgress, [0, 1], [-5, 280]);

  const isMobile = useIsMobile();

  return (
    <div
      className={classes.Section1}
      style={{ backgroundColor: clientConfig.secondaryColor }}
    >
      <div className={classes.qute}>
        כִּ֧י אֶת־כׇּל־הָאָ֛רֶץ אֲשֶׁר־אַתָּ֥ה רֹאֶ֖ה
        {isMobile ? ` ` : <br />}
        לְךָ֣ אֶתְּנֶ֑נָּה וּֽלְזַרְעֲךָ֖ עַד־עוֹלָֽם:
      </div>
      <div className={classes.bodyText}>
        אחרי אלפיים שנות גלות, לפני 150 שנה החל עם ישראל
        {isMobile ? ` ` : <br />}
        לשוב אל הארץ שנתן לנו האל.
      </div>
      <motion.div
        style={{
          y: pic1Animation,
          zIndex: 5,
        }}
      >
        <img
          style={{ width: "350px", maxWidth: "80vw", marginTop: "10px" }}
          src={pic1}
          alt="pic1"
        />
      </motion.div>

      <motion.div
        className={classes.pic2}
        style={{
          y: pic2Animation,
          position: "absolute",
        }}
      >
        <img style={{ width: "100%" }} src={pic2} alt="pic2" />
      </motion.div>

      <motion.div
        className={classes.pic3}
        style={{
          y: pic3Animation,
          position: "absolute",
        }}
      >
        <img style={{ width: "100%" }} src={pic3} alt="pic3" />
      </motion.div>
      <motion.div
        className={classes.pic4}
        style={{
          y: pic4Animation,
          position: "absolute",
        }}
      >
        <img style={{ width: "100%" }} src={pic4} alt="pic4" />
      </motion.div>
      <motion.div
        className={classes.pic5}
        style={{
          y: pic5Animation,
          position: "absolute",
        }}
      >
        <img style={{ width: "100%" }} src={pic5} alt="pic5" />
      </motion.div>
    </div>
  );
};

export default Section1;
