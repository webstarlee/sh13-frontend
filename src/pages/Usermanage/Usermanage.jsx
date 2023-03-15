import React, { Fragment, useEffect, useState } from "react";
import { SHButton, SHModal, SHTable } from "components";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { usermanageAction as userActions } from "store/Usermanage";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export default function Usermanage() {
  const tableHead = [
    { label: "No." },
    { label: "Fullname" },
    { label: "Username" },
    { label: "Status" },
    { label: "Actions" },
  ];
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usermanage.users);
  const [tableBody, setTableBody] = useState([]);
  const [userId, setUserId] = useState("");
  const [approveStatus, setApproveStatus] = useState(false);
  const [approveModalOpen, setApprovedModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  useEffect(() => {
    dispatch(userActions.getAllUser());
  }, [dispatch]);

  const approveUserModal = (id, status) => {
    setUserId(id);
    setApproveStatus(status);
    setApprovedModalOpen(true);
  };
  const deleteUserModal = (id) => {
    setUserId(id);
    setDeleteModalOpen(true);
  };

  const resetState = () => {
    setUserId("");
    setApproveStatus(false);
    setApprovedModalOpen(false);
    setDeleteModalOpen(false);
  };

  const handleApproveUser = () => {
    dispatch(
      userActions.approveUser({ id: userId, approveStatus: !approveStatus })
    );
    resetState();
  };

  const handleDeleteUser = () => {
    dispatch(userActions.deleteUser({ id: userId }));
    resetState();
  };

  useEffect(() => {
    if (users) {
      const rows = users.map((user, key) => {
        const approved = (
          <IconButton
            color={user.approved ? "success" : "default"}
            onClick={() => approveUserModal(user._id, user.approved)}
          >
            <VerifiedIcon />
          </IconButton>
        );
        const actionBtn = (
          <Fragment>
            <IconButton color="error" onClick={() => deleteUserModal(user._id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Fragment>
        );
        return [key + 1, user.fullname, user.username, approved, actionBtn];
      });
      setTableBody(rows);
    }
  }, [users]);
  return (
    <Fragment>
      <Box component="div" sx={{ py: 3 }}>
        <SHTable THeadData={tableHead} TBodyData={tableBody} />
      </Box>
      <SHModal
        size="small"
        open={approveModalOpen}
        onclose={resetState}
        header="Approve User Modal"
      >
        <Typography component="p" variant="p" gutterBottom>
          Do you want to {approveStatus ? "block" : "approve"} this user
          account?
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: 1 }}>
            <SHButton
              onClick={handleApproveUser}
              color="success"
              variant="outlined"
              title="O K"
            />
          </Box>
          <Box>
            <SHButton
              color="error"
              variant="outlined"
              onClick={resetState}
              title="CANCEL"
            />
          </Box>
        </Box>
      </SHModal>
      <SHModal
        size="small"
        open={deleteModalOpen}
        onclose={resetState}
        header="Delete User Modal"
      >
        <Typography component="p" variant="p" gutterBottom>
          Do you want to delete this user account?
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: 1 }}>
            <SHButton
              onClick={handleDeleteUser}
              color="error"
              variant="outlined"
              title="O K"
            />
          </Box>
          <Box>
            <SHButton
              color="success"
              variant="outlined"
              onClick={resetState}
              title="CANCEL"
            />
          </Box>
        </Box>
      </SHModal>
    </Fragment>
  );
}
