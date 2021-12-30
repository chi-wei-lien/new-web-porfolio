import React from 'react';
import logo from './logo.svg';

//import custom react element
import MyNavbar from '../navbar/navbar';
import Login from './login';
import SelfPortrait from '../index/SelfPortrait';
import ToolBar from '../index/ToolBar';
import Projects from '../index/Projects';
import Footer from '../footer/newfooter';

import { Row, Container, Col } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row>
          <Login />
          <SelfPortrait />
        </Row>
        <ToolBar />
        <Projects />
        <Footer />
      </Container>
    </>
  );
}

export default LoginPage;