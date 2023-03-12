import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { Box, Typography } from "@mui/material";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { closeToast } from "store/Layout/layoutActions";

const useStyles = () => ({
  toastRoot: {
    position: "fixed",
    top: "3.25rem",
    paddingTop: "1rem",
    width: "21.875rem",
    right: "0",
    paddingRight: "1rem",
    fontFamily: "chakra"
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
    fontFamily: "chakra",
    marginRight: "auto",
  },
  toastClose: {
    cursor: "pointer",
  },
});

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const open = useSelector((state) => state.layout.openToast);
  const data = useSelector((state) => state.layout.toastData);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeToast());
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Box component="div" sx={classes.toastRoot}>
        <Box component="div" sx={classes.toast}>
          <Box component="div" sx={classes.toastHeader}>
            {data.type && <TIcon type={data.type} />}
            &nbsp;
            <Typography sx={classes.toastTitle}>
              {data && data.title}
            </Typography>
            <CloseIcon onClick={handleClose} sx={classes.toastClose} />
          </Box>
          <Box component="div" sx={classes.toastBody}>
            {data && data.comment}
          </Box>
        </Box>
      </Box>
    </Snackbar>
  );
}

const TIcon = (props) => {
  var icon = <></>;
  if (props.type === "success") {
    icon = <CheckCircleOutlinedIcon color="success" />;
  } else if (props.type === "error") {
    icon = <GppMaybeOutlinedIcon color="error" />;
  }
  return icon;
};
