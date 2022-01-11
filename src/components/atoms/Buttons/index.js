import React from "react";

import Button from "@material-ui/core/Button";

const ButtonComponent = (props) => (
  <Button
    variant="contained"
    disabled={props.disabled}
    onClick={props.onClick}
    size="medium"
    style={{
      background: `${props.color}`,
      color: `${props.textColor} !important`,
    }}
  >
    {props.icon ? props.icon : null} {props.title}
  </Button>
);

export default ButtonComponent;
