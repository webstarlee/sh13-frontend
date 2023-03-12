import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Box, Typography } from "@mui/material";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = () => ({
  toastRoot: {
    position: "fixed",
    top: "3.25rem",
    paddingTop: "1rem",
    width: "21.875rem",
    right: "0",
    paddingRight: "1rem",
  },
  toast: {
    width: "350px",
    maxWidth: "100%",
    fontSize: ".875rem",
    pointerEvents: "auto",
    backgroundColor: "rgba(32,43,54,.85)",
    backgroundClip: "padding-box",
    border: "1px solid rgba(255,255,255,.15)",
    boxShadow: "0 0.5rem 1rem rgb(255 255 255 / 8%)",
    borderRadius: 0,
  },
  toastHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0.75rem",
    color: "#fff",
    backgroundColor: "rgba(32,43,54,.85)",
    backgroundClip: "padding-box",
    borderBottom: "1px solid rgba(255,255,255,.15)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  toastBody: {
    padding: "0.75rem",
    wordWrap: "break-word",
  },
  toastTitle: {
    marginRight: "auto",
  },
  toastClose: {
    cursor: "pointer",
  }
});

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Box component="div" sx={classes.toastRoot}>
          <Box component="div" sx={classes.toast}>
            <Box component="div" sx={classes.toastHeader}>
              <GppMaybeIcon color="error" />
              <Typography sx={classes.toastTitle}>{"Error"}</Typography>
              <CloseIcon onClick={handleClose} sx={classes.toastClose} />
            </Box>
            <Box component="div" sx={classes.toastBody}>
              sdfsdfsfsffssdfsdf
            </Box>
          </Box>
        </Box>
      </Snackbar>
    </Stack>
  );
}
