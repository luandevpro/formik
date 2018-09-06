import React from "react";
import classNames from "classnames";
import styled from "styled-components";

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={classNames("text-danger")}> {error} </div> : null;

// Checkbox input
export const CustomCheckbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
}) => {
  const classes = classNames({
    "border-danger border rounded pl-2 mb-3": errors[name] && touched[name],
  });
  return (
    <div className={classes}>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("mt-2")}
      />{" "}
      <label htmlFor={id}> {label} </label>{" "}
      {touched[name] && <InputFeedback error={errors[name]} />}{" "}
    </div>
  );
};

// Checkbox group
export default class CheckboxGroup extends React.Component {
  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    // take care of touched
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const { value, error, touched, label, className, children } = this.props;

    const classes = classNames(
      "border border-secondary rounded",
      {
        "border border-danger rounded pl-3 ": !!error && touched,
      },
      className
    );

    return (
      <Fieldset className={classes}>
        <Legend> {label} </Legend>{" "}
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            field: {
              value: value.includes(child.props.id),
              onChange: this.handleChange,
              onBlur: this.handleBlur,
            },
          });
        })}{" "}
        {touched && <InputFeedback error={error} />}{" "}
      </Fieldset>
    );
  }
}

export const Fieldset = styled.fieldset`
  background-color: white;
  border: 1px solid black;
  max-width: 500px;
  padding: 5px 16px;
  margin-bottom: 10px;
`;
export const Legend = styled.legend`
  font-size: 1em;
`;
