import React, { Fragment, useEffect, useState } from "react";
import { SHButton, SHModal, SHTable } from "components";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { usermanageAction as userActions } from "store/Usermanage";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from '@mui/icons-material/Delete';
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
        const approved = user.approved ? "Allowed" : "Blocked";
        const actionBtn = (
          <Fragment>
            <Tooltip title={user.approved ? "Block" : "Approve"}>
              <IconButton
                color={user.approved ? "success" : "default"}
                onClick={() => approveUserModal(user._id, user.approved)}
                size="small"
                sx={{ mr: 1 }}
              >
                <VerifiedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton color="error" size="small" onClick={() => deleteUserModal(user._id)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
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
        header={approveStatus ? "Block this user account" : "Approve this user account"}
      >
        <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
          <SHButton
            onClick={handleApproveUser}
            color={approveStatus ? "danger" : "success"}
            variant="contained"
            title={approveStatus ? "Block" : "Approve"}
            size="small"
          />
          <SHButton
            color={approveStatus ? "success" : "danger"}
            variant="contained"
            sx={{ ml: 1 }}
            onClick={resetState}
            title="CANCEL"
            size="small"
          />
        </Box>
      </SHModal>
      <SHModal
        size="small"
        open={deleteModalOpen}
        onclose={resetState}
        header="Delete This User ?"
      >
        <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
          <SHButton
            onClick={handleDeleteUser}
            color="danger"
            variant="contained"
            title="Delete"
            size="small"
          />
          <SHButton
            color="success"
            variant="contained"
            onClick={resetState}
            title="CANCEL"
            size="small"
            sx={{ ml: 1 }}
          />
        </Box>
      </SHModal>
    </Fragment>
  );
}
