import React from 'react';
import { useField } from 'formik';

export const useInput = () => {
  const TextInputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="textInput" {...field} {...props} />
        {meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null}
      </>
    );
  };
  return TextInputField;
};
