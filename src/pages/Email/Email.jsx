import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Switch, FormControlLabel, Typography, useTheme, Grid } from "@mui/material";
import { SHModal, SHTab, SHButton, SHCard, SHTable, SHInput, SHDivider } from "components";
import { DeleteEmail, EmailCreate, GetAllEmails, HandleUpdateEmail } from "store/Email/EmailActions";
import { headerAction } from "store/Header";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from '@mui/icons-material/Edit';

const useStyles = () => {
  const theme = useTheme();
  return ({
    box: {
      mt: 3,
      "& .MuiTextField-root": { my: 1, width: "100%" },
    },
    btnBox: {
      mt: 2,
      display: "flex",
      justifyContent: "space-between"
    },
    radius: {
      borderRadius: '50px',
      minWidth: '0',
      "&::hover": {
        backgroundColor: 'transparent'
      }
    }
  })
};

export default function Email() {

  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.email);
  const userInfo = useSelector(state => state.header.profile);
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirmClose = () => {
    setConfirm(false);
    setId('');
  }

  const [emailDatas, setEmailDatas] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    status: "true",
  });
  const tableHead = [
    { minWidth: "100px", label: 'Email' },
    { minWidth: "60px", align: 'left', label: 'Password' },
    { minWidth: "50px", align: 'left', label: 'Firstname' },
    { minWidth: "50px", align: 'left', label: 'LastName' },
    { minWidth: "50px", align: 'left', label: 'Status' },
    { minWidth: "100px", align: 'left', label: 'Actions' },
  ];
  const [tableBody, setTableBody] = useState([]);

  useEffect(() => {
    dispatch(GetAllEmails());
  }, [dispatch])

  useEffect(() => {
    const handleCloseIcon = (id) => {
      setId(id);
      setConfirm(true)
    }
    const editEmail = (content) => {
      setId(content._id);
      setEmailDatas(content);
      setOpen(true);
    }
    if (emails !== null && userInfo) {
      var arrayData = emails.email.map((content, key) => {
        var action =
          <>
            <SHButton
              onClick={() => editEmail(content)}
              sx={[classes.radius]}
              title={
                <EditIcon />
              }
            >
            </SHButton>
            <SHButton
              sx={classes.radius}
              title={<CloseIcon />}
              onClick={() => handleCloseIcon(content._id)}
            >
            </SHButton>
          </>
        var status = content.status ? "Using" : "blocked";
        return (
          userInfo.username === "admin" || content.user === userInfo.id ?
            [content.email, content.password, content.firstname,
            content.lastname, status, action]
            : []
        )

      }
      );
      Object.keys(arrayData)
        .forEach((k) => arrayData[k].length == 0 && delete arrayData[k]);
      setTableBody(arrayData);
    }
  }, [emails]);

  const handleAddCancel = () => {
    handleClose();
    setEmailDatas({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      status: false,
    });
    setId('');
  }

  useEffect(() => {
    setEmailDatas({
      ...emailDatas,
      id: id
    });
  }, [id])

  const handleChange = (e) => {
    setEmailDatas({
      ...emailDatas, [e.target.name]: e.target.value
    });
  }

  const handleCheck = (e) => {
    setEmailDatas({
      ...emailDatas,
      status: e.target.checked
    });
  }

  const handleClick = () => {
    if (!emailDatas.email) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Email field is required",
        })
      );
      return;
    }

    if (!emailDatas.password) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Password field is required",
        })
      );
      return;
    }
    if (!emailDatas.firstname) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Firstname field is required",
        })
      );
      return;
    }
    if (!emailDatas.lastname) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Lastname field is required",
        })
      );
      return;
    }
    if (!id) {
      dispatch(EmailCreate(emailDatas));
    }
    else {
      dispatch(HandleUpdateEmail(emailDatas));
    }

    handleAddCancel();
  };

  const handleConfirmBtn = () => {
    dispatch(DeleteEmail({ id: id }));
    confirmClose();
  }

  return (
    <Box
      component="div"
      sx={classes.box}
      noValidate
      autoComplete="off"
    >
      <SHCard>
        <Typography
          component='div'
          align="right"
        >
          <SHButton
            size="small"
            onClick={handleOpen}
            title="Add Email"
            variant="outlined"
          >

          </SHButton>
        </Typography>
        <SHTable
          THeadData={tableHead}
          TBodyData={tableBody}
        >
        </SHTable>
      </SHCard>
      <SHModal
        open={open}
        size="medium"
        onclose={handleClose}
        header={id ? 'Update Email Account' : 'New Email Account'}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <SHInput
              size="small"
              fullWidth={true}
              label="Email Address"
              color="secondary"
              type="text"
              name="email"
              value={emailDatas.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <SHInput
              size="small"
              fullWidth={true}
              label="Recovery Email"
              color="secondary"
              type="email"
              name="recover_email"
              value={emailDatas.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <SHDivider size='small' />
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
          <SHInput
          size="small"
          fullWidth={true}
          label="FirstName"
          color="secondary"
          type="text"
          name="firstname"
          value={emailDatas.firstname}
          onChange={handleChange}
        />
          </Grid>
          <Grid item xs={6} md={6}>
          <SHInput
          size="small"
          fullWidth={true}
          label="Lastname"
          color="secondary"
          type="text"
          name="lastname"
          value={emailDatas.lastname}
          onChange={handleChange}
        />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <SHInput
              size="small"
              fullWidth={true}
              label="Password"
              color="secondary"
              type="password"
              name="password"
              value={emailDatas.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <SHInput
              size="small"
              fullWidth={true}
              label="Password"
              color="secondary"
              type="password"
              name="password"
              value={emailDatas.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <SHDivider />
        <FormControlLabel
          label="Account Block?"
          control={<Switch onChange={handleCheck} />}
          style={{ zIndex: '2200', position: "relative" }}

        />
        <SHDivider height="small" />
        <Box
          sx={classes.btnBox}
        >
          <SHButton
            variant="outlined"
            size="small"
            align="right"
            title="Cancel"
            onClick={handleAddCancel}
          />

          <SHButton
            variant="outlined"
            size="small"
            title='Save'
            onClick={handleClick}
          />
        </Box>
      </SHModal>
      <SHModal
        open={confirm}
        onclose={confirmClose}
        header="Do you want to delete this?"
      >
        <Typography align="right">
          <SHButton onClick={handleConfirmBtn} title="Sure"></SHButton>
          <SHButton onClick={confirmClose} title="Cancel"></SHButton>
        </Typography>
      </SHModal>
    </Box>
  )
}