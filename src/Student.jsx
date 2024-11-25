import { Opacity } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  styled,
  Rating,
  Grid,
} from "@mui/material";
import React from "react";

const img1 =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a788178b0371_Ellipse-3.png";
  const img2 = "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a784fb8b036e_Ellipse-1.png";
  const img3 = "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a75ea98b0370_Ellipse-2.png";
  const img4 = "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7b7748b036f_Ellipse.png";
  const img5 = "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a751ed8b0366_Ellipse.png";
 

const staticImg1 =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7be858b035d_Blue%20Box.svg";
const Student = () => {
  return (
    <>
      <MainStyle>
        <Container>
          <Typography className="heading">
            More Praise From our Students
          </Typography>
          <Grid container maxWidth="lg" style={{marginTop:'50px'}}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className="mainBox">
                <Rating name="read-only" className="rating" value={4} readOnly />
                <Typography className="paragarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
                <Box className='innerBox'>
                  <img src={img1} alt="img1" className="imges" />
                  <Typography className="author">Jamie Matthew</Typography>
                </Box>
              </Box>
              <Box className="mainBox">
                <Rating name="read-only"   className="rating"  value={4} readOnly />
                <Typography className="paragarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Typography>
                <Box className='innerBox'>
                  <img src={img2} alt="img1" className="imges" />
                  <Typography className="author">Jamie Matthew</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className="mainBox">
                <Rating name="read-only"  className="rating" value={5} readOnly />
                <Typography className="paragarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Box className='innerBox'>
                  <img src={img3} alt="img1" className="imges" />
                  <Typography className="author">Jamie Matthew</Typography>
                </Box>
              </Box>
              <Box className="mainBox">
                <Rating name="read-only"  className="rating"  value={2} readOnly />
                <Typography className="paragarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Box className='innerBox'>
                  <img src={img4} alt="img1" className="imges" />
                  <Typography className="author">Jamie Matthew</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className="mainBox">
                <Rating name="read-only"  className="rating"  value={3} readOnly />
                <Typography className="paragarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Typography>
                <Box className='innerBox'>
                  <img src={img5} alt="img1" className="imges" />
                  <Typography className="author">Jamie Matthew</Typography>
                </Box>
              </Box>
              <Box className="mainBox">
                <Rating name="read-only"  className="rating"  value={4} readOnly />
                <Typography className="paragarph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
                <Box className='innerBox'>
                  <img src={img2} alt="img1" className="imges" />
                  <Typography className="author">Jamie Matthew</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <img src={staticImg1} alt="staticImg" className="staticImg" />
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "96px 0",
  position: "relative",
  zIndex: 0,
  "& .author":{
    color: "#0f0f0f",
    opacity:0.8,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "1.5em",
    textAlign: "left",
  },
  "& .imges":{
   height:48,
   width:48,
    },
  "& .paragarph": {
    color: "#0f0f0f",
    opacity:0.8,
    fontSize: 16,
    fontWeight: 400,
    margin: "0 0 16px",
    lineHeight: "1.5em",
    textAlign: "left",
  },
  "& .rating":{
  color: '#e48d8b',
  fontSize:25,
  margin:'0 0 24px',
  },
  "& .innerBox":{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  "& .mainBox": {
    padding: 32,
    margin: "0 22px 32px",
    background: "#ededed",
    color: "#0f0f0f",
  },
  "& .heading": {
    color: "#0f0f0f",
    fontSize: 38,
    fontWeight: 700,
    margin: "0 0 16px",
    lineHeight: "1.2em",
    marginTop: 0,
    textAlign: "center",
  },
  background: "#fff",
  "& .staticImg": {
    position: "absolute",
    bottom: 0,
    right: 100,
  },
});

export default Student;
