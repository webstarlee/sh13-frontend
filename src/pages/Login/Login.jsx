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

export default function Login() {

  const navigate = useNavigate();
  const classes = useStyles();

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
        label="Username"
        id="username"
        color="secondary"
      />
      <SHDivider />
      <SHInput
        size="small"
        fullWidth={true}
        label="Password"
        id="password"
        color="secondary"
        type="password"
      />
      <SHDivider height="large" />
      <SHButton
        variant="outlined"
        size="large"
        fullWidth={true}
        title="Sign In"
      />
      <SHDivider height="medium" />
      <Typography variant="body2" align="center">
        Don't have an account yet? 
        <Link onClick={handleLinkButton} sx={{cursor: "pointer"}}>&nbsp;Sign Up.</Link>
      </Typography>
    </SHCard>
  );
}
