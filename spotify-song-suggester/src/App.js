import React from "react";
import { Fragment } from "react";
import "./App.css";
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
          <div className="Main">
            <Navbar color="dark" light expand="md"  >
              <NavbarBrand href="/" style={{ color: '#1DB954', marginRight: '1050px' }}>
                Symphinity
            </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink>
                      <Link style={{ color: '#1DB954' }} to="/">Home</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink >
                      <Link style={{ color: '#1DB954' }} to="/AboutUs">About Us</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink >
                      <Link style={{ color: '#1DB954' }} to="/Playlists">Saved Playlists</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink >
                      <Link style={{ color: '#1DB954' }} to="/Search">Search</Link>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>

            <Form />
            {/* <Route path="/AboutUs" component={AboutUs} /> */}
            <Route path="/Playlists" component={Playlists} />
            <Route path="/Search" component={SearchResults} />
          </div>
        </Router>
      </Fragment>
    );
  }
}
