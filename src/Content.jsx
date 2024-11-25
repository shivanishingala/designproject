import React from "react";
import Imgdata from "./assets/secondImg.png";
import speckerImg from './assets/speacker.png';

import { Box, Container, styled, Grid, Typography } from "@mui/material";


const Content = () => {
  return (
    <>
      <MainStyle>
        <Container maxWidth="lg">
          <Grid container xs={12} spacing={10} className="main_grid">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box className="main-image-contant">
                <Box
                  component="img"
                  src={Imgdata}
                  className="image-style"
                  alt="Responsive Image"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className="contentBox">
              <Typography className="contentHeading">
                Learn with Joyce and Rob, your podcast teachers
              </Typography>
              <Typography className="contentPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </MainStyle>

      <MainStyle>
        <Container maxWidth='lg'>
          <Grid container xs={12} spacing={5} className="secondContent">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box className="main-image-contant">
                <Box
                  component="img"
                  src={speckerImg}
                  className="image-style"
                  alt="Responsive Image"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={6} className="contentBox">
              <Typography className="contentHeading">
                Get the editing skills you need to thrive
              </Typography>
              <Typography className="contentPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  paddingTop: "60px",
  paddingBottom: "40px",
  "& .secondContent": {
    display: "flex",
    flexDirection: "row-reverse",
  },

  "& .image-style": {
    width: "100%",
  },
  "& .contentBox": {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "7px",
  },
  "& .contentHeading": {
    color: "#0f0f0f",
    fontSize: 38,
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: 16,
    width: "100%",
  },
  "& .contentPara": {
    color: "0f0f0f",
    fontSize: "18px",
    marginBottom: 16,
    width: 400,
  },
  "@media(max-width: 768px)": {
    "& .contentPara": {
      width:'100%',
    },
    "& .contentHeading": {
      width: "95%",
      fontSize: 35,
    },
  },
  "@media(max-width: 320px)": {
    "& .contentPara": {
      fontSize: "17px",
      width: 250,
    },
    "& .contentHeading": {
      width: 270,
      fontSize: "30px",
    },
    "& .image-style": {
      height: "262px",
      width: "252px",
    },
  },
});

export default Content;
