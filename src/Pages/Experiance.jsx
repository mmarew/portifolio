import { Box, Typography } from "@mui/material";
import React from "react";

function Experiance() {
  let myExperiances = [
    {
      Title: " Junior tax collection Officer ",
      Office: " Customs and revenue Authority ",
      Duration: " 2011-2015 ",
    },
    {
      Title: "Manager ",
      Office: " Self Owned whole sales Company ",
      Duration: " 2015-2023 ",
    },
    {
      Title: "Full stack Instructor ",
      Office: " Evangadi Tech Company ",
      Duration: " 2023-present ",
    },
  ];
  return (
    <div style={{ padding: "50px" }}>
      <Typography component={"h1"} variant="h4" margin={"20px 0"}>
        My Experiances{" "}
      </Typography>
      <Box
        sx={{
          borderLeft: "3px solid #00adb5",
          position: "relative",
        }}
      >
        {myExperiances.map((Job) => (
          <div style={{ position: "relative", paddingBottom: "20px" }}>
            <span
              style={{
                position: "absolute",
                left: "-0.6rem",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#00adb5",
              }}
            ></span>
            <p style={{ paddingLeft: "40px" }}>
              {Job.Title} in {Job.Office} since {Job.Duration}
            </p>
          </div>
        ))}
      </Box>
    </div>
  );
}

export default Experiance;
