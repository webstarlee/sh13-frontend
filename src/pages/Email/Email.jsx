import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Switch,
  FormControlLabel,
  Typography,
  Grid,
  IconButton,
  Tooltip
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
  SHModal,
  SHDatePicker,
  SHSelect,
  SHButton,
  SHCard,
  SHTable,
  SHInput,
  SHDivider
} from "components";
import { headerAction } from "store/Header";
import { emailAction } from "store/Email";

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
      justifyContent: "flex-end",
      width: "100%"
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

const actionComponent = (props) => {
  return (
    <>
      <Tooltip title="Edit">
        <IconButton aria-label="edit" color="primary" size="small">
          <ModeEditOutlineOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton aria-label="delete" color="error" size="small">
          <DeleteOutlineOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </>
  )
}

export default function Email() {

  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.email);
  const userInfo = useSelector(state => state.header.profile);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState('');
  const [emailDatas, setEmailDatas] = useState({
    id: "",
    email: "",
    status: "alive",
    password: "",
    recovery: "",
    sms: "free",
    createdAt: dayjs('2023-01-01')
  });
  const [tableBody, setTableBody] = useState([]);
  const [status, setStatus] = React.useState("alive");
  const [statusData, setStatusData] = useState([
    { value: "block", title: "Block" },
    { value: "alive", title: "Alive" }
  ]);
  const [sms, setSms] = React.useState("free");
  const [smsData, setSmsData] = useState([
    { value: "free", title: "Free" },
    { value: "sms_active", title: "sms-activate.org" },
    { value: "onlinesim", title: "onlinesim.io" },
  ]);
  const [createdAt, setCreatedAt] = React.useState(dayjs('2023-01-01'));

  useEffect(() => {
    dispatch(emailAction.getAllEmails());
  }, [dispatch])

  useEffect(() => {
    setEmailDatas({
      ...emailDatas,
      id: id
    });
  }, [id])

  const handleDeleteEmail = (id) => {
    setId(id);
    setConfirm(true)
  }
  const handleEditEmail = (content) => {
    setId(content._id);
    setEmailDatas(content);
    setOpen(true);
  }

  useEffect(() => {
    if (emails && emails.length > 0 && userInfo) {
      const itemArray = [];
      emails.map(item => {
        const actionElement = actionComponent();

        const itemSingle = [item.email, item.recovery, item.sms, dayjs(item.createdAt).format("YYYY-MM-DD"), item.status, actionElement];
        itemArray.push(itemSingle);
      });

      setTableBody(itemArray);
    }
  }, [emails]);

  const tableHead = [
    { minWidth: "100px", label: 'Email Address' },
    { minWidth: "60px", align: 'left', label: 'Recovery Email' },
    { minWidth: "50px", align: 'left', label: 'SMS' },
    { minWidth: "50px", align: 'left', label: 'Created At' },
    { minWidth: "50px", align: 'left', label: 'Status' },
    { minWidth: "100px", align: 'left', label: 'Actions' },
  ];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirmClose = () => {
    setConfirm(false);
    setId('');
  }

  const handleAddCancel = () => {
    handleClose();
    setEmailDatas({
      id: "",
      email: "",
      status: "alive",
      password: "",
      recovery: "",
      sms: "free",
      createdAt: dayjs('2023-01-01'),
    });
    setId('');
  }

  const handleChange = (e) => {
    setEmailDatas({
      ...emailDatas, [e.target.name]: e.target.value
    });
  }

  const handleCreateEmail = () => {
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

    if (!emailDatas.recovery) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Recovery Email field is required",
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
    if (!emailDatas.status) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Status field is required",
        })
      );
      return;
    }

    if (!emailDatas.sms) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "SMS field is required",
        })
      );
      return;
    }
    if (!emailDatas.createdAt) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "CreatedAt field is required",
        })
      );
      return;
    }

    if (!id) {
      dispatch(emailAction.emailCreate(emailDatas));
    }
    else {
      dispatch(emailAction.updateEmail(emailDatas));
    }

    // handleAddCancel();
  };

  const handleConfirmBtn = () => {
    dispatch(emailAction.deleteEmail({ id: id }));
    confirmClose();
  }

  const handleSms = (e) => {
    setSms(e.target.value);
    setEmailDatas({
      ...emailDatas,
      sms: e.target.value,
    });
  }

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setEmailDatas({
      ...emailDatas,
      status: e.target.value,
    });
  }

  const handleCreatedAt = (e) => {
    setCreatedAt(e.target.value);
    setEmailDatas({
      ...emailDatas,
      createdAt: e.target.value,
    });
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
              name="recovery"
              value={emailDatas.recovery}
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
              label="Password"
              color="secondary"
              type="text"
              name="password"
              value={emailDatas.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <SHSelect
              value={sms}
              setValue={handleSms}
              id="account_status"
              label="Sms ?"
              selectData={smsData}
            />
          </Grid>
        </Grid>
        <SHDivider size='small' />
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <SHSelect
              value={status}
              setValue={handleStatus}
              id="account_status"
              label="Status"
              selectData={statusData}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <SHDatePicker
              label="Create At"
              id="createdAt"
              name="createdAt"
              value={createdAt}
              setValue={handleCreatedAt}
            />
          </Grid>
        </Grid>
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
            m={{ ml: 1 }}
            onClick={handleCreateEmail}
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