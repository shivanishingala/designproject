import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
const logoImg =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a797bd8b0367_White%20Quote%20Mark.svg";
const peopleImg =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a751ed8b0366_Ellipse.png";
const NavyBlue = () => {
  return (
    <>
      <MainStyle>
        <Container className="mainContainer">
          <Grid container spacing={2} className="gridContainer">
            <img src={logoImg} alt="logoImg" className="logoImg" />
            <Typography className="defination">
              At some point you have to say, damn, they shouldn't be giving out
              all the info I'm learning, it's too much of a shortcut.<span className="spanTag">And yet,
              there is all it, packaged up in an amazing course.</span> 
            </Typography>
            <Box className="imgBox">
            <img src={peopleImg} alt="peopleImg" className="peopleImg" />
            <Typography className="authorName">Jamie Matthew</Typography>
            </Box>
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "96px 0px",
  background: "#194677",
  display:'flex',
  justifyContent:'center',
  "& .imgBox": {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  justifyContent:'center',
    },
  "& .peopleImg": {
    width:100,
    height:100,
    marginBottom:8,
     },
  "& .authorName": {
    fontSize:18,
    color:'#ffffff',
     },
  "& .spanTag": {
   color:'#f0a3a2',
    },
  "& .defination": {
    width:'100%',
    fontSize:25,
    color:'#ffffff',
    fontStyle:'italic',
    fontWeight:600,
    marginBottom:12,
    textAlign:'center',
    "@media(max-width: 760px)": {
        fontSize:"20px",
      },
  },
  "& .mainContainer": {
    width:'700px',
    padding:"10px",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    "@media(max-width: 760px)": {
        width: "100%",
        padding:"40px",
      },
  },
  "& .gridContainer": {
    width:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  },
  "& .logoImg":{
    width:51,
    height:47,
    marginBottom:24,
  },
});

export default NavyBlue;
