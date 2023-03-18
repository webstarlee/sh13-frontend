import React from "react";
import dayjs from 'dayjs';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {
  SHModal,
  SHTab,
  SHCard,
  SHTable,
  SHDatePicker,
  SHInput,
  SHSelect,
  SHDivider
} from "components";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [birthday, setBirthday] = React.useState(dayjs('2023-03-15'));
  const [status, setStatus] = React.useState("block");
  const [tableHead, setTableHead] = React.useState([
    { id: 'name', label: 'Name' },
    { id: 'code', label: 'ISO\u00a0Code'},
    {
      id: 'population',
      label: 'Population',
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ]);
  const [tableBody, setTableBody] = React.useState([
    ['ace', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['sd', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['fa', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['d', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['acsde', 'Hallin Ace', 1920192, 102841, 10303.92],
    ['ac1e', 'Hallin Ace', 1920192, 102841, 10303.92],
  ]);
  const selectData = [
    {value: "block", title: "Block"},
    {value: "alive", title: "Alive"}
  ]
  const tabHeader = [
    { label: "First" },
    { label: "Second" },
    { label: "Third" },
  ];
  const tabContent = [
    <SHCard>first</SHCard>,
    <SHCard>second</SHCard>,
    <SHCard>third</SHCard>,
  ];
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    console.log(reason)
    setOpen(false);
  }

  const handleSelect = (e) => {
    setStatus(e.target.value);
  }

  return (
    <Box
      component="div"
      sx={{
        mt: 3,
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <SHCard>
        <SHInput
          size="small"
          fullWidth={true}
          label="Password"
          id="password"
          color="secondary"
          type="password"
          name="password"
        />
      </SHCard>
      <SHCard>
        <SHInput
          size="small"
          fullWidth={true}
          label="Text Area"
          id="textarea"
          color="secondary"
          type="text"
          name="textarea"
          multiline
          rows={4}
        />
      </SHCard>
      <SHCard>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Example switch"
        />
        <SHDatePicker label="Birthday" id="birthday" name="birthday" value={birthday} setValue={setBirthday} />
        <Button variant="contained" onClick={handleOpen}>
          Open modal
        </Button>
        <SHModal
          open={open}
          onclose={handleClose}
          cover={false}
          header="Test Modal"
          size="large"
        >
          ... This is SHModal Test ...
        </SHModal>
        <SHDivider size="small" />
        <SHSelect
          value={status}
          setValue={handleSelect}
          id="account_status"
          label="Status"
          selectData={selectData}
        />
      </SHCard>
      <SHCard>
        <SHTable
          THeadData={tableHead}
          TBodyData={tableBody}
        >
        </SHTable>
      </SHCard>
      <SHCard>
        <SHTab tabHeader={tabHeader} tabContent={tabContent} />
      </SHCard>
    </Box>
  );
}
