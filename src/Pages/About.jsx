import React from "react";
import { Typography, Box, Grid, useTheme, Button } from "@mui/material";
import "../Css/About.css";
import profileImages from "../assets/Images/Profile.jpg";
import ResumeFile from "../assets/Images/Profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import elipseImg from "../assets/Images/Elipse.svg";
import nextJSICON from "../assets/Images/devicon_nextjs-wordmark.svg";
import JSICON from "../assets/Images/devicon_javascript.svg";
import TSICON from "../assets/Images/devicon_typescript.svg";
import MYSQLICON from "../assets/Images/logos_mysql.svg";
import JAVAICON from "../assets/Images/devicon_java.svg";
import POSTGRESSQL from "../assets/Images/devicon_postgresql-wordmark.svg";
import FLUTERICON from "../assets/Images/logos_flutter.svg";
import CSHARP from "../assets/Images/logos_c-sharp.svg";

function About() {
  const theme = useTheme();
  let Navigate = useNavigate();
  return (
    <Box sx={{ p: 4, overflow: "hidden" }}>
      <Typography variant="h4" component="h2">
        About Me
      </Typography>
      <br />
      <Grid container spacing={2} alignItems="">
        <Grid className="leftSideAbout" item xs={12} sm={4}>
          <img
            src={`${profileImages}`}
            alt="Profile"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </Grid>
        <Grid item xs={12} sm={8} position={"relative"}>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px" }}
              variant="h4"
              component="h2"
              gutterBottom
            >
              WHO'S
            </Typography>{" "}
            <Typography variant="h4" className="lemonColor">
              MAREW?
            </Typography>
          </Box>
          <Typography variant="body1">
            <p>
              As a child, I dreamt of becoming a technocrat, which led me to
              Bahir Dar University. However, my path shifted, and I graduated in
              Economics. I began my career as a tax collector in Dire Dawa but
              never lost sight of my tech dreams.
            </p>
            <br />
            <p>
              Self-learning became my compass, and with unwavering dedication, I
              evolved into a full-stack web and mobile app developer. Now, I'm
              actively engaged in a project and teaching at Evangadi Full Stack
              Development School.
            </p>
            <br />
            <p>
              Inspiring others to flourish in tech is my passion. Guiding
              students and contributing to their growth brings immense
              satisfaction. This journey is transformative, and I'm eager for
              what lies ahead.
            </p>
            <br />
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ marginRight: "20px" }}
                variant="h4"
                component="h2"
                gutterBottom
              >
                What I
              </Typography>{" "}
              <Typography variant="h4" className="lemonColor">
                Work
              </Typography>{" "}
              <Typography sx={{ marginLeft: "20px" }} variant="h4">
                {" "}
                With{" "}
              </Typography>
            </Box>
            <Box className="iconsWhatIwork">
              <img src={nextJSICON} />
              <img src={JSICON} />
              <img src={TSICON} />
              <img src={MYSQLICON} />
              <img src={JAVAICON} />
              <img src={POSTGRESSQL} />
              <img src={FLUTERICON} />
              <img src={CSHARP} />
            </Box>
            <div className="elipseImgRightSide">
              <img style={{ width: "100%" }} src={elipseImg} alt="elipse" />
            </div>
            <p>
              <Button
                onClick={() => Navigate("/contact")}
                sx={{ margin: "0 10px" }}
                variant="contained"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/contact"
                  className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                >
                  Hire Me
                </Link>
              </Button>
              <Button variant="contained">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={ResumeFile}
                  className="btn btn-secondary px-4 py-2 btn-sm"
                  download
                >
                  Download CV
                </a>
              </Button>
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
