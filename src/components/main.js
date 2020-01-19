import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import About from "./pages/aboutme.js";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
