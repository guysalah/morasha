import classes from "./ContactForm.module.css";

interface InputProps {
  placeholder: string;
  errorMessage: string;
  type: string;
  id: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  errorMessage,
  type,
  id,
  value,
  name,
  handleChange,
}: InputProps) => {
  return (
    <div
      className={
        classes.inputContainer +
        " " +
        (id === "id4" && classes.textareaContainer)
      }
    >
      <input
        key={id}
        type={type}
        id={placeholder}
        className={classes.input}
        placeholder={placeholder}
        defaultValue=""
        onChange={handleChange}
        name={name}
        value={value}
      />
      <span className={classes.error}>{errorMessage}</span>
    </div>
  );
};

export default Input;
