import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Comman from "./Comman";
import { ThemeProvider, createTheme } from "@mui/material";
import Data from "./Data";
import Content from "./Content";
import BlueSection from "./BlueSection";
import Course from "./Course";
import WeekCourse from "./WeekCourse";
import NavyBlue from "./NavyBlue";
import Question from "./Question";
import Prodcast from "./Prodcast";
import Student from "./Student";
import Footer from "./Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Comman />
      <Data/>
      <Content/>
      <BlueSection/>
     <Course/>
     <WeekCourse/>
     <NavyBlue/>
     <Question/>
     <Prodcast/>
     <Student/>
     <Footer/>
    </ThemeProvider>
  );
}

export default App;
