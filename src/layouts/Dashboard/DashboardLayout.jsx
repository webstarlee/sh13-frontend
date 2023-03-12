import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getUserInfo } from "store/Auth/authActions";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      boxShadow: "none",
      backgroundImage: "unset",
    },
    content: {
      paddingTop: "52px",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    fullContent: {
      marginLeft: "210px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: '-0px',
      },
      paddingLeft: "0.1rem",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  };
};

function DashboardLayout() {
  const classes = useStyles();
  const [extended, setExtended] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const handleExtended = () => {
    setExtended(!extended);
  };

  const accessToken = window.sessionStorage.getItem("access_token");
  if (!accessToken) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <Fragment>
      <Header sidebarHandle={handleExtended} />
      <Sidebar extended={extended} />
      <Box
        component="div"
        sx={[classes.content, extended && classes.fullContent]}
      >
        <Outlet />
      </Box>
    </Fragment>
  );
}

export default DashboardLayout;
