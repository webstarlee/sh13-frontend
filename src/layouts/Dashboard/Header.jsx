import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  Badge,
  Box,
  Fade,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { logOut } from 'store/Auth/authActions';

const useStyles = () => {
  const theme = useTheme();
  return {
    appBar: {
      boxShadow: "none",
      backgroundImage: "unset",
    },
    toolBar: {
      minHeight: "52px",
      [theme.breakpoints.up("sm")]: {
        minHeight: "52px",
      },
    },
    hamburger: {
      width: "1.625rem",
      display: "block",
      height: "1px",
      background: "rgba(255,255,255,.4)",
      transition: "all .2s linear",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "1px",
        top: "-6px",
        left: 0,
        background: "rgba(255,255,255,0.4)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "1px",
        bottom: "-7px",
        left: 0,
        background: "rgba(255,255,255,0.4)",
      },
    },
    sidebarToggleBtn: {
      height: "42px",
      width: "42px",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: "0px",
    },
    logoImg: {
      marginLeft: "15px",
      padding: "0 10px",
      position: "relative",
      lineHeight: "1.5",
      height: "30px",
    },
    ArrowTopLeft: {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: 0,
      left: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "1px",
        height: "9px",
        background: "#fff",
        opacity: ".75",
        top: "1px",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "1px",
        background: "#fff",
        opacity: ".75",
      },
    },
    ArrowTopRight: {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: 0,
      right: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "1px",
        height: "9px",
        background: "#fff",
        opacity: ".75",
        top: "1px",
        right: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "1px",
        background: "#fff",
        opacity: ".75",
      },
    },
    ArrowBottomRight: {
      width: "10px",
      height: "10px",
      position: "absolute",
      bottom: 0,
      right: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "1px",
        height: "9px",
        background: "#fff",
        opacity: ".75",
        bottom: "1px",
        right: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "1px",
        background: "#fff",
        opacity: ".75",
        bottom: 0,
      },
    },
    ArrowBottomLeft: {
      width: "10px",
      height: "10px",
      position: "absolute",
      bottom: 0,
      left: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "1px",
        height: "9px",
        background: "#fff",
        opacity: ".75",
        bottom: "1px",
        left: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "1px",
        background: "#fff",
        opacity: ".75",
        bottom: 0,
      },
    },
  };
};

export default function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(logOut());
    window.sessionStorage.clear();
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      color="appbar"
      enableColorOnDark="true"
      sx={classes.appBar}
    >
      <Toolbar sx={classes.toolBar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={classes.sidebarToggleBtn}
        >
          <Divider component="span" light="true" sx={classes.hamburger} />
        </IconButton>
        <Typography variant="h6" component="div" sx={classes.logoImg}>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "1400ms" }}
          >
            <Typography variant="h6">SH13</Typography>
          </Fade>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "500ms" }}
          >
            <Typography component="div" sx={classes.ArrowTopLeft}></Typography>
          </Fade>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "700ms" }}
          >
            <Typography component="div" sx={classes.ArrowTopRight}></Typography>
          </Fade>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "900ms" }}
          >
            <Typography
              component="div"
              sx={classes.ArrowBottomRight}
            ></Typography>
          </Fade>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "1100ms" }}
          >
            <Typography
              component="div"
              sx={classes.ArrowBottomLeft}
            ></Typography>
          </Fade>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "1700ms" }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} variant="dot" color="error">
                <EmailOutlinedIcon />
              </Badge>
            </IconButton>
          </Fade>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "1900ms" }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} variant="dot" color="error">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
          </Fade>
          <Fade
            in="true"
            {...{ timeout: 500 }}
            style={{ transitionDelay: "2100ms" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Fade>
        </Box>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
