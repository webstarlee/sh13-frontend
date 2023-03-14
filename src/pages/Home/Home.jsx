import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { SHModal, SHTab, SHCard } from "components";

export default function Home() {
  const [value, setValue] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  return (
    <Box
      component="form"
      sx={{
        mt: 3,
        "& .MuiTextField-root": { my: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="xl">
        <div>
          <TextField
            id="exampleInput"
            label="Example input"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="exampleTextarea"
            label="Example textarea"
            multiline
            rows={4}
          />
        </div>
        <div>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Example switch"
          />
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Example date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
        <div>
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
        </div>
        <SHCard>
          <SHTab tabHeader={tabHeader} tabContent={tabContent} />
        </SHCard>
      </Container>
    </Box>
  );
}
