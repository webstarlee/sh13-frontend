import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Box } from "@mui/material";
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const useStyles = () => ({
  
});

export default function CustomizedSnackbars() {
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
        <Box component="div" sx={classes.Toast}>
          <Box component="div" sx={classes.ToastBody}>
            <GppMaybeIcon />
          </Box>
          <Box component="div" sx={classes.ToastArrow}>
            <Box component="div" sx={classes.ToastArrowTopLeft}></Box>
            <Box component="div" sx={classes.ToastArrowTopRight}></Box>
            <Box component="div" sx={classes.ToastArrowBottomRight}></Box>
            <Box component="div" sx={classes.ToastArrowBottomLeft}></Box>
          </Box>
        </Box>
      </Snackbar>
    </Stack>
  );
}
