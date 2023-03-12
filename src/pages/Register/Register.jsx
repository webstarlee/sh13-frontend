import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { SHInput, SHDivider, SHButton, SHCard } from "components";

const useStyles = () => ({
  root: {
    '&.MuiTypography-root': {
      fontFamily: "shot",
    }
  }
});

export default function Register() {

  const navigate = useNavigate();
  const classes = useStyles();

  const handleLinkButton = () => {
    navigate("/auth/login");
  }

  return (
    <SHCard component="form" autoComplete="off">
      <Typography variant="h3" align="center" sx={classes.root} gutterBottom>
        Sign Up
      </Typography>
      <SHInput
        size="small"
        fullWidth={true}
        label="Username"
        id="username"
        color="secondary"
      />
      <SHDivider height="small" />
      <SHInput
        size="small"
        fullWidth={true}
        label="UserId"
        id="userid"
        color="secondary"
      />
      <SHDivider height="small" />
      <SHInput
        size="small"
        fullWidth={true}
        label="Password"
        id="password"
        color="secondary"
        type="password"
      />
      <SHDivider height="small" />
      <SHInput
        size="small"
        fullWidth={true}
        label="Password Confirm"
        id="password_confirm"
        color="secondary"
        type="password"
      />
      <SHDivider height="medium" />
      <SHButton
        variant="outlined"
        size="large"
        fullWidth={true}
        title="Sign Up"
      />
      <SHDivider height="small" />
      <Typography variant="body2" align="center">
        Already have an Account?
        <Link onClick={handleLinkButton} sx={{cursor: "pointer"}}>&nbsp;Sign In.</Link>
      </Typography>
    </SHCard>
  );
}
