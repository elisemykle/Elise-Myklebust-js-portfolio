import React from 'react';
import './css/style.scss';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

import {Container, Nav, Navbar} from "react-bootstrap";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cv from "./components/cv/Cv";
import logo from "./image/icon.png"

function App() {
  return (
      <div className="front page">
        <Router className="Layout">
        <div className="nav__container">
            <img src={logo} className="logo__icon" alt="logo img"/>
            <div className="hero__heading">
                <h1>Elise Myklebust</h1>
                <h2>Portfolio</h2>
                <div className="heading__scrolldown">
                <a href="#content">Scroll down</a>
                </div>
            </div>
        </div>
        <Navbar className="nav__bar" bg="transparent" variant="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" exact className="nav__link">HOME</NavLink>
              <NavLink to="/About" exact className="nav__link">ABOUT</NavLink>
              <NavLink to="/Cv" exact className="nav__link">CV</NavLink>
              <NavLink to="/Contact" className="nav__link">CONTACT</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/cv">
                <Cv/>
              </Route>
            </Switch>
        </Container>
    </Router>
  </div>
  );
}

export default App;
