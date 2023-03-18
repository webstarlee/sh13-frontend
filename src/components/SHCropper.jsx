import React from "react";
import {
  Box,
  Modal,
  Typography,
  Fade,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Slider,
  Tooltip,
  IconButton
} from "@mui/material";
import CropRotateOutlinedIcon from '@mui/icons-material/CropRotateOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import Rotate90DegreesCcwOutlinedIcon from '@mui/icons-material/Rotate90DegreesCcwOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Cropper from "react-cropper";
import "styles/cropper.css";

const useStyles = () => {
  const theme = useTheme();
  return ({
    card: {
      position: "relative",
      border: "none",
    },
    container: {
      height: "calc(100vh - 100px)",
      width: "calc(100vw - 80px)",
      position: "fixed",
      top: "70px",
      left: "40px"
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiBackdrop-root": {
        opacity: 1,
        backgroundColor: "#131516"
      }
    },
    loadingBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    },
    controlBtnBox: {
      position: "fixed",
      height: "50px",
      width: "calc(100vw - 20px)",
      top: "10px",
      left: "10px",
      backgroundColor: "transparent",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        m: 1,
      },
    },
    menuPaper: {
      background: theme.palette.appbar.main,
      overflow: 'visible',
      boxShadow: "0 0.5rem 1rem rgb(255 255 255 / 8%)",
      borderRadius: "0px",
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      border: `1px solid ${theme.palette.secondary.light}`,
      "& .MuiList-root": {
        display: 'flex'
      },
      "& .MuiMenuItem-root": {
        fontFamily: "chakra_medium",
        color: theme.palette.secondary.lightBold,
        textTransform: "uppercase",
        fontSize: "11px",
        letterSpacing: "0.15em",
        justifyContent: "center",
        padding: "5px 10px",
        "&:hover": {
          color: theme.palette.common.white,
          "& .MuiListItemIcon-root>svg": {
            color: theme.palette.common.white,
          }
        }
      },
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: -1,
        right: 43,
        width: 10,
        height: 10,
        backgroundColor: theme.palette.appbar.main,
        borderLeft: `1px solid ${theme.palette.secondary.light}`,
        borderTop: `1px solid ${theme.palette.secondary.light}`,
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
    rotateMenuPaper: {
      background: theme.palette.appbar.main,
      overflow: 'visible',
      boxShadow: "0 0.5rem 1rem rgb(255 255 255 / 8%)",
      borderRadius: "0px",
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      border: `1px solid ${theme.palette.secondary.light}`,
      "& .MuiList-root": {
        display: 'flex'
      },
      "& .MuiMenuItem-root": {
        fontFamily: "chakra_medium",
        color: theme.palette.secondary.lightBold,
        textTransform: "uppercase",
        fontSize: "11px",
        letterSpacing: "0.15em",
        justifyContent: "center",
        padding: "5px 10px",
        "&:hover": {
          color: theme.palette.common.white,
          "& .MuiListItemIcon-root>svg": {
            color: theme.palette.common.white,
          }
        }
      },
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: -1,
        right: 10,
        width: 10,
        height: 10,
        backgroundColor: theme.palette.appbar.main,
        borderLeft: `1px solid ${theme.palette.secondary.light}`,
        borderTop: `1px solid ${theme.palette.secondary.light}`,
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
    rotateMenuBox: {
      height: "200px",
      width: "30px"
    },
    resetBtn: {
      position: "absolute",
      top: "8px",
      left: "8px",
      border: `solid 1px ${theme.palette.cropper.main}`,
    },
    saveBtn: {
      border: `solid 1px ${theme.palette.primary.main}`,
      borderRadius: "50px",
      minWidth: "unset",
      padding: "5px",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "& .MuiSvgIcon-root": {
          color: "#fff"
        }
      }
    },
    cancelBtn: {
      border: `solid 1px ${theme.palette.danger.main}`,
      borderRadius: "50px",
      minWidth: "unset",
      padding: "5px",
      "&:hover": {
        backgroundColor: theme.palette.danger.dark,
        "& .MuiSvgIcon-root": {
          color: "#fff"
        }
      }
    }
  })
};

function imageData(image) {
  return new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader()

      fileReader.onload = () => {
        const img = new Image();

        img.onload = () => {
          resolve({ width: img.width, height: img.height, base64: img.src });
        }

        img.src = fileReader.result
      }

      fileReader.readAsDataURL(image)
    } catch (e) {
      reject(e)
    }
  })
}

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function SHCropper(props) {
  const { file, resetFile, setResult } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [ratio, setRatio] = React.useState(null);
  const [rotate, setRotate] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [ratioAnchorEl, setRatioAnchorEl] = React.useState(null);
  const [rotateAnchorEl, setRotateAnchorEl] = React.useState(null);
  const [zoomAnchorEl, setZoomAnchorEl] = React.useState(null);
  const cropperRef = React.useRef(null);
  const ratioHdata = [
    { value: 1 / 1, title: "1:1" },
    { value: 2 / 1, title: "2:1" },
    { value: 3 / 2, title: "3:2" },
    { value: 4 / 3, title: "4:3" },
    { value: 5 / 4, title: "5:4" },
    { value: 16 / 9, title: "16:9" },
  ];

  const ratioVdata = [
    { value: "custom", title: "X:Y" },
    { value: 1 / 2, title: "1:2" },
    { value: 2 / 3, title: "2:3" },
    { value: 3 / 4, title: "3:4" },
    { value: 4 / 5, title: "4:5" },
    { value: 9 / 16, title: "9:16" },
  ];
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
  };

  if (file) {
    imageData(file).then((data) => {
      setTimeout(() => {
        setImage(data.base64);
      }, 500);

      setOpen(true);
    });
  }

  const onCloseHandle = (event, reason) => {
    if (reason === 'backdropClick') {
      event.preventDefault();
    } else {
      setOpen(false);
      resetFile(null);
      setImage(null);
    }
  }

  const handleRatioMenu = (event) => {
    setRatioAnchorEl(event.currentTarget);
  };

  const handleRotateMenu = (event) => {
    setRotateAnchorEl(event.currentTarget);
  };

  const handleZoomMenu = (event) => {
    setZoomAnchorEl(event.currentTarget);
  };

  const handleRatioMenuClose = () => {
    setRatioAnchorEl(null);
  };

  const handleRotateMenuClose = () => {
    setRotateAnchorEl(null);
  };

  const handleZoomMenuClose = () => {
    setZoomAnchorEl(null);
  };

  const setCropRatio = (ratio) => {
    const cropper = cropperRef.current?.cropper;
    if (ratio === 'custom') {
      setRatio(null);
      cropper.setAspectRatio(null);
    } else {
      setRatio(ratio)
      cropper.setAspectRatio(ratio);
    }
  }

  const setCropRotate = (degree) => {
    const cropper = cropperRef.current?.cropper;
    cropper.rotate(-degree);
  }

  const setCropRotateTo = (degree) => {
    const cropper = cropperRef.current?.cropper;
    cropper.rotateTo(degree);
    setRotate(degree)
  }

  const handleRotateSlider = (e) => {

    const degree = e.target.value;
    setCropRotateTo(degree);
  }

  const handleZoomSlider = (e) => {
    const value = e.target.value;
    const cropper = cropperRef.current?.cropper;
    cropper.zoomTo(value);
    setZoom(value);
  }

  const restCrop = () => {
    const cropper = cropperRef.current?.cropper;
    cropper.reset();
  }

  const saveCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const base64Img = cropper.getCroppedCanvas().toDataURL();
    setResult(base64Img);
    onCloseHandle();
  }

  return (
    <Modal
      open={open}
      onClose={onCloseHandle}
      sx={classes.modal}
    >
      <Box component="div" sx={classes.container} >
        {open && image ?
          <>
            <Cropper
              src={image}
              style={{ height: "calc(100vh - 100px)", width: "calc(100vw - 80px)" }}
              guides={false}
              dragMode="move"
              cropBoxMovable={false}
              autoCropArea={0.6}
              cropmove={onCrop}
              viewMode={1}
              wheelZoomRatio={0.03}
              background={false}
              ref={cropperRef}
            />
            <Box component="div" sx={classes.controlBtnBox}>
              <ButtonGroup size="small" aria-label="small button group">
                <Button
                  color="cropper"
                  sx={{ borderRadius: "50px" }}
                  key="rotateS"
                  aria-label="rotate of crop"
                  aria-haspopup="true"
                  aria-controls={Boolean(rotateAnchorEl) ? 'rotate-menu' : undefined}
                  aria-expanded={Boolean(rotateAnchorEl) ? 'true' : undefined}
                  onClick={handleRotateMenu}
                >
                  <CropRotateOutlinedIcon color="common" fontSize="small" />
                </Button>
                <Button color="cropper" key="rotate" onClick={() => setCropRotate(90)}>
                  <Rotate90DegreesCcwOutlinedIcon color="common" fontSize="small" />
                </Button>
                <Button
                  color="cropper"
                  key="ratio"
                  aria-label="ratio of crop"
                  aria-haspopup="true"
                  aria-controls={Boolean(ratioAnchorEl) ? 'ratio-menu' : undefined}
                  aria-expanded={Boolean(ratioAnchorEl) ? 'true' : undefined}
                  onClick={handleRatioMenu}
                >
                  <AspectRatioOutlinedIcon color="common" fontSize="small" />
                </Button>
                <Button
                  color="cropper"
                  sx={{ borderRadius: "50px" }}
                  key="zoom"
                  aria-label="zoom of crop"
                  aria-haspopup="true"
                  aria-controls={Boolean(zoomAnchorEl) ? 'zoom-menu' : undefined}
                  aria-expanded={Boolean(zoomAnchorEl) ? 'true' : undefined}
                  onClick={handleZoomMenu}
                >
                  <CenterFocusStrongOutlinedIcon color="common" fontSize="small" />
                </Button>
              </ButtonGroup>
              <Tooltip title="Reset">
                <IconButton size="small" onClick={restCrop} sx={classes.resetBtn}>
                  <HistoryOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Box
                component="div"
                sx={{
                  position: 'absolute',
                  top: "0px",
                  right: "0px"
                }}>
                <Tooltip title="Cancel">
                  <Button size="small" color="danger" variant="contained" onClick={onCloseHandle} sx={classes.cancelBtn}>
                    <ClearOutlinedIcon fontSize="small" />
                  </Button>
                </Tooltip>

                <Tooltip title="Save">
                  <Button size="small" variant="contained" onClick={saveCrop} sx={[classes.saveBtn, {ml: 1}]}>
                    <CheckOutlinedIcon fontSize="small" />
                  </Button>
                </Tooltip>
              </Box>
            </Box>

            <Menu
              anchorEl={ratioAnchorEl}
              id="ratio-menu"
              open={Boolean(ratioAnchorEl)}
              onClose={handleRatioMenuClose}
              onClick={handleRatioMenuClose}
              PaperProps={{
                elevation: 0,
                sx: classes.menuPaper,
              }}
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
              <Box>
                {ratioHdata.map((item, index) => {
                  const isSelect = ratio === item.value ? true : false;
                  return (
                    <MenuItem key={index} selected={isSelect} onClick={() => setCropRatio(item.value)}>{item.title}</MenuItem>
                  )
                })}
              </Box>
              <Box>
                {ratioVdata.map((item, index) => {
                  const isSelect = ratio === item.value ? true : false;
                  return (
                    <MenuItem key={index} selected={isSelect} onClick={() => setCropRatio(item.value)}>{item.title}</MenuItem>
                  )
                })}
              </Box>
            </Menu>

            <Menu
              anchorEl={rotateAnchorEl}
              id="rotate-menu"
              open={Boolean(rotateAnchorEl)}
              onClose={handleRotateMenuClose}
              PaperProps={{
                elevation: 0,
                sx: classes.rotateMenuPaper,
              }}
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
              <Box component="div" sx={classes.rotateMenuBox}>
                <Slider
                  orientation="vertical"
                  size="small"
                  valueLabelDisplay="auto"
                  defaultValue={0}
                  color="secondary"
                  track={false}
                  step={1}
                  min={-45}
                  max={45}
                  value={rotate}
                  onChange={handleRotateSlider}
                  aria-label="custom thumb label"
                />
              </Box>
            </Menu>

            <Menu
              anchorEl={zoomAnchorEl}
              id="zoom-menu"
              open={Boolean(zoomAnchorEl)}
              onClose={handleZoomMenuClose}
              PaperProps={{
                elevation: 0,
                sx: classes.rotateMenuPaper,
              }}
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
              <Box component="div" sx={classes.rotateMenuBox}>
                <Slider
                  orientation="vertical"
                  size="small"
                  valueLabelDisplay="auto"
                  defaultValue={0}
                  color="secondary"
                  track={false}
                  step={0.05}
                  min={0}
                  max={10}
                  value={zoom}
                  onChange={handleZoomSlider}
                  aria-label="custom thumb label"
                />
              </Box>
            </Menu>
          </>
          :
          ""
        }
        <Fade in={!image}>
          <Box component="div" sx={classes.loadingBox}>
            <Typography>
              <CircularProgress size={30} />
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Modal>
  );
}