import React from "react";
import { Divider } from "@mui/material";

const useStyles = () =>({
  root:{
    borderBottomWidth: "0px",
    width: "100%"
  },
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

export default function SHDivider(props) {

  const {size = "medium"} = props;

  const classes = useStyles();

  return (
    <Divider sx={[classes.root, classes[`${size}`]]} component="div" />
  );
}
