import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";
import { LeeInput, LeeDivider, LeeButton, LeeCard } from "components";

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
    <LeeCard component="form" autoComplete="off">
      <Typography variant="h3" align="center" sx={classes.root} gutterBottom>
        Sign Up
      </Typography>
      <LeeInput
        size="small"
        fullWidth={true}
        label="Username"
        id="username"
        color="secondary"
      />
      <LeeDivider height="small" />
      <LeeInput
        size="small"
        fullWidth={true}
        label="UserId"
        id="userid"
        color="secondary"
      />
      <LeeDivider height="small" />
      <LeeInput
        size="small"
        fullWidth={true}
        label="Password"
        id="password"
        color="secondary"
        type="password"
      />
      <LeeDivider height="small" />
      <LeeInput
        size="small"
        fullWidth={true}
        label="Password Confirm"
        id="password_confirm"
        color="secondary"
        type="password"
      />
      <LeeDivider height="medium" />
      <LeeButton
        variant="outlined"
        size="large"
        fullWidth={true}
        title="Sign Up"
      />
      <LeeDivider height="small" />
      <Typography variant="body2" align="center">
        Already have an Account?
        <Link onClick={handleLinkButton} sx={{cursor: "pointer"}}>&nbsp;Sign In.</Link>
      </Typography>
    </LeeCard>
  );
}
