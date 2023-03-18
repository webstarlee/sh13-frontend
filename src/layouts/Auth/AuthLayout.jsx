import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';
import { SHTitle, SHSelect } from "components";

const useStyles = () => {
  const theme = useTheme();
  return ({
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
    lngSelect: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
};

function AuthLayout() {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const accessToken = window.sessionStorage.getItem("access_token");
  const [language, setLanguage] = React.useState(() => {
    const lng = window.localStorage.getItem("i18nextLng").slice(0, 2);

    return lng;
  });
  const languagetData = [
    { value: "en", title: "English" },
    { value: "ru", title: "Russian" },
    { value: "ch", title: "Chinese" },
  ]

  useEffect(() => {
    if (user && user.username) {
      navigate("/home", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (accessToken) {
    return <Navigate to="/home" replace />;
  }

  const handleLanguage = (e) => {
    setLanguage(e.target.value)
    i18n.changeLanguage(e.target.value);
  }

  return (
    <Box sx={classes.box}>
      <Box sx={classes.content}>
        <SHTitle title="Login" />
        <Outlet />
      </Box>
      <Box sx={classes.lngSelect}>
        <SHSelect
          size="small"
          value={language}
          setValue={handleLanguage}
          id="account_status"
          selectData={languagetData}
        />
      </Box>
    </Box>
  );
}

export default AuthLayout;
