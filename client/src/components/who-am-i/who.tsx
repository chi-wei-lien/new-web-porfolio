import React from 'react';
import logo from './logo.svg';

//import custom react element
import MyNavbar from '../navbar/navbar';
import Intro from './Intro';
import SelfPortrait from '../index/SelfPortrait';
import ToolBar from '../index/ToolBar';
import Projects from '../index/Projects';
import Footer from '../footer/Footer';

import { Row, Container, Col } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function WhoAmI() {
  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row>
          <Intro />
          <SelfPortrait />
        </Row>
        <ToolBar />
        <Projects />
        <Footer />
      </Container>
    </>
  );
}

export default WhoAmI;