import React from "react";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();
  return ({
    cardArrow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },
    cardArrowTopLeft: {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: 0,
      left: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        top: "2px"
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
      }
    },
    cardArrowTopRight: {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: 0,
      right: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        top: "2px",
        right: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
      }
    },
    cardArrowBottomRight: {
      width: "10px",
      height: "10px",
      position: "absolute",
      bottom: 0,
      right: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: "2px",
        right: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: 0,
      }
    },
    cardArrowBottomLeft: {
      width: "10px",
      height: "10px",
      position: "absolute",
      bottom: 0,
      left: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: "2px",
        left: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: 0,
      }
    },
  })
};

export default function SHCardBorder() {
  const classes = useStyles();

  return (
    <Box component="div" sx={classes.cardArrow}>
      <Box component="div" sx={classes.cardArrowTopLeft}></Box>
      <Box component="div" sx={classes.cardArrowTopRight}></Box>
      <Box component="div" sx={classes.cardArrowBottomRight}></Box>
      <Box component="div" sx={classes.cardArrowBottomLeft}></Box>
    </Box>
  );
}
