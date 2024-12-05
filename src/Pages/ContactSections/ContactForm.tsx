import React from "react";
import classes from "./ContactForm.module.css";
import Form from "./Form";
import ImageAndTitle from "./imageAndTitle";

const ContactForm = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.fraemContainer}>
        <div className={classes.formContainer}>
          <Form />
        </div>
        <ImageAndTitle />
      </div>
    </div>
  );
};

export default ContactForm;
