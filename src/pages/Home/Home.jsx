import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { SHModal, SHTab, SHCard, SHTable } from "components";
import { LocalizationProvider, MobileDatePicker  } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Home() {
  const [value, setValue] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [tableHead, setTableHead] = React.useState([
    { id: 'name', label: 'Name' },
    { id: 'code', label: 'ISO\u00a0Code'},
    {
      id: 'population',
      label: 'Population',
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ]);
  const [tableBody, setTableBody] = React.useState([
    ['ace', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['sd', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['fa', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['d', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['acsde', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['ac1e', 'Hallin Ace', 1920192, 102841, 10303.92],
  ]);
  const tabHeader = [
    { label: "First" },
    { label: "Second" },
    { label: "Third" },
  ];
  const tabContent = [
    <SHCard>first</SHCard>,
    <SHCard>second</SHCard>,
    <SHCard>third</SHCard>,
  ];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      component="div"
      sx={{
        mt: 3,
        "& .MuiTextField-root": { my: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <SHCard>
        <TextField
          id="exampleInput"
          label="Example input"
          variant="outlined"
        />
      </SHCard>
      <SHCard>
        <TextField
          id="exampleTextarea"
          label="Example textarea"
          multiline
          rows={4}
        />
      </SHCard>
      <SHCard>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Example switch"
        />
      </SHCard>
      <SHCard>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Example date"
            value={value}
            closeOnSelect={true}
            orientation="landscape"
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </SHCard>
      <SHCard>
        <Button variant="contained" onClick={handleOpen}>
          Open modal
        </Button>
        <SHModal
          open={open}
          onclose={handleClose}
          cover={false}
          header="Test Modal"
          size="large"
        >
          ... This is SHModal Test ...
        </SHModal>
        <SHTable
          THeadData={tableHead}
          TBodyData={tableBody}
        >
        </SHTable>
      </SHCard>
      <SHCard>
        <SHTab tabHeader={tabHeader} tabContent={tabContent} />
      </SHCard>
    </Box>
  );
}
