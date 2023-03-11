import React from "react";
import { Divider } from "@mui/material";

const useStyles = () =>({
  small: {
    height: "10px",
  },
  medium: {
    height: "20px",
  },
  large: {
    height: "30px",
  },
});

export default function LeeDivider(props) {

  const {height = "medium"} = props;

  const classes = useStyles();

  const dividerClasses = classes[`${height}`];

  return (
    <Divider sx={dividerClasses} component="div" />
  );
}
