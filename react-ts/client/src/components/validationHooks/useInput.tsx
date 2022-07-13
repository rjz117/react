import React, {useState} from "react";

const useInput = (validateFn:(val :string) => boolean) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validateFn(enteredInput);
  const hasError = !valueIsValid && inputTouched;
  
  const inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredInput('');
    setInputTouched(false);
  };

  return {
    value : enteredInput,
    isValid:valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }

};

export default useInput;