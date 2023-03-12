import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import Header from './Header';

const useStyles = () => {
  const theme = useTheme();
  return ({
    root: {
      boxShadow: "none",
      backgroundImage: "unset",
    },
  })
};

function DashboardLayout() {

  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default DashboardLayout;
