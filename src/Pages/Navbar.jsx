import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import profileImg from "../assets/Images/marew.jpeg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  let Navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const getButtonColor = (path) => {
    if (location.pathname === path) {
      return "#00adb5"; // Set the desired active button color here
    }
    return "inherit";
  };
  let navItems = [
    { Title: "Home", path: "/" },
    { Title: "About", path: "/about" },
    { Title: "Projects", path: "/projects" },
    { Title: "Experiance", path: "/experiance" },
    { Title: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          backgroundColor: "white !important",
          boxShadow: "none",
        }}
      >
        <Box
          style={{
            display: "flex ",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            >
              <img
                onClick={() => {
                  Navigate("/");
                }}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                src={profileImg}
              />
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  color: "black",
                  bgcolor: getButtonColor(item.path),
                  "&:hover": {
                    color: "white",
                    bgcolor: "black", // Set the desired hover color here
                  },
                }}
              >
                {item.Title}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }} // Show the IconButton on small devices, hide on md and larger
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img style={{ height: "50px", width: "50px" }} src={profileImg} />
          </Box>
        </Box>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/projects"
            onClick={toggleDrawer}
          >
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={toggleDrawer}
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
