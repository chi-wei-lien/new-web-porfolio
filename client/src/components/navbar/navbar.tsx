import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../style/navbar/navbar.css'

class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="my-navbar" fixed="top">
      <Container>
      <Navbar.Brand href="#home">Chi-Wei Lien</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#show_home">show_home()</Nav.Link>
          <Nav.Link href="#who_am_i">who_am_i()</Nav.Link>
          <Nav.Link href="#show_blogs">show_blogs()</Nav.Link>
          <Nav.Link href="#show_art_gallery">show_art_gallery()</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;