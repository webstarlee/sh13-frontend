import React from "react";
import { TextField } from "@mui/material";

const useStyles = () =>({
  textField: {
    marginTop: "25px",
    "&>.MuiFormLabel-root": {
      fontSize: "1.25rem",
      left: "-15px",
      top: "-20px",
      "&.Mui-focused": {
        color: "rgba(255,255,255,.75)"
      }
    }
  },
  input: {
    "&.MuiInputBase-root": {
      color: "rgba(255,255,255,.75)",
      height: "42px",
      "&>input": {
        backgroundColor: "rgba(255,255,255, 0.05)!important",
        "&:focus": {
          boxShadow: "0 0 3px 2px rgba(255,255,255, 0.25)",
          transition: "boxShadow ease-out 0.2s"
        },
      },
      "&>fieldset.MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderRadius: '0px',
        top: "0px",
        "&>legend": {
          display: "none",
        }
      }
    },
  }
});

export default function LeeInput(props) {

  const {size, fullWidth, label, color, id, type = "text", ...rest} = props;

  const classes = useStyles();

  return (
      <TextField
        size={size}
        fullWidth={fullWidth}
        sx={classes.textField}
        label={label}
        id={id}
        type={type}
        focused
        color={color}
        InputProps={{
          sx: classes.input,
        }}
        {...rest}
      />
  );
}
