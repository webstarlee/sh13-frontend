import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { SHTab, SHCard } from "components";

export default function Profile() {
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
  return (
    <Fragment>
      <SHCard>
        <SHTab tabHeader={tabHeader} tabContent={tabContent} />
      </SHCard>
    </Fragment>
  );
}
