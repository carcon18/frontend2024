import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    // Para checkboxes, utiliza 'checked' en lugar de 'value'
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues({
      ...values,
      [target.name]: value
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, handleInputChange, reset];
};
