import { useTheme } from '@mui/material/styles';
import { Drawer } from "@mui/material";
import { SHNavigation } from "components";
import { navigationData } from "./data";

const drawerWidth = '250px';

const useStyles = () => {
  const theme = useTheme();
  return ({
    drawerPaper: {
      width: drawerWidth,
      display: "flex",
      top: "52px",
      position: "fixed",
      height: "100vh",
      whiteSpace: "nowrap",
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),

      color: theme.palette.type && theme.palette.grey[100],
      backgroundColor: "transparent",
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: '-250px',
    },
  })
};

export default function Sidebar(props) {
  const { extended } = props;
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      PaperProps={{
        sx: [classes.drawerPaper, !extended && classes.drawerPaperClose]
      }}
      open={extended} >
      <SHNavigation data={navigationData} collapsed={!extended} />
    </Drawer >
  )
}