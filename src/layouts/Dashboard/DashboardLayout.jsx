import React, { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [extended, setExtended] = useState(true);
  const calledOnce = React.useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    return () => {
      console.log("C")
      const accessToken = window.sessionStorage.getItem("access_token");
      if (!accessToken) {
        navigate("/auth/login", { replace: true });
      } else {
        if (currentUser === null) {
          dispatch(getUserInfo());
          calledOnce.current = true;
        }
      }
    }
  }, [currentUser]);

  useEffect(() => {
    console.log("B")
    const accessToken = window.sessionStorage.getItem("access_token");
    if (!accessToken && currentUser === null) {
      console.log("D");
      navigate("/auth/login", { replace: true });
    }
  }, [currentUser]);

  const handleExtended = () => {
    setExtended(!extended);
  };

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
