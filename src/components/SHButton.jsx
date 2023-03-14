import React from "react";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return ({
    buttonBase: {
      borderRadius: "0px",
      fontFamily: 'chakra',
      "&.MuiButton-outlinedPrimary": {
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "#000",
        },
      },
    },
  })
};

export default function SHButton(props) {
  const { title = "Button", variant, size, fullWidth, ...rest } = props;

  const classes = useStyles();

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={classes.buttonBase}
      {...rest}
    >
      {title}
    </Button>
  );
}
