import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import "./Home.css";
import developersActivity from "../assets/Images/Developer activity-bro 1.png";
import elipseImg from "../assets/Images/Elipse.svg";
function Home() {
  const [text, setText] = useState("");
  const originalText = [
    `I am , `,
    <span className="lemonColor">Marew Masresha Abate</span>,
    ` a full
      stack web and mobile app developer breathing life into impossible projects
      and turning dreams into reality for the past `,
    <span className="lemonColor"> 5+ years. </span>,
    ` I currently work at `,
    <span className="lemonColor">Evagandi Bootcamp </span>,
    ` fostering new
      technologies and ideas.`,
  ];

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < originalText.length) {
        // setText((prevText) => prevText + originalText[i]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <>
      <img className="elipseImg" src={elipseImg} />
      <Grid className="home-wrapper" container padding={2} marginTop={15}>
        <Grid item xs={12} sm={6} md={6} className="leftSide">
          <div className="helloThere lemonColor">
            <p className="lemonColor">Hello there 👋</p>
          </div>
          <div className="description">
            <p>{originalText}</p>
          </div>
          <br />
          <br />
          <Button
            sx={{ backgroundColor: "rgb(0, 173, 81)" }}
            variant="contained"
          >
            My resume
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="rightSide">
          <img src={developersActivity} />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
