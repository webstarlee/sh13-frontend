import React from "react";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { SHCardBorder } from 'components';

const useStyles = () => {
  const theme = useTheme();
  return ({
    card: {
      position: "relative",
      border: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "15px",
        right: "15px",
        top: 0,
        bottom: 0,
        borderTop: `1px solid ${theme.palette.common.white}`,
        borderBottom: `1px solid ${theme.palette.common.white}`,
        opacity: "0.3",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: "15px",
        bottom: "15px",
        left: 0,
        right: 0,
        borderRight: `1px solid ${theme.palette.common.white}`,
        borderLeft: `1px solid ${theme.palette.common.white}`,
        opacity: "0.3",
      }
    },
    cardBody: {
      padding: "1rem",
      position: "relative",
      zIndex: 10,
    },
  })
};

export default function SHCard(props) {
  const { component, noPadding, autoComplete, children } = props;

  const classes = useStyles();

  return (
    <Box
      component='div'
      sx={classes.card}
    >
      <Box
        component={component}
        autoComplete={autoComplete}
        sx={[classes.cardBody, noPadding && {p: 0}]}
      >
        {children}
      </Box>
      <SHCardBorder />
    </Box>
  );
}