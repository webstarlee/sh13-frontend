import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();
  return ({
    root: {
      borderBottomWidth: "0px",
      width: "100%",
      marginTop: theme.spacing(3),
    },
    label: {
      fontSize: "1.25rem",
      left: "0px",
      top: "-30px",
      fontFamily: 'chakra',
      transform: 'scale(0.75)',
      "&.Mui-focused": {
        color: "rgba(255,255,255,.75)"
      }
    },
    select: {
      backgroundColor: "rgba(255,255,255, 0.05)!important",
      height: theme.spacing(5),
      borderRadius: 0,
      "&.MuiInputBase-root": {
        color: "rgba(255,255,255,.75)",
        fontFamily: 'chakra',
        "&>fieldset.MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
          borderRadius: '0px',
          top: "0px",
          "&>legend": {
            display: "none",
          }
        }
      },
    },
    menuPaper: {
      background: theme.palette.appbar.main,
      overflow: 'visible',
      boxShadow: "0 0.5rem 1rem rgb(255 255 255 / 8%)",
      borderRadius: "0px",
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
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
    },
    smallMenuPaper: {
      "& .MuiMenuItem-root": {
        fontSize: "9px",
      },
    },
    normal: {
      
    },
    small: {
      height: "22px",
      "& .MuiSelect-select": {
        fontSize: "12px",
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0)
      },
    },
  })
};

export default function SHSelect(props) {

  const { value, setValue, id, label, selectData, size = "normal" } = props;

  const classes = useStyles();
  const labelId = id + "-label";

  return (
    <FormControl sx={classes.root}>
      <InputLabel sx={classes.label} id={labelId} >{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        onChange={setValue}
        displayEmpty
        sx={[classes.select, classes[size]]}
        MenuProps={{
          PaperProps: {
            sx: [classes.menuPaper, classes[`${size}MenuPaper`]]
          }
        }}
      >
        {selectData.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}
