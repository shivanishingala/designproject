import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  styled,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import QuestionData from "./DataQuestion";

const staticImg =
  "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a781f98b035f_Pink%20Box.svg";
const Question = () => {
  return (
    <>
      <MainStyle>
        <Container className="mainContainer">
          <Typography className="heading" variant="h2">
            Any Questions?
          </Typography>
          {QuestionData.map((item) => (
            <Grid container className="accodianGrid" key={item.id}>
              <Grid item xs={12} sm={12}>
                <Accordion className="accodian1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{transition:'2s'}}/>}
                    aria-controls="panel1-content"
                    className="panel1-header"
                  >
                    {item.title}
                  </AccordionSummary>

                  {item.subTitle.map((sub) => (
                    <AccordionDetails className="accordianDetail">
                      {sub.answer}
                    </AccordionDetails>
                  ))}
                </Accordion>
              </Grid>
            </Grid>
          ))}
        </Container>
        <img src={staticImg} alt="staticImg" className="staticImg" />
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "120px 0px",
  position: "relative",
  "& .mainContainer": {
    width:900,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media(max-width: 900px)": {
        width: "100%",
      },
  },
  "& .accordianDetail":{
    color: "#0f0f0f",
    fontWeight:400,
    fontSize: 18,
    marginBottom:16,  
  },
  "& .panel1-header":{
    padding:'20px 0px 12px',
    color: "#0f0f0f",
    fontWeight:600,
    fontSize: 22,
    marginBottom: 4,
    borderBottom: '1px solid #dbdbdb',
  },
  "& .heading": {
    width:295,
    color: "#0f0f0f",
    fontWeight:700,
    fontSize: 38,
    marginBottom: 26,
    "@media(max-width: 320px)": {
        width: '100%',
        fontSize: 30,
      },
  },
  "& .staticImg": {
    position: "absolute",
    top: 0,
    left: 0,
  },
  "& .css-1086bdv-MuiPaper-root-MuiAccordion-root":{
    boxShadow:'none',
    
  },
});

export default Question;
