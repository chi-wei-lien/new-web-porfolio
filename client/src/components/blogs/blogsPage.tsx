//import custom react element
import MyNavbar from '../navbar/navbar';
import SelfPortrait from '../index/SelfPortrait';
import ToolBar from '../index/ToolBar';
import Footer from '../footer/newfooter';
import Blogs from './blogs';

import { Row, Container, Col } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row>
          <Col className="codeBG">
            <Container className="login">
              <Container className="login-button-container">
                <h1>Blogs</h1>
                <p>Scroll down! These are my blogs. I'll post one per week. Hope you like them.</p>
              </Container>
            </Container>
          </Col>
          <SelfPortrait />
        </Row>
        <ToolBar />
        <Blogs />
        <Footer />
      </Container>
    </>
  );
}

export default Error;