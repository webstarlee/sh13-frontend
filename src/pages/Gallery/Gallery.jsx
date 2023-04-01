import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ImageList,
  ImageListItem,
  IconButton,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import CropIcon from '@mui/icons-material/Crop';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import { HOST_URL } from "config"

import {
  SHButton,
  SHCard,
  SHCropper,
  SHModal
} from "components";

import { resourceAction } from "store/Resource";

const useStyle = () => {
  const theme = useTheme();
  return {
    container: {
    },
    btnContainer: {
      width: "100%",
      padding: "10px 0px",
      display: "flex",
      justifyContent: "flex-end",
    },
    menuPaper: {
      background: theme.palette.appbar.main,
      overflow: 'visible',
      boxShadow: "0 0.5rem 1rem rgb(255 255 255 / 8%)",
      borderRadius: "0px",
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      border: `1px solid ${theme.palette.secondary.light}`,
      minWidth: "165px",
      "& .MuiMenuItem-root": {
        fontFamily: "chakra_medium",
        color: theme.palette.secondary.lightBold,
        textTransform: "uppercase",
        fontSize: "11px",
        letterSpacing: "0.15em",
        justifyContent: "space-between",
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
    }
  };
};

export default function Gallery() {
  const classes = useStyle();
  const fileRef = useRef();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.resource.images);
  const [file, setFile] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [deleteId, setDeleteId] = useState(null)
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    dispatch(resourceAction.imageFetch());
  }, [dispatch])

  const handleMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleUploadCropImg = (baseImg) => {
    const data = {
      file: baseImg,
    }
    dispatch(resourceAction.imageUpload(data));
  }

  const deleteConfirmModal = (id) => {
    setDeleteId(id)
    setConfirm(true)
  }

  const confirmClose = () => {
    setDeleteId(null)
    setConfirm(false)
  }

  const handleConfirmBtn = () => {
    console.log(deleteId)
    dispatch(resourceAction.imageDelete(deleteId));
    setDeleteId(null)
    setConfirm(false)
  }

  return (
    <Fragment>
      <Box component="div" sx={{ py: 3 }}>
        <Box component="div" sx={classes.btnContainer}>
          <input
            ref={fileRef}
            type="file"
            name="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <SHButton
            sx={{ minWidth: "165px" }}
            size="small"
            variant="outlined"
            aria-label="rotate of crop"
            aria-haspopup="true"
            aria-controls={Boolean(menuAnchorEl) ? 'select-menu' : undefined}
            aria-expanded={Boolean(menuAnchorEl) ? 'true' : undefined}
            onClick={handleMenu}
          >
            <UploadIcon fontSize="small" sx={{ mr: 1 }} /> Image Upload
          </SHButton>

          <Menu
            anchorEl={menuAnchorEl}
            id="select-menu"
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: classes.menuPaper,
            }}
            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => fileRef.current.click()}>
              Crop Upload
              <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                <CropIcon color="primary" fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              Multi Upload
              <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                <FilterNoneOutlinedIcon color="primary" fontSize="small" />
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </Box>
        <SHCard>
          <Box sx={classes.container} component="div">
            <ImageList variant="masonry" sx={{mt: 0, mb: 0}} cols={4} gap={8}>
              {images.map((item) => (
                <ImageListItem key={item._id}>
                  <img
                    src={`${HOST_URL}/${item.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    srcSet={`${HOST_URL}/${item.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item._id}
                    loading="lazy"
                  />
                  <IconButton sx={{position: "absolute", top: 0, right: 0}} onClick={() => deleteConfirmModal(item._id)} aria-label="delete" size="small">
                    <DeleteIcon color="danger" fontSize="inherit" />
                  </IconButton>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </SHCard>
        {file ? <SHCropper file={file} resetFile={setFile} setResult={handleUploadCropImg} /> : ''}
        <SHModal
          open={confirm}
          onclose={confirmClose}
          header="Do you want to delete this Image?"
        >
          <Typography component="div" align="right">
            <SHButton variant="outlined" color="danger" onClick={handleConfirmBtn} title="Sure"></SHButton>
            <SHButton variant="outlined" sx={{ml: 1}} onClick={confirmClose} title="Cancel"></SHButton>
          </Typography>
        </SHModal>
      </Box>
    </Fragment>
  );
}
