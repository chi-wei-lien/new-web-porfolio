//import custom react element
import MyNavbar from '../navbar/navbar';
import Login from './login';
import SelfPortrait from '../index/SelfPortrait';
import ToolBar from '../index/ToolBar';
import Projects from '../index/Projects';
import Footer from '../footer/newfooter';
import Loggedin from './loggedin';
import Admin from './admin';

import { Row, Container } from 'react-bootstrap';

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
        <MyNavbar />
        <Container fluid>
          <Row>
            <Admin />
            <SelfPortrait />
          </Row>
          <ToolBar />
          <Projects />
          <Footer />
        </Container>
      </>
    );
  }

  /**
   * show that user are logged in
   */
  if (localStorage.getItem('user')) {
    return (
      <>
        <MyNavbar />
        <Container fluid>
          <Row>
            <Loggedin />
            <SelfPortrait />
          </Row>
          <ToolBar />
          <Projects />
          <Footer />
        </Container>
      </>
    );
  }
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