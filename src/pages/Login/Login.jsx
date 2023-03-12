import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";
import { logInStart, clearError } from 'store/Auth/authActions';

const useStyles = () => ({
  root: {
    '&.MuiTypography-root': {
      fontFamily: "shot",
    }
  }
});

export default function Login() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const error = useSelector((state) => state.auth.error);
  const [credentials, setCredentials] = useState({ userId: '', password: '' });
  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  useEffect(() => {
    if (currentUser && currentUser.user) {
      navigate('/home');
    }
  }, [currentUser]);

  useEffect(() => {
    if (error) {
      NotificationManager.error(Object.values(error)[0]);
      dispatch(clearError())
    }
  }, [error]);

  const handleClick = () => {
    dispatch(logInStart(credentials));
  };

  const handleLinkButton = () => {
    navigate("/auth/register");
  }

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
        <Link onClick={handleLinkButton} sx={{cursor: "pointer"}}>&nbsp;Sign Up.</Link>
      </Typography>
    </SHCard>
  );
}
