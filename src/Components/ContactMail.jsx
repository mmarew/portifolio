import React from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import "../Pages/Contact.css";
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Create the email link
    const emailLink = `mailto:mmarew@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`;

    // Open the email client with the pre-filled email
    window.location.href = emailLink;

    // Reset the form fields
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField required label="Name" name="name" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            name="email"
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid textAlign={"end"} item xs={12}>
          <Button type="submit">Send</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Contact;
