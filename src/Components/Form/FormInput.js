import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, type, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {
      type==='textarea' && 
      <textarea
        type={type}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      ></textarea>
      }
      {
      (type==='button' || type==='color' || type==='date' || type==='datetime-local' || type==='email' || type==='file' || type==='hidden' || type==='image' || type==='month' || type==='number' || type==='password' || type==='range' || type==='reset' || type==='search' || type==='submit' || type==='tel' || type==='text' || type==='time' || type==='url' || type==='week') &&
      <input
        type={type}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      }
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;