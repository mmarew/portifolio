import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Experiance from "./Pages/Experiance";

function App() {
  const location = useLocation();
  console.log("first location", location);

  useEffect(() => {
    const element = document.getElementById(location.pathname.replace("/", ""));
    console.log("first element", element);
    if (location.pathname == "/") {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div id="home">
        <br /> <br />
        <Home />
        <br /> <br />
        <br /> <br />
      </div>
      <div id="about">
        <About />
        <br /> <br />
        <br /> <br />
      </div>
      <div id="projects">
        <Projects />
        <br /> <br />
        <br /> <br />
      </div>
      <div id="experiance">
        <Experiance />
        <br /> <br />
        <br /> <br />
      </div>
      <div id="contact">
        <Contact />
        <br /> <br />
        <br /> <br />
      </div>
    </div>
  );
}

export default App;
