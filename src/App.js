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
      <div className="frontpage">
        <Router className="Layout">
          <Navbar bg="light" variant="light" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand>
                    <img src={logo} alt="my logo"/>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
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
