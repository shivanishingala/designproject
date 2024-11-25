import {
  Box,
  Container,
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import logo from "./assets/logo.svg";
const URL1 = "https://mui.com/material-ui/react-rating/";
const URL2 = "https://html.designingmedia.com/folioflix/index.html#Contact";

const Footer = () => {
  return (
    <>
      <MainStyle>
        <Container>
          <Grid container xs={12} className="mainContainer">
            <Grid item lg={9} md={8} sm={6}>
              <Box>
                <img src={logo} alt="logo" className="logo" />
                <Typography className="content">
                  The last landing page you'll ever need to launch your next
                  course.
                </Typography>
                <Typography className="footer">
                  Built by
                  <a className="span" href={URL1} target="_blank">
                    Nikolai Bain.
                  </a>
                  Powered by
                  <a className="span" href={URL2} target="_blank">
                    Webflow.
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} className="boxContainer">
            <Grid container>
              <Grid>
                <List>
                  <ListSubheader className="listTitle">SITE</ListSubheader>
                  <ListItemText
                    className="listItem"
                    primary="Home"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="Contact"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="FAQs"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    style={{width:'50%',}}
                    primary="Terms & Conditions"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="Privacy Policy"
                  ></ListItemText>
                </List>
              </Grid>
              <Grid>
                <List>
                  <ListSubheader className="listTitle">ADMINE</ListSubheader>
                  <ListItemText
                    className="listItem"
                    primary="Style Guide"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="Licenses"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="Instructions"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="Password"
                  ></ListItemText>
                  <ListItemText
                    className="listItem"
                    primary="404"
                  ></ListItemText>
                </List>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  background: "#fbfbfb",
  padding: "64px 0",

  "& .listItem": {
    color: "#0f0f0f",
    fontSize: "13px",
    padding: "5px 0",
    fontWeight: 700,
    opacity: "0.9",
    "&:hover": {
      color: "#757575",
      opacity: "1",
      cursor: "pointer",
    },
  },
  "& .listTitle": {
    color: "#b1b1b1",
    opacity: "1",
    fontSize: "15px",
    margin: "0 0 12px",
    fontWeight: 500,
    letterSpacing: "1px",
    background: "#fbfbfb",
    display: "contents",
  },
  "& .boxContainer": {
    display: "content",
    justifyContent: "space-between",
  },
  "& .span": {
    borderBottomColor: "#87cdff",
    color: "#017cff",
    wordSpacing: 3,
    margin: "0 3px 0px",
  },
  "& .footer": {
    color: "#0f0f0f",
    fontSize: "14px",
    margin: "0 0 16px",
    fontWeight: 400,
    lineHeight: "1.4em",
    opacity: "0.75",
    wordSpacing: 1.5,
  },
  "& .content": {
    width:400,
    color: "#0f0f0f",
    fontSize: "18px",
    margin: "25px 0 16px",
    fontWeight: 400,
    lineHeight: "1.5em",
    "@media(max-width: 850px)": {
      width:'70%',
    },
  },
  "& .logo": {
    height: 30,
    width: 156,
    margin: "4px 0 0",
  },
  "& .css-116fatq-MuiTypography-root": {
    lineHeight: 1,
  },
});

export default Footer;
