import React, { Fragment, useState } from "react";
import { SHCard, SHButton, SHModal, SHInput, SHDivider } from "components";
import { useDispatch } from "react-redux";
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

export default function Setting() {
  const classes = useStyle();
  const theme =  useTheme();
  const dispatch = useDispatch();
  const [fullnameModal, setFullnameModal] = useState(false);
  const [usernameModal, setUsernameModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
  };
  const changePassword = () => {};

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
                        <Typography sx={classes.greyTypo}>{"Name"}</Typography>
                      </Box>
                      <Box component="div">
                        <SHButton
                          onClick={() => setFullnameModal(true)}
                          variant="contained"
                          color="grey"
                          size="small"
                        >
                          Edit
                        </SHButton>
                      </Box>
                    </ListItem>
                    <ListItem sx={classes.listItem}>
                      <Box component="div">
                        <Typography variant="p" sx={classes.normalTypo}>
                          {"Username"}
                        </Typography>
                        <Typography sx={classes.greyTypo}>{"Name"}</Typography>
                      </Box>
                      <Box component="div">
                        <SHButton
                          onClick={() => setUsernameModal(true)}
                          variant="contained"
                          color="grey"
                          size="small"
                        >
                          Edit
                        </SHButton>
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
                          variant="contained"
                          color="grey"
                          size="small"
                          onClick={() => setPasswordModal(true)}
                        >
                          Edit
                        </SHButton>
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
        header="Fullname Change"
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

        <SHButton onClick={changeFullname} sx={{ my: 1 }} variant="contained">
          Change
        </SHButton>
      </SHModal>
      <SHModal
        header="Username Change"
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
        <SHButton onClick={changeUsername} sx={{ my: 1 }} variant="contained">
          Change
        </SHButton>
      </SHModal>
      <SHModal
        header="Password Change"
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
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SHButton onClick={changePassword} sx={{ my: 1 }} variant="contained">
          Change
        </SHButton>
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
