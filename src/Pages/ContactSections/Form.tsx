import { useState } from "react";
import classes from "./ContactForm.module.css";
import Input from "./Input";
import clientConfig from "../../clientConfig";
import { useDispatch, useSelector } from "react-redux";
import { mainSettingActions } from "../../store/MainSetting";

const Form = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState([
    {
      id: "id1",
      placeholder: "שם",
      errorMessage: "",
      type: "text",
      value: "",
      name: "name",
    },
    {
      id: "id2",
      placeholder: "כתובת מייל",
      errorMessage: "",
      type: "text",
      value: "",
      name: "email",
    },
    {
      id: "id3",
      placeholder: "טלפון",
      errorMessage: "",
      type: "tel",
      value: "",
      name: "phone",
    },
    {
      id: "id4",
      placeholder: "הודעה",
      errorMessage: "",
      type: "text",
      value: "",
      name: "message",
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => {
      return prevInputs.map((input) => {
        if (input.name === name) {
          return { ...input, value, errorMessage: "" };
        }
        return input;
      });
    });
  };

  const emailValidation = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const phoneValidation = (phone: string) => {
    const phoneRegex = /^[0-9-]+$/;
    return phoneRegex.test(phone);
  };

  const validateInputs = () => {
    let valid = true;

    const validationRules = {
      name: {
        validate: (value: string) => value !== "",
        errorMessage: "נא למלא שם",
      },
      email: {
        validate: (value: string) => value !== "" && emailValidation(value),
        errorMessage: (value: string) =>
          value === "" ? "נא למלא כתובת מייל" : "כתובת מייל לא תקינה",
      },
      phone: {
        validate: (value: string) => value !== "" && phoneValidation(value),
        errorMessage: (value: string) =>
          value === "" ? "נא למלא טלפון" : "טלפון לא תקין",
      },
    };

    inputs.forEach((input) => {
      // Skip validation for message field
      if (input.name === "message") return;

      const rule = validationRules[input.name as keyof typeof validationRules];
      if (!rule.validate(input.value)) {
        valid = false;
        setInputs((prevInputs) =>
          prevInputs.map((prevInput) =>
            prevInput.id === input.id
              ? {
                  ...prevInput,
                  errorMessage:
                    typeof rule.errorMessage === "function"
                      ? rule.errorMessage(input.value)
                      : rule.errorMessage,
                }
              : prevInput
          )
        );
      }
    });

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        const response = await fetch(
          `${clientConfig.backendUrl}/emails/email-form`,
          {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
              "Content-Type": "application/json",
              "x-api-key": clientConfig.apiKey || "",
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          dispatch(mainSettingActions.setFormSent(true));
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // Optional: Show error message to user
      }
    }
  };

  interface RootState {
    mainSetting: {
      formSent: boolean;
    };
  }
  const formSent = useSelector(
    (state: RootState) => state.mainSetting.formSent
  );

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {inputs.map((input) => {
        if (input.name === "message") {
          return (
            <textarea
              className={classes.textarea}
              key={input.id}
              placeholder={input.placeholder}
              id={input.id}
              onChange={handleChange}
              value={input.value}
              name={input.name}
              style={{ resize: "none" }}
            />
          );
        }
        return (
          <Input
            key={input.id}
            placeholder={input.placeholder}
            errorMessage={input.errorMessage}
            type={input.type}
            id={input.id}
            handleChange={handleChange}
            value={input.value}
            name={input.name}
          />
        );
      })}
      <button
        style={{ backgroundColor: clientConfig.secondaryColor }}
        className={classes.submit}
        type="submit"
        disabled={formSent}
      >
        שליחת הודעה
      </button>
    </form>
  );
};

export default Form;
