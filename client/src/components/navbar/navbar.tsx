import { Navbar, Container, Nav } from 'react-bootstrap';
import '../../style/navbar/navbar.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MyNavbar = () => {

  /**
   * Change the navbar if the user is logged in
   */
  if (localStorage.getItem('user')) {
    return (
      <>
        <Navbar expand="lg" className="my-nav">
          <Container>
            <Navbar.Brand as={Link} to="/">Chi-Wei Lien</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="basic-navbar-nav">
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                <Nav.Link as={Link} to="/login">Signed in as: {localStorage.getItem('user')}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      // <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="my-navbar" fixed="top">
      //   <Container>
      //     <Navbar.Brand href="/">Willy, Chi-Wei Lien</Navbar.Brand>
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav className="me-auto">
      //       </Nav>
      //       <Nav>
      //         <Nav.Link href="/who_am_i">who_am_i()</Nav.Link>
      //         <Nav.Link href="/blogs">show_blogs()</Nav.Link>
      //         <Nav.Link as={Link} to="/login">hi({localStorage.getItem('user')})</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>
    );
  }

  /*
   * the original look of the navbar when the user is not logged in
   */

  return (
    <>
    <Navbar expand="lg" className="my-nav">
      <Container>
        <Navbar.Brand as={Link} to="/">Chi-Wei Lien</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="basic-navbar-nav">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavbar;