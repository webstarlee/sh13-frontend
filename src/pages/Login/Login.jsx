import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";
import { logInStart } from "store/Auth/authActions";
import { headerAction } from "store/Header";
import { useTranslation } from 'react-i18next';

const useStyles = () => ({
  root: {
    "&.MuiTypography-root": {
      fontFamily: "shot",
    },
  },
});

export default function Login() {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleClick = () => {
    if (!credentials.username) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Username field is required",
        })
      );
      return;
    }
    if (!credentials.password) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Password field is required",
        })
      );
      return;
    }
    dispatch(logInStart(credentials));
  };

  const handleLinkButton = () => {
    navigate("/auth/register");
  };

  return (
    <SHCard component="form" autoComplete="off">
      <Typography variant="h3" align="center" sx={classes.root} gutterBottom>
        {t('auth.sign_in')}
      </Typography>
      <SHInput
        size="small"
        fullWidth={true}
        label={t('auth.username')}
        id="username"
        color="secondary"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <SHDivider />
      <SHInput
        size="small"
        fullWidth={true}
        label={t('auth.password')}
        id="password"
        color="secondary"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <SHDivider height="large" />
      <SHButton
        variant="outlined"
        size="large"
        fullWidth={true}
        title={t('auth.sign_in')}
        onClick={handleClick}
      />
      <SHDivider height="medium" />
      <Typography variant="body2" align="center" sx={{fontFamily: "chakra"}}>
        {t('auth.dont_have_account')}
        <Link onClick={handleLinkButton} sx={{ cursor: "pointer" }}>
          &nbsp;{t('auth.sign_up')}.
        </Link>
      </Typography>
    </SHCard>
  );
}
