import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
const staticImg =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7feae8b035e_Light%20Blue%20Box.svg";
const bookmark =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7a4e68b0363_BookBookmark.svg";
  const bookmark2 = "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7fefb8b0362_Books.svg";
const Prodcast = () => {
  return (
    <>
      <MainStyle>
        <Container className="mainContainer" maxWidth="lg">
          <Typography className="heading">
            It's Time to Start Your Podcast
          </Typography>
          <Grid container spacing={-5}>
            <Grid item lg={6} md={6} sm={12} xs={12} className="cardGrid" >
              <Box className="card1">
                <img src={bookmark} alt="bookmark" className="bookmark" />
                <Typography variant="h3" className="heading1">
                  Essential
                </Typography>
                
                <Box component={"h1"} className="price-title">
                  $189
                  <Box component={"span"} className="priceMax">
                    $399
                  </Box>
                </Box>
                <Typography className="cardPara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button className="accessBtn">Get Access Now</Button>
                <Box className="listBox">
                  <span className="span">
                    <CheckIcon className="icon" /> 24 videos
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> 1 month free access
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> Helpful templates and
                    resources
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> All course updates for free
                  </span>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="cardGrid">
              <Box className="card1">
                <img src={bookmark2} alt="bookmark" className="bookmark" />
                <Typography variant="h3" className="heading1">
                Premium
                </Typography>
                
                <Box component={"h1"} className="price-title">
                $399
                  <Box component={"span"} className="priceMax">
                    $899
                  </Box>
                </Box>
                <Typography className="cardPara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button className="accessBtn">Get Access Now</Button>
                <Box className="listBox">
                  <span className="span">
                    <CheckIcon className="icon" /> 24 videos
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> 1 month free access
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> Helpful templates and
                    resources
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> All course updates for free
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> Access to all future courses
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> 1-on-1 help with the tutors
                  </span>
                  <span className="span">
                    <CheckIcon className="icon" /> Monthly catch-ups
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <img src={staticImg} alt="staticImg" className="staticImg" />
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "80px 0px",
  position: "relative",
  background: "#e48d8b",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "& .mainContainer":{
display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop:0,
  },
 "& .cardGrid":{
  display:'flex',
  justifyContent:'center',
  height:"fit-content",
 },
  "& .accessBtn":{
  height:43,
  width:'auto',
   background:'#017cff',
   color:"#ffffff", 
   fontSize: '17px',
   lineHeight:'1.5em',
   margin:'0 0 8px',
   padding:'8px 32px',
   fontWeight: 500,
   borderRadius:0,
   textAlign: "center",
   "&:hover": {
    background: "#0067d5",
    color: "#fff",
  },
  },
  "& .cardPara": {
    color: "#464646",
    fontSize: 18,
    margin:'0 0 16px',
    fontWeight: 400,
    lineHeight:'1.5em',
    width:'50%',
    textAlign: "center",
    "@media(max-width: 584px)": {
      width: "70%",
    },
  },
  "& .priceMax": {
    color: "#757575",
    fontSize: 22,
    textDecoration:'line-through',
    margin:'0 0 0 8px',
  },
  "& .price-title":{
    color: "#017cff",
    fontSize: 32,
    fontWeight: 600,
    margin:'0 0 32px',
  },
  "& .bookmark": {
    height: 40,
    width: 40,
    margin: "0 0 12px",
  },
  "& .heading1": {
    color: "#0464646",
    fontSize: 38,
    fontWeight: 700,
    margin: "0 0 16px",
  },
  "& .icon": {
    color: "#017cff",
  },
  "& .span": {
    display: "flex",
    gap: 10,
    color:'#464646',
    fontSize: 18,
    margin:'0 0 10px',
    padding:'0 0 0 30px',
    lineHeight:'1.4em',
  },

  "& .listBox": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginTop:'26px',
    height:'auto',
  },
  "& .gridContainer": {
    padding: "48px 48px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  "& .card1": {
   
    background: "#ffffff",
    color: "black",
    padding: "48px 0",
    width: "90%",
    marginTop: 80,
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    transition:'200ms',
    "@media(max-width: 898px)": {
      width: "100%",
    },
    "&:hover": {
     transform: 'translate(0px, -3px)',
    },
  },
  "& .staticImg": {
    position: "absolute",
    bottom: 0,
    left: 100,
  },
  "& .heading": {
    fontSize: 38,
    fontWeight: 700,
    margin: "0px 0px 16px",
    color: "#ffffff",
    textAlign: "center",
  },
});
export default Prodcast;
