import React, { Fragment, useEffect, useState } from "react";
import { SHCard, SHButton, SHModal, SHInput, SHDivider } from "components";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { headerAction } from "store/Header";
import { profileAction } from "store/Profile";

export default function Setting() {
  const classes = useStyle();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.header.profile);
  const [fullnameModal, setFullnameModal] = useState(false);
  const [usernameModal, setUsernameModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    if (user) {
      setFullname(user.fullname);
      setUsername(user.username);
    }
  }, [user]);

  const changeFullname = () => {
    if (!fullname) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Fullname is rquired!",
        })
      );
      return;
    }
    dispatch(profileAction.changeFullname({ fullname: fullname }));
    setFullnameModal(false);
  };
  const changeUsername = () => {
    if (!username) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Username is rquired!",
        })
      );
      return;
    }
    dispatch(profileAction.changeUsername({ username: username }));
    setUsernameModal(false);
  };
  const changePwd = () => {
    if (!oldPassword) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Old password is rquired!",
        })
      );
      return;
    }
    if (!password) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Password is rquired!",
        })
      );
      return;
    }
    if (!confirmPassword) {
      dispatch(
        headerAction.openToast({
          IsOpen: true,
          title: "Error",
          type: "error",
          comment: "Confirm Passwordis rquired!",
        })
      );
      return;
    }
    dispatch(
      profileAction.changePassword({
        oldPassword: oldPassword,
        password: password,
        confirmPassword: confirmPassword,
      })
    );
    setPasswordModal(false);
  };

  return (
    <Fragment>
      <Box component="div" sx={{ py: 3 }}>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={10}>
            <Grid container spacing={1}>
              <Grid item sm={12} md={9}>
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  variant="h5"
                  component="h5"
                >
                  <IconButton size="small" color="primary">
                    <PersonOutlineOutlined sx={{ fontSize: "2rem" }} />
                  </IconButton>
                  {"General"}
                </Typography>
                <Typography variant="p" component="p" gutterBottom>
                  View and update your general account information and settings.
                </Typography>
                <SHCard noPadding>
                  <List sx={classes.list}>
                    <ListItem sx={classes.listItem}>
                      <Box component="div">
                        <Typography variant="p" sx={classes.normalTypo}>
                          {"Fullname"}
                        </Typography>
                        <Typography sx={classes.greyTypo}>
                          {user && user.fullname}
                        </Typography>
                      </Box>
                      <Box component="div">
                        <SHButton
                          onClick={() => setFullnameModal(true)}
                          variant="outlined"
                          size="small"
                          title="Edit"
                        />
                      </Box>
                    </ListItem>
                    <ListItem sx={classes.listItem}>
                      <Box component="div">
                        <Typography variant="p" sx={classes.normalTypo}>
                          {"Username"}
                        </Typography>
                        <Typography sx={classes.greyTypo}>
                          {user && user.username}
                        </Typography>
                      </Box>
                      <Box component="div">
                        <SHButton
                          onClick={() => setUsernameModal(true)}
                          variant="outlined"
                          size="small"
                          title="Edit"
                        />
                      </Box>
                    </ListItem>
                    <ListItem sx={classes.listItem}>
                      <Box component="div">
                        <Typography variant="p" sx={classes.normalTypo}>
                          Password
                        </Typography>
                      </Box>
                      <Box component="div">
                        <SHButton
                          variant="outlined"
                          size="small"
                          title="Edit"
                          onClick={() => setPasswordModal(true)}
                        />
                      </Box>
                    </ListItem>
                  </List>
                </SHCard>
              </Grid>
              <Grid item sm={12} md={3}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <SHModal
        header="Update Fullname"
        open={fullnameModal}
        onclose={() => setFullnameModal(false)}
      >
        <SHInput
          size="small"
          fullWidth={true}
          label="Fullname"
          id="fullname"
          color="secondary"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <SHButton onClick={changeFullname} variant="outlined" title="Change" />
      </SHModal>
      <SHModal
        header="Update Username"
        open={usernameModal}
        onclose={() => setUsernameModal(false)}
      >
        <SHInput
          size="small"
          fullWidth={true}
          label="Username"
          id="username"
          color="secondary"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SHButton title="Change" onClick={changeUsername} variant="outlined" />
      </SHModal>
      <SHModal
        header="Update Password"
        open={passwordModal}
        onclose={() => setPasswordModal(false)}
      >
        <SHInput
          size="small"
          fullWidth={true}
          label="Old Password"
          id="oldpassword"
          color="secondary"
          name="oldPassword"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <SHDivider />
        <SHInput
          size="small"
          fullWidth={true}
          label="New Password"
          id="password"
          color="secondary"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SHDivider />
        <SHInput
          size="small"
          fullWidth={true}
          label="Confirm Password"
          id="ConfirmPassword"
          color="secondary"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SHDivider />
        <SHButton title="Change" onClick={changePwd} variant="outlined" />
      </SHModal>
    </Fragment>
  );
}
const useStyle = () => {
  const theme = useTheme();
  return {
    container: {
      display: "flex",
    },
    leftSide: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      width: "250px",
    },
    rightSide: {
      flex: 1,
    },
    list: {
      padding: theme.spacing(0),
    },
    listItem: {
      borderBottom: "1px solid",
      borderColor: theme.palette.grey[600],
      padding: theme.spacing(1, 2),
      "&:last-child": {
        borderBottom: "0px",
      },
      display: "flex",
      justifyContent: "space-between",
    },
    normalTypo: {
      lineHeight: "100%",
      fontSize: "14px",
      fontFamily: "chakra",
    },
    greyTypo: {
      lineHeight: "100%",
      color: theme.palette.grey[600],
      fontSize: "14px",
      fontFamily: "chakra",
    },
  };
};
