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
      width: "95%",
      margin: "4px auto",
      borderRadius: "8px",
      transition: "all .5s",
      overflow: "hidden",
    },
    listItem: {
      transition: "all .5s",
      display: "flex",
      flexDirection: "column",
    },
    listLink: {
      padding: "0 15px",
      textDecoration: "none",
      color: "inherit",
      transition: "all .5s",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    listIcon: {
      color: "inherit",
      justifyContent: "center",
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
      backgroundColor: lighten(theme.palette.secondary.main, 0.3),
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
    <div
      className={clsx(
        classes.root,
        nested && open && classes.expanded,
        pathname.search(new RegExp(item.url, "g")) !== -1 &&
          !nested &&
          classes.selected
      )}>
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
          <ListItemIcon sx={classes.listIcon}>
            {(item.icon && <item.icon />) || ""}
          </ListItemIcon>
          <ListItemText>
            {item.name}
          </ListItemText>
          {nested &&
            (open ? (
              <ExpandLess fontSize={"default"} />
            ) : (
              <ExpandMore fontSize={"default"} />
            ))}
        </Box>
      </ListItem>

      {nested && (
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
      )}
    </div>
  );
};

export default NavigationItem;