import React, {useState, useEffect} from "react";
import { Fragment } from "react";
import "./App.css";
import Axios from 'axios';

import Form from "./components/dashboard";
import "./components/dashboard.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Playlists from "./components/playlists";
import SearchResults from "./components/search-results";
import Reg from "./components/Reg";
import Login from "./components/Login"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <Fragment>
        <Router>
          <Navbar color="dark" light expand="md">
            <NavbarBrand className="text-warning" href="/">
              Symphinity
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="text-danger">
                    <Link to="/">Home</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-danger">
                    <Link to="/AboutUs">About Us</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-danger">
                    <Link to="/Playlists">Saved Playlists</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-danger">
                    <Link to="/Search">Search</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-danger">
                    <Link to="/Login">Log In</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-danger">
                    <Link to="/Reg">Sign Up</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Form />
          {/* <Route path="/AboutUs" component={AboutUs} /> */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/Playlists" component={Playlists} />
          <Route path="/Search" component={SearchResults} />
          <Route path="/Reg" component={Reg} />
          <Route path="/Login" component={Login} />
        </Router>
      </Fragment>
    );
  }
}
