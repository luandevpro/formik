import React from "react";
import classNames from "classnames";

export const CustomInput = ({
  id,
  type,
  name,
  label,
  field,
  className,
  placeholder,
  form: { touched, errors },
  ...props
}) => {
  const classes = classNames("form-control", {
    "border-danger border": errors[field.name] && touched[field.name],
  });
  return (
    <div className="form-group">
      <label htmlFor={id}> {label} </label>{" "}
      <input
        type={type}
        id={id}
        {...field}
        name={name}
        className={classes}
        placeholder={placeholder}
        {...props}
      />{" "}
      {touched[field.name] &&
        errors[field.name] && (
          <div className="text-danger pt-2"> {errors[field.name]} </div>
        )}{" "}
    </div>
  );
};
