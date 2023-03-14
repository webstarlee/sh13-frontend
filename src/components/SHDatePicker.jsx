import React, { useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SHInput, SHModal } from 'components';
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
  const { toolbar, tabs, content, actionBar } = usePickerLayout(props);

  return (
    <PickersLayoutRoot
      ownerState={props}
      sx={{
        overflow: 'auto',
        [`.${pickersLayoutClasses.actionBar}`]: {
          gridColumn: 1,
          gridRow: 2,
        },
        [`.${pickersLayoutClasses.toolbar}`]: {
          gridColumn: 2,
          gridRow: 1,
        },
      }}
    >
      {toolbar}
      <PickersLayoutContentWrapper
        
        sx={{
          [`.${pickersLayoutClasses.contentWrapper}`]: {
            minHeight: "200px"
          }
        }}
        >
        {tabs}
        {content}
        {actionBar}
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
