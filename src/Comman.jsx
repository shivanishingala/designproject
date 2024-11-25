import { Grid, Box, Typography, Container, styled } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import contentImg from "./assets/content.png";
import playImag from "./assets/button.svg";

const Comman = () => {
  return (
    <MainStyle>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12} sm={6}>
            <Box>
              <Typography className="main-title">
                Learn How To Launch a Successful Podcast
              </Typography>
            </Box>
            <Box>
              <Typography className="heading-pra" variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
            <Box component={"h1"} className="price-title">
              $189
              <Box component={"span"}>$399</Box>
            </Box>
            <Box className="button_box">
              <Button className="enroll-btn">Enroll Now</Button>
              <Button className="play-button" startIcon={<PlayArrowIcon />}>
                Watch Trailer
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} lg={6} sm={6}>
            <Box className="main-image-contant">
              <Box
                component="img"
                src={contentImg}
                className="image-style"
                alt="Responsive Image"
              />
              <Box className="main-new-boxing">
                <img src={playImag} alt="playImag" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainStyle>
  );
};

const MainStyle = styled(Box)({
  paddingBottom:100,
  paddingTop:122,
  background:'#fbfbfb',
  "& .image-style": {
    width: "100%",
  },
  "& .main-title": {
    color: "black",
    fontSize: "49px",
    lineHeight: "1.2em",
    fontWeight: 700,
    marginBottom: 18,
    width: "86%",
    "@media(max-width: 479px)": {
      fontSize: 32,
    },
    "@media(max-width: 600px)": {
      fontSize: 40,
    },
  },
  "& .heading-pra": {
    color: "#464646",
    fontSize: 20,
    lineBreak: "auto",
    width: "86%",
    "@media(max-width: 479px)": {
      width: "100%",
      fontSize: 18,
    },
  },
  "& .price-title": {
    display: "flex",
    gap: 10,
  },
  "& .price-title": {
    display: "flex",
    gap: 8,
    alignItems: "flex-end",
    fontWeight: 500,
    "& span": {
      color: "#757575",
      fontSize: 22,
      textDecoration: "line-through",
    },
  },
  "& .new-boxing": {
    width: "50px",
    height: "50px",
    background: "red",
    marginLeft: 40,
  },
  "& .main-image-contant": {
    position: "relative",
  },
  "& .main-new-boxing": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .enroll-btn": {
    width: 155,
    height: 43,
    fontSize: "15px",
    fontWeight: "500",
    background: "#e48d8b",
    borderRadius: 0,
    color: "#ffffff",
    "@media(max-width: 479px)": {
      width: "100%",
    },
    "&:hover": {
      background: "#d87775",
      color: "#fff",
    },
  },
  "& .play-button": {
    height: 43,
    width: 184,
    color: "#757575",
    background: "#ededed",
    margin: "0px 0px 8px",
    padding: "8px 24px",
    "@media(max-width: 479px)": {
      width: "100%",
    },
    "&:hover": {
      background: "#dbdbdb",
      color: "#464646",
    },
  },
  "& .button_box": {
    display: "flex",
    gap: 10,
    "@media(max-width: 479px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

export default Comman;
