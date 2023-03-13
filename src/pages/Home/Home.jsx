import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { SHModal } from "components";

export default function Home() {
  const [value, setValue] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            header="Test Modal"
            size="small"
          >
            ... This is SHModal Test ...
          </SHModal>
        </div>
      </Container>
    </Box>
  );
}
