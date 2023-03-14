import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyle = () => {
  const theme = useTheme();
  return {
    root: {
      minHeight: "30px",
    },
    tab: {
      transition: "0.3s",
      margin: theme.spacing(0, 0.25),
      padding: theme.spacing(1, 2),
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
      border: "1px solid transparent",
      borderBottom: theme.spacing(0),
      fontSize: "14px",
      fontFamily: "chakra",
      minHeight: "40px",
      "&:hover": {
        borderColor: theme.palette.grey[600],
        color: theme.palette.primary.dark,
      },
      color: theme.palette.primary.main,
      "&.Mui-selected": {
        borderColor: theme.palette.grey[500],
        color: theme.palette.common.white,
      },
    },
  };
};

const StyledTabs = styled((props) => <Tabs {...props} />)({
  minHeight: "40px",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});

export default function SHTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { tabHeader, tabContent } = props;

  const classes = useStyle();
  const theme = useTheme();
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Box component="div" sx={{ borderBottom: 1, borderColor: theme.palette.grey[500] }}>
        <StyledTabs
          classes={classes.root}
          value={value}
          onChange={handleChange}
          aria-label="sh tab"
        >
          {tabHeader && tabHeader.length
            ? tabHeader.map((header, key) => {
                return (
                  <Tab
                    key={key}
                    disableRipple
                    sx={classes.tab}
                    label={header.label}
                    {...a11yProps(key)}
                  />
                );
              })
            : ""}
        </StyledTabs>
      </Box>
      {tabContent && tabContent.length
        ? tabContent.map((content, key) => {
            return (
              <TabPanel key={key} value={value} index={key}>
                {content}
              </TabPanel>
            );
          })
        : ""}
    </Box>
  );
}
