import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

function Layout() {
    return (
        <div className="frontpage">
            <Router className="Layout">
                <Navbar bg="light" variant="light" expand="lg">
                    <NavLink to="/" exact>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" exact className="nav-link">ABOUT</NavLink>
                            <NavLink to="/contactpage" className="nav-link">CONTACT</NavLink>
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
                        </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default Layout;
