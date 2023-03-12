import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";
import { logInStart, clearError } from "store/Auth/authActions";
import { openToast } from "store/Layout/layoutActions";

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
  const currentUser = useSelector((state) => state.auth.currentUser);
  const error = useSelector((state) => state.auth.error);
  const [credentials, setCredentials] = useState({ userId: "", password: "" });
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  useEffect(() => {
    if (currentUser && currentUser.user) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (error) {
      const err = Object.values(error)[0];
      dispatch(
        openToast({ IsOpen: true, title: "Error", type: "error", comment: err })
      );
      dispatch(clearError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleClick = () => {
    if (!credentials.userId) {
      dispatch(
        openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "User Id field is required",
        })
      );
      return;
    }
    if (!credentials.password) {
      dispatch(
        openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Username field is required",
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
        label="UserId"
        id="username"
        color="secondary"
        name="userId"
        value={credentials.userId}
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
