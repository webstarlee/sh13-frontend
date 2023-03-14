import React, { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTheme } from '@mui/material/styles';
import { DialogActions, Button } from "@mui/material";
import { SHInput, SHModal, SHCardBorder, SHButton } from 'components';
import {
  usePickerLayout,
  pickersLayoutClasses,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
} from '@mui/x-date-pickers/PickersLayout';

const useStyles = () => {
  const theme = useTheme();
  return ({
    root: {
      backgroundColor: "#ddd",
    },
    layoutRoot: {
      overflow: 'auto',
      [`.${pickersLayoutClasses.actionBar}`]: {
        gridColumn: 2,
        gridRow: 1,
      },
    },
    layoutWrapper: {
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "15px",
        right: "15px",
        top: 0,
        bottom: 0,
        borderTop: `1px solid ${theme.palette.common.white}`,
        borderBottom: `1px solid ${theme.palette.common.white}`,
        opacity: "0.3",
        zIndex: -1,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: "15px",
        bottom: "15px",
        left: 0,
        right: 0,
        borderRight: `1px solid ${theme.palette.common.white}`,
        borderLeft: `1px solid ${theme.palette.common.white}`,
        opacity: "0.3",
        zIndex: -1,
      },
      "& button.MuiPickersDay-root": {
        backgroundColor: 'transparent',
        "&.Mui-selected": {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.primary.main,
        },
        "&:hover": {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.primary.dark,
        }
      }
    },
    actionBar: {
      padding: `0 ${theme.spacing(3)} ${theme.spacing(2)}`
    }
  });
};

function CustomLayout(props) {
  const { tabs, content, actionBar } = usePickerLayout(props);

  const classes = useStyles();

  return (
    <PickersLayoutRoot
      ownerState={props}
      sx={classes.layoutRoot}
    >
      <PickersLayoutContentWrapper
        sx={classes.layoutWrapper}
        className={pickersLayoutClasses.contentWrapper}
      >
        {tabs}
        {content}
        {actionBar}
        <SHCardBorder />
      </PickersLayoutContentWrapper>
    </PickersLayoutRoot >
  );
}

function CustomActionBar(props) {
  const classes = useStyles();
  const { onCancel, onClose, actions, className } = props;

  if (actions == null || actions.length === 0) {
    return null;
  }

  const handleCancelBtn = () => {
    onCancel();
    onClose();
  }

  return (
    <DialogActions sx={classes.actionBar} className={className}>
      <SHButton
        variant="outlined"
        size="small"
        title="Cancel"
        onClick={handleCancelBtn}
      />
      <SHButton
        variant="outlined"
        size="small"
        title="Ok"
        onClick={onClose}
      />
    </DialogActions>
  );
}

export default function SHDatePicker(props) {
  const {value, setValue, label, id, name, placeholder} = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <SHInput
        size="small"
        fullWidth={true}
        label={label}
        id={id}
        color="secondary"
        name={name}
        value={dayjs(value).format('YYYY-MM-DD')}
        readOnly={true}
        placeholder={placeholder}
        onClick={() => setOpen(true)}
      />
      <SHModal
        open={open}
        cover={true}
        onclose={handleClose}
        size="large"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            defaultValue={value}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slots={{
              layout: CustomLayout,
              actionBar: CustomActionBar,
            }}
            slotProps={{
              layout: { value: value },
              actionBar: { onClose: handleClose },
            }}
          />
        </LocalizationProvider>
      </SHModal>
    </>
  );
}
