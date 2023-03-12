import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import Sidebar from "./Sidebar";

const useStyles = () => {
  const theme = useTheme();
  return ({
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
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  })
};

function DashboardLayout() {

  const classes = useStyles();
  const [extended, setExtended] = useState(true);

  const handleExtended = () => {
    setExtended(!extended);
  };

  return (
    <Fragment>
      <Header sidebarHandle={handleExtended} />
      <Sidebar extended={extended} />
      <Box component="div" sx={[classes.content, extended && classes.fullContent]}>
        <Outlet />
      </Box>
    </Fragment>
  );
}

export default DashboardLayout;
