import React from "react";
import {
  Box,
  Modal,
  Typography,
  Fade,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { SHCardBorder } from 'components';

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
      [theme.breakpoints.down('md')]: {
        padding: "0 15px",
      },
      "& .MuiModal-backdrop": {
        backgroundColor: `${theme.palette.modalFade.main}`,
      }
    },
    modalDialog: {
      transform: 'none',
      margin: '1.75rem auto',
      position: 'relative',
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
      },
      outline: '0',
    },
    coverContent: {
      "&::before": {
        borderTop: 'none',
        borderBottom: 'none',
      },
      "&::after": {
        borderRight: "none",
        borderLeft: "none",
      }
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
      position: 'relative',
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
      display: 'flex',
      flexDirection: "column",
      alignItems: "flex-end"
    },
    modalCover: {
      minHeight: '100%',
      marginTop: '0',
      marginBottom: 0,
      display: 'flex',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'center',
    },
    noneArrow: {
      display:'none',
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
    cover,
  } = props;

  if (size === "small") {
    var width = { maxWidth: '300px' }
  } else if (size === "large") {
    width = { maxWidth: '800px' }
  }

  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onclose}
      sx={classes.modal}
    >
      <Fade in={open}>
      <Box component="div"
        sx={cover ? classes.modalCover : [classes.modalDialog, width]}
      >
        <Box component="div" sx={cover ? classes.coverContent : classes.modalContent}>
          {header ?
            <Box component="div" sx={classes.modalHeader}>
              <Typography sx={classes.modalTitle}>
                {header}
              </Typography>
            </Box> : ''
          }
          <Box component="div" sx={classes.modalBody}>
            {children}
          </Box>
        </Box>
        {cover? "": <SHCardBorder />}
      </Box>
      </Fade>
    </Modal >
  );
}
