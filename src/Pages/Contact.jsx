import React from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import ContactMail from "../Components/ContactMail";
import GITICON from "../assets/Images/ri_github-fill.svg";
import PHONEICON from "../assets/Images/ic_baseline-phone.svg";
import EMAILICON from "../assets/Images/ic_outline-email.svg";
import TELEGRAMICON from "../assets/Images/iconoir_telegram.svg";
import mobileUserBro from "../assets/Images/Mobile user-bro 1.svg";

function Contact() {
  return (
    <Box sx={{ p: 4, margin: "0 auto" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact
      </Typography>
      {/* <hr /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Typography variant="h6" component="h3">
              Got a &nbsp;
            </Typography>
            <Typography variant="h6" component="h3" className="lemonColor">
              project?
            </Typography>
          </Box>
          <div>Let's bring life to yor project.</div>
          <div> Drop a message or give me a call.</div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
              margin: "20px 0",
            }}
          >
            <a href="https://github.com/mmarew/">
              <img style={{ height: "20px", width: "20px" }} src={GITICON} />
            </a>
            <a href="tel:+251922112480">
              <img style={{ height: "20px", width: "20px" }} src={PHONEICON} />
            </a>
            <a href="mailto:mmarew@gmail">
              <img style={{ height: "20px", width: "20px" }} src={EMAILICON} />
            </a>
            <a href="https://t.me/+251922112480">
              <img
                style={{ height: "20px", width: "20px" }}
                src={TELEGRAMICON}
              />
            </a>
          </Box>
          <ContactMail />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={mobileUserBro} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
