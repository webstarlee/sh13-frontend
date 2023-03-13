import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

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
  },
});

function AuthLayout() {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const accessToken = window.sessionStorage.getItem("access_token");
  useEffect(() => {
    if (user && user.username) {
      navigate("/home", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (accessToken) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Box sx={classes.box}>
      <Box sx={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
