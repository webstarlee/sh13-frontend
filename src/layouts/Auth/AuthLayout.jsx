import React from "react";
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';

const useStyles = () => ({
  box: {
    minHeight: "100vh",
    padding: "3rem 1rem",
    display: "flex",
    alignItems: "center",
  },
  content: {
    maxWidth: "22.5rem",
    margin: "0 auto",
    position: "relative",
    flex: 1,
  }
});

function AuthLayout() {

  const classes = useStyles();

  return (
    <Box sx={classes.box}>
      <Box sx={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
