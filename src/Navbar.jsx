import React from "react";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  styled,
} from "@mui/material";
import navImg from "./assets/logo.svg";

const Navbar = () => {
  return (
    <MainStyle>
      <Container maxWidth="lg">
        <Grid container xs={12} className="nav_div">
          <Grid item className="nav_inner_grid">
            <img src={navImg} alt="navImg" className="nav_img" />
          </Grid>
          <Grid item className="nav_inner_grid">
            <Hidden smDown>
              <Typography className="nav_h3">
                LAUNCH A SUCCESSFUL PODCAST
              </Typography>
            </Hidden>
          </Grid>
          <Grid item className="nav_inner_grid">
            <button className="nav_btn">Enroll Now</button>
          </Grid>
        </Grid>
      </Container>
    </MainStyle>
  );
};

const MainStyle = styled(Box)({
  background: "#fbfbfb",
  position: "sticky",
  top: 0,
  zIndex: 9999,

  "& .nav_h3": {
    color: "#757575",
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: 0.6,
  },
});

export default Navbar;
