import React from "react";
import classes from "./Contact.module.css";
import clientConfig from "../clientConfig";
import desktopImage from "../assest/contact/contact_us_background_hill.jpg";
import { useIsMobile } from "../utils/utils";
import ContactForm from "./ContactSections/ContactForm";

const Contact = () => {
  const isMobile = useIsMobile();

  const backImage = isMobile ? (
    <div className={classes.backgroundImageContainer}>
      <img src={desktopImage} alt="contact us background" />
    </div>
  ) : (
    <div className={classes.backgroundImageContainer}>
      <img src={desktopImage} alt="contact us background" />
    </div>
  );

  return (
    <div
      style={{ backgroundColor: clientConfig.secondaryColor }}
      className={classes.mainContainer}
    >
      {backImage}
      <ContactForm />
    </div>
  );
};

export default Contact;
