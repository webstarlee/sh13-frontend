import React from "react";
import { useTheme } from '@mui/material/styles';
import { TextField } from "@mui/material";

const useStyles = () =>{
  const theme = useTheme();
  return ({
    textField: {
      margin: `${theme.spacing(1)} 0`,
      "&>.MuiFormLabel-root": {
        fontSize: "1.25rem",
        left: "-15px",
        top: "-20px",
        fontFamily: 'chakra',
        "&.Mui-focused": {
          color: "rgba(255,255,255,.75)",
          fontSize: "1.25rem",
          left: "-15px",
          top: "-20px",
        }
      }
    },
    marginInput: {
      marginTop: theme.spacing(3),
    },
    input: {
      "&.MuiInputBase-root": {
        color: "rgba(255,255,255,.75)",
        fontFamily: 'chakra',
        "&>input": {
          backgroundColor: "rgba(255,255,255, 0.05)!important",
          "&:-webkit-autofill": {
            backgroundColor: "rgba(255,255,255, 0.05)!important",
            "&:hover, &:focus, &:active": {
              WebkitBoxShadow: "0 0 3px 2px rgba(255,255,255, 0.25)",
              boxShadow: "unset",
              WebkitTextFillColor: "rgba(0,0,0,0.9)",
            }
          },
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
  })
};

export default function SHInput(props) {

  const {size, fullWidth, label, color, id, type = "text", readOnly=false, ...rest} = props;

  const classes = useStyles();

  return (
      <TextField
        size={size}
        fullWidth={fullWidth}
        sx={[classes.textField, label? classes.marginInput: '']}
        label={label}
        id={id}
        type={type}
        focused
        color={color}
        autoComplete="off"
        InputProps={{
          sx: classes.input,
          autoComplete: "off",
          readOnly: readOnly
        }}
        {...rest}
      />
  );
}
