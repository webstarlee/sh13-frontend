import React, { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useTheme } from '@mui/material/styles';
import { SHInput, SHModal, SHCardBorder } from 'components';
import {
  usePickerLayout,
  pickersLayoutClasses,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
} from '@mui/x-date-pickers/PickersLayout';

const useStyles = () => ({
  root: {
    backgroundColor: "#ddd",
  },
});

function CustomLayout(props) {
  const theme = useTheme();
  const { toolbar, tabs, content, actionBar } = usePickerLayout(props);

  return (
    <PickersLayoutRoot
      ownerState={props}
      sx={{
        overflow: 'auto',
        [`.${pickersLayoutClasses.actionBar}`]: {
          gridColumn: 2,
          gridRow: 1,
        },
      }}
    >
      <PickersLayoutContentWrapper
        sx={{
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
          }
        }}
        className={pickersLayoutClasses.contentWrapper}>
        {tabs}
        {content}
        {actionBar}
        <SHCardBorder />
      </PickersLayoutContentWrapper>
    </PickersLayoutRoot>
  );
}

export default function SHDatePicker(props) {

  const classes = useStyles();

  const [value, setValue] = useState('2023/03/15');
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <SHInput
        size="small"
        fullWidth={true}
        label="Username"
        id="fullname"
        color="secondary"
        name="username"
        value={value}
        readOnly={true}
        placeholder='asdf'
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
            defaultValue={dayjs('2022-04-17')}
            slots={{
              layout: CustomLayout
            }}
          />
        </LocalizationProvider>
      </SHModal>
    </>
  );
}
