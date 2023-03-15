import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Collapse,
  lighten,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import clsx from "clsx";

const useStyles = () => {
  const theme = useTheme();
  return ({
    root: {
      width: "100%",
      margin: "4px auto",
      borderRadius: "8px",
      transition: "all .5s",
      overflow: "hidden",
    },
    listItem: {
      transition: "all .5s",
      padding: '0.3rem 1rem',
      display: "flex",
      flexDirection: "column",
      cursor: 'pointer',
      "& .MuiTypography-root": {
        fontSize: "14px",
      },
      "& :hover": {
        color: theme.palette.common.white,
      }
    },
    listText: {
      flex: "1",
      fontSize: "14px",
      "&>span": {
        fontFamily: "chakra",
      }
    },
    listLink: {
      padding: "0 7px",
      textDecoration: "none",
      transition: "all .5s",
      display: "flex",
      alignItems: "center",
      width: "100%",
      position: 'relative',
      color: theme.palette.secondary.lightBold,
      justifyContent: 'flex-end',
    },
    listIcon: {
      color: "inherit",
      justifyContent: "center",
      minWidth: "0px",
      marginRight: '1.3rem',
      "& > svg": {
        fontSize: "1.25rem"
      }
    },
    listIconActive: {
      color: theme.palette.primary.main,
      justifyContent: "center",
      minWidth: "0px",
      marginRight: '1.3rem',
      "& > svg": {
        fontSize: "1.25rem"
      }
    },
    hiddenStyle: {
      marginLeft: "20px",
    },
    listItemText: {
      [theme.breakpoints.up("sm")]: {
        fontSize: 9,
      },
    },
    expanded: {
      backgroundColor: lighten(theme.palette.secondary.main, 0.1),
    },
    selected: {
      color: theme.palette.primary.main,
    },
  })
};

const NavigationItem = ({ item, collapsed }) => {
  const { pathname } = useLocation();
  const classes = useStyles();

  // If navigation is nested
  const [open, setOpen] = React.useState(false);
  const nested = typeof item.navigationData == "object" ? true : false;

  const handleClick = () => {
    setOpen(!open);
  };

  // Persisting the nested navigation open state on page refresh
  React.useEffect(() => {
    if (pathname.search(new RegExp(item.url, "g")) !== -1) {
      setOpen(true);
    }
  }, [pathname, item.url]);
  return (
    <Box
      component='div'
      sx={classes.root}>
      <ListItem
        sx={classes.listItem}
        onClick={handleClick}
        disableGutters>
        <Box
          component={!nested ? Link : "div"}
          to={`${item.url}`}
          sx={[
            classes.listLink
          ]}>
          <ListItemIcon sx={[
            nested && open ? classes.listIconActive : classes.listIcon,
            pathname.search(new RegExp(item.url, "g")) !== -1 &&
            !nested &&
            classes.selected
          ]}>
            {(item.icon && <item.icon />) || ""}
          </ListItemIcon>
          {
            !item.icon ?
              <ListItemText sx={[
                classes.hiddenStyle,
                pathname.search(new RegExp(item.url, "g")) !== -1 &&
                !nested &&
                classes.selected
              ]}>
                {item.name}
              </ListItemText>
              : <ListItemText
                  sx={[
                    classes.listText,
                    pathname.search(new RegExp(item.url, "g")) !== -1 &&
                    !nested &&
                    classes.selected
                  ]}>
                {item.name}
              </ListItemText>
          }


          {nested &&
            (open ? (
              <ExpandLess fontSize={"default"} sx={classes.expand} />
            ) : (
              <ExpandMore fontSize={"default"} />
            ))}
        </Box>
      </ListItem>

      {
        nested && (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List disablePadding>
              {item.navigationData.map((nestedItem, i) => {
                return (
                  <NavigationItem
                    key={i}
                    item={nestedItem}
                    collapsed={collapsed}
                  />
                );
              })}
            </List>
          </Collapse>
        )
      }
    </Box >
  );
};

export default NavigationItem;