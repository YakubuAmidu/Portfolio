import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="sm">
        <Navbar.Brand href="#home">
          <div className="Link Link_tailor">Logo</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/#" className="Link Link_header">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/ProductScreen" className="Link Link_header">
                Product
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/ServicesScreen" className="Link Link_header">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/BlogScreen" className="Link Link_header">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/AboutScreen" className="Link Link_header">
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/ContactScreen" className="Link Link_header">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
