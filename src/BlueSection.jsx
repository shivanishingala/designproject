import { Padding } from "@mui/icons-material";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";

const skyImg1 =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7feae8b035e_Light%20Blue%20Box.svg";
const pinkImg =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a781f98b035f_Pink%20Box.svg";
const BlueSection = () => {
  const array = [
    {
      points: "6",
      title: "Chapters",
    },
    {
      points: "56+",
      title: "Podcast Ideas",
    },
    {
      points: "28",
      title: "Videos",
    },
    {
      points: "4",
      title: "Free Resources",
    },
    {
      points: "$8k",
      title: "Worth of Value",
    },
  ];
  return (
    <>
      <MainStyle>
        <Container className="blueContainer">
          <Grid container className="mainGrid">
            <Grid item lg={12} md={12} sm={12}>
              <Typography className="headnig2" variant="h2">
                What's Included?
              </Typography>
            </Grid>
            <Grid container spacing={7} className="pointsGrid">
             {array.map((val,idx)=>{
                return <Grid key={idx} lg={2} md={2} sm={4} xs={6}>
                   <Typography className="points">{val.points}</Typography>
                   <Typography className="title">{val.title}</Typography>
                </Grid>
             })}
            </Grid>
          </Grid>
        </Container>
        <Box>
          <img src={pinkImg} alt="pinkImg" className="pinkImg" />
        </Box>
        <Box>
          <img src={skyImg1} alt="skyImg1" className="skyImg1" />
        </Box>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
    marginTop:96,
  background: "#017cff",
  height: "426px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "@media(max-width: 899px)": {
      height:'568px',
      display:'flex',
      alignItems: "flex-start",
      justifyContent: "center",
    }, 
    "@media(max-width: 599px)": {
        height:'515px',
        display:'flex',
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop:'10px',
      }, 

  "& .mainGrid":{
    display:'flex',
    gap:100,
    "@media(max-width: 325px)": {
     gap:30,
     display: "flex",
     justifyContent: "center", 
         },
  },
  "& .pointsGrid":{
    display:'flex',
    justifyContent:'space-around',
    "@media(max-width: 768px)": {
        display:'flex',
        justifyContent: "flex-start",
      }, 
     
  },
  "& .title":{
 fontSize:'18px',
 color:'#ffffff',
 display:'flex',
 justifyContent:'center',
 marginBottom:'16px',
 "@media(max-width: 425px)": {
   fontSize:'15px',
    }, 
  },
  "& .points":{
 fontSize:'80px',
 fontWeight:700,
 color:'#ffffff',
 display:'flex',
 justifyContent:'center',
 "@media(max-width: 602px)": {
   fontSize:'48px',
    }, 
  },
  "& .skyImg1": {
    width: "60px",
    height: "60px",
    position: "absolute",
    bottom: "0%",
    right: "10%",
    "@media(max-width: 325px)": {
        height:'40px',
        width:'40px',  
        }, 
  },
  "& .pinkImg": {
    width: "60px",
    height: "60px",
    position: "absolute",
    top: 0,
    left: 0,
    "@media(max-width: 325px)": {
        height:'40px',
        width:'40px',  
        }, 
  },
  "& .blueContainer": {
    width: "100%",
    height: "235px",
    display: "flex",
    justifyContent: "center",
    "@media(max-width: 768px)": {
     paddingTop:'80px',      }, 
  },
  "& .headnig2": {
    width: "100%",
    color: "#ffffff",
    fontSize: "38px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    marginBottom:'10px',
    "@media(max-width: 325px)": {
       width:'100%',
       fontSize:'30px', 
      
       }, 
  },
});
export default BlueSection;
