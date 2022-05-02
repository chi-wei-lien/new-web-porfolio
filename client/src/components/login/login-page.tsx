//import custom react element
import MyNavbar from '../navbar/navbar';
import Login from './login';
import Footer from '../footer/footer';
import Admin from './admin';

import { Row, Container, Col } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  /**
   * If the user is one of the admin
   * show edit blog page
   */
  if (localStorage.getItem('admin')?.localeCompare("true") == 0) {
    return (
      <>
        <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <MyNavbar />
            <Admin />
          </Col>
          <Col md={3}></Col>
        </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <MyNavbar />
            <Login />
          </Col>
          <Col md={3}></Col>
        </Row>
        </Container>
    </>
  );
}

export default LoginPage;