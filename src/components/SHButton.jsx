import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();
  return {
    buttonBase: {
      borderRadius: "0px",
      fontFamily: 'chakra',
      "&.MuiButton-outlinedPrimary": {
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
      "&.MuiButton-outlinedDanger": {
        "&:hover": {
          backgroundColor: theme.palette.danger.main,
          color: theme.palette.common.white,
        },
      },
    },
  };
};

export default function LeeButton(props) {
  const { title, variant, size, fullWidth, sx, children, ...rest } = props;

  const classes = useStyles();

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={[classes.buttonBase, sx]}
      {...rest}
    >
      {title ? title : children}
    </Button>
  );
}
