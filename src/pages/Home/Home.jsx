import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div>
          <Button variant="contained" onClick={handleOpen}>
            Open modal
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
                Close modal
              </Button>
            </Box>
          </Modal>
        </div>
      </Container>
    </Box>
  );
}
