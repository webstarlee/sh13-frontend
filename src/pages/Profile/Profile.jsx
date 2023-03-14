import React, { Fragment } from "react";
import { SHTab, SHCard } from "components";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import img from "assets/images/cover_6.jpg";
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
    profileImg: {
      marginBottom: "10px",
      "& img": {
        width: "100%",
      },
    },
  };
};

export default function Profile() {
  const classes = useStyle();
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
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
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
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
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
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>

      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
      <Typography sx={{ fontSize: "80%" }} variant="p">
        Principal UXUI Design & Brand Architecture for HUD. Creator of
        SeanTheme. Bringing the world closer together. Studied Computer Science
        and Psychology at Harvard University.
      </Typography>
    </SHCard>,
  ];

  return (
    <Fragment>
      <Box component="div" sx={{ py: 3 }}>
        <SHCard>
          <Box sx={classes.container} component="div">
            <Box sx={classes.leftSide} component="div">
              <Box sx={{ position: "sticky", top: "60px" }} component="div">
                <Box sx={classes.profileImg}>
                  <img src={img} />
                </Box>
                <Typography sx={{ color: "white" }} variant="h6">
                  John smith
                </Typography>
                <Typography
                  sx={{ color: "white" }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Johnsmith
                </Typography>
                <Typography sx={{ fontSize: "80%" }} variant="p">
                  Principal UXUI Design & Brand Architecture for HUD. Creator of
                  SeanTheme. Bringing the world closer together. Studied
                  Computer Science and Psychology at Harvard University.
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.rightSide} component="div">
              <SHTab tabHeader={tabHeader} tabContent={tabContent} />
            </Box>
          </Box>
        </SHCard>
      </Box>
    </Fragment>
  );
}
