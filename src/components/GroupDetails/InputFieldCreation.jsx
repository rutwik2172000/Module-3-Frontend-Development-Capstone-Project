/* eslint-disable react/prop-types */
// Input component

import { ErrorMessage, Field } from "formik";

const InputFieldCreation = ({ label, id, name, htmlFor, placeholder }) => {
  return (
    <div className="flex w-full flex-col gap-2 md:w-80">
      <label htmlFor={htmlFor} className="font-semibold text-gray-500">
        {label}*
      </label>
      <div className="relative flex w-full flex-col gap-2 md:w-80">
        <Field
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className="rounded-md border-2 p-2 text-lg"
          required
          autoComplete="false"
        />
        <ErrorMessage
          name={name}
          component="span"
          data-testid="error-msg"
          className="absolute left-0 top-12 text-red-600"
        />
      </div>
    </div>
  );
};

export default InputFieldCreation;
