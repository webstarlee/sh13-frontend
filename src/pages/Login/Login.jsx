import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";
import { logInStart } from "store/Auth/authActions";
import { headerAction } from "store/Header";

const useStyles = () => ({
  root: {
    "&.MuiTypography-root": {
      fontFamily: "shot",
    },
  },
});

export default function Login() {
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
        Sign In
      </Typography>
      <SHInput
        size="small"
        fullWidth={true}
        label="Username"
        id="fullname"
        color="secondary"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <SHDivider />
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
      <SHDivider height="large" />
      <SHButton
        variant="outlined"
        size="large"
        fullWidth={true}
        title="Sign In"
        onClick={handleClick}
      />
      <SHDivider height="medium" />
      <Typography variant="body2" align="center">
        Don't have an account yet?
        <Link onClick={handleLinkButton} sx={{ cursor: "pointer" }}>
          &nbsp;Sign Up.
        </Link>
      </Typography>
    </SHCard>
  );
}
