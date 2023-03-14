import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
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
  Avatar,
  ListItemIcon
} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logout from '@mui/icons-material/Logout';
import { logOut } from 'store/Auth/authActions';
import { useNavigate } from "react-router-dom";
const useStyles = () => {
  const theme = useTheme();
  return {
    appBar: {
      boxShadow: "none",
      backgroundImage: "unset",
      zIndex: 1201
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
    menuPaper: {
      background: theme.palette.appbar.main,
      overflow: 'visible',
      boxShadow: "0 0.5rem 1rem rgb(255 255 255 / 8%)",
      borderRadius: "0px",
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      border: `1px solid ${theme.palette.secondary.light}`,
      minWidth: "160px",
      "& .MuiMenuItem-root": {
        fontFamily: "chakra_medium",
        color: theme.palette.secondary.lightBold,
        textTransform: "uppercase",
        fontSize: "11px",
        letterSpacing: "0.15em",
        justifyContent: "space-between",
        "&:hover": {
          color: theme.palette.common.white,
          "& .MuiListItemIcon-root>svg": {
            color: theme.palette.common.white,
          }
        }
      },
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
    }
  };
};

export default function Header(props) {
  const {sidebarHandle} = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(logOut());
  };

  const linkPage = (link) =>{
    navigate(link)
  }

  return (
    <AppBar
      position="fixed"
      color="appbar"
      enableColorOnDark={true}
      sx={classes.appBar}
    >
      <Toolbar sx={classes.toolBar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={classes.sidebarToggleBtn}
          onClick={sidebarHandle}
        >
          <Divider component="span" light={true} sx={classes.hamburger} />
        </IconButton>
        <Typography variant="h6" component="div" sx={classes.logoImg}>
          <Fade
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "500ms" }}
          >
            <Typography variant="h6" sx={{fontFamily: "chakra_bold"}}>SH13</Typography>
          </Fade>
          <Fade
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "100ms" }}
          >
            <Typography component="div" sx={classes.ArrowTopLeft}></Typography>
          </Fade>
          <Fade
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "200ms" }}
          >
            <Typography component="div" sx={classes.ArrowTopRight}></Typography>
          </Fade>
          <Fade
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "300ms" }}
          >
            <Typography
              component="div"
              sx={classes.ArrowBottomRight}
            ></Typography>
          </Fade>
          <Fade
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "400ms" }}
          >
            <Typography
              component="div"
              sx={classes.ArrowBottomLeft}
            ></Typography>
          </Fade>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Fade
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "600ms" }}
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
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "700ms" }}
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
            in={true}
            {...{ timeout: 500 }}
            style={{ transitionDelay: "800ms" }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-haspopup="true"
              aria-controls={Boolean(anchorEl) ? 'account-menu' : undefined}
              aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Fade>
        </Box>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: classes.menuPaper,
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={()=>linkPage("/profile")}>
            Profile
            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
              <AccountCircleOutlinedIcon color="primary" fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem onClick={()=>linkPage("/setting")}>
            Setting
            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
              <SettingsOutlinedIcon color="primary" fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <Divider />
          <MenuItem onClick={logout}>
            Sign out
            <ListItemIcon sx={{justifyContent: 'flex-end'}}>
              <Logout color="primary" fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
