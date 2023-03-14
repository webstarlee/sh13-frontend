import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    buttonBase: {
      borderRadius: "0px",
      "&.MuiButton-outlinedPrimary": {
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "#000",
        },
      },
    },
  };
};

export default function LeeButton(props) {
  const { title, variant, size, fullWidth, children, ...rest } = props;

  const classes = useStyles();

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={classes.buttonBase}
      {...rest}
    >
      {title ? title : children}
    </Button>
  );
}
