import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import SmartOrder from "../assets/Images/SmartOrder.jpg";
import transportOrder from "../assets/Images/transportationMap.png";
import StockIcons from "../assets/Images/stock.jpg";
import netflexIcon from "../assets/Images//Netflex.jpg";
import amazoneIcon from "../assets/Images/Amazone.jpg";
import NoteIcon from "../assets/Images/notebook.png";

function Projects() {
  const myProjectsList = [
    {
      id: 1,
      title: "Hotel food delivery",
      imgSrc: SmartOrder,
      url: "https://hotel.masetawosha.com/",
      description: "It is smart hotel food ordering system  ",
      gitUr: "",
    },
    {
      id: 2,
      title: "Transport system",
      imgSrc: transportOrder,
      url: "https://passanger.masetawosha.com/",
      description: "It is digital transportation system ",
    },
    {
      id: 3,
      title: "Stock management system",
      url: "https://stock.masetawosha.com/",
      imgSrc: StockIcons,
      description: "It is smart stock management system.",
    },
    {
      id: 4,
      title: "Netflix clone project",
      url: "https://netflixclone-68da8.web.app/",
      imgSrc: netflexIcon,
      description: "Netflix clone trainning project.",
    },
    {
      id: 5,
      title: "Amazone clone project in react",
      url: "https://eclone-c088c.web.app/",
      imgSrc: amazoneIcon,
      description: "Amazone clone training project. ",
    },
    {
      id: 6,
      title: "Social media platform",
      url: "https://masetawosha.com",
      imgSrc: NoteIcon,
      description: "Social media platform ",
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{ textAlign: "center" }}
        variant="h4"
        component="h2"
        gutterBottom
      >
        Projects
      </Typography>
      <Grid container spacing={2}>
        {myProjectsList.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardContent>
                <Typography sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ height: "40vh", margin: "auto", width: "100%" }}
                    src={project.imgSrc}
                  />
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    backgroundColor: "rgba(0, 173, 181, 0.5)",
                    color: "white",
                    padding: "20px ",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  {project.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "300px",
                    margin: "10px auto",
                  }}
                >
                  <Chip
                    label="React"
                    sx={{ backgroundColor: "#00ADB5", color: "white" }}
                  />
                  <Chip
                    label="Node "
                    sx={{ backgroundColor: "#00ADB5", color: "white" }}
                  />
                  <Chip
                    label="MYSQL"
                    sx={{ backgroundColor: "#00ADB5", color: "white" }}
                  />
                </Box>
                <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                  {project.description}
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  <Button
                    sx={{
                      color: "white",
                      width: "200px",
                      margin: "20px auto",
                      backgroundColor: "#00ADB5",
                    }}
                    onClick={() => {
                      window.location.href = project.url;
                    }}
                  >
                    View Project
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
