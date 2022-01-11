import React from "react";
import IconButton from "@material-ui/core/IconButton";

const IconButtonComponent = ({ icon, ...props }) => (
  <IconButton color="primary" disabled={props.disabled}>
    {icon}
  </IconButton>
);

export default IconButtonComponent;
