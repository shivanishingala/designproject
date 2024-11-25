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
import AccodianData from "./AccodianData";

const Course = () => {
  return (
    <>
      <MainStyle>
        <Container sx={12} className="mainContainer">
          <Typography className="heading" variant="h2">
            The Course Curriculum
          </Typography>
          {AccodianData.map((item) => (
            <Grid container className="accodianGrid" key={item.id}>
              <Grid item xs={12} sm={12}>
                <Accordion className="accodian1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    className="panel1-header"
                  >
                    {item.title}
                  </AccordionSummary>

                  {item.subMenu.map(
                    (sub) => (
                      console.log(sub, "ssssss"),
                      (
                        <AccordionDetails className="accordianDetail">
                          {sub?.resource && (
                            <>
                              <span className="resource">Resource</span>
                              <span>{sub.name}</span>
                            </>
                          )}

                          {sub?.preview && (
                            <>
                              <span>{sub.name}</span>
                              <a
                                className="preview"
                                href={sub.url}
                                target="_blank"
                              >
                                preview
                              </a>
                            </>
                          )}
                          {!sub.resource && !sub.preview && (
                            <span>{sub.name}</span>
                          )}
                        </AccordionDetails>
                      )
                    )
                  )}
                </Accordion>
              </Grid>
            </Grid>
          ))}
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  background: "#fbfbfb",
  marginTop:0,
  padding: "96px 0px",
  "& .accodian1": {
    width: "100%",
  },
  "& .resource": {
    background: "#fee",
    color: "#d87775",
    fontSize: "15px",
    fontWeight: 600,
    marginRight: 10,
  },
  "& .preview": {
    position: "absolute",
    right: "20px",
    fontWeight: 500,
    textDecoration: "none",
    color: "#017cff",
  },
  "& .mainContainer": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .heading": {
    fontSize: "38px",
    fontWeight: 700,
    color: "#0f0f0f",
    textAlign: "center",
    marginBottom: 50,
  },
  "& .accodianGrid ": {
    width: "600px",
    padding: "10px 24px 4px",
    "@media(max-width: 620px)": {
      width: "100%",
    },
    "& .panel1-header": {
      background: "#ededed",
      color: "#464646",
      fontSize: "20px",
      lineHeight: "1.5em",
      fontWeight: "500",
    },
    "& .accordianDetail": {
      position: "relative",
      marginBottom: "12px",
      borderBottom: "1px solid #ededed",
    },
    "& .css-1086bdv-MuiPaper-root-MuiAccordion-root": {
      boxShadow: "none",
    },
  },
});

export default Course;
