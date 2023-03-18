import React, { Fragment, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { SHButton, SHCard, SHCropper } from "components";

const useStyle = () => {
  const theme = useTheme();
  return {
    container: {
      // display: "flex",
      height: "400px"
    },
    leftSide: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      width: "250px",
    },
    rightSide: {
      flex: 1,
    },
    profileImg: {
      marginBottom: "10px",
      "& img": {
        width: "100%",
      },
    },
  };
};

const CONTAINER_HEIGHT = 300

export default function Profile() {
  const classes = useStyle();
  const fileRef = React.useRef();

  const tabHeader = [
    { label: "First" },
    { label: "Second" },
    { label: "Third" },
  ];
  const tabContent = [
    <SHCard>
      first{" "}
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
    </SHCard>,

    <SHCard>
      second{" "}
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>

    </SHCard>,
    <SHCard>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
    </SHCard>,
  ];

  const [file, setFile] = React.useState(null);
  const [base64Img, setBase64Img] = React.useState(null);

  const bindFileInput =() => {
    fileRef.current.click();
  }

  console.log(base64Img);

  return (
    <Fragment>
      <Box component="div" sx={{ py: 3 }}>
        <SHCard>
          <input
            ref={fileRef}
            type="file"
            name="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <SHButton
            size="small"
            onClick={bindFileInput}
            title="Add Email"
            variant="outlined"
          />
          <Box sx={classes.container} component="div">
            {file ? <SHCropper file={file} resetFile={setFile} setResult={setBase64Img} /> : ''}
          </Box>
        </SHCard>
      </Box>
    </Fragment>
  );
}
