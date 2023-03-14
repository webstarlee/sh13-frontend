import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";
import { registerStart } from "store/Auth/authActions";
import { headerAction } from "store/Header";

const useStyles = () => ({
  root: {
    "&.MuiTypography-root": {
      fontFamily: "shot",
    },
  },
});

export default function Register() {
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
        Sign Up
      </Typography>
      <SHInput
        size="small"
        fullWidth={true}
        label="Fullname"
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
        label="username"
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
        label="Password"
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
        label="Password Confirm"
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
        title="Sign Up"
        onClick={handleClick}
      />
      <SHDivider height="small" />
      <Typography variant="body2" align="center">
        Already have an Account?
        <Link onClick={handleLinkButton} sx={{ cursor: "pointer" }}>
          &nbsp;Sign In.
        </Link>
      </Typography>
    </SHCard>
  );
}
