import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";
import { registerStart } from "store/Auth/authActions";
import { headerAction } from "store/Header";
import { useTranslation } from 'react-i18next';

const useStyles = () => ({
  root: {
    "&.MuiTypography-root": {
      fontFamily: "shot",
    },
  },
});

export default function Register() {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleClick = () => {
    if (!credentials.fullname) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Fullname field is required",
        })
      );
      return;
    }
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
    if (credentials.password !== credentials.confirmPassword) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Password must match----",
        })
      );
      return;
    }

    dispatch(registerStart(credentials));
  };
  const handleLinkButton = () => {
    navigate("/auth/login");
  };

  return (
    <SHCard component="form" autoComplete="off">
      <Typography variant="h3" align="center" sx={classes.root} gutterBottom>
        {t('auth.sign_up')}
      </Typography>
      <SHInput
        size="small"
        fullWidth={true}
        label={t('auth.fullname')}
        id="fullname"
        color="secondary"
        name="fullname"
        value={credentials.fullname}
        onChange={handleChange}
      />
      <SHDivider height="small" />
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
      <SHDivider height="small" />
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
      <SHDivider height="small" />
      <SHInput
        size="small"
        fullWidth={true}
        label={t('auth.password_confirm')}
        id="password_confirm"
        color="secondary"
        type="password"
        name="confirmPassword"
        value={credentials.confirmPassword}
        onChange={handleChange}
      />
      <SHDivider height="medium" />
      <SHButton
        variant="outlined"
        size="large"
        fullWidth={true}
        title={t('auth.sign_up')}
        onClick={handleClick}
      />
      <SHDivider height="small" />
      <Typography variant="body2" align="center" sx={{ fontFamily: "chakra" }}>
        {t('auth.already_have_account')}
        <Link onClick={handleLinkButton} sx={{ cursor: "pointer" }}>
          &nbsp;{t('auth.sign_in')}.
        </Link>
      </Typography>
    </SHCard>
  );
}
