import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const TextFieldComponent = (props) => (
  <TextField
    fullWidth
    label={props.label}
    defaultValue={props.value}
    required={props.required}
    onChange={props.onChange}
  />
);

TextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

TextFieldComponent.defaultProps = {
  value: "",
  required: false,
  type: "text",
};

export default TextFieldComponent;