import { useState } from "react";
import styles from "./contact.module.css";
import { FormGroup, Input, Button } from "@mui/material";
import clientConfig from "../clientConfig";
function Contact() {
  const [fromData, setFromData] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fromData);
  };

  return (
    <div  style={{ height: "80vh" }} className={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          onChange={handelInputChange}
          type="text"
          value={fromData.name}
          name="name"
          placeholder="שם"
        />
        <Input
          onChange={handelInputChange}
          type="tel"
          value={fromData.tel}
          name="tel"
          placeholder="טלפון"
        />
        <Input
          onChange={handelInputChange}
          type="text"
          value={fromData.email}
          name="email"
          placeholder={`דוא״ל`}
        />
        <Button
          sx={{
            backgroundColor: clientConfig.primaryColor,
            color: "white",
            marginTop: "20px",
            width: "90vw",
            maxWidth: "300px",
            "&:hover": {
              backgroundColor: clientConfig.secondaryColor,
            },
          }}
          className={styles.button}
          type="submit"
        >
          שלח
        </Button>
      </form>
    </div>
  );
}

export default Contact;
