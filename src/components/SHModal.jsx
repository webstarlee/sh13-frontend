import React from "react";
import {
  Box,
  Modal,
  Typography
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CloseIcon from "@mui/icons-material/Close";

const useStyles = () => {
  const theme = useTheme();
  return ({
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '1205',
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      outline: '0',
      transition: 'opacity .55s linear',
      "& .MuiModal-backdrop": {
        backgroundColor: `${theme.palette.modalFade.main}`,
      }
    },
    modalDialog: {
      transform: 'none',
      margin: '1.75rem auto',
      position: 'relative',
      width: 'auto',
      pointerEvents: 'none',
      maxWidth: '500px',
    },
    modalContent: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      pointerEvents: 'auto',
      backgroundColor: 'none',
      backgroundClip: 'padding-box',
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: '0',
      outline: '0',
    },
    modalHeader: {
      display: 'flex',
      flexShrink: '0',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 1rem',
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
    },
    modalTitle: {
      marginBottom: '0',
      lineHeight: '1.5',
      fontSize: '20px',
      fontFamily: 'Chakra'
    },
    closeBtn: {
      padding: '0.5rem 0.5rem',
      margin: '-0.5rem -0.5rem -0.5rem auto',
      cursor: 'pointer',
      boxSizing: 'content-box',
      width: '1em',
      height: '1em',
      color: theme.palette.common.white,
      border: '0',
      borderRadius: '4px',
      opacity: '.5',
      "&:hover": {
        opacity: '1',
      }
    },
    modalBody: {
      flex: '1 1 auto',
      padding: '1rem',
    }
  })
};

export default function SHModal(props) {

  const {
    size,
    open,
    children,
    onclose,
    header,
  } = props;
  
 if(size === "medium") {
    var width = { maxWidth: '500px' }
  } else if( size === "large" ) {
    width = { maxWidth: '800px' }
  }

  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onclose}
      sx={classes.modal}
    >
      <Box component="div"
        sx={[classes.modalDialog, width]}
      >
        <Box component="div" sx={classes.modalContent}>
          <Box component="div" sx={classes.modalHeader}>
            <Typography sx={classes.modalTitle}>
              {header}
            </Typography>
            <CloseIcon sx={classes.closeBtn} onClick={onclose} />
          </Box>
          <Box component="div" sx={classes.modalBody}>
            {children}
          </Box>
        </Box>
      </Box>
    </Modal >
  );
}
