import React from "react";
import Select from "react-select";

const options = [
  {
    value: "Food",
    label: "Food",
  },
  {
    value: "Being Fabulous",
    label: "Being Fabulous",
  },
  {
    value: "Ken Wheeler",
    label: "Ken Wheeler",
  },
  {
    value: "ReasonML",
    label: "ReasonML",
  },
  {
    value: "Unicorns",
    label: "Unicorns",
  },
  {
    value: "Kittens",
    label: "Kittens",
  },
];

class SelectField extends React.Component {
  state = {
    isLoading: false,
  };
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange("topics", value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur("topics", true);
  };
  render() {
    var { error, touched } = this.props;
    return (
      <div className="form-group">
        <label> Topics(select at least 3) </label>{" "}
        <Select
          id="color"
          options={options}
          isMulti
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
          placeholder="Choose tag"
          className={error && touched ? "border border-danger rounded" : ""}
        />{" "}
        {error && touched && <div className="text-danger mt-2"> {error} </div>}{" "}
      </div>
    );
  }
}

export default SelectField;
