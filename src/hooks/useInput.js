import React, { useState } from "react";

const UseInput = (dafaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(dafaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(event, false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
    initialError: !valueIsValid,
  };
};

export default UseInput;
